<template>
  <!-- <div>Chart of Accounts</div> -->
  <div class="whole-con">
    <div class="main-con">
      <div class="main-body">
        <div class="container-wide container-top">
          <Toast />
          <div class="row">
            <div class="col-12 col-md-6 p-0 text-center text-md-left">
              <div>
                <span class="chart-head">Charts of Accounts</span>
                <span class="help"
                  ><i class="pi pi-question-circle" aria-hidden="true"></i
                ></span>
              </div>
            </div>
            <div
              class="col-12 col-md-6 text-center text-md-right mt-3 mt-md-0 p-0"
            >
              <!-- <span><i class="pi pi-gift" aria-hidden="true"></i></span>
                <span class="what-new ml-2">What's new</span> -->
              <span
                class="primary-bg default-btn border-0 text-white ml-3 c-pointer"
                data-toggle="modal"
                data-target="#accountModal"
                >Add a New Account of Fund</span
              >
            </div>
          </div>
          <div class="row mt-4 row-border">
            <div
              class="col-sm-3 col-md-2 py-2 pointer"
              :class="{ active: tab == 'assets' }"
              @click="selectTab('assets')"
            >
              Assets <span class="count">{{ totalAssets }}</span>
            </div>
            <div
              class="col-sm-6 col-md-5 col-lg-4 col-xl-3 p-2 pointer"
              :class="{ active: tab == 'liabilities' }"
              @click="selectTab('liabilities')"
            >
              Liabilities & Credit Cards
              <span class="count">{{ totalLiabilities }}</span>
            </div>
            <div
              class="col-sm-3 col-md-2 p-2 pointer"
              :class="{ active: tab == 'income' }"
              @click="selectTab('income')"
            >
              Income <span class="count">{{ totalIncome }}</span>
            </div>
            <div
              class="col-sm-6 col-md-2 p-2 pointer"
              :class="{ active: tab == 'expenses' }"
              @click="selectTab('expenses')"
            >
              Expenses <span class="count">{{ totalExpenses }}</span>
            </div>
            <div
              class="col-sm-6 col-md-2 p-2 pointer"
              :class="{ active: tab == 'equity' }"
              @click="selectTab('equity')"
            >
              Fund [Equity] <span class="count">{{ totalEquity }}</span>
            </div>
          </div>
          <div class="row" v-if="chartOfAccounts && chartOfAccounts.length > 0">
            <div class="col-12">
              <div v-if="tab === 'assets'">
                <Assets
                  :assets="
                    chartOfAccounts.find((i) => i.key === 0)
                      ? chartOfAccounts.find((i) => i.key === 0).accounts
                      : ''
                  "
                  :data="chartOfAccounts[0]"
                  @reload="getCharts"
                  @asset-deleted="assetDeleted"
                />
              </div>
              <div v-if="tab === 'liabilities'">
                <div>
                  <Liabilities
                    @liability-deleted="liabilityDeleted"
                    :data="chartOfAccounts[1]"
                    @reload="getCharts"
                  />
                </div>
              </div>
              <div v-if="tab == 'income'">
                <div>
                  <Income
                    @income-deleted="incomeDeleted"
                    :data="chartOfAccounts[3]"
                    @reload="getCharts"
                  />
                </div>
              </div>
              <div v-if="tab === 'expenses'">
                <div>
                  <Expenses
                    @expense-deleted="expenseDeleted"
                    :data="chartOfAccounts[4]"
                    @reload="getCharts"
                  />
                </div>
              </div>
              <div v-if="tab === 'equity'">
                <div>
                  <Equity
                    @equity-deleted="equityDeleted"
                    :data="chartOfAccounts[2]"
                    @save-fund="refreshCharts"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row my-5" v-if="gettingCharts">
            <div class="col-md-12 text-center">
              <i class="pi pi-spin pi-spinner" style="fontsize: 3rem"></i>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <Dialog
                header="Action Needed"
                v-model:visible="display"
                :style="{ width: '70vw', maxWidth: '600px' }"
                :modal="true"
              >
                <div class="row">
                  <div class="col-md-12">
                    <h6>You have accounts that needs to be updated, click on the link below to continue</h6>
                    <router-link class="text-decoration-none primary-text font-weight-bold" to="/tenant/chartofaccount/update">Update accounts</router-link>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>

          <div
            class="modal fade"
            id="accountModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="accountModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5
                    class="modal-title font-weight-bold"
                    id="exampleModalLabel"
                  >
                    Add an account
                  </h5>
                  <button
                    ref="closeAccountModalBtn"
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <CreateAccountModal
                    :transactionalAccounts="accounts"
                    :accountTypes="accountTypes"
                    :currencies="currencyList"
                    @save-account="closeAccountModal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import Assets from "@/views/accounting/chartOfAccount/Assets";
import Liabilities from "@/views/accounting/chartOfAccount/Liabilities";
import Income from "@/views/accounting/chartOfAccount/Income";
import Expenses from "@/views/accounting/chartOfAccount/Expenses";
import Equity from "@/views/accounting/chartOfAccount/Equity";
import chartsOfAccountService from "../../../services/financials/chart_of_accounts";
import CreateAccountModal from "./components/CreateAccountForm";
import transactionUtil from "./utilities/transactionals";
// import chart_of_accounts from '../../../services/financials/chart_of_accounts';

