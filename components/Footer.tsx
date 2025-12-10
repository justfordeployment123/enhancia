import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
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

          {/* Product Column */}
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

          {/* Company Column */}
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

          {/* Legal Column */}
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

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 Enhancia. All rights reserved.</p>
          <p>Made with ❤️ for real estate professionals</p>
        </div>
      </div>
    </footer>
  )
}

