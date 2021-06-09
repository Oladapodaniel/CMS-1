<template>
  <div class="container-wide container-top">
    <div class="row mt-5">
      <div class="col-12 pl-md-0 header">
        Subscription
      </div>
      <div class="col-12 normal-text mt-3 pl-md-0 ">
        Select the subscription that suit your church and the additional tolls
        you need for your church growth.
      </div>
      <div class="col-md-6 mt-5">
        <div class="row bg-white pb-2 sub">
          <div class="col-md-6 col-lg-6  col-12">
            <div class="py-2 small-header">Subscription Type <span class="text-danger">*</span></div>
            <Dropdown
              class=" plandropdown w-100"
              v-model="selectedPlan"
              :options="subscriptionPlans"
              optionLabel="description"
              placeholder=""
            />
          </div>
          <div class="col-md-6 col-lg-6 col-12">
            <div class="py-2 small-header">
              Duration (month) <span class="text-danger">*</span>
            </div>
            <Dropdown
              class="w-100"
              v-model="selectMonth"
              :options="selectMonths"
              optionLabel="name"
              placeholder="Select duration"
            />
          </div>
          <div class="col-md-3 col-lg-3 col-3  ml-3 mt-3 normal-text">
            {{ currentUser.currencySymbol }} {{ subselectedDuratn }}
          </div>
        </div>
      </div>
      <div class="col-md-4 col-lg-4 col-12 offset-md-1 sub mt-5">
        <div class="row bg-white rounded pb-2">
          <div class="col-12">
            <div class="small-header">Current plan</div>
            <div class="normal-text mt-1">{{ currentPlan }}</div>
          </div>
          <div class="col-12 mt-2">
            <div class="small-header">Expiry Date</div>
            <div class="normal-text mt-1">{{ expiryDate }}</div>
          </div>
        </div>
      </div>
      <!-- Add ons -->
      <div class="col-md-12 col-lg-12 pt-3 mt-3">ADD-ONS</div>

      <div class="col-md-6 p-4 sub mt-3 bg-white">
        <div class="">
          <div class="small-header">Communication</div>
          <div class="row mt-3 normal-text">
            <div class="col-md-2 col-lg-2 col-4">SMS</div>
            <div class="col-md-6 offset-md-1 col-4 mb-2">
              <input
                type="number"
                v-model.number="smsValue"
                class="form-control w-50"
                placeholder="SMS Unit"
              />
            </div>
            <div class="col-md-2 col-4">
              {{ smsAmount }}
            </div>
          </div>
          <div class="row mt-2 normal-text">
            <div class="col-md-2 col-lg-2 col-4">Email</div>
            <div class="col-md-6 offset-md-1 col-4 ">
              <Dropdown
                class="emailWidth"
                v-model="selectEmail"
                :options="selectEmailUnit"
                optionLabel="name"
                placeholder="Email Unit "
              />
            </div>
            <div class="col-md-2 col-4">
              {{ selectEmail.constValue ? emailAmount : 0 }}
            </div>
          </div>
          <div class="my-3 small-header">Accounting</div>
          <div
            class="row normal-text"
            v-for="(item) in productsList"
            :key="item.id"
          >
            <div
              class="col-12"
              v-if="
                item.name !== 'Email' &&
                  item.name !== 'SMS' &&
                  item.name !== 'Product' &&
                  item.name !== 'Financial Analysis' &&
                  item.name !== 'Fixed Assets'
              "
            >
              <div class="row">
                <div class="col-md-6 col-4">{{ item.name }}</div>
                <div class="col-md-2 col-4">
                  <input
                    type="checkbox"
                    @change="selectCheckbox(item)"
                  />
                </div>
                <div class="col-md-4 text-center col-4">{{ item.price }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- payment summary -->
      <div class="col-md-4 bg-white col-lg-4 col-12 sub mt-3 offset-md-1 ">
        <div class="h-100  rounded">
          <div class="text-center small-header">
            Payment Summary({{ currentUser.currencySymbol }})
          </div>
          <div class="row mt-3 normal-text">
            <div class="col-md-6 col-6">Subscription</div>
            <div class="col-md-6  col-6 text-right font-weight-bold">
              {{ subselectedDuratn }}
            </div>
          </div>
          <div class="row mt-2 normal-text">
            <div class="col-md-6 col-6">SMS</div>
            <div class="col-md-6 col-6 text-right font-weight-bold">
              {{ smsAmount == "" ? "0" : smsAmount }}
            </div>
          </div>
          <div class="row mt-3 normal-text">
            <div class="col-md-6 col-6">Email</div>
            <div class="col-md-6 col-6 text-right font-weight-bold">
              {{ selectEmail.constValue ? emailAmount : 0 }}
            </div>
          </div>
          <!-- Selected Products -->
          <div
            class="row mt-3 normal-text"
            v-for="item in checkedBoxArr"
            :key="item.id"
          >
            <div class="col-md-6 col-6">{{ item.name }}</div>
            <div class="col-md-6 col-6 text-right font-weight-bold">
              {{ item.price }}
            </div>
          </div>
          <hr />
          <div class="row mt-3 normal-text">
            <div class="col-md-6 col-6">Total</div>
            <div class="col-md-6 col-6 text-right font-weight-bold">
              {{ TotalAmount }}
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              {{ convertAmountToTenantCurrency.toFixed(2) }}
              {{ selectedCurrency }}
            </div>
            <div class="col-12">
              <Dropdown
                class="w-100"
                v-model="selectedCurrency"
                :options="selectCurrencyArr"
                placeholder="Select Currency Type"
              />
            </div>
          </div>
          <div class="row mt-5">
            <div
              class="col-12"
              data-toggle="modal"
              data-target="#PaymentOptionModal"
            >
              <button
                class="btn pay-now text-white w-100 normal-text"
                :disabled="!selectMonth.name || +selectMonth.name <= 0"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        header="Payment Status"
        v-model:visible="display"
        :style="{ width: '70vw', maxWidth: '600px' }"
        :modal="true"
      >
        <div class="row">
          <div class="col-md-12" v-if="!paymentFailed">
            <h4 class="text-success">
              Congrats,
            </h4>
            <p>Your payment was successful</p>
          </div>
          <div class="col-md-12" v-else>
            <h4 class="text-danger">
              Oops,
            </h4>
            <p>
              Your payment was not successful, contact support at
              <span class="font-weight-bold">info@churchplus.co</span>
            </p>
          </div>
        </div>
      </Dialog>
      <!-- payment summary end -->
      <!-- Modal -->
      <div
        class="modal fade"
        id="PaymentOptionModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header bg-modal">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Payment methods
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" ref="close">&times;</span>
              </button>
            </div>
            <div class="modal-body p-0 bg-modal pb-5">
              <div class="row">
                <div class="col-sm-12 p-4 text-center continue-text">
                  Continue payment with
                </div>
              </div>
              <div class="row row-button c-pointer" @click="payWithPaystack">
                <div class="col-4 col-sm-7 offset-2">
                  <img
                    class="w-100"
                    src="../../assets/4PaystackLogo.png"
                    alt="paystack"
                  />
                </div>
                <!-- <PaymentOptionModal :orderId="formResponse.orderId" :donation="donationObj" :close="close" :name="name" :amount="amount" :converted="convertedAmount" :email="email" @payment-successful="successfulPayment" :gateways="formResponse.paymentGateWays" :currency="dfaultCurrency.shortCode" @selected-gateway="gatewaySelected"/> -->
              </div>
              <!-- <div class="row row-button c-pointer" @click="makePayment">
                <div class="col-4 col-sm-7 offset-2">
                  <img
                    class="w-100"
                    src="../../assets/flutterwave_logo_color@2x.png"
                    alt="flutterwave"
                  />
                </div>

                <div class="col-7 col-sm-4 option-text">Flutterwave</div>
                <div class="row">
                  <div class="col-1 mt-n1 d-none d-sm-block">
                    <i class="fas fa-circle circle"></i>
                  </div>
                  <div class="col-8 pl-0 d-none d-sm-block">Nigeria</div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/gateway/backendapi";
import { useStore } from "vuex";
import Dropdown from "primevue/dropdown";
import formatDate from "../../services/dates/dateformatter";
import { computed, ref } from "vue";
import { useToast } from "primevue/usetoast";
import userService from "../../services/user/userservice";
import { v4 as uuidv4 } from "uuid";
import converter from "../../services/currency-converter/currencyConverter";

export default {
  components: { Dropdown },
  setup() {
    const store = useStore();
    const toast = useToast();
    const subscriptionPlans = ref([]);
    const productsList = ref([]);
    const selectMonth = ref({});
    const selectedPlan = ref({});
    const currentAmount = ref("");
    const currentPlan = ref("");
    const smsValue = ref();
    const selectAmount = ref("");
    const constValue = ref(0);
    const selectEmail = ref({});
    const emailPrice = ref("");
    const smsPrice = ref("");
    const expenseApp = ref("");
    const fixedAsset = ref("");
    const selectedCurrency = ref("");
    const currentUser = ref(store.getters.currentUser);
    // const userEmail = ref(store.getters.email);
    const acctReceived = ref("");
    const paymentSummary = ref([]);
    const paymentSummObj = ref({});
    const isChecked = ref(false);
    const checkedBoxArr = ref([]);
    const selectCurrencyArr = ref([]);
    const Plans = ref("");
    const close = ref(null);

    const display = ref(false);
    const currencies = ref({});
    // const email = ref("");
    // const firstname =
    // const amount = ref("")

    const emailSelectedValue = ref("");
    const subSelectedAmount = ref("");

    const expiryDate = ref("");
    console.log(selectMonth.value.name);
    const selectMonths = ref([
      { name: "1", code: "NY" },
      { name: "2", code: "RM" },
      { name: "3", code: "LDN" },
      { name: "4", code: "IST" },
      { name: "5", code: "PRS" },
      { name: "6", code: "NY" },
      { name: "7", code: "RM" },
      { name: "8", code: "LDN" },
      { name: "9", code: "IST" },
      { name: "10", code: "PRS" },
      { name: "11", code: "IST" },
      { name: "12", code: "PRS" },
    ]);

    const selectEmailUnit = ref([
      { name: "1000-2000", constValue: 2 },
      { name: "2000-3000", constValue: 4 },
      { name: "3000-4000", constValue: 6 },
      { name: "4000-5000", constValue: 8 },
    ]);

    selectCurrencyArr.value = ["NGN", "USD", "GHS", "ZAR"];

    const existingPlan = ref({});
    const selectSubscription = () => {
      axios.get("/api/Subscription/GetSubscription").then((res) => {
        Plans.value = res.data.returnObject;
        existingPlan.value.id = Plans.value.id;
        existingPlan.value.amountInNaira = Plans.value.amountInNaira;
        existingPlan.value.description = Plans.value.description;
        existingPlan.value.amountInDollar = Plans.value.amountInDollar;
        existingPlan.value.membershipSize = Plans.value.membershipSize;
        subscriptionPlans.value = res.data.returnObject.subscriptionPlans;
        // selectedPlan.value = subscriptionPlans.value.find(
        //   (i) => i.description === "PLAN"
        // );
        // subSelectedAmount.value = selectedPlan.value.amountInNaira
        // selectedPlan.value = res.data.returnObject.description;
        selectedPlan.value = subscriptionPlans.value.find(
          (i) => i.id === Plans.value.id
        );
        currentAmount.value = res.data.returnObject.amountInNaira;
        currentPlan.value = existingPlan.value.description;
        productsList.value = res.data.returnObject.productsList;
        emailPrice.value = productsList.value.find(
          (i) => i.name === "Email"
        ).price;
        smsPrice.value = productsList.value.find((i) => i.name === "SMS").price;
        expiryDate.value = formatDate.monthDayYear(
          res.data.returnObject.subscriptionExpiration
        );
      });
    };

    selectSubscription();
    const paymentFailed = ref(false);

    const subscriptionPayment = (paystackResponse) => {
      close.value.click();
      paymentFailed.value = false;
      try {
        const products = checkedBoxArr.value.map((i) => {
          return {
            productName: i.name,
            productID: i.id,
            productPrice: i.price,
          };
        });
        if (selectEmail.value.name) {
          const emailObj = productsList.value.find((i) => i.name === "Email");
          if (emailObj.name) {
            products.push({
              productName: emailObj.name,
              productID: emailObj.id,
              productPrice: emailAmount.value,
            });
          }
        }
        if (smsValue.value) {
          const smsObj = productsList.value.find((i) => i.name === "SMS");
          if (smsObj.name) {
            products.push({
              productName: smsObj.name,
              productID: smsObj.id,
              productPrice: smsAmount.value,
            });
          }
        }
        const body = {
          subscriptionPlanID: selectedPlan.value.id,
          durationInMonths: selectMonth.value.name
            ? +selectMonth.value.name
            : 0,
          smsUnits: smsValue.value ? smsValue.value : 0,
          emailUnits: selectEmail.value.name
            ? +selectEmail.value.name.split("-")[1]
            : 0,
          totalAmount: selectedCurrency.value
            ? convertAmountToTenantCurrency.value
            : TotalAmount.value,
          paymentGateway: "Paystack",
          txnRefID: paystackResponse.trxref,
          productItems: products,
          currency: selectedCurrency.value ? selectedCurrency.value : "NGN",
        };
        axios
          .post("/api/Subscription/SubscriptionPayment", body)
          .then((res) => {
            console.log(res);
            display.value = true;
            if (!res.data.returnObject.status) {
              paymentFailed.value = true;
            }
          })
          .catch((err) => {
            console.log(err);
            display.value = true;
            paymentFailed.value = true;
          });
      } catch (error) {
        console.log(error);
      }
    };
    const conversionrates = ref({});
    const getRates = () => {
      converter.getConversionData().then((res) => {
        conversionrates.value = res;
      });
    };
    getRates();
    const convertAmountToTenantCurrency = computed(() => {
      if (!selectedCurrency.value) return TotalAmount.value;
      let amountInDollar = 0;
      if (TotalAmount.value) {
        amountInDollar = TotalAmount.value / conversionrates.value[`usdngn`];
      } else {
        return 0;
      }
      return (
        conversionrates.value[`usd${selectedCurrency.value.toLowerCase()}`] *
        amountInDollar
      );
    });

    const emailAmount = computed(() => {
      if (!selectEmail.value.name) return 0;
      return +selectEmail.value.name.split("-")[1] * emailPrice.value;
    });

    const smsAmount = computed(() => {
      if (!smsValue.value) return 0;
      return smsValue.value * smsPrice.value;
    });

    const subselectedDuratn = computed(() => {
      let multiValue = 1;
      if (selectedPlan.value.amount)
        multiValue *= selectedPlan.value.amount;
      if (selectMonth.value.name) multiValue *= +selectMonth.value.name;
      return multiValue;
    });

    const TotalAmount = computed(() => {
      let sum = 0;
      if (subselectedDuratn.value) sum += subselectedDuratn.value;
      if (smsValue.value) sum += smsValue.value * 2;
      sum += emailAmount.value;
      return sum + sumCheckboxItem.value;
    });
    const sumCheckboxItem = computed(() => {
      if (checkedBoxArr.value.length === 0) return 0;
      return checkedBoxArr.value.map((i) => i.price).reduce((a, b) => a + b);
    });

    const selectCheckbox = (item) => {
      const index = checkedBoxArr.value.findIndex((i) => i.name === item.name);
      if (index < 0) {
        checkedBoxArr.value.push(item);
      } else {
        checkedBoxArr.value.splice(index, 1);
      }
    };

    const getCurrencySymbol = async () => {
      userService
        .getCurrentUser()
        .then((res) => {
          currentUser.value = res;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const convertedAmount = computed(() => {
      if (!selectedCurrency.value) return "";
      return converter.convertCurrencyTo(500, "usdngn", "usdghs");
    });

    if (!currentUser.value || !currentUser.value.currency) getCurrencySymbol();
    const appendLeadingZeroes = (n) => {
      if (n <= 9) {
        return "0" + n;
      }
      return n;
    };
    let currentDate = new Date();
    let formattedDate = `${currentDate.getFullYear()}${appendLeadingZeroes(
      currentDate.getMonth() + 1
    )}${appendLeadingZeroes(currentDate.getDate())}${appendLeadingZeroes(
      currentDate.getHours()
    )}${appendLeadingZeroes(currentDate.getMinutes())}
 ${appendLeadingZeroes(currentDate.getSeconds())}${appendLeadingZeroes(
      currentDate.getMilliseconds()
    )}`;
    console.log(formattedDate);
    const payWithPaystack = (e) => {
      console.log(e.srcElement.alt);

      // selectedGateway.value = e.srcElement.alt;
      // emit("selected-gateway", selectedGateway.value);

      // close.click();
      /*eslint no-undef: "warn"*/
      let handler = PaystackPop.setup({
        key: process.env.VUE_APP_PAYSTACK_API_KEY,
        // key: process.env.VUE_APP_PAYSTACK_API_KEY,
        email: currentUser.value.userEmail,
        amount:
          (selectedCurrency.value
            ? Math.ceil(convertAmountToTenantCurrency.value)
            : TotalAmount.value) * 100,
        ref: `${formattedDate.substring(0, 4)}${uuidv4().substring(0, 4)}sub`,
        currency: selectedCurrency.value ? selectedCurrency.value : "NGN",
        // currency: "zar",

        // firstname: name,
        // ref: orderId,
        onClose: function() {
          // swal("Transaction Canceled!", { icon: "error" });
          toast.add({
            severity: "info",
            summary: "Transaction cancelled",
            detail: "You have cancelled the transaction",
            life: 2500,
          });
          console.log("closed");
        },
        callback: function(response) {
          subscriptionPayment(response);
          //Route to where you confirm payment status
          console.log(response, "Payment Received");
          console.log(donation);

          // axios
          //   .post(`/confirmDonation?txnref=${response.trxref}`, donation)
          //   .then((res) => {
          //     finish();
          //     console.log(res, "success data");
          //   })
          //   .catch((err) => {
          //     finish();
          //     toast.add({
          //       severity: "error",
          //       summary: "Confirmation failed",
          //       detail:
          //         "Confirming your purchase failed, please contact support at info@churchplus.co",
          //       life: 4000,
          //     });
          //     console.log(err, "error confirming payment");
          // });

          // emit("payment-successful", true);
        },
      });
      handler.openIframe();
    };

    return {
      selectedPlan,
      selectSubscription,
      subscriptionPlans,
      currentAmount,
      currentPlan,
      constValue,
      smsValue,
      selectMonth,
      selectMonths,
      selectAmount,
      selectEmailUnit,
      selectEmail,
      emailPrice,
      productsList,
      emailAmount,
      emailSelectedValue,
      subSelectedAmount,
      TotalAmount,
      expiryDate,
      subselectedDuratn,
      expenseApp,
      fixedAsset,
      acctReceived,
      payWithPaystack,
      paymentSummary,
      paymentSummObj,
      isChecked,
      selectCheckbox,
      checkedBoxArr,
      sumCheckboxItem,
      smsPrice,
      smsAmount,
      getCurrencySymbol,
      currentUser,
      existingPlan,
      Plans,
      selectCurrencyArr,
      selectedCurrency,
      currencies,
      display,
      close,
      paymentFailed,
      convertedAmount,
      convertAmountToTenantCurrency,
    };
  },
};
</script>

<style scoped>
.header {
  font: normal normal 800 34px/46px Nunito Sans;
}

.normal-text {
  font: normal normal normal 18px/24px Nunito Sans;
}

.small-header {
  font: normal normal bold 16px/22px Nunito Sans;
}

.sub {
  background: #ffffff 0% 0% no-repeat padding-box;
  /* box-shadow: 4px 10px 35px #0000000d; */
  box-shadow: 0px 1px 4px #02172e45;
  /* border: 1px solid #0f022021; */

  border-radius: 15px;
  opacity: 1;
  padding: 20px;
}

.plandropdown {
  text-align: left;
  font: normal normal normal 18px/24px Nunito Sans;
  letter-spacing: 0px;
  color: #02172e;
  opacity: 1;
}

.communication {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 4px 10px 35px #0000000d;
  border: 1px solid #0f022021;
  border-radius: 15px;
  opacity: 1;
}

.payment {
  box-shadow: 4px 10px 35px #0000000d;
  border: 1px solid #0f022021;
  border-radius: 15px;
  opacity: 1;
}

.pay-now {
  background: #136acd 0% 0% no-repeat padding-box;
  border-radius: 22px;
}

.row-button {
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
  background: #fff;
  margin: 12px 70px 15px 70px;
  transition: all 0.4s ease-in-out;
  max-height: 45px;
}

.continue-text {
  font-family: Nunito Sans !important;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
}

.emailWidth {
  width: 60%;
}

.form-control {
  width: 60% !important;
}
</style>
