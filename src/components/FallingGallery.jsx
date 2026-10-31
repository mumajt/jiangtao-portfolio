import { useMemo } from 'react'

// 背景图池：全部来自本人作品（public/projects 已有素材 + 补充小图）
const IMAGES = [
  // 医药海报（竖版最适合瀑布列）
  'projects/haibao-01-jieeryin.jpg',
  'projects/haibao-02-laodongjie.jpg',
  'projects/haibao-03-chenxiangsan.jpg',
  'projects/haibao-04-shenwu.jpg',
  'projects/haibao-06-huoxiang.jpg',
  'projects/haibao-07-lixia.jpg',
  'projects/haibao-08-xieshien.jpg',
  // 展会 / 活动
  'projects/pharmchina-01-gate.jpg',
  'projects/pharmchina-03-crowd.jpg',
  'projects/shuangpinhui-01-gala.jpg',
  'projects/shuangpinhui-03-booth-site.jpg',
  'projects/zhongjiu-01-drum.jpg',
  'projects/zhongjiu-04-parade.jpg',
  'projects/jingqu-01-wenboguan.jpg',
  'projects/jingqu-05-wine-garden.jpg',
  // 设计稿类
  'projects/gaofang-01.jpg',
  'projects/gaofang-04.jpg',
  'projects/gaofang-06.jpg',
  'projects/gaofang-08.jpg',
  'projects/baozhuang-01-shihuang.jpg',
  'projects/baozhuang-03-jiuwuzui.jpg',
  'projects/vi-01-logo.jpg',
  'projects/vi-03-fuzhu-tuxing.jpg',
  'projects/lianweijia-02.jpg',
  'projects/lianweijia-05.jpg',
  // 补充：节气 / 插画 / 折页 / POP
  'projects/bg-xiaohan.jpg',
  'projects/bg-jingzhe.jpg',
  'projects/bg-jialiu.jpg',
  'projects/bg-chenxiang.jpg',
  'projects/bg-zheye.jpg',
  'projects/bg-pop.jpg',
  'projects/bg-aidale-01.jpg',
  'projects/bg-aidale-02.jpg',
  'projects/bg-aidale-03-a.jpg',
  'projects/bg-aidale-03-c.jpg',
  'projects/bg-aidale-03-e.jpg',
]

// 确定性伪随机（每次刷新布局一致，不闪变）
function mulberry32(seed) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const COL_COUNT = 6
const SPEEDS = [52, 38, 64, 45, 33, 57] // 每列一圈耗时（秒），错开避免同频

export default function FallingGallery() {
  const cols = useMemo(() => {
    const rand = mulberry32(20261031)
    const imgs = [...IMAGES]
    for (let i = imgs.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1))
      ;[imgs[i], imgs[j]] = [imgs[j], imgs[i]]
    }
    return Array.from({ length: COL_COUNT }, (_, c) => ({
      speed: SPEEDS[c % SPEEDS.length],
      reverse: c % 2 === 1,
      dim: [0.7, 0.85, 0.6, 0.8, 0.65, 0.9][c % 6], // 每列基础可见度，中间列稍暗
      imgs: imgs.filter((_, i) => i % COL_COUNT === c),
    }))
  }, [])

  return (
    <div className="fallgal" aria-hidden="true">
      <div className="fallgal__cols">
        {cols.map((col, i) => (
          <div className="fallgal__col" key={i} style={{ '--dur': `${col.speed}s`, '--dim': col.dim }}>
            <div className={`fallgal__track${col.reverse ? ' is-rev' : ''}`}>
              {[0, 1].map((dup) => (
                <div className="fallgal__stack" key={dup}>
                  {col.imgs.map((src, k) => (
                    <div className="fallgal__item" key={k}>
                      <img src={src} alt="" loading="lazy" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* 压暗渐变：保证正面文字对比度 */}
      <div className="fallgal__veil" />
    </div>
  )
}
