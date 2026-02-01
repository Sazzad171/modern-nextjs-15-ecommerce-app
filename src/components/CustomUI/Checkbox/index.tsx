'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Controller, FieldValues } from 'react-hook-form';
import { CheckboxFieldProps } from './type';
/**
 * CheckboxField
 *
 * Supports:
 * - Controlled usage (useState / Zustand)
 * - React Hook Form integration (boolean fields)
 *
 * Enforces:
 * - id + htmlFor always required
 * - RHF mode requires `name` and `control`
 */

/*
  Usage Example (Controlled): 
  <CheckboxField<FormValues>
    mode="rhf"
    id="terms"
    name="terms"
    label="Accept terms & conditions"
    control={control}
  />

  (Uncontrolled):
  <CheckboxField
    id="newsletter"
    label="Subscribe to newsletter"
    checked={checked}
    onCheckedChange={setChecked}
  />
*/

export function CheckboxField<T extends FieldValues>(props: CheckboxFieldProps<T>) {
  const { id, label, className, checkboxClassName, labelClassName } = props;

  const wrapperClass = `flex items-center gap-2 ${className ?? ''}`;

  /* ------------------------- React Hook Form mode ------------------------- */
  if (props.mode === 'rhf') {
    return (
      <div className={wrapperClass}>
        <Controller
          name={props.name}
          control={props.control}
          render={({ field }) => (
            <Checkbox
              id={id}
              checked={!!field.value}
              onCheckedChange={(checked) => field.onChange(checked === true)}
              className={cn(checkboxClassName, 'border-gray-400 bg-white')}
            />
          )}
        />
        <Label htmlFor={id} className={cn(labelClassName, 'font-medium')}>
          {label}
        </Label>
      </div>
    );
  }

  /* --------------------------- Controlled mode ---------------------------- */
  return (
    <div className={wrapperClass}>
      <Checkbox
        id={id}
        checked={props.checked}
        onCheckedChange={(checked) => props.onCheckedChange?.(checked === true)}
        className={cn(checkboxClassName, 'border-gray-400 bg-white')}
      />
      <Label htmlFor={id} className={cn(labelClassName, 'font-normal')}>
        {label}
      </Label>
    </div>
  );
}
