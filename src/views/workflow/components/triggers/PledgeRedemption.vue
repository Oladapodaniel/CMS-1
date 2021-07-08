<template>
    <div class="container max-height px-0 scroll-div">
        <div class="row text-center dotted-border-bottom">
            <div class="col-md-12 my-3">
                <TriggerDescription :header="'Pledge - Redemption'" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">Match an individual who is a member of</label>
            </div>
            <div class="col-md-12 mb-2">
                <MultiSelect v-model="selectedGroups" optionLabel="name" @change="handleSelectedGroups" :options="groups"  placeholder="Select groups" class="w-100"  display="chip" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">With pledges that are</label>
            </div>
            <div class="col-md-12 mb-2">
                <Dropdown v-model="logicalOperator" @change="handleLogicalOperator" :options="[ 'Greater than', 'Less than' ]" class="w-100" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">amount</label>
            </div>
            <div class="col-md-12 mb-2">
                <input type="text" class="form-control" v-model="amount" @input="handleAmount">
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
    props: [ "groups", "selectedTriggerIndex"],
    setup (props, { emit}) {
        const data = reactive({ });

        const selectedGroups = ref([ ]);
        const handleSelectedGroups = e => {
            const allGroupsIndex = selectedGroups.value.findIndex(i => i.id === "00000000-0000-0000-0000-000000000000");
            data.groups = allGroupsIndex < 0 ? e.value.map(i => i.id).join(',') : "00000000-0000-0000-0000-000000000000";
            emit('updatetrigger', JSON.stringify(data), props.selectedTriggerIndex)
        }

        const logicalOperator = ref([ ]);
        const handleLogicalOperator = e => {
            data.logicalOperator = e.value;
            emit('updatetrigger', JSON.stringify(data), props.selectedTriggerIndex)
        }

        const amount = ref([ ]);
        const handleAmount = e => {
            data.amount = e.target.value;
            emit('updatetrigger', JSON.stringify(data), props.selectedTriggerIndex)
        }

        return {
            handleSelectedGroups,
            selectedGroups,
            handleLogicalOperator,
            logicalOperator,
            amount,
            handleAmount,
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