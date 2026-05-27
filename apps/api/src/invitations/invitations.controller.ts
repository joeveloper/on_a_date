import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { Public } from '../common/decorators/public.decorator';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';
import { InvitationsService } from './invitations.service';

@Controller('invitations')
export class InvitationsController {
  constructor(private readonly invitationsService: InvitationsService) {}

  private getUserSub(req: Request): string {
    return String(
      (req as Request & { user?: { sub?: string } }).user?.sub ??
        'seed-user-id',
    );
  }

  @Post()
  create(@Req() req: Request, @Body() dto: CreateInvitationDto) {
    const senderId = this.getUserSub(req);
    return this.invitationsService.create(senderId, dto);
  }

  @Public()
  @Get('public/:slug')
  getPublicInvitation(@Param('slug') slug: string) {
    return this.invitationsService.getPublicInvitation(slug);
  }

  @Get()
  listOwnInvitations(@Req() req: Request) {
    const senderId = this.getUserSub(req);
    return this.invitationsService.listBySender(senderId);
  }

  @Get('stats')
  dashboardStats(@Req() req: Request) {
    const senderId = this.getUserSub(req);
    return this.invitationsService.stats(senderId);
  }

  @Patch(':id')
  updateInvitation(
    @Param('id') invitationId: string,
    @Body() dto: UpdateInvitationDto,
  ) {
    return this.invitationsService.updateById(invitationId, dto);
  }

  @Delete(':id')
  deleteInvitation(@Param('id') invitationId: string) {
    return this.invitationsService.deleteById(invitationId);
  }
}
