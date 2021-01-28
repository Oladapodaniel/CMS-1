import axios from "@/gateway/backendapi";
// import router from "@/router/index"
import lookupService from '../../services/membership/membershipservice'


export default {
//   namespaced: true,
  state: {
    members: [ ],
    firstTimers: [ ],
  },

  mutations: {
    setMembers(state, payload) {
      state.members = payload;
    },

    setFirstTimers(state, payload) {
      state.firstTimers = payload;
    },
  },

  actions: {
    setMembers({ commit }, payload) {
        commit("setMembers", payload)
    },

    setFirstTimers({ commit }, payload) {
        commit("setFirstTimers", payload)
    },

    async getMembers({ commit }) {
        console.log("getting");
      try {
        const { data } = await axios.get("/api/People/GetPeopleBasicInfo");
        console.log(data, "mbs");
        commit("setMembers", data)
      } catch (err) {
        /*eslint no-undef: "warn"*/
        NProgress.done();
        console.log(err, "in store");
      }
    },

    async getFirstTimers({ commit }) {
      try {
        const { data } = await axios.get("/api/People/FirstTimer");
        console.log(data, "fts");
        commit("setFirstTimers", data)
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
                NProgrss.done();
                console.log(err);
            })
    }

  },

  getters: {
    members: state => state.members,
    
    getMemberById: (state) => (id) => {
        return state.members.find(i => i.id === id)
    }
  },
}