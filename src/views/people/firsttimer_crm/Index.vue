<template>
    <div class="container-top container adjust-font">
        <div class="row" style="border: 2px solid red">
            <div class="col-4">
                <SideActions />
            </div>
            <div class="col-8" style="border: 2px solid green">
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
              
                <div class="row" >
                    <div class="col-12" v-if="showActivity" transition="bounce">Activity</div>
                    <div class="col-12" v-if="showNotes" transition="bounce">Notes</div>
                    <div class="col-12" v-if="showEmails" transition="bounce">Emails</div>
                    <div class="col-12" v-if="showCalls" transition="bounce">Calls</div>
                    <div class="col-12" v-if="showTasks" transition="bounce">Tasks</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import SideActions from "./components/SideActions"
export default {
    components: {
        SideActions
    },
    setup () {
        const showActivity = ref(true)
        const showNotes = ref(false)
        const showEmails = ref(false)
        const showCalls = ref(false)
        const showTasks = ref(false)

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
            showTasks
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
    height: 8px;
    left: 0px;
    width: 100%;
    opacity: 1;
}

.hide-base {
    transition: all 150ms ease-in-out;
    background-color: #33475b;
    border-radius: 24px;
    bottom: -2.5px;
    height: 8px;
    left: 0px;
    width: 100%;
    opacity: 0;
}

.adjust-font {
    font-size: 17px
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
</style>