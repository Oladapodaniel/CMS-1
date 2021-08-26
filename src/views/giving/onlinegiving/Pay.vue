<template>
    <div>Pay</div>
</template>

<script>
import { useRoute } from "vue-router"
export default {
    setup () {
        const route = useRoute()
        
        const openPaymentGatewayHandler = () => {
            /*eslint no-undef: "warn"*/
            let handler = PaystackPop.setup({
                key: process.env.VUE_APP_PAYSTACK_PUBLIC_KEY_LIVE,
                // key: process.env.VUE_APP_PAYSTACK_API_KEY,
                email: route.query.email,
                amount: route.query.amount * 100,
                // firstname: 54322,
                ref: route.query.ref,
                // subaccount: props.donation.paymentGateway.find(i => {
                //     return i.paymentGateway.name.toLowerCase() === selectedGateway.value.toLowerCase()
                //   }).subAccountID,
                // // gatewayObject.value.subAccountID,
                // bearer: 'subaccount',
                onClose: function () {
                // swal("Transaction Canceled!", { icon: "error" });
                toast.add({ severity: 'info', summary: 'Transaction cancelled', detail: "You have cancelled the transaction", life: 2500})
                console.log('closed')
                },
                callback: function (response) {
        //         //Route to where you confirm payment status
        //         console.log(response, "Payment Received");
        //         emit('transaction-reference', response.trxref)
        //         emit('paystack-amount')
        //         console.log(props.donation)
        // // `/confirmDonation?txnref=${response.trxref}`
        //         axios
        //             .post(`/donated?paymentType=0`, props.donation)
        //             .then((res) => {
        //             finish()
        //             console.log(res, "success data");

        //             })
        //             .catch((err) => {
        //             finish()
        //             toast.add({ severity: 'error',
        //             summary: 'Confirmation failed',
        //             detail: "Confirming your purchase failed, please contact support at info@churchplus.co",
        //             life: 4000
        //             })
        //             console.log(err, "error confirming payment");
        //             });

        //         emit('payment-successful', true)
        console.log('payment successful')
                },
            });
            handler.openIframe();
        }
        openPaymentGatewayHandler()

        return {}
    }
}
</script>

<style scoped>

</style>