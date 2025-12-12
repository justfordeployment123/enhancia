import Link from 'next/link'

export default function AboutPage() {
  // Icon Components
  const InnovationIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#innovationGradient)">
      <defs>
        <linearGradient id="innovationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )

  const SimplicityIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#simplicityGradient)">
      <defs>
        <linearGradient id="simplicityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )

  const QualityIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#qualityGradient)">
      <defs>
        <linearGradient id="qualityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )

  const AccessibilityIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#accessibilityGradient)">
      <defs>
        <linearGradient id="accessibilityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )

  const TransparencyIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#transparencyGradient)">
      <defs>
        <linearGradient id="transparencyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )

  const EmpowermentIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#empowermentGradient)">
      <defs>
        <linearGradient id="empowermentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )

  const VisionIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="url(#visionGradient)">
      <defs>
        <linearGradient id="visionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )

  const MissionIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="url(#missionGradient)">
      <defs>
        <linearGradient id="missionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )

  const values = [
    { icon: <InnovationIcon />, title: 'Innovation', desc: 'We push boundaries with AI to solve real-world problems, not just create flashy features.' },
    { icon: <SimplicityIcon />, title: 'Simplicity', desc: 'Technology should reduce friction. Our platform is designed for ease, speed, and clarity.' },
    { icon: <QualityIcon />, title: 'Quality', desc: 'We deliver professional-grade results that meet industry standards for advertising and presentation.' },
    { icon: <AccessibilityIcon />, title: 'Accessibility', desc: "Great editing shouldn't require training or expensive software. Enhancia puts power into the hands of every user." },
    { icon: <TransparencyIcon />, title: 'Transparency', desc: 'No hidden fees. No locked contracts. No ownership claims over your images.' },
    { icon: <EmpowermentIcon />, title: 'User Empowerment', desc: 'You stay in control. Our tools enhance your work — never replace your creativity or autonomy.' },
  ]

  return (
    <main className="min-h-screen bg-void">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-void/80 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-display font-bold text-white group-hover:text-brand-400 transition-colors">Enhancia</span>
            </Link>
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/login" className="btn-ghost">Sign In</Link>
              <Link href="/signup" className="btn-primary"><span>Get Started</span></Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="section-label mb-6">Our Story</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight">
            Born From a
            <span className="gradient-text"> Problem</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Enhancia started with a simple frustration: professional property photos were either too expensive, too slow, or too complicated to produce at scale.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="glass-card p-8 md:p-10 mb-12">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Real estate agents were stuck waiting days for outsourced editing. Photographers were overwhelmed by large editing backlogs. Developers and property marketers lacked fast, consistent, affordable solutions. And everyday users — with no editing skills — had no way to produce professional results.
            </p>
            <p className="text-xl text-white font-semibold leading-relaxed">
              We knew there had to be a better way.
            </p>
          </div>

          <div className="glass-card p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">The Solution</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              So we began experimenting. Not with templates. Not with presets. But with intelligent automation — AI that understands property images the way a human editor does.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              We built Enhancia to:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Remove bottlenecks',
                'Eliminate outsourcing delays',
                'Reduce cost',
                'Increase consistency',
                'Return control to the creator',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg text-text-secondary">
                  <svg className="w-6 h-6 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 md:p-10 mb-12 bg-gradient-to-br from-brand-500/10 to-transparent border-brand-500/20">
            <h2 className="text-2xl font-semibold text-white mb-6">The Evolution</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              During development, something interesting happened: once we solved the photo editing problem — we realized another challenge existed: the writing. Property descriptions, listing text, headlines, ad copy — They were often rushed, repetitive, generic, or uninspiring.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              So we expanded Enhancia. Now it not only enhances what people see, but also strengthens the words that sell.
            </p>
            <p className="text-xl text-white font-semibold leading-relaxed">
              From that point forward, our mission became clear: To equip every property marketer — of any skill level — with the power to create stunning visuals and compelling copy effortlessly.
            </p>
          </div>

          <div className="glass-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white mb-6">Who We Serve</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              What began as a tool for real estate professionals expanded into a platform used by:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {['agents', 'photographers', 'designers', 'developers', 'marketers', 'everyday home sellers'].map((user, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02]">
                  <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-text-secondary capitalize">{user}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-text-secondary leading-relaxed">
              Today, Enhancia isn't just a photo editor. It's the invisible assistant behind modern property marketing. Fast, intuitive, affordable, and available to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-card p-10 bg-gradient-to-br from-brand-400/10 to-transparent border-brand-400/20">
              <div className="mb-6 flex justify-center">
                <VisionIcon />
              </div>
              <div className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">Our Vision</div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                To Democratize Professional-Quality Visual Marketing
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Empowering anyone to produce stunning property photos and compelling listing content at scale. We envision a future where creating high-impact property listings is effortless, fast, and available to all — not just experts or enterprise teams.
              </p>
            </div>

            <div className="glass-card p-10 bg-gradient-to-br from-brand-600/10 to-transparent border-brand-600/20">
              <div className="mb-6 flex justify-center">
                <MissionIcon />
              </div>
              <div className="text-brand-500 text-sm font-semibold uppercase tracking-wider mb-4">Our Mission</div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Fast, Intuitive, AI-Powered Tools
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                To provide fast, intuitive, AI-powered tools that empower anyone to enhance photos and generate marketing copy effortlessly. Every day, we refine our platform to ensure that:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Editing takes seconds instead of hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Results are professional and consistent</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tools are easy enough for anyone to use</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pricing remains fair and transparent</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Output quality drives real-world results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Values</h2>
            <p className="text-text-secondary">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div key={i} className="glass-card-hover p-8 group">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-text-secondary">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="glass-card p-10 bg-gradient-to-br from-brand-500/10 to-transparent border-brand-500/20 text-center">
            <h2 className="text-2xl font-semibold text-white mb-6">The Future</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-3xl mx-auto">
              And this is only the beginning. We're continuing to improve the algorithms… Refining the quality… Adding new capabilities… And building toward a future where professional media creation is simple, instant, and universal.
            </p>
            <p className="text-xl text-white font-semibold leading-relaxed max-w-3xl mx-auto">
              Enhancia was born from a problem — and built into a solution. Our story is your story: <span className="gradient-text">Working faster, presenting better, and making every listing stand out.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-32 bg-obsidian">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="glass-card p-12 bg-gradient-to-br from-brand-500/5 to-brand-700/5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: '50K+', label: 'Active Users' },
                { value: '2M+', label: 'Photos Enhanced' },
                { value: '40+', label: 'Countries' },
                { value: '4.9★', label: 'User Rating' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-300 via-brand-500 to-brand-700" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6 flex justify-center">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Want to Join the Mission?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            We're always looking for talented people who want to reshape real estate technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-brand-600 font-bold text-lg rounded-xl hover:bg-white/90 transition-all hover:scale-105 shadow-xl">
              View Open Positions
            </button>
            <button className="px-10 py-4 bg-white/10 text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all">
              Send Us Your Ideas
            </button>
          </div>
          <p className="text-white/70 text-sm mt-8">Remote-friendly · Competitive salary · Equity options</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-obsidian border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <span className="text-lg font-display font-bold text-white">Enhancia</span>
          </Link>
          <p className="text-text-muted text-sm">© 2024 Enhancia. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
