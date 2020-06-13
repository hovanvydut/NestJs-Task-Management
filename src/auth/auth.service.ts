import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repositiory';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCrerdentialDto } from './dto/auth.credential';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './dto/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialDto: AuthCrerdentialDto): Promise<void> {
    return this.userRepository.signUp(authCredentialDto);
  }

  async signIn(
    authCredentialDto: AuthCrerdentialDto,
  ): Promise<{ accessToken: string }> {
    const username = await this.userRepository.validateUserPassword(
      authCredentialDto,
    );

    if (!username) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken };
  }
}
