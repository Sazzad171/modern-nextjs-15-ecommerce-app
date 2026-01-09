'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { PAGE_ROUTES } from '@/lib/constants/page-routes';
import { ChevronRight, Search, ShoppingCart, User, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// Mock search results data
const mockSearchResults = [
  { id: 1, title: 'iPhone 15 Pro Max', category: 'Smartphones', price: '$1,199' },
  {
    id: 2,
    title: 'Samsung Galaxy S24 Ultra',
    category: 'Smartphones',
    price: '$1,299',
  },
  { id: 3, title: 'MacBook Pro 16"', category: 'Laptops', price: '$2,499' },
  { id: 4, title: 'Sony WH-1000XM5', category: 'Headphones', price: '$399' },
  { id: 5, title: 'Apple Watch Series 9', category: 'Wearables', price: '$429' },
  { id: 6, title: 'iPad Pro 12.9"', category: 'Tablets', price: '$1,099' },
];

// Mock cart items data
const mockCartItems = [
  { id: 1, name: 'iPhone 15 Pro Max', price: 1199, quantity: 1, image: '/images/products/1.webp' },
  {
    id: 2,
    name: 'AirPods Pro (2nd Gen)',
    price: 249,
    quantity: 2,
    image: '/images/products/2.webp',
  },
  { id: 3, name: 'MagSafe Charger', price: 39, quantity: 1, image: '/images/products/3.webp' },
];

const Header = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter search results based on query
  const filteredResults = searchQuery.trim()
    ? mockSearchResults.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockSearchResults;

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search input focus
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    setShowSearchResults(true);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(true);
  };

  // Handle search result click
  const handleResultClick = (result: (typeof mockSearchResults)[0]) => {
    setSearchQuery(result.title);
    setShowSearchResults(false);
    // you would navigate to the product page
    console.log('Selected product:', result);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setShowSearchResults(false);
    inputRef.current?.focus();
  };

  // Calculate cart total
  const cartTotal = mockCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartItemsCount = mockCartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-black py-2">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Left Column - Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={'/images/logo-red.png'} alt="Company Logo" width={60} height={60} />
          </Link>
        </div>

        {/* Middle Column - Search Box with Dropdown (Desktop) */}
        <div className="mx-1 hidden max-w-xl flex-1 md:flex lg:mx-8" ref={searchRef}>
          <div className="relative w-full">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              ref={inputRef}
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              placeholder="Search for products, brands, and more..."
              className="w-full rounded-full border-gray-700 bg-gray-900 py-2 pr-10 pl-10 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-600 focus-visible:ring-offset-0"
            />

            {/* Search Results Dropdown */}
            {showSearchResults && isSearchFocused && (
              <div className="absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden rounded-lg border border-gray-800 bg-gray-900 shadow-xl">
                <div className="max-h-[400px] overflow-y-auto">
                  <div className="p-2">
                    <div className="mb-2 px-2 py-1 text-xs font-semibold text-gray-400">
                      {searchQuery ? 'Search Results' : 'Popular Products'}
                    </div>

                    {filteredResults.length > 0 ? (
                      <div className="space-y-1">
                        {filteredResults.map((result) => (
                          <button
                            key={result.id}
                            onClick={() => handleResultClick(result)}
                            className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left hover:bg-gray-800 focus:bg-gray-800 focus:outline-none"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-white">
                                  {result.title}
                                </span>
                                <span className="rounded-full bg-gray-800 px-2 py-0.5 text-xs text-gray-300">
                                  {result.category}
                                </span>
                              </div>
                              <div className="mt-1 flex items-center gap-2">
                                <span className="text-sm font-semibold text-green-400">
                                  {result.price}
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-500" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="py-8 text-center">
                        <Search className="mx-auto h-8 w-8 text-gray-600" />
                        <p className="mt-2 text-gray-400">No products found</p>
                        <p className="text-sm text-gray-500">Try different keywords</p>
                      </div>
                    )}

                    {/* View all results link */}
                    {searchQuery && filteredResults.length > 0 && (
                      <div className="mt-2 border-t border-gray-800 pt-2">
                        <Link
                          href={`/search?q=${encodeURIComponent(searchQuery)}`}
                          className="flex items-center justify-center gap-1 rounded-md px-3 py-2 text-sm text-blue-400 hover:bg-gray-800"
                        >
                          View all results for "{searchQuery}"
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Icons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-gray-700 bg-transparent text-white hover:bg-gray-800 hover:text-white md:hidden"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            {showMobileSearch ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>

          {/* Cart Icon with Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative cursor-pointer rounded-full border border-gray-700 bg-transparent text-white hover:bg-gray-800 hover:text-white"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-medium">
                  {cartItemsCount}
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent className="flex h-full flex-col border-l-gray-800 bg-gray-900 p-4 text-white sm:max-w-md">
              <SheetHeader className="border-b border-gray-800 pb-4">
                <SheetTitle className="text-left text-xl font-bold text-white">
                  Shopping Cart
                </SheetTitle>
                <div className="text-sm text-gray-400">
                  {cartItemsCount} {cartItemsCount === 1 ? 'item' : 'items'}
                </div>
              </SheetHeader>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {mockCartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 rounded-lg border border-gray-800 p-4"
                    >
                      <div className="relative h-16 w-16 shrink-0 rounded-md bg-gray-800">
                        {/* use actual product image */}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{item.name}</h4>
                        <p className="text-sm text-gray-400">${item.price.toFixed(2)} each</p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-6 w-6 rounded-full border-gray-700 bg-transparent text-white"
                            >
                              -
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-6 w-6 rounded-full border-gray-700 bg-transparent text-white"
                            >
                              +
                            </Button>
                          </div>
                          <span className="font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-red-400"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Summary */}
              <div className="border-t border-gray-800 pt-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Shipping</span>
                    <span className="font-semibold text-green-400">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href="/cart"
                      className="flex flex-1 items-center justify-center rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700"
                    >
                      View Cart
                    </Link>

                    <Link
                      href="/checkout"
                      className="flex flex-1 items-center justify-center rounded-full bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* User Icon */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden cursor-pointer rounded-full border border-gray-700 bg-transparent text-white hover:bg-gray-800 hover:text-white sm:inline-flex"
              >
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={PAGE_ROUTES.PROFILE} className="cursor-pointer">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={PAGE_ROUTES.LOGOUT} className="cursor-pointer">
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
        <div className="border-t border-gray-800 bg-black p-4 md:hidden" ref={searchRef}>
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              ref={inputRef}
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              placeholder="Search..."
              className="w-full rounded-full border-gray-700 bg-gray-900 py-2 pr-10 pl-10 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-600 focus-visible:ring-offset-0"
              autoFocus
            />

            {/* Clear search button for mobile */}
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            {/* Mobile Search Results Dropdown */}
            {showSearchResults && isSearchFocused && (
              <div className="absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden rounded-lg border border-gray-800 bg-gray-900 shadow-xl">
                <div className="max-h-[300px] overflow-y-auto">
                  <div className="p-2">
                    <div className="mb-2 px-2 py-1 text-xs font-semibold text-gray-400">
                      {searchQuery ? 'Search Results' : 'Popular Products'}
                    </div>

                    {filteredResults.length > 0 ? (
                      <div className="space-y-1">
                        {filteredResults.slice(0, 4).map((result) => (
                          <button
                            key={result.id}
                            onClick={() => handleResultClick(result)}
                            className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left hover:bg-gray-800"
                          >
                            <div className="flex-1">
                              <div className="text-sm font-medium text-white">{result.title}</div>
                              <div className="mt-1 flex items-center gap-2">
                                <span className="text-xs text-green-400">{result.price}</span>
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-500" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="py-6 text-center">
                        <p className="text-gray-400">No products found</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
