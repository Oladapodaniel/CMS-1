<template>
    <div>
        <div class="container">
            <div class="row mt-4 border mx-sm-0 rounded sub-con">
                <div class="col-md-12 col-sm-12 col-lg-12 mt-3 mb-5 border-bottom">
                    <h5 class="header5">Group Category Attendance</h5>
                </div>
                <div class="row m-auto">
                    <div class="col-md-8 offset">
                        <div class="row">
                            <div class="col-md-2 col-sm-12">
                                <h5 class="event mt-3"> Event</h5>
                            </div>
                            <div class="col-md-10 col-sm-12">
                                <Dropdown v-model="selectedEvent" :options="events"  style="width:100%" optionLabel="name" :filter="true" :disabled="true">
                                </Dropdown>
                            </div>
                            <div class="col-md-2 col-sm-12">
                                <h5 class="event mt-4"> Group</h5>
                            </div>
                            <div class="col-md-10 mt-3 col-sm-12">
                                <MultiSelect v-model="selectedGroups" :options="groups" style="width:100%" optionLabel="name" placeholder="" display="chip" disabled/>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div class="col-md-12 mt-5 mb-2 border-bottom">
                
                </div>
                 <div class="col-md-12 mb-1">
                      <h5 class="check">Check in options</h5>
                </div>
                <div class="row w-100">
                        <div class="col-md-10 offset-md-1 col-sm-11 offset-1  col-lg-7 offset-lg-2 border rounded">
                            <div class="row">
                            <div class="col-md-2 col-sm-2 image mt-3">
                                <img src="../../../assets/group.svg" alt="marked Attendance image">

                            </div>
                            <div class="col-md-10 col-sm-10  mt-3">
                                <a class="text-decoration-none"><h4 class="header4">Registration Link</h4></a>
                                <!-- <a class="c-pointer text-decoration-none"><h4 class="header4"><router-link class="text-decoration-none text-dark" :to="{ name: 'WebCheckin', params: { code: route.query.code} }">Registration Link</router-link></h4></a> -->
                                <p class="para"><span class="font-weight-700">{{ `https://my.churchplus.co/checkin/e/${route.query.code}` }}</span></p>
                            </div>
                            </div>
                        </div>
                    
                </div>
                <div class="col-md-12 mb-3">
                </div>
                <div class="row w-100">
                        <div class="col-md-10 offset-md-1 col-sm-11 offset-1  col-lg-7 offset-lg-2 border rounded">
                            <div class="row">
                            <div class="col-md-2 col-sm-2 image mt-3">
                                <img src="../../../assets/group1.svg" alt="marked Attendance image">

                            </div>
                            <div class="col-md-10 col-sm-10  mt-3">
                                <h4 class="header4"> <router-link class="text-dark text-decoration-none" :to="{ name: 'MarkAttendance', query: { id: route.query.id }}">Marked Attendance</router-link></h4>
                                <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            </div>
                        </div>
                    
                </div>
                <div class="col-md-12 mb-3">
                </div>
                   <div class="row w-100">
                        <div class="col-md-10 offset-md-1 col-sm-11 offset-1  col-lg-7 offset-lg-2 border rounded">
                            <div class="row">
                            <div class="col-md-2 col-sm-2 image mt-3">
                                <img src="../../../assets/group1.svg" alt="marked Attendance image">

                            </div>
                            <div class="col-md-10 col-sm-10  mt-3">
                                <h4 class="header4"> <router-link class="text-dark text-decoration-none" to="/tenant/attendancecheckin/childcheckin">Child Checking</router-link></h4>
                                <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            </div>
                        </div>
                    
                </div>
                <div class="col-md-12 mb-3">
                </div>
                   <div class="row w-100">
                        <div class="col-md-10 offset-md-1 col-sm-11 offset-1  col-lg-7 offset-lg-2 border rounded">
                            <div class="row">
                            <div class="col-md-2 col-sm-2 image mt-3">
                                <img src="../../../assets/group2.svg" alt="marked Attendance image">

                            </div>
                            <div class="col-md-10 col-sm-10  mt-3">
                                <h4 class="header4"> <router-link class="text-dark text-decoration-none" :to="{ name: 'USSDCheckin', query: { id: route.query.id }}">Ussd</router-link> </h4>
                                <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            </div>
                        </div>
                    
                </div>
                <div class="col-md-12 mb-3">
                </div>
                   <div class="row w-100">
                        <div class="col-md-10 offset-md-1 col-sm-11 offset-1  col-lg-7 offset-lg-2 border rounded">
                            <div class="row">
                            <div class="col-md-2 col-sm-2 image mt-3">
                                <img src="../../../assets/group2.svg" alt="marked Attendance image">

                            </div>
                            <div class="col-md-10 col-sm-10  mt-3">
                                <h4 class="header4"> <router-link class="text-dark text-decoration-none" :to="{ name: 'AttendanceQR', query: { id: route.query.id }}">QR</router-link> </h4>
                                <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            </div>
                        </div>
                    
                </div>
                <div class="col-md-12 mb-3">
                </div>
                   <div class="row w-100">
                        <div class="col-md-10 offset-md-1 col-sm-11 offset-1  col-lg-7 offset-lg-2 border rounded">
                            <div class="row">
                            <div class="col-md-2 col-sm-2 image mt-3">
                                <img src="../../../assets/group.svg" alt="marked Attendance image">

                            </div>
                            <div class="col-md-10 col-sm-10  mt-3">
                                <h4 class="header4"> <router-link class="text-dark text-decoration-none" :to="{ name: 'SMSCheckin', query: { id: route.query.id }}">Sms</router-link></h4>
                                <p class="para">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            </div>
                        </div>
                    
                </div>
                
                <div class="col-md-12 mb-3">
                </div>
            </div>

        </div>

    </div>
