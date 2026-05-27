import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-white/15 bg-black/35 p-6 backdrop-blur-xl shadow-2xl shadow-black/30',
        className,
      )}
    >
      {children}
    </div>
  );
}
