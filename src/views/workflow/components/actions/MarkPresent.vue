<template>
    <div class="container scroll-div">
        <div class="row">
            <div class="col-md-12 mt-4 mb-2">
                <label for="" class="mb-0 font-weight-600">Mark the Individual Present in the following Group(s):</label>
            </div>
            <div class="col-md-12">
                <MultiSelect @change="handleSelectedGroups" v-model="selectedGroups" :options="attendanceItems" optionLabel="name"  class="w-100"  display="chip" />
            </div>
        </div>
    </div>
</template>

<script>
import MultiSelect from "primevue/multiselect"
import attendanceservice from '../../../../services/attendance/attendanceservice'
import { reactive, ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import workflow_util from '../../utlity/workflow_util'

export default {
    components: { MultiSelect },
    props: [ "selectedActionIndex", "parameters" ],
    setup (props, { emit }) {
        const data = reactive({ ActionType: 9, JSONActionParameters: { } })

        const selectedGroups = ref([ ]);
        const handleSelectedGroups = (e) => {
            data.JSONActionParameters.listOfAttendanceCheckins = e.value.map(i => i.id).join(',');
            emit('updateaction', data, props.selectedActionIndex);
        }

        const attendanceItems = ref([ ]);
        const getAttendanceItems = async () => {
            try {
                const response = await attendanceservice.getItems();
                attendanceItems.value = response.map(i => {
                    return { id: i.id, name: i.fullEventName }
                });
            } catch (error) {
                console.log(error);
            }
        }
        getAttendanceItems();

        const parsedData = ref({ })
        watch(() => {
            if (props.parameters.Action) {
                const actn = JSON.parse(props.parameters.Action);
                parsedData.value = JSON.parse(actn.JSONActionParameters);

                selectedGroups.value = workflow_util.getGroups(parsedData.value.listOfAttendanceCheckins, attendanceItems.value);
                data.JSONActionParameters.groups = parsedData.value.groups;
            } else if (props.parameters.action && props.parameters.action.jsonActionParameters) {
                parsedData.value = JSON.parse(props.parameters.action.jsonActionParameters);
                
                selectedGroups.value = workflow_util.getGroups(parsedData.value.listOfAttendanceCheckins, attendanceItems.value);
                data.JSONActionParameters.groups = parsedData.value.groups;
            }
        })

        return {
            attendanceItems,
            handleSelectedGroups,
            selectedGroups
        }
    }
}
</script>

<style lang="scss" scoped>

</style>