<template>
<div class="row" v-if="loader">
    <div class="col-12">
       <div class="col-12 card-bg p-3 py-4">
            <div class="row">
                <div class="col-4">
                    <Skeleton width="100%" height="1.2rem" borderRadius="16px" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12">
                    <Skeleton width="100%" height="1.2rem" borderRadius="16px" />
                </div>
            </div>
       </div>
    </div>
</div>
    <div class="row" v-for="(item, index) in activities" :key="index">
        <div class="col-12">
            <div class="row mt-4">
                <div class="col-12 date-style">{{ item.name }}</div>
            </div>
            <div class="row" v-for="(item, index) in item.value" :key="index">
            <!-- <div class="col-12 activity-date" v-if="addNotes.length > 0 && addTask.length > 0">July 12</div> -->
                <div class="col-12 mt-4" v-if="item.type === 91">
                <!-- Card for Notes -->
                    <div class="col-12 card-bg p-4">
                        <div class="row d-flex justify-content-between">
                            <div>
                                <div class="col align-self-center"><span class="font-weight-700"><i class="pi pi-angle-up uniform-primary-color" :class="{'roll-note-icon' : item.noteIcon, 'unroll-note-icon' : !item.noteIcon}" @click="toggleNoteIcon(index)"></i>&nbsp;&nbsp;Note</span> by {{ item.person }} </div>
                                
                                    <div class="col mt-4 enlargen-font">{{ item.description }}</div>
                                
                            </div>
                            <div>
                                <div class="col text-right"><span class="ml-2 small-text">{{ formatDate(item.date) }} {{ item.time }}</span></div>
                            </div>
                        </div>
                        <transition name="fade">
                            <div class="row mt-4" v-if="item.noteIcon">
                                <div class="col font-weight-700 uniform-primary-color">Add Comment</div>
                                <div class="col text-right font-weight-700 uniform-primary-color">1 Association</div>
                            </div>
                        </transition>
                    </div>
                </div>


            <!-- Card for tasks (visit/sms) -->
            <div class="col-12 mt-4" v-if="item.type === 87 || item.type === 89">
                <div class="col-12 card-bg p-4">
                <div class="row d-flex justify-content-between">
                    <div>
                        <div class="col align-self-center"><span class="font-weight-700"><i class="pi pi-angle-up uniform-primary-color" :class="{'roll-note-icon' : item.taskIcon, 'unroll-note-icon' : !item.taskIcon}" @click="toggleTaskIcon(index)"></i>&nbsp;&nbsp;{{ item.typeText }} {{ item.person ? 'task' : 'logged' }}</span>  {{ item.person ? `assigned to ${item.person}` : '' }}</div>
                        
                    </div>
                    <div>
                        <div class="col text-right"><span class="ml-2 small-text">{{ formatDate(item.date) }} {{ item.time }}</span></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mt-4 enlargen-font" v-if="!item.taskIcon">
                        {{ item.description ? item.description : "Create your task" }}
                    </div>
                    <div v-if="!taskIcon && item.description" class="col mt-4 enlargen-font">{{ theTask }}</div>
                    <div class="col-12">
                        <transition name="fade">
                            <div class="row mt-4" v-if="item.taskIcon">
                                <div class="col-1 align-self-center">
                                    <div class="checked"><i class="pi pi-check text-white"></i></div>
                                </div>
                            <div class="col-11 p-2 d-flex task-border justify-content-between" :class="{ 'hover-border' : item.hoverTask }" @mouseover="onHoverBorderTask(index)" @mouseleave="outHoverBorderTask(index)" v-if="!item.editTask" @click="toggleEditTask(index)">
                                <div v-if="!item.description">Create a task here</div>
                                <div v-else>{{ item.description }}</div>
                                <div><i class="pi pi-pencil" :class="{ 'uniform-primary-color' : hoverTask, 'text-white' : !hoverTask }"></i></div>
                            </div>
                            <input type="text" class="form-control col-10" v-model="item.body" v-if="item.editTask"/>
                            <div class="offset-1 p-2 col-2 mt-3 save-btn btn-btn pointer-cursor" @click="saveTask(index)" v-if="item.editTask">Save</div>
                            <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3" v-if="item.editTask" @click="cancelTaskEdit">Cancel</div>
                            <div class="col-12">
                                <hr />
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
                            <div class="col-2 label-text"></div>
                            <div class="col-2 mt-2">
                                <div @click="toggle" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700">
                                    Todo&nbsp; <i class="pi pi-sort-down"></i>
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
                                    <div class="col-12 p-2 d-flex task-border justify-content-between mt-4" :class="{ 'hover-border' : item.hoverTask2 }" @mouseover="onHoverBorderTask2(index)" @mouseleave="outHoverBorderTask2(index)" v-if="!item.editTask2" @click="toggleEditTask2(index)">
                                <div v-if="!theTask2">Create a task here</div>
                                <div v-else>{{ theTask2 }}</div>
                                <div><i class="pi pi-pencil" :class="{ 'uniform-primary-color' : hoverTask2, 'text-white' : !hoverTask2 }"></i></div>
                            </div>
                            <textarea class="form-control col-12 mt-3" rows="4" v-model="theTask2" v-if="item.editTask2"></textarea>
                            <div class="d-flex justify-content-start">
                                <div class="p-2 col-2 mt-3 save-btn btn-btn pointer-cursor" @click="saveTask2(index)" v-if="item.editTask2">Save</div>
                            <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3" v-if="item.editTask2" @click="cancelTaskEdit2">Cancel</div>
                            </div>
                            </div>
                        </div>
                        </transition>
                    </div>
                </div>
            <transition name="fade">
                <div class="row mt-4" v-if="taskIcon">
                    <div class="col font-weight-700">Add Comment</div>
                    <div class="col text-right font-weight-700">1 Association</div>
                </div>
            </transition>
            </div>
            </div>


            <!-- Card for Call and Email Logs -->

            <div class="col-12 mt-4" v-if="item.type === 88">
                <div class="col-12 card-bg p-4">
                    <div class="row d-flex justify-content-between">
                        <div>
                            <div class="col align-self-center"><span class="font-weight-700"><i class="pi pi-angle-up uniform-primary-color" :class="{'roll-note-icon' : item.logIcon, 'unroll-note-icon' : !item.logIcon}" @click="toggleLogIcon(index)"></i>&nbsp;&nbsp;{{ item.person ? `${item.typeText} task assigned to` : `${item.typeText} logged` }}</span> {{ item.person }} </div>
                        </div>
                        <div>
                            <div class="col text-right"><span class="ml-2 small-text">{{ formatDate(item.date) }} {{ item.time }}</span></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-4 enlargen-font"  :class="{ 'hover-border' : item.hoverLog, 'log-border' : !item.hoverLog }" v-if="!item.editLog">
                            <div>{{ condenseEmailText(item.description) }}</div>
                        </div>

                        <textarea v-model="item.description" class="form-control col-12 mt-4" v-if="item.editLog" rows="5"></textarea>
                        <div class="p-2 col-2 mt-3 save-btn btn-btn pointer-cursor" @click="saveLogDesc" v-if="item.editLog">Save</div>
                        <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3" v-if="item.editLog" @click="cancelTaskEdit">Cancel</div>
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
                    <!-- <transition name="fade">
                        <div class="row mt-4">
                            <div class="col font-weight-700 uniform-primary-color">Add Comment</div>
                            <div class="col text-right font-weight-700 uniform-primary-color">1 Association</div>
                        </div>
                    </transition> -->
                </div>
            </div>
            
            <!-- Log for contactowner, lifecycle, leadstatus -->
            <div class="col-12 mt-4" v-if="item.type === 90 || item.type === 92 || item.type === 93">
                <div class="col-12 card-bg p-4">
                    <div class="row d-flex justify-content-between">
                        
                            <div class="col-6 align-self-center"><span class="font-weight-700">{{ item.type === 90 ? "Lifecycle changed" : item.type === 92 ? "Lead status changed" : "Contact's owner changed" }}</span><span class="font-weight-700 uniform-primary-color"></span></div>
                    
                        
                            <div class="col-6 text-right"><span class="ml-2 small-text">{{ formatDate(item.date) }} {{ item.time }}</span>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12 enlargen-font">
                            {{ item.description }}
                        </div>
                    </div>
                
                </div>
            </div>

        </div>
        </div>
    </div>
    <div class="row" v-if="activities.length === 0 && !loader" >
        <div class="col-12 mt-3 no-activity">
            You have not performed any activities yet
        </div>
    </div>
