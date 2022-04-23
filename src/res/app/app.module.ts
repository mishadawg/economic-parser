import { Module } from '@nestjs/common'
import { AppController } from '@/res/app/app.controller'
import { AppService } from '@/res/app/app.service'
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
