'use client';

import { useEffect, useMemo, useState } from 'react';

export function CountdownTimer({ scheduledAt }: { scheduledAt: string }) {
  const target = useMemo(() => new Date(scheduledAt).getTime(), [scheduledAt]);
  const [now, setNow] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const hours = Math.floor(diff / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);

  return (
    <p className="text-sm text-zinc-400">
      Countdown: {hours}h {minutes}m
    </p>
  );
}
