// map.js - ヒミツ恋ゴコロ / CHiCO with HoneyWorks
// BPM: 180 (1拍=333.3ms | 半拍=166.7ms | 1/4拍=83.3ms)
window.SONG_MAP = {
    title: "ヒミツ恋ゴコロ (Full Ver.)",
    videoId: "QymnTfHHC7c",
    notes: [
        // --- [0:00 - 0:10] Intro (人聲 & 鋼琴) ---
        {time: 200, cell: 5}, {time: 533, cell: 6}, {time: 866, cell: 10}, {time: 1200, cell: 9},
        {time: 1533, cell: 0}, {time: 1866, cell: 15}, {time: 2200, cell: 3}, {time: 2533, cell: 12},
        {time: 2866, cell: 6}, {time: 3200, cell: 10}, {time: 3533, cell: 5}, {time: 3866, cell: 9},
        {time: 5000, cell: 0}, {time: 5000, cell: 1}, {time: 5333, cell: 2}, {time: 5333, cell: 3},

        // --- [0:11 - 0:21] 全樂器進入 (鼓點對位) ---
        {time: 11000, cell: 0}, {time: 11166, cell: 1}, {time: 11333, cell: 2}, {time: 11500, cell: 3},
        {time: 11666, cell: 7}, {time: 11833, cell: 11}, {time: 12000, cell: 15}, {time: 12166, cell: 14},
        {time: 12333, cell: 13}, {time: 12500, cell: 12}, {time: 12666, cell: 8}, {time: 12833, cell: 4},
        {time: 13333, cell: 5}, {time: 13333, cell: 6}, {time: 13666, cell: 10}, {time: 13666, cell: 9},

        // --- [0:22 - 0:42] A-Melody 1 (歌詞對位) ---
        {time: 21800, cell: 5}, {time: 22133, cell: 6}, {time: 22466, cell: 10}, {time: 22800, cell: 9},
        {time: 24500, cell: 4}, {time: 24833, cell: 8}, {time: 25166, cell: 12},
        {time: 27000, cell: 1}, {time: 27333, cell: 2}, {time: 27666, cell: 13}, {time: 28000, cell: 14},
        {time: 30000, cell: 5}, {time: 30333, cell: 6}, {time: 30666, cell: 10}, {time: 31000, cell: 9},
        {time: 32500, cell: 0}, {time: 32833, cell: 3}, {time: 33166, cell: 15}, {time: 33500, cell: 12},

        // --- [0:43 - 0:53] B-Melody (情感醞釀) ---
        {time: 42800, cell: 0}, {time: 43133, cell: 4}, {time: 43466, cell: 8}, {time: 43800, cell: 12},
        {time: 45500, cell: 15}, {time: 45833, cell: 11}, {time: 46166, cell: 7}, {time: 46500, cell: 3},
        {time: 48000, cell: 5}, {time: 48166, cell: 6}, {time: 48333, cell: 10}, {time: 48500, cell: 9},
        {time: 49000, cell: 0}, {time: 49333, cell: 15}, {time: 49666, cell: 3}, {time: 50000, cell: 12},
        {time: 52000, cell: 5}, {time: 52166, cell: 6}, {time: 52333, cell: 10}, {time: 52500, cell: 9},

        // --- [0:54 - 1:15] Chorus 1 (第一段副歌 - 雙壓重點) ---
        {time: 54000, cell: 0}, {time: 54000, cell: 15}, 
        {time: 54666, cell: 3}, {time: 54666, cell: 12},
        {time: 55333, cell: 5}, {time: 55333, cell: 10},
        {time: 56000, cell: 6}, {time: 56333, cell: 9},
        {time: 58000, cell: 4}, {time: 58333, cell: 8}, {time: 58666, cell: 11}, {time: 59000, cell: 7},
        {time: 60500, cell: 1}, {time: 60500, cell: 2}, {time: 61500, cell: 13}, {time: 61500, cell: 14},
        {time: 64000, cell: 0}, {time: 64333, cell: 1}, {time: 64666, cell: 2}, {time: 65000, cell: 3},
        {time: 66000, cell: 12}, {time: 66333, cell: 8}, {time: 66666, cell: 4}, {time: 67000, cell: 0},

        // --- [1:16 - 1:35] 間奏 1 (16分音符亂打) ---
        {time: 76000, cell: 0}, {time: 76083, cell: 1}, {time: 76166, cell: 2}, {time: 76250, cell: 3},
        {time: 77000, cell: 7}, {time: 77083, cell: 11}, {time: 77166, cell: 15}, {time: 77250, cell: 14},
        {time: 78000, cell: 13}, {time: 78083, cell: 12}, {time: 78166, cell: 8}, {time: 78250, cell: 4},
        {time: 80000, cell: 5}, {time: 80166, cell: 6}, {time: 80333, cell: 10}, {time: 80500, cell: 9},

        // --- [1:36 - 1:56] A-Melody 2 (節奏變化) ---
        {time: 96000, cell: 0}, {time: 96333, cell: 5}, {time: 96666, cell: 10}, {time: 97000, cell: 15},
        {time: 98000, cell: 3}, {time: 98333, cell: 6}, {time: 98666, cell: 9}, {time: 99000, cell: 12},
        {time: 105000, cell: 1}, {time: 105333, cell: 2}, {time: 106000, cell: 5}, {time: 106333, cell: 6},

        // --- [1:57 - 2:15] B-Melody 2 (加強鼓點) ---
        {time: 117000, cell: 5}, {time: 117000, cell: 10}, {time: 117333, cell: 6}, {time: 117333, cell: 9},
        {time: 118000, cell: 0}, {time: 118333, cell: 1}, {time: 118666, cell: 2}, {time: 119000, cell: 3},
        {time: 125000, cell: 12}, {time: 125333, cell: 13}, {time: 125666, cell: 14}, {time: 126000, cell: 15},

        // --- [2:16 - 2:38] Chorus 2 (第二段副歌 - 滑動型陣型) ---
        {time: 136000, cell: 0}, {time: 136166, cell: 4}, {time: 136333, cell: 8}, {time: 136500, cell: 12},
        {time: 138000, cell: 15}, {time: 138166, cell: 11}, {time: 138333, cell: 7}, {time: 138500, cell: 3},
        {time: 140000, cell: 5}, {time: 140000, cell: 6}, {time: 141000, cell: 9}, {time: 141000, cell: 10},

        // --- [2:39 - 3:00] Bridge (橋段：寂靜到爆發) ---
        {time: 159000, cell: 5}, {time: 160000, cell: 6}, {time: 161000, cell: 10}, {time: 162000, cell: 9},
        {time: 175000, cell: 0}, {time: 175083, cell: 1}, {time: 175166, cell: 2}, {time: 175250, cell: 3},
        {time: 175333, cell: 4}, {time: 175416, cell: 5}, {time: 175500, cell: 6}, {time: 175583, cell: 7},

        // --- [3:01 - 3:25] Final Chorus (最後大副歌 - 16分音符亂打爆發) ---
        {time: 181000, cell: 0}, {time: 181000, cell: 15}, {time: 181333, cell: 3}, {time: 181333, cell: 12},
        {time: 182000, cell: 5}, {time: 182166, cell: 6}, {time: 182333, cell: 10}, {time: 182500, cell: 9},
        {time: 185000, cell: 0}, {time: 185083, cell: 4}, {time: 185166, cell: 8}, {time: 185250, cell: 12},
        {time: 186000, cell: 15}, {time: 186083, cell: 11}, {time: 186166, cell: 7}, {time: 186250, cell: 3},
        {time: 195000, cell: 5}, {time: 195000, cell: 6}, {time: 195000, cell: 9}, {time: 195000, cell: 10},

        // --- [3:26 - 3:39] Outro (結尾旋律) ---
        {time: 206000, cell: 0}, {time: 206333, cell: 5}, {time: 206666, cell: 10}, {time: 207000, cell: 15},
        {time: 210000, cell: 3}, {time: 210333, cell: 6}, {time: 210666, cell: 9}, {time: 211000, cell: 12},
        {time: 215000, cell: 5}, {time: 215166, cell: 6}, {time: 215333, cell: 10}, {time: 215500, cell: 9},
        {time: 218000, cell: 0}, {time: 218000, cell: 3}, {time: 218000, cell: 12}, {time: 218000, cell: 15},
        
        // 譜面結尾標記 (對應影片 3:39 左右)
        {time: 219000, isEndOfMap: true}
    ]
};
