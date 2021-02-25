
<template>
  <div class="container-wide shadow p-3 mb-5 bg-body rounded mt-5">
    <div class="row mt-5">
      <div class="col-md-6 offset-md-3 mb-3"></div>
    </div>

    <!-- top Address -->
    <div class="row">
      <div
        class="col-md-3 d-md-flex align-items-center justify-content-end text-md-right mt-1 font-weight-700"
      ></div>
      <div class="col-md-5 mb-3">
        <h5 class="font-weight-bold text-center">ATTENDANCE & CHECKIN</h5>
        <p class="text-center font-weight-500">
          {{ eventData.name }} - {{ eventData.date }}
        </p>
      </div>
    </div>

    <!--end top Address -->

    <!-- top area -->
    <div class="row" v-if="!applyBase && !checkedIn">
      <div
        class="col-md-3 d-md-flex align-items-center justify-content-end text-md-right mt-1 font-weight-700"
      >
        <label for="">Phone Number</label>
      </div>
      <div class="col-md-5">
        <span class="p-input-icon-left w-100">
          <i class="pi pi-phone icon" />
          <InputText
            @blur="checkCharacter"
            @input="clearNames"
            class="w-100"
            type="text"
            v-model="enteredvalue"
            aria-required=""
          />
        </span>
      </div>
    </div>
    <!-- end of top area -->
    <!-- name area -->
    <div class="row mt-3" v-if="!applyBase && !checkedIn">
      <div
        class="col-md-3 d-md-flex align-items-center justify-content-end text-md-right mt-1 font-weight-700"
      >
        <label for="">Name</label>
      </div>
      <div class="col-md-5">
        <span class="p-input-icon-left w-100">
          <i class="pi pi-users icon" />
          <InputText
            class="w-100"
            type="text"
            aria-required=""
            v-model="person.name"
          />
        </span>
      </div>
    </div>
    <!--end name area -->

    <!-- tosin -->
    <div class="row" v-if="!applyBase && !checkedIn">
      <div
        class="col-md-3 d-md-flex align-items-center justify-content-end text-md-right mt-1 font-weight-700"
      ></div>
      <div class="col-md-5 mt-2 pl-0" @click="toggleBase">
        <i
          class="pi pi-spin pi-spinner"
          style="fontsize: 2rem"
          v-if="autosearch"
        ></i>
        <div
          class="col-md-12 d-flex flex-column"
          v-for="(person, index) in names"
          :key="index"
        >
          <a
            class="d-flex text-decoration-none c-pointer mb-2"
            @click="populateInputfields(person)"
            >{{ person.name }}</a
          >
        </div>
      </div>
    </div>
    <!-- tosin -->

    <!--start of top area button -->
    <div class="row mb-4" v-if="!applyBase && !checkedIn">
      <div class="col-md-3 text-md-right"></div>
      <div class="col-md-5 mt-4 text-center col-sm-2" @click="toggleBase">
        <button class="default-btn add-btn">
          <!-- <i class="fas fa-circle-notch fa-spin" v-if="loading"></i> -->
          Submit
        </button>
      </div>
    </div>
    <!--end of top area button -->

    <!-- start of bottom area -->
    <div class="row" v-if="applyBase">
      <div class="col-md-12">
        <div class="row mt-n2 my-2">
          <div
            class="col-md-3 d-md-flex align-items-center justify-content-end text-md-right mt-2 font-weight-700"
          >
            <label for="">Name</label>
          </div>
          <div class="col-md-5">
            <span class="p-input-icon-left w-100">
              <i class="pi pi-users icon" />
              <InputText
                class="w-100"
                type="text"
                aria-required=""
                v-model="person.name"
                @keydown="disableEdit"
              />
            </span>
          </div>
        </div>

        <div class="row">
          <div
            class="col-md-3 d-md-flex align-items-center justify-content-end text-md-right mt-2 font-weight-700"
          >
            <label for="">Email</label>
          </div>
          <div class="col-md-5">
            <span class="p-input-icon-left w-100 my-md-3">
              <i class="pi pi-envelope icon" />
              <InputText
                class="w-100"
                type="text"
                aria-required=""
                v-model="person.email"
                @keydown="disableEdit"
              />
            </span>
          </div>
        </div>

        <div class="row my-2">
          <div
            class="col-md-3 d-md-flex align-items-center justify-content-end text-md-right mt-2 font-weight-700"
          >
            <label for="">Address</label>
          </div>
          <div class="col-md-5">
            <span class="p-input-icon-left w-100">
              <i class="pi pi-map-marker icon" />
              <InputText
                class="w-100"
                type="text"
                aria-required=""
                v-model="person.address"
                @keydown="disableEdit"
              />
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- end of bottom area -->

    <!-- button area -->
    <div class="row mt-n2 my-2" v-if="applyBase">
      <div class="col-md-2 text-md-right d-flex ml-md-n5"></div>
      <div class="col-md-4 mt-4 text-md-right col-6 d-flex justify-content-end">
        <button class="default-btn" @click="notMe">Not Me</button>
      </div>
      <div class="col-md-4 mt-4 text-md-left col-6">
        <button class="default-btn add-btn" @click="confirm">Confirm</button>
      </div>
    </div>
    <!--end of button area -->

    <!-- confirmation Note -->
    <div class="row" v-if="checkedIn">
      <div
        class="col-md-3 d-md-flex align-items-center justify-content-end text-md-right mt-1 font-weight-700"
      ></div>
      <div class="col-md-5 mb-3">
        <h5 class="font-weight-bold text-center text-success">
          CONGRATULATIONS
        </h5>
        <p class="text-center font-weight-500 text-capitalize">
          Checked in Successfully
        </p>
      </div>
    </div>
    <!-- end of confirmation Note -->

    <!-- Powered by Churchplus -->
    <div class="row">
      <div
        class="col-md-3 d-md-flex align-items-center justify-content-end text-md-right mt-3 font-weight-700"
      ></div>
      <div class="col-md-5 mt-2">
        <p class="text-center fw-normal" style="color: #136acd">
          Powered by CHURCHPLUS
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import axios from "@/gateway/backendapi";
// import router from "../../router/index";
import InputText from "primevue/inputtext";
import { useRoute } from "vue-router";
import dateFormatter from "@/services/dates/dateformatter";
export default {
  setup() {
    const applyBase = ref(false);
    const names = ref([]);
    const emails = ref([]);
    const address = ref([]);
    const enteredValue = ref("");
    const loading = ref(false);
    const autosearch = ref(false);
    const person = ref({});
    const route = useRoute();
    const checkedIn = ref(false);

    const toggleBase = () => {
      applyBase.value = !applyBase.value;
    };

    // searching through the attendancedetails
    const checkCharacter = (e) => {
      if (e.target.value.length > 0) {
        loading.value = true;
        autosearch.value = true;
        axios
          .get(
            `/api/CheckInAttendance/SearchMemberByPhone?searchText=${e.target.value}`
          )
          .then((res) => {
            loading.value = false;
            autosearch.value = false;
            names.value = res.data;
            person.value = res.data[0];
            console.log(names.value);

            if (person.value) applyBase.value = true;
          })
          .catch((err) => {
            loading.value = false;
            autosearch.value = false;
            console.log(err);
          });
      }
    };

    // populate input fields
    const populateInputfields = (obj) => {
      person.value = obj;
      console.log(person);
    };

    // function to disable edit
    const disableEdit = (e) => {
      e.preventDefault();
      console.log("hello there");
    };

    // confirm status
    const confirm = () => {
      const newPerson = {
        person: {
          personId: person.value.personId,
        },
      };
      console.log(person.value);
      console.log(newPerson);
      loading.value = true;
      autosearch.value = true;
      axios
        .post("/api/CheckInAttendance/MarkAttendance", newPerson)
        .then((res) => {
          loading.value = false;
          autosearch.value = false;
          console.log(res, "tosin");

          if (newPerson) checkedIn.value = true;
          applyBase.value = false;
        })
        .catch((err) => {
          loading.value = false;
          autosearch.value = false;
          console.log(err, "ajose");
        });
    };

    // function to clear input
    const clearNames = () => {
      names.value = [];
    };

    // getting events and date
    const eventData = ref({});
    const getDateAndEvent = () => {
      axios
        .get(
          `/api/CheckInAttendance/WebCheckInGetEventDetails?attendanceCode=${route.params.code}`
        )
        .then((res) => {
          eventData.value.name = res.data.fullEventName;
          eventData.value.date = dateFormatter.monthDayTime(res.data.eventDate);

          console.log(eventData);
          console.log(res, "response");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getDateAndEvent();

    //email, name and address masking is
    const maskEmail = function (number) {
      const str = number + "";
      const last = str.slice(-4);
      return last.padStart(str.length, "*");
    };

    //not me button
    const notMe = () => {};

    console.log(maskEmail("Ajose Tosin"));
    console.log(maskEmail("tosinajose@gmail.com"));
    console.log(maskEmail("1 imam dauda Lagos State"));

    return {
      toggleBase,
      checkCharacter,
      populateInputfields,
      InputText,
      applyBase,
      names,
      emails,
      address,
      enteredValue,
      loading,
      person,
      autosearch,
      disableEdit,
      confirm,
      clearNames,
      getDateAndEvent,
      route,
      eventData,
      notMe,
      dateFormatter,
      checkedIn,
      maskEmail,
    };
  },
};
</script>

<style scoped>
.add-btn {
  background: #136acd;
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  border: none;
}

.add-btn2 {
  background: none;
}
</style>