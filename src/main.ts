import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //Global prefix so all routes are /api/*
  app.setGlobalPrefix('api');

  // Global validation - DTOs will auto-validate on everyd request
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              //strip uknown properties
      forbidNonWhitelisted: true,   //throw if extra properties sent
      transform: true,              // auto-transform types (string -> number)
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Swagger config
  const config =  new DocumentBuilder()
    .setTitle('Resume Analyzer API')
    .setDescription(
      'AI-powered resume analysis, job matching, and cover letter generation.',
    )
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Server: http://localhost:${port}/api`);
  console.log(`📖 Swagger: http://localhost:${port}/api/docs`);
}
bootstrap();
