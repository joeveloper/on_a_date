import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  getProfile(@Req() req: Request): {
    id: string;
    displayName: string;
    email: string;
  } {
    const userId = String(
      (req as Request & { user?: { sub?: string } }).user?.sub ?? 'anonymous',
    );
    return this.usersService.getProfile(userId);
  }
}
