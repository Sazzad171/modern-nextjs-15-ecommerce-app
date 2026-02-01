import { Control, FieldValues, Path } from 'react-hook-form';

/**
 * Shared props
 */
type BaseProps = {
  /** Required id – also used by label htmlFor */
  id: string;
  /** Label text / node */
  label: React.ReactNode;
  className?: string;
  checkboxClassName?: string;
  labelClassName?: string;
};

/**
 * Controlled checkbox (useState / Zustand)
 */
type ControlledProps = BaseProps & {
  mode?: 'controlled';
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

/**
 * React Hook Form checkbox
 */
type RHFProps<T extends FieldValues> = BaseProps & {
  mode: 'rhf';
  name: Path<T>;
  control: Control<T>;
};

/**
 * Final props
 */
export type CheckboxFieldProps<T extends FieldValues> = ControlledProps | RHFProps<T>;
