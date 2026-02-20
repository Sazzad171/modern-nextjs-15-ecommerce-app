'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { menuCategories } from '@/lib/data';
import { ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const mainCategories = [
    { label: 'Monitor & UPS', slug: 'monitor-ups' },
    { label: 'Computer Accessories', slug: 'computer-accessories' },
    { label: 'Internet & Networking', slug: 'internet-networking' },
  ];

  const navLinks = [
    { id: 2, name: 'About Us', href: '/about-us' },
    { id: 3, name: 'All Brands', href: '/all-brands' },
    { id: 3, name: 'Notice Board', href: '/notice-board' },
  ];

  return (
    <nav className="bg-black pb-1">
      <div className="site-container">
        {/* Desktop - ShadCN NavigationMenu */}
        <div className="hidden md:block">
          <div className="relative">
            <ul className="flex items-center">
              {menuCategories.slice(0, 8).map((category) => (
                <li key={category.id} className="group">
                  {/* Main Menu Button */}
                  <button className="flex items-center gap-1 px-2 py-3 text-sm font-medium text-white hover:bg-gray-800">
                    {category.name}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* FULL WIDTH DROPDOWN */}
                  <div className="absolute top-full left-0 z-50 hidden w-full group-hover:block">
                    <div className="mx-auto max-w-[1480px] px-6">
                      <div className="mt-2 rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl">
                        <div className="grid grid-cols-4 gap-8">
                          {category.subcategories.map((subcategory) => (
                            <Link
                              key={subcategory.id}
                              href={subcategory.href}
                              className="block rounded-lg p-3 transition hover:bg-gray-100"
                            >
                              <div className="text-sm font-semibold text-gray-900">
                                {subcategory.name}
                              </div>
                              <p className="text-xs text-gray-500">Explore collection</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}

              <li>
                <Link
                  href="/category-list"
                  className="border border-gray-100 px-5 py-1 text-sm font-medium text-white hover:bg-gray-800"
                >
                  View All
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile with Shadcn Sheet */}
        <div className="md:hidden">
          <div className="flex items-center justify-between py-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] border-gray-800 bg-gray-900 text-white"
              >
                <div className="mt-6">
                  <h3 className="mb-4 px-2 text-lg font-semibold">Categories</h3>
                  <div className="space-y-1">
                    {menuCategories.map((category) => (
                      <div key={category.id} className="border-b border-gray-800 last:border-b-0">
                        <button
                          onClick={() =>
                            setActiveCategory(activeCategory === category.id ? null : category.id)
                          }
                          className="flex w-full items-center justify-between rounded-md px-2 py-3 hover:bg-gray-800"
                        >
                          <span>{category.name}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${activeCategory === category.id ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {activeCategory === category.id && (
                          <div className="mt-1 mb-2 ml-4 space-y-1">
                            {category.subcategories.map((subcategory) => (
                              <Link
                                key={subcategory.id}
                                href={subcategory.href}
                                className="block rounded-md px-2 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
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

            <div className="text-lg font-medium text-white">Categories</div>

            <Button variant="ghost" size="icon" className="invisible">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
