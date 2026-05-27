import { DashboardStats, Invitation, ResponseType, Theme } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api/v1';

async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`API request failed with ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const api = {
  listThemes: () => apiRequest<Theme[]>('/themes'),
  listInvitations: () => apiRequest<Invitation[]>('/invitations'),
  getStats: () => apiRequest<DashboardStats>('/invitations/stats'),
  getPublicInvite: (slug: string) =>
    apiRequest<Invitation | null>(`/invitations/public/${slug}`),
  respondToInvite: (slug: string, response: ResponseType) =>
    apiRequest(`/responses/${slug}`, {
      method: 'POST',
      body: JSON.stringify({ response }),
    }),
};
