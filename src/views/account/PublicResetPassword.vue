<template>
  <div>
    <div class="fp-con">
      <div class="logo-con">
        <a href="" class="logo-link"
          ><img src="../../assets/churchplus-logo.png" alt="Churchplus Logo"
        /></a>
      </div>
      <div v-if="!passwordChanged" class="fp-header mt-5 mb-4">
        <h2>
          {{
            credentials.resetToken ? "Enter Your Password" : "Enter Your Email"
          }}
        </h2>
      </div>
      <div class="fp-form-con">
        <form v-if="!passwordChanged" @submit="resetCredentials">
          <div class="container"></div>
          <div>
            <input
              v-if="!credentials.resetToken"
              class="input"
              type="email"
              placeholder="Enter Email"
              required
              v-model.trim="credentials.email"
            />
            <input
              v-else
              class="input"
              :type="text"
              placeholder="Enter Password"
              required
              v-model.trim="credentials.password"
            />
          </div>

          <Loading :loading="loading" />
          <button
            v-if="!credentials.resetToken && credentials.email"
            @click.prevent="getResetToken"
            class="submit-btn sign-in-btn"
            type="submit"
          >
            Continue
          </button>

          <button
            v-if="credentials.resetToken"
            @click.prevent="changedPassword"
            class="submit-btn sign-in-btn"
          >
            Save
          </button>
        </form>
        <div v-if="passwordChanged" class="container my-5">
          <div class="row">
            <div class="col-12">
              <p class="text-center">Updated Credentials</p>
            </div>
            <div class="col-12">
              <p>Email: {{ credentials.email }}</p>
            </div>
            <div class="col-12">
              <p>Password: {{ credentials.password }}</p>
            </div>
            <div class="col-12">
              <button class="submit-btn sign-in-btn" @click="resetCredentials">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "@/gateway/backendapi";
import Loading from "../../components/loading/LoadingComponent";
import { useToast } from "primevue/usetoast";
export default {
  components: { Loading },
  setup() {
    const loading = ref(false);
    const toast = useToast();
    let passwordChanged = ref(false);

    const getResetToken = () => {
      loading.value = true;
      axios
        .post(`/existingUserPasswordReset/${credentials.value.email}`)
        .then((res) => {
          credentials.value.resetToken = res.data.resetToken;
          loading.value = false;
          if (res.status === 200) {
            toast.add({
              severity: "success",
              summary: "",
              detail: "Choose logo or click save button to continue",
              life: 6000,
            });
          }
          console.log(res);
        })
        .catch((err) => {
          loading.value = false;
          toast.add({
            severity: "info",
            summary: "",
            detail: "Choose darker shade of the color",
            life: 4000,
          });
          console.log(err);
        });
    };

    const credentials = ref({});

    const changedPassword = () => {
      loading.value = true;
      axios
        .post(`/passwordreset`, credentials.value)
        .then((res) => {
          loading.value = false;
          passwordChanged.value = true;
          console.log(res);
        })
        .catch((err) => {
          loading.value = false;
          console.log(err);
        });
    };

    const resetCredentials = () => {
      credentials.value = {};
      passwordChanged.value = false;
      console.log("am here");
    };

    return {
      getResetToken,
      credentials,
      changedPassword,
      loading,
      resetCredentials,
      passwordChanged,
    };
  },
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
  color: #1c252c;
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
  transition: border 0.1s linear;
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

@media screen and (min-width: 1300px) {
  .fp-form-con {
    max-width: 500px;
  }
}
</style>