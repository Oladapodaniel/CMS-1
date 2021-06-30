<template>
    <div class="container max-height">
        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Email</label>
            </div>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <input type="checkbox" name="" id="" v-model="sendPersonMail" @change="handleSendPersonMail"> The person
                    </div>
                    <div class="col-md-12">
                        <input type="checkbox" name="" id="" v-model="sendPersonsParentMail" @change="handleSendPersonsParentMail"> The person's parent
                    </div>
                    <div class="col-md-12">
                        <input type="checkbox" name="" id="" v-model="sendPersonsSpouseMail" @change="handleSendPersonsSpouseMail"> The person's spouse
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">And the following</label>
            </div>
            <div class="col-md-12">
                <input type="text" class="form-control" v-model="otherAddresses" @change="handleOtherAddresses">
                <span class="small-text">Separate the addresses with comma</span>
            </div>
        </div>

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
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">And the following</label>
            </div>
            <div class="col-md-12">
                <input type="text" class="form-control" v-model="otherBBC" @change="handleOtherBBC">
                <span class="small-text">Separate the addresses with comma</span>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <input type="checkbox" name="" id="" v-model="sendIndividualMails" @change="handleSendIndividualMails"> Send individual emails to recipients
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Specify email for "Reply To"</label>
            </div>
            <div class="col-md-12">
                <input type="text" class="form-control" v-model="replyEmail" @change="handleReplyEmail">
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
export default {
    setup (props, { emit }) {
        const data = reactive({ })
        const sendPersonMail = ref(false);
        const handleSendPersonMail = (e) => {
            data.sendPersonMail = e.target.checked;
            emit('emailupdated', data);
        }

        const sendPersonsParentMail = ref(false);
        const handleSendPersonsParentMail = (e) => {
            data.sendPersonsParentMail = e.target.checked;
            emit('emailupdated', data);
        }

        const sendPersonsSpouseMail = ref(false);
        const handleSendPersonsSpouseMail = (e) => {
            data.sendPersonsSpouseMail = e.target.checked;
            emit('emailupdated', data);
        }

        const otherAddresses = ref('');
        const handleOtherAddresses = (e) => {
            data.otherAddresses = e.target.value;
            emit('emailupdated', data);
        }

        const parentBBC = ref('');
        const handleParentBBC = (e) => {
            data.parentBBC = e.target.checked;
            emit('emailupdated', data);
        }

        const spouseBBC = ref('');
        const handleSpouseBBC = (e) => {
            data.spouseBBC = e.target.checked;
            emit('emailupdated', data);
        }

        const otherBBC = ref('');
        const handleOtherBBC = (e) => {
            data.otherBBC = e.target.checked;
            emit('emailupdated', data);
        }

        const sendIndividualMails = ref(false);
        const handleSendIndividualMails = (e) => {
            data.sendIndividualMails = e.target.checked;
            emit('emailupdated', data);
        }

        const replyEmail = ref('');
        const handleReplyEmail = (e) => {
            data.replyEmail = e.target.value;
            emit('emailupdated', data);
        }

        const subject = ref('');
        const handleSubject = (e) => {
            data.subject = e.target.value;
            emit('emailupdated', data);
        }
        const message = ref('');
        const handleMessage = (e) => {
            data.message = e.target.value;
            emit('emailupdated', data);
        }

        return {
            sendPersonMail,
            handleSendPersonMail,
            sendPersonsParentMail,
            handleSendPersonsParentMail,
            sendPersonsSpouseMail,
            handleSendPersonsSpouseMail,
            otherAddresses,
            handleOtherAddresses,
            parentBBC,
            handleParentBBC,
            spouseBBC,
            handleSpouseBBC,
            otherBBC,
            handleOtherBBC,
            sendIndividualMails,
            handleSendIndividualMails,
            replyEmail,
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