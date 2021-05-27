<template>
  <div>
    <div class="container">
      <div class="row d-md-flex justify-content-between mt-3 mb-4">
        <div class="col-md-6">
          <h2>Default Message</h2>
        </div>
        <div class="col-md-6 mt-2 link d-md-flex justify-content-end">
          <router-link
            to="adddefaultmessage"
            class="grey-border btn primary-btn text-white mess"
            >Add Default Message</router-link
          >
        </div>
      </div>

      <div class="row table-header-row py-2 mt-5">
        <div class="col-md-4">
          <span class="py-2 font-weight-bold">MESSAGE</span>
        </div>
         <div class="col-md-2">
          <span class="py-2 font-weight-bold">SUBJECT</span>
        </div>
        <div class="col-md-2">
          <span class="py-2 font-weight-bold">TYPE</span>
        </div>
        <div class="col-md-4">
          <span class="py-2 font-weight-bold">CATEGORY</span>
        </div>
        <!-- <div class="col-md-2">
          <span class="py-2 font-weight-bold">MESSAGE</span>
        </div> -->
      </div>

      <div class="row py-2">
        <div class="col-md-12">
          <div class="row" v-for="(allMessages, index) in defaultMessage" :key="index">
            <div
              class="col-md-4 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">CATEGORY</span>
              <span class="py-2" v-if="allMessages.message.length < 20">{{allMessages.message}}</span>
              <span v-else v-tooltip.top="`${allMessages.message}`">{{allMessages.message.substring(0,20)+"..."}}</span>
               <!-- <span class="py-2 text-xs-left"  v-if="churchMem.email.length<10">{{ churchMem.email}}</span>
              <span v-else v-tooltip.top="`${churchMem.email}`">{{churchMem.email.substring(0,10)+ "..."}}</span> -->
            </div>
            <div
              class="col-md-2 d-flex justify-content-between align-items-center"
            >
              <span class="py-2 hidden-header">SUBJECT</span>
              <span class="py-2 text-xs-left" v-if="allMessages.subject.length < 10">{{allMessages.subject}}</span>
              <span v-else v-tooltip.top="`${allMessages.subject}`">{{allMessages.subject.substring(0,10)+ "..."}}</span>
            </div>
            <div
              class="col-md-2 d-flex justify-content-between align-items-center"
            >
              <span class="py-4 hidden-header">TYPE</span>
              <span class="py-2" v-if="messageName(allMessages.messageType).length < 10">{{messageName(allMessages.messageType)}}</span>
              <span v-else v-tooltip.top="`${messageName(allMessages.messageType)}`">{{messageName(allMessages.messageType).substring(0,10) + "..."}}</span>
              
              
             
            </div>
            <div
              class="col-md-3 d-flex justify-content-between align-items-center"
            >
              <span class="py-4 hidden-header">CATEGORY</span>
              <span class="py-2">{{categoryName(allMessages.category)}}</span>
              
              
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
                    <router-link :to="`/tenant/sms/compose?defaultId=${allMessages.id}`">Send SMS</router-link>
                  </a>
                  <a class="dropdown-item">
                    <router-link :to="`/tenant/sms/compose?defaultId=${allMessages.id}`">Send Email</router-link>
                  </a>
                  <router-link :to="{path:'/tenant/settings/adddefaultmessage',query:{messageId:allMessages.id}}"><a class="dropdown-item button">Edit</a></router-link>
                  <a class="dropdown-item button" @click="deletePop(allMessages.id)">Delete</a>
                </div>
              </div>
            </div>
          </div>
          <Toast/>
          <ConfirmDialog/>

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
import axios from "@/gateway/backendapi";
import messageOptions from '../../services/defaultmessage/default_message_service';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog'
import Tooltip from 'primevue/tooltip';
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
    defaultMessage: []

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
        console.log(error);
      }
    },
     async AllDefaultMessages(){
      try{
        const  {data} = await axios.get('/api/Settings/AllDefaultMessages')
        this.defaultMessage = data.returnObject;
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
.table-header-row {
  background: #ebeff4;
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