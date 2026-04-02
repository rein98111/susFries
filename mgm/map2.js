<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Jubeat Simulator - Fixed Loader</title>
    <style>
        :root { --bg: #050508; --accent: #00f2ff; --grid-idle: #10101a; --grid-border: #1a1a2e; }
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
        body { margin: 0; background: var(--bg); color: white; font-family: 'Orbitron', sans-serif; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; }
        #ui { width: 90vmin; max-width: 550px; display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 2px solid var(--grid-border); }
        #game-container { position: relative; width: 90vmin; height: 90vmin; max-width: 550px; max-height: 550px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; padding: 12px; background: #000; border: 4px solid var(--grid-border); border-radius: 8px; touch-action: none; }
        .cell { position: relative; background: var(--grid-idle); border: 1px solid var(--grid-border); border-radius: 4px; }
        .cell.active { background: var(--accent); box-shadow: 0 0 20px var(--accent); }
        .note { position: absolute; inset: 10%; border: 2px solid white; border-radius: 4px; z-index: 2; box-shadow: 0 0 10px white; pointer-events: none; }
        .approach { position: absolute; inset: 0; border: 2px solid var(--accent); z-index: 1; transform: scale(2.5); opacity: 0; pointer-events: none; }
        #overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.95); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 100; text-align: center; }
        button { padding: 15px 40px; font-size: 1.2rem; background: transparent; color: var(--accent); border: 2px solid var(--accent); cursor: pointer; font-family: 'Orbitron'; clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%); }
        button:disabled { border-color: #444; color: #444; cursor: wait; }
        #status-text { font-size: 12px; color: #666; margin-top: 10px; text-transform: uppercase; }
    </style>
</head>
<body>

<div id="ui">
    <div>SCORE: <span id="score">000000</span></div>
    <div>COMBO: <span id="combo">0</span></div>
</div>

<div id="game-container">
    <div id="overlay">
        <h2 id="song-title">SYSTEM BOOTING</h2>
        <button id="start-btn" disabled>LOADING...</button>
        <div id="status-text">Waiting for map data...</div>
    </div>
</div>

<div id="player-target"></div>

<script>
    // 1. 選曲與資料初始化
    const mapId = prompt("請輸入譜面 ID (1 或 2)", "2");
    const videoIds = { "1": "yG-0HhHamRc", "2": "MRT-MKxlObE" };
    const targetVideo = videoIds[mapId] || videoIds["1"];
    
    let state = { score: 0, combo: 0, isPlaying: false, startTime: 0, noteIndex: 0, activeNotes: [] };
    const CONFIG = { approachTime: 800, hitWindow: 150 };

    // 2. 建立網格
    const container = document.getElementById('game-container');
    const startBtn = document.getElementById('start-btn');
    const statusText = document.getElementById('status-text');

    for(let i=0; i<16; i++) {
        const div = document.createElement('div');
        div.className = 'cell'; div.id = `c-${i}`;
        container.appendChild(div);
    }

    // 3. 核心加載序列
    function loadMapScript() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `map${mapId}.js?t=` + Date.now(); // 防止快取
            script.onload = () => {
                if (window.currentSongMap) {
                    statusText.innerText = "Map loaded. Initializing YouTube...";
                    resolve();
                } else {
                    reject("Map data structure error");
                }
            };
            script.onerror = () => reject(`File map${mapId}.js not found`);
            document.head.appendChild(script);
        });
    }

    // 4. YouTube API 控制
    let player;
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('player-target', {
            height: '0', width: '0',
            videoId: targetVideo,
            playerVars: { 'playsinline': 1, 'controls': 0, 'disablekb': 1 },
            events: {
                'onReady': () => {
                    startBtn.disabled = false;
                    startBtn.innerText = "START SESSION";
                    statusText.innerText = "Ready to play";
                    document.getElementById('song-title').innerText = window.currentSongMap.title || "UNKNOWN TRACK";
                },
                'onStateChange': (e) => {
                    // 當 YouTube 真正開始播放時才啟動遊戲邏輯
                    if(e.data === YT.PlayerState.PLAYING && !state.isPlaying) {
                        startGameLogic();
                    }
                }
            }
        });
    };

    // 5. 啟動遊戲
    async function init() {
        try {
            await loadMapScript();
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            document.head.appendChild(tag);
        } catch (err) {
            statusText.style.color = "red";
            statusText.innerText = "ERROR: " + err;
            console.error(err);
        }
    }

    startBtn.onclick = () => {
        document.getElementById('overlay').style.display = 'none';
        player.playVideo(); // 這裡觸發 YouTube 播放，隨後由 onStateChange 接手
    };

    function startGameLogic() {
        state.isPlaying = true;
        state.startTime = performance.now();
        requestAnimationFrame(gameLoop);
    }

    // 6. 遊戲主循環
    function gameLoop(now) {
        if(!state.isPlaying) return;
        const elapsed = now - state.startTime;
        const notes = window.currentSongMap.notes;

        while(state.noteIndex < notes.length && elapsed >= notes[state.noteIndex].time - CONFIG.approachTime) {
            const n = notes[state.noteIndex];
            if(n.isEndOfMap) {
                setTimeout(() => location.reload(), 3000);
                state.isPlaying = false;
                break;
            }
            spawnNote(n);
            state.noteIndex++;
        }

        state.activeNotes = state.activeNotes.filter(n => {
            const progress = (n.time - elapsed) / CONFIG.approachTime;
            if(progress > 0) {
                n.appEl.style.transform = `scale(${1 + progress * 1.5})`;
                n.appEl.style.opacity = 1 - progress;
            }
            if(elapsed > n.time + CONFIG.hitWindow) {
                n.el.remove(); n.appEl.remove();
                state.combo = 0; updateUI();
                return false;
            }
            return true;
        });
        requestAnimationFrame(gameLoop);
    }

    function spawnNote(note) {
        const cell = document.getElementById(`c-${note.cell}`);
        if(!cell) return;
        const el = document.createElement('div'); el.className = 'note';
        const appEl = document.createElement('div'); appEl.className = 'approach';
        cell.appendChild(el); cell.appendChild(appEl);
        state.activeNotes.push({ ...note, el, appEl });
    }

    // 觸控處理
    container.addEventListener('touchstart', (e) => {
        e.preventDefault();
        Array.from(e.changedTouches).forEach(t => {
            const el = document.elementFromPoint(t.clientX, t.clientY);
            if(el && el.classList.contains('cell')) {
                const id = parseInt(el.id.split('-')[1]);
                el.classList.add('active');
                setTimeout(() => el.classList.remove('active'), 100);
                
                const now = performance.now() - state.startTime;
                const hitIdx = state.activeNotes.findIndex(n => n.cell === id && Math.abs(now - n.time) < CONFIG.hitWindow);
                if(hitIdx !== -1) {
                    state.score += 500; state.combo++;
                    state.activeNotes[hitIdx].el.remove();
                    state.activeNotes[hitIdx].appEl.remove();
                    state.activeNotes.splice(hitIdx, 1);
                    updateUI();
                }
            }
        });
    });

    function updateUI() {
        document.getElementById('score').innerText = state.score.toString().padStart(6, '0');
        document.getElementById('combo').innerText = state.combo;
    }

    init(); // 啟動加載程序
</script>
</body>
</html>
