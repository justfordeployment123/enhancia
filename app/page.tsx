'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [serviceSliders, setServiceSliders] = useState<{[key: number]: number}>({ 0: 50, 1: 50, 2: 50, 3: 50, 4: 50, 5: 50, 6: 50, 7: 50 })
  const [showAllServices, setShowAllServices] = useState(false)
  const [isDragging, setIsDragging] = useState<number | null>(null)
  const [isHeroDragging, setIsHeroDragging] = useState(false)
  
  const handleServiceSliderChange = (index: number, value: number) => {
    setServiceSliders(prev => ({ ...prev, [index]: value }))
  }

  const handleMouseDown = (index: number, e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(index)
  }

  const handleMouseMove = (index: number, e: React.MouseEvent) => {
    if (isDragging === index) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      handleServiceSliderChange(index, percentage)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(null)
  }

  const handleImageClick = (index: number, e: React.MouseEvent) => {
    if (!isDragging) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      handleServiceSliderChange(index, percentage)
    }
  }

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

      const handleGlobalMouseUp = () => {
        setIsHeroDragging(false)
      }

      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove)
        document.removeEventListener('mouseup', handleGlobalMouseUp)
      }
    }
  }, [isHeroDragging])

  useEffect(() => {
    if (isDragging !== null) {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        const sliderContainer = document.querySelector(`[data-slider-index="${isDragging}"]`)
        if (sliderContainer) {
          const rect = sliderContainer.getBoundingClientRect()
          const x = e.clientX - rect.left
          const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
          setServiceSliders(prev => ({ ...prev, [isDragging]: percentage }))
        }
      }

      const handleGlobalMouseUp = () => {
        setIsDragging(null)
      }

      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove)
        document.removeEventListener('mouseup', handleGlobalMouseUp)
      }
    }
  }, [isDragging])

  // Hero Section Features - All Services
  const heroFeatures = [
    {
      id: 'sky-replacement',
      name: 'Sky Replacement',
      icon: '🌅',
      description: 'Replace dull skies with vibrant blue or golden-hour sunsets.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80',
    },
    {
      id: 'day-to-dusk',
      name: 'Day to Dusk',
      icon: '🌆',
      description: 'Convert daytime photos to stunning twilight scenes.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
    },
    {
      id: 'virtual-staging',
      name: 'Virtual Staging',
      icon: '🛋️',
      description: 'Add virtual furniture to empty spaces.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
    },
    {
      id: 'perspective-correction',
      name: 'Perspective Correction',
      icon: '📐',
      description: 'Fix angles and distortion automatically.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80',
    },
    {
      id: 'declutter',
      name: 'Declutter',
      icon: '🧹',
      description: 'Remove unwanted objects seamlessly.',
      image: 'https://images.unsplash.com/photo-1560448075-cbc16bb4af98?w=400&q=80',
    },
    {
      id: '4k-upscale',
      name: '4K Upscale',
      icon: '📈',
      description: 'Increase resolution to 4K quality.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80',
    },
    {
      id: 'green-grass',
      name: 'Green the Grass',
      icon: '🌱',
      description: 'Enhance lawn appearance naturally.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
    },
    {
      id: 'facade-upgrade',
      name: 'Facade Upgrade',
      icon: '🏠',
      description: 'Improve exterior appearance.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
    },
  ]

  const getImageFilter = (featureId: string | null) => {
    switch (featureId) {
      case 'sky-replacement':
        return {
          before: 'grayscale(30%) brightness(0.85) contrast(0.9)',
          after: 'brightness(1.15) saturate(1.3) contrast(1.15)',
          overlay: 'bg-gradient-to-br from-blue-400/30 via-cyan-300/20 to-blue-600/25',
        }
      case 'day-to-dusk':
        return {
          before: 'grayscale(30%) brightness(0.85) contrast(0.9)',
          after: 'brightness(0.7) saturate(1.2) contrast(1.1)',
          overlay: 'bg-gradient-to-br from-orange-900/40 via-purple-900/30 to-blue-900/40',
        }
      case 'virtual-staging':
        return {
          before: 'grayscale(30%) brightness(0.85) contrast(0.9)',
          after: 'brightness(1.15) saturate(1.25) contrast(1.15)',
          overlay: 'bg-gradient-to-br from-yellow-200/20 via-orange-200/15 to-transparent',
        }
      case 'perspective-correction':
        return {
          before: 'grayscale(20%) brightness(0.85) contrast(0.9) skew(2deg)',
          after: 'brightness(1.1) saturate(1.15) contrast(1.1)',
          overlay: 'bg-gradient-to-br from-purple-200/15 via-pink-200/10 to-transparent',
        }
      case 'declutter':
        return {
          before: 'grayscale(30%) brightness(0.85) contrast(0.9)',
          after: 'brightness(1.1) saturate(1.15) contrast(1.1)',
          overlay: 'bg-gradient-to-br from-green-200/15 via-blue-200/10 to-transparent',
        }
      case '4k-upscale':
        return {
          before: 'blur(1px) brightness(0.85) contrast(0.9)',
          after: 'brightness(1.15) saturate(1.2) contrast(1.15)',
          overlay: 'bg-gradient-to-br from-indigo-200/20 via-purple-200/15 to-transparent',
        }
      case 'green-grass':
        return {
          before: 'grayscale(30%) brightness(0.85) contrast(0.9)',
          after: 'brightness(1.1) saturate(1.4) contrast(1.1)',
          overlay: 'bg-gradient-to-br from-green-400/25 via-lime-300/15 to-emerald-500/20',
        }
      case 'facade-upgrade':
        return {
          before: 'grayscale(30%) brightness(0.85) contrast(0.9)',
          after: 'brightness(1.2) saturate(1.2) contrast(1.15)',
          overlay: 'bg-gradient-to-br from-amber-200/20 via-yellow-200/15 to-transparent',
        }
      default:
        return {
          before: 'grayscale(30%) brightness(0.85) contrast(0.9)',
          after: 'brightness(1.1) saturate(1.15) contrast(1.1)',
          overlay: 'bg-gradient-to-br from-yellow-200/20 via-orange-200/15 to-transparent',
        }
    }
  }

  const imageFilter = getImageFilter(selectedFeature)

  // Gallery Slides
  const slides = [
    {
      property: 'Modern Condo',
      enhancement: 'Sky + Virtual Staging',
      location: 'Austin, TX',
      quote: 'Sold 3 days faster',
      image: '/images/carousel/condo.png',
    },
    {
      property: 'Luxury Home',
      enhancement: 'Day to Dusk',
      location: 'Los Angeles, CA',
      quote: 'Increased inquiries by 40%',
      image: '/images/carousel/luxury-home.png',
    },
    {
      property: 'Townhouse',
      enhancement: 'Sky Replacement',
      location: 'New York, NY',
      quote: 'Best investment we made',
      image: '/images/carousel/townhouse.png',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  // Features Data
  const features = [
    {
      title: 'Sky Replacement',
      description: 'Replace dull skies with vibrant blue or golden-hour sunsets. AI detects and seamlessly blends.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
      large: true,
    },
    {
      title: 'Day to Dusk',
      description: 'Convert daytime photos to stunning twilight scenes.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      large: true,
    },
    {
      title: 'Virtual Staging',
      description: 'Add virtual furniture to empty spaces.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      large: true,
    },
    {
      title: 'Perspective Correction',
      description: 'Fix angles and distortion.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
      large: false,
    },
    {
      title: 'Declutter',
      description: 'Remove unwanted objects.',
      image: 'https://images.unsplash.com/photo-1560448075-cbc16bb4af98?w=600&q=80',
      large: false,
    },
    {
      title: '4K Upscale',
      description: 'Increase resolution.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
      large: false,
    },
    {
      title: 'Green the Grass',
      description: 'Enhance lawn appearance.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      large: false,
    },
    {
      title: 'Facade Upgrade',
      description: 'Improve exterior look.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      large: false,
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Upload Your Photo',
      description: 'Drag and drop or click. JPG, PNG, WebP supported. Up to 50MB.',
      time: '~10 seconds',
      icon: '📤',
    },
    {
      number: 2,
      title: 'Enhance',
      description: 'AI processes your image with advanced algorithms.',
      time: '~2 minutes',
      icon: '✨',
    },
    {
      number: 3,
      title: 'Download',
      description: 'Get your enhanced photo in high resolution.',
      time: '~5 seconds',
      icon: '⬇️',
    },
  ]

  const stats = [
    { number: '50,000+', label: 'Photos Enhanced', icon: '📸' },
    { number: '4.9/5.0★', label: 'Average Rating', icon: '⭐' },
    { number: '2min', label: 'Avg. Processing Time', icon: '⏱️' },
    { number: '98%', label: 'Customer Satisfaction', icon: '😊' },
  ]

  const testimonials = [
    {
      quote: 'Saved $300 per listing on photography. The quality is incredible and turnaround is instant.',
      name: 'Sarah Chen',
      title: 'Real Estate Agent, Keller Williams',
      rating: 5,
    },
    {
      quote: 'Tenants inquire 3x more on enhanced listings. This tool pays for itself.',
      name: 'Michael Rodriguez',
      title: 'Property Manager',
      rating: 5,
    },
    {
      quote: 'Sold pre-construction units 40% faster. The virtual staging feature is a game-changer.',
      name: 'Emily Johnson',
      title: 'Developer',
      rating: 5,
    },
  ]

  const pricingPlans = [
    {
      title: 'Free Trial',
      price: '$0',
      credits: '5 free credits',
      badge: 'START HERE',
      badgeColor: 'bg-success',
      features: [
        { text: 'All enhancement tools', included: true },
        { text: 'Watermarked downloads', included: true },
        { text: '2K resolution', included: true },
        { text: 'Email support', included: true },
      ],
      cta: 'Start Free',
      ctaVariant: 'secondary' as const,
      footer: 'No credit card required',
    },
    {
      title: 'Credit Packs',
      price: 'From $0.69/image',
      credits: '20, 50, 100, 200 credits',
      badge: 'MOST POPULAR',
      badgeColor: 'bg-highlight',
      features: [
        { text: 'No watermarks', included: true },
        { text: '4K resolution', included: true },
        { text: 'Priority processing', included: true },
        { text: '1-year validity', included: true },
      ],
      cta: 'Buy Credits',
      ctaVariant: 'primary' as const,
      highlighted: true,
    },
    {
      title: 'Unlimited Pro',
      price: '$599/month',
      credits: 'Unlimited edits',
      badge: 'BEST VALUE',
      badgeColor: 'bg-highlight',
      features: [
        { text: 'Unlimited everything', included: true },
        { text: 'API access', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Dedicated support', included: true },
      ],
      cta: 'Go Unlimited',
      ctaVariant: 'primary' as const,
      dark: true,
    },
  ]

  const trustElements = [
    {
      icon: '⏱️',
      title: 'Fast Processing',
      description: '2-minute average enhancement time',
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Bank-level encryption. Images deleted after 24h',
    },
    {
      icon: '🔓',
      title: 'No Lock-In',
      description: 'No subscriptions required. Use when you need',
    },
    {
      icon: '🎧',
      title: 'Real Support',
      description: 'Human support team. Not bots. 12hr response time',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <span className="text-2xl font-display font-extrabold bg-gradient-sky bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
                  Enhancia
                </span>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-sky scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link href="/#features" className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-cyan-bright rounded-lg hover:bg-gray-50 transition-all">
                Features
              </Link>
              <Link href="/pricing" className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-cyan-bright rounded-lg hover:bg-gray-50 transition-all">
                Pricing
              </Link>
              <Link href="/knowledge-base" className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-cyan-bright rounded-lg hover:bg-gray-50 transition-all">
                Knowledge Base
              </Link>
              <Link href="/about" className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-cyan-bright rounded-lg hover:bg-gray-50 transition-all">
                About
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link href="/login">
                <button className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-cyan-bright rounded-lg hover:bg-gray-50 transition-all">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-5 py-2 text-sm font-bold bg-gradient-sky text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  Get Started Free
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`block h-0.5 w-6 bg-gray-700 rounded-full transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-700 rounded-full transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-700 rounded-full transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link href="/#features" className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-cyan-bright hover:bg-gray-50 rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="/pricing" className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-cyan-bright hover:bg-gray-50 rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/knowledge-base" className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-cyan-bright hover:bg-gray-50 rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                Knowledge Base
              </Link>
              <Link href="/about" className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-cyan-bright hover:bg-gray-50 rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <div className="pt-4 space-y-2 border-t border-gray-100">
                <Link href="/login" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-3 text-base font-semibold text-gray-700 hover:text-cyan-bright hover:bg-gray-50 rounded-lg transition-all text-left">
                    Login
                  </button>
                </Link>
                <Link href="/signup" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-3 text-base font-bold bg-gradient-sky text-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                    Get Started Free
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 bg-white overflow-hidden">
        {/* Split Screen Design */}
        <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)] max-h-[700px]">
          
          {/* Left - Content Side */}
          <div className="lg:w-1/2 bg-gradient-sky relative flex items-center justify-center p-6 lg:p-8">
            {/* Subtle Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-5">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-white tracking-wide">AI-POWERED ENHANCEMENT</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-display font-black text-white mb-4 leading-[1.1]">
                Turn Photos Into
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                  Sales Machines
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base lg:text-lg text-white/90 mb-6 leading-relaxed">
                Professional AI enhancement in minutes. No photographers needed. No complexity. Just results.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button className="group px-6 py-3 bg-white text-teal-deep font-black text-base rounded-xl shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all">
                  <span className="flex items-center justify-center gap-2">
                    Get 5 Free Credits
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="px-6 py-3 bg-white/10 backdrop-blur-xl text-white font-bold text-base rounded-xl border-2 border-white/40 hover:bg-white/20 transition-all">
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                    Watch Demo
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-white">
                <div>
                  <div className="text-2xl font-black">50K+</div>
                  <div className="text-xs opacity-80">Users</div>
                </div>
                <div className="w-px h-10 bg-white/30"></div>
                <div>
                  <div className="text-2xl font-black">4.9★</div>
                  <div className="text-xs opacity-80">Rating</div>
                </div>
                <div className="w-px h-10 bg-white/30"></div>
                <div>
                  <div className="text-2xl font-black">&lt;2min</div>
                  <div className="text-xs opacity-80">Fast</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual Side */}
          <div className="lg:w-1/2 bg-gray-50 relative flex items-center justify-center p-6 lg:p-8">
            <div className="w-full max-w-2xl">
              {/* Main Slider */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                <div 
                  className="relative w-full h-[320px] lg:h-[380px] bg-navy-dark rounded-xl overflow-hidden cursor-ew-resize"
                  data-hero-slider
                  onMouseMove={handleHeroMouseMove}
                  onMouseUp={handleHeroMouseUp}
                  onClick={handleHeroImageClick}
                >
                  {/* Before */}
                  <div 
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80"
                      alt="Before"
                      fill
                      className="object-cover"
                      style={{ filter: imageFilter.before }}
                      priority
                    />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-xl">
                      <span className="text-white font-bold">BEFORE</span>
                    </div>
                  </div>
                  
                  {/* After */}
                  <div 
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80"
                      alt="After"
                      fill
                      className="object-cover"
                      style={{ filter: imageFilter.after }}
                      priority
                    />
                    <div className={`absolute inset-0 ${imageFilter.overlay} mix-blend-overlay`}></div>
                    <div className="absolute top-6 right-6 px-4 py-2 bg-white rounded-xl shadow-xl">
                      <span className="text-teal-deep font-bold">
                        {selectedFeature ? heroFeatures.find(f => f.id === selectedFeature)?.name.toUpperCase() : 'AFTER'}
                      </span>
                    </div>
                  </div>

                  {/* Slider Handle */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
                    style={{ left: `${sliderPosition}%` }}
                    onMouseDown={handleHeroMouseDown}
                  >
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-grab active:cursor-grabbing ${isHeroDragging ? 'scale-110' : ''}`}>
                      <svg className="w-6 h-6 text-teal-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Selector */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {heroFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setSelectedFeature(selectedFeature === feature.id ? null : feature.id)}
                    className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                      selectedFeature === feature.id
                        ? 'bg-gradient-sky text-white shadow-xl scale-110'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-cyan-bright hover:scale-105'
                    }`}
                  >
                    {feature.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:block absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-1.5 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-base font-bold text-teal-deep uppercase tracking-wider mb-4 block">
              THE REALITY OF PROPERTY MARKETING
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-navy-dark mb-6 leading-tight">
              Blurry photos kill listings. Dark rooms scare buyers.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-white rounded-xl border border-gray-soft shadow-sm hover:-translate-y-1 hover:shadow-cyan-xl hover:border-cyan-bright transition-all p-6 md:p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-soft rounded-2xl flex items-center justify-center relative overflow-hidden">
                <svg className="w-10 h-10 text-navy-dark relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-black mb-4 text-navy-dark">The Problem</h3>
              <p className="text-gray-medium mb-4">
                82% of buyers skip listings with poor photos
              </p>
              <div className="h-24 bg-gray-soft rounded-lg flex items-end justify-center p-4">
                <div className="w-full bg-navy-dark/20 h-8 rounded"></div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-soft shadow-sm hover:-translate-y-1 hover:shadow-cyan-xl hover:border-cyan-bright transition-all p-6 md:p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-cyan-bright/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <svg className="w-10 h-10 text-teal-deep relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-black mb-4 text-navy-dark">The Old Solution</h3>
              <p className="text-gray-medium mb-4">
                Professional photographers: $200-500 + 2-day wait
              </p>
              <div className="text-2xl font-bold text-teal-deep">Average cost & turnaround</div>
            </div>

            <div className="bg-white rounded-xl border-2 border-cyan-bright shadow-lg hover:-translate-y-1 hover:shadow-cyan-xl transition-all p-6 md:p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-cyan-bright/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <svg className="w-10 h-10 text-cyan-medium relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-black mb-4 text-navy-dark">The Enhancia Way</h3>
              <p className="text-gray-medium mb-4">
                AI enhancement: $0.69 per image, 2 minutes
              </p>
              <div className="text-2xl font-bold bg-gradient-sky bg-clip-text text-transparent">96% cost reduction</div>
            </div>
          </div>

          <div className="text-center">
            <div className="w-24 h-1 bg-gradient-sky mx-auto mb-8 rounded-full"></div>
            <h3 className="text-3xl md:text-4xl font-display font-black text-navy-dark">
              Upload once. Download perfection.
            </h3>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section id="services-section" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-sky rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-sky rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-sky/10 backdrop-blur-sm rounded-full border border-cyan-bright/20 mb-6">
              <svg className="w-4 h-4 text-cyan-bright" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-bold text-teal-deep uppercase tracking-wider">OUR SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-navy-dark mb-6 leading-tight">
              Transform Your Property Photos
            </h2>
            <p className="text-lg md:text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
              Professional AI-powered tools that make your listings stand out and sell faster
            </p>
          </div>

          {/* Services Grid - 2 Columns with Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {(showAllServices ? features : features.slice(0, 4)).map((feature, index) => {
              const sliderPosition = serviceSliders[index] || 50
              return (
                <div
                  key={feature.title}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-cyan-bright">
                    {/* Before/After Slider Container */}
                    <div 
                      className="relative h-[300px] md:h-[350px] bg-gray-900 overflow-hidden cursor-ew-resize"
                      data-slider-index={index}
                      onMouseMove={(e) => handleMouseMove(index, e)}
                      onMouseUp={handleMouseUp}
                      onClick={(e) => handleImageClick(index, e)}
                    >
                      {/* Before Image */}
                      <div 
                        className="absolute inset-0 transition-all duration-300"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                      >
                        <Image
                          src={feature.image}
                          alt={`${feature.title} - Before`}
                          fill
                          className="object-cover"
                          style={{ filter: 'grayscale(20%) brightness(0.85) contrast(0.9)' }}
                        />
                      </div>
                      
                      {/* After Image */}
                      <div 
                        className="absolute inset-0 transition-all duration-300"
                        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                      >
                        <Image
                          src={feature.image}
                          alt={`${feature.title} - After`}
                          fill
                          className="object-cover"
                          style={{ filter: 'brightness(1.15) saturate(1.2) contrast(1.1)' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/20 via-transparent to-transparent mix-blend-overlay"></div>
                      </div>

                      {/* Slider Handle */}
                      <div 
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
                        style={{ left: `${sliderPosition}%` }}
                        onMouseDown={(e) => handleMouseDown(index, e)}
                      >
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform cursor-grab active:cursor-grabbing border-3 border-gray-200 ${isDragging === index ? 'scale-110' : ''}`}>
                          <div className="flex space-x-0.5">
                            <svg className="w-4 h-4 text-teal-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                            </svg>
                            <svg className="w-4 h-4 text-teal-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-display font-black text-navy-dark mb-3 group-hover:text-teal-deep transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-medium mb-5 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Action Button */}
                      <button className="w-full px-5 py-3 bg-gradient-sky text-white font-bold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                        <span>Try {feature.title}</span>
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            {!showAllServices && (
              <>
                <p className="text-gray-medium mb-6">Can't decide? Try them all with our free trial</p>
                <button 
                  onClick={() => setShowAllServices(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-deep font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all border-2 border-gray-200 hover:border-cyan-bright"
                >
                  <span>View All Features</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </>
            )}
            {showAllServices && (
              <button 
                onClick={() => {
                  setShowAllServices(false)
                  setTimeout(() => {
                    const servicesSection = document.getElementById('services-section')
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }, 100)
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-sky text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                <span>Show Less</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 md:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-sky rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-sky rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-navy-dark mb-6 leading-tight">
              Three Steps. Zero Learning Curve.
            </h2>
            <p className="text-xl text-gray-medium max-w-2xl mx-auto">
              Get professional results in minutes, not days
            </p>
          </div>

          {/* Horizontal Timeline Layout */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-sky"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-16 h-16 bg-gradient-sky rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                      <span className="text-2xl font-black text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-2xl p-8 pt-12 border-2 border-gray-soft hover:border-cyan-bright transition-all hover:shadow-2xl">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                        {step.number === 1 && (
                          <svg className="w-12 h-12 text-cyan-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        )}
                        {step.number === 2 && (
                          <svg className="w-12 h-12 text-cyan-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        )}
                        {step.number === 3 && (
                          <svg className="w-12 h-12 text-cyan-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-display font-black text-navy-dark mb-3 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-medium mb-6 text-center leading-relaxed">
                      {step.description}
                    </p>

                    {/* Time Badge */}
                    <div className="flex justify-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-sky rounded-full text-white text-sm font-bold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {step.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="bg-black h-[600px] md:h-[800px] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 leading-tight">
            Real Results. Real Properties.
          </h2>
          <p className="text-white/90 text-lg md:text-xl">
            Swipe through actual enhancements from Enhancia users
          </p>
        </div>

        <div className="relative h-full flex items-center justify-center">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide
            const isPrev = index === (currentSlide - 1 + slides.length) % slides.length
            const isNext = index === (currentSlide + 1) % slides.length

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  isActive
                    ? 'opacity-100 scale-100 z-10'
                    : isPrev || isNext
                    ? 'opacity-70 scale-90 z-0'
                    : 'opacity-0 scale-90 z-0'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={slide.image}
                      alt={slide.property}
                      fill
                      className="object-cover"
                      priority={isActive}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                </div>

                {isActive && (
                  <div className="absolute bottom-12 left-12 bg-white/95 backdrop-blur-sm p-6 rounded-lg max-w-sm shadow-xl">
                    <div className="text-sm text-gray-medium mb-2">Property Type</div>
                    <div className="text-xl font-bold text-navy-dark mb-4">{slide.property}</div>
                    <div className="text-sm text-gray-medium mb-2">Enhancement</div>
                    <div className="text-lg font-semibold text-teal-deep mb-4">{slide.enhancement}</div>
                    <div className="text-sm text-gray-medium mb-2">Location</div>
                    <div className="text-lg font-semibold text-navy-dark mb-4">{slide.location}</div>
                    <div className="text-sm italic text-cyan-bright">"{slide.quote}"</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
        >
          →
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-cyan-bright w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="bg-gradient-sky rounded-2xl p-12 mb-16 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl md:text-6xl font-display font-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center mb-12">
            <span className="text-base font-bold text-teal-deep uppercase tracking-wider mb-4 block">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-dark">
              Loved by Real Estate Professionals
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-soft hover:border-cyan-bright shadow-sm hover:shadow-xl transition-all p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-cyan-bright text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-navy-dark mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-sky rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-navy-dark">{testimonial.name}</div>
                    <div className="text-sm text-gray-medium">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-base font-bold text-teal-deep uppercase tracking-wider mb-4 block">
              SIMPLE, TRANSPARENT PRICING
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-dark mb-4">
              Pay Only For What You Use
            </h2>
            <p className="text-xl text-gray-medium">
              Start free. Scale as you grow. No subscriptions required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.title}
                className={`relative bg-white rounded-2xl p-8 transition-all hover:-translate-y-2 ${
                  plan.highlighted
                    ? 'border-4 border-cyan-bright shadow-2xl scale-105'
                    : plan.dark
                    ? 'bg-gradient-sky text-white shadow-xl'
                    : 'border-2 border-gray-soft shadow-lg hover:shadow-xl hover:border-cyan-bright'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 right-4 px-5 py-2 bg-gradient-sky rounded-full text-xs font-bold text-white shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-display font-bold mb-2">{plan.title}</h3>
                  <div className="text-4xl font-display font-bold mb-2">{plan.price}</div>
                  <div className="text-sm text-gray-medium">{plan.credits}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">{feature.included ? '✓' : '✗'}</span>
                      <span className={plan.dark ? 'text-white/90' : 'text-gray-medium'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full px-8 py-4 text-base font-bold rounded-xl transition-all hover:scale-105 ${
                    plan.ctaVariant === 'primary'
                      ? 'bg-gradient-sky text-white shadow-xl hover:shadow-2xl'
                      : 'bg-transparent border-2 border-teal-deep text-teal-deep hover:bg-teal-deep hover:text-white'
                  } ${plan.dark ? 'bg-white text-teal-deep hover:bg-gray-50' : ''}`}
                >
                  {plan.cta}
                </button>

                {plan.footer && (
                  <p className="text-center text-sm text-gray-medium mt-4">{plan.footer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustElements.map((element, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="mb-6 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl">{element.icon}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-black text-navy-dark mb-3">
                  {element.title}
                </h3>
                <p className="text-gray-medium text-base leading-relaxed">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-sky py-24 md:py-32 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-8">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-semibold text-white">Start Your Free Trial Today</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-display font-black mb-6 leading-tight">
            Ready to Transform Your Property Listings?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of real estate professionals who are already creating stunning photos with Enhancia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="group px-10 py-4 text-lg font-bold bg-white text-teal-deep rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all">
              <span className="flex items-center justify-center gap-2">
                Start Free Trial
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="px-10 py-4 text-lg font-bold bg-white/10 backdrop-blur-md text-white rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all">
              View Pricing
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              5 Free Credits
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cancel Anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-display font-bold mb-4 bg-gradient-sky bg-clip-text text-transparent">
                Enhancia
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                AI-Powered Property Photo Enhancement
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-bright transition-colors">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-bright transition-colors">
                  <span className="text-sm">t</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-bright transition-colors">
                  <span className="text-sm">ig</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-bright transition-colors">
                  <span className="text-sm">f</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/#features" className="hover:text-cyan-bright transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-cyan-bright transition-colors">Pricing</Link></li>
                <li><Link href="/knowledge-base" className="hover:text-cyan-bright transition-colors">Knowledge Base</Link></li>
                <li><Link href="/api-docs" className="hover:text-cyan-bright transition-colors">API Docs</Link></li>
                <li><Link href="/changelog" className="hover:text-cyan-bright transition-colors">Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-cyan-bright transition-colors">About Us</Link></li>
                <li><Link href="/mission" className="hover:text-cyan-bright transition-colors">Our Mission</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-bright transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-cyan-bright transition-colors">Careers</Link></li>
                <li><Link href="/press" className="hover:text-cyan-bright transition-colors">Press Kit</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/privacy" className="hover:text-cyan-bright transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-cyan-bright transition-colors">Terms of Service</Link></li>
                <li><Link href="/refund" className="hover:text-cyan-bright transition-colors">Refund Policy</Link></li>
                <li><Link href="/content-policy" className="hover:text-cyan-bright transition-colors">Content Policy</Link></li>
                <li><Link href="/cookies" className="hover:text-cyan-bright transition-colors">Cookie Settings</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 Enhancia. All rights reserved.</p>
            <p>Made with ❤️ for real estate professionals</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
