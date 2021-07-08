<template>
    <div class="container-fluid mb-4">
        <div class="row">
            <Toast></Toast>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6 pl-md-0">
                        <label for="name" class="font-weight-600">Name</label>
                        <input type="text" class="form-control border" v-model="name">
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <input type="checkbox" class="mr-2 border" v-model="isActive" name="" id=""> Active
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 pr-md-0">
                        <label for="name" class="font-weight-600">Description</label>
                        <textarea name="" id="" class="w-100 border" rows="3" 
                            style="border-color: #ced4da"
                        ></textarea>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="border animate col-4 scroll-div scr-height our-grey-bg" style="height: 400px" :class="{ 'col-md-4': showTriggers, 'col-md-1': !showTriggers &&  workflow.triggers.length > 0 }">
                                <div class="row h-100" style="overflow-y:scroll">
                                    <div class="col-md-12 py-3 c-pointer d-flex justify-content-center border" :class="{ 'active-trigger': selectedTrigger.id === trigger.id}" v-for="(trigger, index) in workflow.triggers" :key="index" @click="changeActiveTrigger(index)">
                                        <h6>
                                            <span><i class="mr-3" :class="[trigger.icon, { 'bigger-icon': !showTriggers &&  workflow.triggers.length > 0 }]" style="font-size: 1.5rem"></i></span>
                                            <span class="d-none">{{ trigger.name }}</span>
                                        </h6>
                                    </div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-12 trigger-btn-con" :class="{ 'trigger-btn-con-height': showTriggers }">
                                        <div class="row d-flex justify-content-around">
                                            <div class="col-md-12">
                                                <ul class="list-group w-100">
                                                <li class="list-group-item c-pointer" :class="{ 'mb-4': j === triggers.length - 1 }" v-for="(i, j) in triggers" :key="j" @click="selectTrigger(i)">
                                                    <h5 class="mb-0">
                                                        <span class="mr-2"><i :class="[ i.icon ]" style="font-size: 1rem"></i></span>
                                                        <span :class="{ 'd-none': !showTriggers &&  workflow.triggers.length > 0 }">{{ i.name }}</span>
                                                    </h5>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 trigger-btn-div d-flex justify-content-stretch">
                                        <button class="btn btn-secondary w-100 trigger-btn btn-100 ml-n3 font-weight-bold"
                                            @click="toggleTriggers">
                                            <span><i class="pi pi-plus mx-2"></i></span>
                                            <span :class="{ 'd-none': !showTriggers &&  workflow.triggers.length > 0 }">Add a trigger</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-8 border animate" :class="{ 'col-md-8': showTriggers, 'col-md-11': !showTriggers &&  workflow.triggers.length > 0 }">
                                <div class="row" :class="{ 'd-none': workflow.triggers.length === 0 }">
                                    <div class="col-12 animate border  scr-height"  style="height: 400px" :class="{ 'col-md-4': actionSelected, 'col-md-6': !actionSelected }">
                                        <GivingAmount 
                                            :selectedTriggerIndex="selectedTriggerIndex" 
                                            :groups="groups" v-if="selectedTrigger.id === 1"
                                            @updatetrigger="updateTrigger"
                                            :contributionItems="contributionItems"
                                        />
                                        <GivingNewRegular  
                                            :selectedTriggerIndex="selectedTriggerIndex" 
                                            :groups="groups" v-else-if="selectedTrigger.id === 11" 
                                            @updatetrigger="updateTrigger"
                                            :contributionItems="contributionItems"
                                        />
                                        <NoLongerGiving 
                                            :groups="groups" 
                                            v-else-if="selectedTrigger.id === 2"
                                            :selectedTriggerIndex="selectedTriggerIndex" 
                                            @updatetrigger="updateTrigger"
                                            :contributionItems="contributionItems"
                                        />
                                        <PledgeCreation 
                                            :groups="groups" 
                                            v-else-if="selectedTrigger.id === 3"
                                            @updatetrigger="updateTrigger"
                                            :selectedTriggerIndex="selectedTriggerIndex" 
                                        />
                                        <NewMember 
                                            :groups="groups" 
                                            v-else-if="selectedTrigger.id === 4"
                                            @updatetrigger="updateTrigger"
                                            :selectedTriggerIndex="selectedTriggerIndex" 
                                        />
                                        <FirstTimer 
                                            :groups="groups" 
                                            v-else-if="selectedTrigger.id === 7"
                                            @updatetrigger="updateTrigger"
                                            :selectedTriggerIndex="selectedTriggerIndex" 
                                        />
                                        <NewConvert 
                                            :groups="groups" 
                                            v-else-if="selectedTrigger.id === 6"
                                            @updatetrigger="updateTrigger"
                                            :selectedTriggerIndex="selectedTriggerIndex" 
                                        />
                                        <MemberBirthday :groups="groups" v-else-if="selectedTrigger.id === 5" />
                                        <GroupAddOrRemove :groups="groups" v-else-if="selectedTrigger.id === 8" />
                                        <GroupMembershipDuration 
                                            :groups="groups" 
                                            v-else-if="selectedTrigger.id === 9"
                                            @updatetrigger="updateTrigger"
                                            :selectedTriggerIndex="selectedTriggerIndex"
                                        />
                                        <AttendanceTrigger :groups="groups" v-else-if="selectedTrigger.id === 10" />
                                        <FromSubmission v-else-if="selectedTrigger.id === 13" />
                                        <Individual 
                                            v-else-if="selectedTrigger.id === 12"
                                            :groups="groups" 
                                            @updatetrigger="updateTrigger"
                                            :selectedTriggerIndex="selectedTriggerIndex" 
                                         />
                                        <PledgeRedemption 
                                            v-else-if="selectedTrigger.id === 14"
                                            :groups="groups" 
                                            @updatetrigger="updateTrigger"
                                            :selectedTriggerIndex="selectedTriggerIndex" 
                                         />
                                        <PledgeCancellation 
                                            v-else-if="selectedTrigger.id === 15"
                                            :groups="groups" 
                                            @updatetrigger="updateTrigger"
                                            :selectedTriggerIndex="selectedTriggerIndex" 
                                         />
                                    </div>

                                    <div class="col-md-6 border scr-height animate" :class="{ 'col-md-8': actionSelected, 'col-md-6': !actionSelected }">
                                        <div class="row ani">
                                            <div class="col-12 border px-0 scr-height our-grey-bg"  style="height: 400px" :class="{ 'col-md-6': actionSelected && triggerActions.length > 0 }">
                                                <div class="row h-100 scroll-div">
                                                    <div class="col-md-12">
                                                        <ul class="list-group w-100">
                                                            <li class="list-group-item c-pointer py-4 border" 
                                                                :class="{ 'bg-white': selectedAction && i.id === selectedAction.id, 'bg-transparent': selectedAction && i.id !== selectedAction.id, 'd-none': showActions }" 
                                                                v-for="(i, j) in triggerActions" :key="j" @click="setActiveAction(j)"
                                                            >
                                                                <h5 class="mb-0">
                                                                    <span class="mr-2"><i :class="[ i.icon ]" style="font-size: 1rem"></i></span>
                                                                    <span class="font-weight">{{ i.name }}</span>
                                                                </h5>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row" style="overflow-y: scroll;max-height:100%" >
                                                    <div class="col-md-12 trigger-btn-con" :class="{ 'trigger-btn-con-height': showActions }">
                                                        <div class="row d-flex justify-content-around">
                                                            <div class="col-md-5 card my-2" v-for="(i, j) in actions" :key="j" @click="selectAction(i)">
                                                                <div class="row card-body c-pointer">
                                                                    <div class="col-md-12 text-center">
                                                                        <i :class="i.icon"></i>
                                                                    </div>
                                                                    <div class="col-md-12 text-center">
                                                                        <h6 class="mb-0">{{ i.name }}</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-5 my-2">
                                                                <div class="row bottom-space my-3">
                                                                    
                                                                </div>
                                                            </div>
                                                            <div class="col-md-5 bottom-space my-2">
                                                                <div class="row my-3">
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 trigger-btn-div">
                                                        <button class="btn btn-secondary w-100 trigger-btn d-flex justify-content-center btn-100 font-weight-bold"
                                                            @click="toggleActions">
                                                            Actions
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="border scr-height" :class="{ 'col-md-6 ani': actionSelected, 'd-none': !actionSelected || !selectedAction || !(selectedActionIndex >= 0) || triggerActions.length < 1 }">
                                                <div class="row h-100" style="overflow-y:scroll">
                                                    <div class="col-md-12" > 
                                                        <EmailAction 
                                                            @updateaction="updateAction"
                                                            v-if="selectedAction && selectedAction.id === 1"
                                                            :selectedActionIndex="selectedActionIndex"
                                                        />
                                                        <GroupAction 
                                                            v-else-if="selectedAction && selectedAction.id === 3" 
                                                            :selectedActionIndex="selectedActionIndex"
                                                            @updateaction="updateAction"
                                                            :groups="groups"
                                                        />
                                                        <AssignTask 
                                                            v-else-if="selectedAction && selectedAction.id === 4" 
                                                            :selectedActionIndex="selectedActionIndex"
                                                            @updateaction="updateAction"
                                                        />
                                                        <SMSAction 
                                                            @updateaction="updateAction"
                                                            v-if="selectedAction && selectedAction.id === 2"
                                                            :selectedActionIndex="selectedActionIndex"
                                                        />
                                                        <AdminMessage v-else-if="selectedAction && selectedAction.id === 5"
                                                            :selectedActionIndex="selectedActionIndex"
                                                            @updateaction="updateAction"
                                                        />
                                                        <UpdateProgress v-else-if="selectedAction && selectedAction.id === 6"  />
                                                        <VoiceAction 
                                                            v-else-if="selectedAction && selectedAction.id === 7" 
                                                            :selectedActionIndex="selectedActionIndex"
                                                            @updateaction="updateAction"
                                                        />
                                                        <TimerAction 
                                                            v-else-if="selectedAction && selectedAction.id === 8" 
                                                            :selectedActionIndex="selectedActionIndex"
                                                            @updateaction="updateAction"
                                                        />
                                                        <MarkPresent 
                                                            v-else-if="selectedAction && selectedAction.id === 9" 
                                                            :selectedActionIndex="selectedActionIndex"
                                                            @updateaction="updateAction"
                                                        />
                                                        <Interactions v-else-if="selectedAction && selectedAction.id === 10"  />
                                                        <WhatsAppAction 
                                                            v-else-if="selectedAction && selectedAction.id === 11"
                                                            :selectedActionIndex="selectedActionIndex"
                                                            @updateaction="updateAction"
                                                        />
                                                        <AddNoteAction 
                                                            v-else-if="selectedAction && selectedAction.id === 12"
                                                            :selectedActionIndex="selectedActionIndex"
                                                            @updateaction="updateAction"
                                                        />
                                                        <!-- <AdminMessage v-else  /> -->
                                                    </div>
                                                </div>
                                                
                                                <div class="col-md-12 trigger-btn-div d-flex justify-content-stretch" style="padding:10px">
                                                    <button class="btn btn-success w-100 trigger-btn btn-100 ml-n4 font-weight-bold">
                                                        Done
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-md-12 px-0">
                        <button class="default-btn border-0 primary-bg font-weight-700 text-white" @click="saveWorkflow">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import GivingAmount from "./triggers/GivingAmount"
