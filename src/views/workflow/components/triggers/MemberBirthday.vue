<template>
    <div class="container max-height px-0">
        <div class="row text-center dotted-border-bottom">
            <div class="col-md-12 my-3">
                <TriggerDescription :header="'Member - Birthday'" :description="description"  />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">Match an individual who is</label>
            </div>
            <div class="col-md-12 mb-2">
                <MultiSelect @change="groupSelected" v-model="selectedGroup" :options="[ 'Workers', 'Choir', 'New comers' ]"  placeholder="Select groups" class="w-100"  display="chip" />
            </div>
        </div>

        
    </div>
</template>

<script>
import MultiSelect from "primevue/multiselect"
import TriggerDescription from "../TriggerDescription.vue"
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
    components: { MultiSelect, TriggerDescription },

    setup () {
        const selectedGroups = ref([]);
        const groupSelected = e => {
            selectedGroups.value = e.value;
        }

        const description = computed(() => {
            return {
                id: 5,
                selectedGroups: selectedGroups.value.length > 0 ? selectedGroups.value : [ 'any' ]
            }
        })

        return {
            groupSelected,
            selectedGroups,
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