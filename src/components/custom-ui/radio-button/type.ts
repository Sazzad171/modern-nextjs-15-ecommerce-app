import { Control, FieldValues, Path } from 'react-hook-form';

/**
 * Single radio option
 */
export type RadioOption = {
  value: string;
  label: React.ReactNode;
};

/**
 * Shared props
 */
type BaseProps = {
  /** Required id prefix (used for htmlFor) */
  id: string;

  /** Radio label (group label) */
  label?: React.ReactNode;

  /** Radio options */
  options: RadioOption[];

  className?: string;
  radioClassName?: string;
  labelClassName?: string;
};

/**
 * Controlled usage (useState / Zustand)
 */
type ControlledProps = BaseProps & {
  mode?: 'controlled';
  value?: string;
  onValueChange?: (value: string) => void;
};

/**
 * React Hook Form usage
 */
type RHFProps<T extends FieldValues> = BaseProps & {
  mode: 'rhf';
  name: Path<T>;
  control: Control<T>;
};

/**
 * Final props
 */
export type RadioFieldProps<T extends FieldValues> = ControlledProps | RHFProps<T>;
