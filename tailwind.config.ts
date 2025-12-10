import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'cyan-bright': '#2DD4DE',
        'cyan-medium': '#1AAFBD',
        'teal-deep': '#0D7A8C',
        'navy-dark': '#2D3E50',
        
        // Secondary Colors
        'cream-warm': '#F8F6F3',
        'gray-soft': '#E8E6E3',
        'gray-medium': '#9CA3AF',
        'white-pure': '#FFFFFF',
        
        // Accent Colors
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
        'highlight': '#FFD700',
      },
      fontFamily: {
        display: ['var(--font-clash-display)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        'mega': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero': ['56px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h1': ['48px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h2': ['36px', { lineHeight: '1.3', letterSpacing: '0em' }],
        'h3': ['28px', { lineHeight: '1.4', letterSpacing: '0em' }],
        'h4': ['20px', { lineHeight: '1.4', letterSpacing: '0em' }],
        'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '0em' }],
        'body': ['16px', { lineHeight: '1.6', letterSpacing: '0em' }],
        'small': ['14px', { lineHeight: '1.5', letterSpacing: '0em' }],
        'tiny': ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '36': '9rem',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
      },
      backgroundImage: {
        'gradient-sky': 'linear-gradient(135deg, #2DD4DE 0%, #0D7A8C 100%)',
        'gradient-dusk': 'linear-gradient(135deg, #1AAFBD 0%, #2D3E50 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(45,212,222,0.1) 0%, rgba(13,122,140,0.05) 100%)',
      },
      boxShadow: {
        'cyan': '0 4px 20px rgba(45, 212, 222, 0.25)',
        'cyan-lg': '0 8px 30px rgba(45, 212, 222, 0.35)',
        'cyan-xl': '0 12px 40px rgba(13, 122, 140, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 350ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config

