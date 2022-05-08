import { ParserDecorator } from '@/lib/decorator/parser.decorator'
import { AbstractParser } from '@/lib/abstract-parser'
import { parse } from '@/lib/processing/companiesmarketcup.processing'

@ParserDecorator({
  schedule: '* * * * *',
  url: 'https://companiesmarketcap.com/canada/largest-companies-in-canada-by-market-cap/',
  name: 'Companies Market Cap',
  path: 'companies-market-cap',
  parse,
})
export class CompaniesMarketCapParser extends AbstractParser {}
