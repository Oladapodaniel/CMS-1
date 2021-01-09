<template>
  <form @submit.prevent="onSubmit">
    <div class="container my-content">
      <div class="row page-header">
        <div class="col-12">
          <h3 class="header-text font-weight-bold">Add First timers</h3>
        </div>
      </div>

      <div class="row form-container">
        <div class="col-10 offset-1 offset-sm-0 col-sm-12">
          <span class="sub-header">Bio: </span>
          <div class="row first-row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label for="firstname"
                >Firstname <span class="required">*</span></label
              >
            </div>
            <div class="col-12 col-md-5 form-group">
              <input
                type="text"
                class="form-control input"
                v-model="firstTimersObj.firstName"
                name=""
                id="firstname"
                required
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label for="">Surname</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input
                type="text"
                class="form-control input"
                v-model="firstTimersObj.lastName"
                name=""
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label for="">Phone number</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input
                type="text"
                class="form-control input"
                v-model="firstTimersObj.phoneNumber"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row select-elem">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label for=""></label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <div class="row d-md-flex justify-content-between">
                <div class="col-md-5 w-100 pr-0 pt-0 select-div">
                  <Dropdown
                    v-model="selectedMaritalStatus"
                    :options="maritalStatusArr"
                    optionLabel="value"
                    placeholder="Marital status"
                    style="width: 100%"
                  />
                </div>
                <div class="col-md-5 pl-0 select-div">
                  <Dropdown
                    v-model="selectedGender"
                    :options="genderArr"
                    optionLabel="value"
                    placeholder="Gender"
                    style="width: 100%"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label for="">Email</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input
                type="text"
                class="form-control input"
                v-model="firstTimersObj.email"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <!-- Event attended -->
          <div class="row select-elem">
            <div class="col-md-3 text-md-right pr-0">
              <label for="">Event or service attended</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <Dropdown
                v-model="selectedEventAttended"
                :options="eventsAttended"
                optionLabel="name"
                :filter="true"
                filterPlaceholder="Find event"
                placeholder="Select from events and activities"
                style="width: 100%"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label for="">Address</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <input
                type="text"
                class="form-control input"
                v-model="firstTimersObj.address"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <!-- Birthday -->
          <div class="row select-elem">
            <div class="col-md-3 text-md-right pr-0">
              <label for="">Birthday</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <div class="row">
                <div class="col-md-4 w-100 form-group pt-0 select-div">
                  <Dropdown
                    v-model="firstTimersObj.birthday"
                    :options="day"
                    placeholder="Day"
                    style="width: 100%"
                  />
                </div>
                <div class="col-md-4 form-group px-0 select-div">
                  <Dropdown
                    v-model="firstTimersObj.birthMonth"
                    :options="month"
                    placeholder="Month"
                    style="width: 100%"
                  />
                </div>
                <div class="col-md-4 form-group select-div">
                  <Dropdown
                    v-model="firstTimersObj.birthYear"
                    :options="year"
                    placeholder="Year"
                    style="width: 100%"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>

      <div class="row form-container">
        <div class="col-10 col-sm-12 offset-1 offset-sm-0">
          <div class="row">
            <div class="col-md-11">
              <span
                class="d-flex align-items-center justify-content-between follow-up-header"
              >
                <span class="sub-header">Insights: </span>
                <span class="hr-span" style="width: 80%; margin-top: 10px"
                  ><hr class="hr"
                /></span>
              </span>
            </div>
          </div>

          <!-- Hear About Us -->
          <div class="row select-elem first-row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label for="">How did you hear about us?</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <Dropdown
                v-model="selectedAboutUsSource"
                :options="howDidYouAboutUs"
                optionLabel="name"
                placeholder=""
                style="width: 100%"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <!-- Communication means -->
          <div class="row select-elem">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label for="">Preferred means of communication</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <Dropdown
                v-model="selectedCommunicationMeans"
                :options="comMeansArr"
                placeholder=""
                style="width: 100%"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <!-- Interested in joining us -->
          <div class="row select-elem">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label for="">Interested in joining us?</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <Dropdown
                v-model="selectedJoinInterest"
                :options="joinInterestArr"
                placeholder=""
                style="width: 100%"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <!-- Want visit -->
          <div class="row select-elem">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label for="">Want to be visited?</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <Dropdown
                v-model="selectedVisitOption"
                :options="wantVisitArr"
                placeholder=""
                style="width: 100%"
              />
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>

      <div class="row form-container">
        <div class="offset-1 offset-md-0 col-10 col-md-12">
          <div class="row">
            <div class="col-md-11">
              <span
                class="d-flex align-items-center justify-content-between follow-up-header"
              >
                <span class="sub-header">Follow up and Retention: </span>
                <span
                  class="followup-hr-span"
                  style="width: 70%; margin-top: 10px"
                  ><hr class="hr"
                /></span>
              </span>
            </div>
          </div>

          <div class="row first-row">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label for=""></label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <div class="row">
                <div class="col-6 form-group d-flex">
                  <label for="welcomeSms">Send welcome SMS</label>
                  <input
                    type="checkbox"
                    class="check-box"
                    name=""
                    v-model="firstTimersObj.sendWelcomeSMS"
                    id="welcomeSms"
                  />
                </div>
                <div class="col-6 form-group d-flex">
                  <label for="welcomeEmail">Send welcome email</label>
                  <input
                    type="checkbox"
                    checked
                    class="check-box"
                    name=""
                    v-model="firstTimersObj.sendWelcomeEmail"
                    id="welcomeEmail"
                  />
                </div>
              </div>
            </div>

            <div class="col-md-4"></div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3 text-md-right pr-0 form-group">
              <label for="welcomeSms">Assigned automated follow-up</label>
            </div>
            <div class="col-12 col-md-5">
              <Dropdown
                v-model="selectedFollowUp"
                :options="['Option1', 'Option2']"
                placeholder="..."
                style="width: 100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row form-container">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <div class="row d-flex justify-content-between">
            <div class="col-xs-5 col-sm-5 my-2 pr-0">
              <button
                class="action-btn cancel-btn btn"
                @click.prevent="onCancel"
              >
                Cancel
              </button>
            </div>
            <div class="col-xs-5 col-sm-5 my-2 form-group">
              <button class="save-btn btn text-light">
                <i
                  class="fas fa-circle-notch fa-spin mr-2 text-white"
                  v-if="loading"
                ></i>
                <span class="text-white">Save</span>
                <span></span>
              </button>
            </div>
            <!-- <div class="col-xs-2 col-sm-2"></div> -->
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import axios from "@/gateway/backendapi";
import router from "@/router/index";
import Dropdown from "primevue/dropdown";
import { getCurrentInstance } from "vue";

