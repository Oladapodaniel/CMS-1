<template>
  <div class="container">
    <div class="row bordered-bottom pb-2 mb-3">
      <div class="col-md-12">
        <h5 class="mb-0 py-2 d-flex justify-content-between"><span>General Ledger</span> <span @click="closeLedgerForm"><i class="pi pi-times c-pointer"></i></span></h5>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <div class="row">
            <div class="col-md-12 desc-area">
              <label for="" class="form-label" style="font-size: 14px"
                >Description</label
              >
              <textarea
                name=""
                id=""
                class="w-100 border-0 textarea"
                rows="1"
                placeholder="Write a description"
                v-model="memo"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row bordered-bottom pb-3 mb-3">
      <div class="col-md-6 d-flex align-items-end">
        <input
          type="date"
          name=""
          id=""
          class="form-control"
          v-model="transactionDate"
        />
      </div>
      <div class="col-md-6 d-md-flex flex-column align-items-end">
        <span class="small-text mb-n2">Total</span>
        <span class="font=weight-700" style="font-size: 30px">{{
          totalAmount
        }}</span>
      </div>
    </div>

    <!-- <div class="row d-flex justify-content-around">
      <div class="col-5 bordered-bottom">
        <h5 class="font-weight-700">Debits</h5>
      </div>
      <div class="col-5 bordered-bottom">
        <h5 class="font-weight-700">Credits</h5>
      </div>
    </div> -->

    <div class="row bordered-bottom pb-3 mb-3">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-8"></div>
          <div class="col-md-4 pl-0">
            <h5 class="font-weight-700 text-center mb-0">Debits</h5>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div
          class="row my-1 d-flex"
          v-for="(transaction, indexe) in journalTransactions"
          :key="indexe"
        >
          <div class="col-md-12" v-if="transaction.category === 'inflow'">
            <div class="row">
              <div class="col-md-8">
                <div class="dropdown">
                  <button
                    class="btn btn-white w-100 bordered text-left bg-light d-flex justify-content-between"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <!-- :disabled="accountGroupId" -->
                    <span>
                      {{
                        !transaction.account
                          ? "Select account type"
                          : transaction.account
                      }}
                    </span>
                    <span><i class="pi pi-angle-down"></i></span>
                  </button>
                  <div
                    class="dropdown-menu w-100"
                    style="max-height: 300px; overflow: auto"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div class="container">
                      <div
                        class="row"
                        v-for="(accounts, index) in transactionalAccounts"
                        :key="index"
                      >
                        <div class="col-md-12 px-2">
                          <h6
                            class="mb-0 text-capitalize font-weight-bold"
                            v-if="accounts.length > 0"
                          >
                            {{ accountTypes[index] }}
                          </h6>
                        </div>
                        <div class="col-md-12">
                          <a
                            class="dropdown-item px-1 px-14"
                            href="#"
                            v-for="(account, indx) in accounts"
                            :key="indx"
                            @click="selectAccount(1, indexe, account)"
                            >{{ account.text }}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-2 pl-0">
                <input
                  type="text"
                  class="form-control w-100"
                  v-model="transaction.amount"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12 d-flex justify-content-between">
        <div class="col-8 px-0">
          <a
            class="text-decoration-none font-weight-700 link-color c-pointer"
            @click="addRecord('inflow')"
            >Add Debit <i class="pi pi-plus-circle" style="font-size: 14px"></i
          ></a>
        </div>
        <div class="col-4 px-0 text-center">
          <span class="font-weight-bold">{{ sumOfRecords(debitRecords) }}</span>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-8"></div>
          <div class="col-md-4 pl-0">
            <h5 class="font-weight-700 text-center mb-0">Credits</h5>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div
          class="row my-1 d-flex"
          v-for="(transaction, indexe) in journalTransactions"
          :key="indexe"
        >
          <div class="col-md-12" v-if="transaction.category === 'outflow'">
            <div class="row">
              <div class="col-md-8">
                <div class="dropdown">
                  <button
                    class="btn btn-white w-100 bordered text-left bg-light d-flex justify-content-between"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <!-- :disabled="accountGroupId" -->
                    <span>
                      {{
                        !transaction.account
                          ? "Select account type"
                          : transaction.account
                      }}
                    </span>
                    <span><i class="pi pi-angle-down"></i></span>
                  </button>
                  <div
                    class="dropdown-menu w-100"
                    style="max-height: 300px; overflow: auto"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div class="container">
                      <div
                        class="row"
                        v-for="(accounts, index) in transactionalAccounts"
                        :key="index"
                      >
                        <div class="col-md-12 px-2">
                          <h6
                            class="mb-0 text-capitalize font-weight-bold"
                            v-if="accounts.length > 0"
                          >
                            {{ accountTypes[index] }}
                          </h6>
                        </div>
                        <div class="col-md-12">
                          <a
                            class="dropdown-item px-1 px-14"
                            href="#"
                            v-for="(account, indx) in accounts"
                            :key="indx"
                            @click="selectAccount(0, indexe, account)"
                            >{{ account.text }}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-2 pl-0">
                <input
                  type="text"
                  class="form-control w-100"
                  v-model="transaction.amount"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 d-flex justify-content-between px-0">
          <div class="col-8 px-0">
            <a
              class="text-decoration-none font-weight-700 link-color c-pointer"
              @click="addRecord('outflow')"
              >Add Credit
              <i class="pi pi-plus-circle" style="font-size: 14px"></i
            ></a>
          </div>
          <div class="col-4 text-center px-0">
            <span class="font-weight-bold">{{
              sumOfRecords(creditRecords)
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-center" v-if="unbalanced">
        <span class="text-center text-danger font-weight-700">Unbalanced</span>
      </div>
      <div class="col-md-12 d-flex justify-content-center my-3">
        <button
          class="default-btn primary-bg text-white font-weight-700 border-0"
          @click="saveTransaction"
        >
          Save
        </button>
        <Toast />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import transactionals from "../../chartOfAccount/utilities/transactionals";
import { computed } from '@vue/runtime-core';
import transaction_service from '../../../../services/financials/transaction_service';
import { useToast } from "primevue/usetoast"

export default {
  setup(props, { emit }) {
    const toast = useToast();

    const selectedAccountType = ref({});
    const transactionalAccounts = ref([]);
    const accountTypes = ["assets", "liability", "equity", "income", "expense"];

    const getTransactionalAccounts = async () => {
      try {
        const response = await transactionals.getGroupedAccounts();
        transactionalAccounts.value = response;
        console.log(response, "rrrr");
      } catch (error) {
        console.log(error);
      }
    };
    getTransactionalAccounts();

    const selectAccount = (type, index, account) => {
      console.log(account, "click account");
      if (type === 0) {
          journalTransactions.value[index].creditAccountID = account.id;
          journalTransactions.value[index].account = account.text;
          console.log(journalTransactions.value, "CREDITS");
      } else {
          console.log(journalTransactions.value[index]);
          journalTransactions.value[index].debitAccountID = account.id;
          journalTransactions.value[index].account = account.text;
          console.log(journalTransactions.value, "Debits");
      }
    };

    const journalTransactions = ref([
      {
        category: "inflow",
        amount: 0.0,
      },
      {
        category: "outflow",
        amount: 0.0,
      },
    ]);

    const sumOfRecords = (records) => {
        let sum = 0;
        for (let record of records) {
            sum += +record.amount;
        }
        return sum;
    }

    const addRecord = (category) => {
        journalTransactions.value.push({ category: category, amount: 0.00 })
    }

    const debitRecords = computed(() => {
        if (!journalTransactions.value) return [ ];
        return journalTransactions.value.filter(i => i.category === "inflow");
    })

    const creditRecords = computed(() => {
        if (!journalTransactions.value) return [ ];
        return journalTransactions.value.filter(i => i.category === "outflow");
    })

    const totalAmount = computed(() => {
        if (!journalTransactions.value) return 0;
        const debits = journalTransactions.value.filter(i => i.category === "inflow");
        
        return sumOfRecords(debits);
    })

    const unbalanced = computed(() => {
        const debitSum = sumOfRecords(debitRecords.value);
        const creditSum = sumOfRecords(creditRecords.value);
        return debitSum !== creditSum;
    })

    const memo = ref("");
    const transactionDate = ref("");

    const saveTransaction = async () => {
        if ((sumOfRecords(creditRecords.value) !== sumOfRecords(debitRecords.value)) || sumOfRecords(debitRecords.value) === 0) return false;
        const body = journalTransactions.value.map(i => {
            return {
                memo: memo.value,
                date: transactionDate.value,
                debitAccountID: i.debitAccountID,
                creditAccountID: i.creditAccountID,
                amount: i.amount,
            }
            
        })

        try {
                const response = await transaction_service.saveJournalTransaction(body);
                console.log(response, "LEDGER save");
                if (response.status >= 200 && response.status <= 300) {
                    toast.add({severity:'success', summary:'Successful', detail:`The transaction was succesful`, life: 3000});
                } else {
                    toast.add({severity:'error', summary:'Transaction failed', detail:`An error occurred, please try again`, life: 3000});
                }
            } catch (error) {
                toast.add({severity:'error', summary:'Transaction failed', detail:`An error occurred, please try again`, life: 3000});
                console.log(error);
            }
        console.log("Hello");
    }

    const closeLedgerForm = () => {
        emit("close-ledger")
    }

    return {
      accountTypes,
      selectedAccountType,
      selectAccount,
      transactionalAccounts,
      journalTransactions,
      addRecord,
      creditRecords,
      debitRecords,
      totalAmount,
      sumOfRecords,
      saveTransaction,
      unbalanced,
      memo,
      transactionDate,
      closeLedgerForm,
    };
  },
};
</script>

<style scoped>
.bordered-bottom {
  border-bottom: 1px solid#00204412 !important;
}

.bordered-top {
  border-top: 1px solid#00204412 !important;
}

.bordered {
  border: 1px solid#00204412 !important;
}

.greyish-color {
  color: #47525d;
}

.desc-area {
  border: 1px solid #00204412;
  background: white;
  margin-bottom: 10px;
}

.textarea {
  outline: transparent;
}

.textarea::placeholder {
  font-size: 18px;
}

.link-color {
  color: #343a40;
}
</style>