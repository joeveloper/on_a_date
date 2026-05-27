import { Injectable } from '@nestjs/common';
import { Invitation, InvitationStatus } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';

@Injectable()
export class InvitationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    senderId: string,
    dto: CreateInvitationDto,
  ): Promise<Invitation> {
    const uniqueSlug = randomUUID();
    return this.prisma.invitation.create({
      data: {
        uniqueSlug,
        senderId,
        recipientName: dto.recipientName,
        message: dto.message,
        place: dto.place,
        scheduledAt: dto.scheduledAt,
        themeId: dto.themeId,
        status: dto.status ?? InvitationStatus.PUBLISHED,
      },
    });
  }

  async getPublicInvitation(uniqueSlug: string): Promise<Invitation | null> {
    return this.prisma.invitation.findUnique({
      where: { uniqueSlug },
    });
  }

  async listBySender(senderId: string): Promise<Invitation[]> {
    return this.prisma.invitation.findMany({
      where: { senderId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateById(
    invitationId: string,
    dto: UpdateInvitationDto,
  ): Promise<Invitation> {
    return this.prisma.invitation.update({
      where: { id: invitationId },
      data: dto,
    });
  }

  async deleteById(invitationId: string): Promise<Invitation> {
    return this.prisma.invitation.delete({ where: { id: invitationId } });
  }

  async stats(senderId: string): Promise<{ total: number; responded: number }> {
    const [total, responded] = await Promise.all([
      this.prisma.invitation.count({ where: { senderId } }),
      this.prisma.invitationResponse.count({
        where: { invitation: { senderId } },
      }),
    ]);

    return { total, responded };
  }
}
