import { ParserInterface } from '@/types/parser.interface'

export abstract class AbstractParser implements ParserInterface {
  abstract _mapper(p0)
  abstract _url: string
  abstract _name: string
}
