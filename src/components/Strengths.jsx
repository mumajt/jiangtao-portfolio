import BorderGlow from './rb/BorderGlow.jsx'
import AnimatedContent from './rb/AnimatedContent.jsx'
import SectionHead from './SectionHead.jsx'

const SKILLS = [
  { name: 'Photoshop / Illustrator / InDesign', level: 95 },
  { name: 'CorelDRAW', level: 88 },
  { name: 'Premiere / After Effects / 剪映', level: 82 },
  { name: '即梦 / 可画 / AI 辅助创作', level: 85 },
]

const STRENGTHS = [
  {
    no: '01',
    title: '甲方全链路经验',
    desc: '懂业务：能把领导与销售的需求准确翻译成设计方案；懂供应链：熟悉印刷工艺与打样流程；懂落地：设计能跟到印刷、到门店、到展会现场，直接服务招商、销售与品牌结果。',
    tags: ['需求翻译', '印刷跟产', '落地执行'],
  },
  {
    no: '02',
    title: '展会全流程经验',
    desc: '连续 5 年参与全国药交会、双品汇、星辰会等大型医药展会：展会视觉物料设计、乙方设计/搭建供应商对接、现场上样参展及会后公众号传播，单届落地物料十余项，零延期、零印刷事故。',
    tags: ['国药会', '双品汇', '星辰会'],
  },
  {
    no: '03',
    title: '画册与色卡体系',
    desc: '为恋唯家、嘉栩两品牌搭建标准化电子色卡体系：15 个系列电子色卡与工艺、五金等产品画册——结构模板、花色全览、一页一色的肌理文案与参数排版，为门店和经销商提供标准化选色与讲解工具。',
    tags: ['电子色卡', '画册编排', '结构模板'],
  },
  {
    no: '04',
    title: '医药合规经验',
    desc: '熟悉药品广告合规备案全流程：包装版式、条码拼版、广审海报画面严格遵循备案规范，设计产出全部通过备案审核，保障产品推广节奏不因审核受阻。',
    tags: ['药品包装', '条码拼版', '广审画面'],
  },
  {
    no: '05',
    title: '内容一体化',
    desc: '设计 + 文案 + 产品拍摄 + 剪辑一人闭环：公众号 / 视频号 / 小红书 / 抖音四端内容视觉与实拍修图，新品上市当天内容即上线，保障四端高频稳定更新。',
    tags: ['公众号', '视频号', '小红书', '抖音'],
  },
  {
    no: '06',
    title: '跨行业适应力',
    desc: '医药（济世药业、华北制药）、家居（恋唯家）、食品（爱达乐）、酒业（金盆地）均有品牌企划落地经验——换行业不换方法：先明其策，再立其形。',
    tags: ['医药', '家居', '食品', '酒业'],
  },
]

export default function Strengths() {
  return (
    <section id="strengths" className="strengths section">
      <div className="container">
        <SectionHead
          kicker={
            <p className="section__kicker">
              肆 · STRENGTHS
            </p>
          }
          en="CORE STRENGTHS"
          ghost="SKILLS"
        >
          <AnimatedContent distance={16} blur={2} duration={0.5}>
            <h2 className="section__title">个人优势</h2>
          </AnimatedContent>
        </SectionHead>

        <div className="strengths__grid">
          {STRENGTHS.map((s, i) => (
            <AnimatedContent key={s.no} className="ac-fill" distance={18} blur={2} duration={0.5} delay={(i % 3) * 0.09} threshold={0.15}>
              <BorderGlow
                className="glow-card"
                backgroundColor="#fbf9f4"
                borderRadius={8}
                glowColor="178 62 38"
                glowRadius={26}
                glowIntensity={0.55}
                edgeSensitivity={32}
                coneSpread={22}
                fillOpacity={0.35}
                colors={['#b23e26']}
              >
                <span className="scard__no">{s.no}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="scard__tags">
                  {s.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </BorderGlow>
            </AnimatedContent>
          ))}
        </div>

        {/* 设计工具箱 */}
        <div className="skills">
          <p className="sublabel">
            <span className="sublabel__cn">利其器</span>
            <i className="sublabel__dot" />
            <span className="sublabel__en">TOOLKIT</span>
          </p>
          <div className="skills__grid">
            {SKILLS.map((sk, i) => (
              <AnimatedContent key={sk.name} distance={24} blur={2} duration={0.5} delay={i * 0.06} threshold={0.2}>
                <div className="skills__row">
                  <span className="skills__name">{sk.name}</span>
                  <div className="skills__track">
                    <i style={{ width: `${sk.level}%` }} />
                  </div>
                  <span className="skills__pct">{sk.level}%</span>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
