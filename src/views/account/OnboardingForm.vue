<template>
  <div class="top-most" @click="hideCodes">
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
                  <input type="text" v-model="searchCode" class="input zip-code" placeholder="+zip" @focus="showCodes" @blur="hideCodes" required />

                  <input
                    v-model.trim="userDetails.phoneNumber"
                    type="text"
                    class="input phone-num"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div class="codes" :class="{'show': codesVissible}">
                  <p class="code" v-for="code in countryCodes" :key="code.id" @click="codeSelected(code)">{{ code.phoneCode }}</p>
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
                />
              </div>

              <div class="input-div">
                <label class="mb-0">What's the membership size of your ministry?</label>
                <select name="" id="" class="input"
                  v-model="userDetails.churchSize"
                >
                    <option value="">Select ranges close to the church size </option>
                    <option value="100">Between 1 - 100</option>
                    <option value="1000">Between 100 - 1000</option>
                    <option value="100000">Between 1000 - 100000</option>
                </select>
              </div>

              <button type="submit" class="submit-btn sign-in-btn get-started" :class="{'disabled': !isValid}" :disabled="!isValid">
                Next
              </button>
            </form>
          </div>
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
                        <img src="../../assets/onboarding.png" alt="Image">
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
// import "node_modules/mdbootstrap/css/mdb.css"

export default {
  beforeRouteLeave() {
    const userEmail = localStorage.getItem("email");
    if (userEmail) localStorage.removeItem("email");
  },

  data() {
    return {
      toggle: false,
      options: ["1", "22"],
      itemsVisible: false,
      zipCode: "",
      step1Completed: true,
      userDetails: {
        subscriptionPlanID: 1,
        countryId: 1,
        password: "password"
      },

      countries: [ ],
      codesVissible: false,
      searchCode: "",
      selectedCountry: { },
    };
  },
  methods: {
    next() {
      if (!this.userDetails.email) return false;
      //   this.toggle = !this.toggle;
      this.userDetails.phoneNumber = this.userDetails.phoneNumber.includes("+")
        ? this.userDetails.phoneNumber
        : `${this.selectedCountry.phoneCode}${this.userDetails.phoneNumber}`;
      this.userDetails.churchSize = Number(this.userDetails.churchSize);
      console.log(this.userDetails);
      console.log(this.userDetails);
      this.$store.dispatch("setOnboardingData", this.userDetails);
      this.$router.push("/onboarding/step2");
    },

    toggleItems() {
      this.itemsVisible = !this.itemsVisible;
    },

    selectItems() {
      alert("hi");
    },

    showCodes() {
      this.codesVissible = true;
    },

    codeSelected(code) {
      this.selectedCountry = code;
      this.codesVissible = false;
      this.searchCode = code.phoneCode
      this.userDetails.countryId = code.id
    },

    hideCodes(e) {
      if (!e.target.classList.contains("code") && !e.target.classList.contains("codes") && !e.target.classList.contains("zip-code")) {
        this.codesVissible = false;
      }
    },
  },

  computed: {
    churchName() {
        if (!this.userDetails.churchName) return "";
        return this.userDetails.churchName.length < 21 ? this.userDetails.churchName : this.userDetails.churchName.slice(0, 20) + "..."
    },

    isValid() {
        return this.userDetails.firstName && this.userDetails.lastName && this.userDetails.phoneNumber && this.userDetails.churchName && this.userDetails.churchSize && this.searchCode;
    },

    countryCodes() {
      if (!this.searchCode) return this.countries;
      return this.countries.filter(c => {
        if (!c.phoneCode) return false;
        return c.phoneCode.includes(this.searchCode);
      })
    }
  },

  created() {
    console.log(this.$store.getters.userEmail);
    if (!localStorage.getItem("email")) this.$router.push("/") 
    // if (!this.$store.getters.userEmail) this.$router.push("/")
    // this.userDetails.email = this.$store.getters.userEmail;

    this.userDetails.email = localStorage.getItem("email")
    axios.get("/api/GetAllCountries")
      .then((res) => {
        this.countries = res.data;
        this.countryCodes = res.data;
      })
    this.zipCode = "+234";
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
  display:flex;
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
  -webkit-appearance: button;
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

.show {
  display: block;
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