import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';
import { ApiModule } from './api/api.module';

@Module({
  imports: [AuthModule, UsersModule, ApiModule],
  controllers: [AppController, UsersController, ApiController],
  providers: [AppService, UsersService, ApiService],
})
export class AppModule {}
