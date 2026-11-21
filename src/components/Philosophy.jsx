import AnimatedContent from './rb/AnimatedContent.jsx'
import SectionHead from './SectionHead.jsx'

/* 设计观：对齐作品集「设计即翻译 Design is Translation」章节 */
const PILLARS = [
  {
    cn: '策',
    en: 'Strategy',
    title: '先明其策，再立其形',
    desc: '每一处视觉都指向品牌目标——美而不虚，落而有据。设计不是装饰，是商业意图的视觉秩序。',
  },
  {
    cn: '链',
    en: 'Full Chain',
    title: '我负责整条链路',
    desc: '需求 — 设计 — 印刷 — 落地 — 反馈。不止其中一环：从提案到打样、从门店到展会现场，亲手跟到最后一米。',
  },
  {
    cn: '验',
    en: 'Proven',
    title: '每一页都真实投产过',
    desc: '上过展会现场、进过门店终端、跑过全年传播。作品集里的每一张图，都能在市场上找到它的实物。',
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy section">
      <div className="container">
        <SectionHead
          kicker={<p className="section__kicker">贰 · PHILOSOPHY</p>}
          en="DESIGN IS TRANSLATION"
          ghost="TRANSLATE"
        >
          <AnimatedContent distance={16} blur={2} duration={0.5}>
            <h2 className="section__title">设计观 · 设计即翻译</h2>
          </AnimatedContent>
        </SectionHead>

        <AnimatedContent distance={14} blur={2} duration={0.55} threshold={0.2}>
          <blockquote className="philo__quote">
            「设计的价值，不止于美，而在于<span className="accent">立形</span>——
            让无形的策略成为可感的形：把商业的意图凝练为视觉秩序，
            把产品的价值转化为可被信任的体验。」
            <cite>
              Design transcends mere beauty to embody form. It renders intangible strategy
              perceptible: distilling product value into an experience that inspires trust.
            </cite>
          </blockquote>
        </AnimatedContent>

        <div className="philo__grid">
          {PILLARS.map((p, i) => (
            <AnimatedContent key={p.cn} className="ac-fill" distance={16} blur={2} duration={0.55} delay={i * 0.1} threshold={0.15}>
              <article className="philo__card">
                <div className="philo__glyph" aria-hidden="true">{p.cn}</div>
                <div className="philo__body">
                  <p className="philo__en">{p.en}</p>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}
