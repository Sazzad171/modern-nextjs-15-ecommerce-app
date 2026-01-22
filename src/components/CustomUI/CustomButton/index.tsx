'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { BaseProps, CustomButtonProps } from './type';

export function CustomButton(props: CustomButtonProps) {
  const { loading, icon, iconClass, children } = props as BaseProps & {
    children?: React.ReactNode;
  };

  const content = (
    <>
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}

      {!loading && icon && <span className={cn('inline-flex', iconClass)}>{icon}</span>}

      {children}
    </>
  );

  // Link button
  if ('href' in props && props.href) {
    const { href, variant, size, className, target = '_self', disabled, ...rest } = props;

    if (disabled || loading) {
      return (
        <span
          className={cn(
            buttonVariants({ variant, size }),
            'pointer-events-none opacity-50',
            className
          )}
        >
          {content}
        </span>
      );
    }

    return (
      <Link
        href={href}
        target={target}
        className={cn(buttonVariants({ variant, size }), className)}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  // Regular button
  return (
    <Button {...props} disabled={props.disabled || loading}>
      {content}
    </Button>
  );
}
