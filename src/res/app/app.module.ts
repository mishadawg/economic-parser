import { Module } from '@nestjs/common'
import { AppController } from '@/res/app/app.controller'
@Module({
  imports: [],
  controllers: [AppController],
})
export class AppModule {}
