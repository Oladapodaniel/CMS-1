<template>
<transition name="fade" mode="out-in">
    <router-view class="view" />
</transition>
</template>

<script>
import axios from "@/gateway/backendapi";
import store from "@/store/store.js";

export default {
  name: "App",

  data() {
    return { transitionName: null };
  },

  methods: {
    async getCurrentUser() {
      try {
        const res = await axios.get("/api/Membership/GetCurrentSignedInUser");
        console.log(res.data, "Current user");
        store.dispatch("setCurrentUser", res.data);
        // console.log(store.getters.currentUser);
      } catch(err) {
        console.log(err.response);
      }
    }
  },

  created() {
    this.getCurrentUser()
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.btn-loading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fade-enter-active{
  transition: all 1s cubic-bezier(.67,.01,.86,.65);
}

.fade-leave-active{
  transition: all 0.6s cubic-bezier(.67,.01,.86,.65);
}

.fade-enter-from,
.fade-leave-to{
  transition: translateX(20px);
  opacity: 0;
}

</style>
