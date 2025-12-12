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

  // Icon Components
  const SkyIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#skyGradient)">
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  )

  const DuskIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#duskGradient)">
      <defs>
        <linearGradient id="duskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )

  const StagingIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#stagingGradient)">
      <defs>
        <linearGradient id="stagingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )

  const UpscaleIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#upscaleGradient)">
      <defs>
        <linearGradient id="upscaleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  )

  const GrassIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#grassGradient)">
      <defs>
        <linearGradient id="grassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )

  const DeclutterIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#declutterGradient)">
      <defs>
        <linearGradient id="declutterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )

  // Benefit Icons
  const FastIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="url(#fastGradient)">
      <defs>
        <linearGradient id="fastGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )

  const CostIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="url(#costGradient)">
      <defs>
        <linearGradient id="costGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

  const NoLockIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="url(#nolockGradient)">
      <defs>
        <linearGradient id="nolockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  )

  const SupportIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="url(#supportGradient)">
      <defs>
        <linearGradient id="supportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  )

  const FreeTrialIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="url(#freetrialGradient)">
      <defs>
        <linearGradient id="freetrialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

  const CopyrightIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="url(#copyrightGradient)">
      <defs>
        <linearGradient id="copyrightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )

  // Pricing Icons
  const FreeIcon = () => (
    <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="url(#freeGradient)">
      <defs>
        <linearGradient id="freeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

  const PayPerPhotoIcon = () => (
    <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="url(#payperphotoGradient)">
      <defs>
        <linearGradient id="payperphotoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  )

  const CreditPackIcon = () => (
    <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="url(#creditpackGradient)">
      <defs>
        <linearGradient id="creditpackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  )

  const BusinessIcon = () => (
    <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="url(#businessGradient)">
      <defs>
        <linearGradient id="businessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )

  const UploadIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="url(#uploadGradient)">
      <defs>
        <linearGradient id="uploadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  )

  const EnhanceIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="url(#enhanceGradient)">
      <defs>
        <linearGradient id="enhanceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )

  const DownloadIcon = () => (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="url(#downloadGradient)">
      <defs>
        <linearGradient id="downloadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )

  const services = [
    { id: 'enhance', name: 'Photo Enhancement & Clarity Tuning', icon: <EnhanceIcon />, description: 'Automatically improve brightness, contrast, and clarity', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80' },
    { id: 'perspective', name: 'Perspective Correction', icon: <UpscaleIcon />, description: 'Fix walls and angles for perfect verticals and horizontals', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
    { id: 'dusk', name: 'Day-to-Dusk Transformation', icon: <DuskIcon />, description: 'Convert daytime photos into magical twilight scenes', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80' },
    { id: 'declutter', name: 'De-clutter', icon: <DeclutterIcon />, description: 'Remove unwanted objects and distractions seamlessly', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80' },
    { id: 'color', name: 'Color Normalization', icon: <GrassIcon />, description: 'Balance colors for consistent, professional results', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
    { id: 'facade', name: 'Facade Enhancement', icon: <SkyIcon />, description: 'Improve building exteriors with smart enhancement', image: 'https://images.unsplash.com/photo-1560448075-cbc16bb4af98?w=800&q=80' },
    { id: 'remove', name: 'Object Removal', icon: <DeclutterIcon />, description: 'Remove unwanted objects and people from photos', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80' },
    { id: 'staging', name: 'Virtual Staging', icon: <StagingIcon />, description: 'Add beautiful virtual furniture to empty rooms', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
    { id: 'copy', name: 'Ad Copy Writing', icon: <EnhanceIcon />, description: 'Generate compelling property descriptions and ad text', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80' },
    { id: 'layout', name: '3D Layout Plan', icon: <UpscaleIcon />, description: 'Create professional 3D layout plans for properties', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80' },
  ]

  const steps = [
    { number: '01', title: 'Upload', description: 'Drag and drop your photo—or upload directly from your device.', icon: <UploadIcon /> },
    { number: '02', title: 'Enhance', description: 'Choose what you want to do and AI automatically applies advanced property-grade visual optimization.', icon: <EnhanceIcon /> },
    { number: '03', title: 'Download', description: 'Save instantly in high-resolution formats', icon: <DownloadIcon /> },
  ]

  const testimonials = [
    { quote: 'I used to spend $$ outsourcing editing—now I do everything with Enhancia AI in minutes.', name: 'Real Estate Agent', role: '', avatar: 'A' },
    { quote: 'The day-to-dusk feature alone doubled engagement on our listings.', name: 'Developer & Property Marketer', role: '', avatar: 'D' },
    { quote: 'Clean, fast, easy… exactly what a photo editor should be.', name: 'Professional Photographer', role: '', avatar: 'P' },
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
    <main className="min-h-screen bg-void">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-display font-bold text-white group-hover:text-brand-400 transition-colors">
                  Enhancia
                </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {['Features', 'Pricing', 'Knowledge Base', 'About'].map((item) => (
                <Link key={item} href={item === 'Features' ? '/#features' : `/${item.toLowerCase().replace(' ', '-')}`} className="btn-ghost">
                  {item}
              </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link href="/login" className="btn-ghost">Sign In</Link>
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
          <div className="lg:hidden bg-obsidian border-t border-white/5 animate-fade-in">
            <div className="px-6 py-6 space-y-2">
              {['Features', 'Pricing', 'Knowledge Base', 'About'].map((item) => (
                <Link key={item} href={item === 'Features' ? '/#features' : `/${item.toLowerCase().replace(' ', '-')}`} 
                  className="block px-4 py-3 text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}>
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
      <section className="relative min-h-screen pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-600/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full grid-pattern opacity-30" />
            </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/20 rounded-full mb-8 animate-fade-in">
                <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-brand-400">AI-Powered Enhancement</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
                Better Photos. Better Words.
                <span className="block gradient-text">Better Results.</span>
              </h1>

              <p className="text-xl text-text-secondary mb-4 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-100">
                Professional-quality photo editing and ad text generation with one simple workflow.
              </p>
              <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-100">
                Because when imagery and copy align, properties move faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-200">
                <Link href="/signup" className="btn-primary text-lg">
                  <span className="flex items-center gap-2">
                    Start editing
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
              <p className="text-sm text-text-muted mt-4 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-300">
                No subscriptions required, no editing skills needed, no waiting.
              </p>

              {/* Stats */}
              <div className="flex items-center gap-8 mt-12 pt-12 border-t border-white/10 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
                {[
                  { value: '50K+', label: 'Photos Enhanced' },
                  { value: '4.9★', label: 'User Rating' },
                  { value: '<2min', label: 'Processing Time' },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
                ))}
            </div>
          </div>

            {/* Right - Image Comparison */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="glass-card p-3 glow-accent">
                <div 
                  data-hero-slider
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize"
                  onMouseMove={handleHeroMouseMove}
                  onMouseUp={handleHeroMouseUp}
                  onClick={handleHeroImageClick}
                >
                  {/* Before */}
                  <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                    <Image src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80" alt="Before" fill className="object-cover" style={{ filter: 'brightness(0.7) saturate(0.5) grayscale(0.3)' }} priority />
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg">
                      <span className="text-sm font-medium text-white/80">BEFORE</span>
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
                    <Image src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80" alt="After" fill className="object-cover" style={{ filter: 'brightness(1.1) saturate(1.2) contrast(1.05)' }} priority />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-cyber-500/10 mix-blend-overlay" />
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-accent-500/90 backdrop-blur-sm rounded-lg">
                      <span className="text-sm font-semibold text-white">ENHANCED</span>
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="absolute top-0 bottom-0 w-1 bg-white" style={{ left: `${sliderPosition}%` }} onMouseDown={handleHeroMouseDown}>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform ${isHeroDragging ? 'scale-110' : 'hover:scale-105'}`}>
                      <svg className="w-5 h-5 text-slate-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-text-muted text-sm mt-4">← Drag to compare →</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              See the <span className="gradient-text">Difference</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our AI transforms dull, uneven, poorly lit images into stunning visuals ready for advertising and listing.
            </p>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-32 relative bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">Why Use Enhancia AI?</div>
            <h2 className="section-title">
              Professional Results
              <span className="gradient-text"> Made Simple</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FastIcon />, title: 'Fast Processing', desc: 'Edit photos in seconds, not hours' },
              { icon: <CostIcon />, title: 'Low Cost', desc: 'Pay-per-photo or economical credit packs' },
              { icon: <NoLockIcon />, title: 'No Lock-In', desc: 'No forced yearly subscription' },
              { icon: <SupportIcon />, title: 'Real Human Support', desc: 'Not just a bot' },
              { icon: <FreeTrialIcon />, title: 'Free Trial Available', desc: 'Experience the quality before you buy' },
              { icon: <CopyrightIcon />, title: 'No Copyright Claims', desc: 'Your images remain entirely yours' },
            ].map((benefit, i) => (
              <div key={i} className="glass-card-hover p-6">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-text-secondary">
              Craft killer ad copy—no complicated inputs required.
            </p>
              </div>
            </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-obsidian to-void" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="section-label">
              <span className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
              The Problem
              </div>
            <h2 className="section-title">
              Bad Photos Kill
              <span className="gradient-text"> Sales</span>
            </h2>
            <p className="section-subtitle">
              82% of buyers skip listings with poor quality photos. Don't let bad lighting cost you the sale.
            </p>
            </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: (
                  <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="url(#lostGradient)">
                    <defs>
                      <linearGradient id="lostGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#dc2626" />
                      </linearGradient>
                    </defs>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
                ), 
                title: 'Lost Opportunities', 
                desc: 'Poor photos mean fewer views and inquiries', 
                stat: '82% skip' 
              },
              { 
                icon: (
                  <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="url(#expensiveGradient)">
                    <defs>
                      <linearGradient id="expensiveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                    </defs>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ), 
                title: 'Expensive Photographers', 
                desc: '$200-500 per session, days of waiting', 
                stat: '$350 avg' 
              },
              { 
                icon: (
                  <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="url(#enhanciaGradient)">
                    <defs>
                      <linearGradient id="enhanciaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="50%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#0891b2" />
                      </linearGradient>
                    </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                ), 
                title: 'The Enhancia Way', 
                desc: 'AI enhancement in under 2 minutes', 
                stat: '$0.69/image', 
                highlight: true 
              },
            ].map((item, i) => (
              <div key={i} className={`glass-card-hover p-8 text-center ${item.highlight ? 'border-brand-500/30' : ''}`}>
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-text-secondary mb-4">{item.desc}</p>
                <div className={`text-2xl font-bold ${item.highlight ? 'gradient-text' : 'text-white'}`}>{item.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-label">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Our AI Tools
            </div>
            <h2 className="section-title">
              Our AI Tools
              <span className="gradient-text"> Include</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to enhance property photos and create compelling listings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={service.id} className="group glass-card-hover overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.image} alt={service.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 bg-brand-500/20 backdrop-blur-sm rounded-xl">
                    {service.icon}
                      </div>
                      </div>
                    <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-text-secondary text-sm mb-4">{service.description}</p>
                  <button className="text-accent-400 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Try Now <span>→</span>
                      </button>
                    </div>
                  </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-obsidian/50 to-void" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="section-label">How It Works</div>
            <h2 className="section-title">
              3 Easy
              <span className="gradient-text"> Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-accent-500/50 to-transparent -translate-x-1/2" />
                )}
                <div className="glass-card p-8 text-center relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-brand-400 to-brand-700 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                  <div className="mb-6 mt-4 flex justify-center">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
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
            <div className="section-label">Real Results</div>
            <h2 className="section-title">
              Success
              <span className="gradient-text"> Stories</span>
          </h2>
        </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              {slides.map((slide, i) => (
                <div key={i} className={`relative aspect-[16/9] transition-all duration-700 ${i === currentSlide ? 'block' : 'hidden'}`}>
                  <Image src={slide.image} alt={slide.property} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
                  <div className="absolute bottom-8 left-8 glass-card p-6">
                    <div className="text-sm text-text-muted mb-1">{slide.location}</div>
                    <div className="text-xl font-semibold text-white mb-2">{slide.property}</div>
                    <div className="text-accent-400 font-semibold">{slide.result}</div>
                  </div>
                </div>
          ))}
                </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-accent-500' : 'bg-white/20 hover:bg-white/40'}`} />
              ))}
                  </div>
              </div>
        </div>
      </section>

          {/* Who It's Built For */}
      <section className="py-32 relative bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">Who It's Built For</div>
            <h2 className="section-title">
              Designed for Professionals —
              <span className="gradient-text"> Loved by Everyday Users</span>
            </h2>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Real Estate Property Managers',
              'Real Estate Sales Agents',
              'Property Advertising Photographers',
              'Builders & Property Developers',
              'Designers & Content Creators',
              'Anyone wanting better-looking property images',
            ].map((user, i) => (
              <div key={i} className="glass-card-hover p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  </div>
                <h3 className="text-lg font-semibold text-white">{user}</h3>
                </div>
              ))}
            </div>
          </div>
      </section>

          {/* Testimonials */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">Testimonials</div>
            <h2 className="section-title">
              What Real
              <span className="gradient-text"> Users Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card-hover p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-text-secondary mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    {t.role && <div className="text-sm text-text-muted">{t.role}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-32 relative bg-obsidian">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="section-label">Pricing Preview</div>
            <h2 className="section-title">
              Flexible Options for
              <span className="gradient-text"> Every User Level</span>
            </h2>
            <p className="section-subtitle">Choose the plan that works best for you</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Free Trial', icon: <FreeIcon />, desc: 'Try with watermark / limited resolution', features: [], cta: 'Start Free', popular: false },
              { name: 'Pay-Per-Photo', icon: <PayPerPhotoIcon />, desc: 'Simple and cost-effective', features: [], cta: 'Buy Now', popular: false },
              { name: 'Credit Packs', icon: <CreditPackIcon />, desc: 'Best value for frequent editors', features: [], cta: 'View Packs', popular: true },
              { name: 'Business Plans', icon: <BusinessIcon />, desc: 'For agencies, photographers, developers', features: [], cta: 'Contact Sales', popular: false },
            ].map((plan, i) => (
              <div key={i} className={`relative glass-card p-8 ${plan.popular ? 'border-brand-500/50 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-400 to-brand-700 rounded-full text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="mb-4 flex justify-center">{plan.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="text-text-muted text-sm">{plan.desc}</div>
                </div>
                <Link href="/pricing" className={`block text-center py-3 rounded-xl font-semibold transition-all ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  <span>{plan.cta}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing" className="text-brand-400 hover:text-brand-300 font-semibold flex items-center justify-center gap-2">
              Compare Plans <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="glass-card p-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 text-center">
              Built Specifically for
              <span className="gradient-text"> Real Estate</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              Enhance AI is built specifically for real estate and property photography. We help professionals improve listing photos, rental ads, portfolio galleries, and marketing visuals—instantly, consistently, and at scale.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Our AI-backed photo processing ensures industry-standard outputs suitable for advertising, websites, social platforms, and print marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-300 via-brand-500 to-brand-700" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Ready to Transform Your Listings?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of real estate professionals creating stunning photos with Enhancia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="px-10 py-4 bg-white text-accent-600 font-bold text-lg rounded-xl hover:bg-white/90 transition-all hover:scale-105 shadow-xl">
                Start Free Trial
            </Link>
            <Link href="/pricing" className="px-10 py-4 bg-white/10 text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all">
              View Pricing
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 mt-12 text-white/80 text-sm">
            {['5 Free Credits', 'No Credit Card', 'Cancel Anytime'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
                {item}
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-obsidian border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
              </div>
                <span className="text-xl font-display font-bold text-white">Enhancia</span>
              </Link>
              <p className="text-text-muted text-sm">AI-Powered Property Photo Enhancement</p>
            </div>

            {[
              { title: 'Legal', links: ['Privacy Policy', 'Terms & Conditions', 'User Guidelines'] },
              { title: 'Support', links: ['Contact', 'Knowledge Base', 'Help Center'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-white mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-text-muted hover:text-white transition-colors text-sm">
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
            <p>Made with ❤️ for real estate professionals</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
