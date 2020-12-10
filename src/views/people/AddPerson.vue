<template>
  <div class="my-con">
    <div class="header mt-2">
      <h3 class="header-text font-weight-bold">Add Contact</h3>
    </div>

    <div class="form-div">
      <form  @submit.prevent="addPerson">
        <div class="bio-div mt-2">
          <p class="form-section-header">Bio:</p>
          <div class="bio-info">
            <div class="inputs">
              <div class="input-field ">
                <label for="" class="label">Membership</label>
                <div class="cstm-select">
                  <div style="width: 330px">
                    <SelectElem :typ="'membership'" name="membership" :options="['--Select membership--', ...peopleClassifications]" value="--Select membership--" @input="itemSelected"/>
                  </div>
                  
                </div>
              </div>
              <div class="input-field">
                <label for="" class="label">Firstname<span style="color:red"> *</span></label>
                <input type="text" class="input" placeholder="" v-model="person.firstName" required />
              </div>
              <div class="input-field">
                <label for="" class="label">Surname</label>
                <input type="text" class="input" placeholder="" v-model="person.lastName" />
              </div>
              <div class="input-field">
                <label for="" class="label">Phone number</label>
                <input type="text" class="input" placeholder="" v-model="person.mobilePhone" />
              </div>
              <div class="input-field">
                <label for="" class="label">Email</label>
                <input type="text" class="input" placeholder="" v-model="person.email" />
              </div>
              <div class="input-field">
                <label for="" class="label">Address</label>
                <input type="text" class="input" placeholder="" v-model="person.address" />
              </div>
              <div class="input-field">
                <label for=""></label>
                <div class="status-n-gender">
                  <div class="status cstm-select">
                    <div class="cs-select">
                      <SelectElem :typ="'membership'" name="status" :options="['Marital status', ...maritalStatusArr]" value="Marital status" @input="itemSelected"/>
                    </div>
                    
                  </div>
                  <div class="gender cstm-select">
                    <div class="cs-select">
                      <SelectElem :typ="'membership'" name="gender" :options="['Gender', ...gendersArr]" value="Gender" @input="itemSelected"/>
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
                  <img
                  v-else
                    :src="url"
                    alt="Uploaded Image"
                  />
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
                  <button class="upload-btn" @click.prevent="uploadImage">Upload</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <hr class="hr"> -->

        <div class="bio-div">
          <span class="celeb-tab" @click="showCelebTab">
            <span class="tab-header">Celebrations:</span>
            <span class="h-rule"><hr class="hr"></span>
            <span class="tb-icon-span"><i class="fa fa-angle-down tbb-icon" :class="{ 'tb-icon': !hideCelebTab}"></i></span>
          </span>
          <div class="bio-info celeb-info" :class="{ 'hide-tab': hideCelebTab, 'show-tab': !hideCelebTab }">
            <div class="inputs">
              <div class="input-field">
                <label for="" class="label">Birthday</label>
                <div class="status-n-gender">
                  <div class="date-picker">
                    <div class="cstm-select">
                      <div class="cs-select" style="width:111px">
                        <SelectElem :typ="'membership'" name="birthmonth" :options="['Month', ...months]" value="Month" @input="itemSelected"/>
                      </div>
                      
                    </div>

                    <div class="cstm-select">
                      <div class="cs-select" style="width:87px">
                        <SelectElem :typ="'membership'" name="birthday" :options="['Day', ...birthDaysArr ]" value="Day" @input="itemSelected"/>
                      </div>
                      
                    </div>

                    <div class="cstm-select">
                      <div class="cs-select" style="width:113px">
                        <SelectElem :typ="'membership'" name="birthyear" :options="['Year', ...birthYearsArr]" value="Year" @input="itemSelected"/>
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
                      <div class="cs-select" style="width:111px">
                        <SelectElem :typ="'membership'" name="annmonth" :options="['Month', ...months]" value="Month" @input="itemSelected"/>
                      </div>
                     
                    </div>

                    <div class="cstm-select">
                      <div class="cs-select" style="width:87px">
                        <SelectElem :typ="'membership'" name="annday" :options="['Day', ...annDaysArr]" value="Day" @input="itemSelected"/>
                      </div>
                      
                    </div>

                    <div class="cstm-select">
                      <div class="cs-select" style="width:113px">
                        <SelectElem :typ="'membership'" name="annyear" :options="['Year', ...birthYearsArr]" value="Year" @input="itemSelected"/>
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
            <span class="h-rule"><hr class="hr"></span>
            <span class="tb-icon-span"><i class="fa fa-angle-down tbb-icon" :class="{ 'tb-icon': !hideAddInfoTab}"></i></span>
          </span>
          <div class="bio-info" :class="{'hide-tab': hideAddInfoTab, 'show-occ-tab': !hideAddInfoTab }">
            <div class="inputs">
              <div class="input-field">
                <label for="" class="label">Occupation</label>
                <input type="text" class="input" placeholder="" v-model="person.occupation" />
              </div>
              <div class="input-field">
                <label for="" class="label">Age</label>
                <div class="cstm-select search-box">
                  <div class="cs-select" style="width:330px">
                    <SelectElem name="agegroup" :options="['-Select age range', ...groupsByAge]" value="-Select age range" @input="itemSelected"/>
                  </div>
                  
                </div>
              </div>
              
            </div>

            <div class="image-div other">
              <!-- white space -->
            </div>
          </div>
        </div>

        <div class="add-info--con" :class="{'hide-tab': hideAddInfoTab, 'show-addinfo-tab': !hideAddInfoTab }">
          <div class="label-text-box">
            <p>Related information</p>
            <small>Including small groups and cell/house fellowship membership</small>
          </div>
          <div class="info-box">
            <div class="nav-bar">
              <div class="groups box" @click.prevent="() => areaInView = 'groups'" :class="{ 'white-bg': areaInView === 'groups'}">
                <a class="tab">Groups</a>
              </div>
              <div class="house-fel box" @click.prevent="() => areaInView = 'fellowship'" :class="{ 'white-bg': areaInView === 'fellowship'}">
                <a class="tab">House fellowship</a>
              </div>
              <div class="notes box" @click.prevent="() => areaInView = 'notes'" :class="{ 'white-bg': areaInView === 'notes'}">
                <a class="tab">Notes</a>
              </div>
              <div class="follow-up box" @click.prevent="() => areaInView = 'followup'" :class="{ 'white-bg': areaInView === 'followup'}">
                <a class="tab">Follow-up</a>
              </div>
            </div>
            <div class="info-box-body">
              <button @click.prevent="uploadImage" class="info-btn" v-if="areaInView === 'groups'">Add to Group</button>
              <button @click.prevent="uploadImage" class="info-btn" v-if="areaInView === 'fellowship'">Add to House fellowship</button>
              <button @click.prevent="uploadImage" class="info-btn" v-if="areaInView === 'notes'">New Notes</button>
            </div>
          </div>
        </div>

        <div class="error-div">
          <p v-if="!loading">{{ errMessage }}</p>
        </div>
        <div class="submit-div">
          
          <button class="submit-btn" :class="{ 'btn-loading': loading }">
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
import router from "@/router/index"
import axios from "@/gateway/backendapi";
import SelectElem from '@/components/select/SelectElement.vue'

