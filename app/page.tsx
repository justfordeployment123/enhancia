'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHeroDragging, setIsHeroDragging] = useState(false)

  const handleHeroMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsHeroDragging(true)
  }

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    if (isHeroDragging) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    }
  }

  const handleHeroMouseUp = () => {
    setIsHeroDragging(false)
  }

  const handleHeroImageClick = (e: React.MouseEvent) => {
    if (!isHeroDragging) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    }
  }

  useEffect(() => {
    if (isHeroDragging) {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        const heroSlider = document.querySelector('[data-hero-slider]')
        if (heroSlider) {
          const rect = heroSlider.getBoundingClientRect()
          const x = e.clientX - rect.left
          const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
          setSliderPosition(percentage)
        }
      }
      const handleGlobalMouseUp = () => setIsHeroDragging(false)
      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove)
        document.removeEventListener('mouseup', handleGlobalMouseUp)
      }
    }
  }, [isHeroDragging])

  const benefits = [
    { icon: '⚡', title: 'Fast Processing', desc: 'Edit photos in seconds, not hours', color: 'from-cyan-400 to-cyan-600' },
    { icon: '💰', title: 'Low Cost', desc: 'Pay-per-photo or economical credit packs', color: 'from-emerald-400 to-emerald-600' },
    { icon: '🔓', title: 'No Lock-In', desc: 'No forced yearly subscription', color: 'from-blue-400 to-blue-600' },
    { icon: '🧑‍💻', title: 'Real Human Support', desc: 'Not just a bot', color: 'from-violet-400 to-violet-600' },
    { icon: '🆓', title: 'Free Trial Available', desc: 'Experience the quality before you buy', color: 'from-amber-400 to-amber-600' },
    { icon: '🚫', title: 'No Copyright Claims', desc: 'Your images remain entirely yours', color: 'from-rose-400 to-rose-600' },
  ]

  const tools = [
    { name: 'Photo Enhancement', desc: 'Brightness, contrast, and clarity tuning', icon: '✨' },
    { name: 'Perspective Correction', desc: 'Fix walls and angles perfectly', icon: '📐' },
    { name: 'Day-to-Dusk', desc: 'Transform daytime to twilight magic', icon: '🌅' },
    { name: 'De-clutter', desc: 'Remove unwanted objects seamlessly', icon: '🧹' },
    { name: 'Color Normalization', desc: 'Consistent, professional colors', icon: '🎨' },
    { name: 'Facade Enhancement', desc: 'Improve building exteriors', icon: '🏠' },
    { name: 'Object Removal', desc: 'Remove people and objects', icon: '✂️' },
    { name: 'Virtual Staging', desc: 'Add furniture to empty rooms', icon: '🛋️' },
    { name: 'Ad Copy Writing', desc: 'Generate compelling descriptions', icon: '✍️' },
    { name: '3D Layout Plan', desc: 'Create professional floor plans', icon: '📊' },
  ]

  const steps = [
    { number: '01', title: 'Upload', desc: 'Drag and drop your photo—or upload directly from your device.', icon: '📤' },
    { number: '02', title: 'Enhance', desc: 'Choose what you want and AI applies property-grade optimization.', icon: '✨' },
    { number: '03', title: 'Download', desc: 'Save instantly in high-resolution formats.', icon: '📥' },
  ]

  const users = [
    { title: 'Real Estate Property Managers', icon: '🏢' },
    { title: 'Real Estate Sales Agents', icon: '🤝' },
    { title: 'Property Photographers', icon: '📸' },
    { title: 'Builders & Developers', icon: '🏗️' },
    { title: 'Designers & Creators', icon: '🎨' },
    { title: 'Home Sellers', icon: '🏠' },
  ]

  const testimonials = [
    { quote: 'I used to spend $$ outsourcing editing—now I do everything with Enhancia AI in minutes.', author: 'Real Estate Agent', avatar: 'A' },
    { quote: 'The day-to-dusk feature alone doubled engagement on our listings.', author: 'Developer & Property Marketer', avatar: 'D' },
    { quote: 'Clean, fast, easy… exactly what a photo editor should be.', author: 'Professional Photographer', avatar: 'P' },
  ]

  const pricingOptions = [
    { emoji: '🆓', name: 'Free Trial', desc: 'Try with watermark / limited resolution', cta: 'Start Free' },
    { emoji: '💳', name: 'Pay-Per-Photo', desc: 'Simple and cost-effective', cta: 'Buy Now' },
    { emoji: '🎟️', name: 'Credit Packs', desc: 'Best value for frequent editors', cta: 'View Packs', popular: true },
    { emoji: '🏢', name: 'Business Plans', desc: 'For agencies & developers', cta: 'Contact Sales' },
  ]

  const slides = [
    { property: 'Modern Condo', location: 'Austin, TX', image: '/images/carousel/condo.png', result: 'Sold 3 days faster' },
    { property: 'Luxury Home', location: 'Los Angeles, CA', image: '/images/carousel/luxury-home.png', result: '+40% inquiries' },
    { property: 'Townhouse', location: 'New York, NY', image: '/images/carousel/townhouse.png', result: 'Record sale price' },
  ]

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <main className="min-h-screen bg-void overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-600/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full grid-pattern opacity-20" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-void/60 backdrop-blur-2xl border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:shadow-brand-500/40 transition-all duration-300">
                <span className="text-white font-bold text-xl">E</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-xl font-display font-bold text-white group-hover:text-brand-400 transition-colors">
                  Enhancia
                </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {['Features', 'Pricing', 'Knowledge Base', 'About'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Features' ? '/#features' : `/${item.toLowerCase().replace(' ', '-')}`} 
                  className="px-5 py-2.5 text-text-secondary hover:text-brand-400 font-medium rounded-lg hover:bg-brand-500/10 transition-all duration-200"
                >
                  {item}
              </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link href="/login" className="px-5 py-2.5 text-text-secondary hover:text-white font-medium transition-colors">
                Sign In
              </Link>
              <Link href="/signup" className="btn-primary">
                <span>Get Started Free</span>
              </Link>
            </div>

            <button className="lg:hidden p-2 rounded-lg hover:bg-white/5" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-white rounded transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-white rounded transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-white rounded transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-obsidian/95 backdrop-blur-xl border-t border-white/5 animate-fade-in">
            <div className="px-6 py-6 space-y-2">
              {['Features', 'Pricing', 'Knowledge Base', 'About'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Features' ? '/#features' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-4 py-3 text-text-secondary hover:text-brand-400 hover:bg-brand-500/10 rounded-lg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
              </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-white/5">
                <Link href="/login" className="block px-4 py-3 text-center text-text-secondary hover:text-white rounded-lg">Sign In</Link>
                <Link href="/signup" className="block btn-primary text-center">Get Started Free</Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500/10 border border-brand-500/20 rounded-full mb-8 animate-fade-in backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
                </span>
                <span className="text-sm font-medium text-brand-400">Where good photos become great</span>
            </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
                Better Photos.
                <br />
                Better Words.
                <span className="block mt-2 bg-gradient-to-r from-brand-300 via-brand-400 to-brand-600 bg-clip-text text-transparent">
                  Better Results.
                </span>
              </h1>

              <p className="text-xl text-text-secondary mb-3 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-100">
                Professional-quality photo editing and ad text generation with one simple workflow.
              </p>
              <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
                Because when imagery and copy align, properties move faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
                <Link href="/signup" className="btn-primary text-lg group">
                  <span className="flex items-center gap-2">
                    Start editing
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
              <p className="text-sm text-text-muted mt-4 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400 flex items-center justify-center lg:justify-start gap-6">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-brand-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  No subscriptions
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-brand-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  No skills needed
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-brand-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  No waiting
                </span>
              </p>

              {/* Stats */}
              <div className="flex items-center gap-10 mt-14 pt-10 border-t border-white/10 justify-center lg:justify-start animate-fade-in-up animation-delay-500">
                {[
                  { value: '50K+', label: 'Photos Enhanced' },
                  { value: '4.9★', label: 'User Rating' },
                  { value: '<2min', label: 'Processing' },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
                ))}
            </div>
          </div>

            {/* Right - Image Comparison */}
            <div className="animate-fade-in-up animation-delay-300">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-400/20 via-brand-500/10 to-brand-600/20 rounded-3xl blur-2xl" />
                <div className="relative glass-card p-4 rounded-3xl">
                  <div 
                  data-hero-slider
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize"
                  onMouseMove={handleHeroMouseMove}
                  onMouseUp={handleHeroMouseUp}
                  onClick={handleHeroImageClick}
                >
                  {/* Before */}
                    <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                      <Image src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80" alt="Before" fill className="object-cover" style={{ filter: 'brightness(0.7) saturate(0.5) grayscale(0.3)' }} priority />
                      <div className="absolute top-4 left-4 px-4 py-2 bg-black/70 backdrop-blur-md rounded-lg border border-white/10">
                        <span className="text-sm font-semibold text-white/80">BEFORE</span>
                    </div>
                  </div>
                  
                  {/* After */}
                    <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
                      <Image src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80" alt="After" fill className="object-cover" style={{ filter: 'brightness(1.1) saturate(1.2) contrast(1.05)' }} priority />
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-400/10 via-transparent to-brand-600/10 mix-blend-overlay" />
                      <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-brand-500 to-brand-600 backdrop-blur-md rounded-lg shadow-lg shadow-brand-500/25">
                        <span className="text-sm font-bold text-white">ENHANCED</span>
                    </div>
                  </div>

                    {/* Slider */}
                    <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg" style={{ left: `${sliderPosition}%` }} onMouseDown={handleHeroMouseDown}>
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing transition-all duration-200 ${isHeroDragging ? 'scale-110 shadow-brand-500/30' : 'hover:scale-105'}`}>
                        <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <p className="text-center text-text-muted text-sm mt-6 flex items-center justify-center gap-2">
                <span className="text-lg">←</span> Drag to compare <span className="text-lg">→</span>
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <div className="w-7 h-12 border-2 border-brand-500/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-brand-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* See the Difference */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/50 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            See the <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">Difference</span>
            </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Our AI transforms dull, uneven, poorly lit images into stunning visuals ready for advertising and listing.
          </p>
          </div>
      </section>

      {/* Core Benefits */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-obsidian" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="section-label">
              <span className="text-lg">💡</span>
              Why Use Enhancia AI?
              </div>
            <h2 className="section-title">
              Professional Results
              <span className="block mt-2 bg-gradient-to-r from-brand-300 to-brand-600 bg-clip-text text-transparent">Made Simple</span>
            </h2>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="feature-card group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-3xl">{benefit.icon}</span>
              </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-text-secondary leading-relaxed">{benefit.desc}</p>
            </div>
            ))}
              </div>
          <div className="mt-12 text-center">
            <p className="text-xl text-brand-400 font-medium">
              ✨ Craft killer ad copy—no complicated inputs required.
            </p>
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-label">
              <span className="text-lg">🛠️</span>
              Our AI Tools
        </div>
            <h2 className="section-title">
              Everything You Need
              <span className="block mt-2 bg-gradient-to-r from-brand-300 to-brand-600 bg-clip-text text-transparent">In One Platform</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {tools.map((tool, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-brand-500/10 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="text-base font-semibold text-white mb-1">{tool.name}</h3>
                <p className="text-sm text-text-muted">{tool.desc}</p>
                      </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-obsidian to-void" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-500/5 rounded-full blur-[200px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="section-label">
              <span className="text-lg">🚀</span>
              How It Works
            </div>
            <h2 className="section-title">
              3 Easy
              <span className="bg-gradient-to-r from-brand-300 to-brand-600 bg-clip-text text-transparent"> Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-brand-500/50 to-transparent -translate-x-1/2" />
                )}
                <div className="text-center">
                  <div className="relative inline-flex mb-8">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-2xl shadow-brand-500/30">
                      <span className="text-4xl">{step.icon}</span>
                      </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-void border-2 border-brand-500 flex items-center justify-center text-brand-400 font-bold">
                      {step.number}
                    </div>
                      </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 relative bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">
              <span className="text-lg">🏆</span>
              Real Results
            </div>
            <h2 className="section-title">
              Success
              <span className="bg-gradient-to-r from-brand-300 to-brand-600 bg-clip-text text-transparent"> Stories</span>
          </h2>
        </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              {slides.map((slide, i) => (
                <div key={i} className={`relative aspect-[16/9] transition-all duration-700 ${i === currentSlide ? 'block' : 'hidden'}`}>
                  <Image src={slide.image} alt={slide.property} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
                  <div className="absolute bottom-8 left-8 glass-card p-6">
                    <div className="text-sm text-text-muted mb-1">{slide.location}</div>
                    <div className="text-xl font-semibold text-white mb-2">{slide.property}</div>
                    <div className="text-brand-400 font-semibold">{slide.result}</div>
                  </div>
                </div>
              ))}
        </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className={`h-2 rounded-full transition-all ${i === currentSlide ? 'w-10 bg-brand-500' : 'w-2 bg-white/20 hover:bg-white/40'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's Built For */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-label">
              <span className="text-lg">👥</span>
              Who It's Built For
                  </div>
            <h2 className="section-title">
              Designed for Professionals
              <span className="block mt-2 bg-gradient-to-r from-brand-300 to-brand-600 bg-clip-text text-transparent">Loved by Everyone</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-brand-500/10 hover:border-brand-500/30 transition-all duration-300 text-center hover:-translate-y-2">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{user.icon}</div>
                <h3 className="text-lg font-semibold text-white">{user.title}</h3>
                </div>
              ))}
            </div>
          </div>
      </section>

          {/* Testimonials */}
      <section className="py-32 relative bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-label">
              <span className="text-lg">💬</span>
              Testimonials
            </div>
            <h2 className="section-title">
              What Real
              <span className="bg-gradient-to-r from-brand-300 to-brand-600 bg-clip-text text-transparent"> Users Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="feature-card">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold shadow-lg shadow-brand-500/25">
                    {t.avatar}
                  </div>
                  <div className="font-semibold text-white">{t.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[150px]" />
          </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="section-label">
              <span className="text-lg">💎</span>
              Pricing
                  </div>
            <h2 className="section-title">
              Flexible Options for
              <span className="block mt-2 bg-gradient-to-r from-brand-300 to-brand-600 bg-clip-text text-transparent">Every User Level</span>
            </h2>
                </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {pricingOptions.map((plan, i) => (
              <div key={i} className={`relative feature-card text-center ${plan.popular ? 'border-brand-500/50 bg-brand-500/5' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full text-sm font-semibold text-white shadow-lg shadow-brand-500/25">
                    Most Popular
                  </div>
                )}
                <div className="text-5xl mb-4 mt-2">{plan.emoji}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-text-muted text-sm mb-6">{plan.desc}</p>
                <Link href="/pricing" className={`block py-3 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-gradient-to-r from-brand-400 to-brand-600 text-white hover:shadow-lg hover:shadow-brand-500/25' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold text-lg transition-colors">
              Compare All Plans
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-32 relative bg-obsidian">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 via-brand-400/10 to-brand-600/20 rounded-3xl blur-2xl" />
            <div className="relative glass-card p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
                Built Specifically for
                <span className="block mt-2 bg-gradient-to-r from-brand-300 to-brand-600 bg-clip-text text-transparent">Real Estate</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Enhance AI is built specifically for real estate and property photography. We help professionals improve listing photos, rental ads, portfolio galleries, and marketing visuals—instantly, consistently, and at scale.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our AI-backed photo processing ensures industry-standard outputs suitable for advertising, websites, social platforms, and print marketing.
              </p>
                </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight">
            Ready to Transform
            <br />
            Your Listings?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of real estate professionals creating stunning photos with Enhancia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="px-12 py-5 bg-white text-brand-600 font-bold text-lg rounded-xl hover:bg-white/90 transition-all hover:scale-105 shadow-2xl shadow-black/20">
                Start Free Trial
            </Link>
            <Link href="/pricing" className="px-12 py-5 bg-white/10 text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all backdrop-blur-sm">
              View Pricing
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-14 text-white/90 text-sm">
            {['5 Free Credits', 'No Credit Card Required', 'Cancel Anytime'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
                {item}
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-void border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/25">
                  <span className="text-white font-bold text-xl">E</span>
              </div>
                <span className="text-xl font-display font-bold text-white">Enhancia</span>
              </Link>
              <p className="text-text-muted text-sm mb-4">AI-Powered Property Photo Enhancement</p>
              <p className="text-text-muted text-xs">Where good photos become great</p>
            </div>

            {[
              { title: 'Legal', links: ['Privacy Policy', 'Terms & Conditions', 'User Guidelines'] },
              { title: 'Support', links: ['Contact', 'Knowledge Base', 'Help Center'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-white mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link href={`/${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-text-muted hover:text-brand-400 transition-colors text-sm">
                        {link}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            ))}
            </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-sm">
            <p>© 2024 Enhancia. All rights reserved.</p>
            <p className="flex items-center gap-1">Made with <span className="text-red-500">❤️</span> for real estate professionals</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
