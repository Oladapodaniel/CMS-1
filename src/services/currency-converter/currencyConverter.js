// import axios from "@/gateway/backendapi";
import store from "../../store/store";

let converter = {
    async currencyConverter (amount, fromCurrencyRate, toDestinationCurrencyRate) {
        let currencyRate = store.getters.getRates
        let propertyArr = Object.keys(currencyRate)
        let valueArr = Object.values(currencyRate)
        let fromIndex = propertyArr.indexOf(fromCurrencyRate)
        let fromRate = valueArr[fromIndex]
        let toIndex = propertyArr.indexOf(toDestinationCurrencyRate)
        let toRate = valueArr[toIndex]
        let result = ( amount / fromRate ) * toRate
        console.log(currencyRate)
        return result
    }
}

export default converter