<template>
  <div class="d-flex align-items-center adjust-content" style="justify-content: space-evenly; height: 100vh">
    <div class="main-section">
      <div class="logo-con justify-content-center font-weight-700" style="font-size: 1.2em">
        <!-- Mountain of Fire and Miracle Ministries -->
        Assemblies of God Church
      </div>
      <div class="header">
        <div class="top-con">
          <div class="header">
            <!-- <h1>Your all in one church management solution</h1> -->
            <h1>Get started for <span class="free">FREE</span></h1>
            <h3 class="intro">
              A church software that automates your entire <br />
              church management processes.
            </h3>
          </div>
        </div>
      </div>

      <div class="form-container">
        <div class="error-div" v-if="showError">
          <p class="error-message">
            {{ errorMessage }}
            <span
              v-if="showResetLink"
              >OR
              <span>
                <a
                  class="font-weight-bold text-decoration-none c-pointer"
                  @click="resetPassword"
                  >click here to reset your password</a
                ></span
              ></span
            >
            <span v-else>
              <a href="mailto:support@churchplus.co" class="font-weight-700 primary-text">Contact Support</a>
            </span>
          </p>
        </div>

        <form @submit.prevent="register">
          <div>
            <input
              type="email"
              class="input"
              v-model="credentials.email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              :type="passwordType"
              v-model="credentials.password"
              class="input"
              placeholder="Password"
              pattern=".{6,}"
              required
            />
          </div>
          <div class="password-help">
            <span class="password-tip"
              >At least 6 characters, but longer is better.</span
            >
            <span class="show-password"
              ><a href="" class="show-password-link" @click="showPassword">{{
                showBtnText
              }}</a></span
            >
          </div>

          <button
            class="submit-btn sign-in-btn get-started"
            :class="{ 'btn-loading': loading }"
          >
            <i class="fas fa-circle-notch fa-spin" v-if="loading"></i>
            <span>Get Started</span>
            <span></span>
          </button>
        </form>

        <div style="margin: 24px 0">
          <span class="or">or</span>
        </div>

        <div v-if="false">
          <button class="facebook-btn btn-logo sign-in-btn google-sign-up">
            <img src="../../assets/google.png" alt="Google Icon" />
            <span>Sign in with Google</span>
            <span></span>
          </button>
        </div>

        <div>
          <button class="facebook-btn btn-logo sign-in-btn">
          <!-- <button class="facebook-btn btn-logo sign-in-btn" @click="facebookRegister"> -->
            <img
              src="../../assets/facebook-small.png"
              class="fb-icon"
              alt="Google Icon"
            />
            <span>Sign up with Facebook</span>
            <span></span>
          </button>
        </div>

        <div class="terms">
          <p>
            By signing up, you are indicating that you have read and agree to
            the
            <router-link to="/termsofuse" class="terms-link"
              >Terms of Use</router-link
            >
            and
            <router-link to="/termsofuse" class="terms-link"
              >Privacy Policy.</router-link
            >
          </p>
        </div>

        <div class="bottom-container">
          <div>
            <p class="sign-up-prompt">
              Already have an account?
              <a href="/" class="sign-up"><strong> Sign in now</strong></a>
              <!-- <router-link to="/" class="sign-up"><strong> Sign in now</strong></router-link> -->
            </p>
          </div>
          <a
            class="fb-login-button"
            id="fb"
            data-width="380px"
            data-size="large"
            scope="public_profile,email"
            onlogin="checkLoginState();"
            data-button-type="continue_with"
            data-layout="rounded"
            data-auto-logout-link="false"
            data-use-continue-as="false"
            ref="loginFacebook"
            style="margin-top: 10px"
          ></a>
        </div>
      </div>
      <!-- <div class="logo-con">
        <a class="logo-link"
          ><img src="../../assets/churchplus-logo.png" alt="Churchplus Logo"
        /></a>
      </div> -->
    </div>
    <div class="first-order">
      <img src="../../assets/assembly-of-god-logo-png-7.png" class="img-logo-pane"/>
    </div>
  </div>
