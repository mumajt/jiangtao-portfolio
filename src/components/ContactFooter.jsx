import BlurText from './rb/BlurText.jsx'
import DecryptedText from './rb/DecryptedText.jsx'
import AnimatedContent from './rb/AnimatedContent.jsx'

const CONTACTS = [
  { label: '电话 · TEL', value: '135 5021 1277', href: 'tel:13550211277' },
  { label: '邮箱 · MAIL', value: '937224093@qq.com', href: 'mailto:937224093@qq.com' },
  { label: '微信 · WECHAT', value: '13550211277（微信同号）' },
]

export default function ContactFooter() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner container">
        <span className="shead__ghost" aria-hidden="true">CONTACT</span>
        <p className="contact__kicker">
          <DecryptedText text="伍 · CONTACT" animateOn="view" speed={50} maxIterations={6} characters="!<>-_\/[]{}=+*^?#" />
        </p>
        <h2 className="contact__title">
          <BlurText text="让下一个项目" animateBy="letters" delay={150} blur={10} distance={30} />
          <BlurText text="被更多人看见。" className="grad" animateBy="letters" delay={420} blur={10} distance={30} />
        </h2>
        <p className="contact__sub">
          求职 / 项目合作 / 自由设计委托，欢迎随时联系 —— 电话、微信、邮件都可以。
        </p>

        <div className="contact__list">
          {CONTACTS.map((c, i) => (
            <AnimatedContent key={c.label} className="ac-fill" distance={36} blur={3} duration={0.8} delay={i * 0.1} threshold={0.2}>
              <a
                className="contact__item"
                href={c.href || undefined}
                target={c.href && c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span className="contact__label">{c.label}</span>
                <span className="contact__value">{c.value}</span>
              </a>
            </AnimatedContent>
          ))}
          <AnimatedContent className="ac-fill" distance={36} blur={3} duration={0.8} delay={0.3} threshold={0.2}>
            <div className="contact__item contact__item--qr">
              <span className="contact__label">WECHAT QR</span>
              <img className="contact__qr" src="wechat-qr.png" alt="微信二维码 · 扫码加好友" />
              <span className="contact__value">扫码加微信</span>
            </div>
          </AnimatedContent>
        </div>

        <footer className="footer">
          <span>© 2026 蒋涛 JIANG TAO · 品牌企划设计师</span>
          <span className="footer__back" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            回到顶部 ↑
          </span>
        </footer>
      </div>

      <div className="contact__glow" aria-hidden="true" />
    </section>
  )
}
