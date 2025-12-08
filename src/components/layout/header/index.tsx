'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, User, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="bg-black py-2">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Left Column - Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={'/images/logo-red.png'} alt="Company Logo" width={60} height={60} />
          </Link>
        </div>

        {/* Middle Column - Search Box (Desktop) */}
        <div className="mx-1 hidden max-w-xl flex-1 md:flex lg:mx-8">
          <div className="relative w-full">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for products, brands, and more..."
              className="w-full rounded-full border-gray-700 bg-gray-900 py-2 pr-4 pl-10 text-white placeholder:text-gray-400 focus:border-gray-600 focus:ring-gray-600"
            />
          </div>
        </div>

        {/* Right Column - Icons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-gray-700 bg-transparent text-white hover:bg-gray-800 md:hidden"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            {showMobileSearch ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>

          {/* Cart Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full border border-gray-700 bg-transparent text-white hover:bg-gray-800"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-medium">
              3
            </span>
          </Button>

          {/* User Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden rounded-full border border-gray-700 bg-transparent text-white hover:bg-gray-800 sm:inline-flex"
          >
            <User className="h-5 w-5" />
          </Button>

          {/* Mobile User Menu (simplified) */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-gray-700 bg-transparent text-white hover:bg-gray-800 sm:hidden"
          >
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar (appears when toggled) */}
      {showMobileSearch && (
        <div className="border-t border-gray-800 bg-black p-4 md:hidden">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-full border-gray-700 bg-gray-900 py-2 pr-4 pl-10 text-white placeholder:text-gray-400 focus:border-gray-600 focus:ring-gray-600"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
