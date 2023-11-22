import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';

import { userProviders } from './accout.providers';
import { DatabaseModule } from 'src/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AccountController],
  providers: [AccountService, ...userProviders],
})
export class AccountModule {}
