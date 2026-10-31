import DecryptedText from './rb/DecryptedText.jsx'
import AnimatedContent from './rb/AnimatedContent.jsx'
import SectionHead from './SectionHead.jsx'

const FLOW = [
  {
    step: 'STEP 01',
    title: '创意发散',
    desc: '用 Midjourney / 即梦 快速产出概念方向与情绪板，在提案前先对齐「感觉」，减少反复改稿。',
  },
  {
    step: 'STEP 02',
    title: '素材生产',
    desc: 'AI 抠图、扩图、老图高清修复与场景合成，产品图与活动图的素材处理效率翻倍。',
  },
  {
    step: 'STEP 03',
    title: '文案与内容',
    desc: '借助 LLM 辅助公众号推文、小红书文案的初稿撰写与标题打磨，设计师自己就能闭环内容产出。',
  },
  {
    step: 'STEP 04',
    title: '剪辑提效',
    desc: '剪映 AI 字幕、智能剪口播、文生配音，让视频号 / 抖音短视频从拍摄到发布更快一轮。',
  },
]

export default function AiWorkflow() {
  return (
    <section id="ai" className="ai section">
      <div className="container">
        <div className="ai__head">
          <div>
            <SectionHead
              kicker={
                <p className="section__kicker">
                  <DecryptedText text="肆 · AI WORKFLOW" animateOn="view" speed={50} maxIterations={6} characters="!<>-_\/[]{}=+*^?#" />
                </p>
              }
              en="AI WORKFLOW"
              ghost="WORKFLOW"
            >
              <AnimatedContent distance={40} blur={6} duration={0.8}>
                <h2 className="section__title">AI 工具 · 协助工作流</h2>
              </AnimatedContent>
            </SectionHead>
            <p className="ai__lead">
              AI 不替代设计判断，它放大执行效率。<br />
              我把 AI 工具嵌进了从创意到发布的完整链路：
            </p>
          </div>
          <div className="ai__tools">
            <span>Midjourney</span>
            <span>即梦 AI</span>
            <span>Stable Diffusion</span>
            <span>LLM 文案辅助</span>
            <span>剪映 AI</span>
            <span>PS 创成式填充</span>
          </div>
        </div>

        <div className="ai__grid">
          {FLOW.map((f, i) => (
            <AnimatedContent key={f.step} className="ac-fill" distance={48} blur={4} duration={0.85} delay={i * 0.08} threshold={0.15}>
              <div className="ai__card">
                <div className="ai__step">
                  <span>{f.step}</span>
                  <i className={i === FLOW.length - 1 ? 'last' : ''} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}
