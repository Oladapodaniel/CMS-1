import axios from "@/gateway/backendapi";
// import store from '../../store/store'

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
    }
}

export default membershipService;