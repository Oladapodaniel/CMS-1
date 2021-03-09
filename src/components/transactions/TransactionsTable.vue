<template>
  <div class="container-top" @click="hideModals">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 px-0">
          <div class="parent-table">
            <div class="table" style="height: fit-content">
              <div class="top-con">
                <div class="table-top my-4 px-4">
                  <div class="select-all">
                    <input
                      type="checkbox"
                      name="all"
                      id="all"
                      @click="toggleSelect"
                    />
                    <label>SELECT ALL</label>
                  </div>
                  <div class="filter">
                    <p @click="toggleFilterFormVissibility">
                      <i class="fas fa-filter"></i>
                      FILTER
                    </p>
                  </div>
                  <p @click="toggleSearch" class="search-text">
                    <i class="fa fa-search"></i> SEARCH
                  </p>
                  <div class="search d-flex">
                    <label
                      class="label-search d-flex"
                      :class="{ 'show-search': searchIsVisible }"
                    >
                      <input type="text" placeholder="Search..." />
                      <span class="empty-btn">x</span>
                      <span class="search-btn">
                        <i class="fa fa-search"></i>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="filter-options"
                :class="{ 'filter-options-shown': filterFormIsVissible }"
              >
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-9">
                      <div class="row">
                        <div
                          class="col-12 col-sm-6 offset-sm-3 offset-md-0 form-group inp w-100"
                        >
                          <!-- <div class="input-field"> -->

                          <input
                            type="text"
                            class="input w-100"
                            placeholder="First Name"
                          />
                          <!-- </div> -->
                        </div>

                        <div
                          class="col-12 col-sm-6 form-group d-none d-md-block"
                        >
                          <input
                            type="date"
                            class="form-control input inp w-100"
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div
                          class="col-12 col-sm-6 form-group d-none d-md-block"
                        >
                          <input
                            type="text"
                            class="input w-100"
                            placeholder="Last Name"
                          />
                        </div>

                        <div
                          class="col-12 col-sm-6 form-group d-none d-md-block"
                        >
                          <input
                            type="text"
                            class="input w-100"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 d-flex flex-column align-items-center">
                      <button class="apply-btn text-white" @click="applyFilter">
                        Apply
                      </button>
                      <span class="mt-2">
                        <a class="clear-link mr-2" @click="clearAll"
                          >Clear all</a
                        >
                        <span class="mx-2"
                          ><i
                            class="fas fa-circle"
                            style="font-size: 4px"
                          ></i></span
                        ><a class="hide-link ml-2" @click="hide">Hide</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 parent-desc first p-2 pl-4">
                <div><input type="checkbox" class="form-check" /></div>
                <div>DATE</div>
                <div>DESCRIPTION</div>
                <div>AMOUNT</div>
                <div>CATEGORY</div>
                <div>MARK</div>
              </div>
              <div
                class="col-12 parent-desc p-2 pl-4 c-pointer tr-border-bottom"
                v-for="(item, index) in selectedTransactions"
                :key="index"
                @click="rowSelected(item)"
              >
                <div>
                  <input
                    type="checkbox"
                    v-model="item.check"
                    class="form-check"
                  />
                </div>
                <div class="desc">{{ formatDate(item.date ) }}</div>
                <div>
                  <div class="desc-head">Write a description</div>
                  <div class="desc">{{ item.narration }}</div>
                </div>
                <div class="desc-head">{{ item.amount }}</div>
                <div class="choose-cat"><span class="primary-text c-pointer">Choose a category</span></div>
                <div>Marked</div>
              </div>
            </div>
            <!-- :class="{ 'slide-form' : showEditTransaction, 'hide-form' : !showEditTransaction }" -->
            <div class="table edit-transac" v-if="showEditTransaction">
              <TransactionForm
                @close-it="closeIt"
                @transac-obj="transacObj"
                :transactionDetails="transactionDetails"
                :showEditTransaction="showEditTransaction"
              />
                <!-- :transacProp="transacPropsValue" -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
import axios from "@/gateway/backendapi";
import TransactionForm from "../../views/accounting/transaction/EditTransaction";
import transaction_service from '../../services/financials/transaction_service';
import dateFormatter from '../../services/dates/dateformatter';
// import transactionService from "../../services/financials/transaction_service";

