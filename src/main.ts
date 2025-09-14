import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      forbidUnknownValues: true,
      skipMissingProperties: false,
      skipNullProperties: false,
      skipUndefinedProperties: false,
    }),
  );

  app.setGlobalPrefix('api-olaclick/v1');

  const configurationService = app.get(ConfigService);

  const { port } = {
    port: configurationService.get('port'),
  };

  await app.listen(port);
  console.info(`Application is running on: ${port}`);
}
bootstrap();
