
<template>
  <!-- <div class="container-fluid d-flex justify-content-center">
    <main class=" d-flex align-self-center">
      <div class="col-md-12">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p class="pc text-nowrap my-4">Continue payment with</p>
            </div>
          </div>
        </div>


        <div class="container container-1 px-5 py-2">
          <div class="row">
            <div class="col-md-12 hover-shadow border d-md-flex px-3">

              <div class="col-md-8">
                <div class="row px-3">
                  <div class="col-md-12">
                    <p class="pr pt-2">Paystack</p>
                  </div>
                </div>
                <div class="row px-3">
                  <div class="col-md-12 d-flex">
                    <div class="col-md-1 d-flex pl-0">
                      <i
                        class="fas fa-circle circle d-flex align-self-center"
                      ></i>
                    </div>
                    <div class="col-md-4 d-flex pl-0">
                       <span class="nationalty">Nigerians</span>
                    </div>
                    <div class="col-md-1 d-flex">
                      <i
                        class="fas fa-circle circle d-flex align-self-center"
                      ></i>
                    </div>
                    <div class="col-md-5">
                      <span class="nationalty">International</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 d-flex align-items-center">
                  <div class="col-md-12 d-md-flex justify-content-center">
                    <img
                      class="image image-fluid py-2"
                      src="../../../assets/4PaystackLogo.png"
                      alt=""
                    />
                  </div>

              </div>

            </div>
          </div>
        </div>

        <div class="container container-1 px-5 py-2">
          <div class="row">
            <div class="col-md-12 hover-shadow border d-md-flex px-3">

              <div class="col-md-6">
                <div class="row px-3">
                  <div class="col-md-12">
                    <p class="pr pt-2">Paystack</p>
                  </div>
                </div>
                <div class="row px-3">
                  <div class="col-md-12 d-flex">
                    <div class="col-md-6 d-flex pl-0 mr-4">
                      <i
                        class="fas fa-circle circle d-flex align-self-center"
                      ></i>
                      &nbsp; <span class="nationalty">Nigerians</span>
                    </div>
                    <div class="col-md-6 d-flex ml-n5">
                      <i
                        class="fas fa-circle circle d-flex align-self-center"
                      ></i>
                      &nbsp; <span class="nationalty">International</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 d-flex align-items-center">
                  <div class="col-md-12 d-md-flex justify-content-center">
                    <img
                      class="image image-fluid py-2"
                      src="../../../assets/flutterwave_logo_color@2x.png"
                      alt=""
                    />
                  </div>

              </div>

            </div>
          </div>
        </div>

        <div class="container container-1 px-5 py-2">
          <div class="row">
            <div class="col-md-12 hover-shadow border d-md-flex px-3">

              <div class="col-md-6">
                <div class="row px-3">
                  <div class="col-md-12">
                    <p class="pr pt-2">Paystack</p>
                  </div>
                </div>
                <div class="row px-3">
                  <div class="col-md-12 d-flex">
                    <div class="col-md-6 d-flex pl-0 mr-4">
                      <i
                        class="fas fa-circle circle d-flex align-self-center"
                      ></i>
                      &nbsp; <span class="nationalty">Nigerians</span>
                    </div>
                    <div class="col-md-6 d-flex ml-n5">
                      <i
                        class="fas fa-circle circle d-flex align-self-center"
                      ></i>
                      &nbsp; <span class="nationalty">International</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 d-flex align-items-center">
                  <div class="col-md-12 d-md-flex justify-content-center">
                    <img
                      class="image image-fluid py-2"
                      src="../../../assets/paypal-logo-2@2x.png"
                      alt=""
                    />
                  </div>

              </div>

            </div>
          </div>
        </div>



      </div>
    </main>
  </div> -->
  <div class="container">
    <div class="row">
      <div class="col-sm-12 p-4 text-center continue-text">Continue payment with</div>
    </div>
    <div class="row row-button" @click="payWithPaystack">
      <div class="col-4 col-sm-7 offset-2">
        <img class="w-100" src="../../../assets/4PaystackLogo.png" alt=""/>
      </div>
      <!-- <div class="col-7 col-sm-4 option-text">Paystack</div> -->

      <!-- <div class="row">
        <div class="col-1 mt-n1 d-none d-sm-block">
         <i
          class="fas fa-circle circle"
        ></i>
      </div>
      <div class="col-8 pl-0 d-none d-sm-block">Nigeria</div>
      </div> -->
    </div>

    <div class="row row-button">
      <div class="col-4 col-sm-7 offset-2">
        <img class="w-100" src="../../../assets/flutterwave_logo_color@2x.png" alt=""/>
      </div>
      <!-- <div class="col-7 col-sm-4 option-text">Flutterwave</div> -->
      <!-- <div class="row">
        <div class="col-1 mt-n1 d-none d-sm-block">
         <i
          class="fas fa-circle circle"
        ></i>
      </div>
      <div class="col-8 pl-0 d-none d-sm-block">Nigeria</div>
      </div> -->
    </div>

    <div class="row row-button">
      <div class="col-4 col-sm-7 offset-2">
        <img class="w-100" src="../../../assets/paypal-logo-2@2x.png" alt=""/>
      </div>
      <!-- <div class="col-7 col-sm-4 option-text">Paypal</div>
      <div class="row">
        <div class="col-1 mt-n1 d-none d-sm-block">
         <i
          class="fas fa-circle circle"
        ></i>
      </div>
      <div class="col-8 pl-0 d-none d-sm-block">International</div>
      </div> -->
    </div>
  </div>

