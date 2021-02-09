<template>
    <div class="row">
        <div class="col-12 pl-0">Cash and Bank</div>
    </div>
    <div class="row row-border">
        <div class="col-sm-2 pl-0">1202</div>
        <div class="col-sm-3">
            <div>asset bank (USD)</div>
            <div>No transaction for this account</div>
        </div>
        <div class="col-sm-5">Test Account</div>
        <div class="col-sm-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row row-border">
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
            <div>Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 pl-0">
            <div>Money in Transit</div>
        </div>
    </div>
    <div class="row row-border">
        <div class="col-sm-2 pl-0">Jewwewe</div>
        <div class="col-sm-3">
            <div>Test3</div>
            <div>Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-sm-5">wewe</div>
        <div class="col-sm-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-sm-2">
            <div>Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 pl-0">
            <div>Expected Payments from Customers</div>
        </div>
    </div>
    <div class="row row-border">
        <div class="col-sm-2 pl-0"></div>
        <div class="col-sm-3">
            <div>Account Receivable</div>
            <div>Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-sm-5"></div>
        <div class="col-sm-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-sm-2">
            <div>Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 pl-0">
            <div>Inventory</div>
        </div>
    </div>
    <div class="row row-border">
        <div class="col-10 offset-sm-2"> You have not added any inventory yet.</div>
    </div>
    <div v-if="false" class="row row-border">
        <div class="col-sm-2 pl-0"></div>
        <div class="col-sm-3">
            <div>Account Receivable</div>
            <div>Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-sm-5"></div>
        <div class="col-sm-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-sm-2">
            <div>Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 pl-0">
            <div>Property, Plant, Equipment</div>
        </div>
    </div>
    <div class="row row-border">
        <div class="col-10 offset-sm-2"> You have not added any inventory yet.</div>
    </div>
    <div v-if="false" class="row row-border">
        <div class="col-sm-2 pl-0"></div>
        <div class="col-sm-3">
            <div>Account Receivable</div>
            <div>Last Trasaction on Jan 21st, 2021</div>
        </div>
        <div class="col-sm-5"></div>
        <div class="col-sm-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-sm-2">
            <div>Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 pl-0">
            <div>Depreciation and Amortization</div>
        </div>
    </div>
    <div class="row row-border">
        <div class="col-sm-2 pl-0">12345</div>
        <div class="col-sm-3">
            <div>Depreciation</div>
            <div>No transaction for this account</div>
        </div>
        <div class="col-sm-5">Asset Description</div>
        <div class="col-sm-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row row-border">
        <div class="col-sm-2 pl-0">2002</div>
        <div class="col-sm-3">
            <div>Test4</div>
            <div>No transaction for this account</div>
        </div>
        <div class="col-sm-5">21212</div>
        <div class="col-sm-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-sm-2">
            <div>Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 pl-0">
            <div>Vendor Payments and Vendor Credits</div>
        </div>
    </div>
     <div class="row row-border">
         <div class="col-10 offset-sm-2">You haven't added any Vendor Payments and Vendor Credits accounts yet.</div>
     </div> 
    <div v-if="false" class="row row-border">
        <div class="col-sm-2 pl-0">12345</div>
        <div class="col-sm-3">
            <div>Depreciation</div>
            <div>No transaction for this account</div>
        </div>
        <div class="col-sm-5">Asset Description</div>
        <div class="col-sm-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-sm-2">
            <div>Add a new Account</div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 pl-0">
            <div>One Short-Term Asset</div>
        </div>
    </div>
    <div class="row row-border">
        <div class="col-10 offset-sm-2">You haven't added any Vendor Payments and Vendor Credits accounts yet.</div>
    </div>
    <div v-if="false" class="row row-border">
        <div class="col-sm-2 pl-0"></div>
        <div class="col-sm-3">
            <div>Taxes Recoverable/Refundable</div>
            <div>No transaction for this account</div>
        </div>
        <div class="col-sm-5">A tax is recoverable if ypu can deduct the tax you've paidfrom the tax you've collected. Many sales taxes are considered recoverable</div>
        <div class="col-sm-2 text-right"><i class="fa fa-pencil" aria-hidden="true"></i></div>
    </div>
    <div class="row">
        <div class="col-10 offset-sm-2">
            <div>Add a new Account</div>
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
</style>