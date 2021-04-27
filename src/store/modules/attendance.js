
export default {
    namespaced: true,

    state: {
        attendanceItemData: { },
    },

    mutations: {
        setItemData(state, payload) {
            state.attendanceItemData = payload;
        },

        clearState(state) {
            for (var prop in state) delete state[prop];
        }
    },

    actions: {
        setItemData({ commit }, payload) {
          commit("setItemData", payload)
        },

        clearState({ commit }) {
            commit("clearState")
        },
    },

    getters: {
        attendanceItemData: state => state.attendanceItemData,
    },
}