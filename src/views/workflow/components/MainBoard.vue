<template>
    <div class="container-fluid mb-4">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6 pl-md-0">
                        <label for="name" class="font-weight-600">Name</label>
                        <input type="text" class="form-control border">
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <input type="checkbox" class="mr-2 border" name="" id=""> Active
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
                            <div class="border col-4 scr-height our-grey-bg" style="height: 400px" :class="{ 'col-md-4': showTriggers, 'col-md-1': !showTriggers &&  selectedTriggers.length > 0 }">
                                <div class="row">
                                    <div class="col-md-12 py-3 c-pointer d-flex justify-content-center border" :class="{ 'active-trigger': selectedTrigger.id === trigger.id}" v-for="(trigger, index) in selectedTriggers" :key="index" @click="changeActiveTrigger(index)">
                                        <h6>
                                            <span><i class="mr-3" :class="[trigger.icon, { 'bigger-icon': !showTriggers &&  selectedTriggers.length > 0 }]" style="font-size: 1.5rem"></i></span>
                                            <span class="d-none">{{ trigger.name }}</span>
                                        </h6>
                                    </div>
                                </div>
                                <div class="row" >
                                    <div class="col-md-12 trigger-btn-con" :class="{ 'trigger-btn-con-height': showTriggers }">
                                        <div class="row d-flex justify-content-around">
                                            <div class="col-md-12">
                                                <ul class="list-group w-100">
                                                <li class="list-group-item c-pointer" v-for="(i, j) in triggers" :key="j" @click="selectTrigger(i)">
                                                    <h5 class="mb-0">
                                                        <span class="mr-2"><i :class="[ i.icon ]" style="font-size: 1rem"></i></span>
                                                        <span :class="{ 'd-none': !showTriggers &&  selectedTriggers.length > 0 }">{{ i.name }}</span>
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
                                            <span :class="{ 'd-none': !showTriggers &&  selectedTriggers.length > 0 }">Add a trigger</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-8 border" :class="{ 'col-md-8': showTriggers, 'col-md-11': !showTriggers &&  selectedTriggers.length > 0 }">
                                <div class="row" :class="{ 'd-none': selectedTriggers.length === 0 }">
                                    <div class="col-6 border scr-height"  style="height: 400px" :class="{ 'col-md-4': actionSelected, 'col-md-6': !actionSelected }">
                                        <GivingAmount v-if="selectedTrigger.id === 1" @givingamount="givingAmount" />
                                        <GivingNewRegular v-else-if="selectedTrigger.id === 11" />
                                        <NoLongerGiving v-else-if="selectedTrigger.id === 2" />
                                        <PledgeCreation v-else-if="selectedTrigger.id === 3" />
                                        <MemberBirthday  v-else-if="selectedTrigger.id === 5" />
                                        <GroupAddOrRemove v-else-if="selectedTrigger.id === 8" />
                                        <GroupMembershipDuration  v-else-if="selectedTrigger.id === 9" />
                                        <AttendanceTrigger  v-else-if="selectedTrigger.id === 10" />
                                        <FromSubmission  v-else-if="selectedTrigger.id === 12" />
                                        <GroupMembershipDuration  v-else />
                                    </div>

                                    <div class="col-md-6 border scr-height"  style="height: 400px" :class="{ 'col-md-8': actionSelected, 'col-md-6': !actionSelected }">
                                        <div class="row">
                                            <div class="col-12 border px-0 scr-height our-grey-bg"  style="height: 400px" :class="{ 'col-md-6': actionSelected }">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <ul class="list-group w-100">
                                                            <li class="list-group-item c-pointer py-4 border" :class="{ 'bg-white': i.id === selectedAction.id, 'bg-transparent': i.id !== selectedAction.id, 'd-none': showActions }" v-for="(i, j) in selectedActions" :key="j" @click="setActiveAction(j)">
                                                                <h5 class="mb-0">
                                                                    <span class="mr-2"><i :class="[ i.icon ]" style="font-size: 1rem"></i></span>
                                                                    <span class="font-weight">{{ i.name }}</span>
                                                                </h5>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row" >
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

                                            <div class="border" :class="{ 'col-md-6': actionSelected, 'd-none': !actionSelected }">
                                                <div class="row">
                                                    <div class="col-md-12" > 
                                                        <EmailAction @emailupdated="handleEmailUpdate" v-if="selectedAction.id === 1" />
                                                        <GroupAction v-else-if="selectedAction.id === 3" />
                                                        <AdminMessage v-else-if="selectedAction.id === 5"  />
                                                        <UpdateProgress v-else-if="selectedAction.id === 6"  />
                                                        <MarkPresent v-else-if="selectedAction.id === 9"  />
                                                        <Interactions v-else-if="selectedAction.id === 10"  />
                                                        <AdminMessage v-else  />
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
                        <button class="default-btn border-0 primary-bg font-weight-700 text-white">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import GivingAmount from "./triggers/GivingAmount"
