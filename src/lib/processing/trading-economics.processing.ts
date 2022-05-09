import axios, { AxiosPromise } from 'axios'
import cheerio from 'cheerio'

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

  return Object.values(rows).map((row: any[]) => rowMapper(row))
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
const mapper = (parseData: any[]): any => {
  return {
    top: tableMapper(parseData.filter((d) => d.table === 0)),
    europe: tableMapper(parseData.filter((d) => d.table === 1)),
    america: tableMapper(parseData.filter((d) => d.table === 2)),
    asia: tableMapper(parseData.filter((d) => d.table === 3)),
    australia: tableMapper(parseData.filter((d) => d.table === 4)),
    africa: tableMapper(parseData.filter((d) => d.table === 5)),
  }
}
const grab = (url): Promise<AxiosPromise> => {
  return axios.get(url)
}

export const parseBonds = async (url) => {
  const result = await grab(url)
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

  return mapper(parseData)
}

export const supplyParser = async (url) => {
  const ax = await axios.get(url)
  const obj = cheerio.load(ax.data)
  const result = []
  obj('.table-heatmap .datatable-row').each((i, el) => {
    const tmp = {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
    }
    cheerio(el)
      .find('td')
      .each((i1, el1) => {
        tmp[i1] = cheerio(el1).text().trim()
      })
    result.push({
      country: tmp[0],
      last: tmp[1],
      reference: tmp[3],
      unit: tmp[4],
    })
  })

  return result
}
