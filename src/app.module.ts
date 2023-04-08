import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from 'nest-knexjs';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: {
          client: 'mysql2',
          version: '8.0.31',
          connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'password',
            database: 'insafee',
          },
        },
      }),
    }),
    UserModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}