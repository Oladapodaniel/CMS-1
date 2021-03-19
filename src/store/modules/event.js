import axios from "@/gateway/backendapi";

export default {
    state: {
        eventData: { },
        eventList: []
    },
    getters: {
      eventData: state => state.currentUser,
      eventList: state => state.eventList
    },

    mutations: {
        setEventData(state, payload) {
            state.eventData = payload;
        },
        eventList(state, payload) {
          state.eventList = payload
        }
    },

    actions: {
        setEventData({ commit }, payload) {
          commit("setEventData", payload)
        },
        async eventList({ commit }) {
          try {
              const { data } = await axios.get("/api/eventreports/eventReports");
              commit("eventList", data);
          } catch (error) {
              console.log(error);
          }
        }
      }
}