import { useState, useEffect } from 'react'
import Lightbox from './Lightbox.jsx'
import DecryptedText from './rb/DecryptedText.jsx'
import AnimatedContent from './rb/AnimatedContent.jsx'
import SectionHead from './SectionHead.jsx'

// 图片已统一转为 WebP（原 JPG 备份于 _images-backup/）
const P = (name) => `projects/${name.replace(/\.jpg$/, '.webp')}`

const PROJECTS = [
  {
    year: '2019.02 — 2019.10',
    tag: '项目一 · 品牌从零启动',
    cat: 'brand',
    title: '华北制药膏方事业部 · 品牌视觉体系搭建',
    desc: '品牌的起点不是 logo，而是它对市场的第一句话。新事业部无任何视觉资产：LED 主屏、横幅、门型展架，到邀请函、桌垫、名片模板，二十余项物料共用同一套主视觉延展——保证会场任何角度看到的是同一个品牌。设计之外，负责印刷对接与打样确认，大会如期召开。',
    role: '主视觉延展设计 / 全部物料设计 / 印刷对接与落地跟踪',
    results: '二十余项物料如期落地；产品画册沿用为全国各省区招商标配物料',
    tone: 'violet',
    gallery: [
      { src: P('gaofang-01.jpg'), caption: '全国启动大会 · LED 主视觉画面' },
      { src: P('gaofang-02.jpg'), caption: '《膏方系列画册》· 品牌历史版面设计' },
      { src: P('gaofang-03.jpg'), caption: '《华北制药中药健康手册》封面设计' },
      { src: P('gaofang-04.jpg'), caption: '九珍玉妍膏 · 产品海报（红金系列）' },
      { src: P('gaofang-08.jpg'), caption: '九珍玉妍膏 · 产品优势海报' },
      { src: P('gaofang-06.jpg'), caption: '龙行养古膏 · 中药知识科普长图' },
      { src: P('gaofang-09.jpg'), caption: '气血不足自测表 · 女性健康科普海报' },
      { src: P('gaofang-10.jpg'), caption: '门型展架 · 系列终端物料组合（产品 × 企业 × 膏方知识）' },
    ],
  },
  {
    year: '2019 — 2024',
    tag: '项目二 · 展会执行',
    cat: 'event',
    title: '全国医药展会 · 视觉执行与现场落地',
    desc: '展会是公司年度核心获客场景，品牌与客户之间只有一米的距离。连续 5 年与市场部协作，深度参与历届全国药交会、双品汇、星辰会、中国药品大会：作为对接乙方设计公司的枢纽把控视觉方案落地，独立完成邀请函与现场海报、展架设计，展前上样参展、会后公众号传播——把每一届展会当作一次系统交付。',
    role: '视觉方案对接 / 邀请函·海报·展架设计 / 现场执行 / 会后传播',
    results: '连续 5 年 · 单届落地物料十余项 · 零延期、零印刷事故',
    tone: 'teal',
    gallery: [
      { src: P('pharmchina-01-gate.jpg'), caption: '第 88 届全国药品交易会 · 2024 上海' },
      { src: P('pharmchina-02-booth-design.jpg'), caption: '展位设计方案效果图' },
      { src: P('pharmchina-03-crowd.jpg'), caption: '展位现场 · 产品陈列与洽谈区' },
      { src: P('pharmchina-04-visitors.jpg'), caption: '现场观众翻阅产品画册' },
      { src: P('shuangpinhui-01-gala.jpg'), caption: '第 9 届双品汇欢迎晚宴 · 产品荣登主舞台大屏（重庆）' },
      { src: P('shuangpinhui-02-booth-design.jpg'), caption: '双品汇展位设计方案效果图' },
      { src: P('shuangpinhui-03-booth-site.jpg'), caption: '济世药业展位现场 · 品牌形象与产品展示' },
      { src: P('shuangpinhui-04-negotiation.jpg'), caption: '展位洽谈区 · 客商咨询对接' },
    ],
  },
  {
    year: '2024.10 — 至今',
    tag: '项目三 · Every Touchpoint',
    cat: 'brand',
    title: '恋唯家 & 嘉栩木业 · 从纸间到指尖',
    desc: '全屋定制这行生意难在信任：客户签单时柜子还没生产。我为恋唯家、嘉栩两品牌搭建标准化电子色卡体系，落地 15 个产品系列；配套工艺、五金等 3 部产品画册共 18 册——企业简介与品牌定位打底，花色全览一页索引全部色号，一页一色，饰面实拍、肌理文案与色号参数条逐页排清。嘉栩 GALLUX 品牌标志及 VI 应用亦由本人设计。同一套产品语言，串联画册、名片小程序、双官网与四端内容——从纸间到指尖。',
    role: '电子色卡体系与结构模板 / 嘉栩标志与 VI / 企业微信名片与小程序界面 / 四端内容视觉',
    results: '15 个系列电子色卡 + 3 部产品画册共 18 册；新品上市当天即完成四端内容上线',
    tone: 'rose',
    gallery: [
      { src: P('lianweijia-00-cover.jpg'), caption: '系列电子画册 · 铺排总览' },
      { src: P('lwj-seka01.jpg'), caption: '系列电子色卡 · 品牌定位与花色总览' },
      { src: P('lwj-seka02.jpg'), caption: '电子色卡 · 花色全览（全部色号一页索引）' },
      { src: P('lwj-seka03.jpg'), caption: '电子色卡内页 · 一页一色：饰面实拍、肌理文案与色号参数条' },
      { src: P('lwj-seka04.jpg'), caption: '电子色卡内页 · 一页一色（另一花色）' },
      { src: P('lianweijia-05.jpg'), caption: '《膜类系列电子色卡合集》· 色彩分组总览' },
      { src: P('lwj-gxlogo.jpg'), caption: '嘉栩 GALLUX 品牌标志设计（本人设计）· VI 标准组合' },
      { src: P('lwj-card.jpg'), caption: '企业微信名片 · 从界面到内容搭建，装进业务员的每张名片' },
      { src: P('lwj-mp.jpg'), caption: '恋唯家产品小程序 · 门店的板材墙装进客户手机' },
      { src: P('lwj-web.jpg'), caption: '恋唯家官网 · 客户线上认识品牌的第一触点' },
      { src: P('lwj-gzh.jpg'), caption: '公众号推文头图 · 一产品一推文，新品上市当天上线' },
    ],
  },
  {
    year: '2019 — 2024',
    tag: '包装与合规',
    cat: 'print',
    title: '药品包装 & 广审画面',
    desc: 'OTC 药品的包装与广审物料：包装版式、条码拼版、广审海报画面——功效表述与广告语严格遵循备案规范，在合规框架内做出清晰、有卖相的画面。规范越多，越见功底。',
    role: '包装设计 / 印刷对接 / 平面展开图与立体效果图输出',
    results: '6+ 个产品包装设计并上市；历次备案均顺利过审，保障产品推广节奏',
    tone: 'steel',
    gallery: [
      { src: P('baozhuang-01-shihuang.jpg'), caption: '石黄抗菌胶囊 · 产品主视觉与包装设计' },
      { src: P('baozhuang-02-niuhuang.jpg'), caption: '牛黄解毒片 · 包装立体效果图' },
      { src: P('baozhuang-03-jiuwuzui.jpg'), caption: '酒无罪 · 山楂丹参乌梅椎骨产品包装' },
      { src: P('baozhuang-04-shanzhawan.jpg'), caption: '大山楂丸袋装 · 包装效果图' },
      { src: P('baozhuang-05-shihuang-flat.jpg'), caption: '石黄抗菌胶囊 · 包装平面展开图' },
      { src: P('baozhuang-06-sanhuang.jpg'), caption: '三黄片（山东）· 包装平面设计' },
    ],
  },
  {
    year: '2016 — 2017',
    tag: '大型活动 · 空间视觉',
    cat: 'event',
    title: '金盆地种酒节 & 创 3A 工业旅游景区',
    desc: '连续两届万人级传统文化活动：第 4 届逢崇阳酒业 130 周年、连续 5 天多主题活动，第 5 届与四川非遗跨界结合——从主画面到现场氛围统一连贯，支撑种酒节成长为崇州本地有影响力的文化节庆 IP。同期负责川酒文博馆创 3A 景区的景点介绍牌与酒文化氛围改造设计，助力成功创建国家 3A 级工业旅游景区。',
    role: '活动主视觉与全场氛围物料设计 / 现场执行跟踪 / 景区导视与文化氛围设计',
    results: '连续两届种酒节视觉统一连贯落地；助力金盆地成功创建国家 3A 级景区',
    tone: 'amber',
    gallery: [
      { src: P('zhongjiu-01-drum.jpg'), caption: '2017 第五届金盆地种酒节 · 活动主视觉鼓面与红毯现场' },
      { src: P('zhongjiu-02-stage-4th.jpg'), caption: '崇阳 130 周年庆典暨第四届种酒节主舞台（成都·崇州）' },
      { src: P('zhongjiu-03-ceremony.jpg'), caption: '「休明盛世 · 开坛放酒」仪式环节' },
      { src: P('zhongjiu-04-parade.jpg'), caption: '祭酒仪仗入场 · 传统非遗仪式呈现' },
      { src: P('zhongjiu-05-guests.jpg'), caption: '嘉宾席与现场观众 · 万人级活动规模' },
      { src: P('jingqu-01-wenboguan.jpg'), caption: '川酒文博馆 · 景观氛围改造后实景' },
      { src: P('jingqu-02-gate.jpg'), caption: '金盆地集团大门 · 酒文化博览园标识与氛围' },
      { src: P('jingqu-05-wine-garden.jpg'), caption: '「有朋四海家 · 种酒藏天下」种酒园区氛围改造' },
      { src: P('jingqu-06-review.jpg'), caption: '3A 景区评审专家实地考察' },
    ],
  },
  {
    year: '2016 — 2017',
    tag: '品牌 VI',
    cat: 'brand',
    title: '崇阳酒业 · 品牌 VI 视觉系统',
    desc: '崇阳酒业品牌 VI 系统设计：Logo 与标准字规范、辅助图形系统、办公应用与导视系统设计，贯穿品牌基础与应用两大体系。',
    role: 'VI 视觉系统设计：基础体系 + 应用体系完整输出',
    results: '从 Logo 规范到导视系统完整输出，落地办公与门店应用',
    tone: 'wine',
    cover: 'vi-00-cover.jpg',
    gallery: [
      { src: P('vi-01-logo.jpg'), caption: '品牌基础 · Logo 与设计说明' },
      { src: P('vi-02-biaozhunzi.jpg'), caption: '品牌基础 · 标准字规范' },
      { src: P('vi-03-fuzhu-tuxing.jpg'), caption: '品牌基础 · 辅助图形系统' },
      { src: P('vi-04-logo-combo.jpg'), caption: '品牌基础 · Logo 组合规范' },
      { src: P('vi-05-mingpian.jpg'), caption: '应用系统 · 名片设计' },
      { src: P('vi-06-xinfeng.jpg'), caption: '应用系统 · 信封信纸' },
      { src: P('vi-07-zhibei.jpg'), caption: '应用系统 · 纸杯等办公物料' },
      { src: P('vi-08-daoshi.jpg'), caption: '应用系统 · 导视标识系统' },
    ],
  },
  {
    year: '2023 — 2026',
    tag: 'More Works · 海报',
    cat: 'print',
    title: 'More Works · 传播海报精选',
    desc: '节气、节日、产品卖点、招商活动——海报按月排期、随热点上线，让品牌在经销商与客户的朋友圈里保持稳定的曝光节奏。跨行业的海报，用同一套方法：先找准卖点，再定画面，让每一张图都能被一眼读懂、一步记住。',
    role: '产品与节点海报创意设计：备案、招商、节气热点',
    results: '20+ 张传播海报覆盖全年节点，服务多个产品线与传播场景',
    tone: 'coral',
    cover: 'haibao-00-cover.jpg',
    gallery: [
      { src: P('haibao-01-jieeryin.jpg'), caption: '洁尔阴软膏 · 产品备案海报（2026）' },
      { src: P('haibao-02-laodongjie.jpg'), caption: '洁尔阴软膏 · 劳动节朋友圈海报（2026）' },
      { src: P('haibao-03-chenxiangsan.jpg'), caption: '八味沉香散 · 朋友圈推广海报（2026）' },
      { src: P('haibao-04-shenwu.jpg'), caption: '人参首乌胶囊 · 参乌合璧产品海报（2025）' },
      { src: P('haibao-05-tangwang.jpg'), caption: '唐王咽炎片二代 · 招商海报（2024）' },
      { src: P('haibao-06-huoxiang.jpg'), caption: '藿香正气丸 · 暑湿感冒推广海报（2023）' },
      { src: P('haibao-07-lixia.jpg'), caption: '立夏节气 · 品牌节气海报（2023）' },
      { src: P('haibao-08-xieshien.jpg'), caption: '谢师恩 · 教师节活动海报（2023）' },
    ],
  },
]

