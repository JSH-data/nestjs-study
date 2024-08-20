import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // class Validator 실행을 위함
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
