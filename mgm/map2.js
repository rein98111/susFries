// map2.js - Guitar to Kodoku to Aoi Hoshi (Hayakou Bootleg)
// BPM: 194 | Full Version Chart
window.currentSongMap = {
    title: "Guitar to Kodoku (Full Bootleg)",
    notes: [
        // --- [0:00 - 0:14] Intro: Silence / Ambient ---
        // (休息時間)

        // --- [0:14 - 0:27] Guitar Intro ---
        {time: 14515, cell: 5}, {time: 14824, cell: 10}, {time: 15133, cell: 6}, {time: 15443, cell: 9},
        {time: 15752, cell: 0}, {time: 16061, cell: 3}, {time: 16371, cell: 15}, {time: 16680, cell: 12},
        {time: 17300, cell: 0}, {time: 17454, cell: 4}, {time: 17608, cell: 8}, {time: 17762, cell: 12},
        {time: 17917, cell: 13}, {time: 18071, cell: 14}, {time: 18225, cell: 15},

        // --- [0:28 - 0:38] Pre-Chorus Kick ---
        ...generateStair(28453, 35000, 154), 

        // --- [0:39 - 0:41] "Tarinai Tarinai" Vocal Sync ---
        {time: 39123, cell: 0}, {time: 39432, cell: 5}, {time: 39742, cell: 10}, {time: 40051, cell: 15},
        {time: 40360, cell: 3}, {time: 40669, cell: 6}, {time: 40979, cell: 9}, {time: 41288, cell: 12},
        {time: 41597, cell: 5}, {time: 41597, cell: 6}, {time: 41906, cell: 9}, {time: 41906, cell: 10},

        // --- [0:42 - 1:04] Chorus 1 (The Kick & Snare) ---
        ...generateJump(42216, 54000, 309), 

        // --- [1:05 - 1:27] Verse 2 (Rhythmic Guitar) ---
        {time: 65000, cell: 0}, {time: 65154, cell: 1}, {time: 65308, cell: 2}, {time: 65462, cell: 3},
        {time: 67000, cell: 15}, {time: 67154, cell: 14}, {time: 67308, cell: 13}, {time: 67462, cell: 12},
        {time: 70000, cell: 5}, {time: 70154, cell: 9}, {time: 70308, cell: 10}, {time: 70462, cell: 6},

        // --- [1:28 - 1:50] First Climax: Staircases ---
        {time: 88041, cell: 0}, {time: 88118, cell: 1}, {time: 88195, cell: 2}, {time: 88272, cell: 3},
        {time: 88350, cell: 7}, {time: 88427, cell: 11}, {time: 88504, cell: 15}, {time: 88581, cell: 14},
        {time: 88658, cell: 13}, {time: 88736, cell: 12}, {time: 88813, cell: 8}, {time: 88890, cell: 4},
        {time: 89508, cell: 0}, {time: 89508, cell: 3}, {time: 89508, cell: 12}, {time: 89508, cell: 15},

        // --- [1:51 - 2:20] THE DROP (High Tech Glitch Section) ---
        // 這裡對應 Bootleg 最瘋狂的電音段落：大跨度震刀
        ...generateGlitch(111000, 140000, 154),

        // --- [2:21 - 2:40] Outro: Final Burn ---
        {time: 141000, cell: 0}, {time: 141000, cell: 15}, {time: 141309, cell: 3}, {time: 141309, cell: 12},
        {time: 142000, cell: 5}, {time: 142154, cell: 6}, {time: 142308, cell: 10}, {time: 142462, cell: 9},
        {time: 150000, cell: 0}, {time: 150309, cell: 5}, {time: 150618, cell: 10}, {time: 150927, cell: 15},

        // 結束標記 (與 YouTube 長度 2:43 對齊)
        {time: 163000, isEndOfMap: true}
    ]
};

// --- 譜面輔助生成器 (精確對位版) ---

// 1. 生成樓梯型陣型 (用於爆發)
function generateStair(start, end, step) {
    let p = []; let cur = start; let i = 0;
    let cells = [0, 1, 2, 3, 7, 11, 15, 14, 13, 12, 8, 4];
    while(cur < end) {
        p.push({time: Math.round(cur), cell: cells[i % cells.length]});
        cur += step; i++;
    }
    return p;
}

// 2. 生成對角跳躍 (用於副歌 Kick)
function generateJump(start, end, step) {
    let p = []; let cur = start; let i = 0;
    while(cur < end) {
        // 交替使用對角線 0+15 和 3+12
        if(i % 2 === 0) {
            p.push({time: Math.round(cur), cell: 0});
            p.push({time: Math.round(cur), cell: 15});
        } else {
            p.push({time: Math.round(cur), cell: 3});
            p.push({time: Math.round(cur), cell: 12});
        }
        cur += step; i++;
    }
    return p;
}

// 3. 生成 Glitch 段落 (亂打/震刀)
function generateGlitch(start, end, step) {
    let p = []; let cur = start; let i = 0;
    while(cur < end) {
        // 模擬 Jubeat 的「亂打」感，但保持手位合理性
        let pattern = [5, 10, 6, 9, 0, 15, 3, 12];
        p.push({time: Math.round(cur), cell: pattern[i % pattern.length]});
        cur += (i % 8 === 7) ? step * 2 : step; // 隨機加入切分停頓
        i++;
    }
    return p;
}
