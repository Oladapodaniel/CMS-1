import axios from "@/gateway/backendapi";

const authService = {
    resetPassword(email) {
        return new Promise((resolve, reject) => {
            axios.post(`/forgotpassword/${email}`)
                .then(res => {
                    resolve(res.data);
                })
                .catch(error => {
                    if (error.response) {
                        resolve(error.response)
                    } else {
                        reject(error)
                    }
                })
        })
    }
}

export default authService;