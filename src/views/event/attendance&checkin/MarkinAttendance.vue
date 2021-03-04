
<template>
  <div
    class="container-wide shadow p-3 mb-5 bg-body rounded mt-5"
    style="max-width: 700px"
  >
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
    <div class="row mb-4">
      <div
        class="col-md-3 d-md-flex align-items-center justify-content-end text-md-right mt-1 font-weight-700"
      >
        <label for="">Phone Number</label>
      </div>
      <div class="col-md-5">
        <span class="p-input-icon-left w-100">
          <i class="pi pi-phone icon" />
          <InputText
            @input="checkCharacter"
            class="w-100"
            type="text"
            v-model="enteredValue"
            aria-required=""
          />
        </span>
        <i
          class="pi pi-spin pi-spinner"
          style="fontsize: 2rem"
          v-if="autosearch && !person.name"
        ></i>
      </div>
    </div>
    <!-- end of top area -->

    <!--start of top area button -->
    <div class="row mb-4">
      <div class="col-md-3 text-md-right"></div>
      <div class="col-md-5 mt-4 text-center col-sm-2">
        <p class="my-1 text-danger" v-if="showNoPhoneError">
          Please enter your phone number
        </p>
        <button
          class="default-btn add-btn"
          @click="checkCharacter"
          ref="submitBtn"
          v-if="!appltoggle"
        >
          <!-- <i class="fas fa-circle-notch fa-spin" v-if="loading"></i> -->
          Submit
        </button>
      </div>
    </div>
    <!--end of top area button -->

    <!-- start of bottom area -->
    <div class="row" v-if="appltoggle">
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
                :disabled="disabled"
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
                :disabled="person.personId"
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
                :disabled="person.personId"
              />
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- end of bottom area -->

    <!-- button area -->
    <div class="row mt-n2 my-2" v-if="appltoggle">
      <div class="col-md-2 text-md-right d-flex ml-md-n5"></div>
      <div class="col-md-4 mt-4 text-md-right col-6 d-flex justify-content-end">
        <button class="default-btn" @click="notme">Not Me</button>
      </div>
      <div class="col-md-4 mt-4 text-md-left col-6">
        <button
          class="default-btn add-btn"
          @click="confirmCheck"
          :disabled="!person.name || person.length < 1"
        >
          Confirm
        </button>
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

      <Toast />
    </div>
  </div>
</template>


<script>
import { computed, ref } from "vue";
import axios from "@/gateway/backendapi";
// import router from "../../router/index";
import InputText from "primevue/inputtext";
import { useRoute } from "vue-router";
import dateFormatter from "@/services/dates/dateformatter";
import { useToast } from "primevue/usetoast";
import stopProgressBar from "../../../services/progressbar/progress";

