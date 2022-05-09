import { ParserDecorator } from '@/lib/decorator/parser.decorator'
import { AbstractParser } from '@/lib/abstract-parser'
import { parseBonds, supplyParser } from '@/lib/processing/trading-economics.processing'

@ParserDecorator({
  schedule: '* * * * *',
  url: 'https://tradingeconomics.com/forecast/government-bond-10y',
  name: 'Trading Economics',
  path: 'trading-economics',
  parse: parseBonds,
})
export class TradingEconomicsParser extends AbstractParser {}

@ParserDecorator({
  schedule: '* * * * *',
  url: 'https://tradingeconomics.com/country-list/money-supply-m0',
  name: 'Trading Economics Money supply',
  path: 'trading-economics-money-supply',
  parse: supplyParser,
})
export class TradingEconomicsMoneySupplyM0Parser extends AbstractParser {}

@ParserDecorator({
  schedule: '* * * * *',
  url: 'https://tradingeconomics.com/country-list/money-supply-m1',
  name: 'Trading Economics Money supply',
  path: 'trading-economics-money-supply',
  parse: supplyParser,
})
export class TradingEconomicsMoneySupplyM1Parser extends AbstractParser {}

@ParserDecorator({
  schedule: '* * * * *',
  url: 'https://tradingeconomics.com/country-list/money-supply-m2',
  name: 'Trading Economics Money supply',
  path: 'trading-economics-money-supply',
  parse: supplyParser,
})
export class TradingEconomicsMoneySupplyM2Parser extends AbstractParser {}

@ParserDecorator({
  schedule: '* * * * *',
  url: 'https://tradingeconomics.com/country-list/money-supply-m3',
  name: 'Trading Economics Money supply',
  path: 'trading-economics-money-supply',
  parse: supplyParser,
})
export class TradingEconomicsMoneySupplyM3Parser extends AbstractParser {}
