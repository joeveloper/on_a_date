'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

export function AnimatedCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <Card>{children}</Card>
    </motion.div>
  );
}
