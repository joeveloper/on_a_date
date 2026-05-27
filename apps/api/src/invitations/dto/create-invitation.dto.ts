import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { InvitationStatus } from '../../common/enums/invitation-status.enum';

export class CreateInvitationDto {
  @IsString()
  @MinLength(1)
  @MaxLength(80)
  recipientName!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(500)
  message!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(140)
  place!: string;

  @Type(() => Date)
  @IsDate()
  scheduledAt!: Date;

  @IsOptional()
  @IsString()
  themeId?: string;

  @IsOptional()
  @IsEnum(InvitationStatus)
  status?: InvitationStatus;
}
