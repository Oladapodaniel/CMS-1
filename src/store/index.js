import { createStore } from 'vuex'

export default createStore({
  state: {
    userEmail: "",
    onboardingData: { },
    userRole: "",
    userData: { },
    userStartPoint: "",
    settingUserUp: false,
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
    }
  },
  actions: {
    setUserEmail({commit}, payload) {
      commit("setUserEmail", payload)
    },

    setUserData({commit}, payload) {
      commit("setUserData", payload)
    },

    setOnboardingData({commit}, payload) {
      commit("setOnboardingData", payload)
    },

    setStartPoint({commit}, payload) {
      commit("setStartPoint", payload)
    },

    setUserUp({commit}, payload) {
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
