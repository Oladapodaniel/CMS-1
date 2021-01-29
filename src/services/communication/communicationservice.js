import axios from "@/gateway/backendapi";

const communicationService = {
    async getAllSentSMS() {
        try {
            const { data } = await axios.get("/api/Messaging/getAllSentSms");
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default communicationService;