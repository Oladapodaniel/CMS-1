<template>
    <div class="container-wide container-top">
        <div class="row">
            <div class="col-12 event-header">Event</div>
            <div class="col-12 mt-5 checkin-text">Upcoming Events</div>
        </div>
        <div class="row mt-3">
            <div class="col-12">18th June 2019</div>
        </div>
        <div class="row mt-4">
            <div class="col-12 card" :class="{ 'hover' : hoverIt, 'remove-hover' : !hoverIt }" @mouseover="onHover" @mouseleave="onLeave">
                <router-link :to="{ name: 'CheckinEvent' }">
                <div class="row p-3 align-items-center">
                    <div class="col-2 offset-8 offset-md-0 col-md-1">
                        <div class="child-pic"></div>
                    </div>
                    <div class="col-12 mt-3 mt-md-0 col-md-6">
                        <div class="child-name">Sunday Service</div>
                        <div class="checkin-time mt-3">08:00am</div>
                    </div>
                    <div class="col-10 col-md-3">
                        <div class="register p-2 text-center">  
                            Register for this event
                        </div>
                    </div>
                    <div class="col-1 edit"><i class="pi pi-chevron-right"></i></div>

                </div>
                </router-link>
            </div>
        </div>
        <!-- <div class="row mt-4">
            <div class="col-12 card" :class="{ 'hover' : hoverIt, 'remove-hover' : !hoverIt }" @mouseover="onHover" @mouseleave="onLeave">
                <div class="row p-3 align-items-center">
                    <div class="col-2 offset-8 offset-md-0 col-md-1">
                        <div class="child-pic"></div>
                    </div>
                    <div class="col-12 mt-3 mt-md-0 col-md-6">
                        <div class="child-name">Adedoyin Olaoluwa</div>
                        <div class="checkin-time mt-3">08:00am</div>
                    </div>
                    <div class="col-10 col-md-3">
                        <div class="register p-2 text-center">  
                            Register for this event
                        </div>
                    </div>
                    <div class="col-1 edit"><i class="pi pi-chevron-right"></i></div>

                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12 card" :class="{ 'hover' : hoverIt, 'remove-hover' : !hoverIt }" @mouseover="onHover" @mouseleave="onLeave">
                <div class="row p-3 align-items-center">
                    <div class="col-2 offset-8 offset-md-0 col-md-1">
                        <div class="child-pic"></div>
                    </div>
                    <div class="col-12 mt-3 mt-md-0 col-md-6">
                        <div class="child-name">Adedoyin Olaoluwa</div>
                        <div class="checkin-time mt-3">08:00am</div>
                    </div>
                    <div class="col-10 col-md-3">
                        <div class="register p-2 text-center">  
                            Register for this event
                        </div>
                    </div>
                    <div class="col-1 edit"><i class="pi pi-chevron-right"></i></div>

                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12 card" :class="{ 'hover' : hoverIt, 'remove-hover' : !hoverIt }" @mouseover="onHover" @mouseleave="onLeave">
                <div class="row p-3 align-items-center">
                    <div class="col-2 offset-8 offset-md-0 col-md-1">
                        <div class="child-pic"></div>
                    </div>
                    <div class="col-12 mt-3 mt-md-0 col-md-6">
                        <div class="child-name">Adedoyin Olaoluwa</div>
                        <div class="checkin-time mt-3">08:00am</div>
                    </div>
                    <div class="col-10 col-md-3">
                        <div class="register p-2 text-center">  
                            Register for this event
                        </div>
                    </div>
                    <div class="col-1 edit"><i class="pi pi-chevron-right"></i></div>

                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup () {
        const hoverIt = ref(false)

        const onHover = () => {
            hoverIt.value = true
        }

        const onLeave = () => {
            hoverIt.value = false
        }
        return {
            hoverIt,
            onHover,
            onLeave
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

.edit {
    color: #2E67CE;
}

.edit i.pi {
    font-size: 20px
}

.card {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #7070703D;
    border-radius: 10px;
}

.hover {
    cursor: pointer;
    box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.5s ease-in-out;
}
.remove-hover {
    box-shadow: none;
    transition: all 0.5s ease-in-out;
}

.register {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #2E67CE;
    border-radius: 111px;
}
</style>