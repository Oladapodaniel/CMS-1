import axios from "@/gateway/backendapi";
import stopProgressBar from "../progressbar/progress"

const getChartOfAccounts = () => {
    return new Promise((resolve, reject) => {
        axios.get("/api/Financials/GetChartOfAccounts")
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

const getCashBankAccounts = () => {
    return new Promise((resolve, reject) => {
        axios.get("/api/Financials/Accounts/GetCashBankAccounts")
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

const getAssetsAccounts = () => {
    return new Promise((resolve, reject) => {
        axios.get("/api/Financials/Accounts/GetAssetAccounts")
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

const getFunds = () => {
    return new Promise((resolve, reject) => {
        axios.get("/api/Financials/Funds")
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

const saveAccount = (body) => {
    return new Promise((resolve, reject) => {
        axios.post("/api/Financials/Accounts/Save", body)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            stopProgressBar();
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

const deleteAccount = (body) => {
    return new Promise((resolve, reject) => {
        axios.post("/api/Financials/Accounts/Delete", body)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            stopProgressBar();
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

const saveFund = (body) => {
    return new Promise((resolve, reject) => {
        axios.post("/api/Financials/Funds/Save", body)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            stopProgressBar();
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

export default { getChartOfAccounts, getCashBankAccounts, getAssetsAccounts, getFunds, saveAccount, saveFund, deleteAccount }
