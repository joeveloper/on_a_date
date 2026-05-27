'use client';

import { Theme } from '@/lib/types';

export function ThemeSelector({
  themes,
  selectedThemeId,
  onSelect,
}: {
  themes: Theme[];
  selectedThemeId?: string;
  onSelect: (themeId: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {themes.map((theme) => (
        <button
          key={theme.id}
          type="button"
          onClick={() => onSelect(theme.id)}
          className={`rounded-2xl border p-3 text-left transition ${
            selectedThemeId === theme.id
              ? 'border-pink-400 bg-pink-500/20'
              : 'border-white/15 bg-white/5 hover:bg-white/10'
          }`}
        >
          <p className="font-medium text-white">{theme.name}</p>
          <p className="text-xs text-zinc-400">
            {theme.gradientFrom} → {theme.gradientTo}
          </p>
        </button>
      ))}
    </div>
  );
}
