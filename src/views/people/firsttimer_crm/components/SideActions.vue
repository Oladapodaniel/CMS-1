<template>
    <div class="container">
        <div class="row d-flex justify-content-between mt-3">
            <div class="col font-weight-700 uniform-primary-color">Contacts</div>
            <div class="col font-weight-700 text-right uniform-primary-color">Actions <i class="pi pi-angle-down"></i></div>
        </div>
        <div class="row mt-5">
            <div class="col-3">
                <img :src="personDetails.pictureUrl" class="contact-image" v-if="personDetails.pictureUrl"/>
                <img src="../../../../assets/people/phone-import.svg" class="contact-image" v-else/>
            </div>
            <div class="col-9">
                <div class="contact-name">{{ `${personDetails.firstName ? personDetails.firstName : ""} ${personDetails.lastName ? personDetails.lastName : ""}` }}</div>
                <div>{{ personDetails.email }}</div>
                <div><i class="pi pi-copy uniform-primary-color"></i>&nbsp;<i class="pi pi-pencil uniform-primary-color" @click="editContactName"></i></div>
            </div>
        </div>
        <div class="row d-flex justify-content-center mt-5">
            <div @click="openNoteEditor" class="c-pointer">
                <div class="icon-bg" v-tooltip.top="'Create a note'"><i class="pi pi-user-edit"></i></div>
                <div>Note</div>
            </div>
            <div class="ml-4" @click="openEmailModal">
                <div class="icon-bg c-pointer" v-tooltip.top="'Create an email'"><i class="pi pi-envelope"></i></div>
                <div>Email</div>
            </div>
            <div class="ml-4 c-pointer" @click="call">
                <div class="icon-bg" v-tooltip.top="'Make a phone call'"><i class="pi pi-phone"></i></div>
                <div>Call</div>
            </div>
            <div class="ml-4 c-pointer" @click="openTaskEditor">
                <div class="icon-bg" v-tooltip.top="'Create a task'"><i class="pi pi-calendar-plus"></i></div>
                <div>Task</div>
            </div>
            <div class="ml-4 c-pointer" v-tooltip.top="'Log a call, email'" @click="toggleLog" aria:haspopup="true" aria-controls="overlay_panel">
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
            <div class="col-12 mt-2 ">
                <div class="task-border border-transparent d-flex justify-content-between p-2" :class="{ 'hover-border' : hoverTask }" @mouseover="onHoverBorder" @mouseleave="outHoverBorder" @click="editEmail">
                    <div>{{ personDetails.email }}</div>
                <i class="pi pi-pencil align-self-center" :class="{ 'uniform-primary-color' : hoverTask, 'text-white' : !hoverTask }"></i>
                    </div>
            </div>
           
        </div>
        <div class="row" @mouseover="toggleHoverPhone" @mouseleave="OutHoverPhone">
            <div class="col-12 mt-4 label-text">Phone Number</div>
            <div class="col-12 ml-2 mt-3" v-if="!hoverPhone">{{ personDetails.mobilePhone }}</div>
            <div v-else class="col-12 mt-2">
                <input type="text" class="form-control phone-input" @blur="OutHoverPhone" v-model="personDetails.mobilePhone"/>
            </div>
            <div v-if="hoverPhone" class="phone-details align-self-center">
                <i class="pi pi-pencil icon-edit"></i> <button class="details-btn ml-2">Details</button>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mt-4 label-text">Contact owner</div>
            <div class="col-12 mt-2">
                <Dropdown v-model="selectedContact" :options="contacts" class="w-100 phone-input" optionLabel="name" placeholder="Select Contact" />
            </div>
            <!-- <div class="col-5 align-self-center">
                <i class="pi pi-pencil icon-edit"></i> <button class="ml-2 details-btn">Details</button>
            </div> -->
        </div>
        <div class="row">
            <div class="col-12 mt-4 label-text">Last contacted</div>
            <div class="col-12 mt-2">
                12/05/2012 11:59 PM GMT+1
            </div>
        </div>
        <div class="row">
            <div class="col-12 mt-4 label-text">Lifecycle stage</div>
            <div class="col-12">
                <Dropdown v-model="selectedLifeCycle" :options="lifeCycle" class="w-100 phone-input" optionLabel="stage" placeholder="Select Contact" />
            </div>
            <!-- <div class="col-5 align-self-center">
                <i class="pi pi-pencil icon-edit"></i> <button class="ml-2 details-btn">Details</button>
            </div> -->
        </div>
        <div class="row">
            <div class="col-12 label-text mt-4">Lead Status</div>
            <div class="col-12 mt-2">
                <Dropdown v-model="selectedLeadStatus" :options="leadStatus" class="w-100 phone-input" optionLabel="status" placeholder="Select Contact" />
            </div>
            <!-- <div class="col-5 align-self-center">
                <i class="pi pi-pencil icon-edit"></i> <button class="ml-2 details-btn">Details</button>
            </div> -->
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
    
    <OverlayPanel ref="editEmailRef" appendTo="body" :showCloseIcon="false" id="overlay_panel" style="width: 450px" :breakpoints="{'960px': '75vw'}">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div>Email</div>
                    <input v-model="personDetails.email" class="form-control mt-3"/>
                </div>
            </div>
            <div class="row">
                <div class="offset-1 p-2 col-2 mt-3 ml-3 save-btn btn-btn pointer-cursor" @click="saveEmail">Save</div>
                <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3" @click="cancelTaskEdit">Cancel</div>
            </div>
        </div>
        </OverlayPanel>
   
    <OverlayPanel ref="contactNameRef" appendTo="body" :showCloseIcon="false" id="overlay_panel" style="width: 450px" :breakpoints="{'960px': '75vw'}">
        <div class="container">
            <div class="row">
                <div class="col-12 mt-3">
                    <div class="row">
                        <div class="col-6">
                            First Name
                            <div class="mt-2">
                                <input type="text" class="form-control" v-model="personDetails.firstName"/>
                            </div>
                        </div>
                        
                        <div class="col-6">
                            Last Name
                            <div class="mt-2">
                                <input type="text" class="form-control" v-model="personDetails.lastName"/>
                            </div>
                        </div>
                        <div class="col-12 mt-3">
                            Job title
                            <div><input type="text" class="form-control"/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="offset-1 p-2 col-2 mt-3 ml-3 save-btn btn-btn pointer-cursor">Save</div>
                <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3" @click="cancelTaskEdit">Cancel</div>
            </div>
        </div>
        </OverlayPanel>

        <OverlayPanel ref="logDropDown" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
            <div class="p-0 container-fluid">
                <div class="row d-flex flex-column">
                    <div class="py-2 px-3 hover-log" @click="toggleLogPane($event)">Log a call</div>
                    <div class="py-2 px-3 hover-log" @click="toggleLogPane($event)">Log an email</div>
                </div>
            </div>
        </OverlayPanel>

        <Dialog :header="'Log ' + logVariable" v-model:visible="displayLogPane" :style="{width: '50vw'}" :position="position" :modal="true">
            <!-- style="height: 480px" -->
           <div class="container-fluid">
               <div class="row">
                   <div class="col-4">
                       <div class="label-text">Contacted</div>
                       <div @click="toggleContact" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700 mt-1 c-pointer">{{ selectedContactLog }} &nbsp; <i class="pi pi-sort-down"></i></div>
                       <OverlayPanel ref="contactRef" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                            <div class="container p-0">
                                <div class="row">
                                    <div class="col-12 py-2 px-3 hover-cursor-cancel">{{ `${personDetails.firstName} ${personDetails.lastName}(${logVariable === 'email' ? personDetails.email : personDetails.mobilePhone})`}}</div>
                                </div>
                            </div>
                        </OverlayPanel>
                   </div>
                   <div class="col-4">
                       <div class="label-text">Call Outcome</div>
                       <div class="mt-1 uniform-primary-color font-weight-700 c-pointer" @click="toggleOutcome" aria:haspopup="true" aria-controls="overlay_panel">Select an outcome &nbsp; <i class="pi pi-sort-down"></i></div>
                       <OverlayPanel ref="outcomeRef" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                            <div class="container-fluid p-0">
                                <div class="row" v-for="(item, index) in outcomeList" :key="index">
                                    <div class="col-12 py-2 px-3 hover-log">{{ item }}</div>
                                </div>
                            </div>
                        </OverlayPanel>
                   </div>
               </div>
               <div class="row mt-2">
                   <div class="col-4">
                       <div class="label-text">Date</div>
                       <div class="mt-1 uniform-primary-color font-weight-700">
                           <input type="date" class="form-control" />
                       </div>
                   </div>
                   <div class="col-4">
                       <div class="label-text">Time</div>
                       <div class="mt-1 uniform-primary-color font-weight-700 c-pointer" @click="toggleTime" aria:haspopup="true" aria-controls="overlay_panel">2:12PM &nbsp; <i class="pi pi-sort-down"></i></div>
                       <OverlayPanel ref="timeRef" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                            <div class="container">
                                <div class="row">
                                    here here time
                                </div>
                            </div>
                        </OverlayPanel>
                   </div>
               </div>
               <!-- <div class="row">
                   <div class="col-12">
                       <hr />
                   </div>
               </div> -->
               <div class="row mt-3">
                   <div class="col-12">
                       <textarea name="" placeholder="Describe the call..." class="w-100 form-control" rows="6" v-model="callLogDesc"></textarea>
                   </div>
               </div>
           </div>
            <template #footer>
                <div class="row d-flex justify-content-end">
                    <div class="default-btn text-center">Cancel</div>
                    <div class="primary-bg default-btn border-0 text-white text-center ml-3" @click="saveLog">Save</div>
                </div>
            </template>
        </Dialog>
    <Toast />
