import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  createToken(userId: string, email: string): { accessToken: string } {
    return {
      accessToken: this.jwtService.sign({ sub: userId, email }),
    };
  }
}
