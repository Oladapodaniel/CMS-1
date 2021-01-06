import axios from "@/gateway/backendapi";

const composerObj = {
    possibleEmailDestinations: [
        "Select group from database",
        "Select person from membership database",
        "Phone numbers"
    ],

    possibleSMSDestinations: [
        "Select group from database",
        "Select person from membership database",
        "Phone numbers"
    ],

    getCommunicationGroups() {
        return new Promise((resolve, reject) => {
            axios.get("/api/Messaging/getCommunicationGroups")
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => reject(err))
        })
    },

    sendMessage(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => reject(err))
        })
    }
}

export default composerObj;