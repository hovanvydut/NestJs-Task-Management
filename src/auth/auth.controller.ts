import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCrerdentialDto } from './dto/auth.credential';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signUp')
  signUp(
    @Body(ValidationPipe) authCredentailDto: AuthCrerdentialDto,
  ): Promise<void> {
    return this.authService.signUp(authCredentailDto);
  }
}
