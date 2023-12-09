// Dependencies
import axios from "axios"
import HTMLParser from "node-html-parser"
import { keys } from "../constants/ForexKeys"
import { tickers } from "./tickers"

type ScrappingToolsType = {
    scrapMajors: () => void,
    scrapMinors: () => void,
    scrapAll: () => void,
}

const scrappingTools: ScrappingToolsType = {
    scrapMajors: () => {},
    scrapMinors: () => {},
    scrapAll: () => {}
}

scrappingTools.scrapMajors = async () => {
    const doubles = {}
    const { data, status } = await axios.get('https://www.tradingview.com/markets/currencies/rates-major/');

    if (status === 200){
        const root = HTMLParser(data)
        const elements = root.querySelectorAll("tbody > tr")
        elements.forEach((element, index) => {
            let columns = element.querySelectorAll("td")
            let firstColumn = columns[0]
            let key = Object.keys(keys).filter(key => firstColumn?.text.includes(key))[0]
            console.log(index, key, element.querySelector("td")?.text)
            let ticker = tickers.filter(t => t.name === key)[0]
            ticker.price = parseFloat(columns[1].text)
            ticker.changePersentage = columns[2].text.includes("−") ? -parseFloat(columns[2].text.replace("−","")) : parseFloat(columns[2].text)
            ticker.change = columns[3].text.includes("−") ? -parseFloat(columns[3].text.replace("−","")) : parseFloat(columns[3].text)
            ticker.heigh = parseFloat(columns[6].text)
            ticker.low = parseFloat(columns[7].text)
        })
    }
    console.log(tickers)

    return tickers
}

export default scrappingTools
