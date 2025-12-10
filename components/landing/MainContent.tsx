'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Card from '../Card'
import Button from '../Button'

export default function MainContent() {
  const [currentSlide, setCurrentSlide] = useState(0)

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
    <>
      {/* Problem/Solution Section */}
      <section className="bg-cream-warm py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-cyan-bright uppercase tracking-wider mb-4 block">
              THE REALITY OF PROPERTY MARKETING
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-dark mb-6">
              Blurry photos kill listings. Dark rooms scare buyers.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <Card hover className="p-6 md:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-error/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">📷❌</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-navy-dark">The Problem</h3>
              <p className="text-gray-medium mb-4">
                82% of buyers skip listings with poor photos
              </p>
              <div className="h-24 bg-gray-soft rounded flex items-end justify-center p-4">
                <div className="w-full bg-error/20 h-8 rounded"></div>
              </div>
            </Card>

            <Card hover className="p-6 md:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-warning/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">⏰💰</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-navy-dark">The Old Solution</h3>
              <p className="text-gray-medium mb-4">
                Professional photographers: $200-500 + 2-day wait
              </p>
              <div className="text-2xl font-bold text-warning">Average cost & turnaround</div>
            </Card>

            <Card hover className="p-6 md:p-8 text-center border-2 border-cyan-bright">
              <div className="w-16 h-16 mx-auto mb-6 bg-success/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">⚡🤖</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-navy-dark">The Enhancia Way</h3>
              <p className="text-gray-medium mb-4">
                AI enhancement: $0.69 per image, 2 minutes
              </p>
              <div className="text-2xl font-bold text-success">96% cost reduction</div>
            </Card>
          </div>

          <div className="text-center">
            <div className="w-24 h-0.5 bg-cyan-bright mx-auto mb-8"></div>
            <h3 className="text-3xl font-display font-bold text-navy-dark">
              Upload once. Download perfection.
            </h3>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                hover
                className={`overflow-hidden p-0 ${feature.large ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
              >
                <div className="flex flex-col h-full">
                  {/* Image */}
                  <div className={`relative ${feature.large ? 'h-64 md:h-80' : 'h-48'} w-full`}>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes={feature.large ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <p className="text-body-lg text-gray-medium mb-6 flex-grow">
                      {feature.description}
                    </p>
                    <button className="text-cyan-bright font-semibold hover:text-teal-deep transition-colors text-left">
                      Try This Feature →
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-overlay py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-navy-dark mb-16">
            Three Steps. Zero Learning Curve.
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 border-t-2 border-dashed border-cyan-bright"></div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full border-4 border-cyan-bright flex items-center justify-center shadow-lg relative z-10">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{step.icon}</div>
                      <div className="text-3xl font-display font-bold text-cyan-bright">{step.number}</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-display font-bold mb-4 text-navy-dark">
                      {step.title}
                    </h3>
                    <p className="text-gray-medium mb-4">
                      {step.description}
                    </p>
                    <div className="inline-block px-4 py-2 bg-cyan-bright/10 rounded-full text-sm font-semibold text-teal-deep">
                      {step.time}
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
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Real Results. Real Properties.
          </h2>
          <p className="text-white/80 text-lg">
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
                className={`absolute inset-0 transition-all duration-500 ${isActive
                  ? 'opacity-100 scale-100 z-10'
                  : isPrev || isNext
                    ? 'opacity-70 scale-90 z-0'
                    : 'opacity-0 scale-90 z-0'
                  }`}
              >
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="w-full max-w-4xl aspect-video relative rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={slide.image}
                      alt={slide.property}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:hidden">
                      <div className="text-2xl font-bold mb-2">{slide.property}</div>
                      <div className="text-lg opacity-80">{slide.location}</div>
                    </div>
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
              className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-cyan-bright w-8' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-cream-warm py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-lg md:text-xl font-display font-bold text-teal-deep mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover className="p-6 md:p-8 border-l-4 border-cyan-bright">
                <p className="text-body-lg italic text-navy-dark mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="h-px bg-gray-soft mb-6"></div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-sky rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-navy-dark">{testimonial.name}</div>
                    <div className="text-sm text-gray-medium">{testimonial.title}</div>
                    <div className="flex mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-highlight">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-cyan-bright uppercase tracking-wider mb-4 block">
              SIMPLE, TRANSPARENT PRICING
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-dark mb-4">
              Pay Only For What You Use. No Subscriptions Required.
            </h2>
            <p className="text-xl text-gray-medium">
              Start free. Scale as you grow. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={plan.title}
                className={`relative p-6 md:p-8 ${plan.highlighted
                  ? 'border-2 border-cyan-bright shadow-cyan-xl'
                  : plan.dark
                    ? 'bg-gradient-dusk text-white border-0'
                    : ''
                  }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-4 right-4 px-4 py-1 rounded-full text-xs font-bold text-navy-dark ${plan.badgeColor}`}
                  >
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

                <Button
                  variant={plan.ctaVariant}
                  size="md"
                  className={`w-full ${plan.dark ? 'bg-white text-navy-dark hover:bg-gray-100' : ''}`}
                >
                  {plan.cta}
                </Button>

                {plan.footer && (
                  <p className="text-center text-sm text-gray-medium mt-4">{plan.footer}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="bg-cream-warm py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustElements.map((element, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {element.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-navy-dark mb-2">
                  {element.title}
                </h3>
                <p className="text-gray-medium">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