export default {
  components: { SelectElem },
  setup() {
    const hideCelebTab = ref(false);
    const hideAddInfoTab = ref(true);
    const showCelebTab = () => hideCelebTab.value = !hideCelebTab.value;
    const showAddInfoTab = () => hideAddInfoTab.value = !hideAddInfoTab.value;



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
    })
    const birthYearsArr = computed(() => {
      const arrOfYears = [];
      let currentYear = new Date().getFullYear();
      while (arrOfYears.length <= 100) {
        arrOfYears.push(currentYear)
        currentYear = currentYear - 1;
      }
      return arrOfYears;
    })


    const editBirthDateValue = (unit, val) => {
      birthDate.set(unit, val);
      daysInBirthMonth.value = birthDate.daysInMonth();
      updateBirthDateElements();
    };

    
    const updateBirthDateElements = () => {
      birthMonth.value = birthDate.month();
      birthDay.value = birthDate.date();
      birthYear.value = birthDate.format("YYYY");
    }

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
    })

    const editAnnDateValue = (unit, val) => {
      anniversaryDate.set(unit, val);
      daysInAnnMonth.value = anniversaryDate.daysInMonth();
      updateAnnDateElements()
    };

    const updateAnnDateElements = () => {
      annMonth.value = anniversaryDate.month();
      annDay.value = anniversaryDate.date();
      annYear.value = anniversaryDate.format("YYYY");
    }

    let url = ref("");
    let image;
    const imageSelected = (e) => {
      image = e.target.files[0];
      url.value = URL.createObjectURL(image);
    }

    //Person
    const peopleClassifications = ref([]);
    const membershipId = ref("");
    const person = reactive({ });

    const uploadImage = () => {

    }

    const errMessage = ref("");
    const addPerson = async () => {
      const personObj = { ...person };
      console.log(person, "person");
      
      const formData = new FormData();
      formData.append("firstName", personObj.firstName)
      formData.append("lastName", personObj.lastName)
      formData.append("mobilePhone", personObj.mobilePhone)
      formData.append("email", personObj.email ? personObj.email : '')
      formData.append("occupation", personObj.occupation)
      formData.append("dayOfBirth", +birthDate.date());
      formData.append("monthOfBirth", (birthDate.month() + 1));
      formData.append("yearOfBirth", +birthDate.year());
      formData.append("occupation", personObj.occupation);
      formData.append("yearOfWedding", +anniversaryDate.year());
      formData.append("monthOfWedding", (+anniversaryDate.month() + 1));
      formData.append("dayOfWedding", +anniversaryDate.date());
      formData.append("peopleClassificationID", membershipId.value ? membershipId.value : '');
      formData.append("address", personObj.address);
      formData.append("picture", image);
      formData.append("maritalStatusID", personObj.maritalStatusID ? personObj.maritalStatusID : '');
      formData.append("genderID", personObj.genderID ? personObj.genderID : '');
      formData.append("ageGroupID", personObj.ageGroupID ? personObj.ageGroupID : '');
      try {
        console.log(formData);
        loading.value = true;
        const response = await axios.post("/api/people/createperson", formData);
        
        if (response.status === 200 || response.status === 201) {
          loading.value = false;
          router.push("/tenant/people")
        }
      } catch (err) {
        loading.value = false;
        errMessage.value = err.response.data.messsage ? err.response.data.messsage : "An error occurred";
        console.log(err.response);
      }
    }

    const itemSelected = (data) => {
      //Membership
      if (data.dataType === "membership") {
        membershipId.value = memberships.find(i => i.name === data.value).id
      }
      //gender
      if (data.dataType === "gender") {
        person.genderID = genders.value.find(i => i.value.toLowerCase() === data.value.toLowerCase()).id;
      }
      //Marital status
      if (data.dataType === "status") {
        person.maritalStatusID = maritalStatus.value.find(i => i.value.toLowerCase() === data.value.toLowerCase()).id;
      }
      //Birthday
      if (data.dataType === "birthmonth") {
        const dateValue = months.indexOf(data.value)
        editBirthDateValue('month', dateValue.toString())
      }
      if (data.dataType === "birthday") {
        console.log(data);
        editBirthDateValue('date', data.value)
      }
      if (data.dataType === "birthyear") {
        console.log(data);
        editBirthDateValue('year', data.value)
      }
      //Anniversary
      if (data.dataType === "annmonth") {
        const dateValue = months.indexOf(data.value)
        editAnnDateValue('month', dateValue.toString())
      }
      if (data.dataType === "annday") {
        editAnnDateValue('date', data.value)
      }
      if (data.dataType === "annyear") {
        editAnnDateValue('year', data.value)
      }
      //Age group
      if (data.dataType === "agegroup") {
        person.ageGroupID = ageGroups.value.find(i => i.name === data.value).id;
      }
    }

    let genders = ref([])
    let maritalStatus = ref([]);
    const getLookUps = () => {
      axios.get('/api/LookUp/GetAllLookUps')
        .then(res => {
          genders.value = res.data.find(i => i.type.toLowerCase() === "gender").lookUps;
          maritalStatus.value = res.data.find(i => i.type.toLowerCase() === "marital status").lookUps;
        })
        .catch(err => console.log(err.response))
    }

    let ageGroups = ref([ ]);
    const getAgeGroups = () => {
      axios.get("/api/Settings/GetTenantAgeGroups")
        .then(res => {
          ageGroups.value = res.data;
        })
        .catch(err => console.log(err.response))
    }
    const groupsByAge = computed(() => ageGroups.value.map(i => i.name))
    const gendersArr = computed(() => {
      return genders.value.map(i => i.value);
    })
    const maritalStatusArr = computed(() => {
      return maritalStatus.value.map(i => i.value);
    })
    
    let memberships = [ ]
    onMounted(async () => {
      getLookUps();
      getAgeGroups()
      try {
        const response = await axios.get("/api/Settings/GetTenantPeopleClassification");
        const {data} = response;
        memberships = data;
        peopleClassifications.value = data.map(i => i.name);
      } catch(err) {
        console.log(err);
      }
    });


    const areaInView = ref("groups");

    return {
      months,
      numberofYears,
      startingYear,
      daysInBirthMonth,
      daysInAnnMonth,
      // editBirthDateValue,
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
      membershipId,
      loading,
      birthDaysArr,
      birthYearsArr,
      itemSelected,
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
      groupsByAge,
    };
  },
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

