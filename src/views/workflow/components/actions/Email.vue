<template>
    <div class="container max-height scroll-div">
        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Email</label>
            </div>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <input type="checkbox" name="" id="" v-model="person" @change="handleSendPersonMail"> The person
                    </div>
                    <div class="col-md-12">
                        <input type="checkbox" name="" id="" v-model="parent" @change="handleSendPersonsParentMail"> The person's parent
                    </div>
                    <div class="col-md-12">
                        <input type="checkbox" name="" id="" v-model="spouse" @change="handleSendPersonsSpouseMail"> The person's spouse
                    </div>
                    <div class="col-md-12">
                        <input type="checkbox" name="" id="" v-model="groupLeader" @change="handleSendGroupLeaderMail"> The Group Leaders
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">And the following</label>
            </div>
            <div class="col-md-12">
                <input type="text" class="form-control" v-model="otherToContacts" @change="handleOtherAddresses">
                <span class="small-text">Separate the addresses with comma</span>
            </div>
        </div> -->

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Add BBC</label>
            </div>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <input type="checkbox" name="" id="" v-model="parentBBC" @change="handleParentBBC"> The person's parent
                    </div>
                    <div class="col-md-12">
                        <input type="checkbox" name="" id="" v-model="spouseBBC" @change="handleSpouseBBC"> The person's spouse
                    </div>
                    <div class="col-md-12">
                        <input type="checkbox" name="" id="" v-model="BCCGroupLeader" @change="handleBCCGroupLeader"> The Group Leaders
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">And the following</label>
            </div>
            <div class="col-md-12">
                <input type="text" class="form-control" v-model="otherToContacts" @change="handleOtherAddresses">
                <span class="small-text">Separate the addresses with comma</span>
            </div>
        </div>

        <!-- <div class="row mt-4">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <input type="checkbox" name="" id="" v-model="sendIndividualMails" @change="handleSendIndividualMails"> Send individual emails to recipients
                    </div>
                </div>
            </div>
        </div> -->

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Specify email for "Reply To"</label>
            </div>
            <div class="col-md-12">
                <input type="text" class="form-control" v-model="replyToEmailAddress" @change="handleReplyEmail">
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">With the following subject</label>
            </div>
            <div class="col-md-12">
                <input type="text" class="form-control" v-model="subject" @change="handleSubject">
            </div>
        </div>

        <div class="row mt-4 mb-5">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">And message</label>
            </div>
            <div class="col-md-12">
                <textarea name="" id="" class="w-100" rows="3" v-model="message" @change="handleMessage"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
