import { ParserDecorator } from '@/lib/decorator/parser.decorator'
import { AbstractParser } from '@/lib/abstract-parser'
import { parse } from '@/lib/processing/trading-economics.processing'

@ParserDecorator({
  schedule: '* * * * *',
  url: 'https://tradingeconomics.com/forecast/government-bond-10y',
  name: 'Trading Economics',
  path: 'trading-economics',
  parse,
})
export class TradingEconomicsParser extends AbstractParser {}