export default {
    props: [ "showEditTransaction", "transactionDetails", "selectedTransactionType" ],
  components: {
    TransactionForm,
  },
  setup(props, { emit }) {
    const transactions = ref([ ]);
    const types = ["assets", "liability", "income", "expense", "equity"];
    const cashAndBank = ref([
      {
        name: {
          type: "akin",
          amount: "N2.00",
        },
      },
      {
        name: {
          type: "dapo",
          amount: "N5.00",
        },
      },
      {
        name: {
          type: "emma",
          amount: "N3.00",
        },
      },
    ]);
    const creditCard = ref([
      { name: { type: "tobi", amount: "N2.10" } },
      { name: { type: "afe", amount: "N5.21" } },
      { name: { type: "tosin", amount: "3.42" } },
    ]);
    const accountType = ref(["Cash and Bank", "Money in Transit"]);
    const liabilities = ref(["Credit Card", "Loan and Line of Credit"]);

    const filterFormIsVissible = ref(false);
    const searchIsVisible = ref(false);
    const accountDisplay = ref(false);
    const selectedTransaction = ref({
      type: "All acounts",
      amount: "N0.00",
    });
    const displayModal = ref(false);
    const showAccount = ref(false);
    const currencyList = ref([]);
    const showCurrency = ref(false);
    const selectAccount = ref("");
    const currencyText = ref("");
    const accountText = ref("");
    // const transacPropsValue = ref({});

    const toggleFilterFormVissibility = () =>
      (filterFormIsVissible.value = !filterFormIsVissible.value);

    const toggleSearch = () => {
      searchIsVisible.value = !searchIsVisible.value;
    };

    const toggleAccount = () => {
      accountDisplay.value = !accountDisplay.value;
    };

    const hideModals = (e) => {
      if (!e.target.classList.contains("close-modal")) {
        accountDisplay.value = false;
        showAccount.value = false;
        showCurrency.value = false;
        // selectAccount.value.classList.remove("style-account")
      }
    };

    const transactionItem = (e) => {
      // selectedTransaction.value = e.target.innerHTML

      console.log(
        e.target.children[0].innerHTML,
        e.target.children[0].nextElementSibling.innerHTML
      );
      selectedTransaction.value = {
        type: e.target.children[0].innerHTML,
        amount: e.target.children[0].nextElementSibling.innerHTML,
      };
      accountDisplay.value = false;
    };

    const openModal = () => {
      displayModal.value = true;
    };

    const closeModal = () => {
      displayModal.value = false;
    };

    const getCurrenciesFromCountries = () => {
      let url = "/api/getallcountries";
      axios
        .get(url)
        .then((res) => {
          currencyList.value = res.data.map((i) => {
            //   return `${i.currency} ${i.name}`
            return {
              name: i.currency,
              id: i.id,
              country: i.name,
            };
          });
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };
    getCurrenciesFromCountries();

    const filterCurrency = computed(() => {
      if (currencyText.value !== "" && currencyList.value.length > 0) {
        return currencyList.value.filter((i) => {
          if (i.name)
            return (
              i.name.toLowerCase().includes(currencyText.value.toLowerCase()) ||
              i.country.toLowerCase().includes(currencyText.value.toLowerCase())
            );
        });
        // console.log(currencyText)
      } else {
        return currencyList.value;
      }
    });

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
        // console.log(currencyText)
      } else {
        return liabilities.value;
      }
    });

    

    // const showEditTransaction = ref(false);
    const closeIt = (payload) => {
        emit("toggle-edit-form", payload)
    //   showEditTransaction.value = payload;
    };

    const transacObj = (payload) => {
      transactions.value.push(payload);
    };

    const allTransactions = ref([]);
    const getTransactions = async () => {
      try {
        const response = await transaction_service.getTransactions();
        console.log(response, "test point");
        allTransactions.value = response;
      } catch (error) {
        console.log(error);
      }
    }
    getTransactions();

    const selectedTransactions = computed(() => {
        if (props.selectedTransactionType < 0) return allTransactions.value;
        if (!allTransactions.value || allTransactions.value.length === 0) return [ ];
        return allTransactions.value.filter(i => i.accountType.toLowerCase() === types[props.selectedTransactionType])
    })

    const formatDate = (date) => {
        return dateFormatter.monthDayYear(date);
    }

    const rowSelected = (item) => {
      console.log(item, "selected row")
      const data = {
        amount: item.amount,
        date: item.date,
        memo: item.narration
      }
      emit("select-row", data);
    }

    watch(() => props.transactionDetails, (data) => {
      console.log(data, "in watch");
    })

    return {
      transactions,
      filterFormIsVissible,
      toggleFilterFormVissibility,
      toggleSearch,
      searchIsVisible,
      cashAndBank,
      creditCard,
      accountDisplay,
      toggleAccount,
      hideModals,
      selectedTransaction,
      transactionItem,
      displayModal,
      openModal,
      closeModal,
      showAccount,
      accountType,
      liabilities,
      getCurrenciesFromCountries,
      currencyList,
      showCurrency,
      selectAccount,
      filterCurrency,
      currencyText,
      accountText,
      filterAccount,
      filterLiabilities,
    //   showEditTransaction,
      closeIt,
      transacObj,
      selectedTransactions,
      formatDate,
      rowSelected,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.events {
  font: normal normal 800 29px Nunito sans;
}
.whole-con {
  display: flex;
  /* background: #f1f5f8; */
  /* height: 100vh; */
}

.main-con {
  width: 100%;
  height: 70%;
}

.main-body {
  height: 100%;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 8px 10px;
  border: none;
  border-radius: 22px;
  width: 180px;
  font-size: 16px;
  font-weight: 600;
  margin: 0 8px;
  outline: none;
  text-decoration: none;
  box-sizing: border-box;
}

.button:hover {
  cursor: pointer;
}

.more-btn {
  background: #dde2e6;
}

.more-btn:first-child,
.more-btn:nth-child(2) {
  margin-right: 20px;
}

.btn-icon {
  padding: 0 8px;
}

.hr {
  border: 0.8px solid #0020440a;
  margin: 0 4px;
}

.table-top {
  font-weight: 800;
  font-size: 12px;
}

.table-top label:hover,
.table-top p:hover {
  cursor: pointer;
}

.select-all input {
  margin: 0 8px 0 -5px !important;
}

.label-search {
  width: 0;
  background: transparent;
  padding: 4px;
  overflow: hidden;
  transition: all 0.5 ease-in-out;
}
.label-search input {
  border: transparent;
  background: transparent;
  width: 70%;
  outline: none;
}

.label-search .search-btn {
  display: flex;
  align-items: center;
  background: #7894a6;
  padding: 4px;
  border-radius: 5px;
}

.label-search .empty-btn {
  display: flex;
  align-items: center;
  padding: 0 5px;
}

.show-search {
  width: 174px;
  overflow: hidden;
  transition: all 0.5 ease-in-out;
  border: 1px solid #dde2e6;
  border-radius: 5px 0px 0px 5px;
  background: #ebeff4;
  transition: all 0.5s ease-in-out;
}

.filter-options {
  height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.filter-options-shown {
  height: 120px !important;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

@media screen and (max-width: 768px) {
  .filter-options-shown {
    height: 150px !important;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }
}

.parent-desc {
  display: grid;
  grid-template-columns: 0.5fr 2fr 3fr 1fr 2fr 1fr;
  align-items: center;
}

.desc-head {
  font-weight: 700;
}

.desc {
  color: #9b9a9c;
  /* opacity: 0.7; */
}

.parent-desc.first {
  color: #8898aa;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0px 3px 6px #2c28281c;
  background: #dde2e6 0% 0% no-repeat padding-box;
}

.manual-dd-item {
  color: #495057;
}

.manual-dd-item:hover {
  background: #ecf0f3;
  cursor: pointer;
}

.style-category {
  box-shadow: 0px 3px 15px #797e8159;
  position: absolute;
  background: white;
  z-index: 1;
  width: 130%;
  max-height: 20em;
  overflow-y: scroll;
  overflow-x: hidden;
}

/* .create-event {
    border: 1px solid #ced4da;
    padding: 10px
} */

.create-event a {
  color: #136acd !important;
  text-decoration: none;
}

.create-new-event {
  text-align: center;
  font: normal normal bold 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #136acd;
  padding: 15px;
}

.create-event a:hover {
  cursor: pointer;
}

.header-border {
  border-bottom: 1px solid #ebebeb;
}

.create-event {
  /* border: 2px solid red; */
  border-top: 1px solid #d4d4d4;
}

.create-event a:first-child {
  border-right: 1px solid #d4d4d4;
}

.transaction-button {
  font-size: 1.3em;
  display: flex;
  justify-content: space-around;
}

.arrow-icon {
  position: relative;
  right: 25px;
  top: 10px;
  /* margin-top: -31px; */
  font-size: 21px;
}

.select-elem-con {
  padding: 5px 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  justify-content: space-between;
}

.style-account {
  box-shadow: 0px 3px 15px #797e8159;
  position: absolute;
  background: white;
  z-index: 1;
  width: 92%;
  max-height: 14em;
  overflow-y: scroll;
}
.style-account div div:hover {
  /* background-color: #ecf0f3; */
  cursor: pointer;
}

.table.edit-transac {
  background: #dde2e6bb;
  margin-left: 15px;
  width: 50%;
  height: fit-content;
  /* max-height: 518px;
        overflow-y: auto */
}

.slide-form {
  width: 50%;
  transition: all 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  overflow: auto;
  transform: translateX(0);
  opacity: 1;
}

.hide-form {
  width: 50%;
  /*overflow: hidden;  */
  position: absolute;
  /* transition: all 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95); */
  transform: translateX(-100%);
  opacity: 0;
}

.parent-table {
  display: flex;
}

@media (max-width: 1100px) {
  .parent-table {
    flex-direction: column;
  }
}

@media (max-width: 840px) {
  .top {
    flex-direction: column;
  }

  .actions {
    margin-top: 10px;
  }
}

@media (max-width: 600px) {
  .actions {
    display: flex;
    /* flex-direction: column */
  }
}

/* @media (max-width: 750px) {
    .table {
      max-width: 617px;
      overflow-y: auto
    }
  } */
</style>