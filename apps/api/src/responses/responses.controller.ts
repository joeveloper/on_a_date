import { Body, Controller, Param, Post } from '@nestjs/common';
import { Public } from '../common/decorators/public.decorator';
import { CreateResponseDto } from './dto/create-response.dto';
import { ResponsesService } from './responses.service';

@Controller('responses')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  @Public()
  @Post(':slug')
  respond(
    @Param('slug') invitationSlug: string,
    @Body() dto: CreateResponseDto,
  ) {
    return this.responsesService.respond(invitationSlug, dto);
  }
}
