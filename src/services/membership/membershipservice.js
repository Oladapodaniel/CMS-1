import axios from "@/gateway/backendapi";
import store from '../../store/store'

const membershipService = {
    getMembers() {
        return new Promise((resolve, reject) => {
            axios.get("/api/People/GetPeopleBasicInfo")
                .then(res => {
                    resolve(res.data);
                    store.dispatch("setMembers", res.data);
                })
                .catch(error => {
                    /*eslint no-undef: "warn"*/
                    NProgress.done();
                    if (error.response) {
                        reject(error.response);
                    } else {
                        reject(error);
                    }
                })
        })
    },

    getSignedInUser() {
        return new Promise((resolve, reject) => {
            axios.get("/api/Membership/GetCurrentSignedInUser")
                .then(res => {
                    resolve(res.data);
                })
                .catch(error => {
                    /*eslint no-undef: "warn"*/
                    NProgress.done();
                    if (error.response) {
                        reject(error.response);
                    } else {
                        reject(error);
                    }
                })
        })
    },

    searchMembers(searchString) {
        return new Promise((resolve, reject) => {
            axios.get(`/api/membership/getsearchedusers?searchText=${searchString}`)
                .then(res => {
                    resolve(res.data);
                })
                .catch(error => {
                    /*eslint no-undef: "warn"*/
                    NProgress.done();
                    if (error.response) {
                        reject(error.response);
                    } else {
                        reject(error);
                    }
                })
        })
    },

    getFirstTimers() {
        return new Promise((resolve, reject) => {
            axios.get("/api/People/FirstTimer")
                .then(res => {
                    resolve(res.data);
                    store.dispatch("setFirstTimers", res.data);
                })
                .catch(error => {
                    /*eslint no-undef: "warn"*/
                    NProgress.done();
                    if (error.response) {
                        reject(error.response);
                    } else {
                        reject(error);
                    }
                })
        })
    },

    peopleHandle(p) {
        return p.map((i) => i).join(",")

    },

    deletePeople(data) {
        return new Promise((resolve, reject) => {
            // axios.delete(`/api/People/DeletePeoples?peopleIDList=${data}`)
            axios.post(`/api/People/DeletePeople`, data)
                .then(res => {
                    resolve(res.data);
                    console.log(res.data)
                })
                .catch(error => {
                    /*eslint no-undef: "warn"*/
                    NProgress.done();
                    if (error.response) {
                        reject(error.response);
                    } else {
                        reject(error);
                    }
                })
        })
    },

    addMemberToGroup(data, groupId) {
        return new Promise((resolve, reject) => {
            axios.put(`/api/AssignPeopleToGroup/${groupId}`, data)
                .then(res => {
                    console.log(res)
                    resolve(res.data);
                })
                .catch(error => {
                    /*eslint no-undef: "warn"*/
                    NProgress.done();
                    if (error.response) {
                        reject(error.response);
                    } else {
                        reject(error);
                    }
                })
        })
    },

    getMemberById(id) {
        return new Promise((resolve, reject) => {
            axios.get(
                `/api/People/GetPersonInfoWithAssignments/${id}`
            )
                .then((res) => {
                    resolve(res.data);
                })
                .catch(err => {
                    /*eslint no-undef: "warn"*/
                    NProgress.done();
                    if (err.response) reject(err.response);
                    if (!err.response) reject(err);

                    console.log(err);
                })
        })
    },

    addPersonToStore(data) {
        if (data) {
            const person = {
                id: data.personId,
                firstName: data.firstName,
                lastName: data.lastName,
                mobilePhone: data.mobilePhone,
                pictureUrl: data.pictureUrl,
                peopleClassificationID: data.peopleClassificationID,
                genderID: data.genderID,
                maritalStatusID: data.maritalStatusID,
                ageGroupID: data.ageGroupID
            }

            store.dispatch("membership/addMember", person);
        }
    },

    updatePersonInStore(data, personId) {
        if (data) {
            const person = {
                id: personId,
                firstName: data.firstName,
                lastName: data.lastName,
                mobilePhone: data.mobilePhone,
                pictureUrl: data.pictureUrl,
                peopleClassificationID: data.peopleClassificationID,
                genderID: data.genderID,
                maritalStatusID: data.maritalStatusID,
                ageGroupID: data.ageGroupID
            }

            store.dispatch("membership/updateMember", person);
        }
    }

}

export default membershipService;