<template>
    <div class="container max-height px-0 scroll-div">
        <div class="row">
            <div class="col-md-12 my-3">
                <Dropdown :options="['Add to', 'Remove from']" v-model="addOrRemove" @change="handleAddOrRemove" placeholder="Add the person to" class="w-100" />
            </div>

            
            <!-- <div class="col-md-12 my-3">
                <label for="" class="font-weight-600">{{ addOrRemove }}</label>
            </div> -->

            <div class="col-md-12 my-3">
                <MultiSelect :options="groups" v-model="selectedGroups" optionLabel="name" @change="handleSelectedGroups"  placeholder="Select groups" class="w-100"  display="chip" />
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import { reactive, ref } from '@vue/reactivity';
import MultiSelect from "primevue/multiselect"
import workflow_util from '../../utlity/workflow_util';
import { watch } from '@vue/runtime-core';
export default {
    components: { Dropdown, MultiSelect },
    props: [ "groups", "selectedActionIndex", "parameters" ],
    setup (props, { emit }) {
        const data = reactive({ ActionType: 4, JSONActionParameters: { } })

        const selectedGroups = ref([ ]);
        const handleSelectedGroups = (e) => {
            const allGroupsIndex = selectedGroups.value.findIndex(i => i.id === "00000000-0000-0000-0000-000000000000");
            data.JSONActionParameters.groups = allGroupsIndex < 0 ? e.value.map(i => i.id).join(',') : "00000000-0000-0000-0000-000000000000";
            emit('updateaction', data, props.selectedActionIndex);
        }
        const addOrRemove = ref('');
        const handleAddOrRemove = (e) => {
            data.JSONActionParameters.addOrRemove = e.value;
            emit('updateaction', data, props.selectedActionIndex);
        }
        
        const parsedData = ref({ })
        watch(() => {
            if (props.parameters.Action) {
                const actn = JSON.parse(props.parameters.Action);
                parsedData.value = JSON.parse(actn.JSONActionParameters);

                selectedGroups.value = workflow_util.getGroups(parsedData.value.groups, props.groups);
                data.JSONActionParameters.groups = parsedData.value.groups;

                addOrRemove.value = parsedData.value.addOrRemove;
                data.JSONActionParameters.addOrRemove = parsedData.value.addOrRemove;
            } else if (props.parameters.action && props.parameters.action.jsonActionParameters) {
                parsedData.value = JSON.parse(props.parameters.action.jsonActionParameters);
                
                selectedGroups.value = workflow_util.getGroups(parsedData.value.groups, props.groups);
                data.JSONActionParameters.groups = parsedData.value.groups;

                addOrRemove.value = parsedData.value.addOrRemove;
                data.JSONActionParameters.addOrRemove = parsedData.value.addOrRemove;
            }
        })

        return {
            selectedGroups,
            handleSelectedGroups,
            handleAddOrRemove,
            addOrRemove,
        }
    }
}
</script>

<style scoped>

</style>