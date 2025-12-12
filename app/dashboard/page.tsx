'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'

export default function DashboardPage() {
  const router = useRouter()
  const { user, isAuthenticated, updateCredits, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  if (!isAuthenticated) {
    router.push('/login')
    return null
  }

  const services = [
    { id: 'sky', name: 'Sky Replacement', icon: '🌅', cost: 1 },
    { id: 'dusk', name: 'Day to Dusk', icon: '🌆', cost: 1 },
    { id: 'staging', name: 'Virtual Staging', icon: '🛋️', cost: 2 },
    { id: 'perspective', name: 'Perspective Fix', icon: '📐', cost: 1 },
    { id: 'declutter', name: 'Declutter', icon: '✨', cost: 1 },
    { id: 'upscale', name: '4K Upscale', icon: '📈', cost: 1 },
    { id: 'grass', name: 'Green Grass', icon: '🌱', cost: 1 },
    { id: 'facade', name: 'Facade Upgrade', icon: '🏠', cost: 2 },
  ]

  const recentImages = [
    { id: 1, name: 'property-001.jpg', service: 'Sky Replacement', date: '2 hours ago', status: 'completed' },
    { id: 2, name: 'house-front.jpg', service: 'Day to Dusk', date: '5 hours ago', status: 'completed' },
    { id: 3, name: 'living-room.jpg', service: 'Virtual Staging', date: '1 day ago', status: 'completed' },
    { id: 4, name: 'backyard.jpg', service: 'Green Grass', date: '2 days ago', status: 'completed' },
  ]

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleProcess = async () => {
    if (!uploadedFile || !selectedService) return
    setIsProcessing(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    const service = services.find(s => s.id === selectedService)
    if (service && user) updateCredits(user.credits - service.cost)
    setIsProcessing(false)
    setUploadedFile(null)
    setPreviewUrl(null)
    setSelectedService(null)
    alert('Image processed successfully!')
  }

  const sidebarItems = [
    { id: 'overview', icon: '📊', label: 'Overview' },
    { id: 'upload', icon: '📤', label: 'Upload & Enhance' },
    { id: 'images', icon: '🖼️', label: 'My Images' },
    { id: 'history', icon: '📋', label: 'History' },
    { id: 'billing', icon: '💳', label: 'Billing' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
  ]

  return (
    <main className="min-h-screen bg-void">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-obsidian/80 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="h-full px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <span className="text-lg font-display font-bold text-white">Enhancia</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 glass-card rounded-xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white font-bold text-sm">
                {user?.name.charAt(0)}
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-medium text-white">{user?.name}</div>
                <div className="text-xs text-text-muted">{user?.credits} credits</div>
              </div>
            </div>
            <button onClick={logout} className="text-text-muted hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 fixed left-0 top-16 bottom-0 bg-obsidian border-r border-white/[0.05] p-4">
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-accent-500/20 to-cyber-500/20 text-white border border-accent-500/30'
                    : 'text-text-secondary hover:bg-white/[0.03] hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="glass-card p-4 bg-gradient-to-br from-brand-400/10 to-brand-700/10">
              <div className="text-sm font-medium text-white mb-1">Need more credits?</div>
              <div className="text-xs text-text-muted mb-3">Get 20% off your next purchase</div>
              <button onClick={() => setActiveTab('billing')} className="w-full py-2 bg-gradient-to-r from-brand-400 to-brand-700 text-white text-sm font-semibold rounded-lg hover:shadow-glow transition-all">
                Upgrade Now
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 lg:ml-64 p-6 lg:p-8 min-h-[calc(100vh-4rem)]">
          {/* Welcome Banner */}
          <div className="glass-card p-8 mb-8 bg-gradient-to-r from-accent-500/10 via-cyber-500/10 to-accent-500/10 border-accent-500/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                  Welcome back, {user?.name?.split(' ')[0]}! 👋
                </h1>
                <p className="text-text-secondary">Ready to enhance some property photos?</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setActiveTab('upload')} className="btn-primary">
                  <span>Upload Image</span>
                </button>
                <button onClick={() => setActiveTab('billing')} className="btn-secondary">
                  Buy Credits
                </button>
              </div>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: '🪙', value: user?.credits, label: 'Credits Left', color: 'accent' },
                  { icon: '📸', value: '247', label: 'Photos Enhanced', color: 'cyber' },
                  { icon: '📅', value: '23', label: 'This Month', color: 'neon-pink' },
                  { icon: '⭐', value: user?.plan.toUpperCase(), label: 'Current Plan', color: 'success' },
                ].map((stat, i) => (
                  <div key={i} className="glass-card-hover p-6">
                    <div className="text-3xl mb-3">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="glass-card p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
                  <button onClick={() => setActiveTab('history')} className="text-accent-400 text-sm font-medium hover:text-accent-300">
                    View All →
                  </button>
                </div>
                <div className="space-y-3">
                  {recentImages.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500/20 to-cyber-500/20 flex items-center justify-center text-2xl">
                        🏠
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white">{item.name}</div>
                        <div className="text-sm text-text-muted">{item.service} · {item.date}</div>
                      </div>
                      <div className="px-3 py-1 bg-success/10 text-success rounded-full text-xs font-medium">
                        {item.status}
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 rounded-lg hover:bg-white/[0.05] text-text-muted hover:text-white transition-all">👁️</button>
                        <button className="p-2 rounded-lg hover:bg-white/[0.05] text-text-muted hover:text-white transition-all">⬇️</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Upload & Enhance Tab */}
          {activeTab === 'upload' && (
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Upload & Enhance</h2>
                
                {/* File Upload */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-text-secondary mb-3">Upload Image</label>
                  <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 text-center hover:border-accent-500/50 transition-all cursor-pointer bg-white/[0.02]">
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" id="file-upload" />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="text-5xl mb-4">📤</div>
                      <p className="text-lg font-medium text-white mb-2">
                        {uploadedFile ? uploadedFile.name : 'Click to upload or drag and drop'}
                      </p>
                      <p className="text-sm text-text-muted">JPG, PNG, or WebP (max 50MB)</p>
                    </label>
                  </div>
                </div>

                {/* Preview */}
                {previewUrl && (
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-text-secondary mb-3">Preview</label>
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-obsidian">
                      <Image src={previewUrl} alt="Preview" fill className="object-contain" />
                    </div>
                  </div>
                )}

                {/* Service Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-text-secondary mb-3">Select Enhancement</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 rounded-xl border transition-all text-center ${
                          selectedService === service.id
                            ? 'border-accent-500 bg-accent-500/10'
                            : 'border-white/10 hover:border-accent-500/50 bg-white/[0.02]'
                        }`}
                      >
                        <div className="text-2xl mb-2">{service.icon}</div>
                        <div className="text-sm font-medium text-white mb-1">{service.name}</div>
                        <div className="text-xs text-text-muted">{service.cost} credit{service.cost > 1 ? 's' : ''}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleProcess}
                  disabled={!uploadedFile || !selectedService || isProcessing}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isProcessing ? '⚡ Processing...' : '🚀 Enhance Photo'}</span>
                </button>
              </div>
            </div>
          )}

          {/* My Images Tab */}
          {activeTab === 'images' && (
            <div className="glass-card p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">My Images</h2>
                <button onClick={() => setActiveTab('upload')} className="btn-primary">
                  <span>+ Upload New</span>
                </button>
              </div>

              <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                {['All', 'Sky Replacement', 'Virtual Staging', 'Day to Dusk'].map((filter, i) => (
                  <button key={filter} className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${i === 0 ? 'bg-accent-500 text-white' : 'text-text-secondary hover:bg-white/[0.05] hover:text-white'}`}>
                    {filter}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, idx) => (
                  <div key={idx} className="glass-card overflow-hidden group">
                    <div className="aspect-video bg-gradient-to-br from-brand-400/10 to-brand-700/10 flex items-center justify-center">
                      <span className="text-5xl group-hover:scale-110 transition-transform">🏠</span>
                    </div>
                    <div className="p-4">
                      <div className="font-medium text-white mb-1">property-{idx + 1}.jpg</div>
                      <div className="text-sm text-text-muted mb-3">Enhanced {idx + 1} days ago</div>
                      <div className="flex gap-2">
                        <button className="flex-1 py-2 bg-accent-500 text-white text-sm font-medium rounded-lg hover:bg-accent-400 transition-all">View</button>
                        <button className="px-3 py-2 bg-white/[0.05] text-text-secondary rounded-lg hover:bg-white/[0.1] hover:text-white transition-all">⬇️</button>
                        <button className="px-3 py-2 bg-white/[0.05] text-text-secondary rounded-lg hover:bg-white/[0.1] hover:text-white transition-all">🗑️</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Enhancement History</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: '📊', value: '247', label: 'Total Enhancements', color: 'accent' },
                  { icon: '💰', value: '312', label: 'Credits Spent', color: 'cyber' },
                  { icon: '⚡', value: '23', label: 'This Month', color: 'neon-orange' },
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-xl bg-white/[0.02]">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  { date: 'Today, 2:30 PM', service: 'Sky Replacement', file: 'property-001.jpg', credits: 1 },
                  { date: 'Today, 11:45 AM', service: 'Virtual Staging', file: 'living-room.jpg', credits: 2 },
                  { date: 'Yesterday, 4:20 PM', service: 'Day to Dusk', file: 'house-front.jpg', credits: 1 },
                  { date: 'Yesterday, 10:15 AM', service: 'Green Grass', file: 'backyard.jpg', credits: 1 },
                  { date: 'Dec 8, 3:30 PM', service: '4K Upscale', file: 'kitchen.jpg', credits: 1 },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-cyber-500/20 flex items-center justify-center text-xl">
                      ✨
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">{item.service}</div>
                      <div className="text-sm text-text-muted">{item.file}</div>
                    </div>
                    <div className="text-sm text-text-muted">{item.date}</div>
                    <div className="px-3 py-1 bg-accent-500/10 text-accent-400 rounded-full text-xs font-medium">
                      -{item.credits} credit{item.credits > 1 ? 's' : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="glass-card p-8 bg-gradient-to-r from-brand-400/10 to-brand-700/10 border-accent-500/20">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{user?.plan.toUpperCase()} Plan</h3>
                    <p className="text-text-secondary">Perfect for real estate professionals</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">{user?.credits}</div>
                    <div className="text-text-muted">Credits Remaining</div>
                  </div>
                </div>
                <button className="btn-primary"><span>Upgrade Plan</span></button>
              </div>

              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Buy More Credits</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { credits: 50, price: 49, popular: false },
                    { credits: 150, price: 129, popular: true, bonus: '+15 Bonus' },
                    { credits: 500, price: 399, popular: false, bonus: '+100 Bonus' },
                  ].map((pkg, idx) => (
                    <div key={idx} className={`relative p-6 rounded-xl border transition-all ${pkg.popular ? 'border-accent-500 bg-accent-500/5 scale-105' : 'border-white/10 bg-white/[0.02]'}`}>
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-brand-400 to-brand-700 rounded-full text-xs font-bold text-white">
                          POPULAR
                        </div>
                      )}
                      <div className="text-center mb-4">
                        <div className="text-3xl mb-2">🪙</div>
                        <div className="text-3xl font-bold text-white">{pkg.credits}</div>
                        <div className="text-sm text-text-muted">Credits</div>
                        {pkg.bonus && <div className="text-sm text-success font-medium mt-1">{pkg.bonus}</div>}
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-white">${pkg.price}</div>
                        <div className="text-xs text-text-muted">${(pkg.price / pkg.credits).toFixed(2)} per credit</div>
                      </div>
                      <button className={`w-full py-3 rounded-xl font-semibold transition-all ${pkg.popular ? 'bg-gradient-to-r from-brand-400 to-brand-700 text-white hover:shadow-glow' : 'bg-white/[0.05] text-white hover:bg-white/[0.1]'}`}>
                        Buy Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Payment History</h2>
                <div className="space-y-3">
                  {[
                    { date: 'Dec 1, 2025', amount: '$129', credits: 150, method: 'Visa ****1234' },
                    { date: 'Nov 1, 2025', amount: '$129', credits: 150, method: 'Visa ****1234' },
                    { date: 'Oct 1, 2025', amount: '$49', credits: 50, method: 'Visa ****1234' },
                  ].map((payment, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02]">
                      <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center text-success">✓</div>
                      <div className="flex-1">
                        <div className="font-medium text-white">{payment.credits} Credits</div>
                        <div className="text-sm text-text-muted">{payment.method}</div>
                      </div>
                      <div className="text-sm text-text-muted">{payment.date}</div>
                      <div className="font-bold text-white">{payment.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Profile Settings</h2>
                <div className="space-y-5">
                  {[
                    { label: 'Full Name', value: user?.name, type: 'text' },
                    { label: 'Email Address', value: user?.email, type: 'email' },
                    { label: 'Company', value: '', type: 'text', placeholder: 'Your company' },
                    { label: 'Phone', value: '', type: 'tel', placeholder: '+1 (555) 000-0000' },
                  ].map((field, i) => (
                    <div key={i}>
                      <label className="block text-sm font-medium text-text-secondary mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        defaultValue={field.value}
                        placeholder={field.placeholder}
                        className="input-field"
                      />
                    </div>
                  ))}
                  <button className="btn-primary"><span>Save Changes</span></button>
                </div>
              </div>

              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Preferences</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Email Notifications', desc: 'Receive updates about your enhancements', checked: true },
                    { title: 'Auto-Download', desc: 'Automatically download enhanced images', checked: false },
                    { title: 'High Quality Mode', desc: 'Maximum quality enhancements (slower)', checked: true },
                  ].map((pref, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02]">
                      <div>
                        <div className="font-medium text-white">{pref.title}</div>
                        <div className="text-sm text-text-muted">{pref.desc}</div>
                      </div>
                      <label className="relative inline-block w-12 h-6 cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={pref.checked} />
                        <div className="w-12 h-6 bg-white/10 peer-checked:bg-accent-500 rounded-full transition-all peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Security</h2>
                <div className="space-y-3">
                  {[
                    { title: 'Change Password', desc: 'Update your password regularly' },
                    { title: 'Two-Factor Authentication', desc: 'Add an extra layer of security' },
                  ].map((item, i) => (
                    <button key={i} className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-all group text-left">
                      <div>
                        <div className="font-medium text-white">{item.title}</div>
                        <div className="text-sm text-text-muted">{item.desc}</div>
                      </div>
                      <span className="text-text-muted group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
                    </button>
                  ))}
                  <button className="w-full flex items-center justify-between p-4 rounded-xl bg-error/5 border border-error/20 hover:bg-error/10 transition-all group text-left">
                    <div>
                      <div className="font-medium text-error">Delete Account</div>
                      <div className="text-sm text-text-muted">Permanently delete your account</div>
                    </div>
                    <span className="text-error group-hover:translate-x-1 transition-all">→</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
