import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './envConfig/configuration.environment';
import { validationSchema } from './schema/validation.schema.environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [EnvConfiguration],
      validationSchema: validationSchema,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [ConfigModule],
})
export class AppConfigModule {}
