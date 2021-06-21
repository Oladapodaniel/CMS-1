<template>
    <div class="container-fluid background">
        <div class="row">
            <div class="col-7 offset-1 container-top">
                <img src="../../assets/churchplus-logo.png" class="w-100"/>
            </div>
            <div class="col-10 offset-1 menu-links">
                <router-link to="/checkin">
                <div class="row" :class="{ 'active' : route.fullPath.includes('checkin'), 'style-font' : !route.fullPath.includes('checkin') }">
                    <div class="col-2">
                        <img src="../../assets/checkin-assets/dashboard.svg" >
                    </div>
                    <div class="col-10">Dashboard</div>
                </div>
                </router-link>

                <div class="row push-down" :class="{ 'active' : route.fullPath.includes('profile'), 'style-font' : !route.fullPath.includes('profile') }">
                    <div class="col-2">
                        <img src="../../assets/checkin-assets/Icon-ionic-ios-person.svg" >
                    </div>
                    <div class="col-10">Profile</div>
                </div>

                <router-link to="/family">
                    <div class="row push-down" :class="{ 'active' : route.fullPath.includes('family'), 'style-font' : !route.fullPath.includes('family') }">
                        <div class="col-2">
                            <img src="../../assets/checkin-assets/family-silhouette.svg" >
                        </div>
                        <div class="col-10">Family</div>
                    </div>
                </router-link>

                <div class="row push-down" :class="{ 'active' : route.fullPath.includes('guardian'), 'style-font' : !route.fullPath.includes('guardian') }">
                    <div class="col-2">
                        <img src="../../assets/checkin-assets/Group-16991.svg" >
                    </div>
                    <div class="col-10">Guardian</div>
                </div>
                
                <div class="row push-down" :class="{ 'active' : route.fullPath.includes('checkin-event'), 'style-font' : !route.fullPath.includes('checkin-event') }">
                    <div class="col-2">
                        <img src="../../assets/checkin-assets/Group-157.svg" >
                    </div>
                    <div class="col-10">Events</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute }  from "vue-router"
export default {
    setup () {
        const route = useRoute()
        return {
            route
        }
    }
}
</script>

<style scoped>
.background {
    background: #EBEFF4 0% 0% no-repeat padding-box;
    height: 100vh;
}

.style-font {
    font: normal normal normal 18px/24px Nunito Sans;
    letter-spacing: 0px;
    color: #020E1C;
    opacity: 0.5;
}

.active {
    font: normal normal normal 18px/24px Nunito Sans;
    letter-spacing: 0px;
    color: #2E67CE;
    opacity: 1;
}

.menu-links {
    margin-top: 45px;
}

.push-down {
    margin-top: 30px;
}
</style>