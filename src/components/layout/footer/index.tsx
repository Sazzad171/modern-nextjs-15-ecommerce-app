import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black pt-12 text-white md:pt-16">
      {/* Main Footer Content */}
      <div className="site-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Left Column - Logo & Contact */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image src={'/images/logo.png'} alt="Company Logo" width={200} height={80} />
            </Link>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 text-gray-400" />
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400">Main Office</p>
                    <p className="text-gray-300">
                      123 Banani, Dhaka
                      <br />
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+1234567890" className="transition-colors hover:text-white">
                    +8801578993323
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:info@yourbrand.com"
                    className="transition-colors hover:text-white"
                  >
                    info@itbazar.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Links */}
          <div className="space-y-6">
            <div className="pt-4 pb-2">
              <h3 className="mb-3 text-lg font-semibold">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Privacy & Legal Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="inline-block text-gray-300 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-block text-gray-300 transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-block text-gray-300 transition-colors hover:text-white"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-block text-gray-300 transition-colors hover:text-white"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-block text-gray-300 transition-colors hover:text-white"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full Width Copyright Bar */}
      <div className="mt-6 border-t border-gray-800 py-6">
        <div className="site-container">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-center text-sm text-gray-400 md:text-left">
              &copy; {new Date().getFullYear()} ITBazar. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link href="/" className="transition-colors hover:text-white">
                Sitemap
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/" className="transition-colors hover:text-white">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
