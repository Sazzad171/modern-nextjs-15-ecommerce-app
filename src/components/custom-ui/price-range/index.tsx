'use client';

import { Slider } from '@/components/ui/slider';
import { PriceRangeProps } from './type';

/**
 * A reusable price range slider component built with shadcn/ui.
 *
 * This component is fully controlled and ideal for
 * product filtering, search filters, and e-commerce use cases.
 *
 * @example
 * ```tsx
 * <PriceRange
 *   min={0}
 *   max={100000}
 *   value={{ min: 1000, max: 50000 }}
 *   onChange={setPrice}
 * />
 * ```
 */

export function PriceRange({
  min,
  max,
  step = 500,
  value,
  onChange,
  currency = '৳',
  className,
}: PriceRangeProps) {
  return (
    <div className={`w-full space-y-3 ${className ?? ''}`}>
      <div className="flex justify-between text-sm font-medium">
        <span>
          {currency} {value.min.toLocaleString()}
        </span>
        <span>
          {currency} {value.max.toLocaleString()}
        </span>
      </div>

      <Slider
        min={min}
        max={max}
        step={step}
        value={[value.min, value.max]}
        onValueChange={(v) => onChange({ min: v[0], max: v[1] })}
      />
    </div>
  );
}
