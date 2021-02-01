import axios from "@/gateway/backendapi";

export default {
    namespaced: true,

    state: {
        allSentSMS: [ ],
    },

    mutations: {
        setAllSentSMS(state, payload) {
            state.allSentSMS = payload;
        },
    },

    actions: {
        setAllSentSMS({ commit }, payload) {
          commit("setAllSentSMS", payload)
        },

        async getAllSentSMS({ commit }) {
            try {
                const { data } = await axios.get("/api/Messaging/getAllSentSms/1");
                commit("setAllSentSMS", data);
            } catch (error) {
                console.log(error);
            }
        }
      },

      getters: {
        allSentSMS: state => state.allSentSMS,
      },
}