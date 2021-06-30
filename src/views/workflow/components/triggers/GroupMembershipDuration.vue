<template>
    <div class="container max-height px-0 scroll-div">
        <div class="row text-center dotted-border-bottom">
            <div class="col-md-12 my-3">
                <TriggerDescription :header="'Group — Membership Duration'" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">Match an individual who has been in</label>
            </div>
            <div class="col-md-12 mb-2 mt-3">
                <Dropdown :options="[ 'Group 1', 'Group 2' ]" class="w-100" />
            </div>

            <div class="col-md-12 mt-4">
                <label for="" class="font-weight-600">For</label>
            </div>
            <div class="col-md-12 mb-2">
                <Dropdown :options="[ '1 day', '1 week', '4 weeks' ]" class="w-100" />
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