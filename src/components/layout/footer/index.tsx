import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black pt-12 text-white md:pt-16">
      {/* Main Footer Content */}
      <div className="site-container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-12 md:gap-12">
          {/* Left Column - Logo & Contact */}
          <div className="col-span-2 space-y-6 md:col-span-4">
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
                    <p className="text-gray-300">123 Banani, Dhaka, Bangladesh</p>
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
          <div className="col-span-1 space-y-6 md:col-span-2">
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
          <div className="col-span-1 space-y-6 md:col-span-2">
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

          {/* Shop location */}
          <div className="col-span-2 md:col-span-4">
            <h3 className="mb-4 text-lg font-semibold">Shop Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26792.646116556723!2d90.36257352727878!3d23.74030091639059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f5e1bcdbb3%3A0x847544ba5e16a34d!2sItBazar.net!5e0!3m2!1sen!2sbd!4v1770578020769!5m2!1sen!2sbd"
              className="h-[250px] w-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="py-4 md:pt-8">
        <div className="site-container">
          <Image
            src={'/images/payment-banner.jpg'}
            alt="payment"
            width={1000}
            height={50}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Full Width Copyright Bar */}
      <div className="border-t border-gray-800 py-4 md:py-6">
        <div className="site-container">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-center text-sm text-gray-400 md:text-left">
              &copy; {new Date().getFullYear()} ITBazar. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link href="/" className="transition-colors hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
