import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/app.config';
import * as cookieParser from 'cookie-parser';

const { PORT } = config;

async function bootstrap() {
  const logger = new Logger('SERVER');

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    credentials: true,
  });

  app.use(cookieParser());

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(PORT, () => logger.log(`App successfully started on port ${PORT}`));
}
bootstrap();
