<template>
    <div class="row">
        <div class="col-12 py-2 mt-4 account-head">Cash and Bank<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2">1202</div>
        <div class="col-6 col-md-3">
            <div class="desc-head">asset bank (USD)</div>
            <div class="desc">No transaction for this account</div>
        </div>
        <div class="col-6 col-md-5">Test Account</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row row-border align-items-center">
        <div class="col-6 col-md-2"></div>
        <div class="col-6 col-md-3">
            <div>Cash on Hand</div>
            <div>Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-6 col-md-5">Cash you haven't deposited in the bank. Add your bank and credit card accounts to accurately categorixe transactions that aren't cash</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>
    

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Money in Transit<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2">Jewwewe</div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Test3</div>
            <div class="desc">Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-6 col-md-5">wewe</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Expected Payments from Customers<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2"></div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Account Receivable</div>
            <div class="desc">Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-6 col-md-5"></div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Inventory<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-10 offset-md-2 text-center text-md-left"> You have not added any inventory yet.</div>
    </div>
    <div v-if="false" class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2"></div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Account Receivable</div>
            <div class="desc">Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-6 col-md-5"></div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i> &nbsp; &nbsp;Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Property, Plant, Equipment<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-10 offset-md-2 text-center text-md-left"> You have not added any inventory yet.</div>
    </div>
    <div v-if="false" class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2 pl-0"></div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Account Receivable</div>
            <div class="desc">Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-6 col-md-5"></div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Depreciation and Amortization<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2">12345</div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Depreciation</div>
            <div class="desc">No transaction for this account</div>
        </div>
        <div class="col-6 col-md-5">Asset Description</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2">2002</div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Test4</div>
            <div class="desc">No transaction for this account</div>
        </div>
        <div class="col-6 col-md-5">21212</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Vendor Payments and Vendor Credits<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
     <div class="row row-border align-items-center py-2">
         <div class="col-10 offset-md-2 text-center text-md-left">You haven't added any Vendor Payments and Vendor Credits accounts yet.</div>
     </div> 
    <div v-if="false" class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2">12345</div>
        <div class="col-6 col-sm-3">
            <div class="desc-head">Depreciation</div>
            <div class="desc">No transaction for this account</div>
        </div>
        <div class="col-6 col-md-5">Asset Description</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>One Short-Term Asset<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-10 offset-md-2 text-center text-md-left">You haven't added any Vendor Payments and Vendor Credits accounts yet.</div>
    </div>
    <div v-if="false" class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2"></div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Taxes Recoverable/Refundable</div>
            <div class="desc">No transaction for this account</div>
        </div>
        <div class="col-6 col-md-5">A tax is recoverable if ypu can deduct the tax you've paidfrom the tax you've collected. Many sales taxes are considered recoverable</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>


    <div class="row">
        <div class="col-12 py-2 account-head">
            <div>Other Long-Term Asset<i class="fa fa-question-circle-o help" aria-hidden="true"></i></div>
        </div>
    </div>
    <div class="row row-border align-items-center py-2">
        <div class="col-10 offset-md-2 text-center text-md-left">You haven't added any Vendor Payments and Vendor Credits accounts yet.</div>
    </div>
    <div v-if="false" class="row row-border align-items-center py-2">
        <div class="col-6 col-md-2"></div>
        <div class="col-6 col-md-3">
            <div class="desc-head">Taxes Recoverable/Refundable</div>
            <div class="desc">No transaction for this account</div>
        </div>
        <div class="col-6 col-md-5">A tax is recoverable if ypu can deduct the tax you've paidfrom the tax you've collected. Many sales taxes are considered recoverable</div>
        <div class="col-6 col-md-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-md-2 text-center text-md-left">
            <div class="add-account py-2"><i class="fa fa-plus-circle"></i>&nbsp; &nbsp; Add a new Account</div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup () {
        const view = ref('view')
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