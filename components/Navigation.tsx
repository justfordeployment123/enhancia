'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from './Button'
import { useAuth } from '@/contexts/AuthContext'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <nav className="sticky top-0 z-[1000] h-20 bg-cream-warm/80 backdrop-blur-xl border-b border-cyan-bright/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center h-12 hover:drop-shadow-[0_0_8px_rgba(45,212,222,0.5)] transition-all">
          <span className="text-2xl font-display font-bold bg-gradient-sky bg-clip-text text-transparent">
            Enhancia
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#features" className="text-sm font-semibold text-navy-dark hover:text-teal-deep transition-colors relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-bright group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/pricing" className="text-sm font-semibold text-navy-dark hover:text-teal-deep transition-colors relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-bright group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/knowledge-base" className="text-sm font-semibold text-navy-dark hover:text-teal-deep transition-colors relative group">
            Knowledge Base
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-bright group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="text-sm font-semibold text-navy-dark hover:text-teal-deep transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-bright group-hover:w-full transition-all duration-300"></span>
          </Link>
          {isAuthenticated && (
            <Link href="/dashboard" className="text-sm font-semibold text-navy-dark hover:text-teal-deep transition-colors relative group">
              Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-bright group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-3 px-4 py-2 bg-gradient-sky/10 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-gradient-sky flex items-center justify-center text-white font-bold text-sm">
                  {user?.name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-navy-dark">{user?.name}</div>
                  <div className="text-xs text-gray-medium">{user?.credits} credits</div>
                </div>
              </div>
              <button onClick={logout} className="text-sm font-semibold text-gray-700 hover:text-teal-deep">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="md">Login</Button>
              </Link>
              <Link href="/signup">
                <Button variant="primary" size="md">Try Free</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
            <span className={`block h-0.5 w-6 bg-navy-dark transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-navy-dark transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-navy-dark transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[999] pt-20 animate-fade-in">
          <div className="flex flex-col space-y-4 px-6">
            <Link href="/#features" className="h-15 py-4 text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </Link>
            <Link href="/pricing" className="h-15 py-4 text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/knowledge-base" className="h-15 py-4 text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
              Knowledge Base
            </Link>
            <Link href="/about" className="h-15 py-4 text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            {isAuthenticated && (
              <Link href="/dashboard" className="h-15 py-4 text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                Dashboard
              </Link>
            )}
            <div className="pt-4 space-y-3">
              {isAuthenticated ? (
                <>
                  <div className="p-4 bg-gradient-sky/10 rounded-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-sky flex items-center justify-center text-white font-bold">
                      {user?.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-dark">{user?.name}</div>
                      <div className="text-xs text-gray-medium">{user?.credits} credits</div>
                    </div>
                  </div>
                  <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="w-full py-3 text-center font-semibold text-gray-700 hover:text-teal-deep bg-gray-100 rounded-lg">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="block">
                    <Button variant="ghost" size="md" className="w-full">Login</Button>
                  </Link>
                  <Link href="/signup" className="block">
                    <Button variant="primary" size="md" className="w-full">Try Free</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

