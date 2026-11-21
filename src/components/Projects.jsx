import { useState, useEffect } from 'react'
import Lightbox from './Lightbox.jsx'
import AnimatedContent from './rb/AnimatedContent.jsx'
import SectionHead from './SectionHead.jsx'

// 图片已统一转为 WebP（原 JPG 备份于 _images-backup/）
const P = (name) => `projects/${name.replace(/\.jpg$/, '.webp')}`

/* ============ 三个重点项目：按作品集章节叙事展开 ============ */
const CHAPTERS = [
  {
    id: 'chapter-01',
    no: '01',
    kicker: '项目一 · 品牌从零启动',
    time: '2019.02 — 2019.10',
    title: '华北制药膏方事业部',
    sub: '品牌的起点不是 logo，而是它对市场的第一句话',
    en: 'NCPC · Brand Launch From Zero',
    lead: '全国启动大会是新事业部第一次公开亮相。从 LED 主屏、横幅、门型展架，到邀请函、桌垫、名片模板，二十余项物料共用同一套主视觉延展——保证会场任何角度看到的，是同一个品牌。设计之外，负责印刷对接与打样确认，物料提前到位，大会如期召开。',
    stats: [
      { num: '20+', label: '启动大会物料设计' },
      { num: '5+', label: '膏方产品系列' },
      { num: '1', label: '套品牌视觉体系' },
      { num: '0', label: '延期 · 印刷失误' },
    ],
    role: '主视觉延展设计 / 全部物料设计 / 印刷对接与落地跟踪',
    tone: 'violet',
    summary: {
      kicker: '项目一 · 小结',
      title: '一个事业部 · 两个月 · 完整亮相',
      en: 'From Zero to a Full Brand Debut',
      desc: '从无到有建立品牌视觉体系：主视觉、启动大会物料、产品画册、中药健康手册、对折页、手提袋——全部由同一套视觉语言贯穿，并在全国启动大会如期落地；画册与手册成为后续各省区招商的标准配备。',
    },
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
    id: 'chapter-02',
    no: '02',
    kicker: '项目二 · 展会执行',
    time: '2019 — 2024',
    title: '全国医药展会 · 视觉执行与现场落地',
    sub: '品牌与客户之间，只有一米的距离',
    en: 'Exhibition Execution',
    lead: '全国药品交易会：两千余家医药企业、十万计专业观众共赴的行业盛事，也是企业年度招商的主战场。在这里，十余项物料在三天里同时说话，任何一处失误都会被放大。连续 5 年与市场部协作，深度参与历届全国药交会、双品汇、星辰会、中国药品大会——作为对接乙方设计公司的枢纽把控视觉方案落地，独立完成邀请函与现场海报、展架设计，展前上样参展、会后公众号传播，把每一届展会当作一次系统交付。',
    stats: [
      { num: '5+ 年', label: '大展连续参展' },
      { num: '10+ 届', label: '国药会 · 双品汇 · 星辰会' },
      { num: '十余项', label: '单届落地物料' },
      { num: '0', label: '延期 · 印刷事故' },
    ],
    role: '视觉方案对接 / 邀请函·海报·展架设计 / 现场执行 / 会后传播',
    tone: 'teal',
    phases: [
      {
        no: '前',
        title: '参展前 · 物料设计准备',
        en: 'Pre-show',
        desc: '一场展会，十余项物料同时上线：邀请函、产品画册、易拉宝、伴手礼、参会服装——按物料清单逐项推进，提前两周完成打样确认与分箱贴标，物料到场零缺件。',
      },
      {
        no: '中',
        title: '参展中 · 展会现场',
        en: 'At-show',
        desc: '三天会期，物料在现场同时「说话」：产品展示、动线海报、产品展架、现场大屏——每一处都是品牌与客户的一米距离。',
      },
      {
        no: '后',
        title: '参展后 · 品牌宣传推广',
        en: 'Post-show',
        desc: '展会闭幕，传播才刚开始：当天发布展后回顾推文，新品、人气、获奖内容持续输出——把三天的现场热度，延成一个月的线上声量。',
      },
    ],
    venues: ['第 84 届全国药品交易会 · 上海国家会展中心', '第 85 届全国药品交易会 · 上海国家会展中心', '双品汇 · 重庆', '星辰会 · 广州', '中国药品大会'],
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
    id: 'chapter-03',
    no: '03',
    kicker: '项目三 · 从纸间到指尖',
    time: '2024.10 — 至今',
    title: '恋唯家 & 嘉栩木业 · 双品牌视觉体系',
    sub: '看不见的柜子，看得见的信任',
    en: 'Every Touchpoint',
    lead: '全屋定制这行生意难在信任：客户签单时柜子还没生产，板材花色、封边工艺、五金配置全靠讲——讲不清，客户就转身去货比三家。我为恋唯家、嘉栩两品牌搭建标准化电子色卡体系，落地 15 个产品系列，配套工艺、五金等产品画册：企业简介与品牌定位打底，花色全览一页索引全部色号，一页一色，饰面实拍、肌理文案与色号参数条逐页排清。嘉栩 GALLUX 品牌标志及 VI 应用亦由本人设计。同一套产品语言，串联画册、名片小程序、官网与四端内容——从纸间到指尖，全部出自同一双手。',
    stats: [
      { num: '2', label: '品牌内容视觉' },
      { num: '15', label: '系列电子色卡' },
      { num: '4 端', label: '新媒体内容运营' },
      { num: '2', label: '官网 & 小程序' },
    ],
    role: '电子色卡体系与结构模板 / 嘉栩标志与 VI / 企业微信名片与小程序界面 / 四端内容视觉',
    tone: 'rose',
    blocks: [
      {
        id: 'seka',
        title: '色板系列画册 · 客户选色的第一工具',
        en: 'Series Catalog',
        copy: '15+ 产品系列画册：企业简介与品牌定位打底，基材与环保认证背书，花色全览一页索引全部色号；一页一色，饰面实拍、肌理文案、适配空间与色号参数条逐页排清。',
        gallery: [
          { src: P('lianweijia-00-cover.jpg'), caption: '系列电子画册 · 铺排总览' },
          { src: P('lwj-seka01.jpg'), caption: '系列电子色卡 · 品牌定位与花色总览' },
          { src: P('lwj-seka02.jpg'), caption: '电子色卡 · 花色全览（全部色号一页索引）' },
          { src: P('lwj-seka03.jpg'), caption: '电子色卡内页 · 一页一色：饰面实拍、肌理文案与色号参数条' },
          { src: P('lwj-seka04.jpg'), caption: '电子色卡内页 · 一页一色（另一花色）' },
          { src: P('lianweijia-05.jpg'), caption: '《膜类系列电子色卡合集》· 色彩分组总览' },
        ],
      },
      {
        id: 'gallux',
        title: '嘉栩 GALLUX · 标志设计及 VI 应用',
        en: 'Brand Mark & VI',
        copy: '图形化字标（G 视觉符号）+ 英文标志 GALLUX + 中文标志嘉栩：标准组合的大小、间距与相对位置固定，各元素必须以标准组合形式出现——标志溯源与全套应用规范由本人设计。',
        gallery: [
          { src: P('lwj-gxlogo.jpg'), caption: '嘉栩 GALLUX 品牌标志 · 标志标准组合与标志溯源（本人设计）' },
        ],
      },
      {
        id: 'card',
        title: '一张名片，装下整个工厂线上门面',
        en: 'WeChat Work Card · The Brand\'s Digital Front Door',
        copy: '企业微信名片 & 微信小程序，从界面到内容搭建：品牌形象、产品系列（贝拉角 / Branoo / 萨维奥拉等）、工厂实力、典型案例与关键联系人，装进业务员随手的每一张名片。业务员谈单时发出去的不是一张卡片，而是品牌的线上门面——客户在手机上了解产品与工厂，信任就已经开始建立。',
        gallery: [
          { src: P('lwj-card.jpg'), caption: '企业微信名片小程序 · 整页界面与内容架构', portrait: true },
        ],
      },
      {
        id: 'mp',
        title: '恋唯家 · 产品小程序',
        en: 'Product WeChat Mini Program',
        copy: '门店的板材墙，装进客户的手机里：板材与饰面、材料工艺、系统柜、案例分享四大类目——客户在手机上翻完花色与工艺，选材体验从门店延伸到指尖。',
        gallery: [
          { src: P('lwj-mp.jpg'), caption: '恋唯家产品小程序 · 四大类目界面', portrait: true },
          { src: P('lwj-web.jpg'), caption: '恋唯家官网 · 客户线上认识品牌的第一触点', portrait: true },
        ],
      },
      {
        id: 'gzh',
        title: '微信公众号 & 视频号 & 小红书 & 抖音',
        en: 'Content Matrix',
        copy: '业务员发画册靠手，发内容靠转发。两个品牌的内容矩阵按系列建库：每个产品系列一套头图语言、一篇卖点推文，新品上市当天同步上线——经销商转发朋友圈、业务员发给客户，随手就能拿走的品牌内容资产。',
        gallery: [
          { src: P('lwj-gzh.jpg'), caption: '公众号推文头图 · 一产品一推文，新品上市当天上线', portrait: true },
        ],
      },
    ],
  },
]

