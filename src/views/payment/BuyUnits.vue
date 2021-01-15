<template>
  <div class="px-sm-2">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-12 mb-4 mt-3">
          <h2 class="font-weight-bold">
            Choose a plan that's right for your church
          </h2>
        </div>
      </div>

      <div class="row text-center mb-4">
        <div class="col-md-12">
          <p class="font-weight-noraml small-text">
            Our primary clients are from Nigeria, hence our prices are in this
            country's official currency, Naira(₦). There is no maximum limit or
            expiry date for your units which you may purchase at any time. With
            our pricing system you get more SMS units the more you buy.
          </p>
          <p class="font-weight-600">
            Note that we charge 1 unit per SMS to all GSM networks in Nigeria.
          </p>
        </div>
      </div>

      <div class="row d-md-flex justify-content-around mb-3">
        <div class="col-md-2 d-flex flex-column justify-content-end">
          <div class="row labels-box">
            <div class="col-md-12"></div>
            <div class="col-md-12 px-0 plan-items">
              <p class="mb-1 py-2 px-1">SMS Volume</p>
              <p class="mb-1 py-2 px-1">Price (₦)</p>
              <p class="mb-1 py-2 px-1">Price ($)</p>
              <p class="mb-1 py-2 px-1">Minimum Payment</p>
            </div>
          </div>
        </div>

        <div class="col-md-2 plan-box">
          <div class="row text-center">
            <div class="col-md-12 my-3 mb-4">
              <h4 class="mb-1 plan-header font-weight-700">Basic Plan</h4>
              <span class="small-text">Lorem ipsum dolor sit</span>
            </div>
            <div class="col-md-12 px-0 plan-items">
              <p class="mb-1 py-2 font-weight-700">
                <span class="hidden-label">SMS Volume: </span> 50 - 333
              </p>
              <p class="mb-1 py-2 font-weight-700">
                <span class="hidden-label">Price (₦): </span> ₦3.00
              </p>
              <p class="mb-1 py-2 font-weight-700">
                <span class="hidden-label">Price ($): </span> $0.01
              </p>
              <p class="mb-1 py-2 font-weight-700">
                <span class="hidden-label">Minimum Payment: </span> ₦380.00
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-2 plan-box">
          <div class="row text-center">
            <div class="col-md-12 my-3 mb-4">
              <h4 class="mb-1 plan-header font-weight-700">Basic Plan</h4>
              <span class="small-text">Lorem ipsum dolor sit</span>
            </div>
            <div class="col-md-12 px-0 plan-items">
              <p class="mb-1 py-2 font-weight-700">50 - 333</p>
              <p class="mb-1 py-2 font-weight-700">₦3.00</p>
              <p class="mb-1 py-2 font-weight-700">$0.01</p>
              <p class="mb-1 py-2 font-weight-700">₦380.00</p>
            </div>
          </div>
        </div>

        <div class="col-md-2 plan-box">
          <div class="row text-center">
            <div class="col-md-12 my-3 mb-4">
              <h4 class="mb-1 plan-header font-weight-700">Basic Plan</h4>
              <span class="small-text">Lorem ipsum dolor sit</span>
            </div>
            <div class="col-md-12 px-0 plan-items">
              <p class="mb-1 py-2 font-weight-700">50 - 333</p>
              <p class="mb-1 py-2 font-weight-700">₦3.00</p>
              <p class="mb-1 py-2 font-weight-700">$0.01</p>
              <p class="mb-1 py-2 font-weight-700">₦380.00</p>
            </div>
          </div>
        </div>

        <div class="col-md-2 plan-box">
          <div class="row text-center">
            <div class="col-md-12 my-3 mb-4">
              <h4 class="mb-1 plan-header font-weight-700">Basic Plan</h4>
              <span class="small-text">Lorem ipsum dolor sit</span>
            </div>
            <div class="col-md-12 px-0 plan-items">
              <p class="mb-1 py-2 font-weight-700">50 - 333</p>
              <p class="mb-1 py-2 font-weight-700">₦3.00</p>
              <p class="mb-1 py-2 font-weight-700">$0.01</p>
              <p class="mb-1 py-2 font-weight-700">₦380.00</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-12">
          <h2 class="font-weight-700 plan-header">Pricing Calculator</h2>
        </div>
        <div class="col-md-12 calc-con">
          <div class="row">
            <div class="col-md-5">
              <div class="row">
                <div class="col-sm-2 d-flex align-items-center">
                  <label class="amount mr-2 text-white font-weight-bold"
                    >Amount</label
                  >
                </div>
                <div class="col-sm-10">
                  <div class="row">
                    <div class="col-sm-4 pr-0">
                      <select name="" id="" class="form-control px-0">
                        <option value="">Naira</option>
                        <option value="">Pounds</option>
                      </select>
                    </div>
                    <div class="col-sm-8 pl-0">
                      <input
                        type="number"
                        v-model="amount"
                        class="pl-0 form-control text-field inp-field"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 d-flex">
              <div class="row">
                <div class="col-md-5 text-md-center d-flex align-items-center">
                  <label class="amount mr-2 text-white font-weight-bold"
                    >SMS UNITS</label
                  >
                </div>
                <div class="col-md-7">
                  <input
                    type="text"
                    v-model="totalSMSUnits"
                    class="form-control inp-field"
                  />
                </div>
              </div>
            </div>

            <div class="col-md-3 d-flex">
              <div class="row">
                <div class="col-md-4 text-md-center d-flex align-items-center">
                  <label class="amount mr-2 text-white font-weight-bold"
                    >TOTAL</label
                  >
                </div>
                <div class="col-md-8">
                  <input
                    type="number"
                    v-model="totalAmount"
                    class="form-control inp-field"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 py-3 d-sm-flex flex-column align-items-end">
            <p class="text-danger font-weight-700 mb-1" v-if="invalidAmount">Please enter amount</p>
          <button class="primary-btn px-4 outline-none" @click="payWithPaystack">Buy SMS Unit</button>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 py-3 d-sm-flex justify-content-start">
          <h4 class="font-weight-700">Bank Payment</h4>
        </div>
      </div>

      <div class="row d-md-flex justify-content-around mb-5">
        <div class="col-md-4 bank-details">
          <div class="row">
            <div class="col-md-3">
              <img src="../../assets/google.png" alt="Image" />
            </div>
            <div class="col-md-9">
              <p class="font-weight-600 pt-2">Guarantee Trust Bank</p>
              <p class="mb-0">Account Name:</p>
              <p class="mb-0">Account Number:</p>
            </div>
          </div>
        </div>

        <div class="col-md-5 bank-details">
          <div class="row">
            <div class="col-md-3">
              <img src="../../assets/google.png" alt="Image" />
            </div>
            <div class="col-md-9">
              <p class="font-weight-600 pt-2">Diamond Bank</p>
              <p class="mb-0">Account Name: Complustech Limited</p>
              <p class="mb-0">Account Number: 0017934252</p>
            </div>
          </div>
        </div>

        <div class="col-md-2">
          <div class="row">
            <div class="col-md-12">
              <img src="../../assets/google.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import axios from "@/gateway/backendapi";

