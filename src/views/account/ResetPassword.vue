<template>
  <div>
    <div class="fp-con">
      <div class="logo-con">
        <a href="" class="logo-link"><img src="../../assets/churchplus-logo.png" alt="Churchplus Logo"></a>
      </div>
      <div class="fp-header">
          <h2>Enter a New Password</h2>
      </div>
      <div class="fp-form-con">
        <form action="" @submit="resetPassword">
          <div>
            <input
              class="input"
              v-model="credentials.password"
              :type="passwordType"
              placeholder="New Password"
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

          <div>
            <input
              class="input"
              v-model="credentials.confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>
          

          <button class="submit-btn sign-in-btn">Reset Password</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    data() {
        return {
            credentials: { },
            passwordType: "password",
            showBtnText: "Show",
        }
    },

    methods: {
        resetPassword() {
            
        },

        showPassword(e) {
            e.preventDefault();
            if (!this.credentials.password) return false;
            this.passwordType = this.passwordIsVissible ? "password" : "text";
            this.passwordIsVissible = !this.passwordIsVissible;
            this.showBtnText = this.passwordIsVissible ? "Hide" : "Show";
        }
    }
};
</script>

<style scoped> 
.logo-con {
  display: flex;
  margin-bottom: 24px;
}

.logo-link {
  width: 100%;
  text-align: center;
}

.fp-header {
    text-align: center;
    color: #1C252C;
}

.fp-con {
    padding: 30px 0;
}

.fp-form-con {
    width: 100%;
    max-width: 400px;
    margin: auto;
    padding: 0 10px;

}



.input {
    /* font-family: Averta,sans-serif; */
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
    transition: border .1s linear;
    border: 1px solid #b2c2cd;
    margin: 4px 0;
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
    outline: none;
  }

  .input:focus {
    box-shadow: 0 0 0 3px rgba(19, 106, 205, 0.2);
  }

  .fp-desc {
      text-align: center;
      color: #142129;
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

.show-password:hover {
  text-decoration: underline;
}

  @media screen and (min-width: 1300px) {
      .fp-form-con {
          max-width: 500px;
      }
  }
</style>