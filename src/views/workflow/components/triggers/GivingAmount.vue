<template>
    <div class="container px-0 max-height">
        <div class="row text-center dotted-border-bottom">
            <div class="col-md-12 my-3">
                <TriggerDescription />
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
                <label for="" class="font-weight-600">And who gives</label>
            </div>
            <div class="col-md-12 mb-2">
                <Dropdown :options="[ 'Greater than', 'Less than' ]" class="w-100" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">$</label>
            </div>
            <div class="col-md-12 mb-2">
                <input type="text" class="form-control">
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

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">In</label>
            </div>
            <div class="col-md-12 mb-2">
                <Dropdown :options="[ 'A single gift', 'General', 'The last...' ]" class="w-100" />
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