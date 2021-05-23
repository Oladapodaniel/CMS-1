<template>
  <div class="container-wide container-top">
      <div class="row mt-5">
          <div
            class="col-12 header"
          >
            Subscription
          </div>
          <div class="col-12 normal-text mt-3">
              Select the subscription that suit your church and the additional tolls you need for your church growth.
          </div>
        <div class="col-md-6 mt-5">
          
          <div class="row bg-white pb-2 sub" >
            <div class="col-md-6 col-lg-6  col-12">
              <div class="py-2 small-header">Subscription Type*</div>
              <Dropdown
                class=" plandropdown w-100"
                v-model="selectedPlan"
                :options="subscriptionPlans"
                optionLabel="description"
                placeholder=""
              />
            </div>
            <div class="col-md-6 col-lg-6 col-12">
              <div class="py-2 small-header">Duration (month)</div>
              <Dropdown
                class="w-100"
                v-model="selectMonth"
                :options="selectMonths"
                optionLabel="name"
                placeholder="Select duration"
              />
            </div>
            <div class="col-md-3 col-lg-3 col-3  ml-3 mt-3 normal-text">
              {{ selectedPlan.amountInNaira }}
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

        <div class="col-md-6 p-4 sub mt-3 bg-white" >
            <div class="">
              <div class="small-header">Communication</div>
              <div class="row mt-3 normal-text">
                <div class="col-md-2 col-lg-2 col-4">SMS</div>
                <div class="col-md-6 offset-md-1 col-4 mb-2">
                  <input
                    type="number"
                    v-model="smsValue"
                    class="form-control"
                  />
                </div>
                <div class="col-md-2 col-6">
                  {{ smsValue * 2 }}
                </div>
              </div>
              <div class="row mt-2 normal-text">
                <div class="col-md-2 col-lg-2 col-4">Email</div>
                <div class="col-md-6 offset-md-1 col-4 ">
                  <Dropdown
                    class="w-100"
                    v-model="selectEmail"
                    :options="selectEmailUnit"
                    optionLabel="name"
                    placeholder="Select "
                  />
                </div>
                <div class="col-md-2 col-4">
                  {{
                    selectEmail.constValue
                      ? emailAmount 
                      : 0
                  }}
                </div>
              </div>
              <div class="my-3 small-header">Accounting</div>
              <div class="row normal-text">
                <div class="col-md-6 col-4">Fixed Assets</div>
                <div class="col-md-2 col-4"><input type="checkbox" /></div>
                <div class="col-md-2 text-center col-4">100</div>
              </div>
              <div class="row normal-text mt-2">
                <div class="col-md-6 col-4 ">Expenses App</div>
                <div class="col-md-2 col-4 "><input type="checkbox" /></div>
                <div class="col-md-2 text-center col-4 ">1200</div>
              </div>
              <div class="row normal-text mt-2">
                <div class="col-md-6  col-4">Account Receive</div>
                <div class="col-md-2  col-4"><input type="checkbox" /></div>
                <div class="col-md-2 text-center col-4">2000</div>
              </div>
            </div>
        </div>
        <!-- payment summary -->
        <div
          class="col-md-4 bg-white col-lg-4 col-12 sub mt-3 offset-md-1 "
        >
          <div class="h-100  rounded">
            <div class="text-center small-header">Payment Summary</div>
            <div class="row mt-3 normal-text">
              <div class="col-md-6 col-6">Subscription</div>
              <div class="col-md-6  col-6 text-right">
                {{ selectedPlan.amountInNaira}}
              </div>
            </div>
            <div class="row mt-2 normal-text">
              <div class="col-md-6 col-6">SMS</div>
              <div class="col-md-6 col-6 text-right">
                {{ smsValue == "" ? "0" : smsValue }}
              </div>
            </div>
            <div class="row mt-3 normal-text">
              <div class="col-md-6 col-6">Email</div>
              <div class="col-md-6 col-6 text-right">
                {{
                  emailSelectedValue
                    ? emailAmount
                    : 0
                }}
              </div>
            </div>
            
            <div class="row mt-3 normal-text">
              <div class="col-md-6 col-6">Total</div>
              <div class="col-md-6 col-6 text-right">
                {{ TotalAmount }}
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12" data-toggle="modal" data-target="#PaymentOptionModal">
                  <button class="btn pay-now text-white w-100 normal-text">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
        <!-- payment summary end -->
        <!-- Modal -->
        <div class="modal fade" id="PaymentOptionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header bg-modal">
                <h5 class="modal-title" id="exampleModalLongTitle">Payment methods</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" ref="close">&times;</span>
                </button>
                </div>
                <div class="modal-body p-0 bg-modal pb-5">
                <!-- <PaymentOptionModal :orderId="formResponse.orderId" :donation="donationObj" :close="close" :name="name" :amount="amount" :converted="convertedAmount" :email="email" @payment-successful="successfulPayment" :gateways="formResponse.paymentGateWays" :currency="dfaultCurrency.shortCode" @selected-gateway="gatewaySelected"/> -->
                </div>
                <!-- <div class="modal-footer bg-modal">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
                </div> -->
                </div>
            </div>
            </div>
      </div>
  </div>
</template>

<script>
import axios from "@/gateway/backendapi";
import Dropdown from "primevue/dropdown";
import formatDate from "../../services/dates/dateformatter"
import { ref } from "vue";
export default {
  components: { Dropdown },
  setup() {
    const subscriptionPlans = ref([]);
    const productsList = ref([]);
    const selectMonth = ref({});
    const selectedPlan = ref({});
    const currentAmount = ref("");
    const currentPlan = ref("");
    const smsValue = ref("");
    const selectAmount = ref("");
    const selectEmail = ref({});
    const emailPrice = ref();
    const emailAmount = ref()
    const emailSelectedValue = ref("")
    const subSelectedAmount = ref("")
    const TotalAmount = ref("")
    const expiryDate = ref("")

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

    const selectSubscription = () => {
      axios.get("/api/Subscription/GetSubscription").then((res) => {
        console.log(res.data);
        subscriptionPlans.value = res.data.returnObject.subscriptionPlans;
        selectedPlan.value = subscriptionPlans.value.find(
          (i) => i.description === "GROWTH PLAN"
        );
        // subSelectedAmount.value = selectedPlan.value.amountInNaira
        currentAmount.value = res.data.returnObject.amountInNaira;
        currentPlan.value = res.data.returnObject.description;
        productsList.value = res.data.returnObject.productsList;
        console.log(productsList.value);
        emailPrice.value = productsList.value.find(
          (i) => i.name === "Email"
        ).price;
        
        emailAmount.value = selectEmail.value.constValue * emailPrice.value
        TotalAmount.value = selectedPlan.value.amountInNaira + smsValue.value + emailAmount.value 

        expiryDate.value = formatDate.monthDayYear(res.data.returnObject.subscriptionExpiration)
      });
    };

    selectSubscription();

    return {
      selectedPlan,
      selectSubscription,
      subscriptionPlans,
      currentAmount,
      currentPlan,
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
      expiryDate
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
  padding: 20px
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
    background: #136ACD 0% 0% no-repeat padding-box;
    border-radius: 22px;
}
</style>
