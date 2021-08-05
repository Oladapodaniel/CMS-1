<template>
    <div class="container-top container adjust-font">
        <div class="row">
            <div class="col-4 p-0 side-bar">
                <SideActions @opennoteeditor="openNoteEditor" @openemailmodal="openEmailModal"/>
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
                        <Activity :addNotes="noteList" @individualtoggle="setIconProp"/>
                    </div>
                    <div class="col-12" v-if="showNotes" transition="bounce">
                        <Notes :addNotes="noteList" @individualtoggle="setIconProp"/>
                    </div>
                    <div class="col-12" v-if="showEmails" transition="bounce">
                        <Emails />
                    </div>
                    <div class="col-12" v-if="showCalls" transition="bounce">
                        <Calls />
                    </div>
                    <div class="col-12" v-if="showTasks" transition="bounce">
                        <Tasks />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <Button label="BottomRight" icon="pi pi-arrow-up" class="p-button-warning" /> -->
            
    <Dialog header="Header" v-model:visible="displayPosition" :breakpoints="{'960px': '75vw'}" :style="{width: '50vw'}" :position="position" :modal="false">
        <div>Create note here</div>
        <Editor v-model="note" editorStyle="height: 320px"/>
        <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" />
            <Button label="Yes" icon="pi pi-check" @click="saveNote" autofocus />
        </template>
    </Dialog>
   
    <Dialog header="Create an email" v-model:visible="emailDisplayPosition" :breakpoints="{'960px': '75vw'}" :style="{width: '50vw'}" :position="position" :modal="false">
        <div class="container" style="height: 480px">
            <div class="row">
                <div class="col-12 mt-3 font-weight-700 text-center">
                    Keep track of your email activity in your CRM
                </div>
                <div class="col-12 mt-3 text-center">
                    Connect your email account to Churchplus to begin sending emails from your CRM. All your email conversations will appear in the timeline below.Learn more
                </div>
                <div class="col-4 mt-5">
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
                </div>
                <div class="col-4 mt-5">
                    <div class="mail-connect">
                        <div>
                            <img src="../../../assets/unknown-email.svg"/>
                        </div>
                        <div class="mt-3">Connect other</div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" />
            <Button label="Yes" icon="pi pi-check" @click="saveNote" autofocus />
        </template> -->
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
// import SelectButton from 'primevue/selectbutton';
export default {
    components: {
        SideActions,
        Activity,
        Notes,
        Emails,
        Calls,
        Tasks,
        InputText,
        Dialog,
        Editor
        // SelectButton
    },
    setup () {
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
        const emailDisplayPosition = ref(false)

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
            noteList.value.push({ body: noteContent })
            note.value = ""
        };

        const openNoteEditor = (payload) => {
            displayPosition.value = payload
        }

        const openEmailModal = () => {
            emailDisplayPosition.value = true
        }

        const setIconProp = (payload) => {
            noteList.value[payload].noteIcon = !noteList.value[payload].noteIcon
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
            setIconProp
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
</style>
