<template>
  <div class="container-wide">
    <!-- write up part -->
    <div class="row">
      <div class="col-md-6 mt-5" :class="{ 'slide-right': slide }">
        <div class="row">
          <div class="col-12">
            <h2 class="events">Online Donation</h2>
            <p>Enter bank details to set up online donation</p>
          </div>
        </div>


          <table class="table table-border">
  <thead class="thead-light">
    <tr>
      <th scope="col-3">Name</th>
      <th scope="col-3">Bank</th>
      <th scope="col-3">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Building Project</td>
      <td>Benovalence</td>
      <td>Offerings</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
          </table>


<div class="container">
  <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     <DonationSetup  @payment-form="formCreated"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>


        <!-- <div class="container">
          <div class="row table-header space-between">
            <div class="col-sm-3 d-none d-sm-block">NAME</div>
            <div class="col-sm-3 d-none d-sm-block">BANK</div>
            <div class="col-sm-3 d-none d-sm-block">AMOUNT</div>
            <div class="col-sm-3 d-none d-sm-block">DATE</div>
          </div>
        </div>


        <div class="container">
          <div class="col-6 d-block d-sm-none">
            <div class="col-sm-3">NAME</div>
            <div class="col-sm-2">BANK</div>
            <div class="col-sm-2">AMOUNT</div>
            <div class="col-sm-2">DATE</div>
          </div>
        </div> -->

        <!-- <div class="row mt-4">
          <div class="offset-1 offset-md-0 col-10">Choose Bank</div>
          <div class="offset-1 offset-md-0 col-10">
            <Dropdown
              v-model="selectedBank"
              class="w-100"
              :options="nigerianBanks"
              optionLabel="name"
              :filter="false"
              :placeholder="selectedBank ? selectedBank.name : 'Select'"
              :showClear="false"
            >
            </Dropdown>
          </div>
        </div> -->
<!--
        <div class="row mt-4">
          <div class="offset-1 offset-md-0 col-10">Enter account number</div>
          <div class="offset-1 offset-md-0 col-10">
            <input
              class="form-control h-100"
              type="number"
              v-model="accountNumber"
              @blur="resolveCustomerDetail"
              placeholder="Account Number"
            />
          </div>
        </div> -->

        <div class="row mt-4">
          <!-- <div class="offset-1 offset-md-0 col-10">Enter account name</div>
          <div class="offset-1 offset-md-0 col-10">
            <input
              type="text"
              v-model="accountName"
              placeholder="Account name"
              ref="accNameRef"
              class="form-control"
            />
            <div class="mt-1">
              <em class="mt-1"
                >This will automatically come up, kindly confirm before clicking
                on save.</em
              >
            </div>
          </div> -->
          <!-- <div
            class="offset-1 offset-md-0 col-md-2 align-self-start"
            v-if="loading"
          >
            <div
              class="spinner-border text-primary"
              style="width: 3rem; height: 3rem"
              role="status"
            >
              <span class="sr-only">Loading...</span>
            </div>
          </div> -->
          <div
            class="col-10 offset-1 offset-md-0 btn primary-bg mt-5 text-white default-btn border-0"
            @click="completeSetUp"
          >
            Save and continue
          </div>
        </div>
      </div>

      <!-- image part -->
      <div
        class="col-md-6 col-12 bg-image d-none d-md-block"
        :class="{ 'slide-left': slide }"
      >
        <div class="row mt-3">
          <div class="col-md-12 text-center my-5 step">STEP 4 of 4</div>
        </div>
        <div class="image-dis">
          <img
            src="../../../assets/mobileonboarding/church1.svg"
            style="height: 40%; width: 40%"
          />
        </div>
      </div>
    </div>
    <Toast />
  </div>