const TONES = {
  teal: 'linear-gradient(135deg, #0d2b28 0%, #16443d 55%, #1f6b5c 100%)',
  blue: 'linear-gradient(135deg, #0c1c33 0%, #14304f 55%, #1d4a75 100%)',
  violet: 'linear-gradient(135deg, #221433 0%, #35204e 55%, #4b2f6e 100%)',
  amber: 'linear-gradient(135deg, #2e2110 0%, #4a3517 55%, #6b4c1e 100%)',
  green: 'linear-gradient(135deg, #10280f 0%, #1c4019 55%, #2a5c24 100%)',
  rose: 'linear-gradient(135deg, #2e1218 0%, #4a1e28 55%, #6b2b3a 100%)',
  steel: 'linear-gradient(135deg, #101820 0%, #1c2a38 55%, #2b4055 100%)',
  wine: 'linear-gradient(135deg, #250d10 0%, #45161c 55%, #672029 100%)',
  coral: 'linear-gradient(135deg, #2b0f1c 0%, #4d1a30 55%, #6f2545 100%)',
}

const CATS = [
  { id: 'all', label: '全部' },
  { id: 'event', label: '展会与活动' },
  { id: 'brand', label: '品牌推广' },
  { id: 'print', label: '包装与物料' },
]

export default function Projects() {
  const [lightbox, setLightbox] = useState(null) // { project, index }
  const [cat, setCat] = useState('all')

  const shown = cat === 'all' ? PROJECTS : PROJECTS.filter((p) => p.cat === cat)

  // 打开弹层时同步到 URL hash，便于分享定位（可选增强）
  useEffect(() => {
    if (lightbox) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const open = (project, index = 0) => {
    if (project.gallery?.length) setLightbox({ project, index })
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionHead
          kicker={
            <p className="section__kicker">
              <DecryptedText text="贰 · WORKS" animateOn="view" speed={50} maxIterations={6} characters="!<>-_\/[]{}=+*^?#" />
            </p>
          }
          en="SELECTED PROJECTS"
          ghost="WORKS"
        >
          <AnimatedContent distance={40} blur={6} duration={0.8}>
            <h2 className="section__title">重点项目</h2>
          </AnimatedContent>
        </SectionHead>
        <p className="ai__lead" style={{ marginBottom: '2.5rem' }}>
          第一句话（品牌启动）→ 一米距离（展会执行）→ 看不见的信任（品牌视觉体系）——<br />
          三个重点项目，一条主线：让品牌被看见、被信任。
        </p>

        <div className="pfilter" role="tablist" aria-label="项目分类筛选">
          {CATS.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={cat === c.id}
              className={`pfilter__btn ${cat === c.id ? 'is-active' : ''}`}
              onClick={() => setCat(c.id)}
            >
              {c.label}
              <em>{c.id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.cat === c.id).length}</em>
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {shown.map((p, i) => {
            const hasGallery = p.gallery?.length > 0
            const cover = hasGallery
              ? (p.cover ? { src: P(p.cover), caption: p.gallery[0].caption } : p.gallery[0])
              : null
            return (
              <AnimatedContent key={p.title} className="ac-fill" distance={56} blur={4} duration={0.9} delay={(i % 3) * 0.1} threshold={0.12}>
                <article
                  className={`pcard ${hasGallery ? 'pcard--clickable' : ''}`}
                  onClick={() => open(p)}
                  onKeyDown={(e) => { if (e.key === 'Enter') open(p) }}
                  tabIndex={hasGallery ? 0 : -1}
                  role={hasGallery ? 'button' : undefined}
                  aria-label={hasGallery ? `查看 ${p.title} 图集` : undefined}
                >
                <div className="pcard__media" style={{ background: TONES[p.tone] }}>
                  {cover ? (
                    <img src={cover.src} alt={cover.caption} loading="lazy" />
                  ) : (
                    <div className="pcard__placeholder" aria-hidden="true">
                      <span className="pcard__placeholder-title">{p.title.split(' · ')[0]}</span>
                      <span className="pcard__placeholder-sub">{p.tag}</span>
                    </div>
                  )}
                  <span className="pcard__tag">{p.tag}</span>
                  {hasGallery && (
                    <span className="pcard__view" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.5" y2="16.5" />
                      </svg>
                      图集 · {p.gallery.length} 张
                    </span>
                  )}
                </div>
                <div className="pcard__body">
                  <div className="pcard__meta">
                    <span className="pcard__year">{p.year}</span>
                    <h3>{p.title}</h3>
                  </div>
                  <p>{p.desc}</p>
                </div>
                </article>
              </AnimatedContent>
            )
          })}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          project={lightbox.project}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
