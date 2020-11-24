<template>
  <div class="top-most">
    <div class="container">
      <div class="row" id="onboarding">
        <div
          class="col-xs-12 col-md-6"
          id="onboarding-form"
          :class="{ 'swap-box1': toggle }"
        >
          <div class="onboarding-form-container">
            <div class="title-div">
              <div class="main-title">
                <h1>Welcome to Churchplus!</h1>
              </div>
              <div class="sub-title">
                <p>Tell us about you and your church</p>
              </div>
            </div>

            <form style="width: 100%" @submit.prevent="next">
              <div class="input-div">
                <label class="mb-0">What's your name?</label>
                <div class="name-input">
                  <input
                    type="text"
                    class="input"
                    v-model="userDetails.firstName"
                    placeholder="First name"
                    required
                  />
                  <input
                    type="text"
                    class="input"
                    v-model="userDetails.lastName"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div class="input-div">
                <label class="mb-0">What's your phone number?</label>
                <div class="phone-input">
                  <div style="width: 80px">
                    <SelectElem :typ="'code'" name="code" :options="countryCodes" value="-Select size range" @input="itemSelected"/>
                  </div>

                  <input
                    v-model.trim="userDetails.phoneNumber"
                    type="text"
                    class="input phone-num"
                    placeholder="Phone number"
                    required
                  />
                </div>
              </div>

              <div class="input-div">
                <label class="mb-0">What's the name of your ministry?</label>
                <input
                  v-model="userDetails.churchName"
                  type="text"
                  class="input"
                  placeholder="Name of church"
                  required
                  @change="selectCountry"
                />
              </div>

              <div class="input-div cstm-select" id="myInput">
                <label class="mb-0"
                  >What's the membership size of your ministry?</label
                >
                  <SelectElem :typ="'churchsize'" name="churchSize" :options="['-Select size range', 'Between 1 - 100', 'Between 100 - 1000', 'Between 1000 - 100000']" value="-Select size range" @input="itemSelected"/>
                
              </div>

              
              <button
                type="submit"
                class="submit-btn sign-in-btn get-started"
                :class="{ disabled: !isValid, 'btn-loading': loading }"
                :disabled="!isValid"
              >
                <i class="fas fa-circle-notch fa-spin" v-if="loading"></i>
                <span>Next</span>
                <span></span>
              </button>
            </form>
          </div>
          <!-- <SelectElem name="test" :options="[1, 2, 3]" value="2" v-if="false"/> -->
        </div>
        <div
          class="col-xs-12 col-md-6"
          id="onboarding-visuals"
          :class="{ 'swap-box2': toggle }"
          ref="box2"
        >
          <div class="step">
            <h3>STEP 1 OF 2</h3>
          </div>

          <div>
            <div>
              <div class="onboarding-image-con">
                <img src="../../assets/onboarding.png" alt="Image" />
                <span class="reactive-text">{{ churchName }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import $ from 'jquery'
import SelectElem from '@/components/select/SelectElement.vue'
export default {
  components: { SelectElem },
  beforeRouteLeave() {
    const userEmail = localStorage.getItem("email");
    if (userEmail) localStorage.removeItem("email");
  },

  data() {
    return {
      toggle: false,
      zipCode: "",
      step1Completed: true,
      userDetails: {
        subscriptionPlanID: 1,
        countryId: 1,
        password: "password",
      },

      myValue: '',
      myOptions: ['op1', 'op2', 'op3'],

      selectedCountry: {},
      countries: [{country: "Zambia", phoneCode: "234"}, {country: "Nigeria", phoneCode: "234"}, {country: "Congo", phoneCode: "235"}],
      loading: false,
    };
  },
  methods: {
    myChangeEvent(val){
      console.log(val);
    },
    mySelectEvent({id, text}){
      console.log({id, text})
    },

    next() {
      if (!this.userDetails.email) return false;
      //   this.toggle = !this.toggle;
      this.userDetails.phoneNumber = this.userDetails.phoneNumber.includes("+")
        ? this.userDetails.phoneNumber
        : `${this.zipCode}${this.userDetails.phoneNumber}`;
      this.userDetails.churchSize = Number(this.userDetails.churchSize);
      console.log(this.userDetails, "userDetails");
      this.$store.dispatch("setOnboardingData", this.userDetails);
      this.$router.push("/onboarding/step2");
    },

    selectCountry(e) {
      console.log(e.target.value, "Id");
      this.zipCode = this.countries.filter((i) => i.id === +e.target.value);
    },

    sizeSelected(e) {
      console.log(this.userDetails);
      this.userDetails.churchSize = e.target.value;
    },

    itemSelected(data) {
      if (data.dataType === "churchSize") {
        this.userDetails.churchSize = data.value;
      }
      
      if (data.dataType === "code") {
        this.zipCode = data.value;
      }
    }
  },

  computed: {
    churchName() {
      if (!this.userDetails.churchName) return "";
      return this.userDetails.churchName.length < 21
        ? this.userDetails.churchName
        : this.userDetails.churchName.slice(0, 20) + "...";
    },

    isValid() {
      return (
        this.userDetails.firstName &&
        this.userDetails.lastName &&
        this.userDetails.phoneNumber &&
        this.userDetails.churchName &&
        this.userDetails.churchSize
      );
    },

    countryCodes() {
      const codes = [ ]
      this.countries.forEach(i => {
        if (i.phoneCode) codes.push(i.phoneCode);
      });
      console.log(codes);

      return codes;
    },
  },
 
  created() {
    console.log(this.$store.getters.userEmail);
    if (!localStorage.getItem("email")) this.$router.push("/");
    // if (!this.$store.getters.userEmail) this.$router.push("/")
    // this.userDetails.email = this.$store.getters.userEmail;

    this.userDetails.email = localStorage.getItem("email");
    axios.get("/api/GetAllCountries").then((res) => {
      this.countries = res.data;
      this.zipCode = "234";
    });
  },
};
</script>

<style scoped>
.top-most {
  height: 100vh;
}

#onboarding {
  display: flex;
  height: 100vh;
}

