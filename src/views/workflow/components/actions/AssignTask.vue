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
                <span class="d-flex align-items-center">
                    <input type="checkbox" class="form-check mr-2" v-model="groupLeaders" @change="handleGroupLeaders"> <span>Group Leaders</span>
                </span>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Other Contacts</label>
            </div>
            <div class="col-md-12 px-0">
                <div class="row">
                    <div class="col-md-12">
                        <span class="d-flex flex-wrap">
                            <span v-for="(contact, index) in otherToContacts" :key="index" class="d-flex my-1 p-1 justify-content-between our-grey-bg mx-1" style="width: fit-content">
                                <span>{{ contact.name }}</span>
                                <span class="mx-2 font-weight-bold text-danger c-pointer" @click="removeContact(index)">x</span>
                            </span>
                        </span>
                    </div>
                </div>
                <SearchWithDropdown @selectmember="memberSelected" />
            </div>
        </div>

        <!-- <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Other Contacts</label>
            </div>
            <div class="col-md-12 px-0">
                <input type="text" class="form-control" v-model="otherToContacts" @input="handleOtherToContacts">
                <span class="small-text">Separate the addresses with comma</span>
            </div>
        </div> -->

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
import SearchWithDropdown from '@/components/search/SearchWithDropdown'
import { watch } from '@vue/runtime-core';

export default {
    components: { Dropdown, SearchWithDropdown },
    props: [ "selectedActionIndex", "parameters" ],
    setup (props, { emit }) {
        const data = reactive({ ActionType: 5, JSONActionParameters: { } })

        const selectedTaskType = ref([ ]);
        const handleSelectedTaskType = (e) => {
            data.JSONActionParameters.taskType = e.value.index;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const groupLeaders = ref(false);
        const handleGroupLeaders = (e) => {
            data.JSONActionParameters.groupLeaders = e.target.checked;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const otherToContacts = ref([ ]);
        const handleOtherToContacts = (e) => {
            data.JSONActionParameters.otherToContacts = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const instructions = ref('');
        const handleInstructions = (e) => {
            data.JSONActionParameters.instructions = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const taskTypes = [
            { name: 'Call', index: 0},
            { name: 'Email', index: 1},
            { name: 'Visit', index: 2}
        ]

        const memberSelected = memberData => {
            if (memberData.member) otherToContacts.value.push(memberData.member);
            data.JSONActionParameters.otherToContacts = otherToContacts.value.length > 0 ? otherToContacts.value.map(i => i.id).join(',') : "";
        }

        const removeContact = index => {
            otherToContacts.value.splice(index, 1);
            data.JSONActionParameters.otherToContacts = otherToContacts.value.length > 0 ? otherToContacts.value.map(i => i.id).join(',') : "";
        }

        const parsedData = ref({ })
        watch(() => {
            if (props.parameters.Action) {
                const actn = JSON.parse(props.parameters.Action);
                parsedData.value = JSON.parse(actn.JSONActionParameters)

                selectedTaskType.value = taskTypes.find(i => i.index === parsedData.value.taskType);
                data.JSONActionParameters.taskType = parsedData.value.taskType;

                groupLeaders.value = parsedData.value.groupLeaders;
                data.JSONActionParameters.groupLeaders = parsedData.value.groupLeaders;

                instructions.value = parsedData.value.instructions;
                data.JSONActionParameters.instructions = parsedData.value.instructions;
            } else if (props.parameters.action && props.parameters.action.jsonActionParameters) {
                parsedData.value = JSON.parse(props.parameters.action.jsonActionParameters);
                
                selectedTaskType.value = taskTypes.find(i => i.index === parsedData.value.taskType);
                data.JSONActionParameters.taskType = parsedData.value.taskType;

                groupLeaders.value = parsedData.value.groupLeaders;
                data.JSONActionParameters.groupLeaders = parsedData.value.groupLeaders;

                instructions.value = parsedData.value.instructions;
                data.JSONActionParameters.instructions = parsedData.value.instructions;
            }
        })

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
            memberSelected,
            removeContact,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>