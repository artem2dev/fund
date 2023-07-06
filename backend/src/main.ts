import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { config } from './config/app.config';
import { join } from 'path';

const { PORT } = config;

async function bootstrap() {
  const logger = new Logger('SERVER');

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: true,
    credentials: true,
  });
  app.setGlobalPrefix('api');
  app.use(cookieParser());

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.useStaticAssets(join(__dirname, '..', 'media'), {
     prefix: '/api/'
  });

  await app.listen(PORT, () =>
    logger.log(`App successfully started on port ${PORT}`),
  );
}
bootstrap();