</template>
<script>
import axios from "@/gateway/backendapi";
// import Dropdown from "primevue/dropdown";
import { ref } from "vue";
// import router from "../../../router";
import finish from "../../../services/progressbar/progress";
import { useToast } from "primevue/usetoast";
import axio from "axios";
import store from "../../../store/store";
import DonationSetup from "../../donation/PaymentTransaction"
export default {
  components: {
    DonationSetup
    // Dropdown,
  },
  setup() {
    const nigerianBanks = ref([]);
    const selectedBank = ref("");
    const accountNumber = ref("");
    const accountName = ref("");
    const loading = ref(false);
    const accNameRef = ref("");
    const toast = useToast();

    // const pastors = ref([{}]);
    const slide = ref(false);
    const banks = ref([
      {
        accountName: accountName.value,
        accountNumber: accountNumber.value,
        banks: selectedBank.value,
      },
    ]);

    const completeSetUp = () => {
      // router.push({ name: "SocialMedia" });
      // let bankDetails = {
      //   accountName: accountName.value,
      //   accountNumber: accountNumber.value,
      //   banks: selectedBank.value
      // }
      // banks.value.push(bankDetails)
      console.log(banks.value);
      store.dispatch("completeSetUp", banks.value);
      axios
        .put(`/mobile/v1/Profile/UpdateChurchProfile`, store.getters.formData)
        .then((res) => {
          console.log(res, "🎄🎄🎄");
          if (res.data.status) {
            toast.add({
              severity: "success",
              summary: "Setup complete",
              detail: "Your setup is complete and succesful",
              life: 3000,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getBanks = () => {
      axios
        .get("/api/Financials/GetBanks")
        .then((res) => {
          console.log(res);
          nigerianBanks.value = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getBanks();

    const resolveCustomerDetail = async () => {
      loading.value = true;
      try {
        let header = {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_PAYSTACK_SECRET_KEY}`,
          },
        };
        console.log(header, "header");

        let { data } = await axio.get(
          `https://api.paystack.co/bank/resolve?account_number=${accountNumber.value}&bank_code=${selectedBank.value.code}`,
          header
        );
        console.log(data);
        accountName.value = data.data.account_name;
        accNameRef.value.focus();

        loading.value = false;

        toast.add({
          severity: "success",
          summary: "Account Check Successful",
          detail: "The account check was successful",
          life: 3000,
        });
      } catch (error) {
        finish();
        console.log(error);

        loading.value = false;

        toast.add({
          severity: "error",
          summary: "Account Check Error",
          detail: "Please check your banks details again",
          life: 3000,
        });
      }
      console.log(selectedBank.value.code, accountNumber.value);
    };

    return {
      nigerianBanks,
      selectedBank,
      accountNumber,
      completeSetUp,
      slide,
      accountName,
      resolveCustomerDetail,
      loading,
      accNameRef,
      banks,
    };
  },
};
</script>
<style scoped>

.table-header1 {
    background: #f1f3f9;
    color: #8898aa;
    font-size: 11px;
    text-align: left;
    box-shadow: 0px 3px 6px #2c28281c;
    width: 25vw;
    padding: .5rem 0;
    max-width : 0;
  }

  .table-border{
    border-radius: 0;
  }

.setup {
  color: #031c39;
  font: normal normal 800 30px/40px Nunito Sans;
}
.check-icon {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #136acd;
}
.pi {
  color: #fff;
  margin-top: 6px;
  margin-left: 2px;
}
.btn-button {
  border-radius: 25px !important;
  width: 40%;
  height: 25px;
  line-height: 10px;
}
.bg-image {
  background: transparent linear-gradient(180deg, #2e67ce 0%, #690c7f 100%) 0%
    0% no-repeat padding-box;
  height: 133vh;
}
.image-dis {
  display: flex;
  justify-content: center;
  align-items: center;
}
.next-btn {
  background: #f1faff 0% 0% no-repeat padding-box;
  border: 0.20000000298023224px solid #7894a6;
  border-radius: 23px;
  opacity: 1;
}
.next-text {
  font: normal normal bold 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #136acd;
  opacity: 1;
}
.step {
  font: normal normal bold 18px/24px Nunito Sans;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
/* Add pastor style */
.modal-title {
  margin-left: 2rem;
}
.form-cover {
  margin-left: 1.5rem !important;
  width: 100%;
}
.form-group {
  margin-top: 0rem !important;
}
.form-group label {
  padding-top: 0;
  font-weight: bold;
}

.form-control {
  width: 98%;
}

.select option {
  width: 150px;
}

.upload-Btn {
  border-radius: 25px;
  height: 30px;
  width: 90px;
  line-height: 15px;
}

.container {
  width: 100%;
  height: 35vh;

  border-radius: 27px !important;
  background: rgb(248, 248, 249);
  margin-top: 0.3rem;
}

.photo-box {
  border-radius: 27px;
  width: 95%;
  height: 55%;
  background-color: rgb(100%, 100%, 100%);
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
}

.social-input {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  /* end add pastor detail */
}
.bg-mission {
  background: #dedede61 0% 0% no-repeat padding-box;
  border: 1px solid #d2cfcf5c;
  border-radius: 24px;
  opacity: 0.64;
  height: 30px;
  padding-right: 50px;
}
.mission {
  font: normal normal bold 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #002044;
}
.edit {
  font: normal normal bold 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #136acd;
  cursor: pointer;
}

.pastors-name {
  font: normal normal 600 16px/22px Nunito Sans;
}

.edit-pastor-details {
  font: normal normal bold 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #136acd;
  cursor: pointer;
}

.btnIcons {
  color: #136acd;
  background-color: #dde2e6;
  border-radius: 40px;
  border: none;
  padding: 7px;
  text-align: center;
}

.slide-left {
  transition: all 1s ease-in-out;
  transform: translateX(-609px);
}

.slide-right {
  transition: all 1s ease-in-out;
  transform: translateX(478px);
}

.events {
  font: normal normal 800 28px Nunito sans;
}

.dropdown-menu {
  max-height: 300px;
  overflow: auto;
}
</style>
