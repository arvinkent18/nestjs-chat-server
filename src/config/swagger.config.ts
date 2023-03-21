import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Nest.js Chat API')
  .setDescription('A simple chat application built with Nest.js')
  .setVersion('1.0')
  .addTag('chat')
  .build();
