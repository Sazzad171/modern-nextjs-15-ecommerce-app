'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      subcategories: [
        { id: 'smartphones', name: 'Smartphones', href: '/category/electronics/smartphones' },
        { id: 'laptops', name: 'Laptops', href: '/category/electronics/laptops' },
        { id: 'tablets', name: 'Tablets', href: '/category/electronics/tablets' },
        { id: 'headphones', name: 'Headphones', href: '/category/electronics/headphones' },
        { id: 'gaming', name: 'Gaming', href: '/category/electronics/gaming' },
      ]
    },
    {
      id: 'fashion',
      name: 'Fashion',
      subcategories: [
        { id: 'mens', name: "Men's", href: '/category/fashion/mens' },
        { id: 'womens', name: "Women's", href: '/category/fashion/womens' },
        { id: 'kids', name: "Kids'", href: '/category/fashion/kids' },
        { id: 'shoes', name: 'Shoes', href: '/category/fashion/shoes' },
        { id: 'accessories', name: 'Accessories', href: '/category/fashion/accessories' },
      ]
    },
  ]

  return (
    <nav className="bg-gray-900 text-white border-b border-gray-800">
      <div className="container mx-auto">
        {/* Desktop */}
        <div className="hidden md:block">
          <div className="flex items-center">
            <div className="px-4 py-3 border-r border-gray-800">
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 hover:bg-gray-800"
                onClick={() => {/* Open all categories */}}
              >
                <Menu className="h-5 w-5" />
                <span>All Categories</span>
              </Button>
            </div>
            
            <div className="flex-1">
              <ul className="flex items-center">
                {categories.map((category) => (
                  <li 
                    key={category.id}
                    className="relative group"
                    onMouseEnter={() => setActiveCategory(category.id)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <Link
                      href={`/category/${category.id}`}
                      className="flex items-center px-6 py-3 hover:bg-gray-800 transition-colors"
                    >
                      <span>{category.name}</span>
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Link>

                    {/* Mega Dropdown */}
                    {activeCategory === category.id && (
                      <div className="absolute left-0 top-full z-50 w-screen max-w-4xl bg-black border border-gray-700 rounded-b-lg shadow-2xl">
                        <div className="p-6">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {category.subcategories.map((subcategory) => (
                              <div key={subcategory.id}>
                                <Link
                                  href={subcategory.href}
                                  className="group/sub block p-3 rounded-lg hover:bg-gray-800 transition-all"
                                >
                                  <div className="font-medium mb-1">{subcategory.name}</div>
                                  <div className="text-sm text-gray-400">
                                    Shop the latest collection
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                          
                          {/* Featured Section */}
                          <div className="mt-6 pt-6 border-t border-gray-800">
                            <h4 className="text-lg font-semibold mb-3">Featured in {category.name}</h4>
                            <div className="flex gap-4">
                              <Link 
                                href="/sale" 
                                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm font-medium"
                              >
                                Sale Up to 50% Off
                              </Link>
                              <Link 
                                href="/new-arrivals" 
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium"
                              >
                                New Arrivals
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile with Shadcn Sheet */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-gray-800">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-gray-900 border-gray-800 text-white">
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4 px-2">Categories</h3>
                  <div className="space-y-1">
                    {categories.map((category) => (
                      <div key={category.id} className="border-b border-gray-800 last:border-b-0">
                        <button
                          onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                          className="w-full flex items-center justify-between px-2 py-3 hover:bg-gray-800 rounded-md"
                        >
                          <span>{category.name}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform ${activeCategory === category.id ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {activeCategory === category.id && (
                          <div className="ml-4 mt-1 mb-2 space-y-1">
                            {category.subcategories.map((subcategory) => (
                              <Link
                                key={subcategory.id}
                                href={subcategory.href}
                                className="block px-2 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                              >
                                {subcategory.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <div className="text-lg font-medium">Categories</div>
            
            <Button variant="ghost" size="icon" className="invisible">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default CategoryNav