export default {
    props: [ "selectedActionIndex", "parameters" ],
    setup (props, { emit }) {
        const data = reactive({ ActionType: 0, JSONActionParameters: { } })
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

        const otherToContacts = ref('');
        const handleOtherAddresses = (e) => {
            data.JSONActionParameters.otherToContacts = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const BCCParent = ref('');
        const handleParentBBC = (e) => {
            data.JSONActionParameters.BCCParent = e.target.checked;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const BCCSpouse = ref('');
        const handleSpouseBBC = (e) => {
            data.JSONActionParameters.BCCSpouse = e.target.checked;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const BCCGroupLeader = ref('');
        const handleBCCGroupLeader = (e) => {
            data.JSONActionParameters.BCCGroupLeader = e.target.checked;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const otherBBC = ref('');
        const handleOtherBBC = (e) => {
            data.JSONActionParameters.otherBBC = e.target.checked;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const sendIndividualMails = ref(false);
        const handleSendIndividualMails = (e) => {
            data.JSONActionParameters.sendIndividualMails = e.target.checked;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const replyToEmailAddress = ref('');
        const handleReplyEmail = (e) => {
            data.JSONActionParameters.replyToEmailAddress = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const subject = ref('');
        const handleSubject = (e) => {
            data.JSONActionParameters.subject = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }
        const message = ref('');
        const handleMessage = (e) => {
            data.JSONActionParameters.message = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const parsedData = ref({ })
        watch(() => {
            if (props.parameters.Action) {
                const actn = JSON.parse(props.parameters.Action);
                parsedData.value = JSON.parse(actn.JSONActionParameters);

                person.value = parsedData.value.person;
                data.JSONActionParameters.person = parsedData.value.person;

                parent.value = parsedData.value.parent;
                data.JSONActionParameters.parent = parsedData.value.parent;

                spouse.value = parsedData.value.spouse;
                data.JSONActionParameters.spouse = parsedData.value.spouse;

                groupLeader.value = parsedData.value.groupLeader;
                data.JSONActionParameters.groupLeader = parsedData.value.groupLeader;

                otherToContacts.value = parsedData.value.otherToContacts;
                data.JSONActionParameters.otherToContacts = parsedData.value.otherToContacts;

                BCCParent.value = parsedData.value.BCCParent;
                data.JSONActionParameters.BCCParent = parsedData.value.BCCParent;

                BCCSpouse.value = parsedData.value.BCCSpouse;
                data.JSONActionParameters.BCCSpouse = parsedData.value.BCCSpouse;

                BCCGroupLeader.value = parsedData.value.BCCGroupLeader;
                data.JSONActionParameters.BCCGroupLeader = parsedData.value.BCCGroupLeader;

                otherBBC.value = parsedData.value.otherBBC;
                data.JSONActionParameters.otherBBC = parsedData.value.otherBBC;

                sendIndividualMails.value = parsedData.value.sendIndividualMails;
                data.JSONActionParameters.sendIndividualMails = parsedData.value.sendIndividualMails;

                replyToEmailAddress.value = parsedData.value.replyToEmailAddress;
                data.JSONActionParameters.replyToEmailAddress = parsedData.value.replyToEmailAddress;

                subject.value = parsedData.value.subject;
                data.JSONActionParameters.subject = parsedData.value.subject;

                message.value = parsedData.value.message;
                data.JSONActionParameters.message = parsedData.value.message;
            } else if (props.parameters.action && props.parameters.action.jsonActionParameters) {
                parsedData.value = JSON.parse(props.parameters.action.jsonActionParameters);
                
                person.value = parsedData.value.person;
                data.JSONActionParameters.person = parsedData.value.person;

                parent.value = parsedData.value.parent;
                data.JSONActionParameters.parent = parsedData.value.parent;

                spouse.value = parsedData.value.spouse;
                data.JSONActionParameters.spouse = parsedData.value.spouse;

                groupLeader.value = parsedData.value.groupLeader;
                data.JSONActionParameters.groupLeader = parsedData.value.groupLeader;

                otherToContacts.value = parsedData.value.otherToContacts;
                data.JSONActionParameters.otherToContacts = parsedData.value.otherToContacts;

                BCCParent.value = parsedData.value.BCCParent;
                data.JSONActionParameters.BCCParent = parsedData.value.BCCParent;

                BCCSpouse.value = parsedData.value.BCCSpouse;
                data.JSONActionParameters.BCCSpouse = parsedData.value.BCCSpouse;

                BCCGroupLeader.value = parsedData.value.BCCGroupLeader;
                data.JSONActionParameters.BCCGroupLeader = parsedData.value.BCCGroupLeader;

                otherBBC.value = parsedData.value.otherBBC;
                data.JSONActionParameters.otherBBC = parsedData.value.otherBBC;

                sendIndividualMails.value = parsedData.value.sendIndividualMails;
                data.JSONActionParameters.sendIndividualMails = parsedData.value.sendIndividualMails;

                replyToEmailAddress.value = parsedData.value.replyToEmailAddress;
                data.JSONActionParameters.replyToEmailAddress = parsedData.value.replyToEmailAddress;

                subject.value = parsedData.value.subject;
                data.JSONActionParameters.subject = parsedData.value.subject;

                message.value = parsedData.value.message;
                data.JSONActionParameters.message = parsedData.value.message;
            }
        })

        return {
            person,
            handleSendPersonMail,
            parent,
            handleSendPersonsParentMail,
            spouse,
            groupLeader,
            handleSendGroupLeaderMail,
            handleSendPersonsSpouseMail,
            otherToContacts,
            handleOtherAddresses,
            BCCParent,
            handleParentBBC,
            BCCSpouse,
            handleSpouseBBC,
            handleBCCGroupLeader,
            otherBBC,
            handleOtherBBC,
            BCCGroupLeader,
            sendIndividualMails,
            handleSendIndividualMails,
            replyToEmailAddress,
            handleReplyEmail,
            subject,
            handleSubject,
            message,
            handleMessage,
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