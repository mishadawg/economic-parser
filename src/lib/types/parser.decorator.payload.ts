export interface ParserDecoratorPayload {
  name: string
  url: string
  parse: (url: string) => any
  path: string
  schedule?: string
  preprocessing?: (...args: any) => any
  postprocessing?: (...args: any) => any
}
