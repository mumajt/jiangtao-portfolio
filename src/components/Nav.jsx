import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#about', label: '关于我' },
  { href: '#projects', label: '精选项目' },
  { href: '#strengths', label: '个人优势' },
  { href: '#ai', label: 'AI 工作流' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? h.scrollTop / max : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="nav__inner container">
        <a href="#top" className="nav__logo">
          JT<span className="nav__logo-dot">®</span>
          <span className="nav__logo-sub">JIANG TAO</span>
        </a>
        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--outline btn--sm">联系我</a>
      </div>
    </header>
  )
}
