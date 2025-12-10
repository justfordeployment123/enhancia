'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useAuth } from '@/contexts/AuthContext'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await login(email, password)
      router.push('/dashboard')
    } catch (err) {
      setError('Invalid credentials')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="grid md:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left Panel */}
        <div className="bg-gradient-sky p-12 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-md text-white">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Welcome Back
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Continue enhancing your property photos with AI-powered tools trusted by 50,000+ professionals.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-white p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-3xl md:text-4xl font-display font-black mb-8 text-navy-dark">Log In to Your Account</h1>

            {/* Social Login */}
            <div className="space-y-3 mb-6">
              <button className="w-full h-12 border-2 border-gray-soft rounded-xl flex items-center justify-center hover:border-cyan-bright hover:bg-cyan-bright/5 transition-all font-semibold">
                <span className="mr-2">G</span>
                Continue with Google
              </button>
              <button className="w-full h-12 border-2 border-gray-soft rounded-xl flex items-center justify-center hover:border-cyan-bright hover:bg-cyan-bright/5 transition-all font-semibold">
                <span className="mr-2">f</span>
                Continue with Facebook
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-soft"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-medium">Or log in with email</span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-semibold text-navy-dark mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-soft rounded-xl focus:outline-none focus:border-cyan-bright transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-navy-dark mb-2">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-soft rounded-xl focus:outline-none focus:border-cyan-bright transition-colors"
                  placeholder="Enter your password"
                />
                <div className="text-right mt-2">
                  <a href="/forgot-password" className="text-sm text-cyan-bright hover:text-teal-deep">
                    Forgot password?
                  </a>
                </div>
              </div>

              <label className="flex items-center">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span className="text-sm text-gray-medium">Remember me</span>
              </label>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-gradient-sky text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </button>
            </form>

            <p className="text-center text-sm text-gray-medium mt-6">
              Don't have an account? <a href="/signup" className="text-cyan-bright font-semibold">Sign up</a>
            </p>

            <p className="text-center text-xs text-gray-medium mt-4">
              Your data is encrypted and secure
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

