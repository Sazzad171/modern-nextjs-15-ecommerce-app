'use client';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { VariationRadioProps } from './type';

/**
 * A reusable radio-style variation selector built with shadcn/ui.
 *
 * This component visually mimics button-style options
 * while maintaining proper radio group accessibility.
 *
 * @example
 * ```tsx
 * const options = [
 *   { label: "0.5m (1.6ft)", value: "0.5m" },
 *   { label: "1m (3.3ft)", value: "1m" },
 * ]
 *
 * <VariationRadio
 *   options={options}
 *   value={selected}
 *   onChange={setSelected}
 * />
 * ```
 */

export function VariationRadio({ options, value, onChange }: VariationRadioProps) {
  return (
    <RadioGroup value={value} onValueChange={onChange} className="flex flex-wrap gap-2">
      {options.map((option) => (
        <label
          key={option.value}
          className={cn(
            'cursor-pointer rounded-sm px-4 py-2 text-sm transition',
            'bg-primary/10 hover:bg-primary/20',
            value === option.value && 'bg-primary text-primary-foreground hover:bg-primary/80'
          )}
        >
          <RadioGroupItem value={option.value} className="sr-only" />
          {option.label}
        </label>
      ))}
    </RadioGroup>
  );
}
