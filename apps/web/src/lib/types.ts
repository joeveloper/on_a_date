export type ResponseType = 'YES' | 'MAYBE' | 'NO';

export interface Theme {
  id: string;
  name: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface Invitation {
  id: string;
  uniqueSlug: string;
  recipientName: string;
  message: string;
  place: string;
  scheduledAt: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  theme?: Theme | null;
}

export interface DashboardStats {
  total: number;
  responded: number;
}
