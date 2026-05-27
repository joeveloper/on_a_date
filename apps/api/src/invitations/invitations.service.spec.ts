import { Invitation, InvitationStatus } from '@prisma/client';
import { InvitationsService } from './invitations.service';
import { PrismaService } from '../prisma/prisma.service';

describe('InvitationsService', () => {
  const createMock = jest.fn();
  const findManyMock = jest.fn();
  const findUniqueMock = jest.fn();
  const updateMock = jest.fn();
  const deleteMock = jest.fn();
  const invitationCountMock = jest.fn();
  const invitationResponseCountMock = jest.fn();

  const prismaMock = {
    invitation: {
      create: createMock,
      findMany: findManyMock,
      findUnique: findUniqueMock,
      update: updateMock,
      delete: deleteMock,
      count: invitationCountMock,
    },
    invitationResponse: {
      count: invitationResponseCountMock,
    },
  } as unknown as PrismaService;

  const service = new InvitationsService(prismaMock);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates a published invitation by default', async () => {
    const createdInvitation: Invitation = {
      id: 'inv_1',
      uniqueSlug: 'abc123',
      senderId: 'sender_1',
      recipientName: 'Sky',
      message: "Let's go out?",
      place: 'City lights café',
      scheduledAt: new Date('2026-06-15T19:00:00.000Z'),
      themeId: null,
      status: InvitationStatus.PUBLISHED,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    createMock.mockResolvedValue(createdInvitation);

    const result: Invitation = await service.create('sender_1', {
      recipientName: 'Sky',
      message: "Let's go out?",
      place: 'City lights café',
      scheduledAt: new Date('2026-06-15T19:00:00.000Z'),
    });

    expect(result.status).toBe(InvitationStatus.PUBLISHED);
    expect(createMock).toHaveBeenCalledTimes(1);
  });

  it('returns dashboard stats', async () => {
    invitationCountMock.mockResolvedValue(6);
    invitationResponseCountMock.mockResolvedValue(4);

    const stats: { total: number; responded: number } =
      await service.stats('sender_1');

    expect(stats).toEqual({ total: 6, responded: 4 });
  });
});
