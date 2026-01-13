'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  storage?: string;
  color?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    price: 999.99,
    image: '/images/products/1.webp',
    category: 'Smartphones',
    storage: '128GB',
    color: 'Space Black',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    price: 1199.99,
    image: '/images/products/2.webp',
    category: 'Smartphones',
    storage: '256GB',
    color: 'Natural Titanium',
  },
  {
    id: 3,
    name: 'iPhone 16 Pro',
    price: 1299.99,
    image: '/images/products/3.webp',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
  {
    id: 4,
    name: 'iPhone 16',
    price: 1799.99,
    image: '/images/products/2.webp',
    category: 'Smartphones',
    storage: '512GB',
    color: 'Desert Titanium',
  },
];

const ProductList = () => {
  const [selectedSeries, setSelectedSeries] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);

  // Simple filter options
  const seriesOptions = ['iPhone 14', 'iPhone 15', 'iPhone 16'];
  const priceOptions = ['Under $500', '$500 - $1000', 'Above $1000'];

  const toggleSeries = (series: string) => {
    setSelectedSeries((prev) =>
      prev.includes(series) ? prev.filter((s) => s !== series) : [...prev, series]
    );
  };

  const togglePrice = (price: string) => {
    setSelectedPrice((prev) =>
      prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
    );
  };

  return (
    <section className="py-4">
      <div className="container">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          <div className="rounded-xl bg-gray-100 p-5 md:col-span-3">
            <div className="mb-4">
              <h2 className="mb-4 text-lg font-bold">Filters</h2>
              <p className="text-sm text-gray-500">
                {selectedSeries.length + selectedPrice.length} active
              </p>
            </div>

            {/* Series Filter */}
            <div className="mb-4">
              <h3 className="mb-3 font-medium">iPhone Series</h3>
              <div className="space-y-2">
                {seriesOptions.map((series) => (
                  <div key={series} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`series-${series}`}
                      checked={selectedSeries.includes(series)}
                      onChange={() => toggleSeries(series)}
                      className="focus:ring-primary text-primary h-4 w-4 rounded border-gray-300"
                    />
                    <label htmlFor={`series-${series}`} className="ml-2 cursor-pointer text-sm">
                      {series}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-4">
              <h3 className="mb-3 font-medium">Price Range</h3>
              <div className="space-y-2">
                {priceOptions.map((price) => (
                  <div key={price} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`price-${price}`}
                      checked={selectedPrice.includes(price)}
                      onChange={() => togglePrice(price)}
                      className="focus:ring-primary text-primary h-4 w-4 rounded border-gray-300"
                    />
                    <label htmlFor={`price-${price}`} className="ml-2 cursor-pointer text-sm">
                      {price}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Filters */}
            {(selectedSeries.length > 0 || selectedPrice.length > 0) && (
              <div className="border-t pt-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  {selectedSeries.map((series) => (
                    <span
                      key={series}
                      className="text-primary-hov rounded bg-red-100 px-2 py-1 text-xs"
                    >
                      {series} ✕
                    </span>
                  ))}
                  {selectedPrice.map((price) => (
                    <span
                      key={price}
                      className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800"
                    >
                      {price} ✕
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setSelectedSeries([]);
                    setSelectedPrice([]);
                  }}
                  className="text-primary hover:text-primary-hov text-sm"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group border-primary rounded-xl border-2 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800"
                >
                  {/* Product Image */}
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary rounded-full px-3 py-1 text-xs text-white">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-800 dark:text-white">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-primary text-2xl font-bold">${product.price}</span>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Free Shipping
                        </p>
                      </div>

                      {/* Add to Cart Button */}
                      <button className="bg-primary hover:bg-primary-hov rounded-lg px-4 py-2 font-medium text-white transition-colors duration-200">
                        Add to Cart
                      </button>
                    </div>

                    {/* Rating */}
                    <div className="mt-4 flex items-center">
                      <div className="flex text-yellow-400">
                        {'★'.repeat(4)}
                        <span className="text-gray-300">★</span>
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        (128 reviews)
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
