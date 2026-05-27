'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ThemeSelector } from '@/components/invitation/theme-selector';
import { Button } from '@/components/ui/button';
import { api } from '@/lib/api';

export default function CreateInvitationPage() {
  const [selectedThemeId, setSelectedThemeId] = useState<string>();
  const { data: themes } = useQuery({ queryKey: ['themes'], queryFn: api.listThemes });

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl p-6">
      <h1 className="text-3xl font-semibold">Create invitation</h1>
      <form className="mt-6 space-y-4 rounded-2xl border border-white/15 bg-white/5 p-5">
        <input
          className="w-full rounded-xl border border-white/15 bg-transparent px-3 py-2"
          placeholder="Recipient name"
        />
        <textarea
          className="w-full rounded-xl border border-white/15 bg-transparent px-3 py-2"
          placeholder="Custom message"
          rows={4}
        />
        <input
          className="w-full rounded-xl border border-white/15 bg-transparent px-3 py-2"
          placeholder="Location"
        />
        <input
          type="datetime-local"
          className="w-full rounded-xl border border-white/15 bg-transparent px-3 py-2"
        />
        {themes ? (
          <ThemeSelector
            themes={themes}
            selectedThemeId={selectedThemeId}
            onSelect={setSelectedThemeId}
          />
        ) : null}
        <Button type="button">Create shareable link</Button>
      </form>
    </main>
  );
}
