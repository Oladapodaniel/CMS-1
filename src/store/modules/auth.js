import axios from "@/gateway/backendapi";
import router from "@/router/index"


export default {
    state: {
        userEmail: "",
        onboardingData: {},
        userRole: "",
        userData: {},
        currentUser: {},
        userStartPoint: "",
        settingUserUp: false,
    },

    mutations: {
        setCurrentUser(state, payload) {
            state.currentUser = payload;
        },

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
        setCurrentUser({ commit }, payload) {
          commit("setCurrentUser", payload)
        },

        async getUser({ commit }) {
          try {
            const res = await axios.get("/api/Membership/GetCurrentSignedInUser");
            commit("setCurrentUser", res.data)
            // if (payload !== res.data.tenantId) {
            //   router.push("/next")
            // }
              router.push(`/tenant/${res.data.tenantId}`)
          } catch(err) {
            console.log(err, "in store");
          }
          
        },

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
        currentUser: state => state.currentUser,
        userEmail: state => state.userEmail,
        onboardingData: state => state.onboardingData,
        userRole: state => state.userRole,
        userData: state => state.userData,
        initialSignUpDetails: state => state.initialSignUpDetails,
        userStartPoint: state => state.userStartPoint,
        settingUserUp: state => state.settingUserUp,
      },
}