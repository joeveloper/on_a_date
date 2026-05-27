import { Invitation } from '@/lib/types';

export function InvitationPreview({ invitation }: { invitation: Invitation }) {
  return (
    <div className="space-y-2 rounded-2xl border border-white/20 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Preview</p>
      <h3 className="text-lg font-semibold text-white">To {invitation.recipientName}</h3>
      <p className="text-zinc-300">{invitation.message}</p>
      <p className="text-sm text-zinc-400">
        {invitation.place} • {new Date(invitation.scheduledAt).toLocaleString()}
      </p>
    </div>
  );
}
