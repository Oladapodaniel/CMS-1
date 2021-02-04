import axios from "@/gateway/backendapi";
import stopProgressBar from "../../services/progressbar/progress"

const grousService = {
    async getGroups() {
        try {
            const { data } = await axios.get("/api/GetAllGroupBasicInformation");
            return data;
        } catch (error) {
            stopProgressBar();
            console.log(error);
        }
    },

    async removeFromGroup(id, body) {
        try {
            const { data } = await axios.put(`/api/RemovePeopleFromGroup/${id}`, body);
            return data;
        } catch (error) {
            stopProgressBar();
            console.log(error);
            return false;
        }
    },

    async deleteGroup(id) {
        try {
            const { data } = await axios.delete(`/api/DeleteGroup/${id}`);
            return data;
        } catch (error) {
            stopProgressBar();
            console.log(error);
            return false;
        }
    }
}

export default grousService;