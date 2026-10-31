import DecryptedText from './rb/DecryptedText.jsx'
import BorderGlow from './rb/BorderGlow.jsx'
import AnimatedContent from './rb/AnimatedContent.jsx'
import SectionHead from './SectionHead.jsx'

const SKILLS = [
  { name: 'Photoshop / Illustrator', level: 95 },
  { name: 'CorelDRAW', level: 88 },
  { name: 'Premiere / 剪映专业版', level: 82 },
  { name: 'Midjourney / SD / 即梦 AI', level: 85 },
]

const STRENGTHS = [
  {
    no: '01',
    title: '品牌企划与活动全案',
    desc: '企业线上线下活动从创意、设计到落地执行的全链路把控：年会、节庆、门店氛围、发布会物料均可独立操盘。',
    tags: ['活动全案', '海报', '易拉宝', '会场氛围'],
  },
  {
    no: '02',
    title: '展会参展执行',
    desc: '连续五年负责全国药交会、双品会、星辰会等大型行业展会：视觉方案、印刷跟产、现场布展一岗到底。',
    tags: ['国药会', '双品会', '布展执行'],
  },
  {
    no: '03',
    title: '包装与画册设计',
    desc: '药品包装设计经验，熟悉合规与印刷规范；板材花色画册、企业宣传画册的编排与印制全流程。',
    tags: ['药品包装', '画册编排', '印刷跟单'],
  },
  {
    no: '04',
    title: '新媒体内容矩阵',
    desc: '公众号推文、视频号、小红书、抖音内容设计与发布排期，懂平台调性，也懂流量逻辑。',
    tags: ['小红书', '抖音', '公众号', '视频号'],
  },
  {
    no: '05',
    title: '摄影摄像与剪辑',
    desc: '产品与活动现场的拍摄、短视频剪辑、广告投放素材的排期与分发，让素材从拍摄到上线不断档。',
    tags: ['产品摄影', '短视频剪辑', '投放素材'],
  },
  {
    no: '06',
    title: '跨部门协作与落地',
    desc: '施工员与 AE 经历练出来的沟通能力：对接广告公司、印刷厂、场馆与业务部门，确保方案不折损地落地。',
    tags: ['供应商管理', '现场执行', '跨部门协同'],
  },
]

export default function Strengths() {
  return (
    <section id="strengths" className="strengths section">
      <div className="container">
        <SectionHead
          kicker={
            <p className="section__kicker">
              <DecryptedText text="叁 · STRENGTHS" animateOn="view" speed={50} maxIterations={6} characters="!<>-_\/[]{}=+*^?#" />
            </p>
          }
          en="CORE STRENGTHS"
          ghost="SKILLS"
        >
          <AnimatedContent distance={40} blur={6} duration={0.8}>
            <h2 className="section__title">个人优势</h2>
          </AnimatedContent>
        </SectionHead>

        <div className="strengths__grid">
          {STRENGTHS.map((s, i) => (
            <AnimatedContent key={s.no} className="ac-fill" distance={48} blur={4} duration={0.85} delay={(i % 3) * 0.09} threshold={0.15}>
              <BorderGlow
                className="glow-card"
                backgroundColor="#11151c"
                borderRadius={14}
                glowColor="168 74 60"
                glowRadius={26}
                glowIntensity={0.95}
                edgeSensitivity={32}
                coneSpread={22}
                fillOpacity={0.35}
                colors={['#4fe3c1', '#6ea8ff', '#b98bff']}
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
              <AnimatedContent key={sk.name} distance={24} blur={2} duration={0.8} delay={i * 0.06} threshold={0.2}>
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
