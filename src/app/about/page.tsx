import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center px-margin-desktop py-section-gap overflow-hidden">
        <div className="grid md:grid-cols-2 gap-gutter items-center w-full max-w-7xl mx-auto">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm mb-6 uppercase tracking-widest">
              Est. 2024 • Boutique Jewelry
            </span>
            <h1 className="font-display-lg text-display-lg text-ink-brown mb-6 leading-tight">
              Pretty Things, Always!
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-10">
              We believe that beautiful details shouldn't be a luxury. Discover
              our curated collection designed to bring a touch of
              Korean-inspired elegance and effortless confidence to your
              everyday style.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg active:scale-95">
                Explore Collection
              </button>
              <button className="glass-card border border-ink-brown/10 text-ink-brown px-8 py-4 rounded-full font-semibold hover:bg-white/50 transition-all active:scale-95">
                Our Story
              </button>
            </div>
          </div>
          <div className="relative h-[600px] hidden md:block">
            {/* Floating Collage */}
            <div
              className="absolute top-10 right-0 w-64 h-80 rounded-xl overflow-hidden ambient-shadow floating-animation stagger-1"
            >
              <Image
                fill
                className="object-cover"
                alt="Premium gold rings"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkZOGqnhlb1TKp8I3ei7zrn00ywtmQaf18dgolRpIB83fMV_fR0uO826qm-fZv5ctiwklSCYAYsMkn6ySCVq4jGhetFzwVtkOUxCtozfPyEooAQqhsYqomolVeXE51X0tbjoznDv_7PrZbovftVzQ2jRVX3NZARQpPeoMTls2E7HSE9eefO9hOB_Bua2pr6Gwmt-K6TTGLLRsPTXdCaOKhf4FBBJAdSy_sN6pZdlVAxy5d88PnP-KBDQP0v_skLp1X6QBFmU3l8c8"
              />
            </div>
            <div
              className="absolute bottom-10 left-10 w-56 h-72 rounded-xl overflow-hidden ambient-shadow floating-animation stagger-2"
            >
              <Image
                fill
                className="object-cover"
                alt="Minimalist jewelry flatlay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJXKGTQUWKS9YAnqqkXZ2CAZ4QZUlGGqIwZu_RiuCT46KAbMil3PcFzkhnBNg4IHHkCZdBg1-kuFwq3unGRcSb4EvCyd0R1Q5zqa7Ii88jXF9dni_AYyxWtUiw1UbrmHFP5ZVCFOjwg64Sr2O6lRAQgYwxmnN8saVaiGzp_styQJR6FB4TeHdN6_CneLvl1Qr0QT_IMMpLG8PbDeogwZzPCsQML4Weygi8MvGbakp_2XeEapK9DIveamNMbN7UWaX6LW2g1GYN2dU"
              />
            </div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 py-4 px-6 glass-card rounded-2xl ambient-shadow flex items-center gap-3 floating-animation stagger-3"
            >
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-100"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-yellow-100"></div>
              </div>
              <div>
                <p className="font-bold text-ink-brown leading-none">15K+</p>
                <p className="text-[10px] text-on-surface-variant">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Background Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary-fixed/30 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-warm-beige/40 rounded-full blur-[100px] -z-10"></div>
      </section>

      {/* Our Beginning */}
      <section className="px-margin-desktop py-section-gap bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="rounded-xl overflow-hidden h-[300px] md:h-[500px] ambient-shadow relative">
            <Image
              fill
              className="object-cover"
              alt="Aesthetic workspace"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS_BkzEvQZgNtPuq4OvrcXN8Y9rEPMGcx1FlTrZdh8KSfoNBpaUqUicf84vjCNtcp_2OXlyPi7SuGr9gGAp-hIqdciT96ts8hSzOrLOFBCuSQoJJkswTkmDsdD-GKsnHKkdLOW7-jYf9WNB7wuOKTBm3XABe0EFUwYIm0CJWHwvCVjcey1t69owvPOrmsbG2PmYJAsO5pE8MjzvT6PU7SlJPtjfWDkhq6my2n6Qo-E7qzbGqTxTGdPLyV83pC9chFTyg85954esJc"
            />
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-ink-brown mb-6">
              From A Small Dream To A Growing Fashion Community
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              It started with a simple obsession: finding pieces that felt
              expensive but didn't break the bank. What began as a curated
              collection for friends quickly blossomed into a vibrant community of
              fashion lovers across India.
            </p>
            <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              We focus on the 'Korean Minimalist' aesthetic—jewelry that doesn't
              scream for attention but quietly elevates your entire vibe. Every
              piece is handpicked for its quality, trendiness, and that certain
              'sparkle' that makes life a little bit softer.
            </p>
            <div className="grid grid-cols-2 gap-gutter border-t border-outline-variant pt-8">
              <div>
                <p className="font-display-lg text-headline-lg text-primary mb-1">
                  2024
                </p>
                <p className="text-on-surface-variant font-label-sm">
                  Launch Year
                </p>
              </div>
              <div>
                <p className="font-display-lg text-headline-lg text-primary mb-1">
                  500+
                </p>
                <p className="text-on-surface-variant font-label-sm">
                  Curated Designs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-margin-desktop py-section-gap relative overflow-hidden bg-surface-container-low/40">
        {/* Ambient Background Orbs */}
        <div className="absolute top-1/4 left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-warm-beige/35 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Editorial Left Side */}
            <div className="lg:col-span-4 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-xs uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Our Brand Pillars
              </div>
              <h2 className="font-display-lg text-4xl lg:text-5xl text-ink-brown font-bold leading-tight">
                What We Believe In.
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Our mission is to democratize luxury. We bring you the most aesthetic, high-quality, Korean-inspired jewelry at prices that let you shine every single day, without compromise.
              </p>
              <div className="pt-6 border-t border-outline-variant/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold text-ink-brown text-sm">Pristine Quality</p>
                    <p className="text-xs text-on-surface-variant">Tarnish-resistant & skin-friendly alloys.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold text-ink-brown text-sm">Everyday Sparkle</p>
                    <p className="text-xs text-on-surface-variant">Affordable luxury for every mood & style.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Asymmetric Elegant Cards Right Side */}
            <div className="lg:col-span-8 grid md:grid-cols-3 gap-6 md:pt-6">
              {/* Card 1: Affordable Luxury */}
              <div className="group relative p-8 glass-card rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(141,75,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-auto min-h-[360px]">
                <div className="absolute top-6 right-6 text-2xl font-display-lg text-outline/25 font-extrabold tracking-widest group-hover:text-primary/45 transition-colors">
                  01
                </div>
                
                <div>
                  {/* Custom SVG Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5M5.25 7.5h13.5m-15 3h16.5M5.25 13.5h13.5m-15 3h16.5M6.75 19.5h10.5" />
                    </svg>
                  </div>
                  
                  <h3 className="font-headline-md text-xl text-ink-brown font-semibold mb-3 group-hover:text-primary transition-colors">
                    Affordable Luxury
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    High-end style shouldn't mean high-end price tags. We source directly from boutique designers to keep elite craftsmanship within your daily style budget.
                  </p>
                </div>
                
                <div className="text-xs text-primary font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Direct sourcing model →
                </div>
              </div>

              {/* Card 2: Seoul Aesthetic - Featured High-Contrast Card */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#FFFBF7] to-[#F3DFD9]/80 border border-[#F1DFD9] shadow-[0_8px_30px_rgba(62,44,28,0.06)] hover:shadow-[0_20px_50px_rgba(238,217,196,0.35)] transition-all duration-500 hover:-translate-y-3 md:-translate-y-6 flex flex-col justify-between h-auto min-h-[360px]">
                {/* Featured Badge */}
                <span className="absolute top-4 left-6 bg-primary text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                  Trending Seoul
                </span>
                <div className="absolute top-6 right-6 text-2xl font-display-lg text-primary/25 font-extrabold tracking-widest">
                  02
                </div>

                <div className="mt-4">
                  {/* Custom Sparkle Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3 15l5.096-.813L9 9l.813 5.096L15 15l-5.187.904zM18 10.5l-.563 2.25L15 13.5l2.438.75.562 2.25.563-2.25L21 13.5l-2.438-.75-.562-2.25zM16.25 5.75l-.313 1.25-1.25.313 1.25.313.313 1.25.313-1.25 1.25-.313-1.25-.313-.313-1.25z" />
                    </svg>
                  </div>

                  <h3 className="font-headline-md text-xl text-ink-brown font-semibold mb-3">
                    Trendy Aesthetic
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Stay beautifully ahead of the curve. Our weekly curation highlights effortless minimalist pieces directly inspired by Seoul's chic fashion runways.
                  </p>
                </div>

                <div className="text-xs text-primary font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Korean minimalist collection →
                </div>
              </div>

              {/* Card 3: Curated Collections */}
              <div className="group relative p-8 glass-card rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(141,75,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-auto min-h-[360px]">
                <div className="absolute top-6 right-6 text-2xl font-display-lg text-outline/25 font-extrabold tracking-widest group-hover:text-primary/45 transition-colors">
                  03
                </div>

                <div>
                  {/* Custom SVG Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                  </div>

                  <h3 className="font-headline-md text-xl text-ink-brown font-semibold mb-3 group-hover:text-primary transition-colors">
                    Curated Collections
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    We don't just sell jewelry; we curate moods. Every single piece is meticulously handpicked to celebrate a specific emotion, a cozy weekend, or a chic night out.
                  </p>
                </div>

                <div className="text-xs text-primary font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Shop direct curated drops →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="px-margin-desktop py-section-gap bg-ink-brown text-surface-bright relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary-fixed font-label-sm uppercase tracking-[0.2em] mb-4 block">
                The Philosophy
              </span>
              <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">
                Curated for Every Mood, Designed for Your Lifestyle
              </h2>
              <p className="text-body-lg text-surface-container-low/80 mb-6">
                Our curation process is editorial. We look at the runway, the
                streets of Seoul, and the grids of our favorite influencers to
                find what's missing in your jewelry box.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-fixed">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Quality Guaranteed
                    </h4>
                    <p className="text-surface-container-low/60">
                      Tarnish-resistant coatings and skin-friendly alloys.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-fixed">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Mood-Based Drops</h4>
                    <p className="text-surface-container-low/60">
                      Collections designed for 'Cozy Sunday', 'Office Chic', and
                      'Night Out'.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-xl overflow-hidden h-64 ambient-shadow relative">
                  <Image
                    fill
                    className="object-cover"
                    alt="Close-up of hand wearing rings"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrzOVcR_1gpdDiGchzKdUhZjXllEgJ7dO2VYrPvLF3tLJGK-yledJQincfYkRxv3y0pYlWOqathVXoyTLZWFEibFWxMdTOZafUMVwHzaeUTSeFx3jdfctGfYvSmNuTAmVXkxwXVyskik7jo003jRKIfA--81RuazsDqiZU8NIU0jKj8QRiMyoyg-S7lfpMODU2mWDk9SNZFCI6WnXUI1-DxrKOr5xAW8M6oIBMNXq-ZMZfsDKLzzSmoEdLFoInZ3ZQFJfby7asGek"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-80 ambient-shadow relative">
                  <Image
                    fill
                    className="object-cover"
                    alt="Model with layered gold chains"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD4YQE5kMyHr0rh0gyv_Kqdmc_fCBBhKrH0u9-Vjz7yRRxsULyae78PUiEf_j6G9IiSlOAIMv1zIPtD-7JmC3Hpbl9V6spDSDohmIfrlKOrgNVXQrsRlPgMy9lcy_jwE2iGKBcFSnZeeOI1mmUqPndSoiI4Hd5fA7wDzGzo_edmbe0yzh3RajqtwqgPty4mSbxxxmpxCTurqSs9r_rCGB-purQrwgH1U8HSIepkYpKD9ZpV7HtZgqbjMnq3B3Gf9eCxJ93unaGGdQ"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden h-80 ambient-shadow relative">
                  <Image
                    fill
                    className="object-cover"
                    alt="Beautifully packaged jewelry"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqJRzpRHduUJNehusXw1A_KsJS98AQiX1pQEgCmxBriDpDBbqIumhvdJJGZpE0W9jbwAiwy0JqpCo7rqYEdKidpgJsFawMXIwSkIeeSQoevtjyY0zCE3j78E3RXdOj8oSMVWjZEynr5_xZ6cRnU_E0AWbcwBDh_dZCNbNvSAgGvjcad3tbefiKmMrUvYEg40h9MFu9vrihumTBIfJHHX6XJdtjJb0C8gq_Pah6aWr8tKtmfr1BwwnT6UuJeaWYszHRADKhVQoZ3Jg"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-64 ambient-shadow relative">
                  <Image
                    fill
                    className="object-cover"
                    alt="Aesthetic accessories collection"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiskCYMyNPhdxgkTnRqrfN91g3nQPGuM2B_vsIbx48fsLM6QeLIl-hddFbs9xZqwqB_vOmjRftN5KzKYY6RcsFfT8qYbvo5w5X3GDTM9V0NPXCNDzcbA7xgzsAmVQbasCuLl0gysufsf3TmaPthXD3US_PIWZ-yZ3Xd8iFNgMXUiHJ0-Qeb7pL5Bq8ESeoWtdEj1J4DkJt7ShSgT4vrvJ3tr9o9BDZDelMZQcxwpqEiQ3eWmsGJru2AxGenWFkykf168kN9hGW6ds"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"></div>
      </section>

      {/* Instagram Community */}
      <section className="px-margin-desktop py-section-gap">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-xs uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Live Community
            </span>
            <h2 className="font-headline-lg text-headline-lg text-ink-brown mb-4">
              Built Through Instagram &amp; Real Connections 💖
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
              We aren&apos;t just a store; we&apos;re a community of dreamers and stylers.
            </p>
          </div>

          {/* Instagram Card */}
          <div
            className="w-full max-w-sm rounded-[28px] overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(24px)",
              border: "1.5px solid rgba(141,75,0,0.10)",
              boxShadow: "0 24px 64px -12px rgba(141,75,0,0.14), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            {/* Profile Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4">
              <div className="flex items-center gap-3">
                <div
                  className="rounded-full p-[2.5px] flex-shrink-0"
                  style={{
                    background: "linear-gradient(45deg, #f9a825, #e040fb 50%, #f4511e)",
                    boxShadow: "0 4px 16px rgba(228,64,30,0.25)",
                  }}
                >
                  <div className="rounded-full bg-white p-[2.5px] w-14 h-14 overflow-hidden">
                    <Image
                      src="/insta_logo.jpg"
                      alt="The Pallu Stories"
                      width={52}
                      height={52}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-[14px] text-[#1a0f08] leading-tight">@the.pallu.stories</p>
                  <p className="text-[11px] text-[#887364] font-medium mt-0.5">Mumbai, India ✦</p>
                </div>
              </div>
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(45deg, #f9a825, #e040fb 50%, #f4511e)",
                  boxShadow: "0 4px 12px rgba(228,64,30,0.3)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-3 gap-[3px] mx-4 rounded-[16px] overflow-hidden">
              {[
                { video: "/videos/video -1.mp4", label: "Behind the Scenes ✨" },
                { video: "/videos/video - 2.mp4", label: "Aesthetic Flatlays 🌸" },
                { video: "/videos/video - 3.mp4", label: "Styling Inspo 💫" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="aspect-square overflow-hidden group relative cursor-pointer"
                  style={{ background: "#f9f3eb" }}
                >
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <span className="text-[8px] text-white font-semibold">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 mx-4 mt-3 rounded-[12px] overflow-hidden" style={{ border: "1px solid rgba(141,75,0,0.08)" }}>
              {[
                { val: "120K", label: "Followers" },
                { val: "450+", label: "Posts" },
                { val: "15K", label: "Mentions" },
              ].map(({ val, label }, i) => (
                <div
                  key={label}
                  className="flex flex-col items-center py-3"
                  style={{
                    background: "rgba(255,248,241,0.7)",
                    borderLeft: i > 0 ? "1px solid rgba(141,75,0,0.08)" : "none",
                  }}
                >
                  <span className="text-[15px] font-extrabold text-[#3E2C1C]">{val}</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#b08060] mt-0.5">{label}</span>
                </div>
              ))}
            </div>

            {/* Follow CTA */}
            <div className="px-4 py-4">
              <a
                href="https://www.instagram.com/the.pallu.stories?igsh=OHplNDhuZWcxZjAz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-[12px] font-bold text-sm transition-all duration-300 hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(90deg, #8d4b00 0%, #b06000 100%)",
                  color: "#fff8f1",
                  boxShadow: "0 6px 20px rgba(141,75,0,0.25)",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Customer Love */}
      <section className="px-margin-desktop py-section-gap bg-surface-container overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-ink-brown">
              Loved By Girls Across India ✨
            </h2>
          </div>
          <div className="flex overflow-x-auto gap-gutter pb-10 no-scrollbar snap-x">
            {/* Review 1 */}
            <div className="min-w-[85vw] md:min-w-[400px] glass-card p-8 rounded-xl snap-center ambient-shadow border border-white/50">
              <div className="flex gap-4 mb-6">
                <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <Image
                    fill
                    className="object-cover"
                    alt="Mirror selfie of a girl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUZcOY-4syT9b6zR38kmNGn6yLYkdhF3lMqC2sqZf_AfAHcEx8LnUxbp6yfpGvbwh6S1VSdDDtebCFEoXqZoBtZDA7I7HuC9ESawjtIeFyGD1EPcxUJTZuRua_gcPzZ4pXFg2GMtphm8AZTorbAMPGlsKKcDxsDcdGjoJ3CeNKUBwek_-gZK0kinAOVHPJfqfYsIn6YQTvfNsG7WkzBq3dvImmIr8bb5bqsxHSmMnhzjfmfF_920RPFP6ZG-b6jHuq3B7SELV_lCw"
                  />
                </div>
                <div>
                  <div className="flex text-primary mb-2">
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                  </div>
                  <p className="font-bold text-ink-brown">Ananya R.</p>
                  <p className="text-xs text-on-surface-variant">
                    Verified Buyer
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant italic leading-relaxed">
                "Literally obsessed with my new rings 😭💖 The quality is so much
                better than I expected for the price. Packaging was also 10/10!"
              </p>
            </div>
            {/* Review 2 */}
            <div className="min-w-[85vw] md:min-w-[400px] glass-card p-8 rounded-xl snap-center ambient-shadow border border-white/50">
              <div className="flex gap-4 mb-6">
                <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <Image
                    fill
                    className="object-cover"
                    alt="A young woman smiling"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUX8yuhKCp6nfzeGUeJghmbw3SBUgilshiS_t7QBgKwe1VVibfWfoi0-pbxjY4NjOF9DtiPhUm2HtNOR0wyfH9ZxQrIF25XWX14oTkHfTx1NnJ9iAuk7YXv6ma1lEkFl49TTLcWudBvQr5ywIZqCPDFnqs-0T5-Ll-_6vN3ABPH2Z5qk6dYQySWVShRGlRTHY5Q5sVVLWy5212jsKl5AeEy7zGlZTKfzD6OiFBV8VpKf1ck-z8KoIcvwG3FEi_gCYy_flGSuAkWeY"
                  />
                </div>
                <div>
                  <div className="flex text-primary mb-2">
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                  </div>
                  <p className="font-bold text-ink-brown">Priya S.</p>
                  <p className="text-xs text-on-surface-variant">
                    Verified Buyer
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant italic leading-relaxed">
                "Found them on Instagram and now I can't stop buying. The Korean
                designs are so unique, I get compliments every time I wear them!
                ✨"
              </p>
            </div>
            {/* Review 3 */}
            <div className="min-w-[85vw] md:min-w-[400px] glass-card p-8 rounded-xl snap-center ambient-shadow border border-white/50">
              <div className="flex gap-4 mb-6">
                <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <Image
                    fill
                    className="object-cover"
                    alt="Hand with rings on soft knit sweater"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhvRwtGRjPH9cuSI2nGspG4LweW2zZFSGA1BwIh-qaKXBP92icSaCeeKAbnI9PAS1oF05PYMKpWYF1gFthJcdtjtne_SpKM_t1Wp5yofU4JyCUlDTLgqdS03gFG-3EEy8PoW_UE8g7vc2C0e0V-CAsWEFg1Fq4-i9mjHg64EIuFKQUHiNw_cIqOr_M5gWlL0S6DCDqdeEZ2pkGtwr83FLCtYu2TlRKy9vaItVvr2X5gPTyoe9jOzywzYCyHQ7O7e5oI3rPm_r5NeE"
                  />
                </div>
                <div>
                  <div className="flex text-primary mb-2">
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                    >
                      star
                    </span>
                  </div>
                  <p className="font-bold text-ink-brown">Ishani M.</p>
                  <p className="text-xs text-on-surface-variant">
                    Verified Buyer
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant italic leading-relaxed">
                "The perfect gift for yourself! I bought the 'Cozy Sunday' set
                and I'm never taking it off. Shipping was super fast too. 💖"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Why Choose Us */}
      <section className="px-margin-desktop py-section-gap">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 mb-12 md:mb-0">
            <h2 className="font-headline-lg text-headline-lg text-ink-brown mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              We want to be the first name you think of when you want to feel
              pretty. Our vision is to expand beyond accessories into a full
              lifestyle brand that celebrates femininity, creativity, and the
              power of beautiful details.
            </p>
            <div className="p-6 bg-warm-beige/30 rounded-xl border border-warm-beige">
              <p className="text-ink-brown font-semibold italic">
                "Pretty things make life softer. That's the truth we live by
                every single day."
              </p>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 grid grid-cols-1 gap-6">
            <div className="flex items-center gap-6 p-6 glass-card rounded-xl border border-white/50 hover:bg-white transition-colors duration-300">
              <div className="w-14 h-14 bg-secondary-fixed rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-secondary">
                  trending_up
                </span>
              </div>
              <div>
                <h4 className="font-bold text-ink-brown mb-1">
                  Trendy Korean Fashion
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Curated weekly drops inspired by the latest Seoul trends.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-6 glass-card rounded-xl border border-white/50 hover:bg-white transition-colors duration-300">
              <div className="w-14 h-14 bg-primary-fixed rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary">
                  redeem
                </span>
              </div>
              <div>
                <h4 className="font-bold text-ink-brown mb-1">
                  Safe &amp; Pretty Packaging
                </h4>
                <p className="text-sm text-on-surface-variant">
                  We ensure your treasures reach you safely in Instagram-ready
                  boxes.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-6 glass-card rounded-xl border border-white/50 hover:bg-white transition-colors duration-300">
              <div className="w-14 h-14 bg-tertiary-fixed rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-tertiary">
                  headset_mic
                </span>
              </div>
              <div>
                <h4 className="font-bold text-ink-brown mb-1">
                  Fast &amp; Friendly Support
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Our team is always here to help with sizing or style advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-margin-desktop mb-section-gap">
        <div
          className="max-w-7xl mx-auto p-12 md:p-20 rounded-xl relative overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, #F8E6E0 0%, #EED9C4 100%)",
          }}
        >
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-ink-brown mb-6">
              Your Next Favorite Accessory Is Waiting ✨
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Join our community of 15,000+ girls and elevate your everyday style
              with our curated Korean-inspired collections.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-xl active:scale-95">
                Shop Collections Now
              </button>
              <button className="bg-white text-ink-brown px-10 py-5 rounded-full font-bold text-lg hover:bg-surface-bright transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                Follow on Instagram
              </button>
            </div>
          </div>
          {/* Decorative Elements */}
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbOcAtoWHLVcdDeu27bqcwHXuz3Swp3efVE_fsdYEZqxfJPr-L6Au5l9qocpODsno-Id_m9TdhTwQb-wFP5ZK8mcMV9YtZqBCgiE8LYe49tl0hFBq39CupTsh7OznbaNT6Dh9sbYsL1tD8rDRnZtwyqpA_JJdXA9l88ZxbhyBMlavunxBd0h447fOIqZDMk2Gw464Rpafz-Z4iHp5fawiezVyUkw8Zf3gcSsEhrvktMOt_ECuACAb7WL9iMFIFm6CQo-wwbKR7Q8g')",
            }}
          ></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/30 rounded-full blur-3xl"></div>
        </div>
      </section>
    </main>
  );
}
