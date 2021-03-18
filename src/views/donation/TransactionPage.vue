<template>
  <div class="">
    <div class="row">
      <div class="container">
        <div class="row my-5 d-flex align-items-center">
          <div class="col-md-6 pl-4">
            <p class="search-span px-2">
              <input
                type="text"
                class="search-control"
                placeholder="Search Transactions"
                @input="search()"
              />
              <i class="pi pi-search p-2" style="height: 30px; width: 30px"></i>
            </p>
          </div>

          <div class="col-md-2 col-4 offset-md-2">
            <Dropdown
              v-model="ownerDetails"
              :options="fields"
              optionLabel="type"
              placeholder="Profile Details"
              class="d-flex justify-content-end border-0"
            />
          </div>
          <div class="col-md-1 col-2">
            <img
              class="imgee"
              src="../../assets/best-Copy.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div class="col-md-1 col-2">
            <i
              class="pi pi-download bell-shadow bell p-3 d-flex justify-content-center align-items-center"
            ></i>
          </div>
        </div>

        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-md-6 px-4">
            <p class="htext">Your Transaction</p>
          </div>

          <div
            class="col-md-5 col-4 d-flex justify-content-start align-items-center"
          >
            <!-- start of date area -->
            <div style="width: 150px; height: 40px" class="d-flex justify-content-between">
              <input
                type="date"
                class="form-control fone p-3 border-0 date-area"
                v-model="startDate"
              />
              <input
                type="date"
                class="form-control fone p-3 border-0 date-area"
                v-model="endDate"
              />
            </div>
            <!-- end of date area -->
          </div>

          <div class="col-md-1 col-2">
            <i
              class="pi pi-filter p-3 bell-shadow bell d-flex justify-content-center align-items-center"
            ></i>
          </div>


        </div>
        <!-- End of Top Section -->

        <!-- table content -->
        <div class="row mt-4">
          <div class="px-4 mt-4 new">
            <label for="timestamp">Newer</label>
          </div>
        </div>
        <div
          class="row mt-2 py-2 d-md-flex justify-content-center align-items-center bel bell-shadow"
        >
          <div class="col-md-2">
            <div class="d-flex justify-content-between">
              <span class="font-weight-700 d-flex d-md-none">PICTURE</span>
              <span class="text-right">
                <img class="imgee" src="../../assets/best-Copy.jpg" alt=""
              /></span>
            </div>
          </div>

          <div
            class="col-md-4 htext2 d-md-flex justify-content-center align-items-cente"
          >
            <p class="d-flex justify-content-between">
              <span class="font-weight-700 d-flex d-md-none">DONATIONS</span>
              <span class="text-right">Payment for Building project</span>
            </p>
          </div>
          <div
            class="col-md-3 htext2 d-md-flex justify-content-center align-items-cente"
          >
            <p class="d-flex justify-content-between">
              <span class="font-weight-700 d-flex d-md-none">DATE</span>
              <span class="text-right">24 March, 2021</span>
            </p>
          </div>

          <div
            class="col-md-2 d-md-flex justify-content-center align-items-center"
          >
            <div class="d-flex justify-content-between">
              <span class="font-weight-700 d-flex d-md-none"
                >PAYMENT OPTION</span
              >
              <span class="text-right">
                <img
                  class="imgee"
                  src="../../assets/2flutterwave.png"
                  alt=""
                  srcset=""
                />
              </span>
            </div>
          </div>
          <div class="col-md-1 htext2">
            <p class="d-flex justify-content-between">
              <span class="font-weight-700 d-flex d-md-none">AMOUNT</span>
              <span class="text-right">$200</span>
            </p>
          </div>
        </div>
        <!-- end of table content -->
        <!-- table content -->
        <div class="row mt-4">
          <div class="px-4 mt-4 new">
            <label for="timestamp">Newer</label>
          </div>
        </div>
        <div
          class="row mt-2 py-2 d-md-flex justify-content-center align-items-center bel bell-shadow"
        >
          <div class="col-md-2">
            <div class="d-flex justify-content-between">
              <span class="font-weight-700 d-flex d-md-none">PICTURE</span>
              <span class="text-right">
                <img class="imgee" src="../../assets/best-Copy.jpg" alt=""
              /></span>
            </div>
          </div>

          <div
            class="col-md-4 htext2 d-md-flex justify-content-center align-items-cente"
          >
            <p class="d-flex justify-content-between">
              <span class="font-weight-700 d-flex d-md-none">DONATIONS</span>
              <span class="text-right">Payment for Building project</span>
            </p>
          </div>
          <div
            class="col-md-3 htext2 d-md-flex justify-content-center align-items-cente"
          >
            <p class="d-flex justify-content-between">
              <span class="font-weight-700 d-flex d-md-none">DATE</span>
              <span class="text-right">24 March, 2021</span>
            </p>
          </div>

          <div
            class="col-md-2 d-md-flex justify-content-center align-items-center"
          >
            <div class="d-flex justify-content-between">
              <span class="font-weight-700 d-flex d-md-none"
                >PAYMENT OPTION</span
              >
              <span class="text-right">
                <img
                  class="imgee"
                  src="../../assets/2flutterwave.png"
                  alt=""
                  srcset=""
                />
              </span>
            </div>
          </div>
          <div class="col-md-1 htext2">
            <p class="d-flex justify-content-between">
              <span class="font-weight-700 d-flex d-md-none">AMOUNT</span>
              <span class="text-right">$200</span>
            </p>
          </div>
        </div>
        <!-- end of table content -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
 import axios from "@/gateway/backendapi";
