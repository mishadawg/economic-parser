import { ParserInterface } from '@/types/parser.interface'
import { Constructor } from '@/lib/types/constructor.type'
import { ParserDecoratorPayload } from '@/lib/types/parser.decorator.payload'

export function ParserDecorator(params: ParserDecoratorPayload) {
  return function <T extends Constructor>(constructor: T) {
    return class extends constructor implements ParserInterface {
      _name = params.name
      _url = params.url
      _schedule = params.schedule

      public static parse() {
        return params.parse(params.url)
      }

      public static controllerGetPath = params.path
    }
  }
}
