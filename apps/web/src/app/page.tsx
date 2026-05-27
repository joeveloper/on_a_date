import Link from 'next/link';
import { FloatingGradientBackground } from '@/components/layout/floating-gradient-background';
import { AnimatedCard } from '@/components/invitation/animated-card';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center p-6">
      <FloatingGradientBackground />
      <div className="relative w-full max-w-3xl">
        <AnimatedCard>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Crushly</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Ask them out with a cinematic reveal link.
          </h1>
          <p className="mt-3 text-zinc-300">
            Create emotional, viral, mobile-first invitations with suspense animations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/dashboard/invitations/new">
              <Button>Create invitation</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline">Open dashboard</Button>
            </Link>
          </div>
        </AnimatedCard>
      </div>
    </main>
  );
}
