import { Global, Module } from '@nestjs/common';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';

@Global()
@Module({
  imports: [AppConfigModule, DatabaseModule],
  controllers: [],
  providers: [],
  exports: [AppConfigModule, DatabaseModule],
})
export class CoreModule {}
