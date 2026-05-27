'use client';

import { motion } from 'framer-motion';
import { Invitation } from '@/lib/types';

const steps = (invitation: Invitation) => [
  'Someone has a message for you…',
  `📍 ${invitation.place}`,
  `🕒 ${new Date(invitation.scheduledAt).toLocaleString()}`,
  invitation.message,
];

export function RevealSequence({ invitation }: { invitation: Invitation }) {
  return (
    <div className="space-y-3">
      {steps(invitation).map((step, index) => (
        <motion.p
          key={step}
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: index * 0.5, duration: 0.45 }}
          className="text-zinc-100"
        >
          {step}
        </motion.p>
      ))}
    </div>
  );
}
