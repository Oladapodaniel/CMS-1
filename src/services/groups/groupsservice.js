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
    }
}

export default grousService;