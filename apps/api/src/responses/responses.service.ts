import { Injectable } from '@nestjs/common';
import { InvitationResponse } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateResponseDto } from './dto/create-response.dto';

@Injectable()
export class ResponsesService {
  constructor(private readonly prisma: PrismaService) {}

  async respond(
    invitationSlug: string,
    dto: CreateResponseDto,
  ): Promise<InvitationResponse> {
    const invitation = await this.prisma.invitation.findUniqueOrThrow({
      where: { uniqueSlug: invitationSlug },
    });

    return this.prisma.invitationResponse.upsert({
      where: { invitationId: invitation.id },
      update: { response: dto.response, note: dto.note },
      create: {
        invitationId: invitation.id,
        response: dto.response,
        note: dto.note,
      },
    });
  }
}
