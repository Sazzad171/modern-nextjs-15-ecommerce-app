import { Button, buttonVariants } from '@/components/ui/button';
import { VariantProps } from 'class-variance-authority';

export type BaseProps = {
  loading?: boolean;
  icon?: React.ReactNode;
  iconClass?: string;
};

export type ButtonProps = BaseProps &
  React.ComponentProps<typeof Button> & {
    href?: undefined;
  };

export type LinkProps = BaseProps &
  VariantProps<typeof buttonVariants> & {
    href: string;
    className?: string;
    target?: '_self' | '_blank';
    disabled?: boolean;
    children?: React.ReactNode;
  };

export type CustomButtonProps = ButtonProps | LinkProps;
