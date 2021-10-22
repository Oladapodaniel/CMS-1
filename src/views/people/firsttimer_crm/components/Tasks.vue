<template>
   <div class="d-flex justify-content-end mx-3">
        <div class="col-3 mt-3 save-btn btn-btn pointer-cursor" @click="openTaskEditor">Create</div>
   </div>
    <!-- <div class="col-12 mt-4" v-for="(task, index) in addTask" :key="index">
            <div class="col-12 card-bg p-4">
            <div class="row d-flex justify-content-between">
                <div>
                    <div class="col align-self-center"><span class="font-weight-700"><i class="pi pi-angle-up" :class="{'roll-note-icon' : task.taskIcon, 'unroll-note-icon' : !task.taskIcon}" @click="toggleTaskIcon(index)"></i>&nbsp;&nbsp;Task</span> assigned to Peter Ihesie <span class="font-weight-700">Actions <i class="pi pi-sort-down"></i></span></div>
                    
                </div>
                <div>
                    <div class="col text-right"><span class="ml-2 small-text">July 29 2021 at 12:50pm GMT +1</span></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <transition name="fade">
                        <div class="row mt-4" v-if="task.taskIcon">
                            <div class="col-1 align-self-center">
                                <div class="checked"><i class="pi pi-check text-white"></i></div>
                            </div>
                        
                
                        <div class="col-11 p-2 d-flex task-border justify-content-between" :class="{ 'hover-border' : hoverTask }" @mouseover="onHoverBorder" @mouseleave="outHoverBorder" v-if="!editTask" @click="toggleEditTask">
                            <div v-if="!theTask">Create a task here</div>
                            <div v-else>{{ theTask }}</div>
                            <div><i class="pi pi-pencil" :class="{ 'uniform-primary-color' : hoverTask, 'text-white' : !hoverTask }"></i></div>
                        </div>
                        <input type="text" class="form-control col-10" v-model="theTask" v-if="editTask"/>
                        <div class="offset-1 p-2 col-2 mt-3 save-btn btn-btn pointer-cursor" @click="saveTask" v-if="editTask">Save</div>
                        <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3" v-if="editTask" @click="cancelTaskEdit">Cancel</div>
                        <div class="col-12">
                            <hr />
                        </div>
                        <div class="col-8 label-text">Due date</div>
                        <div class="col-4 label-text">Reminder</div>
                        <div class="col-4 mt-2">
                            <input type="date" class="form-control"/>
                        </div>
                        <div class="col-4 mt-2">
                            <Dropdown v-model="selectedTaskTime" :options="taskTime" class="w-100" optionLabel="name" placeholder="Select Time" />
                        </div>
                        <div class="col-4 mt-2">
                            <Dropdown v-model="selectedTaskTime" :options="taskTime" class="w-100" optionLabel="name" placeholder="Set reminder" />
                        </div>
                        <div class="col-12 mt-3">
                            <hr />
                        </div>
                        <div class="col-3 label-text">Type</div>
                        <div class="col-3 label-text">Priority</div>
                        <div class="col-3 label-text">Queue</div>
                        <div class="col-3 label-text">Assigned to</div>
                  
                        <div class="col-3 mt-2">
                            <Dropdown v-model="selectedTaskTime" :options="taskTime" class="w-100" optionLabel="name" placeholder="Set reminder" />
                        </div>
                        <div class="col-3 mt-2">
                            <Dropdown v-model="selectedTaskTime" :options="taskTime" class="w-100" optionLabel="name" placeholder="Set reminder" />
                        </div>
                        <div class="col-3 mt-2">
                            <Dropdown v-model="selectedTaskTime" :options="taskTime" class="w-100" optionLabel="name" placeholder="Set reminder" />
                        </div>
                        <div class="col-3 mt-2">
                            <Dropdown v-model="selectedTaskTime" :options="taskTime" class="w-100" optionLabel="name" placeholder="Set reminder" />
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
                
                </transition></div>
            </div>
            <div class="row mt-4">
                <div class="col font-weight-700">Add Comment</div>
                <div class="col text-right font-weight-700">1 Association</div>
            </div>
        </div>
        </div>{{ addTask }} -->

        <!-- <div >
            <div class="col-12 card-bg p-4">
            <div class="row d-flex justify-content-between">
                <div>
                    <div class="col align-self-center"><span class="font-weight-700"><i class="pi pi-angle-up uniform-primary-color" :class="{'roll-note-icon' : task.taskIcon, 'unroll-note-icon' : !task.taskIcon}" @click="toggleTaskIcon(index)"></i>&nbsp;&nbsp;{{ task.typeText }}</span> assigned to <span class="font-weight-700">{{ task.person ? task.person : "" }}</span></div>
                    
                </div>
                <div>
                    <div class="col text-right"><span class="ml-2 small-text">{{ formatDate(task.date) }} {{ task.time }}</span></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 mt-4 enlargen-font" v-if="!task.taskIcon">
                    {{ task.loggedTask.instructions ? task.loggedTask.instructions : "Create your task" }}
                </div>
                <div v-if="!taskIcon && task.description" class="col mt-4 enlargen-font">{{ theTask }}</div>
                <div class="col-12">
                    <transition name="fade">
                        <div class="row mt-4" v-if="task.taskIcon">
                            <div class="col-1 align-self-center">
                                <div class="checked"><i class="pi pi-check text-white"></i></div>
                            </div>
                
                
                        <div class="col-11 p-2 d-flex task-border justify-content-between" :class="{ 'hover-border' : hoverTask }" @mouseover="onHoverBorder" @mouseleave="outHoverBorder" v-if="!editTask" @click="toggleEditTask">
                            <div v-if="!task.description">Create a task here</div>
                            <div v-else>{{ task.description }}</div>
                            <div><i class="pi pi-pencil" :class="{ 'uniform-primary-color' : hoverTask, 'text-white' : !hoverTask }"></i></div>
                        </div>
                        <input type="text" class="form-control col-10" v-model="task.description" v-if="editTask"/>
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
            </div> -->
            <div class="col-12 mt-4" v-for="(item, index) in addTask" :key="index">
                <div class="col-12 card-bg p-4">
                <div class="row d-flex justify-content-between">
                    <div>
                        <div class="col align-self-center"><span class="font-weight-700 c-pointer"><i class="pi pi-angle-up uniform-primary-color" :class="{'roll-note-icon' : item.taskIcon, 'unroll-note-icon' : !item.taskIcon}" @click="toggleTaskIcon(index)"></i>&nbsp;&nbsp;{{ item.typeText }} {{ item.person ? 'task' : 'logged' }}</span>{{ item.person ? `assigned to ` : '' }} <span class="font-weight-700">{{ item.person ? item.person : "" }}</span></div>
                        
                    </div>
                    <div>
                        <div class="col text-right"><span class="ml-2 small-text">{{ formatDate(item.date) }} {{ item.time }}</span></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mt-4 enlargen-font" v-if="!item.taskIcon">
                        {{ item.loggedTask ? item.loggedTask.instructions : "Create your task" }}
                    </div>
                    <!-- <div v-if="!taskIcon && item.description" class="col mt-4 enlargen-font">{{ theTask }}hereee</div> -->
                    <div class="col-12">
                        <transition name="fade">
                            <div class="row mt-4" v-if="item.taskIcon">
                                <div class="col-1 align-self-center">
                                    <div class="checked"><i class="pi pi-check text-white"></i></div>
                                </div>
                            <div class="col-11 p-2 d-flex task-border justify-content-between" :class="{ 'hover-border' : item.hoverTask }" @mouseover="onHoverBorderTask(index)" @mouseleave="outHoverBorderTask(index)" v-if="!item.editTask" @click="toggleEditTask(index, indx)">
                                <div v-if="!item.loggedTask.instructions">Create a task here</div>
                                <div v-else>{{ item.loggedTask.instructions }}</div>
                                <div><i class="pi pi-pencil" :class="{ 'uniform-primary-color' : item.hoverTask, 'text-white' : !item.hoverTask }"></i></div>
                            </div>
                            <input type="text" class="form-control col-10" v-model="item.loggedTask.instructions" v-if="item.editTask"/>
                            <div class="offset-1 p-2 col-2 mt-3 save-btn btn-btn pointer-cursor" @click="saveTask(index, indx)" v-if="item.editTask">Save</div>
                            <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3" v-if="item.editTask" @click="cancelTaskEdit(index, indx)">Cancel</div>
                            <div class="col-12">
                                <hr />
                            </div>
                            <div class="col-6 label-text mt-3">Due date</div>
                            <div class="col-6 label-text mt-3">Reminder</div>
                            <div class="col-6 mt-2">
                                <div @click="toggleDueDate" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700 c-pointer">
                                    {{ getDueDate(item.loggedTask.dueDate) }}&nbsp; <i class="pi pi-sort-down"></i>
                                </div>
                                <OverlayPanel ref="dueDateOp" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                    <div class="container-fluid p-0">
                                        <div class="row hover-log" v-for="(item, index) in dueDate" :key="index">
                                            <div class="py-2 px-3">{{ item.name }}</div>
                                        </div>
                                    </div>
                                </OverlayPanel>
                            </div>
                            <div class="col-6 mt-2">
                                <div @click="toggleReminder" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700 c-pointer">
                                    {{ item.loggedTask.reminder }}&nbsp; <i class="pi pi-sort-down"></i>
                                </div>
                                <OverlayPanel ref="reminderOp" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                    <div class="container-fluid p-0">
                                        <div class="row hover-log" v-for="(item, index) in getReminder" :key="index">
                                            <div class="py-2 px-3 ">{{ item.name }}</div>
                                        </div>
                                    </div>
                                </OverlayPanel>
                            </div>
                            <div class="col-12 mt-3">
                                <hr />
                            </div>
                            <div class="col-4 label-text">Type</div>
                            <div class="col-4 label-text">Priority</div>
                            <div class="col-4 label-text">Assigned to</div>
                            <div class="col-4 mt-2">
                                <div @click="toggleTodo" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700 c-pointer">
                                    <!-- {{ item.selectedActivity ? item.selectedActivity.value : activityType.find(i => i.id === item.type).value }} -->
                                   Todo here &nbsp; <i class="pi pi-sort-down"></i>
                                </div>
                                <OverlayPanel ref="todoOp" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                    <div class="container-fluid p-0">
                                        <div class="row hover-log" v-for="(item, todoIndex) in activityType" :key="todoIndex">
                                            <div class="py-2 px-3" @click="resetActivityType(index, todoIndex)">{{ item.value }}</div>
                                        </div>
                                    </div>
                                </OverlayPanel>
                            </div>
                            <div class="col-4 mt-2">
                                <div @click="togglePriority" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700 c-pointer">
                                    <!-- {{ item.selectedPriority ? item.selectedPriority.name : taskPriority.find(i => i.id === item.loggedTask.priority).name }} -->
                                    priority here&nbsp; <i class="pi pi-sort-down"></i>
                                </div>
                                <OverlayPanel ref="priorityOp" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                    <div class="container-fluid p-0">
                                        <div class="row hover-log" v-for="(item, priorityIndex) in taskPriority" :key="priorityIndex">
                                            <div class="py-2 px-3" @click="resetPriority(priorityIndex, index, indx)">{{ item.name }}</div>
                                        </div>
                                    </div>
                                </OverlayPanel>
                            </div>
                            <div class="col-4 mt-2">
                                <div @click="toggleContact" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700 c-pointer">
                                    <!-- {{ item.selectedContact ? `${item.selectedContact.firstName} ${item.selectedContact.lastName}` : item.person }} -->
                                   contact here &nbsp; <i class="pi pi-sort-down"></i>
                                </div>
                                <OverlayPanel ref="contactOp" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}" class="make-scrollable">
                                    <div class="container-fluid p-0">
                                        <div class="row hover-log" v-for="(item, contactIndex) in allContacts" :key="contactIndex">
                                            <div class="py-2 px-3" @click="chooseContact(item, index, indx)">{{ item.firstName }} {{ item.lastName }}</div>
                                        </div>
                                    </div>
                                </OverlayPanel>
                            </div>

                            <div class="col-12">
                                    <!-- <div class="col-12 p-2 d-flex task-border justify-content-between mt-4" :class="{ 'hover-border' : item.hoverTask2 }" @mouseover="onHoverBorderTask2(index)" @mouseleave="outHoverBorderTask2(index)" v-if="!item.editTask2" @click="toggleEditTask2(index)">
                              
                                <div><i class="pi pi-pencil" :class="{ 'uniform-primary-color' : hoverTask2, 'text-white' : !hoverTask2 }"></i></div>
                            </div> -->
                            <textarea class="form-control col-12 mt-3" rows="4" v-model="item.loggedTask.note"></textarea>
                            <div class="d-flex justify-content-start">
                                <div class="p-2 col-2 mt-3 save-btn btn-btn pointer-cursor" @click="editTask(index, indx)" >Save</div>
                            <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3" @click="cancelTaskEdit2">Cancel</div>
                            </div>
                            </div>
                        </div>
                        </transition>
                    </div>
                </div>
            <transition name="fade">
                <div class="container" v-if="item.taskIcon">
                    <div class="row mt-4" v-show="!displayComment">
                        <div class="col font-weight-700 c-pointer" @click="toggleDisplayComment">Add Comment</div>
                        <!-- <div class="col text-right font-weight-700 c-pointer">1 Association</div> -->
                    </div>
                    <div class="row" v-if="displayComment">
                        <div class="col-12 mt-4">
                            <div class="row comment-bg border py-3 mt-2" v-for="(comment, indexx) in item.loggedTask.comments" :key="indexx">
                                <div class="col-2">
                                    <img src="../../../../assets/checkin-assets/Icon-ionic-ios-person.svg"  class="user-img"/>
                                </div>
                                <div class="col-10">
                                    <div class="row">
                                        <div class="col-8"><strong>{{ comment.personName }}</strong> left a comment</div>
                                        <div class="col-3 small-text">{{ formatDate(comment.date) }}</div>
                                        <div class="dropdown col-1">
                                            <i
                                            class="fas fa-ellipsis-v cursor-pointer alignLeft"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            ></i>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item elipsis-items c-pointer" @click="setToEditComment(comment, index, indx, indexx)">
                                                   Edit 
                                                </a>
                                                <a class="dropdown-item elipsis-items c-pointer" @click="deleteComment(comment.id, index, indx, indexx)">
                                                   Delete 
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-12 mt-2">{{ comment.message }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                
                            </div>
                        </div>
                        <div class="col-12 px-0 mt-3">
                            <textarea class="form-control comment-bg" rows="7" placeholder="Write a comment..." v-model="taskComment" ref="taskCommentRef"></textarea>
                        </div>
                        <div class="p-2 col-2 mt-3 save-btn btn-btn c-pointer" @click="postComment(item, index, indx)">Post</div>
                        <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3 c-pointer">Cancel</div>
                    </div>
                </div>
            </transition>
            <!-- </div> -->
            <!-- </div>
            </div> -->
            
        <transition name="fade">
            <div class="row mt-4" v-if="taskIcon">
                <div class="col font-weight-700">Add Comment</div>
                <div class="col text-right font-weight-700">1 Association</div>
            </div>
        </transition>
        </div>
        </div>
         <div class="row" v-if="addTask.length === 0">
            <div class="col-12 mt-3 no-activity">
                You have not added any task yet
            </div>
        </div>
