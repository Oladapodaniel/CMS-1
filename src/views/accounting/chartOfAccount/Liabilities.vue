<template>
    <div class="row">
        <div class="col-12 py-2 mt-4 account-head">Cash and Bank<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-sm-2">1202</div>
        <div class="col-sm-3">
            <div class="desc-head">asset bank (USD)</div>
            <div class="desc">No transaction for this account</div>
        </div>
        <div class="col-sm-5">Test Account</div>
        <div class="col-sm-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row row-border align-items-center">
        <div class="col-sm-2 pl-0"></div>
        <div class="col-sm-3">
            <div>Cash on Hand</div>
            <div>Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-sm-5">Cash you haven't deposited in the bank. Add your bank and credit card accounts to accurately categorixe transactions that aren't cash</div>
        <div class="col-sm-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-sm-2">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const view = ref(true)
        return {
            view
        }
    }
}
</script>

<style scoped>
    .row-border {
        border-bottom: 1px solid rgb(225, 225, 225);
    }

    .account-head {
        background: #E0E7EB;
        font-weight: 800
    }

    .help {
        color: rgb(100, 100, 100);
        margin: 5px;
    }

    .desc {
        color: #190138;
        opacity: 0.6;
    }

    .desc-head {
        font-weight: 600;
    }

    .add-account {
        color: #136ACD;
        font-weight: 800
    }
</style>