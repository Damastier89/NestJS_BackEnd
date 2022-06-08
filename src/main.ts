import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  // swagger config
  const config = new DocumentBuilder()
    .setTitle('BACK-END on NestJS')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('Damastier')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  // Для открытия в браузере
  SwaggerModule.setup('/api/docs', app, document);


  app.enableCors();
  await app.listen(PORT, () => console.log(`Server started on port : ${PORT}`));

}
start();