export default {
  components: {
    Assets,
    Liabilities,
    Income,
    Expenses,
    Equity,
    CreateAccountModal,
  },
  setup() {
    const tab = ref("assets");

    const assets = () => {
      tab.value = "assets";
    };
    const liabilities = () => {
      tab.value = "liabilities";
    };
    const income = () => {
      tab.value = "income";
    };
    const expenses = () => {
      tab.value = "expenses";
    };
    const equity = () => {
      tab.value = "equity";
    };

    const selectTab = (selectedTab) => {
      tab.value = selectedTab;
    };

    const display = ref(false);

    const accounts = ref([]);
    const getAccounts = async () => {
      try {
        accounts.value = await transactionUtil.getTransactionalAccounts();
        console.log(accounts.value, "accounts ss");
      } catch (error) {
        console.log(error);
      }
    };
    getAccounts();
    const currencies = ref([]);
    const getCurrencies = async () => {
      try {
        currencies.value = await transactionUtil.getCurrencies();
        console.log(currencies.value, "HUIUGFUYFUYufy");
      } catch (error) {
        console.log(error);
      }
    };
    getCurrencies();

    const chartOfAccounts = ref([]);
    const accountTypes = transactionUtil.accountTypes;

    const gettingCharts = ref(false);
    const getCharts = async () => {
      try {
        gettingCharts.value = true;
        const response = await chartsOfAccountService.getChartOfAccounts();
        gettingCharts.value = false;
        chartOfAccounts.value = response.accountwithHeads;
        console.log(response, "CHARTS");
        if (response.accountwithoutheads.length > 0) {
          display.value = true;
        }
      } catch (error) {
        gettingCharts.value = false;
        console.log(error);
      }
    };
    getCharts();

    const closeAccountModalBtn = ref(null);
    const closeAccountModal = (data) => {
      console.log(data, "emiited data");
      closeAccountModalBtn.value.click();
    };

    const refreshCharts = (data) => {
      if (data.success) {
        getCharts();
      }
    };

    const totalAssets = computed(() => {
      if (!chartOfAccounts.value || chartOfAccounts.value.length === 0)
        return 0;
      let sum = 0;
      for (let item of chartOfAccounts.value[0].accountHeadsDTO) {
        sum += item.accounts.length;
      }
      return sum;
    });

    const totalLiabilities = computed(() => {
      if (!chartOfAccounts.value || chartOfAccounts.value.length === 0)
        return 0;
      let sum = 0;
      for (let item of chartOfAccounts.value[1].accountHeadsDTO) {
        sum += item.accounts.length;
      }
      return sum;
    });

    const totalIncome = computed(() => {
      if (!chartOfAccounts.value || chartOfAccounts.value.length === 0)
        return 0;
      let sum = 0;
      for (let item of chartOfAccounts.value[3].accountHeadsDTO) {
        sum += item.accounts.length;
      }
      return sum;
    });

    const totalExpenses = computed(() => {
      if (!chartOfAccounts.value || chartOfAccounts.value.length === 0)
        return 0;
      let sum = 0;
      for (let item of chartOfAccounts.value[4].accountHeadsDTO) {
        sum += item.accounts.length;
      }
      return sum;
    });

    const totalEquity = computed(() => {
      if (!chartOfAccounts.value || chartOfAccounts.value.length === 0)
        return 0;
      let sum = 0;
      for (let item of chartOfAccounts.value[2].accountHeadsDTO) {
        sum += item.accounts.length;
      }
      return sum;
    });

    const assetDeleted = (index, indx) => {
      chartOfAccounts.value[0].accountHeadsDTO[index].accounts.splice(indx, 1);
    };

    const liabilityDeleted = (index, indx) => {
      chartOfAccounts.value[1].accountHeadsDTO[index].accounts.splice(indx, 1);
    };

    const incomeDeleted = (index, indx) => {
      chartOfAccounts.value[3].accountHeadsDTO[index].accounts.splice(indx, 1);
    };
    const expenseDeleted = (index, indx) => {
      chartOfAccounts.value[4].accountHeadsDTO[index].accounts.splice(indx, 1);
    };
    const equityDeleted = (index, indx) => {
      chartOfAccounts.value[2].accountHeadsDTO[index].accounts.splice(indx, 1);
    };

    return {
      tab,
      assets,
      liabilities,
      income,
      expenses,
      equity,
      chartOfAccounts,
      accounts,
      accountTypes,
      selectTab,
      closeAccountModal,
      closeAccountModalBtn,
      gettingCharts,
      getCharts,
      refreshCharts,
      totalAssets,
      totalLiabilities,
      totalIncome,
      totalExpenses,
      totalEquity,
      assetDeleted,
      liabilityDeleted,
      incomeDeleted,
      expenseDeleted,
      equityDeleted,
      display,
      //   accountCategories,
    };
  },
};
</script>


<style scoped>
.chart-head {
  font: normal normal 800 29px Nunito sans;
}

.what-new {
  font-weight: 800;
}

.help {
  color: rgb(100, 100, 100);
  margin: 5px;
}

.active {
  font-weight: 800;
  border-bottom: 5px solid #007bff;
}

.count {
  font: normal normal 800 16px/22px Nunito Sans;
  letter-spacing: 0px;
  color: #0f0220;
  opacity: 0.5;
  background: #136acd52 0% 0% no-repeat padding-box;
  padding: 2.5px 8px;
  border-radius: 50%;
}

.row-border {
  border-bottom: 1px solid rgb(225, 225, 225);
}

.pointer {
  cursor: pointer;
}

.main-con {
  width: 100%;
  height: 70%;
}

.main-body {
  height: 100%;
}

@media screen and (min-width: 1400px) {
  .main-con {
    width: 90%;
    margin: 0 auto;
  }
}

@media screen and (min-width: 990px) {
  .main-body {
    width: 95%;
    /* max-width: 1021px; */
    margin: 0 auto;
  }
}
</style>