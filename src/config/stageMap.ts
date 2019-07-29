/**
 * 地图数据解析：
 *
 * 注：[1, 1, 1, 1]表明一个 16 * 16 的格子按照 [左上, 右上, 右下, 左下] 的顺序被 8 * 8 的小块填满
 *
 * 0：空白
 * 1：[1, 1, 1, 1] 的砖块
 * 2：[1, 1, 0, 0] 的砖块
 * 3: [0, 1, 0, 1] 的砖块
 * 4: [0, 0, 1, 1] 的砖块
 * 5: [1, 0, 1, 0] 的砖块
 * 6: [1, 1, 1, 1] 的钢铁
 * 7: [1, 1, 0, 0] 的钢铁
 * 8: [0, 1, 0, 1] 的钢铁
 * 9: [0, 0, 1, 1] 的钢铁
 * 10: [1, 0, 1, 0] 的钢铁
 * 11: 16 * 16 的草丛
 * 12：16 * 16 的冰面
 * 13：河流
 * 14: 河流(为了达成河水流动的状态，会使用 13 和 14两张不同的图片去交替渲染，地图里面河流不管设置成 13 还是 14，都会默认从 13开始渲染)
 * 15: 完好的老家
 * 16: 被干掉的老家
 * 17: [0, 0, 0, 1] 的砖块
 * 18: [0, 0, 1, 0] 的砖块
 * 19: [0, 0, 0, 1] 的钢铁
 * 20: [0, 0, 1, 0] 的钢铁
 */
export const stageMapTemplate = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 18, 4, 17, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 15, 5, 0, 0, 0, 0, 0]
]

