'use client'

import Link from 'next/link'

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'Individual',
      price: '$29',
      credits: '50 Credits',
      description: '$0.58 per image',
      features: [
        '14 day storage facility',
        '5-minute turnaround time',
        '1K resolution download',
        'Day to dusk image',
        'Email support',
      ],
      notIncluded: [
        'No virtual staging',
        'No layout plans',
        'No branding',
      ],
      cta: 'Get Individual',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$99',
      credits: '200 Credits',
      description: '$0.50 per image • Best Value',
      features: [
        'Bulk upload',
        '45 day storage facility',
        '2 minute turnaround time',
        'All features included',
        '2K resolution image download',
        'Email support',
      ],
      notIncluded: [
        'No branding',
      ],
      cta: 'Get Professional',
      popular: true,
    },
    {
      name: 'Business',
      price: '$199',
      credits: '500 Credits',
      description: '$0.40 per image • Save 31%',
      features: [
        'Bulk upload',
        '6-month storage',
        '1 minute turnaround time',
        'All features included',
        '2K resolution image download',
        'Branding on image',
        'Phone and email support',
      ],
      notIncluded: [],
      cta: 'Get Business',
      popular: false,
      highlighted: true,
    },
  ]

  const faqs = [
    { q: 'Do credits expire?', a: 'Credits do not expire. Use them whenever you need - your credits are valid indefinitely.' },
    { q: 'Can I upgrade to a higher plan?', a: 'Yes, anytime. You can purchase additional credit packs or upgrade to a higher tier. Unused credits from your current pack remain available.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards (Visa, Mastercard, Amex) and PayPal.' },
    { q: 'Is there a refund policy?', a: 'Unused credits can be refunded within 30 days of purchase. See our refund policy for complete details.' },
    { q: 'What is the difference between 1K and 2K resolution?', a: '1K resolution (1024px) is perfect for web listings and social media. 2K resolution (2048px) provides higher quality for print materials and detailed viewing.' },
    { q: 'How does bulk upload work?', a: 'Professional and Business plans allow you to upload and process multiple images at once, saving you time on large projects.' },
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
              <span className="text-xl font-display font-bold text-white group-hover:text-accent-400 transition-colors">Enhancia</span>
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
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-accent-500/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyber-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="section-label mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            Simple Pricing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Pay Only For
            <span className="gradient-text"> What You Use</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            No hidden fees. No contracts. No complexity. Choose the credit pack that fits your needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-4 py-1 bg-gradient-to-r from-brand-400 to-brand-700 rounded-full text-xs font-bold text-white">
                    Most Popular
                  </div>
                )}

                <div className={`h-full glass-card p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? 'border-brand-500/50 glow-accent' : ''
                } ${plan.highlighted ? 'bg-gradient-to-br from-brand-400/10 to-brand-700/10 border-brand-500/30' : ''}`}>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                    </div>
                    <div className="text-text-muted text-sm mt-1">{plan.credits}</div>
                    <div className="text-brand-400 text-sm mt-2 font-medium">{plan.description}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Included</h4>
                    <ul className="space-y-2.5 mb-4">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-text-secondary">
                          <svg className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="text-sm font-semibold text-text-muted mb-3 uppercase tracking-wider mt-6">Not Included</h4>
                        <ul className="space-y-2.5">
                          {plan.notIncluded.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 text-sm text-text-muted">
                              <svg className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <Link
                    href="/signup"
                    className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                      plan.popular || plan.highlighted ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    <span>{plan.cta}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-text-muted text-sm">
            {['No credit card required', 'Cancel anytime', '30-day money back'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-32 bg-obsidian">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Compare Plans</h2>
            <p className="text-text-secondary">Find the perfect plan for your needs</p>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-text-secondary font-medium">Feature</th>
                    <th className="px-6 py-4 text-center text-text-secondary font-medium">Individual</th>
                    <th className="px-6 py-4 text-center text-brand-400 font-medium">Professional</th>
                    <th className="px-6 py-4 text-center text-text-secondary font-medium">Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { feature: 'Credits', individual: '50', professional: '200', business: '500' },
                    { feature: 'Price per Image', individual: '$0.58', professional: '$0.50', business: '$0.40' },
                    { feature: 'Storage', individual: '14 days', professional: '45 days', business: '6 months' },
                    { feature: 'Turnaround Time', individual: '5 minutes', professional: '2 minutes', business: '1 minute' },
                    { feature: 'Resolution', individual: '1K', professional: '2K', business: '2K' },
                    { feature: 'Bulk Upload', individual: '✗', professional: '✓', business: '✓' },
                    { feature: 'Virtual Staging', individual: '✗', professional: '✓', business: '✓' },
                    { feature: 'Layout Plans', individual: '✗', professional: '✓', business: '✓' },
                    { feature: 'Branding', individual: '✗', professional: '✗', business: '✓' },
                    { feature: 'Support', individual: 'Email', professional: 'Email', business: 'Phone + Email' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-text-muted">{row.individual}</td>
                      <td className="px-6 py-4 text-center text-brand-400 font-semibold">{row.professional}</td>
                      <td className="px-6 py-4 text-center text-text-muted">{row.business}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-text-secondary">Everything you need to know about pricing</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card-hover p-6">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  {faq.q}
                </h3>
                <p className="text-text-secondary pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-300 via-brand-500 to-brand-700" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Transform Your Photos?
          </h2>
          <p className="text-xl text-white/90 mb-10">Start with 5 free credits. No credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="px-10 py-4 bg-white text-accent-600 font-bold text-lg rounded-xl hover:bg-white/90 transition-all hover:scale-105 shadow-xl">
              Start Free Trial
            </Link>
            <Link href="/#features" className="px-10 py-4 bg-white/10 text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all">
              View Features
            </Link>
          </div>
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
