

const startCheckinProces = async () => {
    return new Promise((resolve, reject) => {
        axios.get("/api/People/GetPeopleBasicInfo")
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
}