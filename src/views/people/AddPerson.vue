<template>
  <div class="my-con">
    <div class="header">
      <h3 class="header-text">Add Contact</h3>
    </div>

    <div class="form-div">
      <form action="">
        <div class="bio-div">
          <p class="form-section-header">Bio:</p>
          <div class="bio-info">
            <div class="inputs">
              <div class="input-field ">
                <label for="" class="label">Membership</label>
                <div class="custom-select">
                  <select name="" id="" class="input select" v-model="person.peopleClassificationID">
                  <option value="">Classification</option>
                  <option :value="category.id" v-for="category in peopleClassifications" :key="category.id">{{ category.name }}</option>
                </select>
                </div>
              </div>
              <div class="input-field">
                <label for="" class="label">Surname</label>
                <input type="text" class="input" placeholder="" v-model="person.lastName" />
              </div>
              <div class="input-field">
                <label for="" class="label">Firstname</label>
                <input type="text" class="input" placeholder="" v-model="person.firstName" />
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
                <label for=""></label>
                <div class="status-n-gender">
                  <div class="status custom-select">
                    <select name="" id="" class="input select">
                      <option value="">Martal satus</option>
                      <option value="">First timer</option>
                      <option value="">Old timer</option>
                    </select>
                  </div>
                  <div class="gender custom-select">
                    <select name="" id="" class="input select">
                      <option value="">Gender</option>
                      <option value="">Male</option>
                      <option value="">Female</option>
                    </select>
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
                  <input
                    type="file"
                    class="input file-input"
                    placeholder=""
                    @change="imageSelected"
                  />
                </div>
                <div>
                  <button class="upload-btn">Upload</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="hr">

        <div class="bio-div">
          <p class="form-section-header">Celebrations:</p>
          <div class="bio-info celeb-info">
            <div class="inputs">
              <div class="input-field">
                <label for="" class="label">Birthday</label>
                <div class="status-n-gender">
                  <div class="date-picker">
                    <div class="custom-select">
                      <select
                        @change="editBirthDateValue('months', $event)"
                        ref="birthMonth"
                      >
                        <option
                          v-for="(month, index) in months"
                          :key="month"
                          :value="index"
                        >
                          {{ month }}
                        </option>
                      </select>
                    </div>

                    <div class="custom-select">
                      <select
                        @change="editBirthDateValue('date', $event)"
                        ref="birthDay"
                      >
                        <option v-for="i in daysInBirthMonth" :key="i" :value="i">
                          {{ i }}
                        </option>
                      </select>
                    </div>

                    <div class="custom-select">
                      <select
                        @change="editBirthDateValue('year', $event)"
                        ref="birthYear"
                      >
                        <option
                          v-for="i in numberofYears"
                          :key="i"
                          :value="startingYear + (i - 1)"
                        >
                          {{ startingYear + (i - 1) }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="input-field">
                <label for="" class="label">Wedding Anniversary</label>
                <div class="status-n-gender">
                  <div class="date-picker">
                    <div class="custom-select">
                      <select
                        @change="editAnnDateValue('months', $event)"
                        ref="annMonth"
                      >
                        <option
                          v-for="(month, index) in months"
                          :key="month"
                          :value="index"
                        >
                          {{ month }}
                        </option>
                      </select>
                    </div>

                    <div class="custom-select">
                      <select
                        @change="editAnnDateValue('date', $event)"
                        ref="annDay"
                      >
                        <option v-for="i in daysInAnnMonth" :key="i" :value="i">
                          {{ i }}
                        </option>
                      </select>
                    </div>

                    <div class="custom-select">
                      <select
                        @change="editAnnDateValue('year', $event)"
                        ref="annYear"
                      >
                        <option
                          v-for="i in numberofYears"
                          :key="i"
                          :value="startingYear + (i - 1)"
                        >
                          {{ startingYear + (i - 1) }}
                        </option>
                      </select>
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
        <hr class="hr">

        <div class="bio-div">
          <p class="form-section-header">Additional information:</p>
          <div class="bio-info">
            <div class="inputs">
              <div class="input-field">
                <label for="" class="label">Occupation</label>
                <input type="text" class="input" placeholder="" />
              </div>
              <div class="input-field">
                <label for="" class="label">Age</label>
                <div class="custom-select">
                  <select name="" id="" class="input select">
                  <option value="">Select age range</option>
                  <option value="">14 - 18</option>
                  <option value="">19 - 25</option>
                  <option value="">26 - 40</option>
                  <option value="">26 - 40</option>
                  <option value="">41 - 60</option>
                  <option value="">61 and above</option>
                </select>
                </div>
              </div>
              
            </div>

            <div class="image-div other">
              <!-- white space -->
            </div>
          </div>
        </div>

        <div class="add-info--con">
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
              <button class="info-btn" v-if="areaInView === 'groups'">Add to Group</button>
              <button class="info-btn" v-if="areaInView === 'fellowship'">Add to House fellowship</button>
              <button class="info-btn" v-if="areaInView === 'notes'">New Notes</button>
            </div>
          </div>
        </div>

        <div class="submit-div">
          <button class="submit-btn" @click.prevent="addPerson">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { ref, reactive, onMounted } from "vue";
import router from "@/router/index"
import axios from "axios";

export default {
  setup() {
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

    const birthMonth = ref(null);
    const birthDay = ref(null);
    const birthYear = ref(null);

    const startingYear = 1920;
    const numberofYears = 100;

    const birthDate = moment();
    const daysInBirthMonth = ref(birthDate.daysInMonth());


    const editBirthDateValue = (unit, evt) => {
      birthDate.set(unit, evt.target.value);
      daysInBirthMonth.value = birthDate.daysInMonth();
      updateBirthDateElements();
    };

    
    const updateBirthDateElements = () => {
      birthMonth.value.value = birthDate.month();
      birthDay.value.value = birthDate.date();
      birthYear.value.value = birthDate.format("YYYY");
    }

    const annMonth = ref(null);
    const annDay = ref(null);
    const annYear = ref(null);

    const anniversaryDate = moment();
    const daysInAnnMonth = ref(anniversaryDate.daysInMonth());

    const editAnnDateValue = (unit, evt) => {
      anniversaryDate.set(unit, evt.target.value);
      daysInBirthMonth.value = anniversaryDate.daysInMonth();
      updateAnnDateElements()
    };

    const updateAnnDateElements = () => {
      annMonth.value.value = anniversaryDate.month();
      annDay.value.value = anniversaryDate.date();
      annYear.value.value = anniversaryDate.format("YYYY");
    }

    let url = ref("");
    let image;
    const imageSelected = (e) => {
      image = e.target.files[0];
      // let reader = new FileReader()
      // reader.readAsDataURL(e.target.files[0])
      // reader.onload = (e) => {
      //   console.log(e.target.result);
      // }
      url.value = URL.createObjectURL(image);
    }

    //Person
    const peopleClassifications = ref([]);
    const person = reactive({ });

    const addPerson = async () => {
      const personObj = { ...person };
      const formData = new FormData();
      formData.append("firstName", personObj.firstName)
      formData.append("lastName", personObj.lastName)
      formData.append("mobilePhone", personObj.mobilePhone)
      formData.append("email", personObj.email)
      formData.dayOfBirth = birthDate.date();
      formData.monthOfBirth = birthDate.month();
      formData.yearOfBirth = birthDate.year();
      formData.occupation = personObj.occupation;
      formData.yearOfWedding = anniversaryDate.year();
      formData.monthOfWedding = anniversaryDate.month();
      formData.dayOfWedding = anniversaryDate.date();
      formData.peopleClassificationID = personObj.peopleClassificationID;
      formData.picture = image;

      try {
        console.log(formData, "data");
        const response = await axios.post("/api/people/createperson", formData);
        if (response.status === 200)
          router.push("/home/people")
      } catch (err) {
        console.log(err.response);
      }
    }


    onMounted(async () => {
      updateBirthDateElements();
      updateAnnDateElements()

      try {
        const response = await axios.get("/api/Settings/GetTenantPeopleClassification");
        const {data} = response;
        peopleClassifications.value = data;
      } catch(err) {
        console.log(err.response);
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
  height: 100vh;
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
  margin: auto;
}

.input-field {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 0;
}

.input {
  color: #1c252c;
  font-weight: normal;
  width: 250px;
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

.label {
  margin-right: 10px;
  font-size: 15px;
}

.grey-bg {
  text-align: center;
  margin: 20px 0;
}

.person-img {
  width: 40%;
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
  color: #000;
}

.upload-btn:hover {
  background: #136acd;
  cursor: pointer;
  color: #fff;
}

.file-input {
  width: 85% !important;
  margin: 24px 0;
}

.header-text {
  font-size: 26px;
  padding: 0 10px;
}

.status-n-gender {
  display: flex;
}

.gender .input,
.status .input {
  width: 119px;
  font-size: 12px;
}

/* Datepicker */
/* wrapper-div for including arrow */
.custom-select {
  background-color: inherit;
  float: left;
  margin-right: 10px;
  position: relative;
}

.custom-select select {
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
.custom-select:after  {
  content: "\25bc";
  color: #aaa;
  font-size: 12px;
  position: absolute;
  right: 8px;
  top: 10px;
}
/* End */

.hr {
  border: 1px solid #0020440a;
  margin: 0 4px;
}

.add-info--con {
  display: flex;
}

.label-text-box {
  width: 32.5%;
  padding: 10px;
  text-align: right;
}

.info-box {
  width: 60%;
  background: #FFFFFF91;
  border: 1px solid #B9C5CF;
  margin-bottom: 24px;
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
  padding: 24px 10px;
}

.form-section-header {
  font-weight: 600;
  font-size: 18px;
}

.white-bg {
  background: white;
}

.info-btn {
  background: #136ACD;
  border-radius: 22px;
  border: none;
  padding: 8px 10px;
  color: #fff;
  font-size: 12px;
  outline: transparent;
  margin: 10px;
}

.submit-div {
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
}

@media screen and (max-width: 898px) {
  .add-info--con {
    flex-direction: column;
    justify-content: center;
  }

  .label-text-box {
    width: 50%;
    align-self: center;
    text-align: left;
  }

  .info-box {
    width: 50%;
    align-self: center;
  }
}

@media screen and (min-width: 1050px) {
  .my-con {
    /* width: 90%; */
    padding: 24px 5%;
    /* max-width: 990px; */
    margin: auto;
  }
}
</style>