'use client';

import { CheckboxField } from '@/components/CustomUI/Checkbox';
import { ProductItemCard } from '@/components/product/ProductItem';
import { productsData } from '@/lib/data';
import { useState } from 'react';

const ProductList = () => {
  const [selectedBrands, setselectedBrands] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);

  // Simple filter options
  const seriesOptions = ['iPhone 14', 'iPhone 15', 'iPhone 16'];
  const availabilityOptions = ['In-Stock', 'Pre Order', 'Up Coming', 'Stock Out'];

  // Toggle brands
  const toggleBrands = (series: string) => {
    setselectedBrands((prev) =>
      prev.includes(series) ? prev.filter((s) => s !== series) : [...prev, series]
    );
  };

  // Toggle price
  const togglePrice = (availableOption: string) => {
    setAvailability((prev) =>
      prev.includes(availableOption)
        ? prev.filter((p) => p !== availableOption)
        : [...prev, availableOption]
    );
  };

  // Clear filter
  const clearFilter = () => {
    setselectedBrands([]);
    setAvailability([]);
  };

  return (
    <section className="py-4">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          <div className="rounded-xl bg-gray-100 p-5 md:col-span-2">
            <div className="mb-4">
              <h2 className="mb-4 text-lg font-bold">Filters</h2>
              <p className="text-sm text-gray-500">
                {selectedBrands.length + availability.length} active
              </p>
            </div>

            {/* Brands Filter */}
            <div className="mb-4">
              <h3 className="mb-3 font-medium">Brands</h3>
              <div className="space-y-2">
                {seriesOptions.map((brandItem) => (
                  <div key={brandItem} className="flex items-center">
                    <CheckboxField
                      key={brandItem}
                      id={`brandItem-${brandItem}`}
                      label={brandItem}
                      checked={selectedBrands.includes(brandItem)}
                      onCheckedChange={() => toggleBrands(brandItem)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Filter */}
            <div className="mb-4">
              <h3 className="mb-3 font-medium">Availability</h3>
              <div className="space-y-2">
                {availabilityOptions.map((availableOption) => (
                  <div key={availableOption} className="flex items-center">
                    <CheckboxField
                      key={availableOption}
                      id={`availableOption-${availableOption}`}
                      label={availableOption}
                      checked={selectedBrands.includes(availableOption)}
                      onCheckedChange={() => toggleBrands(availableOption)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Active Filters */}
            {(selectedBrands.length > 0 || availability.length > 0) && (
              <div className="border-t pt-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  {selectedBrands.map((series) => (
                    <span
                      key={series}
                      className="text-primary-hov rounded bg-red-100 px-2 py-1 text-xs"
                    >
                      {series}
                    </span>
                  ))}
                  {availability.map((price) => (
                    <span
                      key={price}
                      className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800"
                    >
                      {price}
                    </span>
                  ))}
                </div>
                <button
                  onClick={clearFilter}
                  className="text-primary hover:text-primary-hov text-sm"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
          <div className="md:col-span-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-6">
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
