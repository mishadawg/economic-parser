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
  async supplyM0(): Promise<Record<string, any>> {
    return TradingEconomicsMoneySupplyM0Parser.parse()
  }
  @Get(TradingEconomicsMoneySupplyM1Parser.controllerGetPath)
  async supplyM1(): Promise<Record<string, any>> {
    return TradingEconomicsMoneySupplyM1Parser.parse()
  }
  @Get(TradingEconomicsMoneySupplyM2Parser.controllerGetPath)
  async supplyM2(): Promise<Record<string, any>> {
    return TradingEconomicsMoneySupplyM2Parser.parse()
  }
  @Get(TradingEconomicsMoneySupplyM3Parser.controllerGetPath)
  async supplyM3(): Promise<Record<string, any>> {
    return TradingEconomicsMoneySupplyM3Parser.parse()
  }
}
