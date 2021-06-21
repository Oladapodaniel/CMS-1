<template>
    <div class="container">
        <div class="row th py-2">
            <div class="col-md-2">
                <span class="py-2 font-weight-700">Picture</span>
            </div>
            <div class="col-md-6">
                <span class="py-2 font-weight-700">Name</span>
            </div>
            <div class="col-md-2">
                <span class="py-2 font-weight-700">Check in</span>
            </div>
            <div class="col-md-2">
                <span class="py-2 font-weight-700">Check out</span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 px-0">
                <CheckinRow />
            </div>
        </div>
    </div>
</template>

<script>
import CheckinRow from "./CheckinRow";

export default {
    components: { CheckinRow },
    
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    .th {
        background: #DDE2E6 0% 0% no-repeat padding-box;
    }
</style>