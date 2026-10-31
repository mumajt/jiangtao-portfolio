import { useState, useEffect } from 'react'
import Lightbox from './Lightbox.jsx'
import DecryptedText from './rb/DecryptedText.jsx'
import AnimatedContent from './rb/AnimatedContent.jsx'
import SectionHead from './SectionHead.jsx'

const P = (name) => `projects/${name}`

const PROJECTS = [
  {
    year: '2019 — 2024',
    tag: '展会全案',
    cat: 'event',
    title: '全国药交会 · 历届参展执行',
    desc: '国药会全流程：前期宣传物料设计、展会视觉方案对接、印刷质量跟踪、现场布展与执行协调。图为第 88 届上海国药会现场。',
    role: '视觉方案对接 / 印刷跟产 / 现场布展与执行协调，一岗到底',
    results: '连续 5 届（2019 — 2024）全国药交会参展全流程执行，覆盖上海等多地展会',
    tone: 'teal',
    gallery: [
      { src: P('pharmchina-01-gate.jpg'), caption: '第 88 届全国药品交易会 · 2024 上海' },
      { src: P('pharmchina-02-booth-design.jpg'), caption: '展位设计方案效果图' },
      { src: P('pharmchina-03-crowd.jpg'), caption: '展位现场 · 产品陈列与洽谈区' },
      { src: P('pharmchina-04-visitors.jpg'), caption: '现场观众翻阅产品画册' },
    ],
  },
  {
    year: '2019 — 2024',
    tag: '展会全案',
    cat: 'event',
    title: '双品会 · 历届参展设计',
    desc: '医药双品会前期设计执行：宣传物料、视觉方案对接与印刷落地，提升现场品牌展示效果。图为第 9 届重庆双品汇现场。',
    role: '宣传物料设计 / 视觉方案对接 / 印刷落地跟进',
    results: '多届双品汇参展执行，产品登上第 9 届双品汇欢迎晚宴主舞台大屏',
    tone: 'blue',
    gallery: [
      { src: P('shuangpinhui-01-gala.jpg'), caption: '2024 国际大健康产业（重庆）博览会 · 第 9 届双品汇欢迎晚宴，产品荣登主舞台大屏' },
      { src: P('shuangpinhui-02-booth-design.jpg'), caption: '展位设计方案效果图' },
      { src: P('shuangpinhui-03-booth-site.jpg'), caption: '济世药业展位现场 · 品牌形象与产品展示' },
      { src: P('shuangpinhui-04-negotiation.jpg'), caption: '展位洽谈区 · 客商咨询对接' },
    ],
  },
  {
    year: '2019.02 — 2019.10',
    tag: '品牌推广',
    cat: 'brand',
    title: '华北制药膏方事业部 · 品牌推广全案',
    desc: '新事业部品牌从 0 到 1：全国启动大会主视觉与会场物料全案，膏方系列画册、中药健康手册、四大膏方产品海报及手提袋、桌垫等物料设计与印刷对接。',
    role: '事业部品牌设计 0 → 1 全案：主视觉、画册、包装海报、会场物料',
    results: '全国启动大会主视觉及 30+ 项物料设计并完成印刷落地',
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
    year: '2023',
    tag: '包装设计',
    cat: 'print',
    title: '药品包装 · 系列产品包装设计',
    desc: '石黄抗菌胶囊、牛黄解毒片、三黄片、蒲公英片、大山楂丸、酒无罪等多个产品的包装设计与印刷落地，覆盖处方药与健康食品。',
    role: '包装设计 / 印刷对接 / 平面展开图与立体效果图输出',
    results: '6+ 个产品包装设计并上市，覆盖处方药与健康食品线',
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
    tag: '品牌 VI',
    cat: 'brand',
    title: '崇阳酒业 · 品牌 VI 视觉系统',
    desc: '崇阳酒业品牌 VI 全案：Logo 与标准字规范、辅助图形系统、办公应用与导视系统设计，贯穿品牌基础与应用两大体系。',
    role: 'VI 视觉系统设计：基础体系 + 应用体系全案',
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
    year: '2016 — 2017',
    tag: '大型活动',
    cat: 'event',
    title: '金盆地集团 · 原酒节（种酒节）',
    desc: '连续两届万人级传统文化活动：非遗结合、5 天主题日策划、全场视觉与氛围物料设计。图为崇阳 130 周年庆典暨第四届种酒节与 2017 第五届种酒节。',
    role: '活动主视觉与全场氛围物料设计、主题日策划',
    results: '连续两届万人级活动全案落地（第四届 + 第五届种酒节）',
    tone: 'amber',
    gallery: [
      { src: P('zhongjiu-01-drum.jpg'), caption: '2017 第五届金盆地种酒节 · 活动主视觉鼓面与红毯现场' },
      { src: P('zhongjiu-02-stage-4th.jpg'), caption: '崇阳 130 周年庆典暨第四届种酒节主舞台（成都·崇州）' },
      { src: P('zhongjiu-03-ceremony.jpg'), caption: '「休明盛世 · 开坛放酒」仪式环节' },
      { src: P('zhongjiu-04-parade.jpg'), caption: '祭酒仪仗入场 · 传统非遗仪式呈现' },
      { src: P('zhongjiu-05-guests.jpg'), caption: '嘉宾席与现场观众 · 万人级活动规模' },
    ],
  },
  {
    year: '2016.10 — 2017.01',
    tag: '空间视觉',
    cat: 'event',
    title: '金盆地 · 创 3A 工业旅游景区',
    desc: '川酒文博馆与酿酒基地景观氛围改造：景点介绍牌、酒文化视觉系统设计与落地，助力金盆地成功创建国家 3A 级工业旅游景区。',
    role: '景区视觉系统与景观氛围设计、介绍牌与导视落地',
    results: '助力金盆地成功创建国家 3A 级工业旅游景区',
    tone: 'green',
    gallery: [
      { src: P('jingqu-01-wenboguan.jpg'), caption: '川酒文博馆 · 景观氛围改造后实景' },
      { src: P('jingqu-02-gate.jpg'), caption: '金盆地集团大门 · 酒文化博览园标识与氛围' },
      { src: P('jingqu-03-hall.jpg'), caption: '展馆内部陈列与参观动线' },
      { src: P('jingqu-04-diorama.jpg'), caption: '川酒酿造工艺微缩场景展示' },
      { src: P('jingqu-05-wine-garden.jpg'), caption: '「有朋四海家 · 种酒藏天下」种酒园区氛围改造' },
      { src: P('jingqu-06-review.jpg'), caption: '3A 景区评审专家实地考察' },
    ],
  },
  {
    year: '2024 — 至今',
    tag: '品牌全案',
    cat: 'brand',
    title: '恋唯家定制家居 · 品牌内容矩阵',
    desc: '系列板材花色电子画册与色卡设计（五金玻璃 / 爱格 / Branoo / 膜类等多个系列）、官网网页规划、小红书 / 抖音 / 视频号 / 公众号内容设计与拍摄剪辑。图为系列电子画册页面。',
    role: '品牌内容设计与新媒体矩阵运营：画册、色卡、官网、短视频',
    results: '4+ 系列电子画册 / 色卡上线，四大新媒体平台内容常态化运营',
    tone: 'rose',
    gallery: [
      { src: P('lianweijia-00-cover.jpg'), caption: '恋唯家系列电子画册 · 系列铺排总览' },
      { src: P('lianweijia-01.jpg'), caption: '《五金-玻璃系列产品画册》2026.07 · 封面与品牌视觉' },
      { src: P('lianweijia-02.jpg'), caption: '《爱格系列电子色卡》· 设计理念版面' },
      { src: P('lianweijia-03.jpg'), caption: '《五金-玻璃系列画册》· 玻璃产品展示页' },
      { src: P('lianweijia-04.jpg'), caption: '《Branoo 系列电子色卡》· 应用场景页' },
      { src: P('lianweijia-05.jpg'), caption: '《膜类系列电子色卡合集》· 色彩分组总览' },
      { src: P('lianweijia-06.jpg'), caption: '《爱格系列电子色卡》· 爱格系列花色总览' },
    ],
  },
  {
    year: '2023 — 2026',
    tag: '传播海报',
    cat: 'print',
    title: '医药品牌 · 传播海报精选',
    desc: '洁尔阴、八味沉香散、人参首乌胶囊、唐王咽炎片等产品的备案海报、朋友圈海报、节气热点与招商海报设计，覆盖全年传播节点。',
    role: '产品与节点海报创意设计：备案、招商、节气热点',
    results: '20+ 张传播海报覆盖全年节点，服务多个医药产品线',
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
          en="SELECTED WORKS"
          ghost="WORKS"
        >
          <AnimatedContent distance={40} blur={6} duration={0.8}>
            <h2 className="section__title">精选项目</h2>
          </AnimatedContent>
        </SectionHead>

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
