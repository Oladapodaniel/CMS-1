<template>
    <!-- <div>Chart of Accounts</div> -->
    <div class="container-wide container-top">
        <div class="row">
            <div class="col-sm-6 p-0">
                <div>
                    <span class="chart-head">Charts of Accounts</span>
                    <span class="help"><i class="fa fa-question" aria-hidden="true"></i></span>
                </div>
            </div>
            <div class="col-sm-6 text-right p-0">
                <span><i class="fa fa-gift" aria-hidden="true"></i></span>
                <span class="what-new">What's new</span>
                <span class="primary-bg default-btn border-0 text-white ml-3">Add a New Account</span>
            </div>
        </div>
        <div class="row mt-4 row-border">
            <div class="col-sm-2 pt-2 pb-2 pl-0" :class="{ 'active': tab == 'assets' }" @click="assets">Assets <span class="count">7</span></div>
            <div class="col-sm-3 p-2" :class="{ 'active': tab == 'liabilities' }" @click="liabilities">Liabilities and Credit Cards <span class="count">2</span></div>
            <div class="col-sm-2 p-2" :class="{ 'active': tab == 'income' }" @click="income">income <span class="count">6</span></div>
            <div class="col-sm-2 p-2" :class="{ 'active': tab == 'expenses' }" @click="expenses">Expenses <span class="count">3</span></div>
            <div class="col-sm-2 p-2" :class="{ 'active': tab == 'equity' }" @click="equity">Equity <span class="count">5</span></div>
        </div>
        <div class="row">
            <div class="col-12">
                <div v-if="tab == 'assets'">
                    <Assets />
                </div>
                <div v-else-if="tab == 'liabilities'">
                    <div>liabiliies</div>
                </div>
                <div v-else-if="tab == 'income'">
                    <div>income</div>
                </div>
                <div v-else-if="tab == 'expenses'">
                    <div>expenses</div>
                </div>
                <div v-else>
                    <div>equity</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import Assets from '@/views/accounting/chartOfAccount/Assets'
export default {
    components: { Assets },
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
        return{
            tab, assets, liabilities, income, expenses, equity
        }
    }
}
    
</script>


<style scoped>
    .chart-head {
        font: normal normal 800 28px Nunito sans;
    }

    .what-new {
        font-weight: 800;
    }

    .help {
        color: rgb(100, 100, 100);
        margin: 5px;
        font-size: 12px;
    }

    .active {
        font-weight: 800;
        border-bottom: 5px solid #007bff;
    }

    .count {
        background: rgba(19, 106, 205, 0.3);
        padding: 2px 6px;
        border-radius: 22px;
        }

    .row-border {
        border-bottom: 1px solid rgb(225, 225, 225);
    }
</style>