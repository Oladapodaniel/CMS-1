<template>
   <div class="d-flex justify-content-end mx-3">
        <div class="col-12 col-sm-6 col-md-3 mt-3 save-btn btn-btn pointer-cursor" @click="openTaskEditor">Create task</div>
   </div>
            <div class="col-12 mt-4" v-for="(item, index) in addTask" :key="index">
                <div class="col-12 card-bg p-4">
                <div class="row d-flex justify-content-between">
                    <div>
                        <div class="col align-self-center"><span class="font-weight-700 c-pointer"><i class="pi pi-angle-up uniform-primary-color" :class="{'roll-note-icon' : item.taskIcon, 'unroll-note-icon' : !item.taskIcon}" @click="toggleTaskIcon(index)"></i>&nbsp;&nbsp;{{ item.selectedActivity && Object.keys(item.selectedActivity).length > 0 ? item.selectedActivity.value : item.loggedTask && item.loggedTask.type ? activityType.find(i => i.id === item.loggedTask.type).value : item.typeText }} {{ item.person ? 'task' : 'logged' }}</span> {{ item.loggedTask.person ? `assigned to ` : '' }} <span class="font-weight-700">{{ item.loggedTask.person ? item.loggedTask.person : "" }}</span></div>
                        
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
                            <div class="col-11 p-2 d-flex task-border justify-content-between" :class="{ 'hover-border' : item.hoverTask }" @mouseover="onHoverBorderTask(index)" @mouseleave="outHoverBorderTask(index)" v-if="!item.editTask" @click="toggleEditTask(index)">
                                <div v-if="!item.loggedTask.instructions">Create a task here</div>
                                <div v-else>{{ item.loggedTask.instructions }}</div>
                                <div><i class="pi pi-pencil" :class="{ 'uniform-primary-color' : item.hoverTask, 'text-white' : !item.hoverTask }"></i></div>
                            </div>
                            <input type="text" class="form-control col-10" v-model="item.loggedTask.instructions" @blur="saveTask(index)" v-if="item.editTask"/>
                            <!-- <div class="offset-1 p-2 col-2 mt-3 save-btn btn-btn pointer-cursor" @click="" v-if="item.editTask">Save</div>
                            <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3" v-if="item.editTask" @click="cancelTaskEdit(index, indx)">Cancel</div> -->
                            <div class="col-12">
                                <hr />
                            </div>
                            <div class="col-6 label-text mt-3">Due date</div>
                            <div class="col-6 label-text mt-3"></div>
                            <div class="col-6 mt-2">
                                <div @click="toggleDueDate" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700 c-pointer">
                                    {{ item.selectedDueDate && Object.keys(item.selectedDueDate).length > 0 ? item.selectedDueDate.name : getDueDate(item.loggedTask.dueDate) }}&nbsp; <i class="pi pi-sort-down"></i>
                                </div>
                                <OverlayPanel ref="dueDateOp" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                    <div class="container-fluid p-0">
                                        <div class="row hover-log" v-for="(date, dueDateIndex) in dueDate" :key="dueDateIndex">
                                            <div class="py-2 px-3" @click="setDueDate(date, index)">{{ date.name }}</div>
                                        </div>
                                    </div>
                                </OverlayPanel>
                            </div>
                            <!-- <div class="col-6 mt-2">
                                <div @click="toggleReminder" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700 c-pointer">
                                    {{ item.selectedReminder && Object.keys(item.selectedReminder).length > 0 ? getReminder(item.selectedReminder, item.loggedTask.reminder) : getReminder(item.loggedTask.dueDate, item.loggedTask.reminder) ? getReminder(item.loggedTask.dueDate, item.loggedTask.reminder).name : "Choose reminder" }} 
                                    {{ item.loggedTask.reminder }}
                                    &nbsp; <i class="pi pi-sort-down"></i>
                                </div>
                                <OverlayPanel ref="reminderOp" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                    <div class="container-fluid p-0">
                                        <div class="row hover-log" v-for="(remind, reminderIndex) in getReminder" :key="reminderIndex">
                                            <div class="py-2 px-3" @click="setReminder(remind, reminderIndex)">{{ remind.name }}</div>
                                        </div>
                                    </div>
                                </OverlayPanel>
                            </div> -->
                            <div class="col-12 mt-3">
                                <hr />
                            </div>
                            <div class="col-4 label-text">Type</div>
                            <div class="col-4 label-text">Priority</div>
                            <div class="col-4 label-text">Assigned to</div>
                            <div class="col-4 mt-2">
                                <div @click="toggleTodo" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700 c-pointer">
                                    {{ item.selectedActivity && Object.keys(item.selectedActivity).length > 0 ? item.selectedActivity.value : item.loggedTask && item.loggedTask.type ? activityType.find(i => i.id === item.loggedTask.type).value : "" }}&nbsp; <i class="pi pi-sort-down"></i>
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
                                    {{ item.selectedPriority && Object.keys(item.selectedPriority).length > 0 ? item.selectedPriority.name : taskPriority.find(i => i.id === item.loggedTask.priority).name }} &nbsp; <i class="pi pi-sort-down"></i>
                                </div>
                                <OverlayPanel ref="priorityOp" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}">
                                    <div class="container-fluid p-0">
                                        <div class="row hover-log" v-for="(item, priorityIndex) in taskPriority" :key="priorityIndex">
                                            <div class="py-2 px-3" @click="resetPriority(priorityIndex, index)">{{ item.name }}</div>
                                        </div>
                                    </div>
                                </OverlayPanel>
                            </div>
                            <div class="col-4 mt-2">
                                 <div @click="toggleContact" aria:haspopup="true" aria-controls="overlay_panel" class="uniform-primary-color font-weight-700 c-pointer">
                                    {{ item.selectedContact && Object.keys(item.selectedContact).length > 0 ? `${item.selectedContact.name}` : item.loggedTask.personName }}&nbsp; <i class="pi pi-sort-down"></i>
                                </div>
                                <OverlayPanel ref="contactOp" appendTo="body" :showCloseIcon="false" id="overlay_panel" :breakpoints="{'960px': '75vw'}" class="p-0">
                                    <div class="container-fluid p-0">
                                        <div class="py-2 px-3">Search whom you want to assign this task</div>
                                        <div class="py-2 px-3">
                                            <SearchMember @memberdetail="chooseContact($event, index)"/>
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
                                <div class="p-2 col-2 mt-3 save-btn btn-btn c-pointer" @click="editTask(index)" >Save</div>
                            <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3 c-pointer" @click="cancelTaskEdit2">Cancel</div>
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
                                        <div class="col-8"><strong>{{ comment.personName ? comment.personName : "" }}</strong> left a comment</div>
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
                                                <a class="dropdown-item elipsis-items c-pointer" @click="setToEditComment(comment, index, indexx)">
                                                   Edit 
                                                </a>
                                                <a class="dropdown-item elipsis-items c-pointer" @click="deleteComment(comment.id, index, indexx)">
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
                        <div class="cancel-btn btn-btn col-2 ml-3 p-2 mt-3 c-pointer" @click="() => displayComment = false">Cancel</div>
                    </div>
                </div>
            </transition>
            <!-- </div> -->
            <!-- </div>
            </div> -->
        
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
import SearchMember from "../../../../components/membership/MembersSearch.vue"
import { useRoute } from "vue-router"
import { useToast } from "primevue/usetoast";
export default {
    inheritAttrs: false,
    props: ['addTask', 'activityType', 'dueDate', 'taskPriority', 'getReminder'],
    emits: ['individualtoggletask', 'opentaskeditor', 'hovertask', 'outhovertask', 'edittask', 'hidetaskfield', 'removecommetfromview'],
    components: {
        SearchMember
    },
    setup(props, { emit }) {
        const route = useRoute()
        const toast = useToast()
        const op = ref()
        const dueDateOp = ref()
        const todoOp = ref()
        const priorityOp = ref()
        const reminderOp = ref()
        const contactOp = ref()
        const reminder = ref([])
        const displayComment = ref(false)
        const taskComment = ref("")
        const taskCommentRef = ref()
        const editCommentVar = ref(false)
        const commentId = ref("")
        const commentIndexToEdit = ref({})

        const toggleTaskIcon = (index) => {
            emit("individualtoggletask", index)
        }

        const toggleEditTask = (index) => {
            emit("edittask", index)
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

         
        const toggleDueDate = (event) => {
            dueDateOp.value.toggle(event);
        };

        const toggleTodo = (event) => {
            todoOp.value.toggle(event);
        };

        const togglePriority = (event) => {
            priorityOp.value.toggle(event);
        };

        const toggleReminder = (event) => {
            reminderOp.value.toggle(event);
        };

        const resetPriority = (priorityIndex, index) => {
            props.addTask[index].selectedPriority = props.taskPriority[priorityIndex]
            priorityOp.value.hide();
        } 

        const toggleContact = (event) => {
            contactOp.value.toggle(event);
        };

        const chooseContact = (payload, index) => {
            console.log(payload)
            props.addTask[index].selectedContact = payload
            contactOp.value.hide()
        }

        const setDueDate = (item, index) => {
            dueDateOp.value.hide();
            props.addTask[index].selectedDueDate = item
        }


        const saveTask = (index) => {
            emit("hidetaskfield", index)
        };

        const editTask = async(index) => {
            // console.log(props.addTask[index])

            let body = {
                id: props.addTask[index].loggedTask.id,
                instructions: props.addTask[index].loggedTask.instructions,
                reminder: props.addTask[index].selectedReminder ? props.addTask[index].selectedReminder.value : props.addTask[index].loggedTask.reminder, // Still hard coded
                dueDate: props.addTask[index].selectedDueDate ? props.addTask[index].selectedDueDate.value : props.addTask[index].loggedTask.dueDate,
                note: props.addTask[index].loggedTask.note,
                type: props.addTask[index].selectedActivity ? props.addTask[index].selectedActivity.id : props.addTask[index].type,
                priority: props.addTask[index].selectedPriority ? props.addTask[index].selectedPriority.id : props.addTask[index].loggedTask.priority,
                personID: props.addTask[index].selectedContact ? props.addTask[index].selectedContact.id : props.addTask[index].loggedTask.personID,
                contacts: route.params.personId
                }
                console.log(body)

                try {
                    const res = await frmservice.editTask(props.addTask[index].loggedTask.id, body)
                    console.log(res)
                    toast.add({
                        severity: "success",
                        summary: "Success",
                        detail: "Task updated successfully",
                        life: 5000,
                    });
                }
                catch (err) {
                    console.log(err)
                }
        }

        // const getReminder = (dueDate, reminderHour) => {
        // //    if (Object.keys(reminderHour).length > 0) {
        //     // try {
        //         console.log(dueDate)
        //         let result = frmservice.reminder(dueDate)
        //         console.log(result);
        //         reminder.value = result
        //         let reminderResult = result.find(i => {
        //             return new Date(i.value).toLocaleTimeString() == new Date(reminderHour).toLocaleTimeString()
        //         })
        //         return reminderResult
        //         // return result
        //         // reminder.value = result
        //     // } catch (err) {
        //     //     console.log(err)
        //     // }
        // //    } else {
        // //        let result = frmservice.reminder()
        // //         console.log(result);
        // //         // reminder.value = result
        // //         return result
        // //    }
        // }

        const setReminder = (item, index) => {
            reminderOp.value.hide();
            console.log(item, 'heree')
            props.addTask[index].selectedReminder = item
        }

        const toggleDisplayComment = () => {
            displayComment.value = true
        }

        const postComment = async(task, index) => {  
            console.log(editCommentVar.value)
            if (editCommentVar.value) {
                editComment()
                editCommentVar.value = false
            }   else {
                let body = {
                    comment: taskComment.value,
                    taskID:task.id
                }
                try {
                    let res = await frmservice.comment(task.loggedTask.id, body)
                    console.log(res)
                    props.addTask[index].loggedTask.comments.push(res.returnObject)
                    // emit("commentindex", indexes)
                    taskComment.value = ""
                }
                catch (err) {
                    console.log(err)
                }
            }
        }

        const setToEditComment = (comment, index, indexx) => {
           console.log(comment)
           editCommentVar.value = true
           commentId.value = comment.id
           taskComment.value = comment.message
           let body = {
                parentIndex: index,
                index: indexx
            }
            commentIndexToEdit.value = body
            taskCommentRef.value.focus()
        }

        const editComment = async() => {
            console.log(commentId.value)
            let payload = {
               comment: taskComment.value
           }
            try {
                let res = await frmservice.editComment(commentId.value, payload)
                commentIndexToEdit.value.body = res.returnObject
                console.log(commentIndexToEdit.value)
                emit("editcommentinview", commentIndexToEdit.value)
                taskComment.value = ""
                console.log(res)
            }
            catch (err) {
                console.log(err)
            }
        }

        const deleteComment = async(id, index, indexx) => {
            try {
                let res = await frmservice.deleteComment(id)
                let body = {
                    parentIndex: index,
                    index: indexx
                }
                emit("removecommetfromview", body)
                console.log(res)
            }
            catch (err) {
                console.log(err)
            }
        }

        return {
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
            outHoverBorderTask,
            toggleDueDate,
            dueDateOp,
            toggleTodo,
            todoOp,
            togglePriority,
            priorityOp,
            toggleReminder,
            reminderOp,
            resetPriority,
            toggleContact,
            contactOp,
            chooseContact,
            setDueDate,
            saveTask,
            editTask,
            // getReminder,
            reminder,
            setReminder,
            displayComment,
            toggleDisplayComment,
            taskComment,
            taskCommentRef,
            postComment,
            editCommentVar,
            setToEditComment,
            commentId,
            editComment,
            commentIndexToEdit,
            deleteComment
        }
    }
}
</script>

<style scoped>
.card-bg {
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(45 62 80 / 12%) 0px 1px 5px 0px;
    border-radius: 8px;
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

.hover-log:hover {
    background: rgba(202, 202, 202, 0.356);
    cursor: pointer
}

.task-border {
    border: 2px solid white;
    border-radius: 3px;
}

.hover-border {
    border: 2px solid #1269cea6;
    border-radius: 3px;
}

.checked {
    width: 25px;
    height: 25px;
    background-color: rgb(0, 189, 165);
    border: 2px solid rgb(0, 189, 165);
    border-radius: 50%;
    text-align: center
}
.comment-bg {
    background: #fef8f0;
}

.user-img {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background: #eee;
}

</style>