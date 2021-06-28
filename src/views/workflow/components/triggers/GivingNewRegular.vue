<template>
    <div class="container max-height px-0">
        <div class="row text-center dotted-border-bottom">
            <div class="col-md-12 my-3">
                <TriggerDescription :description="description" :header="'Giving - New regular giver'" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">Match an individual who is a member of</label>
            </div>
            <div class="col-md-12 mb-2">
                <MultiSelect @change="groupSelected" v-model="selectedGroups" :options="[ 'Workers', 'Choir', 'New comers' ]"  placeholder="Select groups" class="w-100"  display="chip" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">And who gave less than</label>
            </div>
            <div class="col-md-12 mb-2">
                <div class="row">
                    <div class="col-3 pr-0">
                        <input type="text" class="form-control" placeholder="#" v-model="prevNumOfTimes" @change="handlePrevNumOfTimes">
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
                        <input type="text" class="form-control" placeholder="#" v-model="prevNumOfMonths" @change="handlePrevNumOfMonths">
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
                <Dropdown :options="[ 'Any category...', 'General', 'Building' ]" class="w-100" v-model="category" @change="cantegorySelected" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">And who has given at least</label>
            </div>
            <div class="col-md-12 mb-2">
                <div class="row">
                    <div class="col-3 pr-0">
                        <input type="text" class="form-control" placeholder="#" v-model="currentNumOfTimes" @change="handleCurrentNumOfTimes">
                    </div>
                    <div class="col-8 border pl-0 text-center d-flex align-items-center justify-content-center bg-secondary">
                        <span>Times per month</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">For the last</label>
            </div>
            <div class="col-md-12 mb-2">
                <div class="row">
                    <div class="col-3 pr-0">
                        <input type="text" v-model="currentNumOfMonths" @change="handleCurrentNumOfMonths" class="form-control" placeholder="#">
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
import MultiSelect from "primevue/multiselect"
import TriggerDescription from "../TriggerDescription.vue"
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
export default {
    components: { Dropdown, TriggerDescription, MultiSelect },

    setup () {

        const selectedGroups = ref('');
        const groupSelected = (e) => {
            console.log(e.value);
        }

        const prevNumOfTimes = ref('');
        const handlePrevNumOfTimes = (e) => {
            console.log(e.value);
        }

        const prevNumOfMonths = ref('');
        const handlePrevNumOfMonths = (e) => {
            console.log(e.value);
        }

        const category = ref('');
        const cantegorySelected = (e) => {
            console.log(e.value);
        }

        const currentNumOfTimes = ref('');
        const handleCurrentNumOfTimes = (e) => {
            console.log(e.value);
        }

        const currentNumOfMonths = ref('');
        const handleCurrentNumOfMonths = (e) => {
            console.log(e.value);
        }

        const description = computed(() => {
            return {
                groups: selectedGroups.value ? [ selectedGroups.value ] : ['_____'],
                prevTimes: prevNumOfTimes.value ? prevNumOfTimes.value + ' times' : '__ times',
                prevMonths: prevNumOfMonths.value ? prevNumOfMonths.value + ' months' : '__ months',
                category: category.value.includes('Any category') ? 'any' : category.value ? category.value : '__',
                currentTimes: currentNumOfTimes.value ? currentNumOfTimes.value + ' times' : '__ times',
                currentMonths: currentNumOfMonths.value ? currentNumOfMonths.value + ' months' : '__ months',
                id: 11,
             };            
        })

        return {
            selectedGroups,
            groupSelected,
            handlePrevNumOfTimes,
            prevNumOfTimes,
            handlePrevNumOfMonths,
            prevNumOfMonths,
            cantegorySelected,
            category,
            handleCurrentNumOfTimes,
            currentNumOfTimes,
            currentNumOfMonths,
            handleCurrentNumOfMonths,
            description,
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