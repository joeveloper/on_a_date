export enum ResponseChoice {
  YES = 'YES',
  MAYBE = 'MAYBE',
  NO = 'NO',
}

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

export interface InvitationResponse {
  id: string;
  invitationId: string;
  response: ResponseChoice;
  note?: string | null;
}
