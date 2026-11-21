import { useState } from 'react'
import CountUp from './rb/CountUp.jsx'
import AnimatedContent from './rb/AnimatedContent.jsx'
import LogoLoop from './rb/LogoLoop.jsx'
import SectionHead from './SectionHead.jsx'

const STATS = [
  { num: '12', suffix: '年+', label: '甲方企划设计经验' },
  { num: '8', suffix: '家', label: '服务企业 / 品牌' },
  { num: '10', suffix: '届+', label: '大型医药展会参展' },
  { num: '4', suffix: '端', label: '新媒体内容持续运营' },
]

const CAREER = [
  { time: '2024.10 — 至今', company: '成都恋唯家定制家居', role: '平面设计', desc: '恋唯家、嘉栩两品牌 15 个系列电子色卡与工艺、五金等产品画册的设计与印刷落地；主导双官网视觉规划与小程序界面设计；公众号 / 视频号 / 小红书 / 抖音四端内容视觉与产品实拍，新品上市当天内容即上线。' },
  { time: '2019.10 — 2024.09', company: '河南济世药业有限公司', role: '企划设计师', desc: '市场部唯一设计师：品牌宣传物料、药品包装与广告合规备案、画册折页 H5 全流程交付；连续 5 年参与全国药交会、双品汇、星辰会等展会，负责展会视觉设计、乙方对接、现场上样与会后公众号传播，单届落地物料十余项。' },
  { time: '2019.02 — 2019.09', company: '华北制药盈健康膏方事业部', role: '企划设计', desc: '事业部品牌推广设计：画册、单页、海报、会场氛围物料，公众号与线上课程画面设计，全国启动大会现场物料设计与落地。' },
  { time: '2018.04 — 2019.01', company: '四川爱达乐食品', role: '平面设计 / AE', desc: '广宣设计（产品海报、DM、包装调整），三大节气活动延展与门店氛围物料对接落地。' },
  { time: '2016.02 — 2018.03', company: '四川金盆地集团', role: '平面设计', desc: '企业平面广告设计、大型原酒节（种酒节）活动执行、创 3A 工业旅游景区景观氛围设计、糖酒会等大型活动对接。' },
  { time: '2011.09 — 2014.06', company: '四川艺术职业学院', role: '园林景观（大专）', desc: '科班出身的空间与美学训练：制图、景观规划与设计表达，为后来的展会空间设计打下地基。' },
]

/* 合作品牌（LogoLoop 无缝循环） */
const BRANDS = [
  { title: '华北制药', src: 'brands/ncpc.png?v=3', alt: '华北制药' },
  { title: '济世药业', src: 'brands/jishi.png?v=3', alt: '济世药业' },
  { title: '恋唯家定制家居', src: 'brands/lianweijia.png?v=3', alt: '恋唯家定制家居', tall: true },
  { title: '嘉栩木业 GALLUX', src: 'brands/jiaxu.png', alt: '嘉栩木业' },
  { title: '午时药业', src: 'brands/wushi.png?v=3', alt: '午时药业' },
  { title: '金盆地集团', src: 'brands/jinpendi.png?v=3', alt: '金盆地集团' },
  { title: '爱达乐食品', src: 'brands/aidale.png?v=3', alt: '爱达乐食品' },
]

export default function About() {
  const [avatarOk, setAvatarOk] = useState(true)

  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionHead
          kicker={
            <p className="section__kicker">
              壹 · ABOUT
            </p>
          }
          en="ABOUT ME"
          ghost="ABOUT"
        >
          <AnimatedContent distance={40} blur={6} duration={0.8}>
            <h2 className="section__title">关于我</h2>
          </AnimatedContent>
        </SectionHead>

        <div className="about__grid">
          {/* 人物图：把头像放到 public/avatar.webp 即可替换占位图 */}
          <AnimatedContent direction="horizontal" distance={50} duration={0.9}>
            <div className="about__portrait">
              <div className="about__portrait-frame">
                {avatarOk && (
                  <img
                    src="avatar.webp?v=3"
                    alt="蒋涛"
                    onError={() => setAvatarOk(false)}
                  />
                )}
                {!avatarOk && (
                  <div className="about__portrait-fallback" aria-hidden="true">
                    <span>蒋涛</span>
                  </div>
                )}
              </div>
              <div className="about__portrait-tag">CHENGDU · 成都</div>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={40} blur={4} duration={0.9} delay={0.12}>
            <div className="about__body">
            <p className="about__lead">
              你好，我是蒋涛。一名深耕医药、快消、家居行业的<span className="accent grad">企业品牌设计师（企划设计）</span>。
            </p>
            <p className="about__text">
              设计即翻译：把商业意图凝练为视觉秩序，把产品价值转化为可被信任的体验。
              12 年来，我负责的是「需求 — 设计 — 印刷 — 落地」整条链路，不止其中一环：
              为恋唯家、嘉栩两品牌搭建 15 个系列电子色卡与产品画册体系，让客户翻册选色、
              业务员照页讲单；连续 5 年把全国药交会、双品汇、星辰会的每一届展会当作一次
              系统交付；从华北制药膏方事业部的品牌从零启动，到药品包装与合规备案物料，
              每一页的设计都真实投产过——上过展会现场、进过门店终端、跑过全年传播。
            </p>
            <p className="about__text">
              我相信「世上没有无用的技能」：园林景观科班让我懂空间，室内与工程经历让我懂落地，
              早期 UI 设计经历让我懂线上。这些积累最终都汇成了更完整的企划设计能力。
            </p>

            <ul className="about__contact">
              <li><span>电话</span><a href="tel:13550211277">135 5021 1277</a></li>
              <li><span>邮箱</span><a href="mailto:937224093@qq.com">937224093@qq.com</a></li>
              <li><span>坐标</span>成都 · 崇州</li>
              <li><span>状态</span>可到岗 / 项目合作</li>
            </ul>

            <div className="about__stats">
              {STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat__num">
                    <CountUp to={Number(s.num)} duration={1.8} separator="," />
                    <em>{s.suffix}</em>
                  </div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>
        </div>

        {/* 职业经历时间线 */}
        <div className="timeline">
          <h3 className="sublabel">
            <span className="sublabel__cn">足迹</span>
            <i className="sublabel__dot" />
            <span className="sublabel__en">CAREER PATH</span>
          </h3>
          {CAREER.map((c, i) => (
            <AnimatedContent key={c.company + c.time} distance={36} blur={3} duration={0.8} delay={i * 0.06}>
              <div className="timeline__item">
                <div className="timeline__time">{c.time}</div>
                <div className="timeline__main">
                  <div className="timeline__head">
                    <strong>{c.company}</strong>
                    <span className="timeline__role">{c.role}</span>
                  </div>
                  <p>{c.desc}</p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
        {/* 合作品牌墙 */}
        <div className="brands">
          <p className="sublabel">
            <span className="sublabel__cn">同行者</span>
            <i className="sublabel__dot" />
            <span className="sublabel__en">TRUSTED BY</span>
          </p>
          <AnimatedContent distance={30} blur={3} duration={0.9}>
            <LogoLoop
              logos={BRANDS}
              direction="right"
              speed={55}
              gap={16}
              logoHeight={68}
              pauseOnHover
              fadeOut
              fadeOutWidth={0.1}
              draggable={false}
              intro={false}
              ariaLabel="合作品牌"
              renderItem={(item, key) => (
                <span
                  className={`brands__logo${item.tall ? ' brands__logo--tall' : ''}`}
                  key={key}
                  title={item.title}
                >
                  <img src={item.src} alt={item.alt || ''} loading="lazy" />
                </span>
              )}
            />
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
