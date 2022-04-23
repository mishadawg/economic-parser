import { AbstractParser } from '@/lib/abstract-parser'
import cheerio from 'cheerio'
import axios, { AxiosPromise } from 'axios'

const tableMapper = (table: any[]) => {
  const rows = table
    .filter((td) => td.data)
    .map((td) => ({
      row: td.row,
      column: td.column,
      data: td.data,
    }))
    .reduce((accum, currentValue) => {
      const fieldName = currentValue.row
      const clearValue = {
        column: currentValue.column,
        data: currentValue.data,
      }
      return accum[fieldName]
        ? { ...accum, [fieldName]: [...accum[fieldName], clearValue] }
        : typeof fieldName !== 'undefined'
        ? { ...accum, [currentValue.row]: [clearValue] }
        : accum
    }, {})

  const result = Object.values(rows).map((row: any[]) => rowMapper(row))
  return result
}

const rowMapper = (row: any[]) => {
  const getData = (column) => {
    return row.find((c) => c.column === column)?.data || null
  }
  return {
    name: getData(1),
    yield: parseFloat(getData(2)),
    q222: parseFloat(getData(4)),
    q322: parseFloat(getData(5)),
    q422: parseFloat(getData(6)),
    q123: parseFloat(getData(7)),
  }
}
export class TradingEconomicsParser extends AbstractParser {
  _name = 'Trading Economics'
  _url = 'https://tradingeconomics.com/forecast/government-bond-10y'
  _schedule = '* * * * * *'

  grab(): Promise<AxiosPromise> {
    return axios.get(this._url)
  }
  async parse() {
    const result = await this.grab()
    const parserObj = cheerio.load(result.data)

    const parseData = []
    parserObj('#aspnetForm .table-responsive').each((table, tableData) => {
      cheerio(tableData)
        .find('tr[data-symbol]')
        .each((row, element) => {
          cheerio(element)
            .find('td')
            .each((column, element1) => {
              parseData.push({
                table,
                row,
                column,
                data: cheerio(element1).text().replace(/\n/g, '').trim(),
              })
            })
        })
    })

    return this._mapper(parseData)
  }

  _mapper(parseData: any[]): any {
    return {
      top: tableMapper(parseData.filter((d) => d.table === 0)),
      europe: tableMapper(parseData.filter((d) => d.table === 1)),
      america: tableMapper(parseData.filter((d) => d.table === 2)),
      asia: tableMapper(parseData.filter((d) => d.table === 3)),
      australia: tableMapper(parseData.filter((d) => d.table === 4)),
      africa: tableMapper(parseData.filter((d) => d.table === 5)),
    }
  }
}