export default [
  // #1
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 6, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 2, 0, 2, 0, 1, 0, 1, 0],
    [0, 2, 0, 2, 0, 4, 0, 4, 0, 2, 0, 2, 0],
    [4, 0, 4, 4, 0, 2, 0, 2, 0, 4, 4, 0, 4],
    [7, 0, 2, 2, 0, 4, 0, 4, 0, 2, 2, 0, 7],
    [0, 4, 0, 4, 0, 1, 1, 1, 0, 4, 0, 4, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 2, 0, 2, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 18, 4, 17, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 3, 15, 5, 0, 0, 0, 0, 0]
  ],
  // #2
  [
    [0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 0, 0],
    [0, 1, 0, 6, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 6, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 6, 0, 0, 0],
    [11, 0, 0, 1, 0, 0, 6, 0, 0, 1, 11, 1, 6],
    [11, 11, 0, 0, 0, 1, 0, 0, 6, 0, 11, 0, 0],
    [0, 1, 1, 1, 11, 11, 11, 6, 0, 0, 11, 1, 0],
    [0, 0, 0, 6, 11, 1, 0, 1, 0, 1, 0, 1, 0],
    [6, 1, 0, 6, 0, 1, 0, 1, 0, 1, 6, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 6, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 18, 4, 17, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 3, 15, 5, 0, 1, 1, 1, 0]
  ],
  // #3
  [
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 11, 11, 11, 1, 0, 0, 0, 0, 0, 9, 9, 9],
    [1, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [11, 11, 11, 11, 0, 0, 0, 1, 0, 1, 1, 1, 5],
    [11, 11, 11, 11, 1, 1, 1, 2, 0, 1, 0, 3, 0],
    [11, 11, 11, 11, 0, 0, 1, 0, 0, 0, 0, 3, 0],
    [0, 11, 0, 0, 0, 0, 6, 6, 6, 0, 0, 11, 0],
    [0, 4, 0, 4, 0, 0, 0, 0, 0, 11, 11, 11, 11],
    [1, 5, 3, 1, 5, 3, 2, 2, 2, 11, 11, 11, 11],
    [0, 0, 0, 0, 0, 1, 0, 4, 4, 11, 11, 11, 11],
    [1, 0, 0, 10, 0, 0, 0, 2, 2, 11, 11, 11, 0],
    [1, 1, 0, 10, 0, 18, 4, 17, 0, 11, 11, 11, 0],
    [6, 1, 1, 0, 0, 3, 15, 5, 0, 1, 0, 0, 0]
  ],
  // #4
  [
    [0, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0],
    [11, 11, 0, 0, 4, 1, 1, 4, 4, 0, 0, 0, 11],
    [11, 0, 0, 3, 1, 1, 1, 1, 1, 1, 4, 0, 7],
    [7, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0],
    [0, 0, 3, 2, 0, 0, 0, 2, 1, 1, 0, 5, 0],
    [13, 0, 3, 0, 10, 0, 10, 0, 1, 5, 0, 0, 0],
    [0, 0, 1, 0, 4, 4, 0, 0, 1, 5, 0, 13, 13],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0, 0],
    [0, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 0, 0],
    [0, 1, 1, 4, 2, 1, 1, 2, 4, 1, 1, 0, 11],
    [11, 0, 2, 2, 0, 18, 4, 17, 2, 2, 0, 11, 11],
    [6, 11, 0, 0, 0, 3, 15, 5, 0, 0, 11, 11, 6]
  ],
  // #5
  [
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 4, 0, 1, 0, 0, 0, 7, 7, 6, 0, 0],
    [6, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 13, 13, 0, 13],
    [2, 0, 0, 0, 2, 0, 0, 0, 0, 13, 0, 0, 0],
    [0, 0, 4, 0, 13, 13, 0, 13, 13, 13, 0, 1, 1],
    [1, 1, 0, 0, 13, 1, 0, 1, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 8, 10, 0],
    [13, 13, 13, 0, 13, 0, 6, 0, 1, 0, 8, 0, 0],
    [0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 8, 1, 1],
    [0, 0, 0, 0, 1, 2, 2, 2, 1, 4, 0, 0, 0],
    [1, 1, 2, 0, 0, 18, 4, 17, 0, 2, 1, 0, 0],
    [2, 0, 0, 0, 0, 3, 15, 5, 0, 0, 0, 0, 0]
  ],
  // #6
  [
    [0, 0, 0, 0, 0, 3, 0, 5, 11, 11, 0, 0, 0],
    [0, 5, 8, 0, 5, 0, 0, 0, 3, 11, 5, 3, 11],
    [0, 5, 8, 0, 5, 0, 1, 0, 3, 11, 5, 3, 11],
    [0, 1, 0, 0, 1, 0, 6, 0, 1, 11, 0, 1, 11],
    [0, 0, 0, 3, 7, 0, 1, 0, 2, 10, 0, 11, 11],
    [1, 1, 5, 0, 0, 11, 1, 11, 0, 0, 3, 1, 1],
    [0, 0, 0, 0, 3, 11, 11, 11, 5, 0, 0, 0, 0],
    [6, 1, 1, 0, 2, 11, 11, 11, 2, 3, 1, 1, 6],
    [7, 7, 7, 0, 4, 0, 11, 0, 4, 0, 7, 7, 7],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 5, 0, 0, 2, 0, 2, 0, 0, 0, 0, 11],
    [0, 0, 2, 0, 0, 18, 4, 17, 0, 0, 11, 11, 11],
    [0, 0, 4, 0, 0, 3, 15, 5, 0, 0, 4, 11, 11]
  ],
  // #7
  [
    [0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0],
    [0, 0, 6, 7, 7, 7, 0, 0, 0, 0, 6, 0, 0],
    [0, 0, 6, 0, 0, 0, 11, 0, 7, 6, 6, 0, 0],
    [0, 6, 0, 0, 0, 11, 6, 0, 0, 0, 6, 0, 0],
    [0, 0, 0, 0, 11, 6, 6, 0, 0, 0, 7, 6, 0],
    [0, 6, 0, 11, 6, 6, 6, 0, 6, 0, 0, 0, 0],
    [0, 8, 0, 6, 6, 0, 0, 0, 6, 6, 0, 0, 0],
    [10, 0, 0, 0, 6, 0, 6, 6, 6, 0, 0, 8, 0],
    [0, 8, 6, 0, 0, 0, 6, 6, 11, 0, 0, 6, 0],
    [0, 6, 0, 0, 0, 0, 6, 11, 0, 0, 6, 6, 0],
    [0, 7, 7, 6, 0, 0, 11, 0, 0, 6, 0, 0, 0],
    [0, 0, 0, 0, 0, 18, 4, 17, 0, 7, 0, 9, 6],
    [9, 9, 0, 0, 0, 3, 15, 5, 0, 0, 0, 0, 0]
  ],
  // #8
  [
    [0, 0, 1, 0, 0, 1, 0, 4, 0, 1, 0, 0, 0],
    [11, 1, 1, 1, 0, 1, 0, 9, 0, 1, 5, 0, 0],
    [11, 11, 11, 0, 0, 2, 0, 1, 0, 2, 0, 3, 5],
    [11, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 0, 13],
    [0, 1, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 3, 1, 1, 2, 1, 2, 7, 7],
    [1, 1, 0, 1, 0, 3, 1, 1, 11, 1, 9, 9, 1],
    [0, 0, 0, 6, 0, 9, 0, 11, 11, 11, 11, 0, 0],
    [13, 13, 0, 13, 13, 13, 13, 13, 0, 13, 13, 13, 13],
    [11, 11, 0, 3, 0, 0, 4, 4, 0, 0, 0, 0, 0],
    [11, 11, 1, 0, 3, 0, 0, 3, 0, 9, 4, 1, 0],
    [11, 9, 1, 0, 3, 18, 4, 17, 0, 2, 0, 1, 0],
    [0, 0, 0, 0, 0, 3, 15, 5, 0, 4, 0, 2, 0]
  ],
  // #9
  [
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 9, 11, 0, 0],
    [1, 0, 0, 0, 0, 0, 9, 11, 8, 6, 10, 0, 1],
    [0, 0, 0, 9, 11, 8, 6, 10, 0, 7, 0, 0, 0],
    [0, 0, 8, 6, 10, 0, 7, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 11, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 11, 9, 11, 0, 11, 9, 11, 0, 0, 0],
    [6, 1, 0, 8, 6, 10, 0, 8, 6, 10, 0, 1, 6],
    [0, 0, 0, 11, 7, 11, 0, 11, 7, 11, 0, 0, 0],
    [0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0],
    [1, 0, 0, 8, 6, 10, 0, 8, 6, 10, 0, 0, 1],
    [1, 0, 0, 11, 7, 11, 0, 11, 7, 11, 0, 0, 1],
    [0, 0, 4, 0, 0, 18, 4, 17, 0, 0, 4, 0, 0],
    [0, 0, 1, 1, 0, 3, 15, 5, 0, 1, 1, 0, 0]
  ],
  // #10
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2, 5],
    [3, 2, 0, 0, 1, 0, 11, 11, 0, 1, 0, 0, 3],
    [1, 0, 0, 0, 1, 11, 11, 11, 11, 1, 0, 0, 3],
    [1, 0, 0, 3, 1, 11, 6, 6, 11, 1, 5, 0, 1],
    [3, 4, 4, 1, 13, 13, 13, 13, 13, 13, 1, 1, 1],
    [0, 1, 1, 1, 6, 6, 1, 6, 6, 1, 1, 1, 5],
    [0, 0, 1, 1, 6, 0, 1, 0, 6, 1, 1, 5, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0],
    [1, 11, 2, 2, 2, 6, 6, 2, 2, 2, 2, 11, 1],
    [1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 1],
    [0, 0, 11, 11, 11, 18, 4, 17, 11, 11, 11, 11, 0],
    [0, 0, 0, 5, 0, 3, 15, 5, 0, 0, 5, 0, 0]
  ]
]
