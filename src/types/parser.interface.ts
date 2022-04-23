export interface ParserInterface {
  _url: string
  _mapper: (parseData: any[]) => any
  _name: string
}