.my-con {
  background: #fff;
  padding: 8px;
  /* height: 100vh; */
}

.bio-div {
  margin-top: 50px;
}

.bio-info {
  display: flex;
  
}

.celeb-info {
  margin-bottom: 24px;
}

.inputs {
  width: 62%;
}

.other {
  background: #f9f9f9;
  border-radius: 22px;
  width: 28%;
  min-width: 228px;
  margin-left: auto;
  margin-right: 20px;
  height: fit-content;
}

.input-field {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 10px 10px 10px;
}

.input {
  color: #1c252c;
  font-weight: normal;
  width: 330px;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 10px 6px;
  min-height: 40px;
  appearance: none;
  outline: none;
  vertical-align: middle;
  transition: border 0.1s linear;
  border: 1px solid #b2c2cd;
  margin: 4px 8px;
}

.input::placeholder {
  font-style: italic;
  color: #b2c2cd;
  letter-spacing: 1.5px;
}

.celeb-info select {
  transition: border 0.1s linear;
  border: 1px solid #b2c2cd;
  box-sizing: border-box;
  border-radius: 4px;
}

.label {
  margin-right: 10px;
  font-size: 15px;
}

.grey-bg {
  text-align: center;
  margin: 20px auto;
  max-width: 267px;
}

.person-img {
  width: 50%;
  margin: auto;
}

