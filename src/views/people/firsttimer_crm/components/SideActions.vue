<template>
    <div class="container">
        <div class="row d-flex justify-content-between">
            <div class="font-weight-700">Contacts</div>
            <div class="font-weight-700">Actions <i class="pi pi-chevron-down"></i></div>
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
        <div class="row d-flex justify-content-between mt-5">
            <div>
                <div class="icon-bg"><i class="fa fa-edit"></i></div>
                <div>Note</div>
            </div>
            <div>
                <div><i class="pi pi-envelope"></i></div>
                <div>Email</div>
            </div>
            <div>
                <div><i class="pi pi-phone"></i></div>
                <div>Call</div>
            </div>
            <div>
                <div><i class="pi pi-calendar-plus"></i></div>
                <div>Task</div>
            </div>
            <div>
                <div><i class="pi pi-plus"></i></div>
                <div>Log</div>
            </div>
        </div>
    </div>
    <hr />
    <div class="container">
        <div class="row">
            <div class="p-0 col-12">
                <i class="pi pi-chevron-down"></i> About This Contact
            </div>
        </div>
        <div class="row">
            <div class="p-0 col-12">Email</div>
            <div class="p-0 col-12">
                Sample@sample.com
            </div>
        </div>
        <div class="row">
            <div class="p-0 col-12">Phone Number</div>
            <div class="p-0 col-12">
                <input type="text" class="form-control"/>
                <i class="pi pi-pencil"></i> <button>Details</button>
            </div>
        </div>
        <div class="row">
            <div class="p-0 col-12">Contact owner</div>
            <div class="p-0 col-12">
                <Dropdown v-model="selectedContact" :options="contacts" class="w-100" optionLabel="name" placeholder="Select Contact" />
                <i class="pi pi-pencil"></i> <button>Details</button>
            </div>
        </div>
        <div class="row">
            <div class="p-0 col-12">Last contacted</div>
            <div class="p-0 col-12">
                12/05/2012 11:59 PM GMT+1
            </div>
        </div>
        <div class="row">
            <div class="p-0 col-12">Lifecycle stage</div>
            <div class="p-0 col-12">
                <Dropdown v-model="selectedLifeCycle" :options="lifeCycle" class="w-100" optionLabel="stage" placeholder="Select Contact" />
                <i class="pi pi-pencil"></i> <button>Details</button>
            </div>
        </div>
        <div class="row">
            <div class="p-0 col-12">Lead Status</div>
            <div class="p-0 col-12">
                <Dropdown v-model="selectedLeadStatus" :options="leadStatus" class="w-100" optionLabel="status" placeholder="Select Contact" />
                <i class="pi pi-pencil"></i> <button>Details</button>
            </div>
            <div class="col-6">
                <button>View all properties</button>
            </div>
            <div class="col-6">
                <button>View property history</button>
            </div>
        </div>
        <div class="row">
            <div class="p-0 col-12">
                <i class="pi pi-chevron-down"></i> About This Contact
            </div>
            <div class="p-0 col-12">
                Website activity shows you how many times a contact has visited your site and viewed your pages.
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import Dropdown from "primevue/dropdown";
export default {
    components: {
        Dropdown
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
    font-size: 30px;
}

.contact-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%
}

.icon-bg {
    border: 2px solid red;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>