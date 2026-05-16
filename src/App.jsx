export default function TengzhanWebsite() {
  const scenes = [
    { title: '母婴店', desc: '柔和、安全、亲和的母婴零售空间' },
    { title: '潮玩店', desc: '年轻化、强展示感的潮玩陈列系统' },
    { title: '玩具店', desc: '适合儿童产品与主题陈列的空间方案' },
    { title: '文具店', desc: '清爽有序的文创与学习用品展示' },
    { title: '零食店', desc: '高周转、高陈列效率的零食零售空间' },
    { title: '服装店', desc: '兼顾陈列、收纳与品牌调性的门店系统' },
    { title: '饰品店', desc: '精致、小件、高密度展示解决方案' },
    { title: '超市百货', desc: '适合综合零售与百货卖场的主力货架' },
    { title: '眼镜店', desc: '专业、干净、强调产品质感的展示空间' },
    { title: '精品店', desc: '适合生活方式集合店的高级陈列系统' },
    { title: '便利店', desc: '高效动线与快速补货的便利零售方案' },
    { title: '生活馆', desc: '多品类融合展示的商业空间方案' },
  ];

  const services = [
    { title: '免费设计方案', desc: '根据门店面积与经营需求，提供专业空间规划与货架布局建议。' },
    { title: '3D全景预览', desc: '支持3D效果展示，提前预览门店陈列与空间效果。' },
    { title: '支持定制生产', desc: '支持尺寸、颜色、结构等个性化定制需求。' },
    { title: '设计生产安装一体化', desc: '从方案沟通、生产制作到安装落地，全流程服务支持。' },
    { title: '全国仓储物流', desc: '南京、临沂、义乌多仓发货，提升配送效率与项目交付速度。' },
    { title: '线上线下看厂', desc: '支持线上视频看厂，也欢迎客户预约实地参观工厂与展厅。' },
  ];

  const productSeries = [
    {
      title: '百货货架',
      desc: '适合综合百货、两元店、精品集合店等多品类陈列。',
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: '精品店货架',
      desc: '突出空间质感与产品层次，适合精品零售与生活馆。',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: '便利店货架',
      desc: '兼顾高频补货、动线效率与标准化门店复制。',
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: '潮玩展示系统',
      desc: '适合潮玩、玩具、文创产品的主题化展示空间。',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const brandTags = ['连锁品牌合作', '商业空间展示', '全国仓储发货', '设计生产安装一体化', '支持定制', '3D全景预览'];

  const warehouses = [
    {
      city: '南京仓',
      desc: '覆盖华东及周边区域，支持快速响应。',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      city: '临沂仓',
      desc: '承接北方与华中区域订单发货。',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop',
    },
    {
      city: '义乌仓',
      desc: '衔接商贸集散与全国物流配送。',
      image: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const partnerLogos = ['CHAIN RETAIL', 'MART GROUP', 'LIFE STORE', 'BABY CARE', 'TOY SPACE', 'FASHION PLUS', 'SNACK HOUSE', 'OPTICAL BRAND'];
  const visualCases = ['母婴零售空间效果图', '潮玩展示空间效果图', '精品百货空间效果图', '零食集合店空间效果图'];
  const qrItems = ['业务微信二维码', '设计顾问二维码', '客服微信二维码'];

  const selfTest = () => {
    const requiredGroups = [services, productSeries, scenes, warehouses, qrItems];
    return requiredGroups.every((group) => Array.isArray(group) && group.length > 0);
  };

  const dataReady = selfTest();

  return (
    <div className="bg-[#f5f3ee] text-zinc-900 min-h-screen font-sans scroll-smooth">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/75 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <div className="text-2xl font-black tracking-wide">腾展货架</div>
            <div className="text-xs tracking-[0.25em] text-zinc-500 uppercase mt-1">Tengzhan Shelving</div>
          </div>
          <nav className="hidden lg:flex items-center gap-10 text-sm text-zinc-600">
            <a href="#main" className="hover:text-black transition-all">首页</a>
            <a href="#products" className="hover:text-black transition-all">产品系列</a>
            <a href="#scenes" className="hover:text-black transition-all">行业场景</a>
            <a href="#factory" className="hover:text-black transition-all">工厂实力</a>
            <a href="#contact" className="hover:text-black transition-all">联系我们</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:block border border-zinc-300 px-4 py-2 rounded-xl text-sm hover:bg-zinc-100 transition-all">中文 / EN</button>
            <a href="#contact" className="bg-black text-white px-5 py-3 rounded-2xl hover:scale-105 transition-all duration-300">电话咨询</a>
          </div>
        </div>
      </header>

      {!dataReady && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] bg-red-600 text-white px-5 py-3 rounded-xl shadow-lg">
          页面数据缺失，请检查服务、产品、场景或仓储数据。
        </div>
      )}

      <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?q=80&w=2200&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="absolute top-28 left-8 lg:left-16 z-10 text-sm tracking-[0.45em] uppercase text-white/70">Tengzhan Shelving Factory</div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl lg:text-8xl font-black tracking-tight mb-8 drop-shadow-2xl">腾展货架</h1>
          <p className="text-2xl lg:text-4xl font-semibold mb-6">商业空间展示系统解决方案服务商</p>
          <p className="max-w-4xl mx-auto text-white/85 text-lg lg:text-xl leading-9">
            4万平生产厂房 · 200名专业工人 · 2万平仓储中心 · 南京 / 临沂 / 义乌多仓发货
          </p>
        </div>
        <a href="#main" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 group" aria-label="进入主页">
          <span className="text-xs tracking-[0.3em] uppercase text-white/70">Scroll</span>
          <span className="w-9 h-14 rounded-full border border-white/70 flex justify-center p-2 group-hover:bg-white/10 transition-all">
            <span className="w-1.5 h-3 rounded-full bg-white animate-bounce" />
          </span>
        </a>
      </section>

      <main id="main">
        <section className="relative -mt-14 z-20 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] shadow-2xl border border-zinc-200 p-6 lg:p-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {brandTags.map((tag) => (
                <div key={tag} className="px-5 py-3 rounded-2xl bg-[#f5f3ee] border border-zinc-200 text-sm hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop" alt="腾展货架工厂生产场景" className="w-full h-[460px] object-cover hover:scale-105 transition-all duration-700" />
          </div>
          <div>
            <p className="text-zinc-500 mb-4 uppercase tracking-[0.2em] text-sm">About Us</p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">行业见证者<br />零售空间服务伙伴</h2>
            <div className="text-zinc-600 leading-9 text-lg space-y-6">
              <p>腾展货架专注商业展示货架领域，持续为商超、百货、便利店、品牌门店等商业空间提供专业化展示系统解决方案。</p>
              <p>我们拥有成熟的设计研发团队、现代化生产体系以及完善的全国仓储物流网络，从设计、生产到安装落地，为客户提供一站式服务支持。</p>
              <p>我们不仅是货架制造商，更希望成为品牌成长道路上的长期合作伙伴。</p>
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 lg:grid-cols-6 gap-8 text-center">
            {[
              ['200+', '专业工人团队'],
              ['40000㎡', '生产厂房'],
              ['20000㎡', '仓储中心'],
              ['3大仓储', '南京/临沂/义乌'],
              ['OEM/ODM', '支持定制'],
              ['全国配送', '物流发货'],
            ].map(([num, label]) => (
              <div key={num} className="hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl lg:text-5xl font-black mb-4">{num}</div>
                <div className="text-zinc-500 text-sm lg:text-base">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-28">
          <div className="mb-16">
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">Services</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">一体化商业展示服务</h2>
            <p className="text-zinc-500 max-w-3xl text-lg leading-8">从前期规划到生产安装，我们持续优化零售展示系统与商业空间体验，帮助更多品牌提升门店形象与运营效率。</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => (
              <div key={item.title} className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-5">{item.title}</h3>
                <p className="text-zinc-500 leading-8">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="max-w-7xl mx-auto px-6 py-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
            <div>
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">Product Series</p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">核心产品系列</h2>
              <p className="text-zinc-500 max-w-3xl text-lg leading-8">腾展货架持续迭代零售展示系统，满足不同商业空间与品牌风格需求。</p>
            </div>
            <a href="#contact" className="bg-black text-white px-7 py-4 rounded-2xl text-center hover:scale-105 transition-all">咨询产品定制</a>
          </div>
          <div className="grid lg:grid-cols-4 gap-6">
            {productSeries.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-[2rem] bg-white border border-zinc-200 shadow-lg hover:-translate-y-2 transition-all duration-500">
                <div className="overflow-hidden h-[320px]"><img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" /></div>
                <div className="p-8"><h3 className="text-2xl font-bold mb-3">{item.title}</h3><p className="text-zinc-500 leading-7 mb-5">{item.desc}</p><span className="text-sm font-semibold border-b border-black">查看详情</span></div>
              </article>
            ))}
          </div>
        </section>

        <section id="factory" className="relative py-32 overflow-hidden bg-zinc-950 text-white">
          <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1800&auto=format&fit=crop')" }} />
          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-zinc-400 uppercase tracking-[0.2em] text-sm mb-4">Factory View</p>
              <h2 className="text-4xl lg:text-6xl font-black leading-tight mb-8">工厂航拍区</h2>
              <p className="text-zinc-300 text-lg leading-9 mb-8">以真实工厂、仓储、生产线和发货体系展示源头工厂实力。后续可替换为腾展货架实拍航拍视频或厂区照片。</p>
              <div className="grid grid-cols-3 gap-4">{['源头工厂', '实力可见', '稳定交付'].map((item) => <div key={item} className="bg-white/10 backdrop-blur rounded-2xl p-5 text-center border border-white/10">{item}</div>)}</div>
            </div>
            <div className="aspect-video rounded-[2rem] border border-white/20 bg-black/40 flex items-center justify-center shadow-2xl">
              <div className="text-center"><div className="w-20 h-20 mx-auto rounded-full bg-white text-black flex items-center justify-center text-3xl mb-5">▶</div><p className="text-zinc-300">工厂视频背景 / 航拍视频预留位</p></div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-28">
          <div className="mb-16"><p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">Warehouse & Delivery</p><h2 className="text-4xl lg:text-5xl font-bold mb-6">发货仓储体系</h2><p className="text-zinc-500 max-w-3xl text-lg leading-8">南京、临沂、义乌多仓协同，支持国内外物流发货，提升项目交付效率。</p></div>
          <div className="grid lg:grid-cols-3 gap-6">
            {warehouses.map((item) => (
              <div key={item.city} className="group bg-white rounded-[2rem] overflow-hidden border border-zinc-200 shadow-lg hover:-translate-y-2 transition-all duration-500">
                <div className="h-72 overflow-hidden"><img src={item.image} alt={item.city} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" /></div>
                <div className="p-8"><h3 className="text-2xl font-bold mb-3">{item.city}</h3><p className="text-zinc-500 leading-7">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="scenes" className="bg-[#ebe7df] py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16"><p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">Retail Solutions</p><h2 className="text-4xl lg:text-5xl font-bold mb-6">适配多种商业空间</h2><p className="text-zinc-500 max-w-3xl text-lg leading-8">腾展货架服务多行业零售场景，以专业展示系统帮助品牌提升空间效率与商业体验。</p></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {scenes.map((scene, index) => (
                <div key={scene.title} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-700 to-zinc-950 aspect-[4/5] cursor-pointer shadow-lg hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_45%)] group-hover:scale-110 transition-all duration-700" /><div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-end p-6 text-white"><div><p className="text-xs tracking-[0.2em] uppercase text-zinc-300 mb-2">{String(index + 1).padStart(2, '0')}</p><h3 className="text-2xl font-bold mb-3 group-hover:translate-x-1 transition-all duration-300">{scene.title}</h3><p className="text-sm text-zinc-300 leading-6 opacity-0 group-hover:opacity-100 transition-all duration-500">{scene.desc}</p></div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-28">
          <div className="mb-16"><p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">AI Visual Concept</p><h2 className="text-4xl lg:text-5xl font-bold mb-6">商业空间效果图</h2><p className="text-zinc-500 max-w-3xl text-lg leading-8">在真实案例不足时，可先用高质量商业空间效果图展示不同业态的应用方向，后续逐步替换为真实落地案例。</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{visualCases.map((item) => <div key={item} className="rounded-[2rem] bg-white border border-zinc-200 p-8 min-h-[240px] flex items-end shadow-lg bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.08),transparent_50%)] hover:-translate-y-2 transition-all duration-500"><h3 className="text-2xl font-bold leading-tight">{item}</h3></div>)}</div>
        </section>

        <section className="bg-white border-y border-zinc-200 py-20">
          <div className="max-w-7xl mx-auto px-6"><div className="text-center mb-12"><p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">Partners</p><h2 className="text-4xl font-bold">服务连锁品牌与创业伙伴</h2></div><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{partnerLogos.map((logo) => <div key={logo} className="h-24 rounded-2xl border border-zinc-200 bg-[#f5f3ee] flex items-center justify-center text-zinc-500 font-bold tracking-widest hover:bg-black hover:text-white transition-all duration-300">{logo}</div>)}</div></div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-28">
          <div className="mb-16"><p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">Workflow</p><h2 className="text-4xl lg:text-5xl font-bold mb-6">简单高效的合作流程</h2></div>
          <div className="grid lg:grid-cols-6 gap-6">{['需求沟通', '免费方案设计', '3D效果确认', '生产制作', '物流配送', '安装落地'].map((step, index) => <div key={step} className="bg-white border border-zinc-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"><div className="text-zinc-400 text-sm mb-4">{String(index + 1).padStart(2, '0')}</div><div className="text-xl font-bold leading-8">{step}</div></div>)}</div>
        </section>

        <section className="bg-gradient-to-br from-[#d8d2c8] to-[#f3f0ea] border-y border-zinc-200">
          <div className="max-w-5xl mx-auto px-6 py-28 text-center"><h2 className="text-4xl lg:text-6xl font-black leading-tight mb-10">不只是货架<br />更是商业空间展示系统</h2><p className="text-zinc-600 text-xl leading-10 max-w-4xl mx-auto">腾展货架不仅提供货架产品，更专注打造更高效、更现代化的商业展示空间。<br />与品牌同行，与创业者共同成长。</p></div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-6 py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">Contact Us</p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">欢迎咨询合作</h2>
              <p className="text-zinc-500 text-lg leading-8 max-w-2xl mb-10">支持线上视频看厂，也欢迎预约实地参观。免费获取报价、设计方案与商业空间规划建议。</p>
              <div className="bg-white border border-zinc-200 rounded-3xl p-10 space-y-7 shadow-lg">
                <div><div className="text-zinc-500 mb-2">公司名称</div><div className="text-2xl font-bold">腾展货架</div></div>
                <div><div className="text-zinc-500 mb-2">企业联系电话</div><div className="text-2xl font-bold">+86 130 XXXX XXXX</div></div>
                <div><div className="text-zinc-500 mb-2">微信咨询</div><div className="text-xl">扫码添加业务 / 设计 / 客服微信</div></div>
                <div><div className="text-zinc-500 mb-2">工厂地址</div><div className="text-xl leading-8">请填写详细地址</div></div>
              </div>
            </div>
            <div className="bg-white border border-zinc-200 rounded-[2rem] p-8 lg:p-10 shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">微信咨询二维码</h3>
              <div className="grid sm:grid-cols-3 gap-5 mb-8">
                {qrItems.map((item) => (
                  <div key={item} className="text-center">
                    <div className="aspect-square rounded-2xl border border-zinc-200 bg-[#f5f3ee] flex items-center justify-center mb-4 overflow-hidden">
                      <div className="w-28 h-28 grid grid-cols-5 gap-1 opacity-70">
                        {Array.from({ length: 25 }).map((_, i) => <span key={i} className={`${i % 2 === 0 || i === 7 || i === 17 ? 'bg-black' : 'bg-zinc-300'} rounded-sm`} />)}
                      </div>
                    </div>
                    <p className="text-sm text-zinc-600">{item}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-black text-white p-6">
                <div className="text-zinc-400 text-sm mb-2">企业联系电话</div>
                <div className="text-3xl font-black">+86 130 XXXX XXXX</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-6">
          <div><div className="text-2xl font-black mb-2">腾展货架</div><div className="text-zinc-400">Tengzhan Shelving · 商业空间展示系统解决方案服务商</div></div>
          <div className="text-zinc-400 text-sm leading-7">SEO关键词：百货货架厂家｜精品店货架定制｜商超货架工厂｜零售展示系统｜货架源头工厂</div>
        </div>
      </footer>

      <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3">
        <a href="#contact" className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all" title="微信咨询">微</a>
        <a href="#home" className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all" title="返回顶部">↑</a>
      </div>
    </div>
  );
}
