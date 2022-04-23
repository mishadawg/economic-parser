import { AbstractParser } from '@/lib/abstract-parser'
import cheerio from 'cheerio'
import Root = cheerio.Root

export class TradingEconomicsParser extends AbstractParser {
  _name = 'Trading Economics'
  _url: 'https://tradingeconomics.com/forecast/government-bond-10y'
  _schedule = '* * * * * *'

  grab(): Root {
    return cheerio.load('')
  }
  parse() {
    return 'OK'
  }
  _mapper(p0) {
    return 'OK'
  }
  run() {
    return this._mapper(this.parse())
  }
}
