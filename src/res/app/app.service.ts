import { Injectable } from '@nestjs/common'
import { TradingEconomicsParser } from '@/lib/parser/trading-economics.parser'

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    return TradingEconomicsParser.parse()
  }
}
