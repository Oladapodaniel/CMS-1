
export default {
    namespaced: true,

    state: {
        attendanceItemData: { },
        eventRegItemData: { }
    },

    mutations: {
        setItemData(state, payload) {
            state.attendanceItemData = payload;
        },
        
        setEventReg(state, payload) {
            state.eventRegItemData = payload;
        },

        clearState(state) {
            for (var prop in state) delete state[prop];
        }
    },

    actions: {
        setItemData({ commit }, payload) {
          commit("setItemData", payload)
        },
        
        setEventReg({ commit }, payload) {
          commit("setEventReg", payload)
        },

        clearState({ commit }) {
            commit("clearState")
        },
    },

    getters: {
        attendanceItemData: state => state.attendanceItemData,
        eventRegItemData: state => state.eventRegItemData
    },
}