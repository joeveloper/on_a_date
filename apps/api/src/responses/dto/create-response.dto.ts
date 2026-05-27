import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { InvitationResponseType } from '../../common/enums/invitation-response.enum';

export class CreateResponseDto {
  @IsEnum(InvitationResponseType)
  response!: InvitationResponseType;

  @IsOptional()
  @IsString()
  @MaxLength(300)
  note?: string;
}
