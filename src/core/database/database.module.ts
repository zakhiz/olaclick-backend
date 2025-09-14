import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres' as const,
        host: configService.get('dbHost'),
        port: +configService.get('dbPort'),
        username: configService.get('dbUsername'),
        password: configService.get('dbPassword'),
        database: configService.get('dbDatabase'),
        autoLoadModels: true,
        logging: configService.get('nodeEnv') === 'development',
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
