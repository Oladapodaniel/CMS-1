<template>
  <div class="my-con">
    <div class="header mt-2">
      <h3 class="header-text font-weight-bold">Add Contact</h3>
      <Toast />
    </div>

    <div class="form-div">
      <form @submit.prevent="addPerson">
        <div class="bio-div mt-2">
          <p class="form-section-header">Bio:</p>
          <div class="bio-info">
            <div class="inputs">
              <div class="input-field">
                <label for="" class="label">Membership</label>
                <div class="cstm-select">
                  <div style="width: 330px">
                    <Dropdown
                      v-model="selectedMembership"
                      :options="memberships"
                      optionLabel="name"
                      placeholder="--Select membership--"
                      style="width: 100%"
                    />
                    <!-- <SelectElem :typ="'membership'" name="membership" :options="['--Select membership--', ...peopleClassifications]" value="--Select membership--" @input="itemSelected"/> -->
                  </div>
                </div>
              </div>
              <div class="input-field">
                <label for="" class="label"
                  >Firstname<span style="color: red"> *</span></label
                >
                <input
                  type="text"
                  class="input"
                  placeholder=""
                  v-model="person.firstName"
                  required
                />
              </div>
              <div class="input-field">
                <label for="" class="label">Surname</label>
                <input
                  type="text"
                  class="input"
                  placeholder=""
                  v-model="person.lastName"
                />
              </div>
              <div class="input-field">
                <label for="" class="label">Phone number</label>
                <input
                  type="text"
                  class="input"
                  placeholder=""
                  v-model="person.mobilePhone"
                />
              </div>
              <div class="input-field">
                <label for="" class="label">Email</label>
                <input
                  type="text"
                  class="input"
                  placeholder=""
                  v-model="person.email"
                />
              </div>
              <div class="input-field">
                <label for="" class="label">Address</label>
                <input
                  type="text"
                  class="input"
                  placeholder=""
                  v-model="person.address"
                />
              </div>
              <div class="input-field">
                <label for=""></label>
                <div class="status-n-gender">
                  <div class="status cstm-select">
                    <div class="cs-select">
                      <Dropdown
                        v-model="selectedMaritalStatus"
                        :options="maritalStatus"
                        optionLabel="value"
                        placeholder="Marital status"
                        style="width: 100%"
                      />
                      <!-- <SelectElem :typ="'membership'" name="status" :options="['Marital status', ...maritalStatusArr]" value="Marital status" @input="itemSelected"/> -->
                    </div>
                  </div>
                  <div class="gender cstm-select">
                    <div class="cs-select">
                      <Dropdown
                        v-model="selectedGender"
                        :options="genders"
                        optionLabel="value"
                        placeholder="Gender"
                        style="width: 100%"
                      />
                      <!-- <SelectElem :typ="'membership'" name="gender" :options="['Gender', ...gendersArr]" value="Gender" @input="itemSelected"/> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="image-div other">
              <div class="grey-bg">
                <div class="person-img">
                  <img
                    v-if="!url"
                    src="../../assets/people/phone-import.svg"
                    alt="Uploaded Image"
                  />
                  <img v-else :src="url" alt="Uploaded Image" />
                </div>
                <div>
                  <div class="cs-input">
                    <label for="imgUpload" class="choose-file">
                      Choose file
                      <input
                        type="file"
                        class="input file-input"
                        placeholder=""
                        id="imgUpload"
                        @change="imageSelected"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <button class="upload-btn" @click.prevent="uploadImage">
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <hr class="hr"> -->

        <div class="bio-div">
          <span class="celeb-tab" @click="showCelebTab">
            <span class="tab-header">Celebrations:</span>
            <span class="h-rule"><hr class="hr" /></span>
            <span class="tb-icon-span"
              ><i
                class="fa fa-angle-down tbb-icon"
                :class="{ 'tb-icon': !hideCelebTab }"
              ></i
            ></span>
          </span>
          <div
            class="bio-info celeb-info"
            :class="{ 'hide-tab': hideCelebTab, 'show-tab': !hideCelebTab }"
          >
            <div class="inputs">
              <div class="input-field">
                <label for="" class="label">Birthday</label>
                <div class="status-n-gender">
                  <div class="date-picker">
                    <div class="cstm-select">
                      <div class="cs-select month">
                        <Dropdown
                          v-model="person.monthOfBirth"
                          :options="months"
                          placeholder="Month"
                          @change="
                            editBirthDateValue('month', person.monthOfBirth)
                          "
                          style="width: 100%"
                        />
                        <!-- <SelectElem :typ="'membership'" name="birthmonth" :options="['Month', ...months]" value="Month" @input="itemSelected"/> -->
                      </div>
                    </div>

                    <div class="cstm-select">
                      <div class="cs-select day">
                        <Dropdown
                          v-model="person.dayOfBirth"
                          :options="birthDaysArr"
                          placeholder="Day"
                          style="width: 100%"
                        />
                        <!-- <SelectElem :typ="'membership'" name="birthday" :options="['Day', ...birthDaysArr ]" value="Day" @input="itemSelected"/> -->
                      </div>
                    </div>

                    <div class="cstm-select">
                      <div class="cs-select year">
                        <Dropdown
                          v-model="person.yearOfBirth"
                          :options="birthYearsArr"
                          placeholder="Year"
                          style="width: 100%"
                        />

                        <!-- <SelectElem :typ="'membership'" name="birthyear" :options="['Year', ...birthYearsArr]" value="Year" @input="itemSelected"/> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="input-field">
                <label for="" class="label">Wedding Anniversary</label>
                <div class="status-n-gender">
                  <div class="date-picker">
                    <div class="cstm-select">
                      <div class="cs-select month">
                        <Dropdown
                          v-model="person.monthOfWedding"
                          :options="months"
                          placeholder="Month"
                          @change="
                            editAnnDateValue('month', person.monthOfWedding)
                          "
                          style="width: 100%"
                        />
                        <!-- <SelectElem :typ="'membership'" name="annmonth" :options="['Month', ...months]" value="Month" @input="itemSelected"/> -->
                      </div>
                    </div>

                    <div class="cstm-select">
                      <div class="cs-select day">
                        <Dropdown
                          v-model="person.dayOfWedding"
                          :options="annDaysArr"
                          placeholder="Day"
                          style="width: 100%"
                        />
                        <!-- <SelectElem :typ="'membership'" name="annday" :options="['Day', ...annDaysArr]" value="Day" @input="itemSelected"/> -->
                      </div>
                    </div>

                    <div class="cstm-select">
                      <div class="cs-select year">
                        <Dropdown
                          v-model="person.yearOfWedding"
                          :options="birthYearsArr"
                          placeholder="Year"
                          style="width: 100%"
                        />
                        <!-- <SelectElem :typ="'membership'" name="annyear" :options="['Year', ...birthYearsArr]" value="Year" @input="itemSelected"/> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="image-div other">
              <!-- Empty space -->
            </div>
          </div>
        </div>
        <div class="bio-div">
          <span class="celeb-tab" @click="showAddInfoTab">
            <span class="tab-header">Additional information:</span>
            <span class="h-rule"><hr class="hr" /></span>
            <span class="tb-icon-span"
              ><i
                class="fa fa-angle-down tbb-icon"
                :class="{ 'tb-icon': !hideAddInfoTab }"
              ></i
            ></span>
          </span>
          <div
            class="bio-info"
            :class="{
              'hide-tab': hideAddInfoTab,
              'show-occ-tab': !hideAddInfoTab,
            }"
          >
            <div class="inputs">
              <div class="input-field">
                <label for="" class="label">Occupation</label>
                <input
                  type="text"
                  class="input"
                  placeholder=""
                  v-model="person.occupation"
                />
              </div>
              <div class="input-field">
                <label for="" class="label">Age</label>
                <div class="cstm-select search-box">
                  <div class="cs-select" style="width: 330px">
                    <Dropdown
                      v-model="selectedAgeGroup"
                      :options="ageGroups"
                      optionLabel="name"
                      placeholder="--Select age range--"
                      style="width: 100%"
                    />
                    <!-- <SelectElem name="agegroup" :options="['-Select age range', ...groupsByAge]" value="-Select age range" @input="itemSelected"/> -->
                  </div>
                </div>
              </div>
            </div>

            <div class="image-div other">
              <!-- white space -->
            </div>
          </div>
        </div>

        <!-- DISABLED -->
        <div
          v-if="false" 
          class="add-info--con"
          :class="{
            'hide-tab': hideAddInfoTab,
            'show-addinfo-tab': !hideAddInfoTab,
          }"
        >
          <div class="label-text-box">
            <p>Related information</p>
            <small
              >Including small groups and cell/house fellowship
              membership</small
            >
          </div>
          <div class="info-box">
            <div class="nav-bar">
              <div
                class="groups box"
                @click.prevent="() => (areaInView = 'groups')"
                :class="{ 'white-bg': areaInView === 'groups' }"
              >
                <a class="tab">Groups</a>
              </div>
              <div
                class="house-fel box"
                @click.prevent="() => (areaInView = 'fellowship')"
                :class="{ 'white-bg': areaInView === 'fellowship' }"
              >
                <a class="tab">House fellowship</a>
              </div>
              <div
                class="notes box"
                @click.prevent="() => (areaInView = 'notes')"
                :class="{ 'white-bg': areaInView === 'notes' }"
              >
                <a class="tab">Notes</a>
              </div>
              <div
                class="follow-up box"
                @click.prevent="() => (areaInView = 'followup')"
                :class="{ 'white-bg': areaInView === 'followup' }"
              >
                <a class="tab">Follow-up</a>
              </div>
            </div>
            <div class="info-box-body">
              <button
                @click.prevent="uploadImage"
                class="info-btn"
                v-if="areaInView === 'groups'"
              >
                Add to Group
              </button>
              <button
                @click.prevent="uploadImage"
                class="info-btn"
                v-if="areaInView === 'fellowship'"
              >
                Add to House fellowship
              </button>
              <button
                @click.prevent="uploadImage"
                class="info-btn"
                v-if="areaInView === 'notes'"
              >
                New Notes
              </button>
            </div>
          </div>
        </div>

        <div class="error-div">
          <p v-if="!loading">{{ errMessage }}</p>
        </div>
        <div class="submit-div">
          <button class="submit-btn outline-none" :class="{ 'btn-loading': loading }" :disabled="loading">
            <i class="fas fa-circle-notch fa-spin" v-if="loading"></i>
            <span>Save</span>
            <span></span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { ref, reactive, onMounted, computed } from "vue";
