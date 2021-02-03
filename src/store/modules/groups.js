import axios from "@/gateway/backendapi";
import stopProgressBar from "../../services/progressbar/progress"

export default {
    namespaced: true,

    state: {
        groups: [ ],
    },

    mutations: {
        setGroups(state, payload) {
            state.groups = payload;
        }
    },

    actions: {
        setGroups({ commit }, payload) {
          commit("setAllSentSMS", payload)
        },

        async getGroups({ commit }) {
            try {
                const { data } = await axios.get("/api/GetAllGroupBasicInformation");
                commit("setGroups", data);
            } catch (error) {
                stopProgressBar();
                console.log(error);
            }
        }
      },

      getters: {
        groups: state => state.groups,
      },
}