export default {
  components: { Dropdown },

  setup() {
    const $toast = getCurrentInstance().ctx.$toast;

    const day = ref([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
    ]);
    const month = ref([
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]);
    const maritalStatusArr = ref([]);
    const selectedMaritalStatus = ref(null);

    const genderArr = ref([]);
    const selectedGender = ref(null);

    const comMeansArr = ref(["Call", "Email", "Visit", "SMS"]);
    const selectedCommunicationMeans = ref(null);

    const joinInterestArr = ref(["Yes", "No", "Maybe", "On Transit"]);
    const selectedJoinInterest = ref(null);

    const wantVisitArr = ref(["Yes", "No", "Maybe", "On Transit"]);
    const selectedVisitOption = ref(null);

    const eventsAttended = ref([]);
    const selectedEventAttended = ref(null);

    const howDidYouAboutUs = ref([]);
    const selectedAboutUsSource = ref(null);

    const selectedFollowUp = ref(null);

    const firstTimersObj = ref({
      // howDidYouAboutUsId: "00000000-0000-0000-0000-000000000000",
      // maritalStatusId: "00000000-0000-0000-0000-000000000000",
      // genderId: "00000000-0000-0000-0000-000000000000",
      // maritalStatusId: "00000000-0000-0000-0000-000000000000",
      // maritalStatusId: "00000000-0000-0000-0000-000000000000",
      sendWelcomeSMS: false,
      sendWelcomeEmail: true,
    });

    const loading = ref(false);
    const onSubmit = () => {
      firstTimersObj.value.followUpTypeId =
        "00000000-0000-0000-0000-000000000000";
      firstTimersObj.value.genderId = selectedGender.value
        ? selectedGender.value.id
        : 0;
      firstTimersObj.value.maritalStatusId = selectedMaritalStatus.value
        ? selectedMaritalStatus.value.id
        : 0;
      firstTimersObj.value.activityID = selectedEventAttended.value
        ? selectedEventAttended.value.activityID
        : "00000000-0000-0000-0000-000000000000";
      firstTimersObj.value.howDidYouAboutUsId = selectedAboutUsSource.value
        ? selectedAboutUsSource.value.id
        : "00000000-0000-0000-0000-000000000000";
      firstTimersObj.value.communicationMeans = selectedCommunicationMeans.value
        ? comMeansArr.value.indexOf(selectedCommunicationMeans.value)
        : 0;
      firstTimersObj.value.interestedInJoining = selectedJoinInterest.value
        ? joinInterestArr.value.indexOf(selectedJoinInterest.value)
        : 0;
      firstTimersObj.value.wantToBeVisited = selectedVisitOption.value
        ? wantVisitArr.value.indexOf(selectedVisitOption.value)
        : 0;

      console.log(firstTimersObj.value);
      loading.value = true;
      axios
        .post("/api/people/firsttimer", firstTimersObj.value)
        .then((res) => {
          console.log(res.data);
          loading.value = false;
          // $toast.show(`Saving successful`, {
          //   position: "top-right",
          //   type: "success",
          // });
          router.push("/tenant/first-timers");
        })
        .catch((err) => {
          loading.value = false;
          // $toast.show(`Saving failed`, {
          //   position: "top-right",
          //   type: "error",
          // });
          console.log(err);
        });
    };

    const onCancel = () => {
      router.back();
    };

    onMounted(() => {
      axios.get("/api/Events/EventActivity").then((res) => {
        eventsAttended.value = res.data;
      });

      axios
        .get("/api/LookUp/GetAllLookUps")
        .then((res) => {
          // console.log(res.data, 'all lkups')
          res.data.find((i) => {
            if (i.type.toLowerCase() === "gender") {
              genderArr.value = i.lookUps;
              console.log(genderArr.value);
            }
            if (i.type.toLowerCase() === "marital status") {
              maritalStatusArr.value = i.lookUps;
            }
          });
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            localStorage.setItem("token", "");
            router.push("/");
          }
        });

      axios.get("/api/membership/howyouheardaboutus").then((res) => {
        // console.log(res.data, 'about us')
        howDidYouAboutUs.value = res.data.map((i) => {
          return { name: i.name, id: i.id };
        });
      });
    });

    const year = computed(() => {
      const arrOfYears = [];
      let currentYear = new Date().getFullYear();
      while (arrOfYears.length <= 100) {
        arrOfYears.push(currentYear);
        currentYear = currentYear - 1;
      }
      return arrOfYears;
    });

    return {
      onSubmit,
      onCancel,
      firstTimersObj,
      day,
      month,
      year,
      maritalStatusArr,
      genderArr,
      eventsAttended,
      howDidYouAboutUs,
      joinInterestArr,
      wantVisitArr,
      comMeansArr,
      loading,
      selectedGender,
      selectedMaritalStatus,
      selectedEventAttended,
      selectedAboutUsSource,
      selectedCommunicationMeans,
      selectedJoinInterest,
      selectedVisitOption,
      selectedFollowUp,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  color: #02172e;
}

.page-header {
  margin-bottom: 21px;
  margin-top: 15px;
}

.page-header h2 {
  color: #02172e;
  font-weight: 800;
  font-size: 30px;
}

.sub-header {
  color: #002044;
  font-size: 20px;
  font-weight: 700;
}

.form-container {
  margin-bottom: 44px;
}

.input {
  height: 40px;
  border: 1px solid #b9c5cf;
}

.first-row {
  margin-top: 10px;
}

.day-inp {
  border-radius: 8px 0 0 8px;
}

.month-inp {
  border-radius: 0;
}

.year-inp {
  border-radius: 0 8px 8px 0;
}

.select-elem {
  /* height: 50px !important; */
}

#welcomeSms,
#welcomeEmail {
  margin-top: 6px;
  margin-left: 10px;
}

.check-box {
  width: 1.2em;
  height: 1em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #b9c5cf;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.action-btn {
  background: #fff;
  border: 1px solid #002044;
  border-radius: 111px;
  width: 121px;
  height: 49px;
  outline: transparent;
}

.save-btn {
  color: #fff;
  background: #136acd;
  border-radius: 111px;
  width: 121px;
  height: 49px;
  outline: transparent;
  /* margin-left: 40px; */
}

.required {
  color: #ef0535;
}

@media screen and (max-width: 767px) {
  .select-elem {
    height: auto !important;
  }

  .select-div {
    padding: 0.8rem !important;
  }
}

.check-box:checked {
  background-color: #0f529f;
}

@media screen and (max-width: 770px) {
  .follow-up-header {
    flex-direction: column;
    justify-content: flex-start;
  }

  .followup-hr-span,
  .hr-span {
    width: 100% !important;
  }

  .sub-header {
    width: 100%;
  }
}

@media screen and (min-width: 770px) and (max-width: 1190px) {
  .followup-hr-span {
    width: 60% !important;
  }
}
</style>