import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default function SignUpPage() {
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
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8">
              Join 50,000+ Real Estate Pros
            </h2>
            <ul className="space-y-5 text-lg">
              <li className="flex items-center">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mr-4 font-bold">✓</div>
                <span>5 free credits on signup</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mr-4 font-bold">✓</div>
                <span>No credit card required</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mr-4 font-bold">✓</div>
                <span>2-minute setup</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-white p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-3xl md:text-4xl font-display font-black mb-8 text-navy-dark">Create Your Account</h1>

            {/* Social Signup */}
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
                <span className="px-2 bg-white text-gray-medium">Or sign up with email</span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <Input label="Full Name" type="text" required />
              <Input label="Email Address" type="email" required />
              <Input label="Password" type="password" required />
              
              <div className="text-sm text-gray-medium space-y-2 mb-4">
                <div>✓ At least 8 characters</div>
                <div>✓ One uppercase letter</div>
                <div>✓ One number</div>
                <div>✓ One special character</div>
              </div>

              <div className="space-y-3 mb-6">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" required />
                  <span className="text-sm">
                    I agree to the <a href="/terms" className="text-cyan-bright">Terms of Service</a> and <a href="/privacy" className="text-cyan-bright">Privacy Policy</a>
                  </span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span className="text-sm">Send me product updates and tips</span>
                </label>
              </div>

              <Button variant="primary" size="md" className="w-full">
                Create Account
              </Button>
            </form>

            <p className="text-center text-sm text-gray-medium mt-6">
              Already have an account? <a href="/login" className="text-cyan-bright font-semibold">Log in</a>
            </p>

            <div className="flex items-center justify-center gap-4 mt-8 text-xs text-gray-medium">
              <span>🔒 SSL Secure</span>
              <span>✓ GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

