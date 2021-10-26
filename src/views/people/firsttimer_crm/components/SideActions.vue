<template>
    <div class="container">
        <div class="row d-flex justify-content-between mt-3">
            <div class="col font-weight-700 uniform-primary-color">Contacts</div>
            <div class="col font-weight-700 text-right uniform-primary-color">Actions <i class="pi pi-angle-down"></i></div>
        </div>
        <div class="row mt-5">
            <div class="col-6 offset-3 d-flex justify-content-center">
                <img :src="personDetails.pictureUrl" class="contact-image w-100 h-100" v-if="personDetails.pictureUrl"/>
                <img src="../../../../assets/people/phone-import.svg" class="contact-image" v-else/>
            </div>
            <div class="col-12 text-center">
                <div class="contact-name">{{ `${personDetails.firstName ? personDetails.firstName : ""} ${personDetails.lastName ? personDetails.lastName : ""}` }}</div>
                <div>{{ personDetails.email }}</div>
                <div><i class="pi pi-pencil uniform-primary-color c-pointer" @click="editContactName"></i></div>
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
            <!-- @click="call" -->
            <div class="ml-4 c-pointer"  @click="toggleCallSms">
                <div class="icon-bg" v-tooltip.top="'Make a phone call'"><i class="pi pi-phone"></i></div>
                <div>Reach</div>
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
                <i class="pi pi-angle-up uniform-primary-color c-pointer" :class="{ 'unroll-icon' : !contactIcon, 'roll-icon' : contactIcon }" @click="toggleContactIcon"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span class="font-weight-700">About This Contact</span>
            </div>
        </div>
        <div class="row" :class="{ 'hide-contact' : !contactIcon, 'show-contact' : contactIcon }">
            <div class="col-12">
            <div class="row mt-4">
                <div class="col-12 label-text">Email</div>
                <div class="col-12 mt-2 ">
                    <div class="task-border border-transparent d-flex justify-content-between p-2" :class="{ 'hover-border' : hoverTask }" @mouseover="onHoverBorder" @mouseleave="outHoverBorder" @click="editEmail">
                        <div>{{ personDetails.email }}</div>
                    <i class="pi pi-pencil align-self-center" :class="{ 'uniform-primary-color' : hoverTask, 'text-white' : !hoverTask }"></i>
                        </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12 label-text">Phone Number</div>
                <div class="col-12 mt-2 ">
                    <div class="task-border border-transparent d-flex justify-content-between p-2" :class="{ 'hover-border' : hoverPhone }" @mouseover="toggleHoverPhone" @mouseleave="OutHoverPhone" @click="editPhone">
                        <div>{{ personDetails.phoneNumber }}</div>
                    <i class="pi pi-pencil align-self-center" :class="{ 'uniform-primary-color' : hoverTask, 'text-white' : !hoverPhone }"></i>
                        </div>
                </div>
            </div>
            <!-- <div class="row" @mouseover="toggleHoverPhone" @mouseleave="OutHoverPhone">
                <div class="col-12 mt-4 label-text">Phone Number</div>
                <div class="col-12 ml-2 mt-3" v-if="!hoverPhone">{{ personDetails.phoneNumber }}</div>
                <div v-else class="col-12 mt-2">
                    <input type="text" class="form-control phone-input" @blur="OutHoverPhone" v-model="personDetails.phoneNumber"/>
                </div>
                
            </div> -->
            <div class="row">
                <div class="col-12 mt-4 label-text">Contact owner</div>
                <div class="col-12 mt-2">
                    <!-- <Contacts /> -->
                    <!-- <Dropdown v-model="selectedContact" :options="contacts" :filter="true" class="w-100 phone-input" optionLabel="firstName" placeholder="Select Contact" /> -->
                    <!-- <Dropdown v-model="selectedContact" :options="contacts" optionLabel="firstName" :filter="true" placeholder="Select a contact" :showClear="false" class="w-100 phone-input" @change="updateOwner">
                        <template #value="slotProps">
                            <div class="country-item country-item-value" v-if="slotProps.value">

                                <div>{{slotProps.value.firstName}} {{slotProps.value.lastName}}</div>
                            </div>
                            <span v-else>
                                {{slotProps.placeholder}}
                            </span>
                        </template>
                        <template #option="slotProps">
                            <div class="country-item">
                             
                                <div>{{slotProps.option.firstName}} {{slotProps.option.lastName}}</div>
                            </div>
                        </template>
                    </Dropdown> -->
                    <SearchMember v-bind:currentMember="selectedContact" @memberdetail="updateOwner" :stylesidebarinput="true"/>
                </div>
                <!-- <div class="col-5 align-self-center">
                    <i class="pi pi-pencil icon-edit"></i> <button class="ml-2 details-btn">Details</button>
                </div> -->
            </div>
            <!-- <div class="row">
                <div class="col-12 mt-4 label-text">Last contacted</div>
                <div class="col-12 mt-2">
                    12/05/2012 11:59 PM GMT+1
                </div>
            </div> -->
            <div class="row">
                <div class="col-12 mt-4 label-text">Lifecycle stage</div>
                <div class="col-12">
                    <Dropdown v-model="selectedLifeCycle" :options="lifeCycle" class="w-100 phone-input" optionLabel="name" placeholder="Select Contact" @change="updateLifeCycle"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12 label-text mt-4">Lead Status</div>
                <div class="col-12 mt-2">
                    <Dropdown v-model="selectedLeadStatus" :filter="false" :options="leadStatus" class="w-100 phone-input" optionLabel="name" placeholder="Select status" @change="updateLeadStatus" />
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 mt-4 font-weight-700">
                <i class="pi pi-angle-up uniform-primary-color c-pointer" :class="{ 'unroll-icon' : !moreIcon, 'roll-icon' : moreIcon }" @click="toggleMoreIcon"></i>&nbsp;&nbsp;&nbsp;&nbsp;More
            </div>
            <div class="col-12" :class="{ 'hide-contact' : !moreIcon, 'show-contact' : moreIcon }">
                <div class="row">
                    <div class="col-12 mt-4 label-text">Gender</div>
                    <div class="col-12 mt-2">
                        <Dropdown :options="genders" class="w-100 phone-input" optionLabel="value" v-model="selectedGender" placeholder="Select option" />
                    </div>
                    <div class="col-12 mt-4 label-text">Marital Status</div>
                    <div class="col-12 mt-2">
                        <Dropdown v-model="selectedMaritalStatus" :options="maritalStatus" optionLabel="value" class="w-100 phone-input" placeholder="Select option" />
                    </div>
                    <div class="col-12 mt-4 label-text">Date of birth</div>
                    <div class="col-4 mt-2">
                        <Dropdown v-model="selectedBirthday" :options="day" class="w-100 phone-input" placeholder="Day" />
                    </div>
                    <div class="col-4 mt-2">
                        <Dropdown v-model="selectedBirthMonth" :options="month" class="w-100 phone-input" placeholder="Month" />
                    </div>
                    <div class="col-4 mt-2">
                        <Dropdown v-model="selectedBirthYear" :options="year" class="w-100 phone-input" placeholder="Year" />
                    </div>
                    <div class="col-12 mt-4 label-text">Address</div>
                    <div class="col-12 mt-2">
                        <div class="task-border border-transparent d-flex justify-content-between p-2" :class="{ 'hover-border' : hoverPhone }" @mouseover="toggleHoverPhone" @mouseleave="OutHoverPhone" @click="editAddress">
                            <div>{{ personDetails.address }}</div>
                            <i class="pi pi-pencil align-self-center" :class="{ 'uniform-primary-color' : hoverTask, 'text-white' : !hoverPhone }"></i>
                            </div>
                
                    </div>
                    <div class="col-12 mt-4 label-text">Event of service attended</div>
                    <div class="col-12 mt-2">
                        <div class="dropdown">
                            <div class="cursor-pointer phone-input d-flex justify-content-between" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div>{{ Object.keys(selectedEventAttended).length > 0 ? selectedEventAttended.name : personDetails.activityID && eventsAttended.length > 0 ? eventsAttended.find(i => {
                                    if (i.activityID == personDetails.activityID) return i
                                    return 'no id'
                                }).name : "Select event attended" }}</div>
                                <div><i class="pi pi-chevron-down"></i></div>
                            </div>
                            <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                    <input
                                    type="text"
                                    class="form-control dd dd-search-field"
                                    v-model="eventsSearchString"
                                    placeholder="search for event"
                                    />
   
                                <a
                                    class="dropdown-item cursor-pointer py-2"
                                    v-for="(event, index) in eventsAttended"
                                    :key="index"
                                    @click="eventAttendedSelected(event)"
                                >
                                    {{ event.name }}
                                </a>
                                <a
                                    class="text-center mb-1 mt-1 py-1"
                                    v-if="
                                    eventsSearchString &&
                                    eventsAttended.length > 0 &&
                                    filteredEvents.length === 0
                                    "
                                >
                                    No match found
                                </a>
                                        
                            </div>
                            </div>
                        <!-- <div class="task-border border-transparent d-flex justify-content-between p-2" :class="{ 'hover-border' : hoverPhone }" @mouseover="toggleHoverPhone" @mouseleave="OutHoverPhone" @click="editAddress">
                            <div>{{ personDetails.address }}</div>
                            <i class="pi pi-pencil align-self-center" :class="{ 'uniform-primary-color' : hoverTask, 'text-white' : !hoverPhone }"></i>
                            </div> -->
                
                    </div>
                </div>
            </div>

            
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 mt-4 font-weight-700">
                <i class="pi pi-angle-up uniform-primary-color c-pointer" :class="{ 'unroll-icon' : !insightIcon, 'roll-icon' : insightIcon }" @click="toggleInsightIcon"></i>&nbsp;&nbsp;&nbsp;&nbsp;Insights
            </div>
            <div class="col-12" :class="{ 'hide-contact' : !insightIcon, 'show-contact' : insightIcon }">
                <div class="row">
                    <div class="col-12 mt-4 label-text">How did you hear about us</div>
                    <div class="col-12 mt-2">
                        <Dropdown :options="aboutUsSource" class="w-100 phone-input" optionLabel="name" v-model="selectedAboutUsSource" placeholder="Select option" />
                    </div>
                    <div class="col-12 mt-4 label-text">Preferred means of communication</div>
                    <div class="col-12 mt-2">
                        <Dropdown v-model="selectedCommunicationMeans" :options="communicationMeans" optionLabel="name" class="w-100 phone-input" placeholder="Select option" />
                    </div>
                    <div class="col-12 mt-4 label-text">Are you interested in joining us?</div>
                    <div class="col-12 mt-2">
                        <Dropdown v-model="selectedJoinInterest" :options="joinInterestArr" optionLabel="name" class="w-100 phone-input" placeholder="Select option" />
                    </div>
                    <div class="col-12 mt-4 label-text">Would you like to be visited?</div>
                    <div class="col-12 mt-2">
                        <Dropdown v-model="selectedVisitOption" :options="wantVisitArr" optionLabel="name" class="w-100 phone-input" placeholder="Select option" />
                    </div>
                </div>
            </div>

            <!-- <div class="cancel-btn btn-btn col-2 offset-3 ml-3 p-2 mt-3" @click="cancelTaskEdit">Cancel</div> -->
            <div class="p-2 offset-3 col-6 mt-3 save-btn btn-btn c-pointer" @click="editBasicDetails">Update</div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 mt-2 pb-5">
                        
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
                <div class="offset-1 p-2 col-2 mt-3 ml-3 save-btn btn-btn c-pointer" @click="editBasicDetails">Save</div>
                <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3 c-pointer" @click="cancelEmailEdit">Cancel</div>
            </div>
        </div>
        </OverlayPanel>
    
    <OverlayPanel ref="phoneRef" appendTo="body" :showCloseIcon="false" id="overlay_panel" style="width: 450px" :breakpoints="{'960px': '75vw'}">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div>Phone Number</div>
                    <input v-model="personDetails.phoneNumber" class="form-control mt-3"/>
                </div>
            </div>
            <div class="row">
                <div class="offset-1 p-2 col-2 mt-3 ml-3 save-btn btn-btn c-pointer" @click="editBasicDetails">Save</div>
                <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3 c-pointer" @click="cancelPhoneEdit">Cancel</div>
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
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="offset-1 p-2 col-2 mt-3 ml-3 save-btn btn-btn c-pointer" @click="editBasicDetails">Save</div>
                <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3 c-pointer" @click="cancelContactName">Cancel</div>
            </div>
        </div>
        </OverlayPanel>

        <OverlayPanel ref="addressRef" appendTo="body" :showCloseIcon="false" id="overlay_panel" style="width: 450px" :breakpoints="{'960px': '75vw'}">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div>Address</div>
                    <input v-model="personDetails.address" class="form-control mt-3"/>
                </div>
            </div>
            <div class="row">
                <div class="offset-1 p-2 col-2 mt-3 ml-3 save-btn btn-btn c-pointer" @click="editBasicDetails">Save</div>
                <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3 c-pointer" @click="cancelPhoneEdit">Cancel</div>
            </div>
        </div>
        </OverlayPanel>

        <OverlayPanel ref="logDropDown" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                    <div class="container-fluid p-0">
                        <div class="row hover-log" v-for="(item, index) in activityLogs" :key="index">
                            <div class="py-2 px-3 " @click="toggleLogPane($event, item)">{{ item.value }}</div>
                        </div>
                    </div>
        </OverlayPanel>
        
        <OverlayPanel ref="callDropDown" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                    <div class="container-fluid p-0">
                        <div class="row">
                            <div class="py-2 px-3 col-12 hover-log" @click="toggleCallSmsPane($event)">Call</div>
                            <div class="py-2 px-3 col-12 hover-log" @click="toggleCallSmsPane($event)">SMS</div>
                        </div>
                    </div>
        </OverlayPanel>

        <!-- Log Pane -->
        <Dialog :header="'Log ' + selectedLog.value" v-model:visible="displayLogPane" :style="{width: '50vw'}" :position="position" :modal="true">
            <!-- style="height: 480px" -->
           <div class="container-fluid">
               <div class="row">
                   <div class="col-6 pl-0">
                       <div class="label-text">Contacted</div>
                       <div @click="toggleContact" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700 mt-1 c-pointer">{{ selectedContactLog }} &nbsp; <i class="pi pi-sort-down"></i></div>
                       <OverlayPanel ref="contactRef" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                            <div class="container p-0">
                                <div class="row">
                                    <div class="col-12 py-2 px-3 hover-cursor-cancel">{{ `${personDetails.firstName} ${personDetails.lastName}(${selectedLog.value === 'email' ? personDetails.email : personDetails.phoneNumber})`}}</div>
                                </div>
                            </div>
                        </OverlayPanel>
                   </div>
                   <div class="col-6 pr-0">
                       <div class="label-text">{{ selectedLog.value }} Outcome</div>
                       <div class="mt-1 uniform-primary-color font-weight-700 c-pointer" @click="toggleOutcome" aria:haspopup="true" aria-controls="overlay_panel">{{ Object.keys(selectedCallOutcome).length > 0 ? selectedCallOutcome.value : "Select an outcome &nbsp;" }} <i class="pi pi-sort-down"></i></div>
                       <OverlayPanel ref="outcomeRef" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                            <div class="container-fluid p-0">
                                <div class="row" v-for="(item, index) in outcomeList" :key="index">
                                    <div class="col-12 py-2 px-3 hover-log" @click="chooseCallOutcome(item)">{{ item.value }}</div>
                                </div>
                            </div>
                        </OverlayPanel>
                   </div>
               </div>
               <!-- <div class="row mt-2">
                   <div class="col-6">
                       <div class="label-text">Date</div>
                       <div class="mt-1 uniform-primary-color font-weight-700">
                           <input type="date" class="form-control" />
                       </div>
                   </div>
                   <div class="col-6">
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
               </div> -->
               <!-- <div class="row">
                   <div class="col-12">
                       <hr />
                   </div>
               </div> -->
               <div class="row mt-3">
                   <div class="col-12 p-0">
                       <textarea name="" :placeholder="`Describe the ${selectedLog.value}...`" class="w-100 form-control" rows="6" v-model="callLogDesc"></textarea>
                   </div>
               </div>
               <div class="row d-flex justify-content-start mt-3">
                    <div class="primary-bg default-btn border-0 text-white text-center c-pointer" @click="saveLog">Save</div>
                </div>
           </div>
        </Dialog>
       
        <!-- SMS Pane -->
        <Dialog header="Send SMS" v-model:visible="displaySMSPane" :style="{width: '50vw'}" :position="position" :modal="true">
           <div class="container-fluid">
               <div class="row mt-3">
                   <div class="p-0 col-md-12">
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle small-text border w-100 text-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <!-- @click="closeDropdownIfOpen" -->
                            {{ Object.keys(selectedSender).length > 0 ? selectedSender.mask : "Select Sender Id" }}
                            </button>
                            <div
                            class="dropdown-menu w-100 pb-0 border-0"
                            aria-labelledby="dropdownMenuButton"
                            >
                            <div class="px-2">
 
                            </div>
                            <a v-for="(item, index) in senderIDs" :key="index"
                                class="dropdown-item c-pointer small-text  py-2" @click="setIdToSubject(item)"
                                >{{ item.mask }}
                            </a>
                            <a
                                class="dropdown-item c-pointer text-center create-new-bg border-top py-2" data-toggle="modal" data-target="#senderIdModal"
                                ><i class="pi pi-plus-circle"></i>&nbsp;Request new sender id
                                </a
                            >
                            </div>
                        </div>
                        </div>
                   <div class="col-12 p-0 mt-3">
                       <textarea name="" placeholder="Type your message here ..." class="w-100 form-control" rows="12" v-model="smsMessage"></textarea>
                   </div>
               </div>
               <div class="row d-flex justify-content-start mt-3">
                    <div class="primary-bg default-btn border-0 text-white text-center c-pointer" @click="sendSms">Send</div>
                </div>
           </div>
        </Dialog>
    <Toast />
