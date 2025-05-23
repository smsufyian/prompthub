import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Strip properties that do not have any decorators
    transform: true, // Transform payloads to be objects typed according to their DTO classes
    forbidNonWhitelisted: true, // Throw errors if non-whitelisted properties are present
  }));

  const config = new DocumentBuilder()
    .setTitle('PromptHub API')
    .setDescription('API documentation for the PromptHub platform')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
