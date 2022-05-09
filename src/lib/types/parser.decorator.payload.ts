export interface ParserDecoratorPayload {
  name: string
  url: string
  parse: (url: string) => any
  path: string
  schedule?: string
  tag: string
  preprocessing?: (...args: any) => any
  postprocessing?: (...args: any) => any
}
