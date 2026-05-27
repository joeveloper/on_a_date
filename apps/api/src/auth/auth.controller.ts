import { Body, Controller, Post } from '@nestjs/common';
import { Public } from '../common/decorators/public.decorator';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('magic-link')
  requestMagicLink(@Body() loginDto: LoginDto): {
    queued: true;
    email: string;
  } {
    return { queued: true, email: loginDto.email };
  }

  @Public()
  @Post('token')
  createToken(@Body() loginDto: LoginDto): { accessToken: string } {
    return this.authService.createToken('seed-user-id', loginDto.email);
  }
}
