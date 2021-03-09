<template>
  <div @click="hideModals">
    <!-- <div>{{ transacObj }}</div> -->
    <!-- <div>{{ splitCategories }}</div> -->
    <!-- <div>{{ showEditTransaction }}</div> -->
    <div class="col-12 parent-desc d-flex justify-content-between first p-3">
      <div>Edit Transaction Details</div>
      <i
        class="pi pi-times c-pointer"
        @click="closeTransac"
        aria-hidden="true"
      ></i>
    </div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-12">
          <!-- <label for="description">Write a Description</label> -->
        </div>
        <div class="col-7 pr-0">
          <div class="label-text">Write a Description</div>
          <input
            class="form-control"
            id="description"
            ref="descrp"
            v-model="transacObj.memo"
            placeholder="Description"
            :autofocus="showEditTransaction"
            
          />
        </div>
        <div class="col-5 pl-0">
          <div class="label-text">Date</div>
          <input
            type="date"
            v-model="transacObj.date"
            id="date"
            class="form-control"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-7 pr-0">
          <div class="label-text">Cash Account</div>
          <div
            class="select-elem-con pointer form-control d-flex justify-content-space-between align-items-center close-modal c-pointer"
            @click="showAccount = !showAccount"
          >
            <span class="ofering close-modal">{{
              !selectedCashAccount || !selectedCashAccount.text ? "Select" : selectedCashAccount.text
            }}</span
            ><span>
              <i class="pi pi-angle-down close-modal" aria-hidden="true"></i
            ></span>
            <!-- <span class="ofering close-modal">{{
              !transacObj.accountFlow ? "Select" : transacObj.accountFlow
            }}</span
            ><span>
              <i class="pi pi-angle-down close-modal" aria-hidden="true"></i
            ></span> -->
          </div>
          <div
            class="ofering close-modal"
            :class="{ 'style-account': showAccount }"
            v-if="showAccount"
            ref="selectAccount"
          >
            <div class="px-3 pt-3 close-modal">
              <input
                type="text"
                placeholder="Search"
                class="form-control ofering mb-1 close-modal"
                v-model="accountText"
              />
            </div>

            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12 px-0" v-for="(accounts, index) in transactionalAccounts" :key="index">
                  <div class="desc-head py-1 px-3 close-modal text-capitalize" v-if="accounts.length > 0">{{ accountTypes[index] }}</div>
                  <div class="header-border close-modal">
                    <div v-if="true">
                      <div
                        @click="accountFlow($event, item)"
                        class="manual-dd-item close-modal"
                        v-for="(item, indx) in accounts"
                        :key="indx"
                      >
                        <div
                          class="d-flex justify-content-between py-2 px-3 close-modal"
                        >
                          <div class="close-modal offset-sm-1">{{ item.text }}</div>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <div class="text-center px-3 py-2 text-danger">
                        No Match Found
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
        <div class="col-sm-5 pl-0">
          <div class="label-text">Amount</div>
          <input
            type="number"
            class="form-control"
            v-model="transacObj.amount"
            placeholder="0.00"
          />
        </div>
        <!-- <div class="col-12 text-right vendor mt-1">{{ transactionDetails.vendor }}</div> -->
      </div>

      <div>
        <!-- <div v-if="transacObj.splitCategories.length <= 0"> -->
        <div class="row mt-3">
          <div class="col-12">
            <div class="label-text">{{ transactionDetails.account }}</div>
            <div
              class="select-elem-con pointer d-flex justify-content-space-between close-modal c-pointer"
              @click="showUncategorized = !showUncategorized"
            >
              <span class="ofering close-modal">{{
                !selectedIncomeOrExpenseAccount || !selectedIncomeOrExpenseAccount.text ? "Select" : selectedIncomeOrExpenseAccount.text
              }}</span
              ><span>
                <i class="pi pi-angle-down close-modal" aria-hidden="true"></i
              ></span>
              <!-- <span class="ofering close-modal">{{
                !transacObj.category ? "Select" : transacObj.category
              }}</span
              ><span>
                <i class="pi pi-angle-down close-modal" aria-hidden="true"></i
              ></span> -->
            </div>
            <div
              class="ofering close-modal"
              :class="{ 'style-uncategorized': showUncategorized }"
              v-if="showUncategorized"
            >
              <div class="px-3 pt-3 close-modal">
                <input
                  type="text"
                  placeholder="Search..."
                  class="form-control ofering mb-1 close-modal"
                  v-model="uncategorizedText"
                />
              </div>

              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12 px-0">
                    <!-- <div class="desc-head py-1 px-3 close-modal">Assets</div> -->
                    <div class="header-border close-modal">
                      <div v-if="filterUncategorizedAsset.length > 0">
                        <div
                          class="manual-dd-item close-modal"
                          v-for="(item, index) in expenseIncomeAccounts"
                          :key="index"
                        >
                          <div
                            class="d-flex justify-content-between py-2 px-3 close-modal"
                          >
                            <div
                              class="close-modal offset-sm-1"
                              @click="categories($event, item)"
                            >
                              {{ item.text }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-else>
                        <div class="text-center px-3 py-2 text-danger">
                          No Match Found
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="desc-head px-3 pt-2 close-modal">
                Liabilities and Credit Cards
              </div>
              <div class="header-border close-modal">
                <div v-if="filterUncategorizedLiabilities.length > 0">
                  <div
                    class="manual-dd-item close-modal"
                    v-for="(item, index) in filterUncategorizedLiabilities"
                    :key="index"
                  >
                    <div
                      class="d-flex justify-content-between py-2 px-3 close-modal"
                    >
                      <div class="close-modal offset-sm-1" @click="categories">
                        {{ item }}
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="px-3 py-2 text-center text-danger">
                    No Match Found
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end">
          <div class="mt-2 vendor">{{ transactionDetails.type }}</div>
          <div class="dot ml-2"></div>
          <div class="mt-2 ml-2 vendor">Include Tax Sales</div>
        </div>
      </div>
      <!-- <div v-else>
        <div
          class="row mt-3"
          v-for="(item, index) in transacObj.splitCategories"
          :key="index"
        >
          
          <div class="col-sm-7 pr-0">
            <div class="label-text">{{ transactionDetails.account }}</div>
            <div
              class="select-elem-con pointer d-flex justify-content-space-between close-modal form-control"
              @click="item.showUncategorized = !item.showUncategorized"
            >
              <span class="ofering close-modal">{{
                item.category ? item.category : "Select"
              }}</span
              ><span>
                <i class="pi pi-angle-down close-modal" aria-hidden="true"></i
              ></span>
            </div>
            <div
              class="ofering close-modal"
              :class="{ 'style-uncategorized': item.showUncategorized }"
              v-if="item.showUncategorized"
            >
              <div class="px-3 pt-3 close-modal">
                <input
                  type="text"
                  placeholder="Search..."
                  class="form-control ofering mb-1 close-modal"
                  v-model="uncategorizedText"
                />
              </div>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12 px-0">
                    <div class="desc-head py-1 px-3 close-modal">Assets</div>
                    <div class="header-border close-modal">
                      <div v-if="filterUncategorizedAsset.length > 0">
                        <div
                          class="manual-dd-item close-modal"
                          v-for="(item, index) in filterUncategorizedAsset"
                          :key="index"
                        >
                          <div
                            class="d-flex justify-content-between py-2 px-3 close-modal"
                          >
                            <div
                              class="close-modal offset-sm-1"
                              @click="categoryAccount"
                            >
                              {{ item }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-else>
                        <div class="text-center px-3 py-2 text-danger">
                          No Match Found
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div class="desc-head px-3 pt-2 close-modal">
                Liabilities and Credit Cards
              </div>
              <div class="header-border close-modal">
                <div v-if="filterUncategorizedLiabilities.length > 0">
                  <div
                    class="manual-dd-item close-modal"
                    v-for="(item, index) in filterUncategorizedLiabilities"
                    :key="index"
                  >
                    <div
                      class="d-flex justify-content-between py-2 px-3 close-modal"
                    >
                      <div
                        class="close-modal offset-sm-1"
                        @click="categoryAccount"
                      >
                        {{ item }}
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="px-3 py-2 text-center text-danger">
                    No Match Found
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4 pl-0">
            <div class="label-text">Amount</div>
            <input
              type="number"
              class="form-control"
              ref="amountRef"
              v-model="item.amount"
              placeholder="0.00"
            />
          </div>
          <div class="col-sm-1 pl-0">
            <div class="label-text"></div>
            <i
              class="pi pi-trash mt-4 c-pointer"
              @click="deleteSplit(index)"
            ></i>
          </div>
          <div class="d-flex justify-content-end adjust-left">
            <div class="mt-2 vendor">{{ transactionDetails.type }}</div>
            <div class="dot ml-2"></div>
            <div class="mt-2 ml-2 vendor">Include Tax Sales</div>
          </div>
        </div>

        
      </div> -->

      <div>{{ totalAmount.amount }}</div>
      <div class="row mt-2">
        <div class="col-3 line pr-0"><hr /></div>
        <div
          class="col-6 mt-2 text-center split"
          v-tooltip.top="
            'Create multiple categories to associate(split) this trasaction between different accounts.'
          "
          @click="splitWithdrawal"
        >
          Split this widrawal <i class="fa fa-info-circle"></i>
        </div>
        <div class="col-3 line pl-0"><hr /></div>
        <div
          class="error-div col-10 offset-1 mt-3"
          v-if="parseInt(totalAmount.amount) > transacObj.amount"
        >
          <div class="row">
            <i class="fa fa-exclamation-circle col-1" aria-hidden="true"></i>
            <p class="error-message col-10 pl-0">
              The sum of the above lines should not exceed the total deposit
              amount of {{ transacObj.amount }}
            </p>
          </div>
        </div>
        <div class="col-12 mt-4">
          <textarea
            class="form-control"
            v-model="transacObj.note"
            rows="3"
            placeholder="Notes"
          ></textarea>
        </div>
        <div class="col-12 mt-1 modified">
          Transaction last modified on February 18th,2021
        </div>
        <div class="col-6 offset-sm-3 mb-2 mt-3" @click="saveTransac">
          <div class="primary-btn text-center" @click="saveIncome">Save</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, nextTick, onUpdated, watch } from "vue";
import Tooltip from "primevue/tooltip";
import transaction_service from "../../../services/financials/transaction_service";
// import Dropdown from 'primevue/dropdown';
export default {
  components: {},
  directives: {
    tooltip: Tooltip,
  },
  props: ["transactionDetails", "showEditTransaction"],
  setup(props, { emit }) {
    const showAccount = ref(false);
    const accountText = ref("");
    const accountType = ref(["Cash and Bank", "Money in Transit"]);
    const liabilities = ref(["Credit Card", "Loan and Line of Credit"]);
    const showUncategorized = ref(false);
    const uncategorizedText = ref("");
    const transacObj = ref(props.transactionDetails);
    // const transacObj = ref({
    //   // splitCategories: [],
    // });

    const amountRef = ref("");
    const descrp = ref("");
    const selectedCashAccount = ref({ });
    const selectedIncomeOrExpenseAccount = ref({ });

    const filterAccount = computed(() => {
      if (accountText.value !== "" && accountType.value.length > 0) {
        return accountType.value.filter((i) => {
          if (i)
            return i.toLowerCase().includes(accountText.value.toLowerCase());
        });
        // console.log(currencyText)
      } else {
        return accountType.value;
      }
    });

    const filterLiabilities = computed(() => {
      if (accountText.value !== "" && liabilities.value.length > 0) {
        return liabilities.value.filter((i) => {
          if (i)
            return i.toLowerCase().includes(accountText.value.toLowerCase());
        });
      } else {
        return liabilities.value;
      }
    });

    const hideModals = (e) => {
      if (!e.target.classList.contains("close-modal")) {
        showAccount.value = false;
        showUncategorized.value = false;
      }
    };

    const filterUncategorizedAsset = computed(() => {
      if (uncategorizedText.value !== "" && accountType.value.length > 0) {
        return accountType.value.filter((i) => {
          if (i)
            return i
              .toLowerCase()
              .includes(uncategorizedText.value.toLowerCase());
        });
        // console.log(currencyText)
      } else {
        return accountType.value;
      }
    });

    const filterUncategorizedLiabilities = computed(() => {
      if (uncategorizedText.value !== "" && liabilities.value.length > 0) {
        return liabilities.value.filter((i) => {
          if (i)
            return i
              .toLowerCase()
              .includes(uncategorizedText.value.toLowerCase());
        });
      } else {
        return liabilities.value;
      }
    });

    const categoryAccount = (e) => {
      // console.log(e.target.innerText)
      // console.log(splitCategories.value.length)
      transacObj.value.splitCategories[
        transacObj.value.splitCategories.length - 1
      ].category = e.target.innerHTML;
      transacObj.value.splitCategories[
        transacObj.value.splitCategories.length - 1
      ].showUncategorized = false;
      // let index = splitCategories.findIndex(i => )
    };

    const categories = (e, account) => {
      // transacObj.value.category = e.target.innerText;
      showUncategorized.value = !showUncategorized.value;
      selectedIncomeOrExpenseAccount.value = account;
      console.log(selectedIncomeOrExpenseAccount.value );
    };

    const accountFlow = (e, account) => {
      console.log(e.target.innerText);
      // transacObj.value.accountFlow = e.target.innerText;
      showAccount.value = !showAccount.value;
      selectedCashAccount.value = account;
      console.log(selectedCashAccount.value, "SCA");
    };

    const splitWithdrawal = () => {
      transacObj.value.splitCategories.push({
        amount: 0,
      });
      nextTick(() => {
        amountRef.value.select();
      });
    };

    const deleteSplit = (index) => {
      transacObj.value.splitCategories.splice(index, 1);
    };

    const totalAmount = computed(() => {
      if (transacObj.value.splitCategories && transacObj.value.splitCategories.length > 0) {
        return transacObj.value.splitCategories.reduce((a, b) => {
          return { amount: parseInt(a.amount) + parseInt(b.amount) };
        });
      } else {
        return 0;
      }
    });

    const expenseIncomeAccounts = computed(() => {
        if (!props.transactionDetails.account) return "";
        if (props.transactionDetails.account === "Income Account") return accountType.value ? accountType.value : [ ];
        return expenseAccounts.value ? expenseAccounts.value : [ ];
    })

    const closeTransac = () => {
      emit("close-it", false);
    };

    const saveTransac = () => {
      // console.log(transacObj.value)
      // emit('transac-obj', transacObj.value)
      // emit('close-it', false)
      // let arr = [{ amount: 1 },{ amount: 2 },{ amount: 3 },{ amount: 4 },]
      // let sum = arr.reduce((a, b) => {
      //     return { amount: a.amount + b.amount }
      // })
      // console.log(sum)
      // if (parseInt(totalAmount.value.amount) > transacObj.value.amount) {
      //     console.log('Already More')
      // } else {
      //     console.log('Not yet more')
      // }
      // console.log(transacObj.value.amount, totalAmount.value.amount, 'transac')
      // amountRef.value.select()
      // console.log(showEditTransaction.value)
    };

    onUpdated(() => {
      // if (showEditTransaction.value == true) {
      // descrp.value.focus()
      // }
    });

    const getIncomeAccounts = async () => {
      try {
        const response = await transaction_service.getIncomeAccounts();
        accountType.value = response;
      } catch (error) {
        console.log(error);
      }
    };

    const expenseAccounts = ref([ ]);
    const getExpenseAccounts = async () => {
      try {
        const response = await transaction_service.getExpenseAccounts();
        expenseAccounts.value = response;
      } catch (error) {
        console.log(error);
      }
    };

    getExpenseAccounts();
    getIncomeAccounts();

    const transactionalAccounts = ref([]);
    const accountTypes = ["assets", "liability", "income", "expense", "equity"];

    const getTransactionalAccounts = async () => {
      try {
        const response = await transaction_service.getTransactionalAccounts();
        for (let group of accountTypes) {
          const groupItems = response.filter(
            (i) => i.accountType.toLowerCase() === group
          );
          transactionalAccounts.value.push(groupItems);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const newIncome = ref({ });
    const saveIncome = async () => {
        try {
          // if (selectedCashAccount.value.financialFundID) {
          //   transacObj.value.financialFundID = selectedCashAccount.value.financialFundID;
          // }
          if (props.transactionDetails.account === "Income Account") {
            transacObj.value.creditAccountID = selectedIncomeOrExpenseAccount.value.id;
            transacObj.value.debitAccountID = selectedCashAccount.value.id;
            const response = await transaction_service.saveIncome(transacObj.value);
            console.log(response, "Save income response");
          } else {
            transacObj.value.debitAccountID = selectedIncomeOrExpenseAccount.value.id;
            transacObj.value.creditAccountID = selectedCashAccount.value.id;      
            const response = await transaction_service.saveExpense(transacObj.value);
            console.log(response, "Save expense response");
          }
        } catch (error) {
          console.log();
        }
    }

    getTransactionalAccounts();

    watch(() => props.transactionDetails, (data) => {
      console.log(data, "in watch");
      transacObj.value.date = new Date(data.date);
      transacObj.value.amount = data.amount;
      transacObj.value.memo = data.memo;
      // transacObj.value = { memo: data.memo, date: data.date, amount: data.amount }

      console.log(transacObj.value, "TO");
    })

    return {
      showAccount,
      accountText,
      filterAccount,
      accountType,
      filterLiabilities,
      liabilities,
      hideModals,
      showUncategorized,
      uncategorizedText,
      filterUncategorizedAsset,
      filterUncategorizedLiabilities,
      closeTransac,
      transacObj,
      saveTransac,
      categoryAccount,
      splitWithdrawal,
      deleteSplit,
      accountFlow,
      totalAmount,
      amountRef,
      descrp,
      categories,

      transactionalAccounts,
      accountTypes,
      expenseIncomeAccounts,
      saveIncome,
      newIncome,
      selectedCashAccount,
      selectedIncomeOrExpenseAccount,
    };
  },
};
</script>

<style scoped>
.parent-desc.first {
  color: #8898aa;
  font-size: 15px;
  font-weight: 600;
  box-shadow: 0px 3px 6px #2c28281c;
  background: #dde2e6 0% 0% no-repeat padding-box;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.select-elem-con {
  padding: 5px 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  justify-content: space-between;
  background: rgb(253, 253, 253);
}

.style-account {
  box-shadow: 0px 3px 15px #797e8159;
  position: absolute;
  background: white;
  z-index: 1;
  width: 130%;
  max-height: 14em;
  overflow-y: scroll;
}
.style-account div div div:hover {
  /* background-color: #ecf0f3; */
  cursor: pointer;
}

.style-uncategorized {
  box-shadow: 0px 3px 15px #797e8159;
  position: absolute;
  background: white;
  z-index: 1;
  width: 90%;
  max-height: 14em;
  overflow-y: scroll;
}
.style-uncategorized div div div:hover {
  background-color: #ecf0f3;
  cursor: pointer;
}

.desc-head {
  font-weight: 700;
}

.desc {
  color: #9b9a9c;
  /* opacity: 0.7; */
}

.vendor {
  color: #136acd;
  font-weight: 700;
  font-size: 0.8em;
}

.dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  align-self: center;
  background: #686868;
  margin-top: 5px;
}

.split {
  /* border: 2px solid #bebebe; */
  border-radius: 30px;
  font-size: 0.8em;
  font-weight: 700;
  padding: 4px;
  box-shadow: 0px 2px 6px 2px #2c28281c;
  cursor: pointer;
}

.line {
  position: relative;
  top: 5px;
  color: #686868;
}

.modified {
  font-size: 0.9em;
}

.label-text {
  font-size: 0.8em;
  font-weight: 700;
  margin-bottom: 5px;
}

.error-div {
  background: #fff8f8;
  border-color: #ffe9e9;
  padding: 10px 5px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid transparent;
  border-left: 5px solid #b52626;
}

.error-message {
  margin-bottom: 0;
  font-size: 0.9em;
}

.adjust-left {
  margin-left: 78px;
}
</style>