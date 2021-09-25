const frm = {
    getCallOutcome () {
        return new Promise((resolve, reject) => {
            axios.get("/api/LookUp/GetAllLookUps")
                .then(res => {
                    resolve(res.data);
                })
                .catch(error => {
                    if (error.response) {
                        reject(error.response);
                    } else {
                        reject(error);
                    }
                })
        })   
    }
}

export default frm