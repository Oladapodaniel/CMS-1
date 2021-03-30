<template>
<!-- <Dropdown :options="listOfCurrency" :filter="true" placeholder="NGN - Naira" :showClear="false">
</Dropdown>{{ fromCurrencyRate }} -->
<div>
    <button v-if="tenantCurrency" class="converter-button" @click="showCurrency = !showCurrency">{{ selectedDestinationCurrencyRate ? selectedDestinationCurrencyRate.toString().length >  15 ? `${selectedDestinationCurrencyRate.slice(0, 15)}...` : selectedDestinationCurrencyRate : tenantCurrency }}</button>
</div>
<div
    class="ofering close-modal"
    :class="{ 'style-account': showCurrency }"
    v-if="showCurrency"
    >
    <div class="p-2">
        <input
        type="text"
        placeholder="Search"
        class="form-control close-modal ofering mb-1"
        v-model="currencyText"
        ref="search"
    />
    </div>
        <!-- <div class="header-border close-modal" v-if="filterCurrency.length > 0"> -->
            <div class="manual-dd-item close-modal" v-for="item in filterCurrency" :key="item.id">
                <div class="d-flex justify-content-between p-1 close-modal">
                    <div class="close-modal offset-sm-1" @click="addCurrency($event, index, item)">{{ item.name }} - {{ item.country }}</div>      
                </div>                      
            </div>
        <!-- </div> -->
        <!-- <div class="header-border close-modal" v-else>
            <div class="p-3 text-center text-danger">No Match Found</div>
        </div> -->
    
    
    </div>
</template>

<script>
import { ref, computed, nextTick, onUpdated } from "vue"
// import Dropdown from 'primevue/dropdown';
import axios from "axios"
export default {
    components: {
        
    },
    props:  ['selectedCurrency', 'tenantCurrency', 'currencyList', 'currencyAmount'],
    setup (props, { emit }) {
        const showCurrency = ref(false)
        const currencyText = ref("")
        const selectedDestinationCurrencyRate = ref("")
        const search = ref("")
        // const selectedToCurrency = ref("")
        const currencyRates = ref({})


        const fromCurrencyRate = computed(() => {
            if (props.selectedCurrency) return `USD${props.selectedCurrency}`
            return `USD${props.tenantCurrency}`
        })
        
        const toDestinationCurrencyRate = computed(() => {
            if (selectedDestinationCurrencyRate.value) return `USD${selectedDestinationCurrencyRate.value}`
            return `USD${props.tenantCurrency}`
        })

    

        const getConvertedCurrency = async() => {
            try {
                let { data } = await axios.get('http://api.currencylayer.com/live?access_key=0e33957bb5795cba70ad13779e018af5&source=USD&format=1')
                console.log(data)
                currencyRates.value = data.quotes
            }
            catch(error) {
                console.log(error)
            }
        }
        getConvertedCurrency()

        const listOfCurrency = computed(() => {
            if (props.currencyList.length > 0) return props.currencyList.map(i => `${i.name} - ${i.country}`)
            return []
        })

        const filterCurrency = computed(() => {
            if (currencyText.value !== "" && props.currencyList.length > 0) {
                return props.currencyList.filter((i) => {
                if (i.name) return i.name.toLowerCase().includes(currencyText.value.toLowerCase()) || i.country.toLowerCase().includes(currencyText.value.toLowerCase())
                })
            } else {
                return props.currencyList
            }
        })

        const addCurrency = (e, index, item) => {
            // selectedToCurrency.value = `${item.name} - ${item.country}`
            selectedDestinationCurrencyRate.value = `${item.name}`
            console.log(e, index, item)
            showCurrency.value = false

            nextTick(() => {
                search.value.focus()
            })
        }

        onUpdated(() => {
            let amount = props.currencyAmount
            let propertyArr = Object.keys(currencyRates.value)
            let valueArr = Object.values(currencyRates.value)
            let fromIndex = propertyArr.indexOf(fromCurrencyRate.value)
            let fromRate = valueArr[fromIndex]
            let toIndex = propertyArr.indexOf(toDestinationCurrencyRate.value)
            let toRate = valueArr[toIndex]

            let result = ( amount / fromRate ) * toRate
            console.log(result)
            emit('currency-index', result)
            

        })


        return {
            fromCurrencyRate, listOfCurrency, showCurrency, filterCurrency, currencyText, selectedDestinationCurrencyRate, addCurrency, search, toDestinationCurrencyRate, currencyRates
        }
    }
}
</script>

<style scoped>
 .style-account {
    box-shadow: 0px 3px 15px #797e8159;
    position: absolute;
    background: white;
    z-index: 1;
    width: 160px;
    max-height: 14em;
    overflow-y: scroll;
    font-weight: 500;
    font-size: 15px;
    }
    .style-account div div:hover {
    background-color: #ecf0f3;
    cursor: pointer;
    }

    .converter-button {
        border: 1px solid #b2c2cd;
        padding: 6px 10px;
        border-radius: 5px;
        font-size: 16px;
        color: rgb(49, 49, 49);
        background: #fff;
    }
</style>