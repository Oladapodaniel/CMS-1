<template>
    <div class="container" >
        <div class="row" v-if="paymentSuccessful">
            <div class="col-12">Thank you</div>
            <div class="col-12">You have made successfully made your payment</div>
        </div>
    </div>
</template>

<script>
import { useRoute } from "vue-router"
import axios from "@/gateway/backendapi";
import finish from "../../../services/progressbar/progress"
import { useToast } from "primevue/usetoast";
import { computed, ref } from '@vue/runtime-core';
import uuidv4 from "uuid"
import convertCurrency from "../../../services/currency-converter/currencyConverter"
import store from '../../../store/store';
export default {
    setup () {
        const route = useRoute()
        const toast  = useToast()
        const isProduction = false
        const logoUrl = `https://flutterwave.com/images/logo-colored.svg`
        const uniqueId = ref(uuidv4())
        const paystackCurrencies = ref(['NGN', 'GHS', 'ZAR'])
        const currency = ref("")
        const nonPaystackCompactible = ref(true)
        const converted = ref(0)
        const paymentSuccessful = ref(false)
        const contributionItem = ref([])
        
        const getFlutterwaveModules = () => {
            const script = document.createElement("script");
                    script.src = !isProduction
                    ? "https://ravemodal-dev.herokuapp.com/v3.js"
                    : "https://checkout.flutterwave.com/v3.js";
                    document.getElementsByTagName("head")[0].appendChild(script);
            }
            getFlutterwaveModules()

            const queryValue = computed(() => {
                return {
                        email: route.query.email,
                        amount: amount.value,
                        currencyId: route.query.currencyId,
                        gateway: route.query.gateway.toLowerCase(),
                        orderId: uniqueId.value,
                        tenantId: route.query.tenantId
                    }
                })

            // const initializePayment = () => {
            //     axios.post('/initailizedonationpayment', queryValue.value)
            //         .then(res => {
            //             console.log(res)
            //         })
            //         .catch(err => {
            //             console.log(err)
            //         })
            // }

            const callFlutterWave = () => {
        
                // Regular expression to test if a string is a valid GUID
                // This is to validate the GUID query route name as a contributionItemId

                let regex = /[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}/i;
                Object.keys(route.query).forEach((i, index) => {
                    let result = regex.test(i)
                    console.log(result)
                    if (result) {
                        contributionItem.value.push({contributionItemId: i, amount: Object.values(route.query)[index]})
                    }
                });
                queryValue.value.contributionItem = contributionItem.value
  
                window.FlutterwaveCheckout({
                    // public_key: process.env.VUE_APP_FLUTTERWAVE_PUBLIC_KEY_LIVE,
                    public_key: process.env.VUE_APP_FLUTTERWAVE_TEST_KEY_TEST,
                    tx_ref: uniqueId.value,
                    amount: amount.value,
                    currency: route.query.currency,
                    payment_options: 'card,ussd',
                    customer: {
                    // name: props.name,
                    email: route.query.email,
                    },
                    callback: (response) => {
                        console.log("Payment callback", response)
                        queryValue.value.transactionReference = response.transaction_id
                        axios
                            .post(`/donated?paymentType=1`, queryValue.value)
                            .then((res) => {
                                finish()
                                console.log(res, "success data");
                                paymentSuccessful.value = true
    
                            })
                            .catch((err) => {
                                finish()
                                toast.add({
                                severity: 'error',
                                summary: 'Confirmation failed',
                                detail: "Confirming your purchase failed, please contact support at info@churchplus.co",
                                life: 4000
                                })
                                console.log(err, "error confirming payment");
                            });
    
                            // emit('payment-successful', true)
                    },
                    onclose: () => console.log('Payment closed'),
                    customizations: {
                    title: 'Church Giving',
                    description: "Payment for contribution items",
                    logo: logoUrl,
                    },
                });
            }

        const getRates = async() => {
            try {
                let { data } = await axios.get('/fxRates')
                console.log(data)
                store.dispatch("getRates", data)
            }   catch (error) {
                    console.log(error);
            }
        }
        getRates()

        const amount  = computed(() => {
            if (converted.value) return converted.value
            if (contributionItem.value.length > 0) return contributionItem.value.reduce((a, b) => { 
                    return { amount: +a.amount + +b.amount } 
                }).amount
        })

        const callPaystack = async() => {
            // paystackCurrencies.value.forEach((i) => {
            //     if (i === route.query.currency) {
            //         currency.value = i
            //         console.log(i)
            //         nonPaystackCompactible.value = false

            //     }
            // })

            // if (nonPaystackCompactible.value) {
                console.log(Object.keys(route.query))
                // Regular expression to test if a string is a valid GUID
                // This is to validate the GUID query route name as a contributionItemId

                let regex = /[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}/i;
                Object.keys(route.query).forEach((i, index) => {
                    let result = regex.test(i)
                    console.log(result)
                    if (result) {
                        contributionItem.value.push({contributionItemId: i, amount: Object.values(route.query)[index]})
                    }
                });
                queryValue.value.contributionItem = contributionItem.value
             

                let summedAmount = contributionItem.value.reduce((a, b) => { 
                    return { amount: +a.amount + +b.amount } 
                })
                try {
                    const rate = await convertCurrency.currencyConverter(+summedAmount.amount, `usd${route.query.currency.toLowerCase()}`,'usdngn')
                    // currency.value = 'USD'
                    console.log(Math.floor(rate))
                    converted.value = Math.floor(rate)

                } catch (err) {
                    console.log(err)
                }
         
            // }
            /*eslint no-undef: "warn"*/
                let handler = PaystackPop.setup({
                    // key: process.env.VUE_APP_PAYSTACK_PUBLIC_KEY_LIVE,
                    key: process.env.VUE_APP_PAYSTACK_API_KEY,
                    email: route.query.email,
                    amount: amount.value * 100,
                    ref: uniqueId.value,
                    currency: currency.value,
                    channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
                    // subaccount: props.donation.paymentGateway.find(i => {
                    //     return i.paymentGateway.name.toLowerCase() === selectedGateway.value.toLowerCase()
                    //   }).subAccountID,
                    // // gatewayObject.value.subAccountID,
                    // bearer: 'subaccount',
                    onClose: function () {
                        toast.add({ 
                            severity: 'info', 
                            summary: 'Transaction cancelled', 
                            detail: "You have cancelled the transaction", 
                            life: 2500
                        })
                    },
                    callback: function (response) {
                    //Route to where you confirm payment status
                    console.log(response, "Payment Received");

                    queryValue.value.amount = amount.value * 100
                    queryValue.value.transactionReference = response.trxref
                    axios
                        .post(`/donated?paymentType=0`, queryValue.value)
                        .then((res) => {
                            finish()
                            console.log(res, "success data");
                            paymentSuccessful.value = true
                        })
                        .catch((err) => {
                            finish()
                            toast.add({ severity: 'error',
                            summary: 'Confirmation failed',
                            detail: "Confirming your purchase failed, please contact support at info@churchplus.co",
                            life: 4000
                        })
                        console.log(err, "error confirming payment");
                        });
                    },
                });
                handler.openIframe();
        }
            
        const openPaymentGatewayHandler = () => {
            if (route.query.gateway === 'paystack') {
                // initializePayment()
                callPaystack()
            } else if (route.query.gateway === 'flutterwave') {
                // initializePayment()
                setTimeout(() => {
                    callFlutterWave()
                }, 2000)
            }
        }
        openPaymentGatewayHandler()


        

        return {
            queryValue,
            paystackCurrencies,
            currency,
            nonPaystackCompactible,
            converted,
            amount,
            paymentSuccessful,
            contributionItem
        }
    }
}
</script>

<style scoped>

</style>