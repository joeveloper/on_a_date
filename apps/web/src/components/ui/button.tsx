import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 disabled:pointer-events-none disabled:opacity-60',
          variant === 'default'
            ? 'bg-pink-500 text-white hover:bg-pink-400'
            : 'border border-white/30 bg-white/5 text-white hover:bg-white/10',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
