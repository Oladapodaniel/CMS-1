<template>
    <div class="container">
        <div class="row d-flex justify-content-between mt-3">
            <div class="col font-weight-700 uniform-primary-color">Contacts</div>
            <div class="col font-weight-700 text-right uniform-primary-color">Actions <i class="pi pi-angle-down"></i></div>
        </div>
        <div class="row mt-5">
            <div class="col-3">
                <img src="../../../../assets/people/phone-import.svg" class="contact-image"/>
            </div>
            <div class="col-9">
                <div class="contact-name">Design Sample</div>
                <div>sample@gmail.com <i class="pi pi-copy"></i></div>
            </div>
        </div>
        <div class="row d-flex justify-content-center mt-5">
            <div>
                <div class="icon-bg" v-tooltip.top="'Create a note'"><i class="pi pi-user-edit"></i></div>
                <div>Note</div>
            </div>
            <div class="ml-4">
                <div class="icon-bg" v-tooltip.top="'Create an email'"><i class="pi pi-envelope"></i></div>
                <div>Email</div>
            </div>
            <div class="ml-4">
                <div class="icon-bg" v-tooltip.top="'Make a phone call'"><i class="pi pi-phone"></i></div>
                <div>Call</div>
            </div>
            <div class="ml-4">
                <div class="icon-bg" v-tooltip.top="'Create a task'"><i class="pi pi-calendar-plus"></i></div>
                <div>Task</div>
            </div>
            <div class="ml-4" v-tooltip.top="'Log a call, email or meeting'">
                <div class="icon-bg"><i class="pi pi-plus"></i></div>
                <div>Log</div>
            </div>
        </div>
    </div>
    <hr class="mt-4"/>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
                <i class="pi pi-angle-down uniform-primary-color"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span class="font-weight-700">About This Contact</span>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12 label-text">Email</div>
            <div class="col-12 mt-2">
                Sample@sample.com
            </div>
        </div>
        <div class="row">
            <div class="col-12 mt-4 label-text">Phone Number</div>
            <div class="col-7 mt-2">
                <input type="text" class="form-control"/>
            </div>
            <div class="col-5 align-self-center">
                <i class="pi pi-pencil icon-edit"></i> <button class="details-btn ml-2">Details</button>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mt-4 label-text">Contact owner</div>
            <div class="col-7 mt-2">
                <Dropdown v-model="selectedContact" :options="contacts" class="w-100" optionLabel="name" placeholder="Select Contact" />
            </div>
            <div class="col-5 align-self-center">
                <i class="pi pi-pencil icon-edit"></i> <button class="ml-2 details-btn">Details</button>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mt-4 label-text">Last contacted</div>
            <div class="col-12 mt-2">
                12/05/2012 11:59 PM GMT+1
            </div>
        </div>
        <div class="row">
            <div class="col-12 mt-4 label-text">Lifecycle stage</div>
            <div class="col-7">
                <Dropdown v-model="selectedLifeCycle" :options="lifeCycle" class="w-100" optionLabel="stage" placeholder="Select Contact" />
            </div>
            <div class="col-5 align-self-center">
                <i class="pi pi-pencil icon-edit"></i> <button class="ml-2 details-btn">Details</button>
            </div>
        </div>
        <div class="row">
            <div class="col-12 label-text mt-4">Lead Status</div>
            <div class="col-7 mt-2">
                <Dropdown v-model="selectedLeadStatus" :options="leadStatus" class="w-100" optionLabel="status" placeholder="Select Contact" />
            </div>
            <div class="col-5 align-self-center">
                <i class="pi pi-pencil icon-edit"></i> <button class="ml-2 details-btn">Details</button>
            </div>
            <!-- <div class="col-6">
                <button>View all properties</button>
            </div>
            <div class="col-6">
                <button>View property history</button>
            </div> -->
        </div>
        <div class="row">
            <div class="col-12 mt-4">
                <i class="pi pi-angle-down uniform-primary-color"></i> About This Contact
            </div>
            <div class="col-12 mt-2 pb-5">
                Website activity shows you how many times a contact has visited your site and viewed your pages.
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import Dropdown from "primevue/dropdown";
import Tooltip from 'primevue/tooltip';
export default {
    components: {
        Dropdown
    },
    directives: {
        'tooltip': Tooltip
    },
    setup () {
        const selectedContact = ref("")
        const contacts = ref([
            {
                name: 'Oladapo Daniel'
            },
            {
                name: 'Godstar Oluwatosin'
            },
            {
                name: 'Peter Ihesie'
            }
        ])
        const lifeCycle = ref([
            {
                stage: 'First Timer'
            },
            {
                stage: 'Member'
            },
            {
                stage: 'Visitor'
            }
        ])
        const selectedLifeCycle = ref("")
        const leadStatus = ref([
            {
                status: 'In Progress'
            },
            {
                status: 'Unqualified'
            },
            {
                status: 'Open Deal'
            }
        ])
        const selectedLeadStatus = ref("")


        return {
            selectedContact,
            contacts,
            lifeCycle,
            selectedLifeCycle,
            selectedLeadStatus,
            leadStatus
        }
    }
}
</script>

<style scoped>
.contact-name {
    font-size: 36px;
    font-weight: 200
}

.contact-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%
}

.icon-bg {
    border: 2px solid #cbd6e2;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #506e91;
    background: #eaf0f6;
}

.label-text {
    color: #506e91;
    font-size: 0.9em;
}

.details-btn {
        background-color: #eaf0f6;
        border: 1px solid #cbd6e2;
        color: #506e91;
        border-radius: 3px;
        padding: 5px 12px;
        font-size: 12px;
}

.icon-edit {
    color: #506e91;
}

.uniform-primary-color {
    color: #136acd
}
</style>