'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    updateSliderPosition(e)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      updateSliderPosition(e)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const updateSliderPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(90, Math.max(10, x)))
  }

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Minimal Background Accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center px-6 lg:px-12 py-12 lg:py-0">
        {/* Left Content - Clean & Focused */}
        <div className="flex-1 max-w-xl lg:max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Transform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Property Photos
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-md">
            AI-powered enhancements in seconds. Make every listing exceptional.
          </p>

          <button className="group relative px-8 py-4 bg-cyan-500 text-slate-900 font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.5)]">
            <span className="relative z-10">Start Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Minimal Stats */}
          <div className="flex gap-8 mt-12 pt-12 border-t border-gray-800">
            <div>
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-sm text-gray-500">Enhanced</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">30s</div>
              <div className="text-sm text-gray-500">Processing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">4.9★</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
          </div>
        </div>

        {/* Right Visual - Clean Comparison */}
        <div className="flex-1 flex items-center justify-center mt-12 lg:mt-0">
          <div className="w-full max-w-md lg:max-w-lg">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] cursor-ew-resize select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative aspect-[4/3]">
                {/* Before */}
                <div className="absolute inset-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80" 
                    alt="Original" 
                    fill 
                    className="object-cover" 
                    style={{ filter: 'brightness(0.7) saturate(0.6)' }}
                    priority 
                  />
                </div>

                {/* After */}
                <div 
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image 
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80" 
                    alt="Enhanced" 
                    fill 
                    className="object-cover" 
                    style={{ filter: 'brightness(1.1) saturate(1.3) contrast(1.05)' }}
                    priority 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-blue-500/10 mix-blend-overlay" />
                </div>

                {/* Slider Line */}
                <div 
                  className="absolute top-0 bottom-0 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-0 bottom-0 w-px bg-white/80 -translate-x-1/2" />
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center">
                    <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.5 10L3 6.5 6.5 3M13.5 3L17 6.5 13.5 10" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded text-xs font-medium text-white/70">
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded text-xs font-medium text-cyan-400">
                  AFTER
                </div>
              </div>
            </div>

            {/* Drag Hint */}
            <p className="text-center text-gray-500 text-sm mt-4">
              ← Drag to compare →
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}