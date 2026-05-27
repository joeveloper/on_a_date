import { InvitationResponseType } from '../common/enums/invitation-response.enum';
import { ResponsesService } from './responses.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ResponsesService', () => {
  const findUniqueOrThrowMock = jest.fn();
  const upsertMock = jest.fn();

  const prismaMock = {
    invitation: {
      findUniqueOrThrow: findUniqueOrThrowMock,
    },
    invitationResponse: {
      upsert: upsertMock,
    },
  } as unknown as PrismaService;

  const service = new ResponsesService(prismaMock);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('upserts invitation response by slug', async () => {
    findUniqueOrThrowMock.mockResolvedValue({
      id: 'inv_1',
    });
    upsertMock.mockResolvedValue({
      id: 'resp_1',
      invitationId: 'inv_1',
      response: InvitationResponseType.YES,
      note: 'Absolutely ❤️',
    });

    const result = await service.respond('slug-123', {
      response: InvitationResponseType.YES,
      note: 'Absolutely ❤️',
    });

    expect(findUniqueOrThrowMock).toHaveBeenCalledWith({
      where: { uniqueSlug: 'slug-123' },
    });
    expect(upsertMock).toHaveBeenCalledTimes(1);
    expect(result.response).toBe(InvitationResponseType.YES);
  });
});
