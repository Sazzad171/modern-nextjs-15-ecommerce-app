import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Left Column - Logo & Contact */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image src={'/images/logo-red.png'} alt="Company Logo" width={60} height={60} />
            </Link>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+1234567890" className="transition-colors hover:text-white">
                    +1 (234) 567-890
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

            {/* Social Media (optional) */}
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-gray-700"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-gray-700"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-gray-700"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-gray-700"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Middle Column - Location & Details */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="mt-1 h-5 w-5 text-gray-400" />
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Main Office</h3>
                  <p className="text-gray-300">
                    123 Business Street
                    <br />
                    Suite 100
                    <br />
                    Dhaka
                    <br />
                    Bangladesh
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="mb-2 text-lg font-semibold">Business Hours</h3>
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
                  className="inline-block text-gray-300 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="inline-block text-gray-300 transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="inline-block text-gray-300 transition-colors hover:text-white"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="inline-block text-gray-300 transition-colors hover:text-white"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  className="inline-block text-gray-300 transition-colors hover:text-white"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>

            {/* Additional Quick Links */}
            <div className="pt-4">
              <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
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
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-center text-sm text-gray-400 md:text-left">
              © {new Date().getFullYear()} ITBazar. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link href="/sitemap" className="transition-colors hover:text-white">
                Sitemap
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/accessibility" className="transition-colors hover:text-white">
                Accessibility
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/legal" className="transition-colors hover:text-white">
                Legal Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
