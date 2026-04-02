// map.js - The Ruby of Twilight (Full Version - Level 7)
window.currentSongMap = {
    metadata: {
        title: "RUBY TWILIGHT",
        artist: "CYGNUS",
        bpm: 176
    },
    notes: [
        // --- 0:00 - 0:15 (Intro: Low Intensity) ---
        {time: 680, cell: 5}, {time: 1360, cell: 10}, {time: 2040, cell: 6}, {time: 2720, cell: 9},
        {time: 3400, cell: 0}, {time: 3400, cell: 3}, {time: 4760, cell: 12}, {time: 4760, cell: 15},
        {time: 6120, cell: 5}, {time: 6800, cell: 6}, {time: 7480, cell: 10}, {time: 8160, cell: 9},

        // --- 0:16 - 1:05 (Main Verse: Mid Intensity) ---
        ...generatePattern(15000, 65000, "zigzag", 680),

        // --- 1:06 - 1:28 (First Drop: High Intensity) ---
        {time: 66000, cell: 5}, {time: 66000, cell: 6}, {time: 66000, cell: 9}, {time: 66000, cell: 10},
        {time: 66340, cell: 0}, {time: 66340, cell: 3}, {time: 66340, cell: 12}, {time: 66340, cell: 15},
        ...generatePattern(67000, 88000, "random", 340),

        // --- 1:29 - 1:50 (Interlude: Break Time / No Notes) ---
        // 這裡刻意留白，符合音樂弱處不放音符的需求

        // --- 1:51 - 2:30 (Verse 2: Build up) ---
        ...generatePattern(111000, 150000, "circle", 680),

        // --- 2:31 - 3:05 (Final Climax: High Intensity) ---
        {time: 151000, cell: 0}, {time: 151000, cell: 15}, {time: 151340, cell: 3}, {time: 151340, cell: 12},
        ...generatePattern(152000, 185000, "chaos", 340),

        // --- 3:06 - End (Outro: Fade Out) ---
        {time: 195000, cell: 5}, {time: 200000, cell: 10}, {time: 205000, cell: 6}, {time: 210000, cell: 9},
        
        // --- 結束判定點 (設定在音樂結束約 207 秒處) ---
        {time: 207000, isEndOfMap: true} 
    ]
};

// 譜面自動生成工具函數
function generatePattern(start, end, type, step) {
    let p = [];
    let cur = start;
    let i = 0;
    while(cur < end) {
        let cell = 0;
        if(type === "zigzag") cell = [0, 5, 10, 15, 12, 9, 6, 3][i % 8];
        else if(type === "circle") cell = [5, 6, 10, 9][i % 4];
        else if(type === "random") cell = Math.floor(Math.random() * 16);
        else if(type === "chaos") cell = [0, 15, 3, 12, 5, 10, 6, 9][i % 8];
        
        p.push({time: Math.round(cur), cell: cell});
        cur += step;
        i++;
    }
    return p;
}
