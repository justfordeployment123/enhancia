import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Introduction */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold text-teal-deep uppercase tracking-wider mb-4 block">
            ABOUT ENHANCIA
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-navy-dark mb-8">
            Building the Future of Property Photography
          </h1>
          <p className="text-xl text-gray-medium leading-relaxed">
            Enhancia was born from a simple frustration: Why should stunning property photos cost hundreds of dollars and take days to receive? We believed technology could democratize professional-quality imagery—making it instant, affordable, and accessible to every real estate professional.
          </p>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {[
              {
                year: '2022',
                title: 'The Problem',
                description: 'Our founders, both former real estate agents, spent thousands on photographers while watching competitors struggle with DIY photos. The industry deserved better.',
              },
              {
                year: '2023',
                title: 'The Solution',
                description: 'Partnering with computer vision researchers, we trained specialized models on 500,000 property images, teaching AI to understand architecture, lighting, and buyer psychology.',
              },
              {
                year: '2024',
                title: 'The Launch',
                description: 'Enhancia launched in beta with 100 agents. Within 3 months, we processed 10,000 images. The results spoke for themselves.',
              },
              {
                year: 'Today',
                title: 'The Movement',
                description: 'Now serving 50,000+ users across 40 countries, we\'re proving that professional-quality property marketing should be a right, not a luxury.',
              },
            ].map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-sky rounded-full flex items-center justify-center text-white font-display font-bold text-2xl">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-navy-dark mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-lg text-gray-medium leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2">
        <div className="bg-gradient-sky text-white p-20">
          <div className="text-6xl mb-6">🔭</div>
          <span className="text-sm uppercase tracking-wider mb-4 block opacity-90">
            OUR VISION
          </span>
          <h2 className="text-3xl font-display font-bold mb-6">
            A World Where Every Property Shines
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
            We envision a real estate industry where visual quality is never a barrier to success. Where a first-time agent has the same photographic firepower as a luxury firm. Where technology amplifies human creativity instead of replacing it.
          </p>
        </div>
        <div className="bg-white p-20 border-l-4 border-cyan-bright">
          <div className="text-6xl mb-6 text-teal-deep">🧭</div>
          <span className="text-sm uppercase tracking-wider mb-4 block text-cyan-bright">
            OUR MISSION
          </span>
          <h2 className="text-3xl font-display font-bold mb-6 text-navy-dark">
            Empower Every Agent With Pro-Level Tools
          </h2>
          <p className="text-lg text-gray-medium leading-relaxed">
            Our daily mission is simple: Make property photo enhancement instant, affordable, and exceptional. We obsess over image quality, user experience, and customer success—because when our users win, we win.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💡', title: 'Innovation First', desc: 'We push boundaries. AI is our medium, but user delight is our measure.' },
              { icon: '➖', title: 'Radical Simplicity', desc: 'Complexity is lazy design. We make powerful tools feel effortless.' },
              { icon: '❤️', title: 'Customer Obsession', desc: 'Every feature decision starts with "Does this help our users win?"' },
              { icon: '🪟', title: 'Transparency', desc: 'No hidden fees. No tricks. Just honest pricing and clear communication.' },
              { icon: '💎', title: 'Quality Uncompromised', desc: 'Good enough isn\'t. We ship when it\'s exceptional, not when it\'s done.' },
              { icon: '👥', title: 'Community Driven', desc: 'Our best features come from user feedback. You build this with us.' },
            ].map((value, index) => (
              <div key={index} className="bg-white p-10 rounded-lg border-t-4 border-cyan-bright shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-display font-bold text-navy-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-navy-dark text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🏢</div>
          <h2 className="text-4xl font-display font-bold mb-6">
            Want to Join the Mission?
          </h2>
          <p className="text-xl opacity-80 mb-8">
            We're always looking for talented people who want to reshape real estate technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-cyan-bright text-navy-dark font-semibold rounded-md hover:bg-cyan-medium transition-colors">
              View Open Positions
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors">
              Send Us Your Ideas
            </button>
          </div>
          <p className="text-sm opacity-70 mt-6">
            Remote-friendly · Competitive salary · Equity options
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
