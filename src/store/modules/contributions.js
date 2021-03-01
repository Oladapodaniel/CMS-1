import axios from "@/gateway/backendapi";

export default {
    namespaced: true,
    state: {
        contributionList: []
    },
    getters: {
        contributionList: state => state.contributionList 
    },
    mutations: {
        saveList(state, payload) {
            state.contributionList = payload
        }
    },
    actions: {
        contributionList({ commit }) {
            axios
                .get("/api/Financials/Contributions/Transactions")
                .then((res) => {
                    commit("saveList", res.data);
                })
                .catch((err) => {
                    console.log(err.response)
                });
        },
    }
}