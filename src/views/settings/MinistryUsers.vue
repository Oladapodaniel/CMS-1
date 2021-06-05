<template>
  <div> 
    <div class="container">
      <div class="row d-md-flex justify-content-between mt-3 mb-4">
        <div class="col-md-8 col-lg-8 col-sm-6">
          <h2 class="font-weight-bolder">{{  churchProfile ? churchProfile : "" }}</h2>
        </div>
        <div class="col-lg-4 col-sm-6 mt-2 link d-lg-flex justify-content-end">
          <router-link
            to="/tenant/settings/invitenewuser"
            class="grey-border primary-bg border-0 text-white addnew default-btn"
            >Add New User</router-link
          >
        </div>
      </div>
      <div class="col-md-12 px-0 my-4">
        <p class="small-text">
          You can invite a new user to access your Church account. Only give
          access to people you trust, since users can see your transactions and
          other business information.
        </p>
      </div>
        
 
 <div class="row header1 mt-5">
   <div class="col-md-12">
     <div class="border-0 bg-danger">
      <div class="row table-header-row py-2  small-text">
        <div class="col-md-3">
          <span class="py-2 font-weight-bold">Name</span>
        </div>
          <div class="col-md-2">
          <span class="py-3 font-weight-bold">Email</span>
        </div>
        <div class="col-md-2">
          <span class="py-2 font-weight-bold">Phone</span>
        </div>
        <div class="col-md-2">
          <span class="py-2 font-weight-bold">Status</span>
        </div>
        <div class="col-md-2">
          <span class="py-2 font-weight-bold">Roles</span>
        </div>
        <div class="col-md-1">
          <span class="py-2 font-weight-bold"></span>
        </div>
      </div>
 </div>
   </div>
   <div class="col-md-12">
      <div class="row small-text tr-border-bottom py-1 header2" v-for="(churchMem, index) in churchUsers.users" :key="index">
            <div
              class="col-md-3 d-flex justify-content-between"
            >
              <span class="py-2 hidden-header">NAME</span>
              <span class="py-2" v-if="churchMem.name.length<20">{{ churchMem.name}}</span>
              <span v-else v-tooltip.top="`${churchMem.name}`">{{churchMem.name.substring(0,20)+ "..."}}</span>
            </div>
             <div
              class="col-md-2 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">EMAIL</span>
              <span class="py-2 text-xs-left"  v-if="churchMem.email.length<10">{{ churchMem.email}}</span>
              <span v-else v-tooltip.top="`${churchMem.email}`">{{churchMem.email.substring(0,10)+ "..."}}</span>
            </div>
             <div
              class="col-md-2 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">PHONE</span>
              <span class="py-2" v-if="churchMem.phone.length<11">{{ churchMem.phone}}</span>
              <span v-else v-tooltip.top="`${churchMem.phone}`">{{churchMem.phone.substring(0,11)+ "..."}}</span>
            </div>
           
            <div
              class="col-md-2 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">STATUS</span>
              <span class="py-2">{{churchMem.status}}</span>
            </div>
            <div
              class="col-md-2 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">ROLES</span>
              <span class="py-2" v-tooltip.top="`${churchMem.roles}`">{{ `${churchMem && churchMem.roles[0] ? churchMem.roles[0].length > 10 ? churchMem.roles[0].substring(0,10)+ ".." : churchMem.roles[0] : ""}` }}</span>
              <!-- <span v-else>{{ churchMem ? churchMem.roles ? churchMem.roles[0].substring(0,14)+ ".." : '' : '' }}</span> -->
              <!-- "churchMem ? churchMem.roles ? churchMem.roles[0].length<14 : '' : '' " -->
            </div>
            <!-- {{churchMem && churchMem.roles[0] ? churchMem.roles[0]? churchMem.roles[0] : '' : '' }} -->
            <div
              class="col-md-1 d-flex justify-content-between align-items-center"
            >
              <div class="dropdown">
                <i
                  class="fas fa-ellipsis-v cursor-pointer"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></i>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item button">
                    <router-link
                    :to="`/tenant/sms/compose?phone=${churchMem.phone}`"
                      >Send SMS</router-link>
                    </a>
                  <a class="dropdown-item button" v-if="churchMem.email">
                    <router-link
                    :to="`/tenant/email/compose?phone=${churchMem.email}`"
                      >Send Email</router-link
                    >
                  </a>
                  <router-link :to="{path:'/tenant/settings/invitenewuser', query:{ email:churchMem.email } }"> <a class="dropdown-item button">Edit</a></router-link>
                  <a class="dropdown-item button" @click="deletePop(churchMem.email)">Delete</a>
                  <a class="dropdown-item button" @click="deactivateChurchUser(churchMem.email, index)">Inactive</a>
                  <a class="dropdown-item button" @click="activateChurchUser(churchMem.email, index)">Active</a>
                </div>
              </div>
            </div>
          </div>
   </div>
   <div class=" col-12 text-center p-5" v-if="loading">
      <i class="pi pi-spin pi-spinner text-center text-primary" style="fontSize: 3rem"></i>
    </div>

 </div>
      <!-- <div
        class="row py-2"
        
      > -->
      <Toast/>
      <ConfirmDialog/>
        <!-- <div class="col-md-12"> -->
         

          <!-- <div class="row">
            <div class="col-md-12 px-0">
              <hr class="hr my-0" />
            </div>
          </div> -->
        <!-- </div> -->


       <!-- </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import store from '@/store/store';
