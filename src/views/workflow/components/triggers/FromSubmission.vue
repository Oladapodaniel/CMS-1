<template>
    <div class="container max-height px-0">
        <div class="row text-center dotted-border-bottom">
            <div class="col-md-12 my-3">
                <TriggerDescription :header="'Form Submission'" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600 mb-0">Match an individual who is</label>
            </div>
            <div class="col-md-12 mb-2 mt-3">
                <MultiSelect @change="handleStatus" v-model="selectedStatus" :options="[ 'Present', 'Excused', 'Unexcused' ]"  class="w-100"  display="chip" />
                <div class="row">
                    <div class="col-md-12 mt-3">
                        <input type="text" class="form-control" placeholder="Number of times" v-model="numOfTimes" @input="handleNumOfTimes">
                    </div>
                </div>
            </div>

            <div class="col-md-12 mt-4">
                <label for="" class="font-weight-600">Time(s) in the last</label>
            </div>
            <div class="col-md-12 mb-2">
                <Dropdown :options="[ '1 day', '1 week', '4 weeks' ]" class="w-100" v-model="timesInLastWeek" @change="handleTimesInLastWeek" />
            </div>

            <div class="col-md-12 mt-4">
                <label for="" class="font-weight-600">From/in in the following Groups</label>
            </div>
            <div class="col-md-12 mb-2">
                <MultiSelect @change="groupSelected" v-model="selectedGroups" :options="[ 'Workers', 'Choir', 'New comers' ]"  placeholder="Select groups" class="w-100"  display="chip" />
            </div>
        </div>
        
    </div>
</template>

<script>
import Dropdown from "primevue/dropdown"
import MultiSelect from "primevue/multiselect"
import TriggerDescription from "../TriggerDescription.vue"
import { computed } from '@vue/runtime-core'
export default {
    components: { Dropdown, TriggerDescription, MultiSelect },

    setup (props, { emit }) {

        return {

        }
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