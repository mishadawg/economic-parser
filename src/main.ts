import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/res/app/app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Парсеры данных')
    .setDescription('Всякий экономический хлам')
    .setVersion('0.0.1')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT || 3000, '0.0.0.0')
}
bootstrap()
