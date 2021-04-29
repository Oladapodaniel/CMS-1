import axios from "@/gateway/backendapi";

export default {
  state: {
    eventData: {},
    eventList: [],
    reportData: {}
  },
  getters: {
    eventData: state => state.currentUser,
    eventList: state => state.eventList,
    reportData: state => state.reportData,
  },

  mutations: {
    setEventData(state, payload) {
      state.eventData = payload;
    },
    eventList(state, payload) {
      state.eventList = payload
    },
    clearState(state) {
      state.eventData = {}
      state.eventList = []
    },

    setReportData(state, payload) {
      state.reportData = payload;
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
    },
    clearState({ commit }) {
      commit("clearState")
    },

    setReportData({ commit }, payload) {
      commit("setReportData", payload);
    }
  }
}