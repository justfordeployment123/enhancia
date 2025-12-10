'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import { useAuth } from '@/contexts/AuthContext'
import Image from 'next/image'

export default function DashboardPage() {
  const router = useRouter()
  const { user, isAuthenticated, updateCredits } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  // Redirect if not authenticated
  if (!isAuthenticated) {
    router.push('/login')
    return null
  }

  const services = [
    { id: 'sky', name: 'Sky Replacement', icon: '🌅', cost: 1 },
    { id: 'dusk', name: 'Day to Dusk', icon: '🌆', cost: 1 },
    { id: 'staging', name: 'Virtual Staging', icon: '🛋️', cost: 2 },
    { id: 'perspective', name: 'Perspective Fix', icon: '📐', cost: 1 },
    { id: 'declutter', name: 'Declutter', icon: '🧹', cost: 1 },
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
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleProcess = async () => {
    if (!uploadedFile || !selectedService) return

    setIsProcessing(true)
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Deduct credits
    const service = services.find(s => s.id === selectedService)
    if (service && user) {
      updateCredits(user.credits - service.cost)
    }
    
    setIsProcessing(false)
    setUploadedFile(null)
    setPreviewUrl(null)
    setSelectedService(null)
    alert('Image processed successfully! Check your downloads.')
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-5rem)] sticky top-20">
          <nav className="p-6 space-y-2">
            {[
              { id: 'overview', icon: '📊', label: 'Overview' },
              { id: 'upload', icon: '📤', label: 'Upload & Enhance' },
              { id: 'images', icon: '🖼️', label: 'My Images' },
              { id: 'history', icon: '📋', label: 'History' },
              { id: 'billing', icon: '💳', label: 'Billing' },
              { id: 'settings', icon: '⚙️', label: 'Settings' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center space-x-3 transition-all ${
                  activeTab === item.id
                    ? 'bg-gradient-sky text-white font-bold shadow-lg'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6 lg:p-8">
          {/* Welcome Banner */}
          <div className="bg-gradient-sky text-white p-8 rounded-2xl mb-8 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-black mb-2">
                  Welcome back, {user?.name?.split(' ')[0]}! 👋
                </h1>
                <p className="text-white/90 text-lg">
                  Ready to enhance some property photos?
                </p>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setActiveTab('upload')} className="px-6 py-3 bg-white text-teal-deep font-bold rounded-xl hover:scale-105 transition-all shadow-lg">
                  Upload Image
                </button>
                <button onClick={() => setActiveTab('billing')} className="px-6 py-3 bg-white/10 backdrop-blur-xl text-white font-bold rounded-xl border-2 border-white/40 hover:bg-white/20 transition-all">
                  Buy Credits
                </button>
              </div>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: '🪙', number: user?.credits, label: 'Credits Left', color: 'from-cyan-500 to-teal-500', action: 'Buy More' },
                  { icon: '📸', number: '247', label: 'Photos Enhanced', color: 'from-purple-500 to-pink-500' },
                  { icon: '📅', number: '23', label: 'This Month', color: 'from-orange-500 to-red-500' },
                  { icon: '⭐', number: user?.plan.toUpperCase(), label: 'Current Plan', color: 'from-green-500 to-emerald-500' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-cyan-bright hover:shadow-xl transition-all">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className={`text-3xl font-display font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-medium font-semibold mb-3">{stat.label}</div>
                    {stat.action && (
                      <button onClick={() => setActiveTab('billing')} className="text-sm text-cyan-bright font-bold hover:text-teal-deep underline">
                        {stat.action} →
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-display font-black text-navy-dark">Recent Activity</h2>
                  <button onClick={() => setActiveTab('history')} className="text-cyan-bright font-bold hover:text-teal-deep">
                    View All →
                  </button>
                </div>
                <div className="space-y-4">
                  {recentImages.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 hover:bg-gray-50 rounded-xl border-2 border-transparent hover:border-cyan-bright transition-all">
                      <div className="w-20 h-20 bg-gradient-sky rounded-xl flex items-center justify-center text-white text-3xl shadow-lg flex-shrink-0">
                        🏠
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-navy-dark text-lg">{item.name}</h3>
                        <p className="text-sm text-gray-medium">{item.service} · {item.date}</p>
                      </div>
                      <div className="px-4 py-2 bg-teal-deep/10 text-teal-deep rounded-full text-sm font-bold">
                        {item.status}
                      </div>
                      <div className="flex gap-2">
                        <button className="p-3 hover:bg-cyan-bright/10 rounded-xl transition-colors border-2 border-gray-200 hover:border-cyan-bright">
                          👁️
                        </button>
                        <button className="p-3 hover:bg-cyan-bright/10 rounded-xl transition-colors border-2 border-gray-200 hover:border-cyan-bright">
                          ⬇️
                        </button>
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
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h2 className="text-3xl font-display font-black text-navy-dark mb-6">Upload & Enhance</h2>
                
                {/* File Upload */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-navy-dark mb-3">Upload Image</label>
                  <div className="border-4 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-cyan-bright transition-all cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="text-6xl mb-4">📤</div>
                      <p className="text-lg font-bold text-navy-dark mb-2">
                        {uploadedFile ? uploadedFile.name : 'Click to upload or drag and drop'}
                      </p>
                      <p className="text-sm text-gray-medium">
                        JPG, PNG, or WebP (max 50MB)
                      </p>
                    </label>
                  </div>
                </div>

                {/* Preview */}
                {previewUrl && (
                  <div className="mb-8">
                    <label className="block text-sm font-bold text-navy-dark mb-3">Preview</label>
                    <div className="relative w-full h-96 bg-gray-100 rounded-2xl overflow-hidden">
                      <Image
                        src={previewUrl}
                        alt="Preview"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Service Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-navy-dark mb-3">Select Enhancement</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedService === service.id
                            ? 'border-cyan-bright bg-cyan-bright/10 shadow-lg'
                            : 'border-gray-200 hover:border-cyan-bright'
                        }`}
                      >
                        <div className="text-3xl mb-2">{service.icon}</div>
                        <div className="text-sm font-bold text-navy-dark mb-1">{service.name}</div>
                        <div className="text-xs text-gray-medium">{service.cost} credit{service.cost > 1 ? 's' : ''}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Process Button */}
                <button
                  onClick={handleProcess}
                  disabled={!uploadedFile || !selectedService || isProcessing}
                  className="w-full px-8 py-4 bg-gradient-sky text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isProcessing ? '⚡ Processing...' : '🚀 Enhance Photo'}
                </button>
              </div>
            </div>
          )}

          {/* My Images Tab */}
          {activeTab === 'images' && (
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-display font-black text-navy-dark">My Images</h2>
                <button onClick={() => setActiveTab('upload')} className="px-6 py-3 bg-gradient-sky text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg">
                  + Upload New
                </button>
              </div>
              
              {/* Filter Tabs */}
              <div className="flex gap-4 mb-6 border-b-2 border-gray-200">
                {['All', 'Sky Replacement', 'Virtual Staging', 'Day to Dusk', 'Other'].map((filter) => (
                  <button key={filter} className="px-4 py-3 font-bold text-gray-medium hover:text-cyan-bright border-b-4 border-transparent hover:border-cyan-bright transition-all">
                    {filter}
                  </button>
                ))}
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, idx) => (
                  <div key={idx} className="group relative bg-gray-100 rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-cyan-bright transition-all">
                    <div className="aspect-video bg-gradient-to-br from-cyan-bright/20 to-teal-deep/20 flex items-center justify-center">
                      <span className="text-6xl">🏠</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-navy-dark mb-1">property-{idx + 1}.jpg</h3>
                      <p className="text-sm text-gray-medium mb-3">Enhanced {idx + 1} days ago</p>
                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 bg-cyan-bright text-white font-bold rounded-lg hover:bg-teal-deep transition-all">
                          View
                        </button>
                        <button className="px-4 py-2 bg-gray-200 text-navy-dark font-bold rounded-lg hover:bg-gray-300 transition-all">
                          ⬇️
                        </button>
                        <button className="px-4 py-2 bg-gray-200 text-navy-dark font-bold rounded-lg hover:bg-gray-300 transition-all">
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h2 className="text-3xl font-display font-black text-navy-dark mb-6">Enhancement History</h2>
              
              {/* Stats Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border-2 border-purple-500/20">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="text-3xl font-black text-navy-dark">247</div>
                  <div className="text-sm text-gray-medium font-semibold">Total Enhancements</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border-2 border-green-500/20">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="text-3xl font-black text-navy-dark">312</div>
                  <div className="text-sm text-gray-medium font-semibold">Credits Spent</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-2xl border-2 border-orange-500/20">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-3xl font-black text-navy-dark">23</div>
                  <div className="text-sm text-gray-medium font-semibold">This Month</div>
                </div>
              </div>

              {/* Transaction History */}
              <div className="space-y-3">
                {[
                  { date: 'Today, 2:30 PM', service: 'Sky Replacement', file: 'property-001.jpg', credits: 1, status: 'completed' },
                  { date: 'Today, 11:45 AM', service: 'Virtual Staging', file: 'living-room.jpg', credits: 2, status: 'completed' },
                  { date: 'Yesterday, 4:20 PM', service: 'Day to Dusk', file: 'house-front.jpg', credits: 1, status: 'completed' },
                  { date: 'Yesterday, 10:15 AM', service: 'Green Grass', file: 'backyard.jpg', credits: 1, status: 'completed' },
                  { date: 'Dec 8, 3:30 PM', service: '4K Upscale', file: 'kitchen.jpg', credits: 1, status: 'completed' },
                  { date: 'Dec 8, 9:00 AM', service: 'Perspective Fix', file: 'exterior.jpg', credits: 1, status: 'completed' },
                  { date: 'Dec 7, 5:45 PM', service: 'Facade Upgrade', file: 'front-view.jpg', credits: 2, status: 'completed' },
                  { date: 'Dec 7, 2:20 PM', service: 'Declutter', file: 'bedroom.jpg', credits: 1, status: 'completed' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 hover:bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-cyan-bright transition-all">
                    <div className="w-16 h-16 bg-gradient-sky rounded-xl flex items-center justify-center text-white text-2xl shadow-lg flex-shrink-0">
                      ✨
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-navy-dark">{item.service}</h3>
                      <p className="text-sm text-gray-medium">{item.file}</p>
                    </div>
                    <div className="text-sm text-gray-medium">{item.date}</div>
                    <div className="px-4 py-2 bg-teal-deep/10 text-teal-deep rounded-full text-sm font-bold">
                      -{item.credits} credit{item.credits > 1 ? 's' : ''}
                    </div>
                    <div className="px-4 py-2 bg-green-500/10 text-green-700 rounded-full text-sm font-bold">
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Current Plan */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h2 className="text-3xl font-display font-black text-navy-dark mb-6">Current Plan</h2>
                <div className="bg-gradient-sky text-white p-8 rounded-2xl">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-black mb-2">{user?.plan.toUpperCase()} Plan</h3>
                      <p className="text-white/90">Perfect for real estate professionals</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-black">{user?.credits}</div>
                      <div className="text-white/90">Credits Remaining</div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-white text-teal-deep font-bold rounded-xl hover:scale-105 transition-all">
                    Upgrade Plan
                  </button>
                </div>
              </div>

              {/* Buy Credits */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h2 className="text-3xl font-display font-black text-navy-dark mb-6">Buy More Credits</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { credits: 50, price: 49, popular: false },
                    { credits: 150, price: 129, popular: true, bonus: '+15 Bonus' },
                    { credits: 500, price: 399, popular: false, bonus: '+100 Bonus' },
                  ].map((pkg, idx) => (
                    <div key={idx} className={`relative p-6 rounded-2xl border-2 transition-all ${pkg.popular ? 'border-cyan-bright bg-cyan-bright/5 shadow-xl scale-105' : 'border-gray-200 hover:border-cyan-bright'}`}>
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-sky text-white text-sm font-bold rounded-full">
                          POPULAR
                        </div>
                      )}
                      <div className="text-4xl mb-4 text-center">🪙</div>
                      <div className="text-center mb-4">
                        <div className="text-4xl font-black text-navy-dark mb-1">{pkg.credits}</div>
                        <div className="text-sm text-gray-medium font-semibold">Credits</div>
                        {pkg.bonus && (
                          <div className="text-sm text-teal-deep font-bold mt-1">{pkg.bonus}</div>
                        )}
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-3xl font-black text-navy-dark">${pkg.price}</div>
                        <div className="text-sm text-gray-medium">${(pkg.price / pkg.credits).toFixed(2)} per credit</div>
                      </div>
                      <button className="w-full px-6 py-3 bg-gradient-sky text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all">
                        Buy Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment History */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h2 className="text-3xl font-display font-black text-navy-dark mb-6">Payment History</h2>
                <div className="space-y-3">
                  {[
                    { date: 'Dec 1, 2025', amount: '$129', credits: 150, method: 'Visa ****1234', status: 'Completed' },
                    { date: 'Nov 1, 2025', amount: '$129', credits: 150, method: 'Visa ****1234', status: 'Completed' },
                    { date: 'Oct 1, 2025', amount: '$49', credits: 50, method: 'Visa ****1234', status: 'Completed' },
                  ].map((payment, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl border-2 border-gray-200">
                      <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 text-xl flex-shrink-0">
                        ✓
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-navy-dark">{payment.credits} Credits</h3>
                        <p className="text-sm text-gray-medium">{payment.method}</p>
                      </div>
                      <div className="text-sm text-gray-medium">{payment.date}</div>
                      <div className="text-xl font-black text-navy-dark">{payment.amount}</div>
                      <div className="px-4 py-2 bg-green-500/10 text-green-700 rounded-full text-sm font-bold">
                        {payment.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Profile Settings */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h2 className="text-3xl font-display font-black text-navy-dark mb-6">Profile Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-navy-dark mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue={user?.name}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-bright focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy-dark mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-bright focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy-dark mb-2">Company</label>
                    <input
                      type="text"
                      placeholder="Your real estate company"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-bright focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy-dark mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-bright focus:outline-none transition-all"
                    />
                  </div>
                  <button className="px-8 py-3 bg-gradient-sky text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all">
                    Save Changes
                  </button>
                </div>
              </div>

              {/* Preferences */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h2 className="text-3xl font-display font-black text-navy-dark mb-6">Preferences</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200">
                    <div>
                      <h3 className="font-bold text-navy-dark mb-1">Email Notifications</h3>
                      <p className="text-sm text-gray-medium">Receive updates about your enhancements</p>
                    </div>
                    <label className="relative inline-block w-14 h-8">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-sky"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200">
                    <div>
                      <h3 className="font-bold text-navy-dark mb-1">Auto-Download</h3>
                      <p className="text-sm text-gray-medium">Automatically download enhanced images</p>
                    </div>
                    <label className="relative inline-block w-14 h-8">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-sky"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200">
                    <div>
                      <h3 className="font-bold text-navy-dark mb-1">High Quality Mode</h3>
                      <p className="text-sm text-gray-medium">Maximum quality enhancements (slower)</p>
                    </div>
                    <label className="relative inline-block w-14 h-8">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-sky"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Security */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h2 className="text-3xl font-display font-black text-navy-dark mb-6">Security</h2>
                <div className="space-y-4">
                  <button className="w-full text-left px-6 py-4 border-2 border-gray-200 rounded-xl hover:border-cyan-bright transition-all group">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-navy-dark mb-1">Change Password</h3>
                        <p className="text-sm text-gray-medium">Update your password regularly</p>
                      </div>
                      <span className="text-cyan-bright group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </button>
                  <button className="w-full text-left px-6 py-4 border-2 border-gray-200 rounded-xl hover:border-cyan-bright transition-all group">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-navy-dark mb-1">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-medium">Add an extra layer of security</p>
                      </div>
                      <span className="text-cyan-bright group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </button>
                  <button className="w-full text-left px-6 py-4 border-2 border-red-200 rounded-xl hover:border-red-500 transition-all group">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-red-600 mb-1">Delete Account</h3>
                        <p className="text-sm text-gray-medium">Permanently delete your account</p>
                      </div>
                      <span className="text-red-600 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
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
