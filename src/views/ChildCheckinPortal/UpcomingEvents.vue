<template>
    <div class="container-wide container-top">
        <div class="row">
            <div class="col-12 event-header">Event</div>
            <div class="col-12 mt-5 checkin-text">Upcoming Events</div>
        </div>
        <div class="row">
            <div class="col-12">18th June 2019</div>
        </div>
        <div class="row mt-3">
            <div class="col-12 card">
                <div class="row p-3 align-items-center">
                    <!-- <div class="col-1 col-md-1">
                        <Checkbox :binary="true" v-model="check" />
                    </div> -->
                    <div class="col-2 offset-8 offset-md-0 col-md-1">
                        <div class="child-pic"></div>
                    </div>
                    <div class="col-12 mt-3 mt-md-0 col-md-4">
                        <div class="child-name">Adedoyin Olaoluwa</div>
                        <div class="checkin-time mt-2">08:00am</div>
                    </div>
                    <div class="col-10 col-md-4">   
                        Register for this event
                    </div>
                    <div class="col-1 offset-md-1 edit"><i class="pi pi-chevron-right"></i></div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        return {}
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
</style>