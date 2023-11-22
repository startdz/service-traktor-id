import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './api/v1/account/account.module';
import { RoleController } from './api/v1/role/role.controller';

@Module({
  imports: [AccountModule],
  controllers: [AppController, RoleController],
  providers: [AppService],
})
export class AppModule {}
