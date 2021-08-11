<template>
<div class="d-flex justify-content-end mx-3">
        <div class="col-2 mt-3 mr-4 log-btn btn-btn c-pointer" @click="openCallLogPane">Log call</div>
        <div class="col-3 mt-3 save-btn btn-btn c-pointer" >Make a phone call</div>
   </div>
    <div class="col-12 mt-4" v-for="(item, index) in logList" :key="index">
            <div class="col-12 card-bg p-4">
                <div class="row d-flex justify-content-between">
                    <div>
                        <div class="col align-self-center"><span class="font-weight-700"><i class="pi pi-angle-up uniform-primary-color" :class="{'roll-note-icon' : item.logIcon, 'unroll-note-icon' : !item.logIcon}" @click="toggleLogIcon(index)"></i>&nbsp;&nbsp;Logged call</span> by Oladapo Daniel <span class="font-weight-700 uniform-primary-color">Actions&nbsp;<i class="pi pi-sort-down"></i></span></div>
                    </div>
                    <div>
                        <div class="col text-right"><span class="ml-2 small-text">July 29 2021 at 12:50pm GMT +1</span></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mt-4 enlargen-font"  :class="{ 'hover-border' : hoverLog, 'log-border' : !hoverLog }" @mouseover="onHoverBorder" @mouseleave="outHoverBorder" v-if="!editLog" @click="toggleEditLog">
                        <div>{{ item.desc }}</div>
                    </div>

                    <textarea v-model="item.desc" class="form-control col-12 mt-4" v-if="editLog" rows="5"></textarea>
                    <div class="p-2 col-2 mt-3 save-btn btn-btn pointer-cursor" @click="saveLogDesc" v-if="editLog">Save</div>
                    <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3" v-if="editLog" @click="cancelTaskEdit">Cancel</div>
                </div>
                <transition name="fade">
                    <div class="row" v-if="item.logIcon">
                        <div class="col-12">
                            <hr />
                        </div>
                            <div class="col-3">
                                <div class="label-text">Contacted</div>
                                <div @click="toggleContact" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700 mt-1 c-pointer">Oladapo &nbsp; <i class="pi pi-sort-down"></i></div>
                                <OverlayPanel ref="contactRef" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                        <div class="container p-0">
                                            <div class="row">
                                                <div class="col-12 py-2 px-3 hover-cursor-cancel">{{ `${personDetails.firstName} ${personDetails.lastName}(${logVariable === 'email' ? personDetails.email : personDetails.mobilePhone})`}}</div>
                                            </div>
                                        </div>
                                    </OverlayPanel>
                            </div>
                            <div class="col-3">
                                <div class="label-text">Call Outcome</div>
                                <div class="mt-1 uniform-primary-color font-weight-700 c-pointer" @click="toggleOutcome" aria:haspopup="true" aria-controls="overlay_panel">Select &nbsp; <i class="pi pi-sort-down"></i></div>
                                <OverlayPanel ref="outcomeRef" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                        <div class="container-fluid p-0">
                                            <div class="row" v-for="(item, index) in outcomeList" :key="index">
                                                <div class="col-12 py-2 px-3 hover-log">{{ item }}</div>
                                            </div>
                                        </div>
                                    </OverlayPanel>
                            </div>
                        
                            <div class="col-3">
                                <div class="label-text">Date</div>
                                <div class="mt-1 uniform-primary-color font-weight-700">
                                    <input type="date" class="form-control" />
                                </div>
                            </div>
                            <div class="col-3">
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
        
                        <!-- <div class="row">
                            <div class="col-12">
                                <hr />
                            </div>
                        </div> -->
    
                            <div class="col-12 mt-3">
                                <textarea name="" placeholder="Describe the call..." class="w-100 form-control" rows="6"></textarea>
                            </div>
      
                    </div>
                </transition>
                <transition name="fade">
                    <div class="row mt-4">
                        <div class="col font-weight-700 uniform-primary-color">Add Comment</div>
                        <div class="col text-right font-weight-700 uniform-primary-color">1 Association</div>
                    </div>
                </transition>
            </div>
        </div>
</template>


<script>
import { ref } from "vue"
export default {
    emits: ['individualcallicon', 'opencalllogpane'],
    props: ['personDetails', 'logList'],
    setup(props, { emit }) {
        const hoverLog = ref(false)
        const editLog = ref(false)
        const loggedDesc = ref("")
        const contactRef = ref(false)
        const outcomeRef = ref(false)
        const date = ref("")
        const timeRef = ref(false)
        const logIcon = ref(false)

        const onHoverBorder = () => {
            hoverLog.value = true
        }
        
        const outHoverBorder = () => {
            hoverLog.value = false
        }

        const toggleEditLog = () => {
            editLog.value = true
        }

        const saveLogDesc = () => {
            editLog.value = false
            hoverLog.value = false
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

        const toggleLogIcon = (index) => {
            // logIcon.value = !logIcon.value
            emit('individualcallicon', index)
        }

        const openCallLogPane = () => {
            emit('opencalllogpane', true)
        }

        return {
            hoverLog,
            onHoverBorder,
            outHoverBorder,
            editLog,
            toggleEditLog,
            saveLogDesc,
            loggedDesc,
            contactRef,
            outcomeRef,
            timeRef,
            toggleContact,
            toggleOutcome,
            toggleTime,
            date,
            logIcon,
            toggleLogIcon,
            openCallLogPane
        }
    }
}
</script>

<style scoped>
.card-bg {
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(45 62 80 / 12%) 0px 1px 5px 0px;
    border-radius: 3px;
}

.roll-note-icon {
    transition: all 0.5s ease-in-out;
    transform: rotateZ(180deg);
}
.unroll-note-icon {
    transition: all 0.5s ease-in-out;
    transform: rotateZ(90deg);
}

.fade {
    transition: all 0.5s ease-in-out;
    opacity: 0;
}
.fade-enter-active {
  animation: fade-in .3s;
}
.fade-leave-active {
  animation: fade-in .3s reverse;
}
@keyframes fade-in {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }

}

.btn-btn {
    font-size: 17px;
    line-height: 14px;
    padding: 11px 16px;
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

.uniform-primary-color {
    color: #136acd
}

.enlargen-font {
    font-size: 1.2em
}

.log-btn {
    background-color: #eaf0f6;
    border: 1px solid #cbd6e2;
    color: #506e91;
}

.hover-border {
    border: 2px solid #1269cea6;
    border-radius: 3px;
}

.log-border {
    border: 2px solid white;
    border-radius: 3px;
}
</style>