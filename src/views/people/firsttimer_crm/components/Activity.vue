<template>
    <div class="row">
        <div class="col-12 activity-date">July 12</div>
        <transition-group>
            <div class="col-12 mt-4" v-for="(note, index) in addNotes" :key="index">
                <div class="col-12 card-bg p-4">
                    <div class="row d-flex justify-content-between">
                        <div>
                            <div class="col align-self-center"><span class="font-weight-700"><i class="pi pi-angle-up uniform-primary-color" :class="{'roll-note-icon' : note.noteIcon, 'unroll-note-icon' : !note.noteIcon}" @click="toggleNoteIcon(index)"></i>&nbsp;&nbsp;Note</span> by Oladapo Daniel <span class="font-weight-700 uniform-primary-color">&nbsp;Actions <i class="pi pi-sort-down"></i></span></div>
                            
                                <div class="col mt-4 enlargen-font">{{ note.body }}</div>
                            
                        </div>
                        <div>
                            <div class="col text-right"><span class="ml-2 small-text">July 29 2021 at 12:50pm GMT +1</span></div>
                        </div>
                    </div>
                    <transition name="fade">
                        <div class="row mt-4" v-if="note.noteIcon">
                            <div class="col font-weight-700 uniform-primary-color">Add Comment</div>
                            <div class="col text-right font-weight-700 uniform-primary-color">1 Association</div>
                        </div>
                    </transition>
                </div>
            </div>
        </transition-group>
        
        <div class="col-12 mt-4" v-for="(task, index) in addTask" :key="index">
            <div class="col-12 card-bg p-4">
            <div class="row d-flex justify-content-between">
                <div>
                    <div class="col align-self-center"><span class="font-weight-700"><i class="pi pi-angle-up uniform-primary-color" :class="{'roll-note-icon' : taskIcon, 'unroll-note-icon' : !taskIcon}" @click="toggleTaskIcon"></i>&nbsp;&nbsp;Task</span> assigned to Peter Ihesie <span class="font-weight-700 uniform-primary-color">Actions <i class="pi pi-sort-down"></i></span></div>
                    
                </div>
                <div>
                    <div class="col text-right"><span class="ml-2 small-text">July 29 2021 at 12:50pm GMT +1</span></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 mt-4 enlargen-font" v-if="!taskIcon">
                    {{ task.body ? task.body : "Create your task" }}
                </div>
                <div v-if="!taskIcon && task.body" class="col mt-4 enlargen-font">{{ theTask }}</div>
                <div class="col-12">
                    <transition name="fade">
                        <div class="row mt-4" v-if="taskIcon">
                            <div class="col-1 align-self-center">
                                <div class="checked"><i class="pi pi-check text-white"></i></div>
                            </div>
                            <!-- <div class="col-11">Call the firstimers</div> -->
                
                        <div class="col-11 p-2 d-flex task-border justify-content-between" :class="{ 'hover-border' : hoverTask }" @mouseover="onHoverBorder" @mouseleave="outHoverBorder" v-if="!editTask" @click="toggleEditTask">
                            <div v-if="!task.body">Create a task here</div>
                            <div v-else>{{ task.body }}</div>
                            <div><i class="pi pi-pencil" :class="{ 'uniform-primary-color' : hoverTask, 'text-white' : !hoverTask }"></i></div>
                        </div>
                        <input type="text" class="form-control col-10" v-model="task.body" v-if="editTask"/>
                        <div class="offset-1 p-2 col-2 mt-3 save-btn btn-btn pointer-cursor" @click="saveTask" v-if="editTask">Save</div>
                        <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3" v-if="editTask" @click="cancelTaskEdit">Cancel</div>
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
                                <div class="col-12 p-2 d-flex task-border justify-content-between mt-4" :class="{ 'hover-border' : hoverTask2 }" @mouseover="onHoverBorder2" @mouseleave="outHoverBorder2" v-if="!editTask2" @click="toggleEditTask2">
                            <div v-if="!theTask2">Create a task here</div>
                            <div v-else>{{ theTask2 }}</div>
                            <div><i class="pi pi-pencil" :class="{ 'uniform-primary-color' : hoverTask2, 'text-white' : !hoverTask2 }"></i></div>
                        </div>
                        <textarea class="form-control col-12 mt-3" rows="4" v-model="theTask2" v-if="editTask2"></textarea>
                        <div class="d-flex justify-content-start">
                            <div class="p-2 col-2 mt-3 save-btn btn-btn pointer-cursor" @click="saveTask2" v-if="editTask2">Save</div>
                        <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3" v-if="editTask2" @click="cancelTaskEdit2">Cancel</div>
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
        <!-- <div class="col-12 mt-4">
             <div class="col-12 card-bg p-4">
            <div class="row d-flex justify-content-between">
                <div>
                    <div class="col align-self-center"><span class="font-weight-700"><i class="pi pi-angle-up" :class="{'roll-note-icon' : meetIcon, 'unroll-note-icon' : !meetIcon}" @click="toggleMeetIcon"></i>&nbsp;&nbsp;Meeting</span> by Oladapo Daniel <span class="font-weight-700">Actions <i class="pi pi-sort-down"></i></span></div>
                </div>
                <div>
                    <div class="col text-right"><span class="ml-2 small-text">July 29 2021 at 12:50pm GMT +1</span></div>
                </div>
            </div>
            <div class="row">
                <transition name="fade">
                        <div class="mt-4 col-12" v-if="meetIcon">
                            <div class="label-text">Attendee description</div>
                            <div class="mt-3">This is me creating a note</div>

                            <div class="col-12 px-0 mt-3">
                                <hr />
                            </div>

                            <div class="row">
                                <div class="col-3">
                                <div class="label-text">Outcome</div>
                                <div class="mt-3">Scheduled</div>
                            </div>
                            
                            <div class="col-3">
                                <div class="label-text">Attendee</div>
                                <div class="mt-3">1 attendee</div>
                            </div>
                            
                            <div class="col-3">
                                <div class="label-text">Duration</div>
                                <div class="mt-3">1 Hour</div>
                            </div>

                            <div class="col-12 px-0 mt-3">
                                <hr />
                            </div>
                            </div>
                           
                        </div>
                    </transition>
            </div>
            <div class="row mt-4">
                <div class="col font-weight-700">Add Comment</div>
                <div class="col text-right font-weight-700">1 Association</div>
            </div>
        </div>
        </div> -->
    </div>