</template>

<script>
import { computed, ref, watch } from "vue"
import Dropdown from "primevue/dropdown";
import Tooltip from 'primevue/tooltip';
import OverlayPanel from 'primevue/overlaypanel';
// import SinchClient from 'sinch-rtc/sinch.min.js'
// import { useConfirm } from "primevue/useConfirm";
// import { useToast } from "primevue/usetoast";
export default {
    components: {
        Dropdown,
        OverlayPanel
    },
    directives: {
        'tooltip': Tooltip
    },
    emits: ["opennoteeditor", "openemailmodal", "opentaskeditor", "calllogdesc", "resetlog"],
    props: ["personDetails", "callLog"],
    setup (props, { emit }) {
        // const confirm = useConfirm()
        // const toast = useToast()
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
        const outcomeList = ref(['Busy', 'Connected', 'Left live message', 'Left voicemail', 'No answer', 'Wrong number'])
        const selectedLeadStatus = ref("")
        const editEmailRef = ref()
        const contactNameRef = ref()
        const hoverTask = ref(false)
        const hoverPhone = ref(false)
        const phoneNumber = ref(8076543254)
        const email = ref('olad@gamil.com')
        const logDropDown = ref(false)
        const position = ref('bottomright')
        const displayLogPane = ref(false)
        const contactRef = ref(false)
        const outcomeRef = ref(false)
        const date = ref("")
        const timeRef = ref(false)
        const logVariable = ref("")
        const callLogDesc = ref("")


        const selectedContactLog = computed(() => {
            if (!props.personDetails) return "Select a contact"
            return `${props.personDetails.firstName} ${props.personDetails.lastName}`
        })

        const editEmail = (event) => {
            editEmailRef.value.toggle(event);
        };
        
        const editContactName = (event) => {
            contactNameRef.value.toggle(event);
        };

        const onHoverBorder = () => {
            hoverTask.value = true
        }
        
        const outHoverBorder = () => {
            hoverTask.value = false
        }

        const toggleHoverPhone = () => {
            hoverPhone.value = true
        }
        
        const OutHoverPhone = () => {
            hoverPhone.value = false
        }

        const saveEmail = () => {
             editEmailRef.value.hide();
        }

        const openNoteEditor = () => {
            emit('opennoteeditor', true)
        }

        const openEmailModal = () => {
            emit('openemailmodal', true)
        }
        
        const openTaskEditor = () => {
            emit('opentaskeditor', true)
        }

        const call = () => {
            let sinchClient = new SinchClient({
                applicationKey: 'b1392f96-6a4b-4e44-bdf1-0e1f4dd2d1a0',
                capabilities: { calling: true },
            })
            var signUpObj = {};
                signUpObj.username = 'oladapo'
             
                    sinchClient.start(signUpObj, function () {
                        global_username = signUpObj.username;
                        // console.log(ticket)
                        //On success, show the UI
                    })
                    // let error = function (error) {
                    //     console.log(error)
                    // }
                    // console.log(error)
              
            }

        const toggleLog = (event) => {
            logDropDown.value.toggle(event);

        }

        const toggleLogPane = (e) => {
            logDropDown.value.hide();
            displayLogPane.value = true;
            console.log(e)
            if (e.target.innerText.toLowerCase() === "log a call") {
                logVariable.value = "call"
            }   else {
                logVariable.value = "email"
            }
        }

        const toggleContact = (event) => {
            contactRef.value.toggle(event);
        }
        
        const toggleOutcome = (event) => {
            outcomeRef.value.toggle(event);
        }
        
        const toggleTime = (event) => {
            timeRef.value.toggle(event);
        }

        const saveLog = () => {
            displayLogPane.value = false;
            emit('calllogdesc', { desc: callLogDesc.value, type: 'callLog' })
        }

        watch(() => {
            if (props.callLog) {
                displayLogPane.value = true
                emit('resetlog', false)
            }
        })




        return {
            selectedContact,
            contacts,
            lifeCycle,
            selectedLifeCycle,
            selectedLeadStatus,
            leadStatus,
            editEmail,
            editEmailRef,
            editContactName,
            contactNameRef,
            onHoverBorder,
            outHoverBorder,
            hoverTask,
            hoverPhone,
            toggleHoverPhone,
            OutHoverPhone,
            phoneNumber,
            email,
            saveEmail,
            openNoteEditor,
            openEmailModal,
            openTaskEditor,
            call,
            toggleLog,
            logDropDown,
            toggleLogPane,
            position,
            displayLogPane,
            toggleContact,
            contactRef,
            outcomeRef,
            toggleOutcome,
            date,
            toggleTime,
            timeRef,
            logVariable,
            outcomeList,
            selectedContactLog,
            callLogDesc,
            saveLog
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
    color: #136acdd5
}

.btn-btn {
    font-size: 12px;
    line-height: 14px;
    padding: 5px 12px;
    border-radius: 3px;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    font-weight: 400;
    text-align: center;
}

.save-btn {
    background-color: #425b76;
    border: 1px solid #425b76;
    color: #fff;    
}

.cancel-btn {
    background-color: #eaf0f6;
    border-color: #cbd6e2;
    color: #506e91; 
}

.task-border {
    border: 2px solid transparent;
    border-radius: 3px;
}

/* .task-border.border-transparent {
    border: transparent
} */
.hover-border {
    border: 2px solid #1269cea6;
    border-radius: 3px;
}

.phone-input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #cbd6e2;
    border-radius: 0
}

.phone-details {
    position: absolute;
    top: 30em;
    right: 2em;
    z-index: 1;
}

.hover-log:hover {
    background: rgba(202, 202, 202, 0.356);
    cursor: pointer
}

.hover-cursor-cancel:hover {
    cursor: not-allowed;
}
</style>