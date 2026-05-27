'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

export default function DashboardPage() {
  const { data: stats } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: api.getStats,
  });

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl p-6">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <p className="text-zinc-400">Total invitations</p>
          <p className="mt-2 text-3xl font-bold">{stats?.total ?? '—'}</p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <p className="text-zinc-400">Responses received</p>
          <p className="mt-2 text-3xl font-bold">{stats?.responded ?? '—'}</p>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <Link href="/dashboard/invitations/new" className="text-pink-300 underline">
          Create invitation
        </Link>
        <Link href="/dashboard/invitations" className="text-pink-300 underline">
          View history
        </Link>
      </div>
    </main>
  );
}
