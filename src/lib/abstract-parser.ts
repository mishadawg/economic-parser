import { ParserInterface } from '@/types/parser.interface'

export abstract class AbstractParser implements ParserInterface {
  abstract _mapper(parseData: any[]): any

  abstract _url: string
  abstract _name: string
}
