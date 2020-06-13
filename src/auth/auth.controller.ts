import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCrerdentialDto } from './dto/auth.credential';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentailDto: AuthCrerdentialDto,
  ): Promise<void> {
    return this.authService.signUp(authCredentailDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentailDto: AuthCrerdentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentailDto);
  }
}