#onboarding-visuals {
  width: 45%;
  height: 100;
  background-image: -webkit-linear-gradient(top, #3362c9 0%, #582994 100%);
  transition: all 0.7s ease-in-out;
}

#onboarding-form {
  width: 55%;
  display: flex;
  padding: 10px;
  transition: all 0.7s ease-in-out;
}

.swap-box1 {
  transform: translateX(80%);
}

.swap-box2 {
  transform: translateX(-127%);
}

.sub-title {
  font-size: 20px;
  font-weight: lighter;
  color: #718fa2;
}

.onboarding-form-container {
  max-width: 560px;
  width: 90%;
  margin: auto;
}

.input-div {
  margin: 20px 0;
}

.input {
  font-family: Averta, sans-serif;
  color: #1c252c;
  font-weight: normal;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 10px 6px;
  min-height: 40px;
  /* -webkit-appearance: button; */
  /* appearance: none; */
  outline: none;
  vertical-align: middle;
  transition: border 0.1s linear;
  border: 1px solid #b2c2cd;
  margin: 4px 0;
}

option {
  color: red;
}

.input::placeholder {
  font-style: italic;
  color: #b2c2cd;
  letter-spacing: 1.5px;
}

.submit-btn {
  background: #136acd;
  outline: none;
}

.disabled {
  background: rgb(141, 165, 238);
}

.submit-btn:hover {
  cursor: pointer;
}

.sign-in-btn {
  color: #fff;
  border: 1px solid transparent;
  margin-top: 8px;
  width: 100%;
  padding: 8px 20px;
  box-sizing: border-box;
  text-align: center;
  min-width: 100px;
  border-radius: 500px;
  vertical-align: middle;
  text-decoration: none;
  appearance: none;
  font-weight: 400;
  font-size: 16px;
}

.input:focus {
  box-shadow: 0 0 0 3px rgba(19, 106, 205, 0.2);
}

.name-input {
  display: flex;
  justify-content: space-between;
}

.name-input input {
  width: 48%;
}

.phone-input {
  display: flex;
  justify-content: space-between;
}

.phone-input .zip-code {
  width: 12%;
  min-width: 77px;
  max-width: 78px;
  color: #3e3e42;
}

.step {
  text-align: center;
  color: #fff;
  margin: 30px 0;
  font-weight: bold;
}

.onboarding-image-con {
  width: 80%;
  margin-left: auto;
  position: relative;
}

.onboarding-image-con img {
  width: 100%;
  height: 100%;
}

.reactive-text {
  position: absolute;
  top: 8%;
  left: 24%;
  width: 70%;
  font-size: 23px;
  font-weight: 600;
  color: #4d6575;
  overflow: hidden;
  text-overflow: ellipsis;
}

.phone-input .phone-num {
  margin-left: 2px;
}

/* Codes */
.codes {
  border: 1px solid #b2c2cd;
  padding: 4px;
  margin: 0;
  border-radius: 4px;
  width: 77px;
  position: absolute;
  background: #fff;
  max-height: 300px;
  overflow: scroll;
  display: none;
}

.code:hover {
  cursor: pointer;
  background: #b2c2cd85;
  padding: 4px;
}

.input:after {
  content: "\25bc" !important;
  color: #aaa;
  font-size: 12px;
  position: absolute;
  right: 8px;
  top: 10px;
}

.show {
  display: block;
}

span .select2-selection--single {
  padding: 0px 10px !important;
  height: 40px !important;
  margin-top: 4px !important;
  display: flex !important;
  align-items: center !important;
  border: 1px solid #b2c2cd;
}
.select2-container .select2-choice {
    padding: 5px 10px;
    height: 100px;
    width: 132px; 
    font-size: 1.2em;  
}

/* #size {
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
 
} */

/* drop arrow */
/* #size:after  {
  content: "\25bc" !important;
  color: #aaa;
  font-size: 12px;
  position: absolute;
  right: 8px;
  top: 10px;
}

#size {
  appearance: none !important;
} */

#myInput {
  display: flex;
  flex-direction: column;
}


@media screen and (max-width: 990px) {
  #onboarding {
    display: block !important;
  }

  #onboarding-form {
    width: 100% !important;
  }

  /* form {
    width: 100%;
  } */

  #onboarding-visuals {
    display: none !important;
  }
}

@media screen and (min-width: 480) {
  .main-title {
    font-size: 33px;
  }
}
</style>