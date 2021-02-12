import axios from "@/gateway/backendapi";
import stopProgressBar from "../../services/progressbar/progress"


const communicationService = {
    async getAllSentSMS(page) {
        try {
            const { data } = await axios.get(`/api/Messaging/getAllSentSms?page=${page}`);
            return data;
        } catch (error) {
            
            stopProgressBar();
            console.log(error);
            return false;
        }
    },

    async getMessageReport() {
    // async getMessageReport(messageId) {
        try {
            const { data } = await axios.get(`/api/Messaging/GetSentMessageDetails?CommReportId=43A29ED8-89BA-48AF-A956-000108891176`);
            // const { data } = await axios.get(`/api/Messaging/GetSentMessageDetails?CommReportId=${messageId}`);
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
    },

    async getDraftsById(id) {
        try {
            const { data } = await axios.get(`/api/Messaging/getSMSDraftByID?id=${id}`);
            return data;
        } catch (error) {
            stopProgressBar();
            console.log(error);
            return false;
        }
    }
}

export default communicationService;