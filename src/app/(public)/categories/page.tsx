'use client';

import { ProductItemCard } from '@/components/product/ProductItem';
import { productsData } from '@/lib/data';
import { useState } from 'react';

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
      <div className="site-container">
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
              {productsData?.map((product) => (
                <ProductItemCard product={product} key={product.id} imageHeightClass="h-60" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
