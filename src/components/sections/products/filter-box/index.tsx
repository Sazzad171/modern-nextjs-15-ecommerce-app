import { CheckboxField } from '@/components/custom-ui/checkbox';
import { PriceRange } from '@/components/custom-ui/price-range';
import { PriceRangeValue } from '@/components/custom-ui/price-range/type';
import { RadioField } from '@/components/custom-ui/radio-button';
import { useState } from 'react';

export default function ProductsFilterBox() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrands, setselectedBrands] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [price, setPrice] = useState<PriceRangeValue>({
    min: 1000,
    max: 50000,
  });

  // Simple filter options
  const categoryOptions = [
    { value: 'All', label: 'All' },
    { value: 'Laptop', label: 'Laptop' },
    { value: 'Monitor', label: 'Monitor' },
    { value: 'UPS', label: 'UPS' },
  ];
  const seriesOptions = ['Apple', 'Samsung', 'Lenovo'];
  const availabilityOptions = ['In-Stock', 'Pre Order', 'Up Coming', 'Stock Out'];

  // Toggle brands
  const toggleBrands = (series: string) => {
    setselectedBrands((prev) =>
      prev.includes(series) ? prev.filter((s) => s !== series) : [...prev, series]
    );
  };

  // Toggle price
  const toggleAvailability = (availableOption: string) => {
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
    <div className="rounded-xl bg-gray-100 p-5 md:col-span-2">
      <div className="mb-4">
        <h2 className="mb-4 text-lg font-bold">Filters</h2>
        <p className="text-sm text-gray-500">
          {selectedBrands.length + availability.length} active
        </p>
      </div>

      {/* Category filter */}
      <div className="mb-4">
        <h3 className="mb-3 font-medium">Category</h3>
        <div className="space-y-2">
          <RadioField
            id="category"
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            options={categoryOptions}
          />
        </div>
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
                checked={availability.includes(availableOption)}
                onCheckedChange={() => toggleAvailability(availableOption)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Price range slider */}
      <div>
        <PriceRange
          min={0}
          max={100000}
          step={1000}
          value={price}
          onChange={setPrice}
          currency="৳"
        />
      </div>

      {/* Active Filters */}
      {(selectedBrands.length > 0 || availability.length > 0) && (
        <div className="border-t pt-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {selectedBrands.map((series) => (
              <span key={series} className="text-primary-hov rounded bg-red-100 px-2 py-1 text-xs">
                {series}
              </span>
            ))}
            {availability.map((price) => (
              <span key={price} className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
                {price}
              </span>
            ))}
          </div>
          <button onClick={clearFilter} className="text-primary hover:text-primary-hov text-sm">
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
