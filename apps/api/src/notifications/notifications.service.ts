import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  queueInvitationResponseNotification(
    senderId: string,
    invitationId: string,
  ): {
    queued: true;
    senderId: string;
    invitationId: string;
    channels: string[];
  } {
    return {
      queued: true,
      senderId,
      invitationId,
      channels: ['email', 'push', 'realtime'],
    };
  }
}
