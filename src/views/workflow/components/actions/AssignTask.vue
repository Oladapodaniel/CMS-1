<template>
    <div class="container max-height scroll-div">
        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Task Type</label>
            </div>
            <div class="col-md-12 px-0">
                <Dropdown :options="taskTypes" optionLabel="name" class="w-100" v-model="selectedTaskType" @change="handleSelectedTaskType" />
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Group Leaders</label>
            </div>
            <div class="col-md-12 px-0">
                <input type="text" class="form-control" v-model="groupLeaders" @input="handleGroupLeaders">
                <span class="small-text">Separate the addresses with comma</span>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Other Contacts</label>
            </div>
            <div class="col-md-12 px-0">
                <input type="text" class="form-control" v-model="otherToContacts" @input="handleOtherToContacts">
                <span class="small-text">Separate the addresses with comma</span>
            </div>
        </div>

        <div class="row mt-4 mb-5">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Instructions</label>
            </div>
            <div class="col-md-12 px-0">
                <textarea name="" id="" class="w-100" rows="4" v-model="instructions" @change="handleInstructions"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import Dropdown from 'primevue/dropdown'

export default {
    components: { Dropdown },
    props: [ "selectedActionIndex" ],
    setup (props, { emit }) {
        const data = reactive({ ActionType: 5, JSONActionParameters: { } })

        const selectedTaskType = ref([ ]);
        const handleSelectedTaskType = (e) => {
            data.JSONActionParameters.taskType = e.value.index;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const groupLeaders = ref([ ]);
        const handleGroupLeaders = (e) => {
            data.JSONActionParameters.groupLeaders = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const otherToContacts = ref([ ]);
        const handleOtherToContacts = (e) => {
            data.JSONActionParameters.otherToContacts = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const instructions = ref([ ]);
        const handleInstructions = (e) => {
            data.JSONActionParameters.instructions = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const taskTypes = [
            { name: 'Call', index: 0},
            { name: 'Email', index: 1},
            { name: 'Visit', index: 2}
        ]

        return {
            taskTypes,
            selectedTaskType,
            handleSelectedTaskType,
            handleGroupLeaders,
            groupLeaders,
            handleOtherToContacts,
            otherToContacts,
            handleInstructions,
            instructions,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>