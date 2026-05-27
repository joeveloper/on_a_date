'use client';

import { useMutation } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { AnimatedCard } from '@/components/invitation/animated-card';
import { CountdownTimer } from '@/components/invitation/countdown-timer';
import { ResponseButtons } from '@/components/invitation/response-buttons';
import { RevealSequence } from '@/components/invitation/reveal-sequence';
import { FloatingGradientBackground } from '@/components/layout/floating-gradient-background';
import { api } from '@/lib/api';
import { usePublicInvitation } from '@/hooks/use-public-invitation';

export default function InviteRevealPage() {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? '';
  const { data: invitation } = usePublicInvitation(slug);

  const respondMutation = useMutation({
    mutationFn: (response: 'YES' | 'MAYBE' | 'NO') => api.respondToInvite(slug, response),
    onSuccess: () => {
      router.push(`/response/${slug}`);
    },
  });

  if (!invitation) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <AnimatedCard>
          <p className="text-zinc-200">Loading reveal…</p>
        </AnimatedCard>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center px-6 py-12">
      <FloatingGradientBackground />
      <div className="relative w-full max-w-2xl space-y-5">
        <AnimatedCard>
          <RevealSequence invitation={invitation} />
          <div className="mt-4">
            <CountdownTimer scheduledAt={invitation.scheduledAt} />
          </div>
          <div className="mt-6">
            <ResponseButtons
              disabled={respondMutation.isPending}
              onRespond={(response) => respondMutation.mutate(response)}
            />
          </div>
        </AnimatedCard>
      </div>
    </main>
  );
}
