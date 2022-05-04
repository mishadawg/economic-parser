import { Controller, Get } from '@nestjs/common'
import { AppService } from '@/res/app/app.service'
import { TradingEconomicsParser } from '@/lib/parser/trading-economics.parser'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('parsers')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(TradingEconomicsParser.controllerGetPath)
  async getHello(): Promise<any[]> {
    return this.appService.getHello()
  }
}
