import { useEffect, useState } from 'react'
import CanvasBG from './CanvasBG.jsx'
import FallingGallery from './FallingGallery.jsx'
import BlurText from './rb/BlurText.jsx'
import DecryptedText from './rb/DecryptedText.jsx'

export default function Hero() {
  const [videoOk, setVideoOk] = useState(true)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => { document.documentElement.style.scrollBehavior = '' }
  }, [])

  // 带锚点直达访问（如 #about）：React 渲染完成后再跳转
  useEffect(() => {
    if (!window.location.hash) return
    const t = setTimeout(() => {
      document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'instant' })
    }, 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="top" className="hero">
      {/* 视频背景：把视频文件放到 public/hero.mp4 即可自动启用；
          若视频缺失或加载失败，会自动降级为动态 Canvas 背景 */}
      {videoOk && (
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoOk(false)}
        >
          <source src="hero.mp4" type="video/mp4" />
        </video>
      )}
      <CanvasBG className="hero__canvas" />
      {/* 作品瀑布背景：多列作品图缓慢下落循环，纯装饰，位于压暗层之下不影响文字 */}
      <FallingGallery />
      <div className="hero__mask" />

      <div className="hero__content container">
        <p className="hero__kicker reveal">
          <DecryptedText
            text="以设计，让品牌被看见 · SINCE 2014"
            animateOn="view"
            speed={55}
            maxIterations={6}
            characters="!<>-_\/[]{}=+*^?#"
          />
        </p>
        <h1 className="hero__title">
          <BlurText
            text="平面 / 企划作品集"
            animateBy="letters"
            delay={150}
            blur={12}
            distance={40}
          />
          <BlurText
            text="PORTFOLIO"
            className="hero__title-en"
            animateBy="letters"
            delay={420}
            blur={12}
            distance={40}
          />
        </h1>
        <p className="hero__sub reveal reveal--d2">
          企业品牌设计师 · 12 年企划设计经验<br />
          从品牌视觉到展会落地，从平面到新媒体，让每一次传播都有据可依、有形可感。
        </p>
        <div className="hero__actions reveal reveal--d3">
          <a href="#projects" className="btn btn--solid">查看精选项目</a>
          <a href="#contact" className="btn btn--outline">联系我</a>
        </div>
      </div>

      <div className="hero__meta container reveal reveal--d4">
        <span>线上线下活动全案</span><i />
        <span>展会参展执行</span><i />
        <span>药品包装设计</span><i />
        <span>新媒体内容</span><i />
        <span>宣传画册</span>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
