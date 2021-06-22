<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-12 col-md-5 offset-md-1" style="height: 99.5vh; ">
                <div class=" container">
                    <div class="row justify-content-center">
                        <div class=" col-10 my-5 "><img src="../../assets/logoblue.png" style="height: 35px; width: 250px" alt=""></div>
                        <div class="col-10 my-3">
                            <h1 class="font-weight-bold ">Create an account</h1>
                        </div>
                    </div>
                    <form @submit.prevent="signUp" class="row justify-content-center mb-3">
                        <div class="col-10">
                             <label class="font-weight-bold">What's your name?</label>
                        </div>
                        <div class="col-5  form-group">
                            <input type="text" class=" form-control  font-italic all-input " v-model="userDetails.firstName" placeholder="First name">
                        </div>
                        <div class="col-5 form-group">
                            <input type="text" class=" form-control all-input" v-model="userDetails.lastName" placeholder="Last name">
                        </div>
                        <div class="col-10 form-group">
                            <label class="font-weight-bold ">Email</label>
                            <input type="text" class=" form-control all-input " v-model="userDetails.email" placeholder="Enter email">
                        </div>
                        <div class="col-5 ">
                            <label class="font-weight-bold" >Role</label>
                            <Dropdown 
                            class="w-100  all-input"
                            :options="roles"
                            optionLabel="name"
                            placeholder="Select role"
                            v-model="selectedRole"
                             />
                        </div>
                        <div class="col-5 form-group">
                            <label class="font-weight-bold"> Password </label>
                            <input type="password" class=" form-control all-input" v-model="userDetails.password" placeholder="Enter password">
                            <span class="py-2">Must be six character long</span>
                        </div>
                        <div class="col-10"><button class="btn btn-primary create-btn font-weight-bold w-100">Create an account</button></div>                       
                    </form>
                    <div class="row my-3 justify-content-center ">
                        <div class="col-4  border-bottom "></div>
                        <div class="col-1 text-center">or </div>
                        <div class="col-4  border-bottom "></div>
                    </div>
                    
                    <div class="row justify-content-center ">
                        <!-- Social Media -->
                        <div class="col-2"><img src="../../assets/google.png" alt=""></div>
                        <div class="col-2"><img src="" alt=""></div>
                        <div class="col-2"><img src="../../assets/facebook.png" alt=""></div>
                        <div class="col-10 my-4 text-center font-weight-bold">
                            <span>Already have an account?</span> 
                            <router-link :to="{ name: 'CheckinSignin', params: { tenantId: route.params.tenantId } }">Sign in now</router-link>
                        </div>
                        <div class="col-10 mt-3 font-weight-bold">All Right Reserved 2021</div>
                    </div>
                    
                    
                </div>
            </div>
            <div class="col-5 col-md-5 offset-md-1 childimage d-none d-md-block  d-lg-block" >
                   <div class="text-white "><h1>Churchplus <br> Child Checkin <br> System</h1></div>
                <!-- <img src="../../../assets/child1.png" alt=""> -->
            </div>
        </div>
    </div>
    
</template>
<script>
import { ref } from "vue"
import Dropdown from "primevue/dropdown";
import { useRoute } from "vue-router"
import axios from "@/gateway/backendapi";
import router from "../../router";
export default ({
    components: { Dropdown },
    setup() {
        const route = useRoute()
        const userDetails = ref({
            tenantId: route.params.tenantId
        })
        const roles = ref([])
        const selectedRole = ref({})

        const getFamilyRoles = async () => {
            try {
                let { data } = await axios.get('/getfamilyroles')
                console.log(data)
                const father = data.result.find(i => {
                    return i.name === "Father"
                })
                roles.value.push(father)
                
                const mother = data.result.find(i => {
                    return i.name === "Mother"
                })
                roles.value.push(mother)
            }
            catch (err) {
                console.log(err)
            }
        }
        getFamilyRoles()

        const signUp = async() => {
            userDetails.value.familyRole = selectedRole.value.id
            console.log(userDetails.value)

            try {
                let res = await axios.post('/familyRegister', userDetails.value)
                console.log(res)
                localStorage.setItem('checkinToken', res.data.loginData.result.value.token)
                router.push({ name: 'CheckinDashboard', query: { person: res.data.personID} })
            }
            catch (err) {
                console.log(err)
            }
            
        }
        return {
            userDetails,
            signUp,
            roles,
            selectedRole,
            route
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
