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
              <div class="py-2 small-header">Duration</div>
              <Dropdown
                class="w-100"
                v-model="selectMonth"
                :options="selectMonths"
                optionLabel="name"
                placeholder="Select a day"
              />
            </div>
            <div class="col-md-3 col-lg-3 col-3  ml-3 mt-3">
              {{ selectedPlan.amountInNaira }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-lg-4 col-12 offset-md-1 sub mt-5">
          <div class="small-header">Current plan</div>
          <div class="row bg-white rounded pb-2">
            <div class="">
              <div class="col-12 normal-text mt-2">
                <div>{{ currentPlan }}</div>
              </div>
              <div class="col-12 mt-3">Date</div>
            </div>
          </div>
        </div>
        <!-- Add ons -->
        <div class="col-md-12 col-lg-12 pt-3 mt-3">ADD-ONS</div>

        <div class="col-md-6 p-4 sub mt-3 bg-white" >
            <div class="">
              <div class="small-header">Communication</div>
              <div class="row">
                <div class="col-md-2 col-lg-2 col-4">SMS</div>
                <div class="col-md-5 col-lg-5 col-4 mb-2">
                  <input
                    type="number"
                    v-model="smsValue"
                    class="form-control"
                  />
                </div>
                <div class="col-md-6 col-lg-4 col-6 text-center">
                  {{ smsValue * 2 }}
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 col-lg-2 col-4">Email</div>
                <div class="col-md-5 col-lg-5 col-4 ">
                  <Dropdown
                    class="w-100"
                    v-model="selectEmail"
                    :options="selectEmailUnit"
                    optionLabel="name"
                    placeholder="Select "
                  />
                </div>
                <div class="col-md-4 col-4 text-center">
                  {{
                    selectEmail.constValue
                      ? selectEmail.constValue * emailPrice
                      : 0
                  }}
                </div>
              </div>
              <div class="my-3 font-weight-bold">Accounting</div>
              <div class="row">
                <div class="col-md-6 col-4">Fixed Assets</div>
                <div class="col-md-2 col-4"><input type="checkbox" /></div>
                <div class="col-md-2 text-center col-4">100</div>
              </div>
              <div class="row">
                <div class="col-md-6 col-4 ">Expenses App</div>
                <div class="col-md-2 col-4 "><input type="checkbox" /></div>
                <div class="col-md-2 text-center col-4 ">1200</div>
              </div>
              <div class="row">
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
            <div class="text-center my-3 font-weight-bold">Payment Summary</div>
            <div class="row mx-1">
              <div class="col-md-6 col-6">Subscription</div>
              <div class="col-md-6  col-6 text-right">
                {{ selectedPlan.amountInNaira }}
              </div>
            </div>
            <div class="row mx-1">
              <div class="col-md-6 col-6">SMS</div>
              <div class="col-md-6 col-6 text-right">
                {{ smsValue == "" ? "0" : smsValue }}
              </div>
            </div>
            <div class="row mx-1">
              <div class="col-md-6 col-6">Email</div>
              <div class="col-md-6 col-6 text-right">
                {{
                  selectEmail.constValue
                    ? selectEmail.constValue * emailPrice
                    : 0
                }}
              </div>
            </div>
            <div class="text-center mt-3">
              <button class="btn btn-light">Pay Now</button>
            </div>
          </div>
        </div>
        <!-- payment summary end -->
      </div>
  </div>
</template>

<script>
import axios from "@/gateway/backendapi";
import Dropdown from "primevue/dropdown";
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
        currentAmount.value = res.data.returnObject.amountInNaira;
        currentPlan.value = res.data.returnObject.description;
        productsList.value = res.data.returnObject.productsList;
        console.log(productsList.value);
        emailPrice.value = productsList.value.find(
          (i) => i.name === "Email"
        ).price;
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
  box-shadow: 4px 10px 35px #0000000d;
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
</style>