export default {
  setup() {
    const connectName = ref("");
    const appltoggle = ref(false);
    const names = ref("");
    const emails = ref("");
    const address = ref("");
    const enteredValue = ref("");
    const loading = ref(false);
    const autosearch = ref(false);
    const noError = ref(true);
    const person = ref({});
    const checkedIn = ref(false);
    const route = useRoute();
    const toast = useToast();
    const submitBtn = ref(null);

    const toggleBase = () => {
      appltoggle.value = !appltoggle.value;
    };

    const email = computed(() => {
      if (person.value.email) return maskEmail(person.value.email);
      return "";
    });
    const name = computed(() => {
      if (person.value.name) return formatString(person.value.name);
      return "";
    });
    const userAddress = computed(() => {
      if (person.value.email) return formatString(address.value.name);
      return "";
    });

    // searching through the attendance details
    const showNoPhoneError = ref(false);
    const personData = ref({});
    const checkCharacter = (e) => {
      if (e.target.value.length < 11) {
        person.value = {};
        return false;
      }
      showNoPhoneError.value = false;
      if (!enteredValue.value) {
        showNoPhoneError.value = true;
        return false;
      }
      // if (e.target.value.length > 0) {
      loading.value = true;
      autosearch.value = true;
      axios.get(`/searchmemberbyphone?searchtext=${enteredValue.value}&&attendanceCode=${route.params.code}`)
      
        .then((res) => {
          console.log(res, "RESPONSE");
          loading.value = false;
          autosearch.value = false;
          names.value = res.data;
          personData.value.firstName = res.data[0] ? res.data[0].name : "";
          personData.value.email = res.data[0] ? res.data[0].email : "";
          personData.value.homeAddress = res.data[0] ? res.data[0].address : "";
          personData.value.personId = res.data[0] ? res.data[0].personId : "";
          personData.value.mobilePhone = enteredValue.value;
          person.value = res.data[0] ? res.data[0] : { };

          if (person.value.name) {
            person.value.name = formatString(person.value.name, 2, 4);
          }
          if (person.value.email) {
            person.value.email = maskEmail(person.value.email, 2, 4);
          }
          if (person.value.address) {
            person.value.address = formatString(person.value.address, 2, 4);
          }
          console.log(res, "RPONSE");
          populateInputfields(person.value);
          console.log(names.value);

          if (person.value) appltoggle.value = true;
        })
        .catch((err) => {
          person.value = { };
          loading.value = false;
          autosearch.value = false;
          appltoggle.value = true;
          console.log(err);
        });
      // }
    };
    //end of searching through the attendance details

    // populate input fields
    const populateInputfields = (obj) => {
      person.value = obj;
      console.log(person);
    };

    const disabled = computed(() => {
      if (person.value.personId) return true;
      return false;
    });

    // function to disable edit
    const disableEdit = (e) => {
      e.preventDefault();
      console.log("hello there");
    };

    // confirm status
    const confirm = () => {
      // person.value.attendanceCode = +route.params.code;
      let newPerson = {};
      if (person.value.personId) {
        newPerson = {
          person: { personId: personData.value.personId, mobilePhone: enteredValue.value },
          attendanceCode: +route.params.code,
        };
      } else {
        newPerson = {
          person: {
            firstName: person.value.name,
            email: person.value.email,
            homeAddress: person.value.address,
            mobilePhone: enteredValue.value,
          },
          attendanceCode: +route.params.code,
        };
      }
      console.log(personData.value, "p data");
      console.log(newPerson);
      loading.value = true;
      autosearch.value = true;
      noError.value = true;
      axios
        .post("/MarkAttendance", newPerson)
        .then((res) => {
          loading.value = false;
          autosearch.value = false;
          console.log(res, "tosin");

          if (newPerson) checkedIn.value = true;
          appltoggle.value = false;
          checkedIn.value = true;

          toast.add({
            severity: "success",
            summary: "Checkin Successful",
            detail: "Member Checkin Successful",
            life: 3000,
          });
        })
        .catch((err) => {
          // appltoggle.value = false;
          stopProgressBar();
          loading.value = false;
          autosearch.value = false;
          console.log(err, "ajose");
          noError.value = false;
          toast.add({
            severity: "error",
            summary: "Checkin Error",
            detail: "Member Checkin failed",
            life: 3000,
          });
        });
    };

    // confirm button check

    const confirmCheck = () => {
      confirm();
    };

    // function to clear input
    const clearNames = () => {
      names.value = [];
    };

    const notme = () => {
      person.value = {};
      enteredValue.value = "";
    };

    // getting events and date
    const eventData = ref({});
    const getDateAndEvent = () => {
      axios
        .get(
          `/api/publiccontent/WebCheckInGetEventDetails?attendanceCode=${+route.params.code}`
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

    /* start masking functions */

    // function mask email
    const maskEmail = (str, numToShowInFront) => {
      if (str.length > 3) {
        const firstX = str.slice(0, numToShowInFront);
        const midPoint = str.split("").indexOf("@");
        let x = str.split("");
        x.forEach((i, j) => {
          if (j < midPoint) {
            x[j] = "*";
          }
        });
        x = x.join("");
        return firstX + x.slice(numToShowInFront);
      } else {
        return str[0] + "*" + str[2];
      }
    };

    const formatString = (str, numToShowInFront, numToHide) => {
      if (str.length > 3) {
        const firstX = str.slice(0, numToShowInFront);
        // const midPoint = str.split('').indexOf('@')
        const midPoint = numToShowInFront + numToHide;
        let x = str.split("");
        x.forEach((i, j) => {
          if (j < midPoint) {
            x[j] = "*";
          }
        });
        x = x.join("");
        return firstX + x.slice(numToShowInFront);
      } else {
        return str[0] + "*" + str[2];
      }
    };

    /*end of masking functions */

    //not me button
    // const notMe = () => {};

    return {
      toggleBase,
      checkCharacter,
      populateInputfields,
      InputText,
      appltoggle,
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
      dateFormatter,
      checkedIn,
      confirmCheck,
      disabled,
      connectName,
      formatString,
      maskEmail,
      name,
      email,
      userAddress,
      showNoPhoneError,
      notme,
      noError,
      submitBtn,
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