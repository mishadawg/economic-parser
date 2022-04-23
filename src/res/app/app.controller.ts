import { Controller, Get } from '@nestjs/common'
import { AppService } from '@/res/app/app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any[]> {
    return this.appService.getHello()
  }
}
