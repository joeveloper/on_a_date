'use client';

import { motion } from 'framer-motion';

export function FloatingGradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-16 left-0 h-56 w-56 rounded-full bg-fuchsia-600/30 blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, 24, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-600/30 blur-3xl"
        animate={{ x: [0, -30, 10, 0], y: [0, -20, 16, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
    </div>
  );
}
