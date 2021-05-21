
export default {
    namespaced: true,

    state: {
        mobileAppUsersData: {},
    },

    mutations: {
        setChurchProfileData(state, payload) {
            state.mobileAppUsersData = payload;
        },

        setSocialMediaData(state, payload) {
            state.mobileAppUsersData = payload;
        },
    },

    actions: {
        setChurchProfileData({ commit }, payload) {
          commit("setItemData", payload)
        },

        setSocialMediaData({ commit }, payload) {
          commit("setEventReg", payload)
        },
    },

    getters: {
        mobileAppUsersData: state => state.mobileAppUsersData,
    },
}