import GroupMembershipDuration from "./triggers/GroupMembershipDuration"
import GroupAddOrRemove from "./triggers/GroupAddOrRemove"
import PledgeCreation from "./triggers/PledgeCreation"
import NoLongerGiving from "./triggers/NoLongerGiving.vue"
import GivingNewRegular from "./triggers/GivingNewRegular.vue"
import AttendanceTrigger from "./triggers/AttendanceTrigger.vue"
import FromSubmission from "./triggers/FromSubmission.vue"
import Individual from "./triggers/Individual.vue"
import NewMember from "./triggers/NewMember.vue"
import FirstTimer from "./triggers/FirstTimer.vue"
import NewConvert from "./triggers/NewConvert.vue"
import PledgeRedemption from "./triggers/PledgeRedemption.vue"
import PledgeCancellation from "./triggers/PledgeCancellation.vue"

import GroupAction from "./actions/GroupAction"
import VoiceAction from "./actions/VoiceAction"
import AddNoteAction from "./actions/AddNoteAction"
import SMSAction from "./actions/SMSAction"
import TimerAction from "./actions/TimerAction"
import AdminMessage from "./actions/AdminMessage"
import MarkPresent from "./actions/MarkPresent"
import UpdateProgress from "./actions/UpdateProgress"
import Interactions from "./actions/InteractionsAction"
import { computed } from '@vue/runtime-core'
import EmailAction from "./actions/Email"
import WhatsAppAction from "./actions/WhatsappAction"
import AssignTask from "./actions/AssignTask"
import MemberBirthday from "./triggers/MemberBirthday.vue"
import grousService from '../../../services/groups/groupsservice'
import workflow_service from '../utlity/workflow_service'
import { useToast } from 'primevue/usetoast'

