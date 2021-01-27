<template>
    <div>
        <div class="container">
            <div class="row main">
                <div class="col-md-12 primary-bg py-5 main-top mt-4">
                    <p class="text-center"><i class="pi pi-check check-icon" style="fontSize: 2rem"></i></p>
                    <!-- <p class="text-center"><i class="pi pi-facebook check-icon"></i></p> -->
                    <p class="text-center font-weight-700 text-white mt-5">Payment was Successful</p>
                </div>
                <div class="col-md-12 py-5 main-bottom">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-center"><span>Thank You!</span> <span>For Choosing Churchplus</span></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-center">$ 1000 worth of SMS units have been succefully added to your SMS unit balance</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-center mt-5">
                            <button class="default-btn primary-bg border-0 text-white">Send SMS Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .main {
        border: 1px solid #EBEFF4;
        border-radius: 20px;
    }

    .main-top {
        border-radius: 20px 20px 0 0;
    }

    .main-bottom {
        border-radius: 0 0 20px 20px;
    }

    .check-icon {
        background: #fff;
        padding: 10px;
        border-radius: 50%;
    }
</style>