</template>

<script>
import axios from "@/gateway/backendapi";
import router from '../../router/index';

export default {
  data() {
    return {
      passwordIsVissible: false,
      passwordType: "password",
      showBtnText: "Show",
      credentials: {
        ChurchName: "Default Church",
        firstName: "First name",
        lastName: "Last name",
      },
      showError: false,
      errorMessage: "",
      show: false,
      loading: false,
      showResetLink: true,
    };
  },

  methods: {
    showPassword(e) {
      e.preventDefault();
      if (!this.credentials.password) return false;
      this.passwordType = this.passwordIsVissible ? "password" : "text";
      this.passwordIsVissible = !this.passwordIsVissible;
      this.showBtnText = this.passwordIsVissible ? "Hide" : "Show";
    },

    register() {
      this.loading = true;
      this.showError = false;
      axios
        .post("/initialsignup", this.credentials)
        .then((res) => {
          this.loading = false;
          console.log(res, "register response");
          this.$store.dispatch("setUserEmail", this.credentials.email);
          localStorage.setItem("email", this.credentials.email);
          this.$router.push("/onboarding");
        })
        .catch((err) => {
          /*eslint no-undef: "warn"*/
          NProgress.done();
          this.loading = false;
          console.log(err.response);
          localStorage.setItem("email", this.credentials.email)
          if (err.response && err.response.status === 400) {
            if (err.response.data === false) {
              this.$router.push("/onboarding")
              return false;
            }

            
            const { message } = err.response.data;
            if (message.includes("Sequence contains more than one element")) {
              this.errorMessage = "There seems to be a problem with this account, please";
              this.showResetLink = false;
            } else {
              this.errorMessage = message ? message : "An error occurred";
            }
            this.showError = true;
          } else {
            this.errorMessage = "An error occurred, ensure you are connected to the internet";
          }
        });
    },

    facebookRegister() {
        FB.login(function(response) {
          let token = {
          accessToken: response.authResponse.accessToken
        }
        console.log(response, "facebook");
        axios.post('https://churchplusv3coreapi.azurewebsites.net/Login/Facebook', token)
          .then(res => {
            if (res.data.isOnboarded) {
              localStorage.setItem("email", res.data.username)
              localStorage.setItem("token", res.data.token);
              router.push("/tenant");
            } else {
              localStorage.setItem("email", 'gstargerrald@ovi.com')
              // localStorage.setItem("token", res.data.token);
              router.push("/onboarding");
            }
          })
          .catch(err => console.log(err))
        }, {scope: 'user_birthday'});
      },

    async resetPassword() {
      try {
        const { data } = await axios.post(
          `/forgotpassword/${this.credentials.email}`
        );
        console.log(data.id, "reset data");
        this.$router.push({
          name: "EmailSent",
          params: { email: this.credentials.email }
        });
      } catch (error) {
        NProgress.done();
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.logo-con {
  display: flex;
  margin-top: 42px 0;
}

.logo-link {
  width: 100%;
  text-align: center;
  margin-top: 36px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 3em;
}

.header h1 {
  color: #1d262d;
  font-size: 28px;
  margin-bottom: 22px;
}

.header .intro {
  font-size: 20px;
}

.main-section {
      width: 453px;
    /* margin: auto; */
    padding: 20px;
    background: aliceblue;
}

.form-container {
  max-width: 400px; /* sign up*/
  margin: auto;
}

.input {
  color: #1c252c;
  font-weight: normal;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 10px 6px;
  min-height: 40px;
  appearance: none;
  outline: none;
  vertical-align: middle;
  transition: border 0.1s linear;
  border: 1px solid #b2c2cd;
  margin: 4px 0;
}
.input::placeholder {
  font-style: italic;
  color: #b2c2cd;
  letter-spacing: 1.5px;
}

.forgot-password {
  /* font-family: Averta, sans-serif; */
  font-size: 14px;
  line-height: 1.4;
  text-decoration: none;
  color: #136acd;
  font-weight: bold;
  cursor: pointer;
}

.f-password-div {
  margin-bottom: 8px;
}

.submit-btn {
  background: #136acd;
  font-size: 16px;
  font-weight: bold;
}

.sign-in-btn {
  color: #fff;
  border: 1px solid transparent;
  margin-top: 8px;
  width: 100%;
  /* padding: 8px 20px; */
  box-sizing: border-box;
  text-align: center;
  min-width: 100px;
  border-radius: 500px;
  vertical-align: middle;
  text-decoration: none;
  appearance: none;
  font-weight: 400;
  font-size: 16px;
  outline: none;
}

.sign-in-btn:hover {
  cursor: pointer;
}

.input:focus {
  box-shadow: 0 0 0 3px rgba(19, 106, 205, 0.2);
}

.input::placeholder {
  font-style: italic;
  color: #b2c2cd;
  font-weight: 600;
  letter-spacing: 1.5px;
}

/* .input:not(:focus) {
  font-style: italic;
  color: #b2c2cd;
  letter-spacing: 1.5px;
} */

.or {
  display: flex;
  flex-direction: row;
  color: #8b9ba5;
}
.or:before,
.or:after {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid #8b9ba5;
  margin: auto;
}

.or:before {
  margin-right: 10px;
}
.or:after {
  margin-left: 10px;
}

.google-btn {
  background: #4285f4;
}

.google-btn::before {
  content: "\e0e2";
  margin-right: auto;
}

.facebook-btn {
  background: #3b5998;
}

.bottom-container {
  text-align: center;
  color: #4d6575;
  font-size: 14px;
  line-height: 1.4;
  margin-top: 24px;
  font-weight: lighter;
}

.sign-up {
  color: #4d6575;
  font-weight: bold;
  text-decoration: underline;
  font-size: 13px;
}

.btn-logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fb-icon {
  background: #fff;
  padding: 0.23rem 0.6rem;
  border-radius: 50%;
  margin: 0.25rem;
}

/* Signup */
.intro {
  color: #718fa2;
  font-weight: lighter;
  margin-bottom: 40px;
  font-size: 23px;
}

.show-password {
  float: right;
}

.password-help {
  margin-bottom: 24px;
  font-size: 14px;
  color: #718fa2;
  font-weight: lighter;
}

.show-password-link {
  text-decoration: none;
  color: #136acd;
  font-weight: bold;
}

.get-started {
  background: #17c5cf;
  color: #000;
}

.google-sign-up {
  background: #4285f4;
}

.google-sign-up:hover {
  background: #4266f4;
}

.terms {
  text-align: center;
  margin-top: 40px;
  color: #718fa2;
  font-weight: lighter;
}

.terms-link {
  color: #4d6575;
  font-weight: bold;
  font-size: 12px;
}

.terms-link:hover {
  text-decoration: none;
}

.sign-up:hover {
  text-decoration: none;
}

.show-password:hover {
  text-decoration: underline;
}

.error-div {
  background: #fff8f8;
  border-color: #ffe9e9;
  padding: 10px 5px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid transparent;
  border-left: 5px solid #b52626;
}

.error-message {
  color: #b52626;
}

.fb_iframe_widget iframe {
  /* opacity: 0; */
  border: 2px solid #3b5998;
}

.fb_iframe_widget {
  /* background-image: url(../../assets/facebook-small.png);
  background-repeat: no-repeat;  */
  /* background: #3B5998; */
  /* border: 2px solid #3b5998; */
  border-radius: 500px;
  position: relative;
  top: -196px;
  left: 1px;
  padding: 8px;
  width: 100%;
  max-height: 40px;
}

.free {
  font-weight: 800;
  color: #10898f;
}

.img-logo-pane {
  width: 400px
}

@media (max-width: 880px) {
  .first-order {
    order: -1
  }

  .adjust-content {
    flex-direction: column;
  }

  .img-logo-pane {
    width: 100px;
    margin-top: 65px
  }
}
</style>