</template>


<script>
import { ref } from "vue"
import Dropdown from "primevue/dropdown";
export default {
    components: {
        Dropdown
    },
    props: ['addNotes', 'addTask'],
    emits: ['individualtoggle'],
    setup(props, { emit }) {
        const noteIcon = ref(false)
        const taskIcon = ref(false)
        // const meetIcon = ref(false)
        const taskTime = ref([
            {
                name: '08:00'
            },
            {
                name: '09:00'
            },
            {
                name: '10:00'
            }
        ])
        const selectedTaskTime = ref("")
        const editTask = ref(false)
        const theTask = ref("")
        const hoverTask = ref(false)
        const editTask2 = ref(false)
        const theTask2 = ref("")
        const hoverTask2 = ref(false)
        const op = ref()

        const toggleNoteIcon = (index) => {
            emit('individualtoggle', index)
        }
        
        const toggleTaskIcon = () => {
            taskIcon.value = !taskIcon.value
        }
        
        // const toggleMeetIcon = () => {
        //     meetIcon.value = !meetIcon.value
        // }
        
        const toggleEditTask = () => {
            editTask.value = true
        }
        
        const toggleEditTask2 = () => {
            editTask2.value = true
        }

        const onHoverBorder = () => {
            hoverTask.value = true
        }
        
        const outHoverBorder = () => {
            hoverTask.value = false
        }
        
        const onHoverBorder2 = () => {
            hoverTask2.value = true
        }
        
        const outHoverBorder2 = () => {
            hoverTask2.value = false
        }

        const saveTask = () => {
            editTask.value = false
            hoverTask.value = false
        }
        
        const saveTask2 = () => {
            editTask2.value = false
            hoverTask2.value = false
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

        return {
            noteIcon,
            toggleNoteIcon,
            taskIcon,
            toggleTaskIcon,
            taskTime,
            selectedTaskTime,
            toggleEditTask,
            toggleEditTask2,
            editTask,
            theTask,
            editTask2,
            theTask2,
            saveTask,
            saveTask2,
            onHoverBorder,
            hoverTask,
            outHoverBorder,
            cancelTaskEdit,
            onHoverBorder2,
            hoverTask2,
            outHoverBorder2,
            cancelTaskEdit2,
            toggle,
            op
            // toggleMeetIcon,
            // meetIcon

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
</style>