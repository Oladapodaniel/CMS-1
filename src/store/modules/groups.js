import axios from "@/gateway/backendapi";
import stopProgressBar from "../../services/progressbar/progress"

export default {
    namespaced: true,
    
    state: {
        groups: [],
    },


    mutations: {
        setGroups(state, payload) {
            state.groups = payload;
        },
        updateGroupPeopleCount(state, payload) {
            if (payload.operation === "add") {
                const group = state.groups.findIndex(i => i.id === payload.groupId)
                state.groups[group].peopleInGroupsCount += payload.count
            } else {
                const group = state.groups.findIndex(i => i.id === payload.groupId)
                state.groups[group].peopleInGroupsCount -= payload.count
            }

        },
        updateGroupPeopleCopy(state, payload) {
            const group = state.groups.findIndex(i => i.id === payload.groupId)
            state.groups[group].peopleInGroupsCount += payload.count

        },

        updateGroup(state, payload) {
            console.log(payload, "id");
            const targetGroupsIndex = state.groups.findIndex(i => i.id === payload.id);
            console.log(targetGroupsIndex, "index");
            state.groups[targetGroupsIndex] = payload;
        },

        addGroup(state, payload) {
            state.groups.unshift(payload);
        },

        removeGroup(state, payload) {
            state.groups.slice(payload, 1);
        },
        clearGroup (state) {
            console.log('state', state)
            state.groups = []
        }
    },

    actions: {
        removeGroup({ commit }, payload) {
            commit("removeGroup", payload)
        },

        addGroup({ commit }, payload) {
            commit("addGroup", payload)
        },
        updateGroupPeopleCount({ commit }, payload) {
            commit("updateGroupPeopleCount", payload)
        },
        updateGroupPeopleCopy({ commit }, payload) {
            commit("updateGroupPeopleCopy", payload)
        },

        setGroups({ commit }, payload) {
            commit("setGroups", payload)
        },

        updateGroup({ commit }, payload) {
            commit("updateGroup", payload)
        },
        clearGroup ({ commit }) {
            commit('clearGroup')
        },

        async getGroups({ commit }) {
            try {
                const { data } = await axios.get("/api/GetAllGroupBasicInformation");
                console.log(data)
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