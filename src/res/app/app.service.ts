import { Injectable } from '@nestjs/common'
import { TradingEconomicsParser } from '@/lib/trading-economics-parser'

@Injectable()
export class AppService {
  async getHello(): Promise<any[]> {
    const parser = new TradingEconomicsParser()
    return await parser.parse()
  }
}