import Dropdown from "primevue/dropdown";
import { useRoute } from "vue-router"
export default {
  setup() {
    // const date = ref(new Date().toISOString().substr(0, 10));
    const route = useRoute()
    const ownerDetails = ref("Ajose Tosin");
    const startDate = ref(new Date().toISOString().substr(0, 10))
    const endDate = ref(new Date().toISOString().substr(0, 10))
    const fields = ref([
      { type: "Adebayo Emmanuel" },
      { type: "Profile" },
      { type: "Settings" },
      { type: "LogOut" },
    ]);
    const userTransaction = ref ([])
//     const search = (e) => {
//       if (e.target.value !== "") {

// userTransaction.value.filter((ele) => {
// })
//       }
//     }
    const getPaymentDetails = () => {
      let tenantId = localStorage.getItem('tenantId')
          let initialData =  {
          startDate: startDate.value,
          endDate: endDate.value,
          userId: route.params.userId,
          tenantId: tenantId
        }

      axios
              .post(
                "/mobile/v1/PaymentForm/contributions", initialData
              )
              .then((res) => {
                console.log(res, "kjjjhjjjje");
                console.log(res.data, "kalistocrazy");
          })
              .catch((err) => console.log(err.response));
// console.log(route.params.userId, tenantId)
          }
          getPaymentDetails()

    return { Dropdown, fields, ownerDetails,  userTransaction, startDate, endDate};
  },
};
</script>

<style scoped>
.search-control {
  width: calc(100% - 30px);
  padding: 0.38rem;
  border: none;
  background: transparent;
  outline: transparent;
}

.search-span {
  background: #f5f8f9;
  border-radius: 200px;
  width: 100%;
}

.imgee {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.bell {
  border-radius: 50%;
  background: #f7f7f9;
  transition: all 0.4s ease-in-out;
}
/* .bel {
  background: #f7f7f9;
  transition: all 0.4s ease-in-out;
} */

.bell-shadow:hover {
  background: #fff;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  cursor: pointer;
  transform: scale(1.05, 1.05);
}

.pi {
  font-size: 1.5rem;
}

.date-area {
  border-radius: 20px;
  background: #f7f7f9;
}

.htext {
  font: normal normal 800 44px/60px Nunito Sans;
  font-size: 30px;
  font-weight: bolder;
  letter-spacing: 2px;
  color: #020f1e;
}
.htext2 {
  font: Nunito Sans;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #020f1e;
}

.new {
  color: #c2c2c2;
  font-size: 15px;
  font-weight: bold;
}
</style>