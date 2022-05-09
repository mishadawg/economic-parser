import { Controller, Get } from '@nestjs/common'
import {
  TradingEconomicsMoneySupplyM0Parser,
  TradingEconomicsMoneySupplyM1Parser,
  TradingEconomicsMoneySupplyM2Parser,
  TradingEconomicsMoneySupplyM3Parser,
  TradingEconomicsParser,
} from '@/lib/parser/trading-economics.parser'
import { CompaniesMarketCapParser } from '@/lib/parser/companiesmarketcap.parser'

import { ApiTags } from '@nestjs/swagger'

@ApiTags('parsers')
@Controller()
export class AppController {
  @Get(TradingEconomicsParser.controllerGetPath)
  async getHello(): Promise<Record<string, any>> {
    return TradingEconomicsParser.parse()
  }
  @Get(CompaniesMarketCapParser.controllerGetPath)
  async cap(): Promise<Record<string, any>> {
    return CompaniesMarketCapParser.parse()
  }
  @Get(TradingEconomicsMoneySupplyM0Parser.controllerGetPath)
  async supply(): Promise<Record<string, any>> {
    return {
      m0: await TradingEconomicsMoneySupplyM0Parser.parse(),
      m1: await TradingEconomicsMoneySupplyM1Parser.parse(),
      m2: await TradingEconomicsMoneySupplyM2Parser.parse(),
      m3: await TradingEconomicsMoneySupplyM3Parser.parse(),
    }
  }
}
