'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

export function usePublicInvitation(slug: string) {
  return useQuery({
    queryKey: ['public-invitation', slug],
    queryFn: () => api.getPublicInvite(slug),
    enabled: Boolean(slug),
  });
}
