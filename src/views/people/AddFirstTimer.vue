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
            <div class="col-12 col-sm-4 text-sm-right pr-0">
              <label for="firstname"
                >Firstname <span class="required">*</span></label
              >
            </div>
            <div class="col-12 col-sm-6 col-lg-4 form-group">
              <input
                type="text"
                class="form-control input"
                v-model="firstTimersObj.firstName"
                name=""
                id="firstname"
                required
              />
            </div>
            <div class="col-sm-2"></div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-4 text-sm-right pr-0">
              <label for="">Surname</label>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 form-group">
              <input
                type="text"
                class="form-control input"
                v-model="firstTimersObj.lastName"
                name=""
              />
            </div>
            <div class="col-sm-2"></div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-4 text-sm-right pr-0">
              <label for="">Phone number</label>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 form-group">
              <input
                type="text"
                class="form-control input"
                v-model="firstTimersObj.phoneNumber"
              />
            </div>
            <div class="col-sm-2"></div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-4 text-sm-right pr-0">
              <label for="">Email</label>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 form-group">
              <input
                type="text"
                class="form-control input"
                v-model="firstTimersObj.email"
              />
            </div>
            <div class="col-sm-2"></div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-4 text-sm-right pr-0">
              <label for="">Address</label>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 form-group">
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
            <div class="col-12 col-sm-4 text-sm-right pr-0">
              <label for="">Birthday</label>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 form-group">
              <div class="row">
                <div class="col-4 w-100 form-group pr-0 pt-0 select-div">
                  <SelectElem
                    name="day"
                    id="day"
                    value="day"
                    :options="['day', ...day]"
                    @input="select2Value"
                  />
                </div>
                <div class="col-4 form-group px-0 select-div">
                  <SelectElem
                    name="month"
                    id="month"
                    value="month"
                    :options="['month', ...month]"
                    @input="select2Value"
                  />
                </div>
                <div class="col-4 form-group pl-0 select-div">
                  <SelectElem
                    name="year"
                    id="year"
                    value="year"
                    :options="['year', ...year]"
                    @input="select2Value"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4"></div>
          </div>

          <!-- Marital status -->
          <div class="row select-elem">
            <!-- <div class="col-md-4 text-md-right pr-0">
                            <label for=""></label>
                        </div> -->
            <div class="offset-sm-4 col-sm-6 col-md-4 form-group">
              <div class="row">
                <div class="col-sm-6 form-group pr-0 select-div">
                  <SelectElem
                    name="maritalStatus"
                    :options="['Marital Status', ...maritalStatus]"
                    value="Marital status"
                    @input="select2Value"
                  />
                </div>
                <div
                  class="col-sm-6 col-md-5 offset-md-1 form-group pl-0 select-div"
                >
                  <SelectElem
                    name="gender"
                    :options="['Gender', ...gender]"
                    value="Gender"
                    @input="select2Value"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4"></div>
          </div>

          <!-- Event attended -->
          <div class="row select-elem">
            <div class="col-12 col-sm-4 text-sm-right pr-0">
              <label for="">Event or service attended</label>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 form-group mb-0">
              <SelectElem
                name="eventAttended"
                :options="['Event Attended', ...eventAttended]"
                value="Event Attended"
                @input="select2Value"
              />
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
            <div class="col-12 col-sm-4 text-sm-right pr-0">
              <label for="">How did you hear about us</label>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 form-group">
              <SelectElem
                name="howYouHeard"
                :options="['select', ...howYouHeard]"
                value="select"
                @input="select2Value"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <!-- Communication means -->
          <div class="row select-elem">
            <div class="col-12 col-sm-4 text-sm-right pr-0">
              <label for="">Preferred means of communication</label>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 form-group">
              <SelectElem
                name="commeans"
                :options="['select', ...comMeansArr]"
                @input="select2Value"
                value="select"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <!-- Interested in joining us -->
          <div class="row select-elem">
            <div class="col-12 col-sm-4 text-sm-right pr-0">
              <label for="">Interested in joining us ?</label>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 form-group">
              <SelectElem
                name="joininterest"
                :options="['select', ...joinInterestArr]"
                @input="select2Value"
                value="select"
              />
            </div>
            <div class="col-md-4"></div>
          </div>

          <!-- Want visit -->
          <div class="row select-elem">
            <div class="col-12 col-sm-4 text-sm-right pr-0">
              <label for="">Want to be visited ?</label>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 form-group">
              <SelectElem
                name="wantvisit"
                :options="['select', ...wantVisitArr]"
                value="select"
                @input="select2Value"
              />
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>

      <div class="row form-container">
        <div class="offset-1 offset-sm-0 col-10 col-sm-12">
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
            <div class="col-12 col-sm-4 text-sm-right pr-0">
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

            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-4 text-sm-right pr-0 form-group">
              <label for="welcomeSms">Assigned automated follow-up</label>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <SelectElem
                name="automatedfollowup"
                :options="['Option1', 'Option2']"
                value="Option1"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row form-container">
        <div class="col-md-12">
          <div class="row select-elem first-row">
            <div class="offset-3 offset-sm-4 col-3 col-lg-2 pr-0">
              <button
                class="action-btn cancel-btn btn"
                @click.prevent="onCancel"
              >
                Cancel
              </button>
            </div>
            <div class="col-5 form-group">
              <button class="save-btn btn text-light">
                <i class="fas fa-circle-notch fa-spin mr-2 text-white" v-if="loading"></i>
                <span class="text-white">Save</span>
                <span></span>
              </button>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import SelectElem from "@/components/select/SelectElement.vue";
