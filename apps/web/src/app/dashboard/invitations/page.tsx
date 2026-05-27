'use client';

import { useQuery } from '@tanstack/react-query';
import { InvitationPreview } from '@/components/invitation/invitation-preview';
import { api } from '@/lib/api';

export default function InvitationHistoryPage() {
  const { data: invitations } = useQuery({
    queryKey: ['invitations'],
    queryFn: api.listInvitations,
  });

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl p-6">
      <h1 className="text-3xl font-semibold">Invite history</h1>
      <div className="mt-6 grid gap-4">
        {invitations?.map((invitation) => (
          <InvitationPreview key={invitation.id} invitation={invitation} />
        ))}
      </div>
    </main>
  );
}
