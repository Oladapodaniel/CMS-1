import axios from "@/gateway/backendapi";
import stopProgressBar from "../../services/progressbar/progress"

const startCheckinProces = async () => {
    return new Promise((resolve, reject) => {
        axios.get("/api/People/GetPeopleBasicInfo")
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

const saveCheckAttendanceItem = async (body) => {
    return new Promise((resolve, reject) => {
        axios.post("/api/CheckInAttendance/CheckInAttendanceItem", body)
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

const getItems = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/CheckInAttendance/AllCheckInAttendances`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                if (error.response) {
                    reject(error.response);
                } else {
                    reject(error);
                }
            })
    })
}

const getItemByCode = async (code) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/CheckInAttendance/AttendanceItem?attendanceCode=${code}`)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                if (error.response) {
                    reject(error.response);
                } else {
                    reject(error);
                }
            })
    })
}

const getReport = async (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/CheckInAttendance/AttendanceReport?id=${id}`)
            .then(res => {
                console.log(res, "'in service");
                resolve(res.data);
            })
            .catch(error => {
                console.log(error, "'error in service");
                if (error.response) {
                    reject(error.response);
                } else {
                    reject(error);
                }
            })
    })
}

const checkin = async (body) => {
    return new Promise((resolve, reject) => {
        axios.post(`/api/CheckInAttendance/MarkAttendance`, body)
        // axios.post(`/api/CheckInAttendance/MarkAttendance?CheckInAttendanceID=${id}`, body)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                stopProgressBar();
                if (error.response) {
                    reject(error.response);
                } else {
                    reject(error);
                }
            })
    })
}

const checkout = async (body) => {
    return new Promise((resolve, reject) => {
        axios.post(`/api/CheckInAttendance/CheckOut`, body)
        // axios.post(`/api/CheckInAttendance/MarkAttendance?CheckInAttendanceID=${id}`, body)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                stopProgressBar();
                if (error.response) {
                    reject(error.response);
                } else {
                    reject(error);
                }
            })
    })
}

export default { saveCheckAttendanceItem, startCheckinProces, getItems, getItemByCode, getReport, checkin, checkout };