import axios from "@/gateway/backendapi";
import router from "@/router/index";

export default {
  components: { SelectElem },

  setup() {
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
    const genderArr = ref([]);
    const comMeansArr = ref(["Call", "Email", "Visit", "SMS"]);
    const joinInterestArr = ref(["Yes", "No", "Maybe", "On Transit"]);
    const wantVisitArr = ref(["Yes", "No", "Maybe", "On Transit"]);
    const eventsAttended = ref([]);
    const howDidYouAboutUs = ref([]);
    const firstTimersObj = ref({
      // howDidYouAboutUsId: "00000000-0000-0000-0000-000000000000",
      // maritalStatusId: "00000000-0000-0000-0000-000000000000",
      // genderId: "00000000-0000-0000-0000-000000000000",
      // maritalStatusId: "00000000-0000-0000-0000-000000000000",
      // maritalStatusId: "00000000-0000-0000-0000-000000000000",
    });

    const loading = ref(false)
    const onSubmit = () => {
      console.log(firstTimersObj.value);
      loading.value = true;
      axios
        .post("/api/people/firsttimer", firstTimersObj.value)
        .then((res) => {
          console.log(res.data);
          loading.value = false;
          router.push("/tenant/first-timers");
        })
        .catch((err) => {
          loading.value = false;
          console.log(err)
        });
    };

    const onCancel = () => {};

    onMounted(() => {
      axios.get("/api/Events/EventActivity").then((res) => {
        eventsAttended.value = res.data;
      });

      axios
        .get("/api/LookUp/GetAllLookUps")
        .then((res) => {
          // console.log(res.data)
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
        // console.log(res.data)
        howDidYouAboutUs.value = res.data.map((i) => {
          return { name: i.name, id: i.id };
        });
      });
    });

    const gender = computed(() => {
      let arr = genderArr.value.map((i) => {
        return i.value;
      });
      return arr;
    });

    const maritalStatus = computed(() => {
      return maritalStatusArr.value.map((i) => {
        return i.value;
      });
    });

    const eventAttended = computed(() => {
      return eventsAttended.value.map((i) => {
        return i.name;
      });
    });

    const howYouHeard = computed(() => {
      return howDidYouAboutUs.value.map((i) => {
        return i.name;
      });
    });
    const select2Value = (data) => {
      if (data.dataType === "day") {
        firstTimersObj.value.birthday = data.value;
      }

      if (data.dataType === "month") {
        firstTimersObj.value.birthMonth = month.value.indexOf(data.value) + 1;
        console.log(firstTimersObj.value.birthMonth);
      }
      if (data.dataType === "year") {
        firstTimersObj.value.birthYear = data.value;
      }
      if (data.dataType === "gender") {
        firstTimersObj.value.genderId = genderArr.value.find(
          (i) => i.value === data.value
        ).id;
      }
      if (data.dataType === "maritalStatus") {
        firstTimersObj.value.maritalStatusId = maritalStatusArr.value.find(
          (i) => i.value == data.value
        ).id;
      }
      if (data.dataType === "eventAttended") {
        firstTimersObj.value.activityID = eventsAttended.value.find(
          (i) => i.name == data.value
        ).activityID;
        console.log(firstTimersObj.value.activityID);
      }
      if (data.dataType === "howYouHeard") {
        if (data.value !== "select") {
          firstTimersObj.value.howDidYouAboutUsId = howDidYouAboutUs.value.find(
            (i) => i.name == data.value
          ).id;
        }
      }
      if (data.dataType === "commeans") {
        firstTimersObj.value.communicationMeans = comMeansArr.value.indexOf(
          data.value
        );
      }
      if (data.dataType === "joininterest") {
        firstTimersObj.value.interestedInJoining = joinInterestArr.value.indexOf(
          data.value
        );
      }
      if (data.dataType === "wantvisit") {
        firstTimersObj.value.wantToBeVisited = wantVisitArr.value.indexOf(
          data.value
        );
      }
      if (data.dataType === "automatedfollowup") {
        firstTimersObj.value.autoMatedFollowUp = data.value;
      }
    };

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
      maritalStatus,
      gender,
      genderArr,
      eventAttended,
      eventsAttended,
      howDidYouAboutUs,
      howYouHeard,
      joinInterestArr,
      wantVisitArr,
      comMeansArr,
      select2Value,
      loading,
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