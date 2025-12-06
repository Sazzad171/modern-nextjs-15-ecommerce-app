"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { 
  ShoppingCart, 
  User, 
  Search,
  Menu,
  X
} from 'lucide-react'

const Header = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        
        {/* Left Column - Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-white/20 flex items-center justify-center">
              <span className="font-bold text-white">LOGO</span>
            </div>
            <span className="hidden font-bold text-xl sm:inline-block">
              YourBrand
            </span>
          </Link>
        </div>

        {/* Middle Column - Search Box (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-xl mx-1 lg:mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for products, brands, and more..."
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-600 focus:ring-gray-600 rounded-full"
            />
          </div>
        </div>

        {/* Right Column - Icons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          
          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full border border-gray-700 bg-transparent hover:bg-gray-800 text-white"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            {showMobileSearch ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>

          {/* Cart Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full border border-gray-700 bg-transparent hover:bg-gray-800 text-white"
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
            className="hidden sm:inline-flex rounded-full border border-gray-700 bg-transparent hover:bg-gray-800 text-white"
          >
            <User className="h-5 w-5" />
          </Button>

          {/* Mobile User Menu (simplified) */}
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden rounded-full border border-gray-700 bg-transparent hover:bg-gray-800 text-white"
          >
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar (appears when toggled) */}
      {showMobileSearch && (
        <div className="border-t border-gray-800 bg-black p-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-600 focus:ring-gray-600 rounded-full"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header