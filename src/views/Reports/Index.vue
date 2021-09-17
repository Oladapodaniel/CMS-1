<template>
    <div class="container container-top container-wide">
        <div class=" row mt-2" >
            <div ><h3 class="font-weight-bold"> Reports</h3></div>
        </div>
        <div class="row" style=" background: #f5f8fa;">
            <div class="col-12 col-sm-4  c-pointer " @click="togglePeople">
                <div class="p-3"> Membership </div> 
                <div :class="{ 'baseline' : showPeople, 'hide-base' : !showPeople }"></div>
            </div>
            <div class="col-12 col-sm-4 c-pointer" @click="togglePerformance">
                <div class="p-3"> Attendance </div> 
                <div :class="{ 'baseline' : showPerformance, 'hide-base' : !showPerformance }"></div>
            </div>
            <div class="col-12 col-sm-4 c-pointer" @click="toggleFinancial">
                <div class="p-3"> Financial </div> 
                <div :class="{ 'baseline' : showFinancial, 'hide-base' : !showFinancial }"></div>
            </div>
            <!-- <div class="col-12 col-sm-6 col-md-2 col-lg-2 c-pointer" @click="toggleMobile">
                <div class="p-3"> Mobile usage </div> 
                <div :class="{ 'baseline' : showMobile, 'hide-base' : !showMobile }"></div>
            </div>
            <div class="col-12 col-sm-6 col-md-2 col-lg-2 c-pointer" @click="toggleFollowup">
                <div class="p-3"> Follow up </div> 
                <div :class="{ 'baseline' : showFollowup, 'hide-base' : !showFollowup }"></div>
            </div>
            <div class="col-12 col-sm-6 col-md-2 col-lg-2 c-pointer" @click="toggleOthers">
                <div class="p-3"> Others </div> 
                <div :class="{ 'baseline' : showOthers, 'hide-base' : !showOthers }"></div>
            </div> -->
        </div>
        <div class="row mt-3">
            <div class="col-12" v-if="showPeople">
                <People/>
            </div>
            <div class="col-12" v-if="showPerformance">
                <Performance/> 
            </div>
            <div class="col-12" v-if="showFinancial">
                <Financial/>
            </div>
            <div class="col-12" v-if="showMobile">
                <MobileUsage/>
            </div>
            <div class="col-12" v-if="showFollowup">
                <FollowUp/>
            </div>
            <div class="col-12" v-if="showOthers">
                <Others/>
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from "vue"
import People from "./Membershipreport/Index.vue"
import Performance from "./Performancereport/Index.vue"
import Financial from "./Financialreport/Index.vue"
import MobileUsage from "./Mobileusagereport/Index.vue"
import FollowUp from "./Followup/Index.vue"
import Others from "./Others/Index.vue"
// import { useRoute }  from "vue-router"
// import router from "@/router/index";
export default {
    components: {
        People,
        Performance,
        Financial,
        MobileUsage,
        FollowUp,
        Others
    },
    
    setup() {
        const showPeople = ref(true)
        const showPerformance = ref(false)
        const showFinancial = ref(false)
        const showMobile = ref(false)
        const showFollowup = ref(false)
        const showOthers = ref(false)

        // const route = useRoute()
        const togglePeople = () => {
            showPeople.value = true
            showPerformance.value = false
            showFinancial.value = false
            showMobile.value = false
            showFollowup.value = false
            showOthers.value = false
        }
        const togglePerformance = () => {
            showPeople.value = false
            showPerformance.value = true
            showFinancial.value = false
            showMobile.value = false
            showFollowup.value = false
            showOthers.value = false
        }
        const toggleFinancial = () => {
            showPeople.value = false
            showPerformance.value = false
            showFinancial.value = true
            showMobile.value = false
            showFollowup.value = false
            showOthers.value = false
        }
        const toggleFollowup = () => {
            showPeople.value = false
            showPerformance.value = false
            showFinancial.value = false
            showMobile.value = false
            showFollowup.value = true
            showOthers.value = false
        }
        const toggleMobile = () => {
            showPeople.value = false
            showPerformance.value = false
            showFinancial.value = false
            showMobile.value = true
            showFollowup.value = false
            showOthers.value = false
        }
        const toggleOthers = () => {
            showPeople.value = false
            showPerformance.value = false
            showFinancial.value = false
            showMobile.value = false
            showFollowup.value = false
            showOthers.value = true
        }
       



        return{
            showPeople,
            showPerformance,
            showFinancial,
            showMobile,
            showFollowup,
            showOthers,
            togglePeople,
            togglePerformance,
            toggleFinancial,
            toggleFollowup,
            toggleMobile,
            toggleOthers,
            // route
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
    width: 80%;
    opacity: 1;
}

.hide-base {
    transition: all 150ms ease-in-out;
    background-color: #33475b;
    border-radius: 24px;
    bottom: -2.5px;
    height: 6px;
    left: 0px;
    width: 80%;
    opacity: 0;
}
    @media screen and (max-width: 767px ){
        .baseline {
            width: 40%;
        }
        .hide-base {
            width: 40%;
        }
    }
    @media screen and (max-width: 575px ){
        .baseline {
            width: 20%;
        }
        .hide-base {
            width: 20%;
        }
    }
</style>