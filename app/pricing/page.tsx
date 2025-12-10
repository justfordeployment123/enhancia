import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PricingPage() {
  const pricingPlans = [
    {
      title: 'Free Trial',
      icon: '🎁',
      price: '$0',
      credits: '5 Credits',
      features: [
        { text: 'All enhancement tools', included: true },
        { text: '2K resolution max', included: true },
        { text: 'Watermarked downloads', included: true },
        { text: 'Email support', included: true },
        { text: 'API access', included: false },
        { text: 'Custom branding', included: false },
      ],
      cta: 'Start Free Trial',
      ctaVariant: 'secondary' as const,
      footer: 'No credit card required',
    },
    {
      title: 'Starter',
      icon: '⭐',
      price: '$19',
      credits: '20 Credits',
      unitCost: '$0.95/image',
      badge: 'POPULAR',
      features: [
        { text: 'All enhancement tools', included: true },
        { text: '4K resolution', included: true },
        { text: 'No watermarks', included: true },
        { text: 'Priority processing', included: true },
        { text: '1-year validity', included: true },
        { text: 'Email support', included: true },
        { text: 'API access', included: false },
      ],
      cta: 'Buy Starter Pack',
      ctaVariant: 'primary' as const,
      footer: 'Most popular for agents',
      highlighted: true,
    },
    {
      title: 'Professional',
      icon: '⚡',
      price: '$69',
      credits: '100 Credits',
      unitCost: '$0.69/image',
      savings: 'Save 27%',
      features: [
        { text: 'All enhancement tools', included: true },
        { text: '4K resolution', included: true },
        { text: 'No watermarks', included: true },
        { text: 'Priority processing', included: true },
        { text: 'Bulk upload (10 images)', included: true },
        { text: 'Priority support', included: true },
        { text: 'Custom presets', included: true },
      ],
      cta: 'Buy Pro Pack',
      ctaVariant: 'primary' as const,
      footer: 'Best value per image',
    },
    {
      title: 'Unlimited Pro',
      icon: '∞',
      price: '$599',
      period: '/month',
      credits: 'Unlimited',
      highlight: 'Or $499/mo billed annually',
      badge: 'BEST VALUE',
      features: [
        { text: 'Unlimited everything', included: true },
        { text: 'API access (10k calls/mo)', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Team collaboration (5 users)', included: true },
        { text: 'White-label option', included: true },
        { text: 'Priority processing queue', included: true },
      ],
      cta: 'Go Unlimited',
      ctaVariant: 'primary' as const,
      footer: 'For agencies & enterprises',
      dark: true,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-sky rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-sky rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-sky/10 backdrop-blur-sm rounded-full border border-cyan-bright/20 mb-6">
            <svg className="w-4 h-4 text-cyan-bright" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold text-teal-deep uppercase tracking-wider">FLEXIBLE PRICING</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-navy-dark mb-6 leading-tight">
            Pay Only For What You Use
          </h1>
          <p className="text-xl md:text-2xl text-gray-medium max-w-3xl mx-auto leading-relaxed mb-8">
            No hidden fees. No contracts. No complexity. Just transparent pricing that scales with your needs.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-medium">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-day money back</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.title}
                className={`relative group ${
                  plan.highlighted ? 'md:-mt-4 md:mb-4' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full text-xs font-black shadow-lg ${
                    plan.dark 
                      ? 'bg-yellow-400 text-navy-dark' 
                      : plan.highlighted
                      ? 'bg-gradient-sky text-white'
                      : 'bg-yellow-400 text-navy-dark'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                  plan.highlighted
                    ? 'bg-white border-4 border-cyan-bright shadow-2xl scale-105'
                    : plan.dark
                    ? 'bg-gradient-sky text-white border-2 border-transparent'
                    : 'bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl'
                } ${plan.highlighted ? 'hover:scale-110' : 'hover:-translate-y-2'}`}>
                  
                  {/* Gradient Overlay for Dark Card */}
                  {plan.dark && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-teal-800/20"></div>
                  )}

                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`text-5xl mb-4 ${plan.dark ? '' : ''}`}>
                      {plan.icon}
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl md:text-3xl font-display font-black mb-2 ${
                      plan.dark ? 'text-white' : 'text-navy-dark'
                    }`}>
                      {plan.title}
                    </h3>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className={`text-5xl md:text-6xl font-display font-black ${
                          plan.dark ? 'text-white' : 'text-navy-dark'
                        }`}>
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className={`text-lg font-semibold ${
                            plan.dark ? 'text-white/80' : 'text-gray-medium'
                          }`}>
                            {plan.period}
                          </span>
                        )}
                      </div>
                      <div className={`text-sm font-semibold mt-1 ${
                        plan.dark ? 'text-white/90' : 'text-gray-medium'
                      }`}>
                        {plan.credits}
                      </div>
                      {plan.unitCost && (
                        <div className={`text-sm mt-1 ${
                          plan.dark ? 'text-white/70' : 'text-gray-medium'
                        }`}>
                          {plan.unitCost}
                        </div>
                      )}
                      {plan.savings && (
                        <div className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                          {plan.savings}
                        </div>
                      )}
                      {plan.highlight && (
                        <div className={`text-sm mt-2 ${
                          plan.dark ? 'text-white/90' : 'text-gray-medium'
                        }`}>
                          {plan.highlight}
                        </div>
                      )}
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8 mt-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            feature.included
                              ? plan.dark
                                ? 'bg-white/20 text-white'
                                : 'bg-gradient-sky text-white'
                              : plan.dark
                              ? 'bg-white/10 text-white/40'
                              : 'bg-gray-200 text-gray-400'
                          }`}>
                            {feature.included ? (
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-sm leading-relaxed ${
                            plan.dark 
                              ? feature.included ? 'text-white/90' : 'text-white/50'
                              : feature.included ? 'text-gray-700' : 'text-gray-400'
                          }`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                      className={`w-full px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 ${
                        plan.ctaVariant === 'primary'
                          ? plan.dark
                            ? 'bg-white text-teal-deep hover:bg-gray-100 shadow-lg hover:shadow-xl hover:scale-105'
                            : 'bg-gradient-sky text-white shadow-lg hover:shadow-xl hover:scale-105'
                          : 'bg-transparent border-2 border-teal-deep text-teal-deep hover:bg-teal-deep hover:text-white'
                      }`}
                    >
                      {plan.cta}
                    </button>

                    {/* Footer */}
                    {plan.footer && (
                      <p className={`text-center text-xs mt-4 ${
                        plan.dark ? 'text-white/70' : 'text-gray-medium'
                      }`}>
                        {plan.footer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-black text-navy-dark mb-4">
              Compare Plans
            </h2>
            <p className="text-lg text-gray-medium">
              Find the perfect plan for your needs
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-sky text-white">
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-center font-bold">Free Trial</th>
                    <th className="px-6 py-4 text-center font-bold">Starter</th>
                    <th className="px-6 py-4 text-center font-bold">Professional</th>
                    <th className="px-6 py-4 text-center font-bold">Unlimited</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Credits', free: '5', starter: '20', pro: '100', unlimited: 'Unlimited' },
                    { feature: 'Resolution', free: '2K', starter: '4K', pro: '4K', unlimited: '4K' },
                    { feature: 'Watermarks', free: 'Yes', starter: 'No', pro: 'No', unlimited: 'No' },
                    { feature: 'API Access', free: 'No', starter: 'No', pro: 'No', unlimited: 'Yes' },
                    { feature: 'Priority Support', free: 'No', starter: 'No', pro: 'Yes', unlimited: 'Yes' },
                    { feature: 'Custom Branding', free: 'No', starter: 'No', pro: 'No', unlimited: 'Yes' },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-navy-dark">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-gray-medium">{row.free}</td>
                      <td className="px-6 py-4 text-center text-gray-medium">{row.starter}</td>
                      <td className="px-6 py-4 text-center text-gray-medium">{row.pro}</td>
                      <td className="px-6 py-4 text-center font-bold text-teal-deep">{row.unlimited}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-black text-navy-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-medium">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Do credits expire?',
                a: 'Credit packs are valid for 12 months from purchase date. Unlimited plan has no credit system.',
              },
              {
                q: 'Can I upgrade or downgrade?',
                a: 'Yes, anytime. Unused credits carry over when upgrading. Downgrades take effect next billing cycle.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'Credit/debit cards (Visa, Mastercard, Amex), PayPal, and wire transfer for annual plans.',
              },
              {
                q: 'Is there a refund policy?',
                a: 'Unused credits can be refunded within 30 days. See our refund policy for details.',
              },
              {
                q: 'Can I use credits for any service?',
                a: 'Yes! All credits work with all enhancement services. Some advanced features may cost multiple credits.',
              },
              {
                q: 'Do you offer discounts for bulk purchases?',
                a: 'Yes, we offer volume discounts for purchases over 500 credits. Contact sales for custom pricing.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-cyan-bright hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-navy-dark mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-bright flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  {faq.q}
                </h3>
                <p className="text-gray-medium leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-sky py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-6">
            Ready to Transform Your Property Photos?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start with 5 free credits. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-teal-deep font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-bold rounded-xl border-2 border-white/40 hover:bg-white/20 transition-all">
              View All Features
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
