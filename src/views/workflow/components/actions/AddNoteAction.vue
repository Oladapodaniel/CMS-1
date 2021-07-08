<template>
    <div class="container max-height scroll-div">
        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Add Note to</label>
            </div>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12 px-0">
                        <input type="checkbox" name="" id="" v-model="person" @change="handleSendPersonMail"> The person
                    </div>
                    <div class="col-md-12 px-0">
                        <input type="checkbox" name="" id="" v-model="parent" @change="handleSendPersonsParentMail"> The person's parent
                    </div>
                    <div class="col-md-12 px-0">
                        <input type="checkbox" name="" id="" v-model="spouse" @change="handleSendPersonsSpouseMail"> The person's spouse
                    </div>
                    <div class="col-md-12 px-0">
                        <input type="checkbox" name="" id="" v-model="groupLeader" @change="handleSendGroupLeaderMail"> The Group Leaders
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">And the following</label>
            </div>
            <div class="col-md-12 px-0">
                <input type="text" class="form-control" v-model="otherToContacts" @change="handleOtherAddresses">
                <span class="small-text">Separate the addresses with comma</span>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Note</label>
            </div>
            <div class="col-md-12 px-0">
                <textarea name="" id="" rows="5" class="form-control w-100" v-model="note" @input="handleNote"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
export default {
    props: [ "selectedActionIndex" ],
    setup (props, { emit }) {
        const data = reactive({ ActionType: 10, JSONActionParameters: { } })
        const person = ref(false);
        const handleSendPersonMail = (e) => {
            data.JSONActionParameters.person = e.target.checked;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const parent = ref(false);
        const handleSendPersonsParentMail = (e) => {
            data.JSONActionParameters.parent = e.target.checked;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const spouse = ref(false);
        const handleSendPersonsSpouseMail = (e) => {
            data.JSONActionParameters.spouse = e.target.checked;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const groupLeader = ref(false);
        const handleSendGroupLeaderMail = (e) => {
            data.JSONActionParameters.groupLeader = e.target.checked;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const note = ref('');
        const handleNote = (e) => {
            data.JSONActionParameters.note = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        return {
            person,
            handleSendPersonMail,
            parent,
            handleSendPersonsParentMail,
            spouse,
            groupLeader,
            handleSendGroupLeaderMail,
            handleSendPersonsSpouseMail,
            note,
            handleNote,
        }
    }
}
</script>

<style scoped>
    .max-height {
        max-height: calc(100vh - 300px);
        overflow-y: scroll;
    }
</style>