export default {
    setup() {
        const amount = ref(0)
        const smsUnits = ref(0);
        const invalidAmount = ref(false);

        const totalSMSUnits = computed(() => {
            if (amount.value <= 0) return "";
            return Math.ceil(amount.value / 2);
        })

        const totalAmount = computed(() => {
            if (amount.value <= 0) return "";
            return Math.ceil(amount.value);
        })

        const payWithPaystack = (e) => {
            e.preventDefault();
            invalidAmount.value = false;
            if (amount.value <= 0) {
                invalidAmount.value = true;
                return false;
            }

            /*eslint no-undef: "warn"*/
            let handler = PaystackPop.setup({
                key: "pk_test_9a8895ede03716b9a0474fea6da11ec5bc1c7033",
                email: "stgodstar@gmail.com",
                amount: amount.value * 100,
                firstname: "Godstar",
                lastname: "Gerrald",
                onClose: function () {
                    swal("Transaction Canceled!", { icon: "error" });
                },
                callback: function (response) {
                //Route to where you confirm payment status
                    console.log(response, "response");
                    var returnres = {
                        smsUnit: totalSMSUnits.value,
                        transaction_Reference: response.reference,
                        amount: amount.value * 100,
                    };
                    //Route to where you confirm payment status

                    axios.post('/api/Payment/buySms', returnres)
                        .then(res => {
                        console.log(res, "success data");
                        })
                        .catch(err => {
                        console.log(err, "error confirming payment");
                        })
                },
            });
            handler.openIframe();
    }

        return {
            amount,
            smsUnits,
            totalAmount,
            totalSMSUnits,
            payWithPaystack,
            invalidAmount,
        }
    }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.plan-header {
  color: #136acd;
}

.plan-box {
  box-shadow: 7px 15px 25px #00000012;
  border: 1px solid #136acd33;
  border-radius: 25px;
  border-bottom: 10px solid #136acd;
}

.plan-items p:nth-child(odd) {
  background: #ebeff433;
}

.calc-con {
  background: #136acd;
  padding: 30px 20px;
  border-radius: 25px;
}

.inp-field {
  border: 1px solid #c5d9f2;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  font-weight: 700;
}

.text-field {
  border-left: none;
  border-radius: 0 5px 5px 0;
  padding-left: 10px !important;
}

.bank-details {
  background: #ebeff4 0% 0% no-repeat padding-box;
  border: 1px solid #dde2e6;
  border-radius: 10px;
}

.hidden-label {
  display: none;
}

@media screen and (max-width: 767px) {
  .hidden-label {
    display: inline;
  }

  .labels-box {
    display: none;
  }
}
</style>