import vueHighcharts from 'vue-highcharts';
import { createStore } from 'vuex'

export default createStore({
  state: {
    userEmail: "",
    onboardingData: {},
    userRole: "",
    userData: {},
    userStartPoint: "",
    settingUserUp: false,

    // transition area
    pageTransition: {
      name: "router-view",
      mode: "in-out"
    }
  },

  mutations: {
    setUserEmail(state, payload) {
      state.userEmail = payload;
    },

    set(state, payload) {
      state.userData = payload;
    },

    setOnboardingData(state, payload) {
      state.onboardingData = payload;
    },

    setStartPoint(state, payload) {
      state.userStartPoint = payload;
    },

    setUserUp(state, payload) {
      state.settingUserUp = payload;
    },

    // transition Area
    setPageTransition(state, value) {
      if ("default" === value) {
        Vue.set(state, "pageTransition", {
          name: "router-view",
          mode: "in-out"
        })
      }
      if ("back" === value) {
        Vue.set(state, "pageTransition", {
          name: "router-view-back",
          mode: ","
        })
      }
    }
// end of transition
  },
  actions: {
    setUserEmail({ commit }, payload) {
      commit("setUserEmail", payload)
    },

    setUserData({ commit }, payload) {
      commit("setUserData", payload)
    },

    setOnboardingData({ commit }, payload) {
      commit("setOnboardingData", payload)
    },

    setStartPoint({ commit }, payload) {
      commit("setStartPoint", payload)
    },

    setUserUp({ commit }, payload) {
      commit("setUserUp", payload)
    }
  },

  getters: {
    userEmail: state => state.userEmail,
    onboardingData: state => state.onboardingData,
    userRole: state => state.userRole,
    userData: state => state.userData,
    initialSignUpDetails: state => state.initialSignUpDetails,
    userStartPoint: state => state.userStartPoint,
    settingUserUp: state => state.settingUserUp,
  },

  modules: {

  }
})
