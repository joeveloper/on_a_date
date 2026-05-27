import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getProfile(userId: string): {
    id: string;
    displayName: string;
    email: string;
  } {
    return {
      id: userId,
      displayName: 'Crushly User',
      email: 'user@crushly.app',
    };
  }
}
