import axios from "@/gateway/backendapi";

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

export default { getChartOfAccounts, getCashBankAccounts, getAssetsAccounts }
