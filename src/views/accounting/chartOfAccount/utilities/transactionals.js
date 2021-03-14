import transaction_service from "../../../../services/financials/transaction_service";
// import stopProgressBar from "../progressbar/progress";

const transactionals = {
    accountTypes: ["assets", "liability", "income", "expense", "equity"],
    account: [],
    currencies: [],

    getTransactionalAccounts() {
        return new Promise((resolve, reject) => {
            if (!this.accounts || this.accounts.length === 0) {
                transaction_service.getTransactionalAccounts()
                .then(res => {
                    const data = [];
                    for (let group of this.accountTypes) {
                        const groupItems = res.filter(
                          (i) => i.accountType.toLowerCase() === group
                        );
                        data.push(groupItems);
                      }
                      this.accounts = data;
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
            } else {
                resolve(this.accounts)
            }
        })
    },

    getCurrencies() {
        return new Promise((resolve, reject) => {
            if (!this.currencies || this.currencies.length === 0) {
                transaction_service.getCurrencies()
                    .then(res => {
                        const mapped = res.map(i => {
                            return {
                                name: i.currency,
                                id: i.id,
                                country: i.name
                            }
                        })
                        this.currencies = mapped;
                        resolve(mapped);
                    })
                    .catch(err => {
                        reject(err);
                    })
            } else {
                resolve(this.currencies);
            }
        })
    }

}

export default transactionals;