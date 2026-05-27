'use client';

import { useParams } from 'next/navigation';

export default function ResponseConfirmationPage() {
  const params = useParams<{ slug: string }>();
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-lg rounded-3xl border border-white/15 bg-black/35 p-8 text-center backdrop-blur">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Crushly</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Response sent</h1>
        <p className="mt-3 text-zinc-300">
          Thanks for answering this invitation. Your response has been delivered.
        </p>
        <p className="mt-4 text-xs text-zinc-500">Invite ID: {params.slug}</p>
      </div>
    </main>
  );
}