import Tooltip from 'primevue/tooltip';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog'
import axios from "@/gateway/backendapi";
// import finish from "../../services/progressbar/progress";
export default {
  components:{
    Toast,
    ConfirmDialog

  },
    directives: {
    'tooltip': Tooltip
},
  data(){
    return{
      getCurrentUser: store.getters.currentUser,
      churchUsers: [],
      churchNames: {},
      loading: false,
    }
  },
  computed:{
    churchProfile(){
      if(!this.getCurrentUser || !this.getCurrentUser.churchName) return "";
      return this.getCurrentUser.churchName;
    }

  },
  methods:{
    async churchUser(){
      this.loading = true
      try{
        const { data } = await axios.get('/api/Settings/ChurchUsers')
        this.churchUsers = data;
        console.log(this.churchUsers)
        this.loading = false
      }catch(error){
        console.log(error)
      }
    },
    async activateChurchUser(email, index){
      try{
        let response = await axios.post(`/api/Settings/ActivateChurchUser?churchUserEmail=${email}`);
        console.log(response);
         this.churchUsers.users[index].status = "Active";
        console.log();
        this.$toast.add({severity:'success', summary: '', detail:'Active Status Successfully', life: 3000});
      }catch(error){
        console.log(error);

      }
    }, 
      async deactivateChurchUser(email, index) {
      try{
         let response = await axios.post(`/api/Settings/DeactivateChurchUser?churchUserEmail=${email}`);
         console.log(response);
        this.churchUsers.users[index].status = "Inactive";
        this.$toast.add({severity:'success', summary: '', detail:'Inactive Status Successfully', life: 3000});

      }catch(error){
        console.log(error);

      }
      
    },
     
     async deleteChurchUser(email){
      try {
        await axios.post(`/api/Settings/DeleteChurchUser?churchUserEmail=${email}`);
        this.churchUsers.users = this.churchUsers.users.filter(i => i.email !== email);
         this.$toast.add({severity:'success', summary: '', detail:'Church Users Deleted Successfully', life: 3000});
      } catch (error){
        console.log(error);
      }
    },
     deletePop(email) {
            this.$confirm.require({
                message: 'Are you sure you want to Delete?',
                header: 'Delete Confirmation',
                icon: 'pi pi-exclamation-circle',
                acceptClass: 'confirm-delete',
                rejectClass: 'cancel-delete',
                accept: () => {
                  this.deleteChurchUser(email)
                    //callback to execute when user confirms the action
                },
                reject: () => {
                    'No internet'
                }
            });
        },
        async currentUser () {
          if(!store.getters.currentUser){
             try{
                const { data } = await axios.get('/api/Membership/GetCurrentSignedInUser')
                this.getCurrentUser = data;
                console.log(this.getCurrentUser)
              }catch(error){
                console.log(error)
              }    
            } else {
                this.getCurrentUser = store.getters.currentUser
                console.log(this.getCurrentUser)
            }
        }

  }, 
  created() {
    this.churchUser()
    this.currentUser()
  },
};
</script>

<style scoped>

.table-header-row {
  background: #dde2e6;
  border-top: 1px solid #dde2e6;
  border-radius: 8px 8px 0 0;
}
.header2{
  cursor: pointer;

}
.header2:hover{
  background-color: #eee;
}
.header1{
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0px 3px 6px #2c282821;
  border-radius: 8px;
}

.hidden-header {
  display: none;
}
.addnew{
  text-decoration: none!important;
}
.addnew:hover{
color: white!important;
}
@media screen and (max-width: 1280px) {
    .small-text {
        font-size: 13px;
    }
/* 
    .link {
        font-size: 14px;
    } */
}

@media screen and (max-width: 767px) {
  .hidden-header {
    display: inline-block;
    font-weight: bold;
  }

  .table-header-row {
    display: none;
  }
}
</style>