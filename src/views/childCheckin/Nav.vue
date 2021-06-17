<template>
    <div class="container-fluid background">
        <div class="row">
            <div class="col-12 container-top">
                <img src="../../assets/churchplus-logo.png"/>
            </div>
            <div class="col-12">
                <div class="row style-font">
                    <div class="col-4">Query</div>
                    <div class="col-8">Dashboard</div>
                </div>

                <div class="row">
                    <div class="col-4">Query</div>
                    <div class="col-8">Profile</div>
                </div>

                <div class="row">
                    <div class="col-4">Query</div>
                    <div class="col-8">Family</div>
                </div>

                <div class="row">
                    <div class="col-4">Query</div>
                    <div class="col-8">Guardian</div>
                </div>
                
                <div class="row">
                    <div class="col-4">Query</div>
                    <div class="col-8">Events</div>
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
.background {
    background: #EBEFF4 0% 0% no-repeat padding-box;
    height: 100vh;
}

.style-font {
    font: normal normal bold 18px/24px Nunito Sans;
    letter-spacing: 0px;
    color: #020E1C;
    opacity: 0.5;
}

.active {
    font: normal normal bold 18px/24px Nunito Sans;
    letter-spacing: 0px;
    color: #2E67CE;
    opacity: 1;
}
</style>