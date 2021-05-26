import axios from "@/gateway/backendapi";

const validateColor = (color) => {
    alert(color, "in service")
    return new Promise((resolve, reject) => {
        let url = '/mobile/v1/Profile/CheckColorSaturation?a=' + `${color}2`;
        alert(url)
        axios.get(url)
            .then(res => {
                alert(`${color} ${2}`)
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

export default {
    validateColor
}