export default {
    components: { 
        GivingAmount,
        GivingNewRegular,
        GroupMembershipDuration,
        GroupAddOrRemove,
        PledgeCreation,
        NoLongerGiving,
        AttendanceTrigger,
        FromSubmission,
        NewMember,
        FirstTimer,
        NewConvert,
        PledgeRedemption,
        PledgeCancellation,

        AdminMessage,
        AddNoteAction,
        TimerAction,
        WhatsAppAction,
        AssignTask,
        VoiceAction,
        GroupAction,
        EmailAction,
        MarkPresent,
        UpdateProgress,
        MemberBirthday,
        Interactions,
        Individual,
        SMSAction,
    },
    setup () {
        const toast = useToast();

        const showTriggers = ref(false);
        const showActions = ref(false);
        // const triggersIsVissible = ref(false);
        const triggers = [
            {
                name: "Giving- amount",
                icon: "pi pi-money-bill",
                id: 1,
                triggerType: 0
            },
            {
                name: "Giving - new regular giver",
                icon: "pi pi-money-bill",
                id: 11,
                triggerType: 1
            },
            {
                name: "Giving - no longer giving",
                icon: "pi pi-money-bill",
                id: 2,
                triggerType: 2,
            },
            {
                name: "Pledge creation",
                icon: "pi pi-money-bill",
                id: 3,
                triggerType: 3
            },
            {
                name: "Pledge - Redemption",
                icon: "pi pi-book",
                id: 14,
                triggerType: 5
            },
            {
                name: "Pledge - Cancellation",
                icon: "pi pi-book",
                id: 15,
                triggerType: 5
            },
            {
                name: "Member - new member",
                icon: "pi pi-user",
                id: 4,
                triggerType: 6
            },
            // {
            //     name: "Member - birthday",
            //     icon: "pi pi-user",
            //     id: 5
            // },
            {
                name: "Member - new convert",
                icon: "pi pi-user",
                id: 6,
                triggerType: 8
            },
            {
                name: "Member - first timer",
                icon: "pi pi-user",
                id: 7,
                triggerType: 9
            },
            {
                name: "Group - add/remove",
                icon: "pi pi-users",
                id: 8,
                triggerType: 10
            },
            {
                name: "Group - membership duration",
                icon: "pi pi-users",
                id: 9,
                triggerType: 11
            },
            {
                name: "Attendance",
                icon: "pi pi-calendar",
                id: 10,
                triggerType: 12
            },
            {
                name: "Form Submission",
                icon: "pi pi-book",
                id: 12,
                triggerType: 13
            },
            {
                name: "Individual - Event",
                icon: "pi pi-book",
                id: 12,
                triggerType: 7
            }
            
        ]

        const actions = [
            {
                name: "Email",
                icon: "pi pi-envelope",
                id: 1
            },
            {
                name: "SMS",
                icon: "pi pi-comment",
                id: 2
            },
            {
                name: "Add to group",
                icon: "pi pi-users",
                id: 3
            },
            {
                name: "Assign task",
                icon: "pi pi-users",
                id: 4
            },
            {
                name: "Message admin",
                icon: "pi pi-users",
                id: 5
            },
            {
                name: "Update progress",
                icon: "pi pi-chart-line",
                id: 6
            },
            {
                name: "Send voice note",
                icon: "pi pi-volume-up",
                id: 7
            },
            {
                name: "Timer",
                icon: "pi pi-clock",
                id: 8
            },
            {
                name: "Present In Group",
                icon: "pi pi-clock",
                id: 9
            },
            {
                name: "Interactions",
                icon: "pi pi-users",
                id: 10
            },
            {
                name: "WhatsApp",
                icon: "pi pi-volume-up",
                id: 11,
            },
            {
                name: "Add Note",
                icon: "pi pi-volume-up",
                id: 12,
            }
        ]

        const workflow = reactive({ triggers: [ ] });

        const selectedTriggers = ref([ ]);
        const selectedActions = ref([ ]);

        const toggleTriggers = () => {
            showTriggers.value = !showTriggers.value;
        }

        const toggleActions = () => {
            showActions.value = !showActions.value;
        }

        const checkIfAlreadySelected = trigger => {
            const index = workflow.triggers.findIndex(t => t.name === trigger.name);
            return index >= 0 ? true : false;
        }
        const checkIfActionIsAlreadySelected = trigger => {
            if (!workflow.triggers[selectedTriggerIndex.value].triggerActions) return false;
            const index = workflow.triggers[selectedTriggerIndex.value].triggerActions.findIndex(t => t.name === trigger.name);
            return index >= 0 ? true : false;
        }

        const selectTrigger = (trigger) => {
            if (!checkIfAlreadySelected(trigger)) {
                workflow.triggers.push(trigger)
                selectedTriggerIndex.value = workflow.triggers.findIndex(i => i.id === trigger.id)
                selectedActionIndex.value = 0;
            }
            showTriggers.value = false;
            
        }
        const selectAction = (trigger) => {
            console.log(trigger);
            if (!checkIfActionIsAlreadySelected(trigger)) {
                if (!workflow.triggers[selectedTriggerIndex.value] || !workflow.triggers[selectedTriggerIndex.value].triggerActions) {
                    workflow.triggers[selectedTriggerIndex.value].triggerActions = [ trigger ];
                } else {
                    workflow.triggers[selectedTriggerIndex.value].triggerActions.push(trigger)
                    const index = workflow.triggers[selectedTriggerIndex.value].triggerActions.findIndex(i => i.id === trigger.id);
                    selectedActionIndex.value = index > 0 ? index : 0;
                }
            }
            showActions.value = false
            actionSelected.value = true;
        }

        const actionSelected = ref(false);

        const selectedTriggerIndex = ref(0);
        const selectedTrigger = computed(() => {
            if (workflow.triggers.length === 0) return { };
            return workflow.triggers[selectedTriggerIndex.value];
        })
        const selectedActionIndex = ref(0);
        const selectedAction = computed(() => {
            if (workflow.triggers.length === 0) return { };
            if (!workflow.triggers[selectedTriggerIndex.value].triggerActions || workflow.triggers[selectedTriggerIndex.value].triggerActions.length === 0) return { };
            return workflow.triggers[selectedTriggerIndex.value].triggerActions[selectedActionIndex.value];
        })

        const changeActiveTrigger = (index) => {
            selectedTriggerIndex.value = index;
            selectedActionIndex.value = null;
        };

        const updateTrigger = (data, selectedTriggerIndex) => {
            workflow.triggers[selectedTriggerIndex].JSONCondition = data;
        }

        const updateAction = (data, activeAction) => {
            workflow.triggers[selectedTriggerIndex.value].triggerActions[activeAction].Action = JSON.stringify({
                ActionType: data.ActionType, JSONActionParameters: JSON.stringify(data.JSONActionParameters)
            })
        }

        const setActiveAction = index => {
            selectedActionIndex.value = index;
            // workflow.triggers[selectedTriggerIndex].JSONActionParameters = selectedTriggers[selectedActionIndex];
        }

        const triggerActions = computed(() => {
            if (!workflow.triggers[selectedTriggerIndex.value] ||
                !workflow.triggers[selectedTriggerIndex.value].triggerActions ||
                workflow.triggers[selectedTriggerIndex.value].triggerActions.length === 0) return [ ];
            return workflow.triggers[selectedTriggerIndex.value].triggerActions;
        })

        const groups = ref([]);
        const getGroups = async () => {
            try {
                const response = await grousService.getGroups();
                console.log(response[0], "Work groups");
                groups.value = response.map(i => {
                    return { id: i.id, name: i.name };
                })
                groups.value.unshift({ id: "0000-000-0000-0000-0000-0000", name: "Entire ministry" })
            } catch (error) {
                console.log(error);
            }
        }
        getGroups();

        const contributionItems = ref([ ]);
        const getFinancialCOntributions = async () => {
            try {
                const response = await workflow_service.getContributionItems();
                contributionItems.value = response.map(i => {
                    return { id: i.id, name: i.name }
                })
            } catch (error) {
                console.log(error);
            }
        }
        getFinancialCOntributions();


        const name = ref('');
        const isActive = ref(false);
        const saveWorkflow = async () => {
            console.log(workflow, "workflow data");
            const data = workflow.triggers.map(i => {
                return {
                    JSONCondition: i.JSONCondition,
                    triggerType: i.triggerType,
                    triggerActions: i.triggerActions.map((item, index) => {
                        return {
                            order: index,
                            action: item.Action
                        }
                    })
                }
            })

            const reqBody = { triggers: data, name: name.value, isActive: isActive.value };
            try {
                const { status, response } = await workflow_service.saveWorkflow(reqBody);
                if (status) {
                    toast.add({severity:'success', summary:'Workflow Saved', detail:'Workflow was created successfully', life: 2000});
                } else {
                    toast.add({severity:'error', summary:'Workflow Error', detail: `${ response && response.length < 50 ? response : 'Workflow could not be created' }`, life: 2000});
                }
            } catch (error) {
                console.log(error);
            }
            
        }

        return {
            showTriggers,
            // triggersIsVissible,
            toggleTriggers,
            triggers,
            selectedTriggers,
            selectTrigger,

            showActions,
            selectedActions,
            toggleActions,
            selectAction,

            actionSelected,
            actions,
            selectedTrigger,
            selectedAction,
            changeActiveTrigger,
            selectedTriggerIndex,
            updateTrigger,
            selectedActionIndex,

            updateAction,
            setActiveAction,

            groups,
            workflow,
            triggerActions,
            contributionItems,
            saveWorkflow,
            name,
            isActive,
        }
    }
}
</script>

<style scoped>
    .trigger-btn-con {
        position: absolute;
        bottom: 0;
        width: 100%;
        /* background-color: #ddd; */
        transition: all .5s ease-in-out;
        height: 0;
        overflow: hidden;
    }

    .trigger-btn-con-height {
        transition: all .5s ease-in-out;
        height: calc(100% - 0px);
        overflow: scroll;
        background: #00000008;
    }

    .trigger-btn {
        position: absolute;
        bottom: 0;
        width: 190px !important;
        max-width: 100% !important;
    }

    .trigger-btn-div {
        position: absolute;
        bottom: 0;
        max-width: 100% !important;
    }

    .scr-height {
        height: calc(100vh - 373px) !important;
    }

    .animate {
        height: inherit;
        transition: all .2s ease-in-out;
    }

    /* .ani {
        height: inherit;
        transition: all .2s ease-in-out;
    } */

    .btn-100 {
        width: 100% !important
    }

    .active-trigger {
        border-left: 1px solid #007bff;
        background: #fff;
    }

    .bigger-icon {
        font-size: 2.5rem !important;
    }

    .border {
        border: 1px solid #d3d4dca6!important;
    }

    .scroll-div {
        overflow-y: scroll
    }
</style>