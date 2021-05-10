import axios from "@/gateway/backendapi";

let converter = {
    async currencyConverter (amount, fromCurrencyRate, toDestinationCurrencyRate) {
        let currencyRate;
        try {
            let { data } = await axios.get('/fxRates')
            console.log(data)
            currencyRate = data
        }
        catch(error) {
            console.log(error)
        }
        let propertyArr = Object.keys(currencyRate)
        let valueArr = Object.values(currencyRate)
        let fromIndex = propertyArr.indexOf(fromCurrencyRate)
        let fromRate = valueArr[fromIndex]
        let toIndex = propertyArr.indexOf(toDestinationCurrencyRate)
        let toRate = valueArr[toIndex]
        let result = ( amount / fromRate ) * toRate
        console.log(result)
        return result
    }
}

export default converter