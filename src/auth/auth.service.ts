import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repositiory';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCrerdentialDto } from './dto/auth.credential';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  signUp(authCredentialDto: AuthCrerdentialDto): Promise<void> {
    return this.userRepository.signUp(authCredentialDto);
  }
}
