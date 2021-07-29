<template>
    <div class="container max-height px-0 scroll-div">
        <div class="row text-center dotted-border-bottom">
            <div class="col-md-12 my-3">
                <TriggerDescription :header="'Attendance'" :description="description" @removetrigger="removeTrigger" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <label for="" class="font-weight-600">A member of</label>
            </div>
            <div class="col-md-12 mb-2 mt-3">
                <MultiSelect @change="handleSelectedGroups" v-model="selectedGroups" optionLabel="name" :options="groups"  class="w-100"  display="chip" />
            </div>

            <div class="col-md-12">
                <label for="" class="font-weight-600">Is marked</label>
            </div>
            <div class="col-md-12 mb-2 mt-3">
                <Dropdown @change="handleStatus" v-model="selectedStatus" :options="[ 'Present', 'Excused', 'Unexcused' ]" class="w-100" />
            </div>

            <div class="col-md-12 mt-4">
                <label for="" class="font-weight-600">Time(s)</label>
            </div>
            <div class="col-md-12 mb-2">
                <input type="text" v-model="times" @change="handleTimes" class="form-control">
            </div>

            <div class="col-md-12 mt-4">
                <label for="" class="font-weight-600">In the last</label>
            </div>
            <div class="col-md-12 mb-2">
                <input type="text" class="form-control" v-model.number="days" @change="handleDays">
            </div>
        </div>
        
    </div>
</template>

<script>
import Dropdown from "primevue/dropdown"
import MultiSelect from "primevue/multiselect"
import TriggerDescription from "../TriggerDescription.vue"
import { reactive, ref } from '@vue/reactivity'
import { computed, watch } from '@vue/runtime-core'
import workflow_util from '../../utlity/workflow_util'

export default {
    components: { Dropdown, TriggerDescription, MultiSelect },
    props: [ "groups", "contributionItems", "selectedTriggerIndex", "condition" ],
    setup (props, { emit }) {
        const data = reactive({ });

        const selectedStatus = ref([ ]);
        const handleStatus = e => {
            data.attendanceStatus = e.value;
            emit('updatetrigger', JSON.stringify(data), props.selectedTriggerIndex);
        }

        const days = ref(0);
        const handleDays = e => {
            data.groups = e.target.value;
            emit('updatetrigger', JSON.stringify(data), props.selectedTriggerIndex)
        }

        const times = ref([ ]);
        const handleTimes = e => {
            data.times = e.value;
            emit('updatetrigger', JSON.stringify(data), props.selectedTriggerIndex);
        }

        const selectedGroups = ref([ ]);
        const groupSelected = e => {
            const allGroupsIndex = selectedGroups.value.findIndex(i => i.id === "00000000-0000-0000-0000-000000000000");
            data.groups = allGroupsIndex < 0 ? e.value.map(i => i.id).join(',') : "00000000-0000-0000-0000-000000000000";
            emit('updatetrigger', JSON.stringify(data), props.selectedTriggerIndex)
        }

        const description = computed(() => {
            return {
                id: 10,
                selectedStatus: data.selectedStatus && data.selectedStatus.length > 0 ? data.selectedStatus : ['____'],
                numOfTimes: data.numOfTimes,
                timesInLastWeek: data.timesInLastWeek,
                selectedGroups: data.selectedGroups && data.selectedGroups.length > 0 ? data.selectedGroups : ['___']
            }
        })

        const removeTrigger = () => {
            emit("removetrigger")
        }

        const parsedData = ref({ })
        watch(() => {
            if (props.condition.jsonCondition) {
                parsedData.value = JSON.parse(props.condition.jsonCondition);
                selectedStatus.value = parsedData.value.attendanceStatus;
                data.attendanceStatus = parsedData.value.attendanceStatus;

                days.value = parsedData.value.days;

                data.groups = parsedData.value.days;
                selectedGroups.value = props.groups.length > 0 ? workflow_util.getGroups(parsedData.value.groups, props.groups) : [ ];

                data.times = parsedData.value.times;
                times.value = parsedData.value.times;
            }
        }) 

        return {
            handleStatus,
            selectedStatus,
            days,
            handleDays,
            times,
            handleTimes,
            selectedGroups,
            groupSelected,
            description,
            removeTrigger,
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