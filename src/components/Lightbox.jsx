import { useEffect, useCallback, useState } from 'react'

/**
 * 项目详情弹层 + 大图浏览（Lightbox）
 * - 点击遮罩 / 关闭按钮 / Esc 关闭
 * - 左右方向键与箭头按钮切换图片
 * - 底部缩略图条可点击跳转
 */
export default function Lightbox({ project, index: initialIndex = 0, onClose }) {
  const [index, setIndex] = useState(initialIndex)

  const gallery = project?.gallery || []
  const current = gallery[index]

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + gallery.length) % gallery.length)
  }, [gallery.length])

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % gallery.length)
  }, [gallery.length])

  // 键盘操作 + 锁定页面滚动
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  if (!project) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
        <header className="lightbox__head">
          <div className="lightbox__head-info">
            <span className="lightbox__tag">{project.tag}</span>
            <h3>{project.title}</h3>
            <span className="lightbox__year">{project.year}</span>
          </div>
          <button className="lightbox__close" onClick={onClose} aria-label="关闭">
            ✕
          </button>
        </header>

        <p className="lightbox__desc">{project.desc}</p>

        {(project.role || project.results) && (
          <div className="lightbox__facts">
            {project.role && (
              <div className="lightbox__fact">
                <span className="lightbox__fact-label">我的角色</span>
                <p>{project.role}</p>
              </div>
            )}
            {project.results && (
              <div className="lightbox__fact">
                <span className="lightbox__fact-label">项目成果</span>
                <p>{project.results}</p>
              </div>
            )}
          </div>
        )}

        <div className="lightbox__stage">
          {current && (
            <>
              <img
                key={current.src}
                className="lightbox__img"
                src={current.src}
                alt={current.caption}
              />
              <p className="lightbox__caption">
                {current.caption}
                <span className="lightbox__count">
                  {index + 1} / {gallery.length}
                </span>
              </p>

              {gallery.length > 1 && (
                <>
                  <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="上一张">
                    ‹
                  </button>
                  <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="下一张">
                    ›
                  </button>
                </>
              )}
            </>
          )}
        </div>

        {gallery.length > 1 && (
          <div className="lightbox__thumbs">
            {gallery.map((g, i) => (
              <button
                key={g.src}
                className={`lightbox__thumb ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={g.caption}
              >
                <img src={g.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
