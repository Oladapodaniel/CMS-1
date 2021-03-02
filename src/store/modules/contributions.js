import axios from "@/gateway/backendapi";

export default {
    namespaced: true,
    state: {
        contributionList: [],
        contributionItems: []
    },
    getters: {
        contributionList: state => state.contributionList, 
        contributionItems: state => state.contributionItems
    },
    mutations: {
        saveList(state, payload) {
            state.contributionList = payload
        },
        contributionItems(state, payload) {
            state.contributionItems = payload
        }
    },
    actions: {
        async contributionList({ commit }) {
                try {
                    const { data } = await axios.get("/api/Financials/Contributions/Transactions");
                    commit("saveList", data);
                } catch (error) {
                    console.log(error);
                }
        },
        contributionItems({ commit }, payload) {
            commit("contributionItems", payload)
        }
    }
}