</template>

<script>
// import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import attendanceservice from '../../../services/attendance/attendanceservice';
import { useStore } from 'vuex';

    export default {
        components: { Dropdown, MultiSelect},

        setup() {
            const route = useRoute();
            const groups = ref([]);
            const selectedEvent = ref({ });
            const events = ref([ ]);
            const selectedGroups = ref([ ]);
            const store = useStore();

            if (route.query.activityID) {
                events.value.push({ name: route.query.activityName, id: route.query.activityID })
                selectedEvent.value = { name: route.query.activityName, id: route.query.activityID }
            }

            if (route.query.groupId) {
                groups.value.push({ name: route.query.groupName, id: route.query.groupId })
                selectedGroups.value.push({ name: route.query.groupName, id: route.query.groupId })
            }

            // const getDetails = async () => {
            //     try {
            //         const response = await attendanceservice.getReport(route.query.id);
            //         console.log(response);
            //     } catch (error) {
            //         console.log(error);
            //     }
            // }

            const attendanceCheckinInStore = ref(store.getters["attendance/attendanceItemData"]);

            const initCheckinAttendanceInStore = async () => {
                try {
                    const response = await attendanceservice.getItemByCode(route.query.id);
                    store.dispatch("attendance/setItemData", response);
                } catch (error) {
                    console.log(error);
                }
            }
            
            if (!attendanceCheckinInStore.value || attendanceCheckinInStore.value.id !== route.query.id) initCheckinAttendanceInStore();

            // getDetails()

            return {
                groups,
                selectedEvent,
                events,
                selectedGroups,
                route,
            }
        }
        
    }
    
</script>

<style scoped>
.aten{
text-align: left;
font: normal 800 30px Nunito Sans !important;
letter-spacing: 0px;
color: #02172E;
opacity: 1;
    
}
.header5{
 font: var(--unnamed-font-style-normal) normal 600 24px/32px var(--unnamed-font-family-nunito-sans);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal 600 24px/32px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 1;
}
.event{
 font: var(--unnamed-font-style-normal) normal normal 16px/22px var(--unnamed-font-family-nunito-sans);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal normal 16px/22px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 1;
}
.check{
font: var(--unnamed-font-style-normal) normal 600 16px/22px var(--unnamed-font-family-nunito-sans);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal 600 16px/22px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 1;
}
.header4{
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 18px/24px var(--unnamed-font-family-nunito-sans);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal bold 18px/24px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 0.8;
}
.para{
font: var(--unnamed-font-style-normal) normal normal 14px/19px var(--unnamed-font-family-nunito-sans);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal normal 14px/19px Nunito Sans;
letter-spacing: 0px;
color: #02172E;
opacity: 0.8;
}

.container{
    margin-bottom: 40px;
}

</style>