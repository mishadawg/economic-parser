import cheerio from 'cheerio'
import axios from 'axios'

const DOMAIN = 'https://companiesmarketcap.com'

export const parse = async (url) => {
  const result = await axios.get(url)
  const parserObj = cheerio.load(result.data)

  const megaMenu = parserObj('.dropdown-menu.megamenu')
  const links = []
  cheerio(megaMenu[0])
    .find('a')
    .each((i, el) => {
      const href = cheerio(el).attr('href')
      const title = cheerio(el)
        .text()
        .replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '')
        .replace(/ {2,}/g, '')
        .trim()

      links.push({
        link: href.replace(DOMAIN, ''),
        title,
      })
    })

  const totalsResult = []
  for (const link of links) {
    const pageRequest = await axios.get(`${DOMAIN}${link.link}`).catch((e) => {
      try {
        const parsedData = e.response
        const objData = cheerio.load(parsedData.data)
        const totals = objData('.category-stats-bar .font-weight-bold')
        totalsResult.push({
          country: link.title,
          total: cheerio(totals[1]).text().trim(),
        })
      } catch (e) {
        totalsResult.push({
          country: link.title,
          total: null,
          errorCode: e.code,
          additional: e,
        })
      }
    })
    if (!pageRequest) {
      continue
    }
    const objData = cheerio.load(pageRequest.data)
    const totals = objData('.category-stats-bar .font-weight-bold')
    totalsResult.push({
      country: link.title,
      total: cheerio(totals[1]).text().trim(),
    })
  }
  return totalsResult
}
