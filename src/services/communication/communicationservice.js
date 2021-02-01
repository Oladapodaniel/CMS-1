import axios from "@/gateway/backendapi";
import stopProgressBar from "../../services/progressbar/progress"


const communicationService = {
    async getAllSentSMS() {
        try {
            const { data } = await axios.get("/api/Messaging/getAllSentSms/1");
            return data;
        } catch (error) {
            stopProgressBar();
            console.log(error);
        }
    },

    async getMessageReport(messageId) {
        try {
            const { data } = await axios.get(`/api/Messaging/GetSentMessageDetails?messageID=${messageId}`);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default communicationService;