<template>
    <!-- <div>Chart of Accounts</div> -->
    <div class="whole-con">
        <div  class="main-con">
            <div class="main-body">
                <div class="container-wide container-top">
        <div class="row">
            <div class="col-12 col-md-6 p-0 text-center text-md-left">
                <div>
                    <span class="chart-head">Charts of Accounts</span>
                    <span class="help"><i class="fa fa-question-circle-o" aria-hidden="true"></i></span>
                </div>
            </div>
            <div class="col-12 col-md-6 text-center text-md-right mt-3 mt-md-0 p-0">
                <!-- <span><i class="fa fa-gift" aria-hidden="true"></i></span>
                <span class="what-new ml-2">What's new</span> -->
                <span class="primary-bg default-btn border-0 text-white ml-3">Add a New Account of Fund</span>
            </div>
        </div>
        <div class="row mt-4 row-border">
            <div class="col-sm-3 col-md-2 py-2 pointer" :class="{ 'active': tab == 'assets' }" @click="assets">Assets <span class="count">7</span></div>
            <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 p-2 pointer" :class="{ 'active': tab == 'liabilities' }" @click="liabilities">Liabilities and Credit Cards <span class="count">2</span></div>
            <div class="col-sm-3 col-md-2 p-2 pointer" :class="{ 'active': tab == 'income' }" @click="income">Income <span class="count">6</span></div>
            <div class="col-sm-6 col-md-2 p-2 pointer" :class="{ 'active': tab == 'expenses' }" @click="expenses">Expenses <span class="count">3</span></div>
            <div class="col-sm-6 col-md-2 p-2 pointer" :class="{ 'active': tab == 'equity' }" @click="equity">Fund [Equity] <span class="count">5</span></div>
        </div>
        <div class="row">
            <div class="col-12">
                <div v-if="tab == 'assets'">
                    <Assets :assets="chartOfAccounts.find(i => i.key === 0) ? chartOfAccounts.find(i => i.key === 0).accounts : ''"/>
                </div>
                <div v-else-if="tab == 'liabilities'">
                    <div>
                        <Liabilities />
                    </div>
                </div>
                <div v-else-if="tab == 'income'">
                    <div>
                        <Income />
                    </div>
                </div>
                <div v-else-if="tab == 'expenses'">
                    <div>
                        <Expenses />
                    </div>
                </div>
                <div v-else>
                    <div>
                        <Equity />
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
import { ref } from 'vue'
import axios from "@/gateway/backendapi";
import Assets from '@/views/accounting/chartOfAccount/Assets'
import Liabilities from '@/views/accounting/chartOfAccount/Liabilities'
import Income from '@/views/accounting/chartOfAccount/Income'
import Expenses from '@/views/accounting/chartOfAccount/Expenses'
import Equity from '@/views/accounting/chartOfAccount/Equity'
import chartsOfAccountService from "../../../services/financials/chart_of_accounts"

export default {
    components: { Assets, Liabilities, Income, Expenses, Equity },
    setup () {
        const tab = ref('assets')

        const assets = () => {
            tab.value = 'assets'
        }
        const liabilities = () => {
            tab.value = 'liabilities'
        }
        const income = () => {
            tab.value = 'income'
        }
        const expenses = () => {
            tab.value = 'expenses'
        }
        const equity = () => {
            tab.value = 'equity'
        }

        const chartOfAccounts = ref([])

        const getCharts = async () => {
            try {
                const response = await chartsOfAccountService.getAssetsAccounts();
                console.log(response, "CHARTS");
            } catch (error) {
                console.log(error);
            }
        }
        getCharts();

        const getChartOfAccounts = () => {
            axios.get('/api/financials/getchartofaccounts')
                .then(res => {
                    /*eslint no-undef: "warn"*/
                    NProgress.done();
                    chartOfAccounts.value = res.data
                    console.log(res)
                })
                .catch(err => {
                    NProgress.done();
                    console.log(err)
                })
        }
        getChartOfAccounts()
        return{
            tab, assets, liabilities, income, expenses, equity, chartOfAccounts
        }
    }
}
    
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
        color: #0F0220;
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