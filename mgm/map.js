// map.js - The Ruby of Twilight (Jubeat Style Level 7)
window.currentSongMap = {
    metadata: {
        title: "The Ruby of Twilight",
        artist: "Cygnus",
        bpm: 176
    },
    notes: [
        // --- 0:00 - 0:15 (鋼琴引子：低強度) ---
        {time: 680, cell: 5}, {time: 1360, cell: 10}, {time: 2040, cell: 6}, {time: 2720, cell: 9},
        {time: 3400, cell: 0}, {time: 3400, cell: 3}, {time: 4760, cell: 12}, {time: 4760, cell: 15},
        {time: 6120, cell: 5}, {time: 6800, cell: 6}, {time: 7480, cell: 10}, {time: 8160, cell: 9},
        {time: 8840, cell: 4}, {time: 9520, cell: 11}, {time: 10200, cell: 7}, {time: 10880, cell: 8},

        // --- 0:16 - 0:38 (節奏切入：中強度) ---
        {time: 15000, cell: 0}, {time: 15340, cell: 5}, {time: 15680, cell: 10}, {time: 16020, cell: 15},
        {time: 16360, cell: 3}, {time: 16700, cell: 6}, {time: 17040, cell: 9}, {time: 17380, cell: 12},
        // 雙壓練習
        {time: 17720, cell: 5}, {time: 17720, cell: 6}, {time: 18400, cell: 9}, {time: 18400, cell: 10},
        {time: 19080, cell: 1}, {time: 19080, cell: 2}, {time: 19760, cell: 13}, {time: 19760, cell: 14},
        // 8分音符旋律
        {time: 20440, cell: 0}, {time: 20610, cell: 1}, {time: 20780, cell: 2}, {time: 20950, cell: 3},
        {time: 21120, cell: 7}, {time: 21290, cell: 11}, {time: 21460, cell: 15}, {time: 21630, cell: 14},

        // --- 0:39 - 1:05 (主歌 A：節奏感強化) ---
        // 此段落模擬旋律跳動
        ...generatePattern(22000, 44000, "zigzag"), 

        // --- 1:06 - 1:28 (第一段副歌 Drop：高強度) ---
        // 典型的 Level 7 擴散型
        {time: 66000, cell: 5}, {time: 66000, cell: 6}, {time: 66000, cell: 9}, {time: 66000, cell: 10}, // 中心四壓
        {time: 66340, cell: 0}, {time: 66340, cell: 3}, {time: 66340, cell: 12}, {time: 66340, cell: 15}, // 四角四壓
        {time: 67020, cell: 5}, {time: 67190, cell: 10}, {time: 67360, cell: 6}, {time: 67530, cell: 9},
        {time: 67700, cell: 0}, {time: 67870, cell: 4}, {time: 68040, cell: 8}, {time: 68210, cell: 12},
        // 連打
        {time: 68720, cell: 1}, {time: 68890, cell: 1}, {time: 69060, cell: 2}, {time: 69230, cell: 2},
        {time: 69400, cell: 13}, {time: 69570, cell: 13}, {time: 69740, cell: 14}, {time: 69910, cell: 14},

        // --- 1:29 - 1:50 (間奏：極低強度/休息) ---
        {time: 90000, cell: 5}, {time: 95000, cell: 10}, {time: 100000, cell: 6}, // 留白讓玩家喘息

        // --- 1:51 - 2:30 (主歌 B：變奏段) ---
        ...generatePattern(111000, 150000, "circle"),

        // --- 2:31 - 3:05 (最後大副歌 Climax：最高強度) ---
        // 加入大量同步雙壓與對角線切換
        {time: 151000, cell: 0}, {time: 151000, cell: 15}, {time: 151340, cell: 3}, {time: 151340, cell: 12},
        {time: 152020, cell: 5}, {time: 152190, cell: 6}, {time: 152360, cell: 10}, {time: 152530, cell: 9},
        {time: 153210, cell: 4}, {time: 153380, cell: 8}, {time: 153550, cell: 7}, {time: 153720, cell: 11},
        // 結尾前的 16 分小爆發
        {time: 180000, cell: 0}, {time: 180085, cell: 1}, {time: 180170, cell: 2}, {time: 180255, cell: 3},
        {time: 180340, cell: 7}, {time: 180425, cell: 11}, {time: 180510, cell: 15},

        // --- 3:06 - End (尾聲：漸弱) ---
        {time: 190000, cell: 5}, {time: 195000, cell: 10}, {time: 200000, cell: 6}, {time: 205000, cell: 9},
        {time: 207000, cell: -1} // 譜面結束標記
    ]
};

// 輔助函數：自動生成重複節奏型態 (為了節省代碼行數)
function generatePattern(start, end, type) {
    let p = [];
    let cur = start;
    let step = 680; // 每個音符間距 (BPM 176 下的 4 分音符)
    let i = 0;
    while(cur < end) {
        let cell = 0;
        if(type === "zigzag") cell = [0, 5, 10, 15, 12, 9, 6, 3][i % 8];
        if(type === "circle") cell = [5, 6, 10, 9][i % 4];
        p.push({time: Math.round(cur), cell: cell});
        cur += step;
        i++;
    }
    return p;
}
