import axios from "@/gateway/backendapi";

const eventsService = {
    getEvents() {
        return new Promise((resolve, reject) => {
            axios.get("/api/Events/EventActivity")
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
}

export default eventsService;