<template>
    <div class="container">
        <div class="row my-5">
            <div class="col-md-12">
                <h4 class="font-weight-bold">Marked Attendance</h4>
                <p class="small-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-8">
                <p class="search-span px-2">
                    <i class="fa fa-check" style="height: 30px;width:30px"></i>
                    <input type="text" class="search-control" placeholder="Type name to filter list...">
                </p>
            </div>
            <div class="col-md-4">
                <button class="default-btn kiosk-mode font-weight-700">Launch kiosk mode</button>
            </div>
        </div>

        <div class="row main-th font-weight-700 py-2 grey-rounded-bg">
            <div class="col-md-3">
                Name
            </div>
            <div class="col-md-5">Phone Number</div>
            <div class="col-md-2">Check-in</div>
            <div class="col-md-2">Check-out</div>
        </div>

        <div class="row main-th font-weight-700 py-2 grey-rounded-bg">
            <div class="col-md-3">
                <span class="d-flex justify-content-between">
                    <span class="hidden-header">Name</span>
                    <span>name</span>
                </span>
            </div>
            <div class="col-md-5">
                <span class="d-flex justify-content-between">
                    <span class="hidden-header">Phone Number</span>
                    <span>phone</span>
                </span>
            </div>
            <div class="col-md-2">
                <span class="d-flex justify-content-between">
                    <span class="hidden-header">Check-in</span>
                    <span>checkin</span>
                </span>
            </div>
            <div class="col-md-2">
                <span class="d-flex justify-content-between">
                    <span class="hidden-header">Check-out</span>
                    <span>checkout</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    * {
        color: #02172E;
        font-family: Nunito sans-serif;
    }
    
    .search-control {
        width: calc(100% - 30px);
        padding: .38rem;
        border: none;
        background: transparent;
    }

    .search-span {
        background: #F5F8F9;
        border-radius: 200px;
        width: 100%;
    }

    .kiosk-mode {
        background: #DDE2E6;
        border-radius: 20px;
        border: transparent;
    }

    .main-th {
        background: #F5F8F9;
    }
</style>