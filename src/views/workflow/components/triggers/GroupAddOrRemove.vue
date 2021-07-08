<template>
    <div class="container max-height px-0 scroll-div">
        <div class="row text-center dotted-border-bottom">
            <div class="col-md-12 my-3">
                <TriggerDescription :header="'Group — Add/Remove'" :description="description" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">A member is</label>
            </div>

            <div class="col-md-12 mb-2">
                <Dropdown :options="[ 'Added to', 'Removed from' ]" v-model="logicalOperatorAddOrRemove" @change="handleLogicalOperatorAddOrRemove" class="w-100" />
            </div>

            <div class="col-md-12 mb-2 mt-3">
                <MultiSelect v-model="selectedGroups" optionLabel="name" @change="handleSelectedGroups" :options="groups"  placeholder="Select groups" class="w-100"  display="chip" />
            </div>

        </div>
        
    </div>
</template>

<script>
import Dropdown from "primevue/dropdown"
import TriggerDescription from "../TriggerDescription.vue"
import { computed, reactive, ref } from '@vue/runtime-core';
import MultiSelect from "primevue/multiselect";
export default {
    components: { Dropdown, TriggerDescription, MultiSelect },
    props: [ "groups", "selectedTriggerIndex" ],
    setup (props, { emit }) {
        const data = reactive({ })

        const selectedGroups = ref([ ]);
        const handleSelectedGroups = e => {
        const allGroupsIndex = selectedGroups.value.findIndex(i => i.id === "00000000-0000-0000-0000-000000000000");
        data.groups = allGroupsIndex < 0 ? e.value.map(i => i.id).join(',') : "00000000-0000-0000-0000-000000000000";
            emit('updatetrigger', JSON.stringify(data), props.selectedTriggerIndex)
        }

        const logicalOperatorAddOrRemove = ref('');
        const handleLogicalOperatorAddOrRemove = e => {
        data.logicalOperatorAddOrRemove = e.value;
            emit('updatetrigger', JSON.stringify(data), props.selectedTriggerIndex)
        }

        const description = computed(() => {
            return {
                selectedGroups: selectedGroups.value && selectedGroups.value.length > 0 ? selectedGroups.value.map(i => i.name) : ['_____'],
                logicalOperatorAddOrRemove: data.logicalOperatorAddOrRemove ? data.logicalOperatorAddOrRemove : '____',
                id: 8,
            };            
        });

        return {
            selectedGroups,
            handleSelectedGroups,
            description,
            logicalOperatorAddOrRemove,
            handleLogicalOperatorAddOrRemove,
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