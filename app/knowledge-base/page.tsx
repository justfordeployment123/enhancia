import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Input from '@/components/Input'

export default function KnowledgeBasePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Search */}
      <section className="relative bg-gradient-sky py-24 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Knowledge Base</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white text-center mb-6 leading-tight">
              How Can We Help You Today?
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Find answers, guides, and tutorials to get the most out of Enhancia
            </p>
          </div>
          
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search for guides, tutorials, FAQs..."
              className="w-full h-16 px-6 pr-20 bg-white rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 text-lg font-medium placeholder-gray-400"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-sky rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:scale-105 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 justify-center">
            {['Getting Started', 'Photo Tips', 'Troubleshooting', 'Billing Help', 'Feature Guides'].map((link) => (
              <button
                key={link}
                className="px-5 py-2.5 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/30 hover:bg-white hover:text-teal-deep transition-all hover:scale-105 shadow-lg"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-navy-dark mb-4">
              Popular Articles
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Most helpful guides and tutorials from our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'How to Capture Better Property Photos (Even With Your Phone)',
                excerpt: 'Learn professional photography techniques using just your smartphone.',
                readTime: '5 min read',
              },
              {
                title: 'Complete Guide to Virtual Staging',
                excerpt: 'Everything you need to know about adding virtual furniture to empty spaces.',
                readTime: '8 min read',
              },
              {
                title: 'Before & After: Real Estate Photo Enhancement Examples',
                excerpt: 'See real examples of enhanced property photos and their impact.',
                readTime: '6 min read',
              },
            ].map((article, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-cyan-bright overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image/Icon Container */}
                <div className="relative h-48 bg-gradient-to-br from-gradient-sky to-teal-deep flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-teal-600/20"></div>
                  <div className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    📄
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg">
                    <span className="text-xs font-bold text-teal-deep uppercase tracking-wider">GUIDE</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-display font-black mb-3 text-navy-dark line-clamp-2 group-hover:text-teal-deep transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-medium mb-5 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-xs text-gray-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{article.readTime}</span>
                    </div>
                    <button className="text-cyan-bright font-bold text-sm hover:text-teal-deep flex items-center gap-1 group/btn">
                      <span>Read Guide</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-2 mb-8 inline-flex border-2 border-gray-200">
            <div className="flex space-x-2 overflow-x-auto">
              {['How-To Guides', 'Tutorials', 'FAQs', 'Troubleshooting', 'Product Updates'].map((tab, index) => (
                <button
                  key={tab}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                    index === 0
                      ? 'bg-gradient-sky text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {[
              {
                q: 'What is Enhancia?',
                a: 'Enhancia is an AI-powered photo enhancement platform specifically designed for real estate professionals. We help you transform property photos into stunning marketing materials.',
              },
              {
                q: 'How does AI enhancement work?',
                a: 'Our computer vision models analyze your image and apply professional-grade enhancements including lighting correction, color adjustment, sky replacement, and more.',
              },
              {
                q: 'Is my data secure?',
                a: 'Absolutely. We use bank-level encryption and automatically delete your images after 24 hours. Your data is never used for training our AI models.',
              },
              {
                q: 'What file formats are supported?',
                a: 'We support JPG, PNG, and WebP formats. Maximum file size is 50MB.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-cyan-bright p-6 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-sky/10 rounded-xl flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-cyan-bright" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-navy-dark mb-3 group-hover:text-teal-deep transition-colors">
                        {faq.q}
                      </h3>
                      <p className="text-gray-medium leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                  <button className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 hover:bg-gradient-sky hover:text-white text-gray-600 flex items-center justify-center transition-all group/btn">
                    <svg className="w-5 h-5 group-hover/btn:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-navy-dark mb-4">
              Didn't Find What You Need?
            </h2>
            <p className="text-lg md:text-xl text-gray-medium max-w-2xl mx-auto">
              Our support team responds in under 12 hours on average. We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: '✉️', title: 'Email Support', contact: 'support@enhancia.com', response: 'Within 12 hours' },
              { icon: '💬', title: 'Live Chat', contact: 'Click to start chat', response: 'Mon-Fri 9AM-6PM EST' },
              { icon: '📞', title: 'Schedule Call', contact: 'Book 15-min call', response: 'View calendar' },
            ].map((option, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-cyan-bright p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-sky/10 rounded-2xl flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                  {option.icon}
                </div>
                <h3 className="text-xl font-display font-black text-navy-dark mb-3 group-hover:text-teal-deep transition-colors">
                  {option.title}
                </h3>
                <p className="text-cyan-bright font-bold mb-2 text-lg">{option.contact}</p>
                <p className="text-sm text-gray-medium">{option.response}</p>
                <button className="mt-6 w-full px-4 py-2.5 bg-gradient-sky text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all">
                  Contact Us
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
