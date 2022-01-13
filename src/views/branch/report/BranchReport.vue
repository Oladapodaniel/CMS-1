<template>
    <div class="container container-top container-wide">
        <div class=" row mt-2" >
            <div ><h3 class="font-weight-bold"> Reports</h3></div>
        </div>
        <div class="row" style=" background: #f5f8fa;">
            <div class="col-12 col-sm-6  c-pointer " @click="toggleMember">
                <div class="p-3 header4"> Membership </div> 
                <div :class="{ 'baseline' : showMember, 'hide-base' : !showMember }"></div>
            </div>
            <div class="col-12 col-sm-6 c-pointer" @click="toggleService">
                <div class="p-3 header4">Church Activities</div> 
                <div :class="{ 'baseline' : showService, 'hide-base' : !showService }"></div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12" v-if="showMember">
                <Member/>
            </div>
            <div class="col-12" v-if="showService">
                <Service/> 
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from "vue"
import Member from "./MembershipReport.vue"
import Service from "./ServiceReport.vue"

export default {
    components: {
        Member,
        Service
    },
    
    setup() {
        const showMember = ref(true)
        const showService = ref(false)
     

        // const route = useRoute()
        const toggleMember = () => {
            showMember.value = true
            showService.value = false
        }
        const toggleService = () => {
            showMember.value = false
            showService.value = true
        }
       
       



        return{
            showMember,
            showService,
            toggleMember,
            toggleService,
           
            // route
        }
    }
}
</script>


<style scoped>

.header4{
    font-size: 20px;
    font-weight: 700;
    color: #136acd;
}
.baseline {
    transition: all 150ms ease-in-out;
    background-color: #136acd;
    /* background-color: #33475b; */
    /* color: #136acd" */
    border-radius: 24px;
    bottom: -2.5px;
    height: 4px;
    left: 0px;
    /* width: 50%; */
    opacity: 1;
}

.hide-base {
    transition: all 150ms ease-in-out;
    background-color: #136acd;
    /* background-color: #33475b; */
    border-radius: 24px;
    bottom: -2.5px;
    height: 4px;
    left: 0px;
    /* width: 50%; */
    opacity: 0;
}
    /* @media screen and (max-width: 767px ){
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
    } */
</style>