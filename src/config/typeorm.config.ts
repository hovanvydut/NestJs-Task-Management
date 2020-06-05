import { TypeOrmModule } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModule = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 123456,
  database: 'NestJs_Task_Management',
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
  synchronize: true,
};
