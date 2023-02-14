import { ParserDecorator } from '@/lib/decorator/parser.decorator'
import { AbstractParser } from '@/lib/abstract-parser'
import { parseBonds, supplyParser, interestParser } from '@/lib/processing/trading-economics.processing'

@ParserDecorator({
  schedule: '* * * * *',
  url: 'https://tradingeconomics.com/forecast/government-bond-10y',
  name: 'Trading Economics',
  path: 'trading-economics',
  parse: parseBonds,
  tag: 'tradingeconomics.com',
})
export class TradingEconomicsParser extends AbstractParser {}

@ParserDecorator({
  schedule: '* * * * *',
  url: 'https://tradingeconomics.com/country-list/money-supply-m0',
  name: 'Trading Economics Money supply',
  path: 'trading-economics-money-supply',
  parse: supplyParser,
  tag: 'tradingeconomics.com',
})
export class TradingEconomicsMoneySupplyM0Parser extends AbstractParser {}

@ParserDecorator({
  schedule: '* * * * *',
  url: 'https://tradingeconomics.com/country-list/money-supply-m1',
  name: 'Trading Economics Money supply',
  path: 'trading-economics-money-supply',
  parse: supplyParser,
  tag: 'tradingeconomics.com',
})
export class TradingEconomicsMoneySupplyM1Parser extends AbstractParser {}

@ParserDecorator({
  schedule: '* * * * *',
  url: 'https://tradingeconomics.com/country-list/money-supply-m2',
  name: 'Trading Economics Money supply',
  path: 'trading-economics-money-supply',
  parse: supplyParser,
  tag: 'tradingeconomics.com',
})
export class TradingEconomicsMoneySupplyM2Parser extends AbstractParser {}

@ParserDecorator({
  schedule: '* * * * *',
  url: 'https://tradingeconomics.com/country-list/money-supply-m3',
  name: 'Trading Economics Money supply',
  path: 'trading-economics-money-supply',
  parse: supplyParser,
  tag: 'tradingeconomics.com',
})
export class TradingEconomicsMoneySupplyM3Parser extends AbstractParser {}

@ParserDecorator({
  schedule: '* * * * *',
  url: 'https://tradingeconomics.com/country-list/interest-rate?continent=world',
  name: 'Trading Economics Interest Rate Continent World',
  path: 'trading-economics-interest-rate-continent-world',
  parse: interestParser,
  tag: 'tradingeconomics.com',
})
export class TradingEconomicsInterestParser extends AbstractParser {}
