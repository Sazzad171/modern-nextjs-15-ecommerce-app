import React from 'react'
import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left Column - Logo & Contact */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <span className="font-bold text-white text-xl">LOGO</span>
                </div>
                <span className="text-2xl font-bold">YourBrand</span>
              </div>
            </Link>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@yourbrand.com" className="hover:text-white transition-colors">
                    info@yourbrand.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media (optional) */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Middle Column - Location & Details */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-400 mt-1" />
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Main Office</h3>
                  <p className="text-gray-300">
                    123 Business Street<br />
                    Suite 100<br />
                    San Francisco, CA 94107<br />
                    United States
                  </p>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                  <ul className="space-y-1 text-gray-300">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday: 10:00 AM - 4:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Privacy & Legal Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-of-service" 
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/cookie-policy" 
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/refund-policy" 
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/shipping-policy" 
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>

            {/* Additional Quick Links */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} YourBrand. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/legal" className="hover:text-white transition-colors">
                Legal Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer