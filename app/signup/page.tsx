'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function SignUpPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate signup then login
    await new Promise(resolve => setTimeout(resolve, 1000))
    await login(email, password)
    router.push('/dashboard')
  }

  const passwordChecks = [
    { label: 'At least 8 characters', valid: password.length >= 8 },
    { label: 'One uppercase letter', valid: /[A-Z]/.test(password) },
    { label: 'One number', valid: /[0-9]/.test(password) },
    { label: 'One special character', valid: /[!@#$%^&*]/.test(password) },
  ]

  return (
    <main className="min-h-screen bg-void relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyber-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      {/* Header */}
      <header className="relative z-20 px-6 lg:px-8 py-6">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="text-xl font-display font-bold text-white group-hover:text-accent-400 transition-colors">
            Enhancia
          </span>
        </Link>
      </header>

      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl w-full items-center">
          {/* Left - Benefits */}
          <div className="hidden lg:block animate-fade-in-up">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent-400">Start Free Today</span>
              </div>
              <h2 className="text-4xl font-display font-bold text-white mb-4">
                Join 50,000+ Real Estate Professionals
              </h2>
              <p className="text-xl text-text-secondary">
                Transform your property photos with AI-powered enhancement tools.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: '🎁', title: '5 Free Credits', desc: 'Start enhancing immediately, no commitment' },
                { icon: '💳', title: 'No Credit Card Required', desc: 'Try everything before you buy' },
                { icon: '⚡', title: '2-Minute Setup', desc: 'Get started in less than 2 minutes' },
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 glass-card p-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-cyber-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-text-muted text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0 animate-fade-in-up animation-delay-100">
            <div className="glass-card p-8 md:p-10">
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-3xl font-display font-bold text-white mb-2">Create Account</h1>
                <p className="text-text-secondary">Start your free trial today</p>
              </div>

              {/* Social Signup */}
              <button className="w-full h-12 glass-card hover:bg-white/[0.08] border-white/[0.1] rounded-xl flex items-center justify-center gap-3 transition-all group mb-6">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" className="text-blue-400" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" className="text-green-400" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" className="text-yellow-400" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" className="text-red-400" />
                </svg>
                <span className="text-text-secondary group-hover:text-white transition-colors font-medium">Sign up with Google</span>
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-obsidian text-text-muted text-sm">or with email</span>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    placeholder="Create a strong password"
                  />
                  
                  {/* Password Strength */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {passwordChecks.map((check, i) => (
                      <div key={i} className={`flex items-center gap-2 text-xs ${check.valid ? 'text-success' : 'text-text-muted'}`}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {check.valid ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          ) : (
                            <circle cx="12" cy="12" r="8" strokeWidth={2} />
                          )}
                        </svg>
                        {check.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5">
                      <input type="checkbox" className="sr-only peer" required />
                      <div className="w-5 h-5 border-2 border-white/20 rounded-md peer-checked:bg-accent-500 peer-checked:border-accent-500 transition-all" />
                      <svg className="absolute top-1 left-1 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                      I agree to the <Link href="/terms" className="text-accent-400 hover:underline">Terms</Link> and <Link href="/privacy" className="text-accent-400 hover:underline">Privacy Policy</Link>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full text-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isLoading ? 'Creating account...' : 'Create Free Account'}</span>
                </button>
              </form>

              <p className="text-center text-text-muted mt-6">
                Already have an account?{' '}
                <Link href="/login" className="text-accent-400 font-semibold hover:text-accent-300 transition-colors">
                  Sign in
                </Link>
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mt-6 text-text-muted text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                SSL Secure
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                GDPR Compliant
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
