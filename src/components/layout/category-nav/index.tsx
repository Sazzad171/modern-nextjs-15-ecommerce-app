'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PAGE_ROUTES } from '@/lib/constants/page-routes';
import { ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      subcategories: [
        { id: 'smartphones', name: 'Smartphones', href: PAGE_ROUTES.PRODUCTS },
        { id: 'laptops', name: 'Laptops', href: PAGE_ROUTES.PRODUCTS },
        { id: 'tablets', name: 'Tablets', href: PAGE_ROUTES.PRODUCTS },
        { id: 'headphones', name: 'Headphones', href: PAGE_ROUTES.PRODUCTS },
        { id: 'gaming', name: 'Gaming', href: PAGE_ROUTES.PRODUCTS },
      ],
    },
    {
      id: 'fashion',
      name: 'Fashion',
      subcategories: [
        { id: 'mens', name: "Men's", href: PAGE_ROUTES.PRODUCTS },
        { id: 'womens', name: "Women's", href: PAGE_ROUTES.PRODUCTS },
        { id: 'kids', name: "Kids'", href: PAGE_ROUTES.PRODUCTS },
        { id: 'shoes', name: 'Shoes', href: PAGE_ROUTES.PRODUCTS },
        { id: 'accessories', name: 'Accessories', href: PAGE_ROUTES.PRODUCTS },
      ],
    },
  ];

  return (
    <nav className="bg-red-800 text-white">
      <div className="container mx-auto">
        {/* Desktop */}
        <div className="hidden md:block">
          <div className="flex items-center">
            <div className="border-r border-gray-800 px-4 py-3">
              <Button
                variant="ghost"
                className="flex items-center gap-2"
                onClick={() => {
                  /* Open all categories */
                }}
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
                    className="group relative"
                    onMouseEnter={() => setActiveCategory(category.id)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <Link
                      href={`/category/${category.id}`}
                      className="flex items-center px-6 py-3 transition-colors hover:bg-gray-800"
                    >
                      <span>{category.name}</span>
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Link>

                    {/* Mega Dropdown */}
                    {activeCategory === category.id && (
                      <div className="absolute top-full left-0 z-50 w-screen max-w-4xl rounded-b-lg border border-gray-700 bg-black shadow-2xl">
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                            {category.subcategories.map((subcategory) => (
                              <div key={subcategory.id}>
                                <Link
                                  href={subcategory.href}
                                  className="group/sub block rounded-lg p-3 transition-all hover:bg-gray-800"
                                >
                                  <div className="mb-1 font-medium">{subcategory.name}</div>
                                  <div className="text-sm text-gray-400">
                                    Shop the latest collection
                                  </div>
                                </Link>
                              </div>
                            ))}
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
              <SheetContent
                side="left"
                className="w-[300px] border-gray-800 bg-gray-900 text-white"
              >
                <div className="mt-6">
                  <h3 className="mb-4 px-2 text-lg font-semibold">Categories</h3>
                  <div className="space-y-1">
                    {categories.map((category) => (
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

            <div className="text-lg font-medium">Categories</div>

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
