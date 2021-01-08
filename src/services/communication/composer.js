import axios from "@/gateway/backendapi";

const composerObj = {
    searchingMembers: true,

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
                    console.log(res, "send sms response");
                    resolve(res.data);
                })
                .catch(err => reject(err))
        })
    },

    async searchMemberDB(url, query) {
        let members = [ ];
        try {
            this.searchingMembers = true;
            console.log(this.searchingMembers);
            const res = await axios.get(`${url}?searchText=${query}`);
            this.searchingMembers = false;
            members = res.data;
            return members;
        } catch (error) {
            this.searchingMembers = false;
            console.log(error);
        }
        console.log(members, "members");
        // return members;
    }
}

export default composerObj;