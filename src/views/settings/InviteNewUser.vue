
<template>
    <div>
        <div container>
            <h1 class="mt-3 pl-3 mb-3 font-weight-bolder" style="font-size:34px">{{currentUser ? currentUser.churchName : '' }}</h1>
            <p class="pl-3" style="font-size:16px" >You can invite a new user to access your ChurchPlus account. Only give access to people you trust, since users can see your transactions and other business information.</p>
            <div class="invite-container" style="font-size:14px">
                <h4 class="font-weight-bold ml-0 ml-md-3 ml-sm-0">{{ $route.query.email ? 'Edit New User' : inviteNew}}</h4>
                <!-- <h4 class="font-weight-bold ml-0 ml-md-3 ml-sm-0">{{editContent}}</h4> -->
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
                          <div class="col-lg-4 col-sm-12 text-lg-right text-sm-left"> <label class="">Name</label>
                            </div>
                            <div class="col-lg-8 col-sm-12"> <InputText type="text" required v-model="userName" class="form-control" /></div>
                        </div>
                        <div class="row mb-3 mt-5">

                            <div class="col-lg-4 col-sm-12 text-lg-right text-sm-left"> <span class="">Email</span>
                            </div>
                            <div class="col-lg-8 col-sm-12 "> <InputText type="text" :disabled="disabled" required v-model="mail" class="form-control"/></div>
                        </div>
                        <div class="row mb-3 mt-5">
                          <div class="col-lg-4 col-sm-12 text-lg-right text-sm-left"> <span class="">Phone Number</span>
                            </div>
                            <div class="col-lg-8 col-sm-12 "> <InputText type="Text"  class="form-control" required v-model="phoneNumber"  /></div>
                        </div>
                         <div class="row mb-3 mt-5">
                          <div class="col-lg-4 col-sm-12 text-lg-right text-sm-left"> <span class="">Password</span>
                            </div>
                            <div class="col-lg-8 col-sm-12 "> <Password class="form-control" :disabled="disabled" required v-model="password1"  /></div>
                        </div>
                        <div class="row mb-5 mt-5">
                         <div class="col-lg-4 col-sm-12 text-lg-right text-sm-left"> <span class="">Confirm Password</span>
                            </div>
                            <div class="col-lg-8 col-sm-12 "> <Password class="form-control" :disabled="disabled" v-model="password2" required /></div>
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
                            <div class="col-12 mt-xl-0 mt-md-5">
                                <h4 class="mt-sm-5 mt-5 mt-xl-0 mt-md-5 mt-lg-0 adminPermission">Admin Permission</h4>
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
                                        <td>Basic User</td>
                                        <td :class ="{ 'text-success' : canAccessBasicUser }">
                                             {{ canAccessBasicUser ? "Full Access" : "No Access"}}
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>First timers</td>
                                        <td :class ="{ 'text-success' : canAccessFT}">
                                             {{ canAccessFT ? "Full Access" : "No Access"}}
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>Follow Ups</td>
                                        <td :class ="{ 'text-success' : canAccessFollowUps}">
                                            {{ canAccessFollowUps ? "Full Access" : "No Access" }}
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>Center Leader</td>
                                        <td :class ="{ 'text-success' : canAccessCenterLeader}">
                                            {{  canAccessCenterLeader ? "Full Access" : "No Access"  }}
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>Financial Account</td>
                                        <td :class ="{ 'text-success' : canAccessFinancialAccount}">
                                            {{ canAccessFinancialAccount ? "Full Access" : "No Access" }}
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>Mobile Admin</td>
                                        <td :class ="{ 'text-success' : mobileAdmin}">
                                            {{ mobileAdmin ? "Full Access" : "No Access" }}
                                        </td>
                                        </tr>
                                         <tr>
                                        <td>Reports</td>
                                        <td :class ="{ 'text-success' : canAccessReports}">
                                            {{ canAccessReports ? "Full Access" : "No Access"  }}
                                        </td>
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
                                   :class="{'bg-secondary': roles1.includes('Admin')}"
                                   :disabled="roles1.includes('Admin')"
                                   />
                                   BasicUser
                                   </div>
                            </div>
                            <div class="row mb-2">
                               <span class="col-lg-3"></span><div class="col-lg-7">
                                   <Checkbox value="CanAccessFirstTimers"
                                   v-model="roles1"
                                   :class="{'bg-secondary': roles1.includes('Admin')}"
                                   :disabled="roles1.includes('Admin')"
                                   />
                                    CanAccessFirstTimers
                                    </div>
                            </div>
                            <div class="row mb-2">
                               <span class="col-lg-3"></span><div class="col-lg-7">
                                   <Checkbox value="CanAccessFollowUps"
                                   v-model="roles1"
                                   :class="{'bg-secondary':roles1.includes('Admin')}"
                                   :disabled="roles1.includes('Admin')"
                                   />
                                   CanAccessFollowUps
                                   </div>
                            </div>
                            <div class="row mb-2">
                               <span class="col-lg-3"></span><div class="col-lg-7">
                                   <Checkbox value="CenterLeader"
                                   v-model="roles1"
                                   :class="{'bg-secondary': roles1.includes('Admin')}"
                                   :disabled="roles1.includes('Admin')"
                                   />
                                   CenterLeader
                                   </div>
                            </div>
                            <div class="row mb-2">
                               <span class="col-lg-3"></span><div class="col-lg-7">
                                   <Checkbox value="FinancialAccount"
                                   v-model="roles1"
                                   :class="{'bg-secondary': roles1.includes('Admin') }"
                                   :disabled="roles1.includes('Admin')"
                                   />
                                   FinancialAccount
                                   </div>
                            </div>
                            <div class="row mb-2">
                               <span class="col-lg-3"></span><div class="col-lg-7">
                                   <Checkbox value="MobileAdmin"
                                   v-model="roles1"
                                   :class="{'bg-secondary': roles1.includes('Admin') }"
                                   :disabled="roles1.includes('Admin')"
                                   />
                                   MobileAdmin
                                   </div>
                            </div>
                            <div class="row mb-2">
                               <span class="col-lg-3"></span><div class="col-lg-7">
                                   <Checkbox value="Reports"
                                   v-model="roles1"
                                   :class="{'bg-secondary' : roles1.includes('Admin')}"
                                   :disabled="roles1.includes('Admin')"
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
                        <button type="button" class="btn px-3 btn-primary saveButton ml-3" style="border-radius:22px; font-size: 16px; font-weight: 600" @click="callButton">Save User</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import InputText from 'primevue/inputtext';
