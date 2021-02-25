
export default {
    namespaced: true,

    state: {
        attendanceItemData: { },
    },

    mutations: {
        setItemData(state, payload) {
            state.attendanceItemData = payload;
        }
    },

    actions: {
        setItemData({ commit }, payload) {
          commit("setItemData", payload)
        }
    },

    getters: {
        attendanceItemData: state => state.attendanceItemData,
    },
}