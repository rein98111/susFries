// map2.js - Guitar to Kodoku to Aoi Hoshi (Hayakou Bootleg)
// BPM: 194 | 1 Beat ≈ 309ms | 1/2 Beat ≈ 154ms
window.currentSongMap = {
    title: "Guitar to Kodoku to Aoi Hoshi (Bootleg)",
    notes: [
        // --- 0:14 門鈴聲/電子引子 ---
        {time: 14515, cell: 5}, {time: 14824, cell: 6}, {time: 15133, cell: 10}, {time: 15443, cell: 9},
        {time: 15752, cell: 0}, {time: 16061, cell: 3}, {time: 16371, cell: 15}, {time: 16680, cell: 12},

        // --- 0:17 吉他切入 (1/2 拍快速連點) ---
        {time: 17300, cell: 0}, {time: 17454, cell: 4}, {time: 17608, cell: 8}, {time: 17762, cell: 12},
        {time: 17917, cell: 13}, {time: 18071, cell: 14}, {time: 18225, cell: 15},

        // --- 0:28 第一段鼓點爆發 (典型的 Jubeat 旋轉型) ---
        {time: 28453, cell: 5}, {time: 28607, cell: 6}, {time: 28761, cell: 10}, {time: 28916, cell: 9},
        {time: 29070, cell: 5}, {time: 29224, cell: 6}, {time: 29378, cell: 10}, {time: 29532, cell: 9},
        {time: 29686, cell: 1}, {time: 29841, cell: 2}, {time: 29995, cell: 13}, {time: 30149, cell: 14},

        // --- 0:39 "Tarinai Tarinai" (人聲對位) ---
        {time: 39123, cell: 0}, {time: 39432, cell: 5}, {time: 39742, cell: 10}, {time: 40051, cell: 15}, 
        {time: 40360, cell: 3}, {time: 40669, cell: 6}, {time: 40979, cell: 9}, {time: 41288, cell: 12},
        // 快速雙壓
        {time: 41597, cell: 5}, {time: 41597, cell: 6}, 
        {time: 41906, cell: 9}, {time: 41906, cell: 10},

        // --- 0:42 副歌開始 (Kick + Snare 強力對位) ---
        {time: 42216, cell: 0}, {time: 42525, cell: 15}, {time: 42835, cell: 0}, {time: 43144, cell: 15},
        {time: 43453, cell: 12}, {time: 43762, cell: 3}, {time: 44072, cell: 12}, {time: 44381, cell: 3},
        // 8分音符連打段
        {time: 44690, cell: 5}, {time: 44844, cell: 6}, {time: 44999, cell: 10}, {time: 45153, cell: 9},
        {time: 45307, cell: 5}, {time: 45462, cell: 6}, {time: 45616, cell: 10}, {time: 45770, cell: 9},
        
        // --- 0:54 間奏電吉他 (L型排列) ---
        {time: 54412, cell: 0}, {time: 54566, cell: 4}, {time: 54721, cell: 8}, {time: 54875, cell: 12}, {time: 55029, cell: 13},
        {time: 55647, cell: 3}, {time: 55801, cell: 7}, {time: 55956, cell: 11}, {time: 56110, cell: 15}, {time: 56264, cell: 14},

        // --- 1:15 歌曲橋段 (大跨度雙壓) ---
        {time: 75206, cell: 0}, {time: 75206, cell: 15}, 
        {time: 76443, cell: 3}, {time: 76443, cell: 12},
        {time: 77680, cell: 5}, {time: 77680, cell: 10},
        
        // --- 1:28 最後衝刺 (高難度：16分音符樓梯) ---
        {time: 88041, cell: 0}, {time: 88118, cell: 1}, {time: 88195, cell: 2}, {time: 88272, cell: 3},
        {time: 88350, cell: 7}, {time: 88427, cell: 11}, {time: 88504, cell: 15}, {time: 88581, cell: 14},
        {time: 88658, cell: 13}, {time: 88736, cell: 12}, {time: 88813, cell: 8}, {time: 88890, cell: 4},
        // 四角同時壓 (結尾)
        {time: 89508, cell: 0}, {time: 89508, cell: 3}, {time: 89508, cell: 12}, {time: 89508, cell: 15},

        // 結束標記
        {time: 163000, isEndOfMap: true}
    ]
};