// import ProgressSpinner from 'primvue/progressspinner';
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
            inviteNew: 'Invite New User',
            roles1: [],
            userName:'',
            disabled: false,
            disable: false,
            mail:'',
            password1: '',
            password2: '',
            phoneNumber: '',
            name2: '',
            info: null,
            defaultEmail: {},
            currentUser: store.getters.currentUser,
            BURoles: [ "Admin","BasicUser",],
            FtRoles: [ "Admin","CanAccessFirstTimers",],
            FuRoles: [ "Admin", "CanAccessFollowUps" ],
            FaRoles: [ "Admin","FinancialAccount"],
            ClRoles: [ "Admin", "CenterLeader" ],
            MaRoles: [ "Admin", "MobileAdmin" ],
            ReRoles: [ "Admin", "Reports"]


		}
	} ,

    computed: {
        canAccessFT() {
            // if (this.roles1.indexOf("Admin") >= 0) return true;
            // if (this.roles1.indexOf("CanAccessFirstTimers") >= 2) return true;
            //  return false;
            let result = false;
            this.roles1.forEach(i =>{
                if(this.FtRoles.indexOf(i) !== -1){
                    result = true;
                    return true
                }
            })
            return result
        },
        canAccessBasicUser(){
            let result = false;
            this.roles1.forEach(i =>{
                if(this.BURoles.indexOf(i) !== -1){
                    result = true;
                    return true
                }
            })
            return result

        },
        canAccessFollowUps() {
            let result = false;
            this.roles1.forEach(i => {
                if (this.FuRoles.indexOf(i) !== -1) {
                    result = true;
                    return true;
                }
            })
            return result;
        },
        canAccessCenterLeader() {
            let result = false;
            this.roles1.forEach(i => {
                if (this.ClRoles.indexOf(i) !== -1) {
                    result = true;
                    return true;
                }
            })
            return result;
        },
         canAccessFinancialAccount() {
            let result = false;
            this.roles1.forEach(i => {
                if (this.FaRoles.indexOf(i) !== -1) {
                    result = true;
                    return true;
                }
            })
            return result;
        },
         mobileAdmin() {
            let result = false;
            this.roles1.forEach(i => {
                if (this.MaRoles.indexOf(i) !== -1) {
                    result = true;
                    return true;
                }
            })
            return result;
        },
        canAccessReports(){
            let result= false;
            this.roles1.forEach(i => {
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
          callButton(){
        if(!this.$route.query.email){
            this.createNewUser()
        } else {
            this.updateChurchUser()
        }

    },
        createNewUser(){
            if(this.userName === '' || this.password1 === '' || this.mail === '' || this.password2 === '' || this.phoneNumber === ''){
                this.$toast.add({
                severity:'error',
                summary:'Confirmed',
                detail:'Input Your Complete Details',
                life: 4000
                });
                return false
            }
            if(this.password1.length < 6){
                this.$toast.add({
                severity:'error',
                summary:'Confirmed',
                detail:'Ensured Your Password is More than 6 character',
                life: 4000
                })
                return false
            }
            if(this.password1 !== this.password2){
                this.$toast.add({
                severity:'error',
                summary:'Confirmed',
                detail:'Ensured Your Password is same',
                life: 4000
                });
                return false
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
                //   if(error && error.status >= 400 && error.status < 405){
                this.$toast.add({
                severity:'error', 
                summary:'Confirmed', 
                detail:'Users Already Exist', 
                life: 4000
                });

                // this.$toast.add({
                // severity:'error', 
                // summary:'Confirmed', 
                // detail:'', 
                // life: 4000
                // })
            })




        },
        async updateChurchUser(){
            let newUpdate ={
                email: this.mail,
                phone: this.phoneNumber,
                password: this.password1,
                name : this.userName,
                roles : this.roles1,
            }
            axios.put(`/api/Settings/UpdateChurchUser`,newUpdate)
            .then((res)=>{
                this.$toast.add({
                severity:'success',
                summary:'Confirmed',
                detail:'New User Saved Successfully',
                life: 4000
                });
                console.log(res);
                this.$router.push('/tenant/settings')

            }).catch((error)=>{
                console.log(error);
                

            })
        },
        async getEmail(){
      if (this.$route.query.email) {
          try{
            const {data} = await axios.get(`/api/Settings/GetChurchUserByEmail?email=${this.$route.query.email}`);
                // this.defaultEmail = data;
                // this.mail= data.Object.email
                // this.message = data.returnObject.message;
                // this.subject = data.returnObject.subject;
                // this.selectCategory = this.Membership.find(i =>i.value === data.returnObject.messageType)
                // this.selectType = this.Sms.find(i => i.value === data.returnObject.category )
                // console.log(this.defaultEmail);
                this.userName = data.name;
                this.mail = data.email;
                this.password1 = data.password;
                this.password2 = data.password;
                this.phoneNumber = data.phone;
                this.roles1 = data.roles;
                console.log(data);

            }catch(error){
                console.log(error);
            }
      }

   

    }
    },
    created(){
        if (this.$route.query.email){
            this.disabled = true
        }
        
         this.getEmail()
          if(!this.currentUser || !store.currentUser){
      console.log("no current user found");
            axios
            .get(`/api/Membership/GetCurrentSignedInUser`)
            .then((response) =>{
                this.currentUser = response.data;
            console.log(response.data)
            console.log(this.getTypes());


        })
            .catch((error)=> console.log(error))

        }else{
          console.log("current user found");
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
        if(!store.getters.currentUser || store.getters.currentUser.churchName){
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
.bg-secondary{
   background-color: #00000063!important
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
.rolesBackground{
    color: green;
}

@media (max-width: 771px) {
    .adminPermission{
        margin-top: 4rem!important;
    }
}
</style>