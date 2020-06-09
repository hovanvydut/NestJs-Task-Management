import { User } from './user.entity';
import { Repository, EntityRepository } from 'typeorm';
import { AuthCrerdentialDto } from './dto/auth.credential';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentailDto: AuthCrerdentialDto): Promise<void> {
    const { username, password } = authCredentailDto;

    const user = new User();
    user.username = username;
    user.password = password;
    await user.save();
  }
}
