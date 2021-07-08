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
                <MultiSelect v-model="selectedGroups" @change="handleSelectedGroups" :options="groups" optionLabel="name"  placeholder="Select groups" class="w-100"  display="chip" />
            </div>
        </div>





        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">And who gave at least</label>
            </div>
            <div class="col-md-12 mb-2">
                <div class="row">
                    <div class="col-3 pr-0">
                        <input type="text" class="form-control" v-model="givenAtLeastTimes" @input="handleGivenAtLeastTimes" placeholder="#">
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
                        <input type="text" class="form-control" v-model="givenForTheLastMonth" @input="handleGivenForTheLastMonth" placeholder="#">
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
                <Dropdown :options="contributionItems" v-model="financialContribution" optionLabel="name" @change="handleFinancialContribution" class="w-100" />
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
import { reactive, ref } from '@vue/reactivity'
import MultiSelect from "primevue/multiselect"
export default {
    components: { Dropdown, TriggerDescription, MultiSelect },
    props: [ "groups", "contributionItems", "selectedTriggerIndex" ],

    setup (props, { emit }) {
        const data = reactive({ })

        const selectedGroups = ref([ ]);
        const handleSelectedGroups = e => {
            const allGroupsIndex = selectedGroups.value.findIndex(i => i.id === "00000000-0000-0000-0000-000000000000");
            data.groups = allGroupsIndex < 0 ? e.value.map(i => i.id).join(',') : "00000000-0000-0000-0000-000000000000";
            emit('updatetrigger', JSON.stringify(data), props.selectedTriggerIndex)
        }

        const givenAtLeastTimes = ref([ ]);
        const handleGivenAtLeastTimes = e => {
            data.givenAtLeastTimes = e.target.value;
            emit('updatetrigger', JSON.stringify(data), props.selectedTriggerIndex)
        }

        const givenForTheLastMonth = ref([ ]);
        const handleGivenForTheLastMonth = e => {
            data.givenForTheLastMonth = e.target.value;
            emit('updatetrigger', JSON.stringify(data), props.selectedTriggerIndex)
        }

        const financialContribution = ref({ });
        const handleFinancialContribution = e => {
            data.financialContributionID = e.value.id;
            emit('updatetrigger', JSON.stringify(data), props.selectedTriggerIndex)
        }

        return {
            handleSelectedGroups,
            selectedGroups,
            givenAtLeastTimes,
            handleGivenAtLeastTimes,
            handleGivenForTheLastMonth,
            givenForTheLastMonth,
            financialContribution,
            handleFinancialContribution,
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