</template>

<script>
import { computed, ref, watchEffect } from "vue"
import Dropdown from "primevue/dropdown";
import Tooltip from 'primevue/tooltip';
import OverlayPanel from 'primevue/overlaypanel';
import axios from "@/gateway/backendapi";
import lookupTable from "../../../../services/lookup/lookupservice"
import { useRoute } from "vue-router"
import frmservice from "@/services/FRM/firsttimermanagement"
import { useStore } from "vuex";
// import MultiSelect from 'primevue/multiselect';
// import SinchClient from 'sinch-rtc/sinch.min.js'
// import { useConfirm } from "primevue/useConfirm";
import { useToast } from "primevue/usetoast";
import SearchMember from "../../../../components/membership/MembersSearch.vue"
export default {
    components: {
        Dropdown,
        OverlayPanel,
        SearchMember
    },
    directives: {
        'tooltip': Tooltip
    },
    emits: ["opennoteeditor", "openemailmodal", "opentaskeditor", "calllogdesc", "resetlog", "allcontact","updatelogtoview"],
    props: ["personDetails", "callLog", "activityType"],
    setup (props, { emit }) {
        // const confirm = useConfirm()
        const toast = useToast()
        const route = useRoute()
        const store = useStore()
        const selectedContact = ref({})
        const contacts = ref([])
        const lifeCycle = ref([])
        const selectedLifeCycle = ref("")
        const leadStatus = ref(frmservice.leadStatus())
        const outcomeList = ref([])
        const selectedLeadStatus = ref("")
        const editEmailRef = ref()
        const phoneRef = ref()
        const contactNameRef = ref()
        const hoverTask = ref(false)
        const hoverPhone = ref(false)
        const phoneNumber = ref(8076543254)
        const email = ref('olad@gamil.com')
        const logDropDown = ref(false)
        const callDropDown = ref(false)
        const position = ref('bottomright')
        const displayLogPane = ref(false)
        const displaySMSPane = ref(false)
        const contactRef = ref(false)
        const outcomeRef = ref(false)
        const selectedCallOutcome = ref({})
        const date = ref("")
        const timeRef = ref(false)
        const addressRef = ref()
        const callLogDesc = ref("")
        const contactIcon = ref(true)
        const insightIcon = ref(false)
        const moreIcon = ref(false)
        const aboutUsSource = ref([])
        const selectedAboutUsSource = ref({})
        const communicationMeans = ref([ { name: "Call", id: 0 }, { name: "Email", id: 1 }, { name: "Visit", id: 2 }, { name: "SMS", id: 3 } ]);
        const selectedCommunicationMeans = ref(null);
        const joinInterestArr = ref([ { name: "Yes", id: 0 }, { name: "No", id:1 }, { name: "Maybe", id: 2 }, { name: "On Transit", id: 3 } ]);
        const selectedJoinInterest = ref(null);
        const wantVisitArr = ref([ { name: "Yes", id: 0 }, { name: "No", id: 1 }, { name: "Maybe", id: 2 }, { name: "On Transit", id: 3 } ]);
        const selectedVisitOption = ref(null);
        const selectedLog = ref({})
        const smsMessage = ref("")
        const isoCode = ref("")
        const eventsSearchString = ref("")
        const eventsAttended = ref([])
        const selectedEventAttended = ref({})
        const genders = ref([])
        const maritalStatus = ref([])
        const selectedGender = ref({})
        const selectedMaritalStatus = ref({})
        const day = ref([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 ]);
        const month = ref([ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]);
        const selectedBirthday = ref("")
        const selectedBirthMonth = ref("")
        const selectedBirthYear = ref("")
        const activityLogs = ref([])
        const selectedSender = ref({})
        const senderIDs = ref([])
        const subject = ref("")


        const selectedContactLog = computed(() => {
            if (!props.personDetails) return "Select a contact"
            return `${props.personDetails.firstName} ${props.personDetails.lastName}`
        })

        const editEmail = (event) => {
            editEmailRef.value.toggle(event);
        };
        
        const editPhone = (event) => {
            phoneRef.value.toggle(event);
        };
        
        const editAddress = (event) => {
            addressRef.value.toggle(event);
        };
        
        const editContactName = (event) => {
            contactNameRef.value.toggle(event);
        };
        
        const cancelContactName = () => {
            contactNameRef.value.hide();
        };

        const cancelEmailEdit = () => {
            editEmailRef.value.hide()
        }
        
        const cancelPhoneEdit = () => {
            phoneRef.value.hide()
        }

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
            // let sinchClient = new SinchClient({
            //     applicationKey: 'b1392f96-6a4b-4e44-bdf1-0e1f4dd2d1a0',
            //     capabilities: { calling: true },
            // })
            // var signUpObj = {};
            //     signUpObj.username = 'oladapo'
             
            //         sinchClient.start(signUpObj, function () {
            //             global_username = signUpObj.username;
            //             // console.log(ticket)
            //             //On success, show the UI
            //         })
                    // let error = function (error) {
                    //     console.log(error)
                    // }
                    // console.log(error)
              
            }

        const toggleCallSms = (event) => {
            callDropDown.value.toggle(event);
        }

        const toggleLog = (event) => {
            logDropDown.value.toggle(event);

        }

        const toggleLogPane = (e, item) => {
            logDropDown.value.hide();
            displayLogPane.value = true;
            console.log(e)
            selectedLog.value = item
        }
        
        const toggleCallSmsPane = (e) => {
            callDropDown.value.hide();
            if (e.target.innerText.toLowerCase() === "call") {
                call()
            }   else {
                console.log('sms')
                toggleSMSPane()
            }
        }

        const toggleSMSPane = () => {
            callDropDown.value.hide();
            displaySMSPane.value = true;
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

        const saveLog = async() => {
            displayLogPane.value = false;
            // emit('calllogdesc', { desc: callLogDesc.value, type: selectedLog.value.value })

            let body = {
                outcome: selectedCallOutcome.value.id,
                description: callLogDesc.value,
                firsttimerID: route.params.personId,
                type: selectedLog.value.id
            }

            try {
                let data = await frmservice.createLog(body)
                console.log(data)
                emit('updatelogtoview')
                callLogDesc.value = ""
            }
            catch (err) {
                console.log(err)
            }
        }

        const getIsoCode = () => {
            if (store.getters.currentUser && store.getters.currentUser.isoCode) {
            isoCode.value = store.getters.currentUser.isoCode;
            } else {
            axios
                .get("/api/Membership/GetCurrentSignedInUser")
                .then((res) => {
                isoCode.value = res.data.isoCode;
                })
                .catch((err) => console.log(err));
            }
        }
        getIsoCode()

        const setIdToSubject = (item) => {
            console.log(item)
            subject.value = item.mask
            selectedSender.value = item
        }

        const sendSms = async() => {
            let body = {
                subject: subject.value,
                message: smsMessage.value,
                toOthers: props.personDetails.phoneNumber,
                isoCode: isoCode.value,
                gateWayToUse: "hybridKonnect",
                ispersonalized: true,
                category: "",
                contacts: [],
                emailAddress: "",
                emailDisplayName: "",
                groupedContacts: [],
            }
            console.log(body)
            try {
                let res = await frmservice.sendSms(route.params.personId, body)
                console.log(res)
                displaySMSPane.value = false
                emit("updatelogtoview")
            }
            catch (err) {
                console.log(err)
            }
        }

        watchEffect(() => {
            if (props.callLog) {
                displayLogPane.value = true
                emit('resetlog', false)
            }
        })

        const toggleContactIcon = () => {
            // toggle icon state
            contactIcon.value = !contactIcon.value
        }
        
        const toggleInsightIcon = () => {
            insightIcon.value = !insightIcon.value
        }
        
        const toggleMoreIcon = () => {
            moreIcon.value = !moreIcon.value
        }

        const getKnowlegdeSource = async() => {
            try {
                let { data } = await axios.get("/api/membership/howyouheardaboutus")
                console.log(data)
                aboutUsSource.value = data
            } catch (error) {
                console.log(error)
            }
        }
        getKnowlegdeSource()

        const getCallOutcome = async () => {
            try {
                let data = await lookupTable.getLookUps()
                console.log(data)
                outcomeList.value = data.outcome
                genders.value = data.genders
                maritalStatus.value = data.maritalStatus
            }
            catch (err) {
                console.log(err)
            }
        }
        getCallOutcome()

        const chooseCallOutcome = (outcome) => {
            selectedCallOutcome.value = outcome
            outcomeRef.value.hide()
        }

        const getMembers = async () => {
          try {
            const { data } = await axios.get('/api/People/GetPeopleBasicInfo');
            contacts.value = data;
            emit('allcontact', data)
          } catch (error) {
            console.log(error);
          }
        };
        getMembers();

        const updateOwner = async(payload) => {
            const body = {
                firstTimerID: route.params.personId,
                ownerID: payload.id
            }
            try {
                let res = await frmservice.updateContactOwner(route.params.personId, body)
                console.log(res)
                emit('updatelogtoview')
            }
            catch (err) {
                console.log(err)
            }

        }
        
        const getLifeCycle = async() => {
            try {
                let res = await frmservice.getLifeCycle()
                console.log(res)
                lifeCycle.value = res.returnObject
            }
            catch (err) {
                console.log(err)
            }

        }
        getLifeCycle()

        const updateLifeCycle = async() => {
            const payload = {
                firstTimerID: route.params.personId,
                stageID: selectedLifeCycle.value.id
            }
            try {
                let res = await frmservice.updateLifeCycle(route.params.personId, payload)
                console.log(res)
                emit('updatelogtoview')
            }
            catch (err) {
                console.log(err)
            }

        }

        const year = computed(() => {
            const arrOfYears = [];
            let currentYear = new Date().getFullYear();
            while (arrOfYears.length <= 100) {
                arrOfYears.push(currentYear);
                currentYear = currentYear - 1;
            }
            return arrOfYears;
        });

        watchEffect(() => {
            if (props.personDetails && lifeCycle.value.length > 0) {
                selectedLifeCycle.value = lifeCycle.value.find(i => i.id === props.personDetails.firstTimerCycleStageID)
            }
            
            if (props.personDetails && contacts.value.length > 0) {
                selectedContact.value = contacts.value.find(i => i.id === props.personDetails.contactOwnerID)
            }

            if (props.personDetails && leadStatus.value.length > 0) {
                selectedLeadStatus.value = leadStatus.value.find(i => i.id === props.personDetails.leadStatus)
            }

            if (props.personDetails) {
                selectedCommunicationMeans.value = communicationMeans.value.find(i => i.id === props.personDetails.communicationMeans)
                selectedAboutUsSource.value = aboutUsSource.value.find(i => i.id === props.personDetails.howDidYouAboutUsId)
                selectedJoinInterest.value = joinInterestArr.value.find(i => i.id === props.personDetails.interestedInJoining)
                selectedVisitOption.value = wantVisitArr.value.find(i => i.id === props.personDetails.wantsToBeVisited)
                selectedGender.value = genders.value.find(i => i.id === props.personDetails.genderId)
                selectedMaritalStatus.value = maritalStatus.value.find(i => i.id === props.personDetails.maritalStatusId)
                selectedBirthday.value = day.value.find(i => i == props.personDetails.birthday)
                selectedBirthMonth.value = month.value[Number(props.personDetails.birthMonth) - 1]
                selectedBirthYear.value = year.value.find(i => i == props.personDetails.birthYear)
            }
        })

        const updateLeadStatus = async() => {
            try {
                let res = await frmservice.updateLeadStatus(route.params.personId, selectedLeadStatus.value.id)
                console.log(res)
                emit('updatelogtoview')
            }
            catch (err) {
                console.log(err)
            }
        }

        const getEvents = () => {
            axios.get("/api/Events/EventActivity").then((res) => {
                eventsAttended.value = res.data;
            });
        }
        getEvents()

        const eventAttendedSelected = (event) => {
            selectedEventAttended.value = event
        }

        const editBasicDetails = async() => {
            let payload = {
                personId: route.params.personId,
                email: props.personDetails.email,
                firstName: props.personDetails.firstName,
                lastName: props.personDetails.lastName,
                phoneNumber: props.personDetails.phoneNumber,
                address: props.personDetails.address,
                activityID: selectedEventAttended.value && Object.keys(selectedEventAttended.value).length > 0 ? selectedEventAttended.value.activityID : props.personDetails.activityID,
                howDidYouAboutUsId: selectedAboutUsSource.value ? selectedAboutUsSource.value.id : 0,
                communicationMeans: selectedCommunicationMeans.value ? selectedCommunicationMeans.value.id : 0,
                interestedInJoining: selectedJoinInterest.value ? selectedJoinInterest.value.id : 0,
                wantsToBeVisited: selectedVisitOption.value ? selectedVisitOption.value.id : 0,
                genderId: selectedGender.value && Object.keys(selectedGender.value).length > 0 ? selectedGender.value.id : props.personDetails.genderId,
                maritalStatusId: selectedMaritalStatus.value && Object.keys(selectedMaritalStatus.value).length > 0 ? selectedMaritalStatus.value.id : props.personDetails.maritalStatusId,
                birthday: selectedBirthday.value ? selectedBirthday.value : props.personDetails.birthday,
                birthMonth: selectedBirthMonth.value ? month.value.findIndex(i => i == selectedBirthMonth.value) + 1 : props.personDetails.birthMonth,
                birthYear: selectedBirthYear.value ? selectedBirthYear.value : props.personDetails.birthYear,
                firstTimerId: route.params.personId
            }
            console.log(selectedBirthMonth.value)
            console.log(payload)

            try {
                let res = await frmservice.editBasicDetails(payload)
                console.log(res)
                toast.add({
                    severity: "success",
                    summary: "Success",
                    detail: "Updated successfully",
                    life: 5000,
                });
            }
            catch (err) {
                console.log(err)
                if (err.status === 400) {
                    toast.add({
                    severity: "warn",
                    summary: "Empty fields present",
                    detail: "Please fill other fields",
                    life: 5000,
                });
                }
            }
            contactNameRef.value.hide();
            editEmailRef.value.hide();
            phoneRef.value.hide();
            addressRef.value.hide();
        }
        
        watchEffect(() => {
            activityLogs.value = props.activityType.filter(i => i.id !== 96)
        })

        const getSenderId = async() => {
        try {
            let { data } = await axios.get(`/api/Messaging/RetrieveTenantSenderIDs`)
            console.log(data)
            senderIDs.value = data.returnObject
            }
            catch (err) {
                console.log(err)
            }
        }
        getSenderId()


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
            cancelContactName,
            onHoverBorder,
            outHoverBorder,
            hoverTask,
            hoverPhone,
            toggleHoverPhone,
            OutHoverPhone,
            phoneNumber,
            email,
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
            outcomeList,
            selectedCallOutcome,
            chooseCallOutcome,
            selectedContactLog,
            callLogDesc,
            saveLog,
            toggleContactIcon,
            contactIcon,
            insightIcon,
            moreIcon,
            toggleInsightIcon,
            toggleMoreIcon,
            aboutUsSource,
            selectedAboutUsSource,
            communicationMeans,
            selectedCommunicationMeans,
            joinInterestArr,
            selectedJoinInterest,
            wantVisitArr,
            selectedVisitOption,
            updateOwner,
            updateLifeCycle,
            selectedLog,
            updateLeadStatus,
            callDropDown,
            toggleCallSms,
            toggleCallSmsPane,
            displaySMSPane,
            sendSms,
            smsMessage,
            isoCode,
            editBasicDetails,
            phoneRef,
            cancelEmailEdit,
            cancelPhoneEdit,
            editPhone,
            editAddress,
            addressRef,
            eventsAttended,
            eventsSearchString,
            selectedEventAttended,
            eventAttendedSelected,
            genders,
            maritalStatus,
            selectedMaritalStatus,
            selectedGender,
            day,
            month,
            year,
            selectedBirthday,
            selectedBirthMonth,
            selectedBirthYear,
            activityLogs,
            selectedSender,
            senderIDs,
            setIdToSubject,
            subject
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
    width: 100px;
    height: 100px;
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

/* .phone-details {
    position: absolute;
    top: 30em;
    right: 2em;
    z-index: 1;
} */

.hover-log:hover {
    background: rgba(202, 202, 202, 0.356);
    cursor: pointer
}

.hover-cursor-cancel:hover {
    cursor: not-allowed;
}

.roll-icon {
    transition: all 0.5s ease-in-out;
    transform: rotateZ(180deg);
}
.unroll-icon {
    transition: all 0.5s ease-in-out;
    transform: rotateZ(0deg);
}

.hide-contact {
    height: 0;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
}

.show-contact {
    height: 480px;
    transition: all 0.5s ease-in-out;
    /* overflow: hidden; */
}

.dropdown-menu {
    height: 300px;
    overflow: scroll;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
}

.create-new-bg {
    background: #dadada;
    color: rgb(15, 71, 134)
}

.create-new-bg:hover {
  background: #dadadad2;
  color: rgb(15, 71, 134)
}
</style>