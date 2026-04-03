// map.js - 彌渡山歌 (PHONK)
// BPM: 128 (1拍 = 468ms, 1/2拍 = 234ms, 1/4拍 = 117ms)

window.SONG_MAP = {
    title: "彌渡山歌 (PHONK)",
    videoId: "szKsD6tIpA0",
    notes: [
        // --- [0:00 - 0:15] 前奏：低頻震動與氛圍 (預熱) ---
        {time: 0, cell: 0}, {time: 468, cell: 5}, {time: 936, cell: 10}, {time: 1404, cell: 15},
        {time: 1872, cell: 12}, {time: 2340, cell: 9}, {time: 2808, cell: 6}, {time: 3276, cell: 3},
        {time: 3744, cell: 0}, {time: 4212, cell: 1}, {time: 4680, cell: 2}, {time: 5148, cell: 3},
        {time: 5616, cell: 7}, {time: 6084, cell: 11}, {time: 6552, cell: 15}, {time: 7020, cell: 14},
        {time: 7488, cell: 13}, {time: 7956, cell: 12}, {time: 8424, cell: 8}, {time: 8892, cell: 4},
        {time: 9360, cell: 5}, {time: 9828, cell: 10}, {time: 10296, cell: 6}, {time: 10764, cell: 9},
        {time: 11232, cell: 0}, {time: 11700, cell: 15}, {time: 12168, cell: 3}, {time: 12636, cell: 12},
        {time: 13104, cell: 1}, {time: 13572, cell: 14}, {time: 14040, cell: 2}, {time: 14508, cell: 13},

        // --- [0:15 - 0:30] 人聲切入：山對山來崖對崖 ---
        {time: 15100, cell: 5}, {time: 15334, cell: 6}, {time: 15568, cell: 10}, {time: 15802, cell: 9},
        {time: 16270, cell: 5}, {time: 16504, cell: 6}, {time: 16738, cell: 10}, {time: 16972, cell: 9},
        {time: 17440, cell: 0}, {time: 17674, cell: 1}, {time: 17908, cell: 2}, {time: 18142, cell: 3},
        {time: 18610, cell: 7}, {time: 18844, cell: 11}, {time: 19078, cell: 15}, {time: 19312, cell: 14},
        {time: 19780, cell: 0}, {time: 20014, cell: 3}, {time: 20248, cell: 12}, {time: 20482, cell: 15},
        {time: 20950, cell: 5}, {time: 21184, cell: 10}, {time: 21418, cell: 6}, {time: 21652, cell: 9},
        {time: 22120, cell: 0}, {time: 22354, cell: 3}, {time: 22588, cell: 12}, {time: 22822, cell: 15},
        {time: 23290, cell: 5}, {time: 23524, cell: 10}, {time: 23758, cell: 6}, {time: 23992, cell: 9},
        {time: 24460, cell: 0}, {time: 24928, cell: 15}, {time: 25396, cell: 3}, {time: 25864, cell: 12},
        {time: 26332, cell: 1}, {time: 26800, cell: 14}, {time: 27268, cell: 2}, {time: 27736, cell: 13},
        {time: 28204, cell: 4}, {time: 28672, cell: 11}, {time: 29140, cell: 8}, {time: 29608, cell: 7},

        // --- [0:30 - 0:58] 第一次大 Drop 段 (純鼓點對位) ---
        // 這裡採用極密集的 8 分音符填充，保證打擊感
        ...Array.from({length: 120}, (_, i) => {
            const time = 30000 + (i * 234); // 每 0.23 秒一個音
            if (time > 58000) return null;
            // 模擬 Phonk 常見的「井字型」或「對角型」配置
            const cells = [0, 15, 3, 12, 5, 10, 6, 9, 1, 14, 2, 13, 4, 11, 7, 8];
            return {time: Math.round(time), cell: cells[i % 16]};
        }).filter(n => n !== null),

        // --- [0:58 - 1:28] 第二次人聲段 (蜜蜂本為採花死...) ---
        {time: 58500, cell: 0}, {time: 58734, cell: 5}, {time: 58968, cell: 10}, {time: 59202, cell: 15},
        {time: 59670, cell: 3}, {time: 59904, cell: 6}, {time: 60138, cell: 9}, {time: 60372, cell: 12},
        {time: 60840, cell: 1}, {time: 61074, cell: 2}, {time: 61308, cell: 13}, {time: 61542, cell: 14},
        {time: 62010, cell: 4}, {time: 62244, cell: 7}, {time: 62478, cell: 8}, {time: 62712, cell: 11},
        // 補齊 [1:03 - 1:28] 的鼓聲背景
        ...Array.from({length: 100}, (_, i) => {
            const time = 63180 + (i * 234);
            if (time > 128000) return null;
            const cells = [5, 10, 6, 9, 0, 15, 3, 12];
            return {time: Math.round(time), cell: cells[i % 8]};
        }).filter(n => n !== null),

        // --- [1:28 - 2:00] 結尾加速段與 Outro ---
        {time: 128500, cell: 0}, {time: 128617, cell: 1}, {time: 128734, cell: 2}, {time: 128851, cell: 3},
        {time: 128968, cell: 7}, {time: 129085, cell: 11}, {time: 129202, cell: 15}, {time: 129319, cell: 14},
        {time: 129436, cell: 13}, {time: 129553, cell: 12}, {time: 129670, cell: 8}, {time: 129787, cell: 4},
        {time: 130000, cell: 5}, {time: 130234, cell: 10}, {time: 130468, cell: 6}, {time: 130702, cell: 9},
        {time: 131170, cell: 0}, {time: 131404, cell: 15}, {time: 131638, cell: 3}, {time: 131872, cell: 12},
        // 最後的氛圍聲，緩慢減少音符
        {time: 135000, cell: 0}, {time: 140000, cell: 15}, {time: 145000, cell: 3}, {time: 150000, cell: 12},

        {time: 155000, isEndOfMap: true}
    ]
};
