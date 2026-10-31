import { useEffect, useRef } from 'react'

/**
 * 动态背景画布：极光渐变 + 缓慢漂浮的粒子网格。
 * 当 Hero 的视频背景不可用（未放置视频文件）时作为降级显示，
 * 也可以单独作为氛围层与视频叠加使用。
 */
export default function CanvasBG({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf = 0
    let w = 0
    let h = 0
    let dpr = 1

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.00025,
      a: Math.random() * 0.35 + 0.1,
    }))

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)

      // 缓慢漂移的极光光斑
      const blobs = [
        { x: 0.22 + Math.sin(t / 9000) * 0.05, y: 0.3 + Math.cos(t / 11000) * 0.05, r: 0.5, c: 'rgba(64,224,190,0.07)' },
        { x: 0.78 + Math.cos(t / 8000) * 0.06, y: 0.65 + Math.sin(t / 10000) * 0.05, r: 0.55, c: 'rgba(90,130,255,0.06)' },
        { x: 0.5 + Math.sin(t / 13000) * 0.08, y: 0.85, r: 0.45, c: 'rgba(160,80,255,0.045)' },
      ]
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x * w, b.y * h, 0, b.x * w, b.y * h, b.r * Math.max(w, h))
        g.addColorStop(0, b.c)
        g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, w, h)
      }

      // 细网格线
      ctx.strokeStyle = 'rgba(255,255,255,0.025)'
      ctx.lineWidth = 1
      const step = 120
      for (let x = (t / 200) % step; x < w; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke()
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke()
      }

      // 漂浮粒子
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(190,240,225,${p.a})`
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
