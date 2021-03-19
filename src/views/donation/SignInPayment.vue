<template>
<div class="">
    <div class="row reset-row">
        <div class="col-10 offset-1 col-lg-5 d-flex align-items-center">
            <div class="container-top">
                <div class="row">
                <div class="col-xl-10 offset-xl-1 signup-header text-center text-lg-left">Sign in to Churchplus payment</div>
            </div>
            <div class="row mt-4">
                <div class="col-xl-10 offset-xl-1">
                    <div class="label">Email address</div>
                    <div class="mt-2"><input type="email" placeholder="Enter your email" class="form-control input-control"></div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-xl-10 offset-xl-1">
                    <div class="label">Password</div>
                    <div class="mt-2"><input type="password" class="form-control input-control"></div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-xl-10 offset-xl-1 d-flex justify-content-between">
                    <div class="label">Keep me signed in</div>
                    <a href="#">Forgot  Password?</a>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-xl-10 offset-xl-1">
                    <div class="button w-100">Sign up</div>
                    <div class="label mt-4 text-center">Not registered yet? <router-link :to="`/signuppayment`">Create a new account</router-link></div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-4">
                    <hr />
                 </div>
                <div class="col-md-4 signup-option">or sign in with</div>
                <div class="col-md-4"><hr /></div>
               
            </div>
            <div class="row d-flex  justify-content-center">
                <div class="col-6 col-sm-3">
                    <img src="../../assets/google.svg">
                </div>
                <div class="col-6 col-sm-3 mt-1 text-right">
                    <img src="../../assets/facebook.svg">
                </div>
                
            </div>
            </div>
            
        </div>
        <div class="col-lg-4 offset-lg-2 px-0 d-none d-lg-block">
            <img src="../../assets/Group257.png" class="w-100" style="height: 100vh">
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
.container-top {
    margin-top: 50px
}

.signup-header {
    font: normal normal 900 52px/71px Nunito Sans;
    letter-spacing: 0px;
    color: #051048;
    opacity: 1;
    margin-top: 25px;
}

.label {
    font: normal normal bold 16px/22px Nunito Sans;
    letter-spacing: 0px;
    color: #020F1E;
}

.input-control {
    background: #E9EFF6 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 0.4;
    height: 70px;
    border: none;
}

.button {
    background: #1351CD 0% 0% no-repeat padding-box;
    box-shadow: 0px 12px 45px #1351CD61;
    border-radius: 11px;
    opacity: 1;
    text-align: center;
    font: normal normal bold 18px/24px Nunito Sans;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding:20px;
    align-items: center;
    margin: 0
}

.signup-option {
    font: normal normal bold 18px/24px Nunito Sans;
    letter-spacing: 0px;
    color: #020F1E;
    opacity: 0.6;
    text-align: center
}

.reset-row {
    margin-right: 0
}
</style>