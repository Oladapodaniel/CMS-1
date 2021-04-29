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
            >Add New Us</router-link
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
        <div class="col-md-3">
          <span class="py-2 font-weight-bold">NAME</span>
        </div>
        <div class="col-md-3">
          <span class="py-2 font-weight-bold">Email</span>
        </div>
        <div class="col-md-2">
          <span class="py-2 font-weight-bold">STATUS</span>
        </div>
        <div class="col-md-3">
          <span class="py-2 font-weight-bold">COMMENTS</span>
        </div>
        <div class="col-md-1">
          <span class="py-2 font-weight-bold"></span>
        </div>
      </div>

      <div
        class="row py-2"
        
      >
        <div class="col-md-12">
          <div class="row" v-for="(churchMem, index) in churchUsers" :key="index">
            <div
              class="col-md-3 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">NAME</span>
              <span class="py-2">{{ churchMem.name}}</span>
            </div>
            <div
              class="col-md-3 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">EMAIL</span>
              <span class="py-2 text-xs-left">{{ churchMem.email}}</span>
            </div>
            <div
              class="col-md-2 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">STATUS</span>
              <span class="py-2">{{ churchMem.status }}</span>
            </div>
            <div
              class="col-md-3 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">COMMENTS</span>
              <span class="py-2">{{churchMem.roles[1]}}</span>
            </div>
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
                  <a class="dropdown-item">
                    <router-link
                    to=""
                      >Send SMS</router-link
                    >
                  </a>
                  <a class="dropdown-item">
                    <router-link
                    to=""
                      >Send Email</router-link
                    >
                  </a>
                  <a class="dropdown-item" href="#">Delete</a>
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
import store from '@/store/store'
import axios from "@/gateway/backendapi";
export default {
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
    }

  },
  mounted(){
    console.log(store.getters.currentUser)
    if(!store.getters.currentUser.churchName){
      axios
      .get(`/api/Membership/GetCurrentSignedInUser`)
      .then((response)=>{
        this.getCurrentUser = response.data;
      console.log(response.data)
      .catch((error)=>console.log(error))

      })
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