</template>


<script>
import { ref } from "vue"
import dateFormatter from '../../../../services/dates/dateformatter'
import frmservice from "@/services/FRM/firsttimermanagement"
export default {
    props: ['addTask', 'taskTime', 'activityType'],
    emits: ['individualtoggletask', 'opentaskeditor', 'hovertask', 'outhovertask'],
    setup(props, { emit }) {
        const editTask = ref(false)
        const op = ref()

        const toggleTaskIcon = (index) => {
            emit("individualtoggletask", index)
        }

        const toggleEditTask = () => {
            editTask.value = true
        }

        const onHoverBorder = () => {
            hoverTask.value = true
        }
        
        const outHoverBorder = () => {
            hoverTask.value = false
        }

        const toggle = (event) => {
            op.value.toggle(event);
        };

        const openTaskEditor = () => {
            emit('opentaskeditor', true)
        }

        const formatDate = (date) => {
            return dateFormatter.monthDayYear(date)
        }

        const getDueDate = (date) => {
             return frmservice.dueDate().find(i => new Date(i.value).toDateString() == new Date(date).toDateString()) ? frmservice.dueDate().find(i => new Date(i.value).toDateString() == new Date(date).toDateString()).name : "Select due date"
        }

        const resetActivityType = (index, todoIndex) => {
            console.log(index)
            // props.activities[index].value[indx].selectedActivity = props.activityType[todoIndex]
            props.addTask[index].selectedActivity = props.activityType[todoIndex]
            todoOp.value.hide();
        }

        const onHoverBorderTask = (index) => {
            emit('hovertask', index)
        }
        
        const outHoverBorderTask = (index) => {
            emit('outhovertask', index)
        }

        return {
            editTask,
            toggleTaskIcon,
            toggleEditTask,
            onHoverBorder,
            outHoverBorder,
            toggle,
            op,
            openTaskEditor,
            formatDate,
            resetActivityType,
            getDueDate,
            onHoverBorderTask,
            outHoverBorderTask
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

.uniform-primary-color {
    color: #136acd
}

.btn-btn {
    font-size: 15px;
    line-height: 14px;
    padding: 9px 15px;
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

.enlargen-font {
    font-size: 1.2em
}

.no-activity {
    font-size: 1.1em;
    font-weight: 500;
    color: rgb(156, 156, 156);
}

</style>