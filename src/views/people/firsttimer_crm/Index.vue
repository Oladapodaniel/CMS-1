<template>
    <div class="container-top container adjust-font">
        <div class="row">
            <div class="col-4 p-0 side-bar">
                <SideActions @opennoteeditor="openNoteEditor" @openemailmodal="openEmailModal" @opentaskeditor="openTaskEditor" :personDetails="personDetails" @calllogdesc="setCallLogDesc" :callLog="callLog" @resetlog="resetLog"/>
            </div>
            <div class="col-8 main-view">
                <div class="row">
                    <div class="col-6 mt-3">
                        <span class="p-input-icon-right">
                            <InputText type="text" placeholder="Search activities" />
                            <i class="pi pi-search uniform-primary-color" />
                        </span>
                    </div>
                    <!-- <div class="col-6 mt-3 border">
                        <SelectButton v-model="value1" :options="options" />
                    </div> -->
                </div>
                <div class="row">
                    <div class="col-2 pr-0 c-pointer" @click="toggleActivity">
                        <div class="p-3">Activity</div>
                        <div :class="{ 'baseline' : showActivity, 'hide-base' : !showActivity }"></div>
                    </div>
                    <div class="col-2 pr-0 c-pointer" @click="toggleNotes">
                        <div class="p-3">Notes</div>
                        <div :class="{ 'baseline' : showNotes, 'hide-base' : !showNotes }"></div>
                    </div>
                    <div class="col-2 pr-0 c-pointer" @click="toggleEmails">
                        <div class="p-3">Emails</div>
                        <div :class="{ 'baseline' : showEmails, 'hide-base' : !showEmails }"></div>
                    </div>
                    <div class="col-2 pr-0 c-pointer" @click="toggleCalls">
                        <div class="p-3">Calls</div>
                        <div :class="{ 'baseline' : showCalls, 'hide-base' : !showCalls }"></div>
                    </div>
                    <div class="col-2 pr-0 c-pointer" @click="toggleTasks">
                        <div class="p-3">Tasks</div>
                        <div :class="{ 'baseline' : showTasks, 'hide-base' : !showTasks }"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="border-top col-12 push-border-up"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-2">Filter by:</div>
                    <div class="col-7 font-weight-700 uniform-primary-color">Filter activity (19/21)</div>
                    <div class="col-3 font-weight-700 uniform-primary-color">All Users <span><i class="pi pi-sort-down"></i></span></div>
                </div>
              
                <div class="row mt-4">
                    <div class="col-12" v-if="showActivity" transition="bounce">
                        <Activity :activities="activities" :addNotes="noteList" @individualtoggle="setIconProp" :addTask="taskList" @individualtoggletask="setIconPropTask" :taskTime="taskTime" @individualcallicon="setIconPropLog" @edittask="setEditTaskProp" @edittask2="setEditTaskProp2" @savetask="saveTaskItem" @savetask2="saveTaskItem2" @hovertask="setHoverTaskProp" @outhovertask="setOutHoverTaskProp" @hovertask2="setHoverTaskProp2" @outhovertask2="setOutHoverTaskProp2"/>
                    </div>
                    <div class="col-12" v-if="showNotes" transition="bounce">
                        <Notes :addNotes="noteList" @individualtoggle="setIconProp" @opennoteeditor="openNoteEditor"/>
                    </div>
                    <div class="col-12" v-if="showEmails" transition="bounce">
                        <Emails @openemailmodal="openEmailModal"/>
                    </div>
                    <div class="col-12" v-if="showCalls" transition="bounce">
                        <Calls :personDetails="personDetails" :logList="logList" @individualcallicon="setCallLogIcon" @opencalllogpane="openCallLogPane" @hoverLog="setHoverLogProp" @outhoverLog="setOutHoverLogProp"/>
                    </div>
                    <div class="col-12" v-if="showTasks" transition="bounce">
                        <Tasks :addTask="taskList" @individualtoggletask="setIconPropTask" :taskTime="taskTime" @opentaskeditor="openTaskEditor" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Modal for Note -->
            
    <Dialog header="Create note" v-model:visible="displayPosition" :breakpoints="{'960px': '75vw'}" :style="{width: '50vw'}" :position="position" :modal="true">
        <Editor v-model="note" editorStyle="height: 320px"/>
        <template #footer>
            <div class="row d-flex justify-content-end">
                <div class="default-btn text-center">Cancel</div>
                <div class="primary-bg default-btn border-0 text-white text-center ml-3" @click="saveNote">Save</div>
            </div>
        </template>
    </Dialog>
   
   <!-- Modal for email -->
    <Dialog header="Compose
     email" v-model:visible="emailDisplayPosition" :breakpoints="{'960px': '75vw'}" :style="{width: '50vw'}" :position="position" :modal="true">
        <div class="container" style="height: 480px">
            <div class="row" v-if="!displayEmailPane">
                <div class="col-12 mt-3 font-weight-700 text-center">
                    Keep track of your email activity in your CRM
                </div>
                <div class="col-12 mt-3 text-center">
                    <!-- Connect your email account to Churchplus to begin sending emails from your CRM. All your email conversations will appear in the timeline below.Learn more -->
                    Send an email from your FRM to Micheal Jordan. All email and conversations will appear in the timeline below.
                </div>
                <!-- <div class="col-4 mt-5">
                    <div class="mail-connect">
                        <div>
                            <img src="../../../assets/gmail.svg"/>
                        </div>
                        <div class="mt-3">Connect Gmail</div>
                    </div>
                </div>
                 <div class="col-4 mt-5">
                    <div class="mail-connect">
                        <div>
                            <img src="../../../assets/outlook-365.png" style="width: 43px"/>
                        </div>
                        <div class="mt-3">Connect Office 365</div>
                    </div>
                </div> -->
                <div class="offset-4 col-4 mt-5" @click="toggleDisplayEmailPane">
                    <div class="mail-connect">
                        <div>
                            <img src="../../../assets/unknown-email.svg"/>
                        </div>
                        <div class="mt-3">Compose Email</div>
                    </div>
                </div>
            </div>
            <div class="row" v-else>
                <div class="col-12 mt-3">
                    <!-- <input type="text" class="form-control" value="oladapoadniel@gmail.com" disabled/> -->
                    <span class="p-float-label">
                        <InputText id="inputtext" class="w-100" style="border-radius: 0.25rem !important; border: 1px solid #ced4da !important;" type="text" disabled/>
                        <label for="inputtext">{{ personDetails.email }}</label>
                    </span>
                </div>
                <div class="col-12 mt-4">
                    <!-- <input type="text" class="form-control" v-model="emailSubject" placeholder="subject"/> -->
                    <span class="p-float-label">
                        <InputText id="inputtext" class="w-100" style="border-radius: 0.25rem !important; border: 1px solid #ced4da !important;" type="text" />
                        <label for="inputtext">Enter your subject</label>
                    </span>
                </div>
                <div class="col-12 mt-3">
                    <Editor v-model="emailBody" editorStyle="height: 260px"/>
                </div>
                <div class="col-12 mt-2 d-flex justify-content-end">
                    <Button label="Send" icon="pi pi-check"  autofocus />
                    <div class="primary-bg default-btn border-0 text-white text-center ml-3" @click="sendEmail">Send</div>
                </div>
            </div>
        </div>
        
        <!-- <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" />
            <Button label="Yes" icon="pi pi-check" @click="saveNote" autofocus />
        </template> -->
    </Dialog>


    <!-- Modal for task -->
     <Dialog header="Create task" v-model:visible="taskDisplayPosition" :breakpoints="{'960px': '75vw'}" :style="{width: '50vw'}" :position="position" :modal="true">
        <div class="container" style="height: 480px">
            <div class="row mt-3">
               <div class="row">
                        <div class="col-12">
                            <textarea class="form-control col-12" placeholder="Enter your task" v-model="theTask"></textarea>
                        </div>
                        <div class="col-8 label-text mt-3">Due date</div>
                        <div class="col-4 label-text mt-3">Reminder</div>
                        <div class="col-4 mt-2">
                            <div @click="toggle" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700">
                                In 3 business days&nbsp; <i class="pi pi-sort-down"></i>
                            </div>
                            <OverlayPanel ref="op" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                <div v-for="(item, index) in taskTime" :key="index">
                                    <div class="px-3 py-1">{{ item.name }}</div>
                                </div>
                            </OverlayPanel>
                        </div>
                        <div class="col-4 mt-2">
                            <input type="date" class="form-control"/>
                        </div>
                        <div class="col-4 mt-2">
                            <div @click="toggle" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700">
                                No reminder&nbsp; <i class="pi pi-sort-down"></i>
                            </div>
                            <OverlayPanel ref="op" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                <div v-for="(item, index) in taskTime" :key="index">
                                    <div class="px-3 py-1">{{ item.name }}</div>
                                </div>
                            </OverlayPanel>
                        </div>
                        <div class="col-12 mt-3">
                            <hr />
                        </div>
                        <div class="col-2 label-text">Type</div>
                        <div class="col-2 label-text">Priority</div>
                        <div class="col-2 label-text">Queue</div>
                        <div class="col-3 label-text">Assigned to</div>
                        <div class="col-3 label-text"></div>
                        <!-- <div class="col-4"></div> -->
                        <div class="col-2 mt-2">
                            <div @click="toggleTodo" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700 c-pointer">
                                {{ Object.keys(selectedTodo).length > 0 ? selectedTodo.value : 'Todo&nbsp;' }} <i class="pi pi-sort-down"></i>
                            </div>
                            <OverlayPanel ref="todoTask" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                <div class="container-fluid p-0">
                                    <div class="row" v-for="(item, index) in activityType" :key="index">
                                        <div class="py-2 px-3 hover-log" @click="setActivityType(item)">{{ item.value }}</div>
                                    </div>
                                </div>
                            </OverlayPanel>
                        </div>
                        <div class="col-2 mt-2">
                            <div @click="toggle" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700">
                                None&nbsp; <i class="pi pi-sort-down"></i>
                            </div>
                            <OverlayPanel ref="op" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                <div v-for="(item, index) in taskTime" :key="index">
                                    <div class="px-3 py-1">{{ item.name }}</div>
                                </div>
                            </OverlayPanel>
                        </div>
                        <div class="col-2 mt-2">
                            <div @click="toggle" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700">
                                None&nbsp; <i class="pi pi-sort-down"></i>
                            </div>
                            <OverlayPanel ref="op" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                <div v-for="(item, index) in taskTime" :key="index">
                                    <div class="px-3 py-1">{{ item.name }}</div>
                                </div>
                            </OverlayPanel>
                        </div>
                        <div class="col-4 mt-2">
                            <div @click="toggle" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700">
                                Oladapo Daniel&nbsp; <i class="pi pi-sort-down"></i>
                            </div>
                            <OverlayPanel ref="op" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                <div v-for="(item, index) in taskTime" :key="index">
                                    <div class="px-3 py-1">{{ item.name }}</div>
                                </div>
                            </OverlayPanel>
                        </div>

                        <div class="col-12">
                        <textarea class="form-control col-12 mt-3" rows="4"  placeholder="Notes..."></textarea>
                        <div class="d-flex justify-content-start">
                            <div class="p-2 col-2 mt-3 save-btn btn-btn pointer-cursor" @click="saveTask">Save</div>
                        </div>
                        </div>
            
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script>
import { ref } from "vue"
import SideActions from "./components/SideActions"
import Activity from "./components/Activity"
import Notes from "./components/Notes"
import Emails from "./components/Emails"
import Calls from "./components/Calls"
import Tasks from "./components/Tasks"
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog';
import Editor from 'primevue/editor';
import composeService from "../../../services/communication/composer";
import { useToast } from "primevue/usetoast";
import Dropdown from "primevue/dropdown";
import { useRoute } from "vue-router"
import axios from "@/gateway/backendapi";
import lookupTable from "../../../services/lookup/lookupservice"
// import SelectButton from 'primevue/selectbutton';
export default {
    inheritAttrs: false,
    components: {
        SideActions,
        Activity,
        Notes,
        Emails,
        Calls,
        Tasks,
        InputText,
        Dialog,
        Editor,
        Dropdown
        // SelectButton
    },
    setup () {
        const toast = useToast()
        const route = useRoute()
        const showActivity = ref(true)
        const showNotes = ref(false)
        const showEmails = ref(false)
        const showCalls = ref(false)
        const showTasks = ref(false)
        // const options = ref(['Expand all', 'Collapse all']);
        // const value1 = ref("")
        const displayPosition = ref(false)
        const position = ref('bottomright')
        const note = ref("")
        const noteList = ref([])
        const taskList = ref([])
        const emailDisplayPosition = ref(false)
        const emailBody = ref("")
        const emailSubject = ref("")
        const displayEmailPane = ref(false)
        const taskDisplayPosition = ref(false)
        const taskTime = ref([{ name: '08:00' },{ name: '09:00' }, { name: '10:00' }])
        const op = ref("")
        const todoTask = ref("")
        const theTask = ref("")
        const personDetails = ref({})
        const logList = ref([])
        const activities = ref([])
        const callLog = ref(false)
        const activityType = ref([])
        const selectedTodo = ref({})

        

        const toggleActivity = () => {
            showActivity.value = true
            showNotes.value = false
            showEmails.value = false
            showCalls.value = false
            showTasks.value = false
        }

        const toggleNotes = () => {
            showActivity.value = false
            showNotes.value = true
            showEmails.value = false
            showCalls.value = false
            showTasks.value = false
        }
        
        const toggleEmails = () => {
            showActivity.value = 
            showNotes.value = false
            showEmails.value = true
            showCalls.value = false
            showTasks.value = false
        }

        const toggleCalls = () => {
            showActivity.value = false
            showNotes.value = false
            showEmails.value = false
            showCalls.value = true
            showTasks.value = false
        }

        const toggleTasks = () => {
            showActivity.value = false
            showNotes.value = false
            showEmails.value = false
            showCalls.value = false
            showTasks.value = true
        }

        const openPosition = () => {
            displayPosition.value = true;
        };
        const saveNote = () => {
            displayPosition.value = false;
            let noteContent = note.value.slice(3, -4)
            noteList.value.unshift({ body: noteContent })

            activities.value.unshift({ body: noteContent, type: 'note' })
            note.value = ""
        };
        

        const openNoteEditor = (payload) => {
            displayPosition.value = payload
        }

        const openEmailModal = () => {
            emailDisplayPosition.value = true
        }

        const setIconProp = (payload) => {
            // noteList.value[payload].noteIcon = !noteList.value[payload].noteIcon
            activities.value[payload].noteIcon = !activities.value[payload].noteIcon
        }
        
        const setIconPropTask = (payload) => {
            // taskList.value[payload].taskIcon = !taskList.value[payload].taskIcon
            activities.value[payload].taskIcon = !activities.value[payload].taskIcon
        }

        const sendEmail = async () => {
            let data = {
                ToContacts: route.params.personId,
                // ToContacts: "5f33cb89-d002-4607-a688-08d8f38b4d33",
                groupedContacts: [],
                isPersonalized: false,
                message: `<!DOCTYPE html>
                <html lang="en">
                    <head>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width,initial-scale=1.0">
                    <style>
                        #email-body img {
                        width: 100% !important;
                        max-width: 1000px !important;
                        margin-left: auto;
                        margin-right: auto;
                        max-height: 300px;
                        object-fit: contain;
                        display: flex;
                        justify-content: center;
                        }
                        
                        #email-body img {
                        display: flex;
                        justify-content: center;
                        }
                        
                        #email-body figure {
                        margin: auto;
                        }
                    </style>
                    </head>
                    <body>
                    <div id="email-body" style="max-width: 1000px; margin: auto"> ${emailBody.value} </div>
                    </body>
                </html>`,
                subject: emailSubject.value
            }

            try {
                let response = await composeService.sendMessage("/api/Messaging/sendEmail", data)
                console.log(response)
                if(response.status === 200) {
                    toast.add({
                        severity: "success",
                        summary: "Sent",
                        detail: "Email sent successfully",
                        life: 5000,
                    });
                    emailDisplayPosition.value = false
                }

            }
            catch (err) {
                console.log(err)
            }
        }

        const toggleDisplayEmailPane = () => {
            displayEmailPane.value = true
        }

        const openTaskEditor = (payload) => {
            taskDisplayPosition.value = payload
        }

        const toggle = (event) => {
            op.value.toggle(event);
        };
        
        const toggleTodo = (event) => {
            todoTask.value.toggle(event);
        };

        const saveTask = () => {
            taskDisplayPosition.value = false;
            taskList.value.unshift({ body: theTask.value })
            activities.value.unshift({ body: theTask.value, type: 'task' })
            theTask.value = ""
        };

        const getPersonDetails = () => {
            axios
            .get(`/api/People/firstTimer/${route.params.personId}`)
            .then((res) => {
                console.log(res)
                personDetails.value = res.data
            })
        }
        getPersonDetails()

        const setCallLogDesc = (payload) => {
            logList.value.unshift(payload)
            activities.value.unshift(payload)
        }
        
        const setCallLogIcon = (payload) => {
            logList.value[payload].logIcon = !logList.value[payload].logIcon
        }

        const openCallLogPane = (payload) => {
            callLog.value = payload
        }

        const resetLog = (payload) => {
            callLog.value = payload
        }

        const setIconPropLog = (payload) => {
            activities.value[payload].logIcon = !activities.value[payload].logIcon
        }

        const setEditTaskProp = (payload) => {
            activities.value[payload].editTask = true
        }

        const setEditTaskProp2 = (payload) => {
            activities.value[payload].editTask2 = true
        }

        const saveTaskItem = (payload) => {
            activities.value[payload].editTask = false
        }

        const saveTaskItem2 = (payload) => {
            activities.value[payload].editTask2 = false
        }

        const setHoverTaskProp = (payload) => {
            activities.value[payload].hoverTask = true
        }

        const setOutHoverTaskProp = (payload) => {
            activities.value[payload].hoverTask = false
        }

        const setHoverTaskProp2 = (payload) => {
            activities.value[payload].hoverTask2 = true
        }

        const setOutHoverTaskProp2 = (payload) => {
            activities.value[payload].hoverTask2 = false
        }

        const setHoverLogProp = (payload) => {
            logList.value[payload].hoverLog = true
        }

        const setOutHoverLogProp = (payload) => {
            logList.value[payload].hoverLog = false
        }

        const getActivityType = async () => {
            try {
                let data = await lookupTable.getLookUps()
                console.log(data)
                activityType.value = data.activityType
            }
            catch (err) {
                console.log(err)
            }
        }
        getActivityType()

        const setActivityType = (activity) => {
            selectedTodo.value = activity
            todoTask.value.hide()
        }

        return {
            toggleActivity,
            toggleNotes,
            toggleEmails,
            toggleCalls,
            toggleTasks,
            showActivity,
            showNotes,
            showEmails,
            showCalls,
            showTasks,
            // options,
            // value1
            openPosition,
            displayPosition,
            position,
            note,
            openNoteEditor,
            saveNote,
            noteList,
            emailDisplayPosition,
            openEmailModal,
            setIconProp,
            sendEmail,
            emailBody,
            emailSubject,
            toggleDisplayEmailPane,
            displayEmailPane,
            openTaskEditor,
            taskDisplayPosition,
            taskTime,
            toggle,
            op,
            theTask,
            saveTask,
            taskList,
            setIconPropTask,
            personDetails,
            setCallLogDesc,
            logList,
            activities,
            setCallLogIcon,
            openCallLogPane,
            callLog,
            resetLog,
            setIconPropLog,
            setEditTaskProp,
            setEditTaskProp2,
            saveTaskItem,
            saveTaskItem2,
            setHoverTaskProp,
            setOutHoverTaskProp,
            setHoverTaskProp2,
            setOutHoverTaskProp2,
            setHoverLogProp,
            setOutHoverLogProp,
            todoTask,
            toggleTodo,
            activityType,
            selectedTodo,
            setActivityType
        }
    }
}
</script>

<style scoped>
.baseline {
    transition: all 150ms ease-in-out;
    background-color: #33475b;
    border-radius: 24px;
    bottom: -2.5px;
    height: 6px;
    left: 0px;
    width: 100%;
    opacity: 1;
}

.hide-base {
    transition: all 150ms ease-in-out;
    background-color: #33475b;
    border-radius: 24px;
    bottom: -2.5px;
    height: 6px;
    left: 0px;
    width: 100%;
    opacity: 0;
}

.adjust-font {
    font-size: 17px
}

.push-border-up {
    margin-top: -1px
}

.bounce-transition {
  display: inline-block; /* otherwise scale animation won't work */
}
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

.side-bar {
    border: 1px solid #dfe3eb;
    border-right: 0;
    background: rgba(202, 202, 202, 0.096);
}

.main-view {
    background: #f5f8fa;
    border: 1px solid #dfe3eb
}

.uniform-primary-color {
    color: #136acd
}

.mail-connect {
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #136acd57;
    cursor: pointer;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.mail-connect:hover {
    box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.3s ease-in-out
}

.label-text {
    color: #506e91;
    font-size: 0.9em;
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

.hover-log:hover {
    background: rgba(202, 202, 202, 0.356);
    cursor: pointer
}
</style>
