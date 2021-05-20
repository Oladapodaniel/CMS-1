<template>
    <div>
        <div container>
            <h1 class="mt-3 pl-3 mb-3 font-weight-bolder" style="font-size:34px">{{ name1 }}</h1>
            <p class="pl-3" style="font-size:16px" >You can invite a new user to access your ChurchPlus account. Only give access to people you trust, since users can see your transactions and other business information.</p>
            <div class="invite-container" style="font-size:14px">
                <h4 class="font-weight-bold ml-0 ml-md-3 ml-sm-0">Invite New User</h4>
                <!-- <h4>Bitcoin Price Index</h4>
                <div v-for="currency in info" :key="currency">
                    {{currency.description}}
                    <span class="lighten">
                       <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
                    </span>
                    <h1 class="bg-danger text-light"> {{currency.code}}</h1>
                   

                </div>
                
                <h4>{{info}}</h4> -->
                <Toast />
               <div class="row">
                   <div class="col-lg-7 col-sm-12 border-right pr-3 mt-3 mt-lg-3 pr-lg-5 pr-sm-3" style="">
                       <div class="row mb-3">
                          <div class="col-lg-4 col-sm-12 text-lg-right text-sm-left"> <label class="">Username</label> 
                            </div>  
                            <div class="col-lg-8 col-sm-12"> <InputText type="text" required v-model="userName" class="form-control" /></div>
                        </div>
                        <div class="row mb-3 mt-5">
                        
                            <div class="col-lg-4 col-sm-12 text-lg-right text-sm-left"> <span class="">Email</span> 
                            </div>  
                            <div class="col-lg-8 col-sm-12 "> <InputText type="text" required v-model="mail" class="form-control"/></div>
                        </div>
                        <div class="row mb-3 mt-5">
                          <div class="col-lg-4 col-sm-12 text-lg-right text-sm-left"> <span class="">Phone Number</span> 
                            </div>  
                            <div class="col-lg-8 col-sm-12 "> <InputText type="number" class="form-control" required v-model="phoneNumber"  /></div>
                        </div>
                         <div class="row mb-3 mt-5">
                          <div class="col-lg-4 col-sm-12 text-lg-right text-sm-left"> <span class="">Password</span> 
                            </div>  
                            <div class="col-lg-8 col-sm-12 "> <Password class="form-control" required v-model="password1"  /></div>
                        </div>
                        <div class="row mb-5 mt-5">
                         <div class="col-lg-4 col-sm-12 text-lg-right text-sm-left"> <span class="">Confirm Password</span> 
                            </div>  
                            <div class="col-lg-8 col-sm-12 "> <Password class="form-control" v-model="password2" required /></div>
                        </div>
                         
                        <!-- <div class="row mb-3">
                        
                            <div class="col-lg-4 col-sm-12 text-lg-right text-sm-left"> <span class="">Secret Questions</span> 
                            </div>  
                            <div class="col-lg-8 col-sm-12 "> <InputText type="text" class="form-control"/></div>
                        </div> -->
                        <!-- <div class="row mb-3">
                        
                            <div class="col-lg-4 col-sm-12 text-lg-right text-sm-left"> <span class="">Secret Answers</span> 
                            </div>  
                            <div class="col-lg-8 col-sm-12"> <InputText type="text" class="form-control" /></div>
                        </div> -->
                   </div>

                   <div class="col-lg-5 col-sm-12 mt-lg-0 mt-sm-5 mt-md-5 mt-lg-0 mt-5 pl-lg-5 pr-lg-5 pl-sm-3 pr-3 pr-sm-2">
                       <div class="row">
                            <div class="col-12 mt-5">
                                <h4 class="mt-sm-5 mt-5 mt-xl-0 mt-md-5 mt-lg-0">Admin Permission</h4>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p>Best for a business partner, family member or trusted accountant</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <table class="table border-none m-0">
                                    <tbody>
                                        <tr>
                                        <td>First timers</td>
                                        <td>
                                             {{ canAccessFT ? "Full Access" : "No Access"}}</td>
                                        </tr>
                                        <tr>
                                        <td>New Converts</td>
                                        <td>{{ canAccessFT ? "Full Access" : "No Access" }}</td>
                                        </tr>
                                         <tr>
                                        <td>FollowUps</td>
                                        <td>{{  canAccessFu ? "Full Access" : "No Access" }}</td>
                                        </tr>
                                         <tr>
                                        <td>Center Leader</td>
                                        <td>{{  canAccessCl ? "Full Access" : "No Access"  }}</td>
                                        </tr>
                                         <tr>
                                        <td>Financial Account</td>
                                        <td>{{ canAccessFa ? "Full Access" : "No Access" }}</td>
                                        </tr>
                                         <tr>
                                        <td>Reports</td>
                                        <td>{{ canAccessRe ? "Full Access" : "No Access"  }}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                  
                            </div>

                        </div>
                   </div>
               </div>

                <div class="row">
                    <div class="col-lg-7 col-sm-12 mt-sm-4 mt-4 mt-lg-3">
                        <!-- Roles -->
                        <div class="ml-5 mt-2 mt-lg-0">
                            <div class="row mb-2 mb-lg-2"> 
                                <span class="col-lg-2 mb-lg-0 mb-3"></span> <span class="col-lg-1 mb-lg-0 mb-3 font-weight-bold">Role</span> <div class="col-md-7">
                                    <Checkbox  
                                    v-model="roles1"
                                    value="Admin" 
                                    />
                                     Admin
                                     </div>
                            </div>
                            <div class="row mb-2">
                               <span class="col-lg-3"></span><div class="col-lg-7">
                                   <Checkbox value="BasicUser" 
                                   v-model="roles1" 
                                   /> 
                                   BasicUser
                                   </div>
                            </div>
                            <div class="row mb-2">
                               <span class="col-lg-3"></span><div class="col-lg-7">
                                   <Checkbox value="CanAccessFirstTimers" 
                                   v-model="roles1" 
                                   />
                                    CanAccessFirstTimers
                                    </div>
                            </div>
                            <div class="row mb-2">
                               <span class="col-lg-3"></span><div class="col-lg-7">
                                   <Checkbox value="CanAccessFollowUps" 
                                   v-model="roles1"
                                   /> 
                                   CanAccessFollowUps
                                   </div>
                            </div>
                            <div class="row mb-2">
                               <span class="col-lg-3"></span><div class="col-lg-7">
                                   <Checkbox value="CenterLeader"
                                   v-model="roles1"   
                                   /> 
                                   CenterLeader
                                   </div>
                            </div>
                            <div class="row mb-2">
                               <span class="col-lg-3"></span><div class="col-lg-7">
                                   <Checkbox value="FinancialAccount" 
                                   v-model="roles1" 
                                   /> 
                                   FinancialAccount
                                   </div>
                            </div>
                            <div class="row mb-2">
                               <span class="col-lg-3"></span><div class="col-lg-7">
                                   <Checkbox value="mobileAdmin" 
                                   v-model="roles1" 
                                   /> 
                                   MobileAdmin
                                   </div>
                            </div>
                            <div class="row mb-2">
                               <span class="col-lg-3"></span><div class="col-lg-7">
                                   <Checkbox value="Reports" 
                                   v-model="roles1" 
                                   /> 
                                   Reports
                                   </div>
                            </div>
                            <br>

                        </div>
                    </div>
                    <div class="col-lg-5 ">
                        <!-- <div class="row mt-sm-3 mt-3 mb-lg-5" style="">
                        <div class=" col-lg-12 d-flex justify-content-center col-sm-12 col-12 w-100 button-add mt-5">
                           <button type="button" class="btn btn-primary saveButton mr-2" style="border-radius:22px; font-size: 16px; font-weight: 600">Save User</button>
                           <button type="button" class="btn btn-outline-secondary ml-2" style="border-radius: 22px; font-size: 16px; font-weight: 600; outline: none; hover:none">Discard</button>
                        </div> 
                        </div> -->
                    </div>
                </div>
                <div class="row mb-lg-5">
                    <div class="col-lg-7">
                    </div>
                    <div class="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-around">
                        <router-link to="/tenant/settings"> <button type="button" class="btn px-3 btn-outline-secondary mr-3" style="border-radius: 22px; font-size: 16px; font-weight: 600; outline: none; hover:none">Discard</button></router-link>
                        <button type="button" class="btn px-3 btn-primary saveButton ml-3" style="border-radius:22px; font-size: 16px; font-weight: 600" @click="createNewUser">Save User</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>







