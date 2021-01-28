import axios from "@/gateway/backendapi";
import router from "@/router/index"
import lookupService from '../../services/lookup/lookupservice'


export default {
  namespaced: true,
  state: {
    gender: [ ],
    maritalStatus: [ ],
  },

  mutations: {
    setGenders(state, payload) {
      state.genders = payload;
    },

    setMaritalStatus(state, payload) {
      state.maritalStatus = payload;
    },
  },

  actions: {

    async getUser({ commit }) {
      try {
        const res = await axios.get("/api/Membership/GetCurrentSignedInUser");
        commit("setCurrentUser", res.data)
        router.push(`/tenant/${res.data.tenantId}`)
      } catch (err) {
        /*eslint no-undef: "warn"*/
        NProgress.done();
        console.log(err, "in store");
      }
    },

    setup({ commit }) {
        // lookupService.lookupsSetUp();
        lookupService.getLookUps()
            .then(res => {
                  commit("setGenders", res.genders);
                  commit("setMaritalStatus", res.maritalStatus);
            })
            .catch(err => {
                NProgress.done();
                console.log(err);
            })
    }

  },

  getters: {

  },
}