import axios from "@/gateway/backendapi";
// import store from '../../store/store'

const lookupService = {
    lookupsSetUp() {
        try {
            this.getPeopleClassifications();
        } catch (error) {
            console.log(error);
        }
        try {
            this.getAgeGroups();
        } catch (error) {
            console.log(error);
        }
        try {
            this.getLookUps();
        } catch (error) {
            console.log(error);
        }
    },

    getAgeGroups() {
        /*eslint no-undef: "warn"*/
        // NProgress.done();
        axios
            .get("/api/Settings/GetTenantAgeGroups")
            .then((res) => {
                console.log(res.data, "agegroups");
            })
            .catch((err) => console.log(err.response));
    },

    getPeopleClassifications() {
        axios
            .get("/api/Settings/GetTenantPeopleClassification")
            .then((res) => {
                console.log(res.data, "classes");
            })
            .catch((err) => console.log(err.response));

    },

    getUserSource() {
        return new Promise((resolve, reject) => {
            axios.get("/api/membership/howyouheardaboutus").then((res) => {
                // console.log(res.data, 'about us')
                const howDidYouAboutUs = res.data.map((i) => {
                  return { name: i.name, id: i.id };
                });

                resolve(howDidYouAboutUs);
              })
              .catch(error => {
                  if (error.response) reject(error.response)
                  if (!error.response) reject(error)
              })
        });

    },

    getLookUps() {
        return new Promise((resolve, reject) => {
            axios
            .get("/api/LookUp/GetAllLookUps")
            .then((res) => {
                console.log(res, "lookups");
                const genders = res.data.find(
                    (i) => i.type.toLowerCase() === "gender"
                ).lookUps;
                const maritalStatus = res.data.find(
                    (i) => i.type.toLowerCase() === "marital status"
                ).lookUps;
                resolve({ genders, maritalStatus })
            })
            .catch((err) => {
                console.log(err)
                reject(err);
            });
        })
    }
}

export default lookupService;