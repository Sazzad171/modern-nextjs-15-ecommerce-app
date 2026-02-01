'use client';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Controller, FieldValues } from 'react-hook-form';
import { RadioFieldProps } from './type';

/**
 * RadioField
 *
 * Supports:
 * - Controlled usage (useState / Zustand)
 * - React Hook Form integration
 *
 * Enforces:
 * - RHF mode requires `name` + `control`
 * - htmlFor + id always valid
 */

/**
 * Usage example - react hook form
 * 
  <RadioField<FormValues>
    mode="rhf"
    id="gender"
    name="gender"
    label="Select Gender"
    control={control}
    options={[
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ]}
  />
 */

/**
 * Usage example - react hook form
 * 
  <RadioField
    id="gender"
    label="Gender"
    value={gender}
    onValueChange={setGender}
    options={[
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ]}
  />
 */

export function RadioField<T extends FieldValues>(props: RadioFieldProps<T>) {
  const { id, label, options, className, radioClassName, labelClassName } = props;

  /* ------------------------- React Hook Form mode ------------------------- */
  if (props.mode === 'rhf') {
    return (
      <div className={className}>
        {label && <p className="mb-2 font-medium">{label}</p>}

        <Controller
          name={props.name}
          control={props.control}
          render={({ field }) => (
            <RadioGroup value={field.value} onValueChange={field.onChange} className="space-y-2">
              {options.map((opt) => (
                <div key={opt.value} className="flex items-center gap-2">
                  <RadioGroupItem
                    id={`${id}-${opt.value}`}
                    value={opt.value}
                    className={radioClassName}
                  />
                  <Label htmlFor={`${id}-${opt.value}`} className={labelClassName}>
                    {opt.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}
        />
      </div>
    );
  }

  /* --------------------------- Controlled mode ---------------------------- */
  return (
    <div className={className}>
      {label && <p className="mb-2 font-medium">{label}</p>}

      <RadioGroup value={props.value} onValueChange={props.onValueChange} className="space-y-2">
        {options.map((opt) => (
          <div key={opt.value} className="flex items-center gap-2">
            <RadioGroupItem
              id={`${id}-${opt.value}`}
              value={opt.value}
              className={radioClassName}
            />
            <Label htmlFor={`${id}-${opt.value}`} className={labelClassName}>
              {opt.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
