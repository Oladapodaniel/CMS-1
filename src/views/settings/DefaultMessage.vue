<template>
  <div>
    <div class="container">
      <div class="row d-md-flex justify-content-between mt-3 mb-4">
        <div class="col-md-6 col-sm-12 d-flex justify-content-sm-start">
          <h2>Default Message</h2>
        </div>
        <div class="col-md-6 col-sm-12 mt-2 link d-flex justify-content-sm-end d-md-flex justify-content-end">
          <router-link
            to="adddefaultmessage"
            class="primary-btn text-white mess"
            >Add Default Message</router-link
          >
        </div>
      </div>
      <div class="row header1 mt-5">
        <div class="col-md-12">
          <div class="row table-header-row py-2 ">
        <div class="col-md-4">
          <span class="py-2 font-weight-bold">Message</span>
        </div>
         <div class="col-md-3">
          <span class="py-2 font-weight-bold">Subject</span>
        </div>
        <div class="col-md-3">
          <span class="py-2 font-weight-bold">Type</span>
        </div>
        <div class="col-md-1">
          <span class="py-2 font-weight-bold">Category</span>
        </div>
        <div class="col-md-1">
          <span class="py-2 font-weight-bold"></span> 
        </div>
      </div>
        </div>
        <div class="col-md-12">
          <div class="row py-0">
        <div class="col-md-12">
          <div class="row tr-border-bottom py-1 header2" v-for="(allMessages, index) in defaultMessage" :key="index">
            <div
              class="col-md-4 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">MESSAGE</span>
              <span class="py-2" v-if="allMessages.message.length < 18"><router-link class="route" :to="{path:'/tenant/settings/adddefaultmessage',query:{messageId:allMessages.id}}">{{allMessages.message}}</router-link></span>
              <span v-else v-tooltip.top="`${allMessages.message}`"><router-link class="route" :to="{path:'/tenant/settings/adddefaultmessage',query:{messageId:allMessages.id}}">{{allMessages.message.substring(0,18)+"..."}}</router-link></span>
               <!-- <span class="py-2 text-xs-left"  v-if="churchMem.email.length<10">{{ churchMem.email}}</span>
              <span v-else v-tooltip.top="`${churchMem.email}`">{{churchMem.email.substring(0,10)+ "..."}}</span> -->
            </div>
            <div
              class="col-md-3 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">SUBJECT</span>
              <span class="py-2 text-xs-left" v-if="allMessages.subject.length < 18"> <router-link class="route" :to="{path:'/tenant/settings/adddefaultmessage',query:{messageId:allMessages.id}}">{{allMessages.subject}}</router-link></span>
              <span v-else v-tooltip.top="`${allMessages.subject}`">{{allMessages.subject.substring(0,)+ "..."}}</span>
            </div>
            <div
              class="col-md-3 d-flex justify-content-between align-items-center"
            >
              <span class="py-4 hidden-header">TYPE</span>
              <span class="py-2" v-if="messageName(allMessages.messageType).length < 18"> <router-link class="route" :to="{path:'/tenant/settings/adddefaultmessage',query:{messageId:allMessages.id}}">{{messageName(allMessages.messageType)}}</router-link></span>
              <span v-else v-tooltip.top="`${messageName(allMessages.messageType)}`"> <router-link class="route" :to="{path:'/tenant/settings/adddefaultmessage',query:{messageId:allMessages.id}}">{{messageName(allMessages.messageType).substring(0,18) + "..."}}</router-link></span>
              
              
             
            </div>
            <div
              class="col-md-1 d-flex justify-content-between align-items-center"
            >
              <span class="py-4 hidden-header">CATEGORY</span>
              <span class="py-2"><router-link class="route" :to="{path:'/tenant/settings/adddefaultmessage',query:{messageId:allMessages.id}}">{{categoryName(allMessages.category)}}</router-link></span>
              
              
            </div>
            <div
              class="col-sm-12 d-flex col-12 justify-content-sm-end col-md-1 col-lg-1 col-xl-1 d-flex justify-content-end align-items-center"
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
                    <router-link :to="`/tenant/sms/compose?defaultId=${allMessages.id}`">Send SMS</router-link>
                  </a>
                  <a class="dropdown-item">
                    <router-link :to="`/tenant/sms/compose?defaultId=${allMessages.id}`">Send Email</router-link>
                  </a>
                  <a class="dropdown-item"><router-link :to="{path:'/tenant/settings/adddefaultmessage',query:{messageId:allMessages.id}}">Edit</router-link></a>
                  <a class="dropdown-item" @click="deletePop(allMessages.id)"> <router-link to="">Delete</router-link></a>
                </div>
              </div>
            </div>
          </div>
          <Toast/>
          <ConfirmDialog/>

          <!-- <div class="row">
            <div class="col-md-12 px-0">
              <hr class="hr my-0" />
            </div>
          </div> -->
        </div>
        <div class=" col-12 text-center p-5" v-if="loading">
             <i class="pi pi-spin pi-spinner text-center text-primary" style="fontSize: 3rem"></i>
            </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/gateway/backendapi";
import messageOptions from '../../services/defaultmessage/default_message_service';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';
import Tooltip from 'primevue/tooltip';
import finish from '../../services/progressbar/progress'
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
    selectCategory: null,
		Membership: messageOptions.Membership,
    selectType: null,
		Sms: messageOptions.Sms,
    defaultMessage: [],
    loading: false
    }
  },
  methods: {
       deletePop(id) {
            this.$confirm.require({
                message: 'Are you sure you want to Delete?',
                header: 'Delete Confirmation',
                icon: 'pi pi-exclamation-circle',
                acceptClass: 'confirm-delete',
                rejectClass: 'cancel-delete',
                accept: () => {
                  this.deleteDefaultmessage(id)
                    //callback to execute when user confirms the action
                },
                reject: () => {
                    'No internet'
                }
            });
        },
    async deleteDefaultmessage(id){
      try {
        await axios.delete('/api/Settings/DeleteDefaultMessage/'+id);
        this.defaultMessage = this.defaultMessage.filter(i => i.id !== id);
         this.$toast.add({severity:'success', summary: '', detail:'Message Deleted Successfully', life: 3000});
      } catch (error){
        finish()
        console.log(error);
      }
    },
     async AllDefaultMessages(){
      try{
        this.loading = true
        const  {data} = await axios.get('/api/Settings/AllDefaultMessages')
        this.defaultMessage = data.returnObject;
        this.loading = false
        console.log(this.defaultMessage)
      }catch(error){
        console.log(error)
      }
    },
    
    messageName(value){
      return messageOptions.Membership[value].name
    },
     categoryName(value){
       console.log(messageOptions.Sms[value]);
      return messageOptions.Sms[value] ? messageOptions.Sms[value].name : ""
    },

    
  },
  created(){
    this.AllDefaultMessages()

  }
};
</script>

<style scoped>
.route{
  color: black!important;
  text-decoration: none!important;

}
.route:hover{
  color: #136acd!important;

}
.dropdown a{
  color: black!important;
  text-decoration: none;
}
.dropdown a:hover{
  color: #136acd!important;
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
.table-header-row {
  background: #dde2e6;
  border-top: 1px solid #dde2e6;
  border-radius: 8px 8px 0 0;
}

.hidden-header {
  display: none;
}

@media screen and (max-width: 767px) {
  .hidden-header {
    display: inline-block;
    font-weight: bold;
  }

  .table-header-row {
    display: none;
  }
  .mess{
    text-decoration: none!important;
  }
}
</style>