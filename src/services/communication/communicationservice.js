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

    async getMessageReport(messageId) {
        try {
            const { data } = await axios.get(`/api/Messaging/GetSentMessageDetails?CommReportId=${messageId}`);
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
            return false;
        }
    },

    async getEmailDrafts() {
        try {
            const { data } = await axios.get(`/api/Messaging/getEmailDrafts`);
            return data;
        } catch (error) {
            stopProgressBar();
            console.log(error);
            return false;
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
    },

    async getSentEmails(page) {
        try {
            console.log(page);
            const { data } = await axios.get(`/api/Messaging/getAllSentEmails`);
            // const { data } = await axios.get(`/api/Messaging/getAllSentEmails?page=${page}`);
            return data;
        } catch (error) {
            stopProgressBar();
            console.log(error);
            return false;
        }
    },

    async getSMSReplies(page) {
        try {
            const { data } = await axios.get(`/api/Messaging/GetAllSmsReplies?page=${page}`);
            return data;
        } catch (error) {
            stopProgressBar();
            console.log(error);
            return false;
        }
    }
}

export default communicationService;