<template >
  <!-- <transition name="fade" mode="out-in"> -->
  <router-view class="view" />
  <!-- </transition> -->
</template>

<script>
import axios from "@/gateway/backendapi";
import store from "@/store/store.js";
import router from "@/router/index";
// import Multiselect from '@vueform/multiselect'

export default {
  name: "App",

  data() {
    return {
      transitionName: null,
    };
  },

  methods: {
    async getCurrentUser() {
      try {
        const res = await axios.get("/api/Membership/GetCurrentSignedInUser");
        store.dispatch("setCurrentUser", res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err.response);
        if (err.response && err.response.status === 401) {
          localStorage.setItem("token", "");
          router.push("/");
        }
      }
    },
  },

  created() {
    // this.$toast.show(`Hey! I'm here`, { position: 'top-right', type: 'success'});
    this.getCurrentUser();
    store.dispatch("getMembers");
    // setTimeout(this.$toast.clear, 3000)
  },
};
</script>

<style>
@import "./styles/style.css";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.btn-loading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* .fade-enter-active{
  transition: all 1s cubic-bezier(.67,.01,.86,.65);
}

.fade-leave-active{
  transition: all 0.6s cubic-bezier(.67,.01,.86,.65);
}

.fade-enter-from,
.fade-leave-to{
  transition: translateX(20px);
  opacity: 0;
} */
</style>
