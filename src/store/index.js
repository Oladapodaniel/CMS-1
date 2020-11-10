import { createStore } from 'vuex'

export default createStore({
  state: {
    userEmail: "ileadschleader@gmail.com",
    onboardingData: { },
    userRole: "",
    userData: { },
  },
  mutations: {
    setUserEmail(state, payload) {
      state.userEmail = payload;
    },

    setUserData(state, payload) {
      state.userData = payload;
    }
  },
  actions: {
    setUserEmail({commit}, payload) {
      commit("setUserEmail", payload)
    },

    setUserData({commit}, payload) {
      commit("setUserData", payload)
    }
  },

  getters: {
    userEmail: state => state.userEmail,
    onboardingData: state => state.onboardingData,
    userRole: state => state.userRole,
    userData: state => state.userData,
  },

  modules: {
    
  }
})