import router from "@/router/index";
// import store from "../../store/store"
import axios from "@/gateway/backendapi";
import { useRoute } from "vue-router";
// import { getCurrentInstance } from "vue";
import Dropdown from "primevue/dropdown";
// import { useToast } from 'primevue/usetoast';

export default {
  components: { Dropdown },
  setup() {
    // const $toast = getCurrentInstance().ctx.$toast;
    const hideCelebTab = ref(false);
    const hideAddInfoTab = ref(true);
    const showCelebTab = () => (hideCelebTab.value = !hideCelebTab.value);
    const showAddInfoTab = () => (hideAddInfoTab.value = !hideAddInfoTab.value);

    const loading = ref(false);
    const months = [
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
    ];

    const birthMonth = ref(1);
    const birthDay = ref(1);
    const birthYear = ref(1922);

    const startingYear = 1920;
    const numberofYears = 100;

    const birthDate = moment();
    const daysInBirthMonth = ref(birthDate.daysInMonth());
    const birthDaysArr = computed(() => {
      console.log(birthDate.month(), "month");
      const arrOfDays = [];
      console.log(daysInBirthMonth.value, "dm");
      for (let i = 1; i <= daysInBirthMonth.value; i++) {
        arrOfDays.push(i);
      }
      return arrOfDays;
    });
    const birthYearsArr = computed(() => {
      const arrOfYears = [];
      let currentYear = new Date().getFullYear();
      while (arrOfYears.length <= 100) {
        arrOfYears.push(currentYear);
        currentYear = currentYear - 1;
      }
      return arrOfYears;
    });

    const editBirthDateValue = (unit, val) => {
      birthDate.set(unit, val);
      daysInBirthMonth.value = birthDate.daysInMonth();
      updateBirthDateElements();
    };

    const updateBirthDateElements = () => {
      birthMonth.value = birthDate.month();
      birthDay.value = birthDate.date();
      birthYear.value = birthDate.format("YYYY");
    };

    const annMonth = ref(null);
    const annDay = ref(null);
    const annYear = ref(null);

    const anniversaryDate = moment();
    const daysInAnnMonth = ref(anniversaryDate.daysInMonth());
    const annDaysArr = computed(() => {
      console.log(anniversaryDate.month(), "month");
      const arrOfDays = [];
      console.log(daysInAnnMonth.value, "dm");
      for (let i = 1; i <= daysInAnnMonth.value; i++) {
        arrOfDays.push(i);
      }
      return arrOfDays;
    });

    const editAnnDateValue = (unit, val) => {
      anniversaryDate.set(unit, val);
      daysInAnnMonth.value = anniversaryDate.daysInMonth();
      updateAnnDateElements();
    };

    const updateAnnDateElements = () => {
      annMonth.value = anniversaryDate.month();
      annDay.value = anniversaryDate.date();
      annYear.value = anniversaryDate.format("YYYY");
    };

    let url = ref("");
    let image;
    const imageSelected = (e) => {
      image = e.target.files[0];
      url.value = URL.createObjectURL(image);
    };

    //Person
    const peopleClassifications = ref([]); //null
    const selectedMembership = ref(null);
    let person = reactive({
      monthOfBirth: null,
      dayOfBirth: null,
      yearOfBirth: null,
      monthOfWedding: null,
      dayOfWedding: null,
      yearOfWedding: null,
    });

    const uploadImage = () => {};

    const errMessage = ref("");
    const addPerson = async () => {
      const personObj = { ...person };
      console.log(person, "person");

      const formData = new FormData();
      formData.append(
        "firstName",
        personObj.firstName ? personObj.firstName : ""
      );
      formData.append("lastName", personObj.lastName ? personObj.lastName : "");
      formData.append(
        "mobilePhone",
        personObj.mobilePhone ? personObj.mobilePhone : ""
      );
      formData.append("email", personObj.email ? personObj.email : "");
      formData.append(
        "occupation",
        personObj.occupation ? personObj.occupation : ""
      );
      formData.append("dayOfBirth", +personObj.dayOfBirth);
      formData.append(
        "monthOfBirth",
        months.indexOf(personObj.monthOfBirth) >= 0
          ? months.indexOf(personObj.monthOfBirth) + 1
          : 0
      );
      formData.append("yearOfBirth", +personObj.yearOfBirth);
      formData.append(
        "occupation",
        personObj.occupation ? personObj.occupation : ""
      );
      formData.append("yearOfWedding", +personObj.yearOfWedding);
      formData.append(
        "monthOfWedding",
        months.indexOf(personObj.monthOfWedding) >= 0
          ? months.indexOf(personObj.monthOfWedding) + 1
          : 0
      );
      formData.append("dayOfWedding", +personObj.dayOfWedding);
      formData.append(
        "peopleClassificationID",
        selectedMembership.value ? selectedMembership.value.id : ""
      );
      formData.append("address", personObj.address ? personObj.address : "");
      formData.append("picture", image);
      formData.append(
        "maritalStatusID",
        selectedMaritalStatus.value ? selectedMaritalStatus.value.id : ""
      );
      formData.append(
        "genderID",
        selectedGender.value ? selectedGender.value.id : ""
      );
      formData.append(
        "ageGroupID",
        selectedAgeGroup.value ? selectedAgeGroup.value.id : ""
      );

      if (route.params.personId) {
        try {
          loading.value = true;
          const response = await axios.put(
            `/api/People/UpdatePerson/${route.params.personId}`,
            formData
          );

          if (response.status === 200 || response.status === 201) {
            loading.value = false;
            router.push("/tenant/people");
          }
        } catch (err) {
          loading.value = false;
          errMessage.value = err.response.data.messsage
            ? err.response.data.messsage
            : "An error occurred";
          console.log(err.response);
        }
      } else {
        try {
          loading.value = true;
          const response = await axios.post(
            "/api/people/createperson",
            formData
          );

          if (response.status === 200 || response.status === 201) {
            loading.value = false;
            router.push("/tenant/people");
          }
        } catch (err) {
          loading.value = false;
          errMessage.value = err.response
            ? err.response.data.messsage
            : "An error occurred";
          console.log(err.response);
        }
      }
    };

    let genders = ref([]);
    let maritalStatus = ref([]);
    const selectedMaritalStatus = ref(null);
    const selectedGender = ref(null);

    const getLookUps = () => {
      axios
        .get("/api/LookUp/GetAllLookUps")
        .then((res) => {
          genders.value = res.data.find(
            (i) => i.type.toLowerCase() === "gender"
          ).lookUps;
          maritalStatus.value = res.data.find(
            (i) => i.type.toLowerCase() === "marital status"
          ).lookUps;
          console.log(maritalStatus);
        })
        .catch((err) => console.log(err.response));
    };

    let ageGroups = ref([]);
    const selectedAgeGroup = ref(null);
    const getAgeGroups = () => {
      axios
        .get("/api/Settings/GetTenantAgeGroups")
        .then((res) => {
          ageGroups.value = res.data;
          console.log(ageGroups.value);
        })
        .catch((err) => console.log(err.response));
    };
    const gendersArr = computed(() => {
      return genders.value.map((i) => i.value);
    });
    const maritalStatusArr = computed(() => {
      return maritalStatus.value.map((i) => i.value);
    });

    let memberships = ref([]);
    const route = useRoute();
    const memberToEdit = ref(null);

    if (route.params.personId) {
      axios
        .get(
          `/api/People/GetPersonInfoWithAssignments/${route.params.personId}`
        )
        .then((res) => {
          memberToEdit.value = res.data;
          console.log(res.data, "p");
          person.firstName = res.data.firstName;
          person.email = res.data.email;
          person.lastName = res.data.lastName;
          person.firstName = res.data.firstName;
          person.mobilePhone = res.data.mobilePhone;
          person.address = res.data.homeAddress;
          person.occupation = res.data.occupation;
        });
    }

    onMounted(async () => {
      getLookUps();
      getAgeGroups();
      try {
        const response = await axios.get(
          "/api/Settings/GetTenantPeopleClassification"
        );
        const { data } = response;
        memberships.value = data;
        console.log(memberships.value, "ms");
        peopleClassifications.value = data.map((i) => i.name);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          localStorage.setItem("token", "");

          router.push("/");
        }
        console.log(err);
      }

      if (memberToEdit.value) {
        selectedMaritalStatus.value = maritalStatus.value.find(
          (i) => i.id === memberToEdit.value.maritalStatusID
        );
        selectedGender.value = genders.value.find(
          (i) => i.id === memberToEdit.value.genderID
        );
        selectedMembership.value = memberships.value.find(
          (i) => i.id === memberToEdit.value.peopleClassificationID
        );
      }
    });

    const areaInView = ref("groups");

    return {
      months,
      numberofYears,
      startingYear,
      daysInBirthMonth,
      daysInAnnMonth,
      editBirthDateValue,
      editAnnDateValue,
      birthMonth,
      birthDay,
      birthYear,
      annMonth,
      annDay,
      annYear,
      areaInView,
      person,
      addPerson,
      peopleClassifications,
      url,
      imageSelected,
      uploadImage,
      loading,
      birthDaysArr,
      birthYearsArr,
      annDaysArr,
      errMessage,
      hideCelebTab,
      showCelebTab,
      hideAddInfoTab,
      showAddInfoTab,
      genders,
      maritalStatus,
      gendersArr,
      maritalStatusArr,
      selectedMaritalStatus,
      selectedGender,
      selectedMembership,
      memberships,
      selectedAgeGroup,
      ageGroups,
    };
  },
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

.cs-select.month {
  width: 111px;
}

.cs-select.day {
  width: 87px
}

.cs-select.year {
  width: 113px
}

@media (min-width: 663px) and (max-width: 667px) {
  .bio-info.celeb-info {
    margin-top: 30px;
  }
}

@media (min-width: 377px) and (max-width: 662px) {
  .bio-info.celeb-info {
    margin-top: 70px;
  }
}

@media (max-width: 376px) {
  .bio-info.celeb-info {
    margin-top: 80px;
  }

  .cs-select.month {
    width: 85px
  }

  .cs-select.day {
    width: 85px
  }

  .cs-select.year {
    width: 90px
  }
}
</style>