.person-img img {
  width: 100%;
}

.upload-btn {
  padding: 8px 10px;
  background: #dde2e6;
  border-radius: 22px;
  width: 135px;
  border: none;
  outline: none;
  color: #fff;
}

.upload-btn:hover {
  background: #136acd;
  cursor: pointer;
  color: #fff;
}

.file-input {
  width: 85% !important;
  margin: 24px 0;
  display: none;
}

.header-text {
  font-size: 26px;
}

.status-n-gender {
  display: flex;
}

.gender .input,
.status .input {
  width: 160px;
  font-size: 12px;
}

/* Datepicker */
/* wrapper-div for including arrow */
.cstm-select {
  background-color: inherit;
  float: left;
  margin-right: 10px;
  position: relative;
}

.cstm-select select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none; /* remove default styling */
  background-color: inherit;
  /* border: none; */
  color: #333;
  display: block;
  font-size: 14px;
  height: 32px;
  padding: 5px 30px 5px 10px;
  margin: 0;
  outline: none;
}

/* drop arrow */
.cstm-select:after  {
  content: "\25bc";
  color: #aaa;
  font-size: 12px;
  position: absolute;
  right: 6px;
  top: 18px;
}
/* End */

.hr {
  border: 1px solid #00204412;
  margin: 0 4px;
}

