<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-12 col-md-5 offset-md-1">
                <div class=" container">
                    <div class="row justify-content-center">
                        <div class=" col-10 my-5 "><img :src="churchLogo" style=" width: 85px" alt=""></div>
                        <div class="col-10 my-3">
                            <h1 class="font-weight-bold ">Log in to Child Checkin</h1>
                        </div>
                    </div>
                    <form @submit.prevent="logIn" class="row justify-content-center mb-3">
                        
                
                        <div class="col-10 form-group">
                            <label class="font-weight-bold ">Email / Phone Number</label>
                            <input type="text" class=" form-control all-input " v-model="username" placeholder="Enter email / phone number">
                        </div>
                    
                        <div class="col-10 form-group">
                            <label class="font-weight-bold"> Password </label>
                            <input type="password" class=" form-control all-input" v-model="userDetails.password" placeholder="Enter password">
                            <div class="mt-1">Must be six character long</div>
                        </div>
                        <div class="col-10"><button class="btn btn-primary create-btn font-weight-bold w-100">Log in</button></div>                       
                    </form>
                    <!-- <div class="row my-3 justify-content-center ">
                        <div class="col-4  border-bottom "></div>
                        <div class="col-1 text-center">or </div>
                        <div class="col-4  border-bottom "></div>
                    </div> -->
                    
                    <div class="row  offset-1">
                        <!-- Social Media -->
                        <!-- <div class="col-2"><img src="../../assets/google.png" alt=""></div>
                        <div class="col-2"><img src="" alt=""></div>
                        <div class="col-2"><img src="../../assets/facebook.png" alt=""></div> -->
                        <div class="col-10 my-4 font-weight-bold">
                            <span>Don't have an account?</span> 
                             <router-link :to="{ name: 'CheckinSignup', params: { tenantId: route.params.tenantId } }">Sign up now</router-link>
                        </div>
                        <div class="col-10 mt-3 font-weight-bold">All Right Reserved 2021</div>
                    </div>
                    
                    
                </div>
            </div>
            <div class="col-5 col-md-5 offset-md-1 childimage d-none d-md-block  d-lg-block" >
                   <div class="text-white "><h1>Olive Tree Parish <br> Child Checkin <br> System</h1></div>
                <!-- <img src="../../../assets/child1.png" alt=""> -->
            </div>
        </div>
    </div>
    
</template>
<script>
import { ref } from "vue"
import { useRoute } from "vue-router"
import axios from "@/gateway/backendapi";
import router from "../../router";
export default ({
    setup() {
        const route = useRoute()
        const userDetails = ref({})
        const username = ref("")
        const churchLogo = ref("")


        const logIn = async() => {
            if (username.value.includes("@")) {
                userDetails.value.email = username.value
            }   else {
                userDetails.value.phoneNumber = username.value
            }
           
            console.log(userDetails.value)

            try {
                let res = await axios.post('/familyLogin', userDetails.value)
                console.log(res)
                const baseAuth = {
                    checkinPerson: res.data.personID,
                    tenantId: res.data.login.result.value.tenantID
                }

                localStorage.setItem('checkinToken', res.data.login.result.value.token)
                localStorage.setItem('baseAuth', JSON.stringify(baseAuth))
                router.push({ name: 'CheckinDashboard' })
            }
            catch (err) {
                console.log(err)
            }
            
        }

        const getChurchProfile = async() => {
            try {
                let res = await axios.get(`/GetChurchProfileById?tenantId=${route.params.tenantId}`)
                console.log(res)
                churchLogo.value = res.data.returnObject.logo
            }
            catch (err) {
                console.log(err)
            }
        }
        getChurchProfile()

        return {
            userDetails,
            logIn,
            route,
            username,
            churchLogo
        }
    },
})
</script>

<style scoped>
.all-input{
    height: 50px;
    background: #F6F6F6 0% 0% no-repeat padding-box;
}
.create-btn{
    background: #2E67CE 0% 0% no-repeat padding-box;
    height: 50px;
}
.childimage{
    /* height: 700px; */
    background: transparent url('../../assets/child1.png') 0% 0% no-repeat padding-box;
    /* opacity: 1; */
    top: 0px;
    /* left: 30px; */
    width: 1000px;
    height: 99.5vh; 
    /* border-radius: 30px; */
    position: relative;
}
.childimage h1 {
    position: absolute;
    top: 40%;
    left: 230px ;
    font-weight: bolder;
    font-size: 60px;
}

</style>
