import axios from "@/gateway/backendapi";
import stopProgressBar from "../../services/progressbar/progress"


const communicationService = {
    async getAllSentSMS(page) {
        try {
            const { data } = await axios.get(`/api/Messaging/getAllSentSms/${page}`);
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
    },

    async getDrafts() {
        try {
            const { data } = await axios.get(`/api/Messaging/getSMSDrafts`);
            return data;
        } catch (error) {
            stopProgressBar();
            console.log(error);
        }
    }
}

export default communicationService;