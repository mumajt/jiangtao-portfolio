import { useState } from 'react'
import CountUp from './rb/CountUp.jsx'
import DecryptedText from './rb/DecryptedText.jsx'
import AnimatedContent from './rb/AnimatedContent.jsx'
import LogoLoop from './rb/LogoLoop.jsx'
import SectionHead from './SectionHead.jsx'

const STATS = [
  { num: '12', suffix: '年+', label: '企划设计经验' },
  { num: '5', suffix: '届+', label: '全国药交会全案执行' },
  { num: '8', suffix: '家', label: '服务企业 / 品牌' },
  { num: '1000', suffix: '+', label: '设计交付物' },
]

const CAREER = [
  { time: '2024.10 — 至今', company: '成都恋唯家定制家居', role: '平面设计', desc: '公司宣传、小红书 / 抖音 / 视频号 / 公众号内容设计，系列板材花色画册设计，官网网页规划设计。' },
  { time: '2019.10 — 2024.09', company: '河南药业有限公司', role: '企划设计', desc: '品牌对内宣传与对外推广、线上线下物料全案、药品包装设计、广告投放排期剪辑、历届国药会 / 双品会 / 星辰会等展会执行。' },
  { time: '2019.02 — 2019.09', company: '华北制药盈健康膏方事业部', role: '企划设计', desc: '事业部品牌推广设计：画册、单页、海报、会场氛围物料，公众号与线上课程画面设计，全国启动大会全案执行。' },
  { time: '2018.04 — 2019.01', company: '四川爱达乐食品', role: '平面设计 / AE', desc: '广宣设计（产品海报、DM、包装调整），三大节气活动延展与门店氛围物料对接落地。' },
  { time: '2016.02 — 2018.03', company: '四川金盆地集团', role: '平面设计', desc: '企业平面广告设计、大型原酒节（种酒节）活动执行、创 3A 工业旅游景区景观氛围设计、糖酒会等大型活动对接。' },
  { time: '2011.09 — 2014.06', company: '四川艺术职业学院', role: '园林景观（大专）', desc: '科班出身的空间与美学训练：制图、景观规划与设计表达，为后来的展会空间设计打下地基。' },
]

/* 合作品牌（LogoLoop 无缝循环） */
const BRANDS = [
  { title: '华北制药', src: 'brands/ncpc.png?v=3', alt: '华北制药' },
  { title: '济世药业', src: 'brands/jishi.png?v=3', alt: '济世药业' },
  { title: '午时药业', src: 'brands/wushi.png?v=3', alt: '午时药业' },
  { title: '金盆地集团', src: 'brands/jinpendi.png?v=3', alt: '金盆地集团' },
  { title: '恋唯家定制家居', src: 'brands/lianweijia.png?v=3', alt: '恋唯家定制家居', tall: true },
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
              <DecryptedText text="壹 · ABOUT" animateOn="view" speed={50} maxIterations={6} characters="!<>-_\/[]{}=+*^?#" />
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
          {/* 人物图：把头像放到 public/avatar.jpg 即可替换占位图 */}
          <AnimatedContent direction="horizontal" distance={50} duration={0.9}>
            <div className="about__portrait">
              <div className="about__portrait-frame">
                {avatarOk && (
                  <img
                    src="avatar.jpg?v=3"
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
              12 年来，我的工作始终围绕「品牌如何被看见」展开：企业线上线下活动全案、
              海报与易拉宝、展会参展执行、药品包装、公司宣传画册，以及公众号、视频号、
              小红书、抖音等新媒体内容设计与拍摄剪辑。从华北制药的全国启动大会，
              到连续五届的全国药交会展台落地，我习惯把每一个项目从头跟到尾——
              设计、印刷、布展、复盘，都亲手把关。同时善用 AI 工具辅助文案与创意，
              实现「设计、文案、拍摄」一体化高效执行。
            </p>
            <p className="about__text">
              我相信「世上没有无用的技能」：施工员出身让我懂落地，园林景观科班让我懂空间，
              电商与 UI 经历让我懂线上。这些积累最终都汇成了更完整的企划设计能力。
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
