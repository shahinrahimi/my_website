import { keys } from "../constants/ForexKeys"

type TickerType = {
    name: string,
    price: number,
    change: number,
    changePersentage: number,
    heigh: number,
    low: number
}

export const tickers: TickerType[] = Object.keys(keys).map(key => {
    return (
        {
            name: key,
            price: 0,
            change: 0,
            changePersentage: 0,
            low: 0,
            heigh:0
        }
    )
})