</template>


<script>
import { ref } from "vue"
import Dropdown from "primevue/dropdown";
import dateFormatter from '../../../../services/dates/dateformatter';
export default {
    components: {
        Dropdown
    },
    props: ['addNotes', 'addTask', 'taskTime', 'activities', 'loader'],
    emits: ['individualtoggle', 'individualtoggletask', 'individualcallicon', 'edittask', 'edittask2', 'savetask', 'savetask2', 'hovertask', 'outhovertask', 'hovertask2', 'outhovertask2'],
    setup(props, { emit }) {
        const noteIcon = ref(false)
        const taskIcon = ref(false)
        // const meetIcon = ref(false)
        const selectedTaskTime = ref("")
        const theTask = ref("")
        const hoverTask = ref(false)
        const theTask2 = ref("")
        const hoverTask2 = ref(false)
        const op = ref()

        const toggleNoteIcon = (index) => {
            emit('individualtoggle', index)
        }
        
        const toggleTaskIcon = (index) => {
            emit("individualtoggletask", index)
        }
        
        const toggleEditTask = (index) => {
            // editTask.value = true
            emit('edittask', index)
        }
        
        const toggleEditTask2 = (index) => {

            emit('edittask2', index)
        }

        const onHoverBorderTask = (index) => {
        
            emit('hovertask', index)
        }
        
        const outHoverBorderTask = (index) => {
         
            emit('outhovertask', index)
        }
        
        const onHoverBorderTask2 = (index) => {
          
            emit('hovertask2', index)
        }
        
        const outHoverBorderTask2 = (index) => {
       
            emit('outhovertask2', index)
        }

        const saveTask = (index) => {
            // editTask.value = false
            hoverTask.value = false
            emit('savetask', index)
        }
        
        const saveTask2 = (index) => {
            // editTask2.value = false
            hoverTask2.value = false
            emit('savetask2', index)
        }
        
        const cancelTaskEdit = () => {
            editTask.value = false
        }
        
        const cancelTaskEdit2 = () => {
            editTask2.value = false
        }

         const toggle = (event) => {
            op.value.toggle(event);
        };

        const toggleLogIcon = (index) => {
            emit('individualcallicon', index)
        }

        const formatDate = (date) => {
            return dateFormatter.monthDayYear(date)
        }

        const condenseEmailText = (text) => {
            if (text !== null) {
                if (text.toLowerCase().includes('<!doctype')) {
                    return 'Email sent successfully.'
                }   else {
                    return text
                }
            }
        }

        return {
            noteIcon,
            toggleNoteIcon,
            taskIcon,
            toggleTaskIcon,
            selectedTaskTime,
            toggleEditTask,
            toggleEditTask2,
            theTask,
            theTask2,
            saveTask,
            saveTask2,
            onHoverBorderTask,
            hoverTask,
            outHoverBorderTask,
            cancelTaskEdit,
            onHoverBorderTask2,
            hoverTask2,
            outHoverBorderTask2,
            cancelTaskEdit2,
            toggle,
            op,
            toggleLogIcon,
            formatDate,
            condenseEmailText


        }
    }
}
</script>

<style scoped>
.activity-date {
    font-size: 23px;
}

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

.checked {
    width: 25px;
    height: 25px;
    background-color: rgb(0, 189, 165);
    border: 2px solid rgb(0, 189, 165);
    border-radius: 50%;
    text-align: center
}

.task-border {
    border: 2px solid white;
    border-radius: 3px;
}
.hover-border {
    border: 2px solid #1269cea6;
    border-radius: 3px;
}

.uniform-primary-color {
    color: #136acd
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

.label-text {
    color: #506e91;
    font-size: 0.9em;
}

.enlargen-font {
    font-size: 1.2em
}

.no-activity {
    font-size: 1.1em;
    font-weight: 500;
    color: rgb(156, 156, 156);
}

.date-style {
    color: rgb(51, 71, 91);
    font-size: 19px
}
</style>