</template>

<script>
// import PaystackPay from "../../../components/payment/PaystackPay"
// import { ref, computed } from 'vue'
import axios from "@/gateway/backendapi";
export default {
  components: {
    // PaystackPay
    // paystack
  },
  props: ['orderId', 'donation', 'close', 'amount', 'name', 'email'],
  setup (props, { emit }) {

    const payWithPaystack = () => {
      props.close.click()
      /*eslint no-undef: "warn"*/
      let handler = PaystackPop.setup({
        key: process.env.VUE_APP_PAYSTACK_API_KEY,
        email: props.email,
        amount: props.amount * 100,
        firstname: props.name,
        ref: props.orderId,
        onClose: function () {
          // swal("Transaction Canceled!", { icon: "error" });
          // toast.add({ severity: 'info', summary: 'Transaction cancelled', detail: "You have cancelled the transaction", life: 2500})
          console.log('closed')
        },
        callback: function (response) {
          //Route to where you confirm payment status
          console.log(response, "Payment Received");
          // var returnres = {
          //   smsUnit: totalSMSUnits.value,
          //   transaction_Reference: response.reference,
          //   amount: amount.value * 100,
          // };
          //Route to where you confirm payment status

          axios
            .post(`/confirmDonation?txnref=${response.trxref}`, props.donation)
            .then((res) => {
              console.log(res, "success data");
              
            })
            .catch((err) => {
              // stopProgressBar();
              // toast.add({ severity: 'error', summary: 'Confirmation failed', detail: "Confirming your purchase failed, please contact support at info@churchplus.co"})
              console.log(err, "error confirming payment");
            });
            
            emit('payment-successful', true)
        },
      });
      handler.openIframe();
    };

    return {
      payWithPaystack
    }
    }

  }

</script>

<style scoped>

.continue-text {
  font-family: Nunito Sans !important;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.option-text {
  font-family: Nunito Sans !important;
  font-weight: 800;
}

.circle {
  color: #136acd;
  font-size: 8px;
}
/* .circle {
    background:  #136acd;
    border-radius: 50%;
    width: 100px;
    height: 100px;
} */

.hover-shadow:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  cursor: pointer;
}

.row-button {
  padding: 10px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background: white;
  margin: 20px 100px 0 100px;
 transition: all 0.4s ease-in-out;
}

.row-button:hover {
  cursor: pointer;
  transform: scale(1.05, 1.05)
}
</style>