<script>
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast'
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import axios from "@/gateway/backendapi";
import store from "@/store/store";
// import { error } from 'highcharts';
// import ref from 'Vue'
    export default {
        components:{InputText, Password, Checkbox,Toast},
        data() {
		return {
            roles: [],
            roles1: [],
            userName:'',
            mail:'',
            password1: '',
            password2: '',
            phoneNumber: '',
            name2: '',
            info: null,
            currentUser: store.getters.currentUser,
            FtRoles: [ "Admin","BasicUser",],
            FuRoles: [ "Admin", "CanAccessFollowUps" ],
            ClRoles: [ "Admin", "CenterLeader" ],
            FaRoles: [ "Admin","FinancialAccount"],
            ReRoles: [ "Admin", "Reports"]


		}
	} ,

    computed: {
        name1() {
            if (!this.currentUser.churchName) return "";
            return this.currentUser.churchName;
        },

        canAccessFT() {
            let result = false;
            this.roles.forEach(i => {
                if (this.FtRoles.indexOf(i) !== -1) {
                    result = true;
                    return true;
                }
            })
            return result;
        },
        canAccessFu() {
            let result = false;
            this.roles.forEach(i => {
                if (this.FuRoles.indexOf(i) !== -1) {
                    result = true;
                    return true;
                }
            })
            return result;
        },
        canAccessCl() {
            let result = false;
            this.roles.forEach(i => {
                if (this.ClRoles.indexOf(i) !== -1) {
                    result = true;
                    return true;
                }
            })
            return result;
        },
         canAccessFa() {
            let result = false;
            this.roles.forEach(i => {
                if (this.FaRoles.indexOf(i) !== -1) {
                    result = true;
                    return true;
                }
            })
            return result;
        },
        canAccessRe(){
            let result= false;
            this.roles.forEach(i => {
                if( this.ReRoles.indexOf(i) !== -1){
                    result = true;
                    return true;

                }
            })
            return result

        }
    },
    methods:{
        roleSelected(e){
            if(!this.roles1.includes(e)){
                console.log(e);
                this.roles1.push(e)

            }


        },
        createNewUser(){
            if( this.userName === '' || this.password1 === '' || this.mail === '' || this.password2 === '' || this.phoneNumber === ''){
                this.$toast.add({
                severity:'error', 
                summary:'Confirmed', 
                detail:'Input Your Complete Details', 
                life: 4000
                });
                

            }
            if(this.password1.length < 6){
                this.$toast.add({
                severity:'error', 
                summary:'Confirmed', 
                detail:'Ensured Your Password is More than 6 character', 
                life: 4000

                })
            }
            if(this.password1 !== this.password2){
                this.$toast.add({
                severity:'error', 
                summary:'Confirmed', 
                detail:'Ensured Your Password is same', 
                life: 4000
                });
                

            }

            let createNew = {
                email : this.mail,
                password: this.password1,
                name : this.userName,
                roles : this.roles1,
                phone: this.phoneNumber
                
            }
            axios.post(`/api/Settings/CreatNewUser`,createNew)
            .then((res)=>{
                this.$toast.add({
                severity:'success', 
                summary:'Confirmed', 
                detail:'New User Saved Successfully', 
                life: 4000
                });
                console.log(res);
                console.log('wisdom is great');
                this.$router.push('/tenant/settings')
            }).catch((error)=>{
                console.log(error);
                this.$toast.add({
                severity:'error', 
                summary:'Confirmed', 
                detail:'Check your Internet Connectivity', 
                life: 4000
                })
            })
            

            

        }

    },

    
    
    
    
    
    
    
    
    
    mounted(){
        //     axios
        // .get(`/api/Settings/GetTenantPeopleClassification`)
        // .then((res) => {res.data;
        //     console.log(res.data);
        // })
        // .catch((err) => console.log(err));
        // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        // .then(response => (this.info = response.data.bpi))
        // .catch(error=> console.log(error))
        console.log(store.getters.currentUser)
        if(!store.getters.currentUser.churchName){
            axios
            .get(`/api/Membership/GetCurrentSignedInUser`)
            .then((response) =>{
                this.currentUser = response.data;
            console.log(response.data)
        
        })
            .catch((error)=> console.log(error))
            
        }
     
    
    }
    // const: getCurrentName = computed(() => {
    //   return store.getters.churchName ;
    //   console.log(getCurrentName)
    // }),
    }
</script>

<style scoped>
.invite-container{
    width: 100%;
    margin-top: 20px;
    margin-left: 14px;
    height: 800px;

}
.new span{
    text-align: right;
}
.table{
    border-radius: 0!important;
}
.button-add button{
    width: 110px;
}
.btn-outline-secondary:hover{
    background-color: white;
    color: rgb(110, 104, 104);
}
.border-right{
    height: 390px!important;
    /* margin-right: -px!important; */
}
.invite-container{
    width: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 15px 30px #00000029;
    border: 1px solid #DDE2E6;
    border-radius: 10px;
    opacity: 1;
    height: auto;
    padding: 10px 10px;
}
</style>