/* ============ More Works：其他作品（紧凑卡） ============ */
const MORE = [
  {
    title: '药品包装 & 广审画面',
    tag: '包装与合规 · 2019 — 2024',
    desc: '包装版式、条码拼版、广审海报画面——在合规框架内做出清晰、有卖相的画面。规范越多，越见功底。',
    tone: 'steel',
    cover: 'baozhuang-01-shihuang.jpg',
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
    title: '金盆地种酒节 & 创 3A 景区',
    tag: '大型活动 · 2016 — 2017',
    desc: '连续两届万人级传统文化活动视觉与现场执行；同期负责川酒文博馆创 3A 景区的导视与酒文化氛围改造设计。',
    tone: 'amber',
    cover: 'zhongjiu-02-stage-4th.jpg',
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
    title: '崇阳酒业 · 品牌 VI 视觉系统',
    tag: '品牌 VI · 2016 — 2017',
    desc: 'Logo 与标准字规范、辅助图形系统、办公应用与导视系统，贯穿品牌基础与应用两大体系。',
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
    title: 'More Works · 传播海报精选',
    tag: '跨行业海报 · 2023 — 2026',
    desc: '节气、节日、产品卖点、招商活动——先找准卖点，再定画面，让每一张图都能被一眼读懂、一步记住。',
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
  teal: 'linear-gradient(135deg, #efebe0 0%, #e3ddcd 100%)',
  violet: 'linear-gradient(135deg, #efebe0 0%, #e3ddcd 100%)',
  amber: 'linear-gradient(135deg, #efebe0 0%, #e3ddcd 100%)',
  rose: 'linear-gradient(135deg, #efebe0 0%, #e3ddcd 100%)',
  steel: 'linear-gradient(135deg, #efebe0 0%, #e3ddcd 100%)',
  wine: 'linear-gradient(135deg, #efebe0 0%, #e3ddcd 100%)',
  coral: 'linear-gradient(135deg, #efebe0 0%, #e3ddcd 100%)',
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null) // { project, index }

  useEffect(() => {
    if (lightbox) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const open = (info, index = 0) => {
    if (info.gallery?.length) setLightbox({ project: info, index })
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionHead
          kicker={
            <p className="section__kicker">
              叁 · WORKS
            </p>
          }
          en="SELECTED PROJECTS"
          ghost="WORKS"
        >
          <AnimatedContent distance={16} blur={2} duration={0.5}>
            <h2 className="section__title">重点项目</h2>
          </AnimatedContent>
        </SectionHead>
        <p className="projects__arc">
          第一句话（品牌从零启动）→ 一米距离（展会执行）→ 看不见的信任（双品牌视觉体系）——
          三个重点项目，一条主线：让品牌被看见、被信任。
        </p>

        {/* ============ 章节式项目展示（按作品集结构） ============ */}
        <div className="chapters">
          {CHAPTERS.map((ch) => (
            <article className="chapter" id={ch.id} key={ch.id}>
              <div className="chapter__head">
                <div className="chapter__no" aria-hidden="true">{ch.no}</div>
                <div className="chapter__headtext">
                  <p className="chapter__kicker">
                    {ch.kicker}<i /><span>{ch.time}</span>
                  </p>
                  <h3 className="chapter__title">{ch.title}</h3>
                  <p className="chapter__sub">{ch.sub}</p>
                  <p className="chapter__en">{ch.en}</p>
                </div>
              </div>

              <AnimatedContent distance={16} blur={5} duration={0.55} threshold={0.1}>
                <p className="chapter__lead">{ch.lead}</p>
              </AnimatedContent>

              <AnimatedContent distance={12} blur={1} duration={0.55} threshold={0.15}>
                <div className="chapter__stats">
                  {ch.stats.map((s, i) => (
                    <div className="statbar" key={s.label + i}>
                      <div className="statbar__num">{s.num}</div>
                      <div className="statbar__lbl">{s.label}</div>
                    </div>
                  ))}
                </div>
              </AnimatedContent>

              <p className="chapter__role">[ 角色：{ch.role} ]</p>

              {/* 项目二：参展前 / 中 / 后 三阶段 */}
              {ch.phases && (
                <div className="chapter__phases">
                  {ch.phases.map((ph, i) => (
                    <AnimatedContent key={ph.no} className="ac-fill" distance={16} blur={2} duration={0.55} delay={i * 0.08} threshold={0.12}>
                      <div className="phase">
                        <div className="phase__glyph" aria-hidden="true">{ph.no}</div>
                        <div className="phase__body">
                          <p className="phase__en">{ph.en}</p>
                          <h4>{ph.title}</h4>
                          <p>{ph.desc}</p>
                        </div>
                      </div>
                    </AnimatedContent>
                  ))}
                </div>
              )}

              {/* 项目二：历届展会届次条 */}
              {ch.venues && (
                <AnimatedContent distance={10} blur={1} duration={0.5} threshold={0.2}>
                  <div className="chapter__venues">
                    <span className="venues__lbl">历届现场</span>
                    {ch.venues.map((v) => <span className="venues__chip" key={v}>{v}</span>)}
                  </div>
                </AnimatedContent>
              )}

              {/* 图集：单组或分子版块 */}
              {ch.gallery && (
                <div className="chapter__gallery">
                  {ch.gallery.map((g, i) => (
                    <AnimatedContent key={g.src} distance={24} blur={2} duration={0.5} delay={(i % 4) * 0.05} threshold={0.1}>
                      <figure
                        className={`gitem${i === 0 ? ' gitem--lead' : ''}${g.portrait ? ' gitem--fit' : ''}`}
                        onClick={() => open({ title: ch.title, tag: ch.kicker, year: ch.time, desc: ch.lead, role: ch.role, gallery: ch.gallery }, i)}
                      >
                        <div className="gitem__media" style={{ background: TONES[ch.tone] }}>
                          <img src={g.src} alt={g.caption} loading="lazy" />
                          <span className="gitem__idx" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <figcaption>
                          <em>{String(i + 1).padStart(2, '0')}</em>
                          <span>{g.caption}</span>
                        </figcaption>
                      </figure>
                    </AnimatedContent>
                  ))}
                </div>
              )}

              {/* 项目三：分子版块展示（色卡 / 标志 / 名片 / 小程序 / 内容矩阵） */}
              {ch.blocks && ch.blocks.map((blk) => (
                <div className="chapter__block" key={blk.id} id={`${ch.id}-${blk.id}`}>
                  <div className="block__head">
                    <h4 className="block__title">{blk.title}</h4>
                    <p className="block__en">{blk.en}</p>
                  </div>
                  <AnimatedContent distance={12} blur={1} duration={0.5} threshold={0.15}>
                    <p className="block__copy">{blk.copy}</p>
                  </AnimatedContent>
                  <div className="chapter__gallery chapter__gallery--block">
                    {blk.gallery.map((g, i) => (
                      <AnimatedContent key={g.src} distance={24} blur={2} duration={0.5} delay={(i % 4) * 0.05} threshold={0.1}>
                        <figure
                          className={`gitem${i === 0 && blk.gallery.length > 2 ? ' gitem--lead' : ''}${g.portrait ? ' gitem--fit' : ''}`}
                          onClick={() => open({ title: blk.title, tag: ch.kicker, year: ch.time, desc: blk.copy, role: ch.role, gallery: blk.gallery }, i)}
                        >
                          <div className="gitem__media" style={{ background: TONES[ch.tone] }}>
                            <img src={g.src} alt={g.caption} loading="lazy" />
                            <span className="gitem__idx" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                          </div>
                          <figcaption>
                            <em>{String(i + 1).padStart(2, '0')}</em>
                            <span>{g.caption}</span>
                          </figcaption>
                        </figure>
                      </AnimatedContent>
                    ))}
                  </div>
                </div>
              ))}

              {/* 项目一：小结 */}
              {ch.summary && (
                <AnimatedContent distance={16} blur={2} duration={0.55} threshold={0.15}>
                  <div className="chapter__summary">
                    <div className="summary__glyph" aria-hidden="true">结</div>
                    <div className="summary__body">
                      <p className="summary__kicker">{ch.summary.kicker}</p>
                      <h4>{ch.summary.title}</h4>
                      <p className="summary__en">{ch.summary.en}</p>
                      <p className="summary__desc">{ch.summary.desc}</p>
                    </div>
                  </div>
                </AnimatedContent>
              )}
            </article>
          ))}
        </div>

        {/* ============ More Works：其他作品 ============ */}
        <div className="more">
          <h3 className="sublabel">
            <span className="sublabel__cn">More Works</span>
            <i className="sublabel__dot" />
            <span className="sublabel__en">其他作品 · 点击查看图集</span>
          </h3>
          <div className="more__grid">
            {MORE.map((m, i) => (
              <AnimatedContent key={m.title} className="ac-fill" distance={16} blur={2} duration={0.5} delay={(i % 2) * 0.08} threshold={0.12}>
                <article className="mcard" onClick={() => open({ title: m.title, tag: m.tag, desc: m.desc, gallery: m.gallery })} tabIndex={0} role="button" onKeyDown={(e) => { if (e.key === 'Enter') open({ title: m.title, tag: m.tag, desc: m.desc, gallery: m.gallery }) }}>
                  <div className="mcard__media" style={{ background: TONES[m.tone] }}>
                    <img src={P(m.cover)} alt={m.title} loading="lazy" />
                    <span className="mcard__view">图集 · {m.gallery.length} 张</span>
                  </div>
                  <div className="mcard__body">
                    <span className="mcard__tag">{m.tag}</span>
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </div>
                </article>
              </AnimatedContent>
            ))}
          </div>
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