.add-info--con {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.label-text-box {
  width: calc(62% - 344px);
  padding: 10px;
  text-align: right;
}

.info-box {
  width: calc(100% - (62% - 350px));
  background: #FFFFFF91;
  border: 1px solid #B9C5CF;
  margin-bottom: 24px;
  margin-right: 20px;
  border-radius: 5px;
}

.nav-bar {
  display: flex;
  background: #DDE2E6;
  /* padding: 10px 0; */
}

.info-box .box {
  width: 25%;
  text-align: center;
  padding: 10px 0;
}

.info-box .box:hover {
  cursor: pointer;
  /* background: #afbce2; */
}

.label-text-box p {
  margin: 0;
}

.label-text-box small {
  color: #136ACD;
}

.info-box-body {
  height: fit-content;
  padding: 54px 10px;
}

.form-section-header {
  font-weight: 600;
  font-size: 18px;
}

.white-bg {
  background: white;
  border-radius: 6px;
  box-shadow: 0px 1px 3px #00000029;
}

.info-btn {
  background: #DDE2E6;
  border-radius: 22px;
  border: none;
  padding: 8px 10px;
  color: #002044;
  font-size: 12px;
  outline: transparent;
  margin: 10px;
  font-weight: 400;
}

.info-btn:hover {
  background: #136ACD;
  color: #fff;
}

.submit-div {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 24px;
}

.submit-btn {
    background: #136ACD;
    border: none;
    outline: transparent;
    padding: 8px 10px;
    /* color: #fff; */
    /* width: 40px; */
    min-width: 104px;
    color: #fff;
    font-size: 16px;
    border-radius: 22px;
}

.submit-btn:hover {
  cursor: pointer;
}

.cs-select {
  width: 160px;
}

.error-div {
  text-align: center;
  color: red;
}

.celeb-tab {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
}

.celeb-tab:hover {
  cursor: pointer;
}

.h-rule {
  width: 70%;
}

.tab-header {
  font-weight: 600;
  font-size: 18px;
  width: auto;
  color: #002044;
}

.hide-tab {
  height: 0;
  /* display: none; */
  transition: all 0.5s ease-in-out;
  overflow: hidden;
}

.tbb-icon {
  transition: all 0.5s ease-in-out;
  transform: rotate(0deg);
  color: #190138;
  font-size: 20px;
}

.tb-icon-span {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #DDE2E6;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  opacity: .5;
}

.tb-icon {
  transition: all 0.5s ease-in-out;
  transform: rotate(180deg);
}

.show-tab {
  transition: all 0.5s ease-in-out;
  height: 108px;
}

.show-addinfo-tab {
  transition: all 0.7s ease-in-out;
  height: 223px;
}

.show-occ-tab {
  transition: all 0.5s ease-in-out;
  min-height: 113px;
}

.cs-input {
  border: 1px solid #B9C5CF;
  width: 90%;
  margin: 29px auto;
  background: #fff;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 4px;
}

.choose-file {
    background: #DDE2E6;
    padding: 3px 10px;
    margin-bottom: 0;
}

.choose-file:hover {
  cursor: pointer;
}

@media screen and (max-width: 528px) {
  .inputs {
    width: 100% !important;
  }

  .input-field {
    flex-direction: column;
    justify-content: center;
  }
}

@media screen and (max-width: 592px) {
  .inputs {
    width: 100% !important;
  }

  .input {
    width: 350px;
  }
}

@media screen and (max-width: 768px) {
  .add-info--con {
    flex-direction: column;
    justify-content: center;
  }

  .bio-info {
    flex-direction: column-reverse;
    margin-top: 24px;
  }

  .inputs {
    width: 75%;
  }

  .info-box, .label-text-box {
    width: 80% !important;
  }

  .other {
    margin: 0 auto 20px;
  }
}

@media screen and (min-width: 858px) {
  .celeb-info .celeb-date {
    width: 87px;
  }

  .celeb-info .celeb-year {
    width: 113px;
  }
}

@media screen and (max-width: 898px) {
  .add-info--con {
    /* flex-direction: column; */
    justify-content: center;
  }

  .label-text-box {
    width: calc(62% - 344px);
    align-self: center;
    text-align: left;
  }

  .info-box {
    width: calc(100% - (62% - 350px));
    align-self: center;
  }
}

@media screen and (min-width: 1100px) {
  .my-con {
    margin-top: 0;
  }

  .header h3 {
    margin: 0;
  }
}

@media screen and (min-width: 1560px) {
  .label-text-box {
    width: calc(62% - 336px);
  }
}
</style>