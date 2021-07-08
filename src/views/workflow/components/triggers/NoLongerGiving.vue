<template>
    <div class="container max-height px-0 scroll-div">
        <div class="row text-center dotted-border-bottom">
            <div class="col-md-12 my-3">
                <TriggerDescription :header="'Giving - No longer giving'" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">Match an individual who is a member of</label>
            </div>
            <div class="col-md-12 mb-2">
                <Dropdown :options="[ 'Workers', 'Choir', 'New comers' ]" class="w-100" />
            </div>
        </div>





        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">And who gave at least</label>
            </div>
            <div class="col-md-12 mb-2">
                <div class="row">
                    <div class="col-3 pr-0">
                        <input type="text" class="form-control" placeholder="#">
                    </div>
                    <div class="col-8 border pl-0 text-center d-flex align-items-center justify-content-center bg-secondary">
                        <span>Times per month</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">For</label>
            </div>
            <div class="col-md-12 mb-2">
                <div class="row">
                    <div class="col-3 pr-0">
                        <input type="text" class="form-control" placeholder="#">
                    </div>
                    <div class="col-8 border pl-0 text-center d-flex align-items-center justify-content-center bg-secondary">
                        <span>Months</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">To</label>
            </div>
            <div class="col-md-12 mb-2">
                <Dropdown :options="[ 'Any category...', 'General', 'Building' ]" class="w-100" />
            </div>
        </div>

        <div class="row mt-4 mb-3">
            <div class="col-md-12">
                <label for="" class="font-weight-600">And who has not given for the last</label>
            </div>
            <div class="col-md-12 mb-2">
                <div class="row">
                    <div class="col-3 pr-0">
                        <input type="text" class="form-control" placeholder="#">
                    </div>
                    <div class="col-8 border pl-0 text-center d-flex align-items-center justify-content-center bg-secondary">
                        <span>Months</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Dropdown from "primevue/dropdown"
import TriggerDescription from "../TriggerDescription.vue"
export default {
    components: { Dropdown, TriggerDescription },

    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    .dotted-border-bottom {
        border-bottom: dotted 2px #ddd;
    }

    .max-height {
        max-height: calc(100vh - 300px);
    }
</style>