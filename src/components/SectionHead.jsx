/**
 * 区块标题头：双语排版 + 右侧超大幽灵字 + 星芒装饰
 * 参考「光绘拾光」活动页的版式语言
 */
function Spark() {
  return (
    <span className="shead__spark" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none">
          <line x1="12" y1="1.5" x2="12" y2="22.5" />
          <line x1="1.5" y1="12" x2="22.5" y2="12" />
          <line x1="4.6" y1="4.6" x2="19.4" y2="19.4" />
          <line x1="19.4" y1="4.6" x2="4.6" y2="19.4" />
        </g>
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.3" fill="none" />
      </svg>
    </span>
  )
}

export default function SectionHead({ kicker, en, ghost, children }) {
  return (
    <header className="shead">
      {kicker}
      <div className="shead__row">
        {children}
        {en ? <span className="shead__en">{en}</span> : null}
        <Spark />
      </div>
      {ghost ? (
        <span className="shead__ghost" aria-hidden="true">
          {ghost}
        </span>
      ) : null}
    </header>
  )
}