import GroupMembershipDuration from "./triggers/GroupMembershipDuration"
import GroupAddOrRemove from "./triggers/GroupAddOrRemove"
import PledgeCreation from "./triggers/PledgeCreation"
import NoLongerGiving from "./triggers/NoLongerGiving.vue"
import GivingNewRegular from "./triggers/GivingNewRegular.vue"
import AttendanceTrigger from "./triggers/AttendanceTrigger.vue"
import FromSubmission from "./triggers/FromSubmission.vue"

import GroupAction from "./actions/GroupAction"
import AdminMessage from "./actions/AdminMessage"
import MarkPresent from "./actions/MarkPresent"
import UpdateProgress from "./actions/UpdateProgress"
import Interactions from "./actions/InteractionsAction"
import { computed } from '@vue/runtime-core'
import EmailAction from "./actions/Email"
import MemberBirthday from "./triggers/MemberBirthday.vue"
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

        AdminMessage,
        GroupAction,
        EmailAction,
        MarkPresent,
        UpdateProgress,
        MemberBirthday,
        Interactions,
    },
    setup () {
        const showTriggers = ref(false);
        const showActions = ref(false);
        // const triggersIsVissible = ref(false);
        const triggers = [
            {
                name: "Giving- amount",
                icon: "pi pi-money-bill",
                id: 1
            },
            {
                name: "Giving - new regular giver",
                icon: "pi pi-money-bill",
                id: 11
            },
            {
                name: "Giving - no longer giving",
                icon: "pi pi-money-bill",
                id: 2
            },
            {
                name: "Pledge creation",
                icon: "pi pi-money-bill",
                id: 3
            },
            {
                name: "Member - new member",
                icon: "pi pi-user",
                id: 4
            },
            {
                name: "Member - birthday",
                icon: "pi pi-user",
                id: 5
            },
            {
                name: "Member - new convert",
                icon: "pi pi-user",
                id: 6
            },
            {
                name: "Member - first timer",
                icon: "pi pi-user",
                id: 7
            },
            {
                name: "Group - add/remove",
                icon: "pi pi-users",
                id: 8
            },
            {
                name: "Group - membership duration",
                icon: "pi pi-users",
                id: 9
            },
            {
                name: "Attendance",
                icon: "pi pi-calendar",
                id: 10
            },
            {
                name: "Form Submission",
                icon: "pi pi-book",
                id: 12
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
                name: "Send voice vote",
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
            }
        ]

        const selectedTriggers = ref([ ]);
        const selectedActions = ref([ ]);

        const toggleTriggers = () => {
            showTriggers.value = !showTriggers.value;
        }

        const toggleActions = () => {
            showActions.value = !showActions.value;
        }

        const checkIfAlreadySelected = trigger => {
            const index = selectedTriggers.value.findIndex(t => t.name === trigger.name);
            return index >= 0 ? true : false;
        }
        const checkIfActionIsAlreadySelected = trigger => {
            const index = selectedActions.value.findIndex(t => t.name === trigger.name);
            return index >= 0 ? true : false;
        }

        const selectTrigger = (trigger) => {
            if (!checkIfAlreadySelected(trigger)) {
                selectedTriggers.value.push(trigger)
            }
            showTriggers.value = false
        }
        const selectAction = (trigger) => {
            console.log(checkIfActionIsAlreadySelected(trigger));
            if (!checkIfActionIsAlreadySelected(trigger)) {
                selectedActions.value.push(trigger)
            }
            showActions.value = false
            actionSelected.value = true;
        }

        const actionSelected = ref(false);

        const selectedTriggerIndex = ref(0);
        const selectedTrigger = computed(() => {
            if (selectedTriggers.value.length === 0) return { };
            return selectedTriggers.value[selectedTriggerIndex.value];
        })
        const selectedActionIndex = ref(0);
        const selectedAction = computed(() => {
            if (selectedActions.value.length === 0) return { };
            return selectedActions.value[selectedActionIndex.value];
        })

        const changeActiveTrigger = (index) => {
            selectedTriggerIndex.value = index;
        };

        const givingAmount = data => {
            console.log(data, "data");
        }

        const handleEmailUpdate = (data) => {
            console.log(data);
        }

        const setActiveAction = index => {
            selectedActionIndex.value = index;
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
            givingAmount,

            handleEmailUpdate,
            setActiveAction,
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
        height: calc(100vh - 300px) !important;
        overflow-y: scroll;
    }

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
</style>