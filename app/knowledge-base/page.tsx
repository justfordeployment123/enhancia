'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null)

  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: '🚀', count: 7 },
    { id: 'editing-tools', name: 'Editing Tools', icon: '🛠️', count: 5 },
    { id: 'tutorials', name: 'Tutorials', icon: '📚', count: 4 },
    { id: 'faq', name: 'FAQs', icon: '❓', count: 8 },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: '🔧', count: 4 },
    { id: 'updates', name: 'Product Updates', icon: '📢', count: 2 },
  ]

  const howToGuides = [
    {
      id: 'upload-photo',
      title: 'How to Upload a Photo',
      category: 'getting-started',
      overview: 'Learn how to upload property photos from your computer or device for editing.',
      steps: [
        'Log in to your Enhancia account',
        'Click "Upload Photo" on the dashboard',
        'Drag your image into the upload area or click "Browse"',
        'Confirm file name and preview',
        'Click "Continue to Enhance"',
      ],
      details: [
        'Supported file types & size limits',
        'Drag-and-drop vs. "Browse Files" upload',
        'Uploading multiple images at once',
        'What happens after your upload completes',
      ],
    },
    {
      id: 'enhance-image',
      title: 'How to Enhance an Image',
      category: 'getting-started',
      overview: 'Use AI to automatically make your images clearer, brighter, and more appealing.',
      steps: [
        'Select an uploaded photo',
        'Click "Auto Enhance"',
        'Choose a preset (e.g. Standard, Real Estate, Day to Dusk)',
        'Wait for processing (usually a few seconds)',
        'Use the before/after slider to review',
        'Save or fine-tune with manual tools',
      ],
      details: [
        'One-click enhancement',
        'Recommended presets for real estate',
        'Comparing before vs. after',
      ],
    },
    {
      id: 'editor-tools',
      title: 'How to Use the Editor Tools',
      category: 'editing-tools',
      overview: 'Learn what each editing tool does and when to use it.',
      steps: [
        'Open an enhanced image in the Editor',
        'Explore each toolbar section with tooltips',
        'Apply changes and use Undo/Redo',
        'Use Reset to return to original',
        'Save edits as a new version',
      ],
      details: [
        'Crop, rotate, straighten',
        'Brightness, contrast, saturation',
        'Perspective correction (verticals & horizontals)',
        'Day-to-dusk conversion',
        'Sky replacement',
      ],
    },
    {
      id: 'remove-background',
      title: 'How to Remove Background',
      category: 'editing-tools',
      overview: 'Quickly isolate your property subject or object for marketing graphics.',
      steps: [
        'Upload or open an image',
        'Click "Remove Background"',
        'Wait while AI processes the image',
        'Use the brush tools (Add/Erase) to refine edges',
        'Save as PNG (transparent) or JPG (white background)',
      ],
      details: [
        'Single-click background removal',
        'Refining edges',
        'Exporting transparent PNG',
      ],
    },
    {
      id: 'upscale-images',
      title: 'How to Upscale Images',
      category: 'editing-tools',
      overview: 'Increase resolution without losing detail — ideal for print and large displays.',
      steps: [
        'Select an image',
        'Open the Upscale option',
        'Choose the upscale factor (2x, 4x, etc.)',
        'Review processing time & preview',
        'Download the upscaled file',
      ],
      details: [
        'When to upscale',
        '2x and 4x options',
        'File size implications',
      ],
    },
    {
      id: 'download-image',
      title: 'How to Download Your Enhanced Image',
      category: 'getting-started',
      overview: 'Export images in the formats you need.',
      steps: [
        'Open your processed image',
        'Click "Download"',
        'Choose format and resolution',
        'Confirm file naming conventions',
        'Save to your device or cloud storage',
      ],
      details: [
        'JPG vs PNG',
        'Resolution and quality settings',
        'Downloading individual vs bulk images',
      ],
    },
    {
      id: 'fix-errors',
      title: 'How to Fix Common Errors',
      category: 'troubleshooting',
      overview: 'Learn how to quickly resolve the most common in-app issues.',
      steps: [
        'Identify the error message',
        'Check the troubleshooting guide for your specific error',
        'Follow the quick actions provided',
        'Contact support if the issue persists',
      ],
      details: [
        '"File type not supported"',
        '"Upload failed"',
        '"Processing error"',
        '"Download failed"',
      ],
    },
  ]

  const tutorials = [
    {
      id: 'ai-enhancement-guide',
      title: 'Complete Guide to AI Photo Enhancement',
      category: 'tutorials',
      summary: 'A deep dive into how AI enhancement works, when to use each setting, and how to avoid over-editing.',
      sections: [
        'What AI enhancement does technically (in simple terms)',
        'Best settings for real estate vs interior vs exterior',
        'How to keep images realistic and trustworthy',
        'Examples: before/after breakdown',
      ],
    },
    {
      id: 'phone-photography',
      title: 'How to Capture Professional-Quality Property Photos with Your Phone',
      category: 'tutorials',
      summary: 'Help users get the best possible input, even with a smartphone.',
      sections: [
        'Best time of day to shoot',
        'Basic composition rules',
        'Avoiding blur and noise',
        'How to shoot for AI enhancement (dynamic range, angles, etc.)',
      ],
    },
    {
      id: 'pre-photography-checklist',
      title: 'The Ultimate Pre-Photography Checklist',
      category: 'tutorials',
      summary: 'A printable or downloadable checklist to prepare a property before taking photos.',
      sections: [
        'Staging tips (decluttering, lighting, styling)',
        'Indoor vs outdoor prep',
        'What to remove and what to keep',
        'How this affects final AI enhancement quality',
      ],
    },
    {
      id: 'ai-copywriting',
      title: 'AI Copywriting Guide for Property Managers',
      category: 'tutorials',
      summary: 'Teach users how to leverage AI to generate compelling listing descriptions and ad copy.',
      sections: [
        'What details to provide to the AI (amenities, location, property type)',
        'Dos and don\'ts for honest, compliant copy',
        'Tone options (professional, friendly, luxury)',
        'Example prompts and outputs',
      ],
    },
  ]

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What file types does Enhancia support?',
          a: 'We currently support JPG, PNG, and TIFF. Very large files may be automatically resized for performance.',
        },
        {
          q: 'Is there a free trial?',
          a: 'Yes. You can try Enhancia with limited resolution or watermarked exports before upgrading to a paid plan.',
        },
        {
          q: 'Are my photos private?',
          a: 'Yes. Your images are stored securely and are not shared with third parties. You maintain full ownership of your content.',
        },
        {
          q: 'Can I use Enhancia for non-real-estate images?',
          a: 'Yes, although our tools are optimized for property and architectural photography, they also work well on many other image types.',
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          q: 'How fast are images processed?',
          a: 'Most images are processed within a few seconds, depending on size, effects applied, and current system load.',
        },
        {
          q: 'Is there a limit to how many images I can edit?',
          a: 'Limits depend on your plan. Credit-based and subscription-based options are available; check your account dashboard for remaining usage.',
        },
      ],
    },
    {
      category: 'Billing',
      questions: [
        {
          q: 'What happens if my payment fails?',
          a: 'Your subscription may be paused until payment is updated. You\'ll still have access to your account, but some premium features may be disabled.',
        },
        {
          q: 'Can I cancel my subscription anytime?',
          a: 'Yes. You can cancel at any time from your account settings. You\'ll keep access until the end of the current billing cycle.',
        },
      ],
    },
  ]

  const troubleshooting = [
    {
      id: 'upload-failures',
      title: 'Upload Failures',
      category: 'troubleshooting',
      causes: [
        'Unsupported file type',
        'File size too large',
        'Unstable internet connection',
      ],
      fixes: [
        'Check file format and size',
        'Try a smaller image or compress it',
        'Refresh the page and try again',
        'Test another browser or device',
      ],
    },
    {
      id: 'slow-processing',
      title: 'Slow Processing',
      category: 'troubleshooting',
      causes: [
        'Very large images',
        'High server load',
        'Multiple effects applied at once',
      ],
      fixes: [
        'Try reducing file size',
        'Process fewer images at a time',
        'Check your internet connection',
        'Try again after a short interval',
      ],
    },
    {
      id: 'account-issues',
      title: 'Account Issues',
      category: 'troubleshooting',
      causes: [
        'Can\'t log in',
        'Forgot password',
        'Email not verified',
      ],
      fixes: [
        'Use the "Forgot Password" link on the login page',
        'Check spam/junk folders for verification emails',
        'Make sure you\'re using the correct login method (email vs third-party auth)',
        'If still stuck, submit a support ticket',
      ],
    },
    {
      id: 'billing-questions',
      title: 'Billing Questions',
      category: 'troubleshooting',
      causes: [
        'Charged twice',
        'Can\'t update card',
        'Didn\'t receive invoice',
      ],
      fixes: [
        'Check your billing history in the account settings',
        'Confirm you don\'t have duplicate accounts',
        'Update payment method and retry',
        'Contact support with your transaction ID for manual review',
      ],
    },
  ]

  const productUpdates = [
    {
      date: 'September 2025',
      items: [
        'Launched background removal for property photos',
        'Improved perspective correction for interior images',
        'Added new "Real Estate Premium" enhancement preset',
      ],
    },
    {
      date: 'August 2025',
      items: [
        'Performance boost for bulk image uploads',
        'New AI copywriting templates for property managers',
        'Minor bug fixes and UI improvements',
      ],
    },
  ]

  const filteredGuides = howToGuides.filter(guide => 
    (!activeCategory || guide.category === activeCategory) &&
    (!searchQuery || guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || guide.overview.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const filteredTutorials = tutorials.filter(tutorial =>
    (!activeCategory || tutorial.category === activeCategory) &&
    (!searchQuery || tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) || tutorial.summary.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const filteredTroubleshooting = troubleshooting.filter(item =>
    (!activeCategory || item.category === activeCategory) &&
    (!searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase()))
  )

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

      {/* Hero Search */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/20 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="section-label mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Help Center
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              How Can We
              <span className="gradient-text"> Help You?</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Find step-by-step guides, tutorials, FAQs, and troubleshooting tips to get the most out of Enhancia
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, tutorials, and FAQs…"
              className="w-full h-16 px-6 pr-20 bg-white/[0.05] border border-white/[0.1] rounded-2xl text-white placeholder-text-muted focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20 transition-all text-lg"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-brand-400 to-brand-700 rounded-xl flex items-center justify-center text-white hover:shadow-glow hover:scale-105 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 justify-center">
            {['Getting Started', 'Editing Tools', 'Troubleshooting', 'Billing Help'].map((link) => (
              <button
                key={link}
                onClick={() => setActiveCategory(link.toLowerCase().replace(' ', '-'))}
                className="px-5 py-2 bg-white/[0.05] text-text-secondary rounded-full text-sm font-medium border border-white/[0.1] hover:bg-white/[0.1] hover:text-white hover:border-brand-500/50 transition-all"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`glass-card p-6 text-center transition-all hover:-translate-y-1 ${
                  activeCategory === cat.id ? 'border-brand-500/50 bg-brand-500/10' : ''
                }`}
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-white font-semibold mb-1 text-sm">{cat.name}</h3>
                <p className="text-text-muted text-xs">{cat.count} articles</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-20">
        {/* How-To Guides */}
        {(activeCategory === null || activeCategory === 'getting-started' || activeCategory === 'editing-tools' || activeCategory === 'troubleshooting') && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="section-label mb-4">How-To Guides</div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Step-by-Step Guides</h2>
                <p className="text-text-secondary">Short, clear guides to help you get started</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="glass-card-hover p-6 cursor-pointer"
                  onClick={() => setExpandedArticle(expandedArticle === guide.id ? null : guide.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-brand-400 transition-colors pr-4">
                      {guide.title}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-brand-400 flex-shrink-0 transition-transform ${
                        expandedArticle === guide.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <p className="text-text-secondary text-sm mb-4">{guide.overview}</p>

                  {expandedArticle === guide.id && (
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-4 animate-fade-in">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">What's Covered:</h4>
                        <ul className="space-y-1.5">
                          {guide.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                              <svg className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Steps:</h4>
                        <ol className="space-y-2">
                          {guide.steps.map((step, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 font-semibold flex items-center justify-center text-xs">
                                {i + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tutorials */}
        {(activeCategory === null || activeCategory === 'tutorials') && (
          <section>
            <div className="mb-8">
              <div className="section-label mb-4">Tutorials</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Educational Guides</h2>
              <p className="text-text-secondary">Learn how to get better results beyond just using the editor</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredTutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="glass-card-hover p-6 cursor-pointer"
                  onClick={() => setExpandedArticle(expandedArticle === tutorial.id ? null : tutorial.id)}
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{tutorial.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{tutorial.summary}</p>

                  {expandedArticle === tutorial.id && (
                    <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Sections:</h4>
                      <ul className="space-y-2">
                        {tutorial.sections.map((section, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                            <svg className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {section}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        {(activeCategory === null || activeCategory === 'faq') && (
          <section>
            <div className="mb-8">
              <div className="section-label mb-4">FAQs</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Frequently Asked Questions</h2>
              <p className="text-text-secondary">Quick answers to common questions</p>
            </div>

            <div className="space-y-6">
              {faqs.map((category, catIndex) => (
                <div key={catIndex} className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, i) => (
                      <div key={i} className="border-b border-white/5 last:border-0 pb-4 last:pb-0">
                        <h4 className="text-base font-medium text-white mb-2 flex items-start gap-3">
                          <svg className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                          {faq.q}
                        </h4>
                        <p className="text-text-secondary pl-8">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Troubleshooting */}
        {(activeCategory === null || activeCategory === 'troubleshooting') && (
          <section>
            <div className="mb-8">
              <div className="section-label mb-4">Troubleshooting</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Fix Common Issues</h2>
              <p className="text-text-secondary">Quick solutions to resolve problems</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredTroubleshooting.map((item) => (
                <div
                  key={item.id}
                  className="glass-card-hover p-6 cursor-pointer"
                  onClick={() => setExpandedArticle(expandedArticle === item.id ? null : item.id)}
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                    <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.title}
                  </h3>

                  {expandedArticle === item.id && (
                    <div className="mt-4 space-y-4 animate-fade-in">
                      <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          Common Causes
                        </h4>
                        <ul className="space-y-1.5 pl-6">
                          {item.causes.map((cause, i) => (
                            <li key={i} className="text-sm text-text-secondary list-disc">{cause}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-brand-400 mb-2 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Quick Fixes
                        </h4>
                        <ul className="space-y-1.5 pl-6">
                          {item.fixes.map((fix, i) => (
                            <li key={i} className="text-sm text-text-secondary list-disc">{fix}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Product Updates */}
        {(activeCategory === null || activeCategory === 'updates') && (
          <section>
            <div className="mb-8">
              <div className="section-label mb-4">Product Updates</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">What's New</h2>
              <p className="text-text-secondary">Stay up to date with new features and improvements</p>
            </div>

            <div className="space-y-6">
              {productUpdates.map((update, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{update.date}</h3>
                  </div>
                  <ul className="space-y-2 pl-16">
                    {update.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-text-secondary">
                        <svg className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Contact Support */}
      <section className="py-20 lg:py-32 bg-obsidian">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-text-secondary">Can't find what you're looking for? Submit a support ticket and we'll help you personally.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '✉️', title: 'Email Support', contact: 'support@enhancia.com', time: 'Within 12 hours' },
              { icon: '💬', title: 'Live Chat', contact: 'Start a conversation', time: 'Mon-Fri 9AM-6PM' },
              { icon: '📞', title: 'Submit Ticket', contact: 'Get personalized help', time: '24/7 available' },
            ].map((option, i) => (
              <div key={i} className="glass-card-hover p-8 text-center group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{option.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                <p className="text-brand-400 font-medium mb-1">{option.contact}</p>
                <p className="text-text-muted text-sm mb-6">{option.time}</p>
                <button className="btn-primary w-full"><span>Contact</span></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-void border-t border-white/5 py-12">
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
