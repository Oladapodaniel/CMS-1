<template>
  <div>
    <div class="container">
      <div class="row d-md-flex justify-content-between mt-3 mb-4">
        <div class="col-md-8 col-lg-8 col-sm-6">
          <h2 class="font-weight-bolder">{{  churchProfile }}</h2>
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
        

      <div class="row table-header-row py-2 mt-5">
        <div class="col-md-2">
          <span class="py-2 font-weight-bold">NAME</span>
        </div>
        <div class="col-md-2">
          <span class="py-2 font-weight-bold">PHONE</span>
        </div>
        <div class="col-md-2">
          <span class="py-3 font-weight-bold">EMAIL</span>
        </div>
        <div class="col-md-2">
          <span class="py-2 font-weight-bold">STATUS</span>
        </div>
        <div class="col-md-3">
          <span class="py-2 font-weight-bold">ROLES</span>
        </div>
        <div class="col-md-1">
          <span class="py-2 font-weight-bold"></span>
        </div>
      </div>
      <div
        class="row py-2"
        
      >
      <Toast/>
      <ConfirmDialog/>
        <div class="col-md-12">
          <div class="row" v-for="(churchMem, index) in churchUsers.users" :key="index">
            <div
              class="col-md-2 d-flex justify-content-between"
            >
              <span class="py-2 hidden-header">NAME</span>
              <span class="py-2">{{ churchMem.name}}</span>
            </div>
             <div
              class="col-md-2 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">PHONE</span>
              <span class="py-2">{{ churchMem.phone}}</span>
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
              <span class="py-2 hidden-header">STATUS</span>
              <span class="py-2">{{ churchMem.status }}</span>
            </div>
            <div
              class="col-md-2 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">ROLES</span>
              <span class="py-2">{{ churchMem ? churchMem.roles ? churchMem.roles[0] : "" : "" }}</span>
            </div>
            <div
              class="col-md-2 d-flex justify-content-between align-items-center"
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
                  <a class="dropdown-item button" @click="deletePop(churchMem.email)">Delete</a>
                  <a class="dropdown-item" href="#">Inactive</a>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 px-0">
              <hr class="hr my-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/store';
import Tooltip from 'primevue/tooltip';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog'
import axios from "@/gateway/backendapi";
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
    }
  },
  computed:{
    churchProfile(){
      if(!this.getCurrentUser.churchName) return "";
      return this.getCurrentUser.churchName
    }

  },
  methods:{
    async churchUser(){
      try{
        const { data } = await axios.get('/api/Settings/ChurchUsers')
        this.churchUsers = data;
        console.log(this.churchUsers)
      }catch(error){
        console.log(error)
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

  },
  mounted(){
    console.log(store.getters.currentUser)
    if(!store.getters.currentUser.churchName){
      axios
      .get(`/api/Membership/GetCurrentSignedInUser`)
      .then((response)=>{
        this.getCurrentUser = response.data;
      console.log(response.data)
      })
      .catch((error)=>console.log(error))
    }
  },
 
  created() {
    this.churchUser()
  },
};
</script>

<style scoped>

.table-header-row {
  background: #ebeff4;
  border-top: 1px solid #dde2e6;
  border-radius: 8px 8px 0 0;
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