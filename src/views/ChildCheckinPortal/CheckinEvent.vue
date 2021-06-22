<template>
    <div class="container-wide container-top">
        <div class="row">
            <div class="col-12 event-header">Event</div>
            <div class="col-12 mt-5 checkin-text">Checkin</div>
        </div>
        <div class="row">
            <div class="card col-10 offset-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 spacen-up">
                <div class="row">
                    <div class="col-3 offset-4 offset-sm-0"><div class="event-picture"></div></div>
                    <div class="col-sm-6 text-center mt-3 mt-sm-0">
                        <div class="event-service">Sunday Service</div>
                        <div class="event-time">12/2/2012 12:00am</div>
                    </div>
                    <div class="col-10 offset-1 offset-sm-0 mt-2 mt-sm-0 col-sm-3 align-self-center">
                        <router-link :to="{ name: 'UpcomingEvents' }">
                        <div class="change text-center p-2">
                            Change
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 my-3">
                <hr />
            </div>
        </div>
        <div class="row d-flex flex-column flex-sm-row justify-content-between p-3">
            <div class="family-name align-self-sm-center">Adepoju's Household</div>
            <div class="mt-3 mt-sm-0">
                <div class="add-ward text-center p-2">
                            Add ward
                        </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12 card">
                <div class="row p-3 align-items-center">
                    <div class="col-1 col-md-1">
                        <Checkbox :binary="true" v-model="check" />
                    </div>
                    <div class="col-2 offset-8 offset-md-0 col-md-1">
                        <div class="child-pic"></div>
                    </div>
                    <div class="col-12 mt-3 mt-md-0 col-md-4">
                        <div class="child-name">Adedoyin Olaoluwa</div>
                        <div class="checkin-time mt-2">08:00am</div>
                    </div>
                    <div class="col-10 col-md-4 mt-3">   
                        <div class="row">
                            <div class="col-4 mt-2"> Group: </div>
                            <div class="col-8">
                                <Dropdown class="p-0 w-100" options="[1, 2, 4, 5, 6, 7, 8]" :filter="false" placeholder="Select" :showClear="false">
                                </Dropdown>
                            <div class="slot mt-2">23 slots available</div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-1 offset-md-1 edit"><i class="pi pi-pencil"></i></div>

                </div>
            </div>
        </div>



         <div class="row mt-3">
            <div class="col-12 card">
                <div class="row p-3 align-items-center">
                    <div class="col-1 col-md-1">
                        <Checkbox :binary="true" v-model="check" />
                    </div>
                    <div class="col-2 offset-8 offset-md-0 col-md-1">
                        <div class="child-pic"></div>
                    </div>
                    <div class="col-12 mt-3 mt-md-0 col-md-4">
                        <div class="child-name">Adedoyin Olaoluwa</div>
                        <div class="checkin-time mt-2">08:00am</div>
                    </div>
                    <div class="col-10 col-md-4 mt-3">   
                        <div class="row">
                            <div class="col-4 mt-2"> Group: </div>
                            <div class="col-8">
                                <Dropdown class="p-0 w-100" options="[1, 2, 4, 5, 6, 7, 8]" :filter="false" placeholder="Select" :showClear="false">
                                </Dropdown>
                            <div class="slot mt-2">23 slots available</div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-1 offset-md-1 edit"><i class="pi pi-pencil"></i></div>

                </div>
            </div>
        </div>


         <div class="row mt-3">
            <div class="col-12 card">
                <div class="row p-3 align-items-center">
                    <div class="col-1 col-md-1">
                        <Checkbox :binary="true" v-model="check" />
                    </div>
                    <div class="col-2 offset-8 offset-md-0 col-md-1">
                        <div class="child-pic"></div>
                    </div>
                    <div class="col-12 mt-3 mt-md-0 col-md-4">
                        <div class="child-name">Adedoyin Olaoluwa</div>
                        <div class="checkin-time mt-2">08:00am</div>
                    </div>
                    <div class="col-10 col-md-4 mt-3">   
                        <div class="row">
                            <div class="col-4 mt-2"> Group: </div>
                            <div class="col-8">
                                <Dropdown class="p-0 w-100" options="[1, 2, 4, 5, 6, 7, 8]" :filter="false" placeholder="Select" :showClear="false">
                                </Dropdown>
                            <div class="slot mt-2">23 slots available</div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-1 offset-md-1 edit"><i class="pi pi-pencil"></i></div>

                </div>
            </div>
        </div>


        <div class="row d-flex d-flex flex-column flex-sm-row justify-content-between my-5">
            <div class="col-10 offset-1 offset-md-0 col-md-4 p-0">
                <Dropdown class="p-0 w-100 guardian" options="[1, 2, 4, 5, 6, 7, 8]" :filter="false" placeholder="Checked in by Daniel Dickson" :showClear="false">
                </Dropdown> 
            </div>
            <div class="col-10 offset-1 offset-md-0 col-md-4 number-checkin-child px-4 py-2 text-white text-center mt-3 mt-md-0">
                Checkin 2 people
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import Dropdown from 'primevue/dropdown';
export default {
    components: {
        Dropdown
    },
    setup () {
        const check = ref(true)
        return {
            check
        }
    }
}
</script>

<style scoped>
.event-header {
    font: normal normal 800 29px/46px Nunito Sans;
    letter-spacing: 0px;
    color: #02172E;
}

.checkin-text {
    font: normal normal 700 21px/32px Nunito Sans;
    letter-spacing: 0px;
    color: #02172E;
}

.event-service {
    font: normal normal bold 18px/27px Nunito Sans;
    color: #02172E;
}

.spacen-up {
    padding: 30px
}

.event-time {
    font: normal normal 600 14px/22px Nunito Sans;
    color: #02172E;
    opacity: 0.66;
}

.change {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #2E67CE;
    border-radius: 111px;
    font: normal normal 600 16px/22px Nunito Sans;
    color: #2E67CE;
}

.add-ward {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #2E67CE;
    border-radius: 111px;
    font: normal normal bold 15px/20px Nunito Sans;
    color: #2E67CE;
    width: 132px
}

.event-picture {
    border: 1px solid black;
    width: 61px;
    height: 61px;
    border-radius: 50%
}

.family-name {
    font: normal normal 600 24px/13px Nunito Sans;
    color: #002044;
}

.child-pic {
    border: 1px solid black;
    width: 55px;
    height: 55px;
    border-radius: 50%
}

.child-name {
    font: normal normal 600 20px/13px Nunito Sans;
    color: #002044;
}

.checkin-time {
    font: normal normal 600 13px/13px Nunito Sans;
    color: #002044;
}

.slot {
    font: normal normal 600 13px/16px Nunito Sans;
    color: #2E67CE;
}

.edit {
    color: #2E67CE;
}

.edit i.pi {
    font-size: 20px
}

.guardian {
    background: #F1FAFF 0% 0% no-repeat padding-box;
    border: 1px solid #7070702E;
    border-radius: 5px;
}
.number-checkin-child {
    background: #136ACD 0% 0% no-repeat padding-box;
    border-radius: 22px;
}
</style>