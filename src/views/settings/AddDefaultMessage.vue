<template>
    <div>
        <div class="container">
            <h1 class="">Default Message</h1>
            <div class="add-container2">
                <h2 class="" style="font-weight:bold">Add Default Message</h2>
                <hr>
                <div class="container-form">
                <div class="row g-3 align-items-center">
                        <div class="col-auto w-25 ">
                            <label for="inputPassword6" class="col-form-label">Category:</label>
                        </div>
                        <div class="col-auto w-75">
                          <Dropdown v-model="selectType" :options="Sms" optionLabel="name" placeholder="Select type" :filter="false" filterPlaceholder="Sms"  style="width:100%; text-align:left" />
                        </div>
                </div>
                 <div class="row g-3 align-items-center">
                        <div class="col-auto w-25">
                            <label for="inputPassword6" class="col-form-label">Type:</label>
                        </div>
                        <div class="col-auto w-75">
                            <Dropdown v-model="selectCategory" :options="Membership" optionLabel="name" placeholder="Select category" :filter="false" filterPlaceholder="Membership Information Update Message" style="width:100%; text-align:left" />
                        </div>
                       
                </div>
                <Toast/>
                <ConfirmDialog/>
                <div class="row g-3 align-items-center">
                        <div class="col-auto w-25">
                            <label for="inputPassword6" class="col-form-label">Subject:</label>
                        </div>
                        <div class="col-auto w-75">
                            <input type="text" v-model="subject" id="inputPassword6" class="form-control" style="height:40px" aria-describedby="passwordHelpInline">
                        </div>
                </div>
                <div class="row g-3 align-items-center">
                        <div class="col-auto w-25">
                            <label for="inputPassword6" class="col-form-label">Message:</label>
                        </div>
                        <div class="col-auto w-75">
                           <!-- <textarea name="" id="" style=" border-color:rgb(119, 119, 119);; ; outline-color: none;"></textarea> -->
                           <Textarea v-model="message" rows="" cols="" style="border-radius:5px;height:110px; width:100%;" />
                        </div>  
                </div>
                 <div class="row g-3 align-items-center">
                        <div class="col-auto w-25">
                        </div>
                        <div class="col-auto w-100 button-add">
                           <button type="button" class="btn btn-primary h-25 saveButton" style="float:right; margin-left:20px; border-radius:22px; font-size: 16px; font-weight: 600" @click="callButton">Save</button>
                           <!-- <button type="button" class="btn btn-secondary h-25 saveButton" style="float:right; margin-left:20px; border-radius:22px; font-size: 16px; font-weight: 600" @click="updateDefaultMessage">Save</button> -->
                           <router-link to="/tenant/settings/defaultmessage"><button type="button" class="btn h-25 btn-outline-secondary discard mobileResp" style="float:right; border-radius: 22px; font-size: 16px; font-weight: 600; outline: none; hover:none">Discard</button></router-link>
                        </div> 
                </div>
                 </div>
            </div> 
        </div>
        
    </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import Toast from 'primevue/toast'
import Textarea from 'primevue/textarea';
import messageOptions from '../../services/defaultmessage/default_message_service';
import ConfirmDialog from 'primevue/confirmdialog'
import axios from "@/gateway/backendapi";

    export default {
        components: {Dropdown, Textarea, Toast, ConfirmDialog},
        
        data() {
	return {
        message:'',
        subject:'',
		selectCategory: null,
		Membership: messageOptions.Membership,
        selectType: null,
		Sms: messageOptions.Sms,
        defaultMessage:{},
	}
},
methods:{
    callButton(){
        if(!this.$route.query.messageId){
            this.createDefaultMessage()
        } else {
            this.updateDefaultMessage()
        }

    },
    createDefaultMessage(){
        
        if( this.subject === "" || this.message === "" || this.selectType.value === "" || this.selectCategory.value === ""){
             this.$toast.add({
                severity:'error', 
                summary:'Confirmed', 
                detail:'Input Your Complete Messages', 
                life: 4000
                });
                        }
        let newCreate = {
          subject: this.subject,
          message: this.message,
          messageType: this.selectCategory.value,
          category: this.selectType.value
        }
        axios.post(`/api/Settings/CreateDefaultMessage`,newCreate)
        .then((res)=>{
            console.log(res);
            this.$router.push('/tenant/settings/defaultmessage')
        }).catch((error)=>{
            console.log(error);
        })
    },
    async updateDefaultMessage(){
        let newUpdate={
            id: this.defaultMessage.returnObject.id,
            subject: this.subject,
            message: this.message,
            messageType: this.selectCategory.value,
            category: this.selectType.value
        }
        axios.put(`/api/Settings/UpdateDefaultMessage`,newUpdate)
        .then((res)=>{
            console.log(res);
            this.$router.push('/tenant/settings/defaultmessage')
        }).catch((error)=>{
         console.log(error);   
        })
    },
    async getDefaultMessage(){
      if (this.$route.query.messageId) {
          try{
            const {data} = await axios.get(`/api/Settings/GetDefaultMessage/${this.$route.query.messageId}`);
                this.defaultMessage = data;
                this.message = data.returnObject.message;
                this.subject = data.returnObject.subject;
                this.selectCategory = this.Membership.find(i =>i.value === data.returnObject.messageType)
                this.selectType = this.Sms.find(i => i.value === data.returnObject.category )
                console.log(this.defaultMessage);

            }catch(error){
                console.log(error);
            }
      }

    },

     
},
created(){
    this.getDefaultMessage()

}
        
    }
</script>

<style scoped>
.pagination{
    padding: 10px;

}
*{
    box-sizing: border-box;
}
.container{
    width: 90%;
}
.container h1{
    font-size: 34px;
    margin-top: 18px;
    text-align: left;
    margin-bottom: 40px;
    font-weight: bolder;
    letter-spacing: 0px;
    color: #02172E;
    opacity: 1; 
}
.container-form{
    width:90% ;
    height: auto;
    margin: auto;
}
.add-container2{
    border-style: solid;
    border-width: 1px;
    border-color:rgb(212, 210, 210);
    border-radius:10px;
    margin-top: 60px;
}
.add-container2 h2{
    font-size: 24px;
    padding: 20px 1px 1px 35px;
    text-align: left;
}

.row{
    width: 80%!important;
    margin: auto;
    margin-bottom: 20px;
}
.button-add button{
    width: 80px;
}
.col-auto{
    text-align: right;
}
.btn-outline-secondary:hover{
    background-color: white;
    color: rgb(110, 104, 104);
}
@media screen and (max-width:992px) {
    .container{
    width: 100%
}
.body{
    background-color: blue;
}
.container-form{
    width:100% ;
} 
   
}
@media screen and (max-width:375px) {
    .container{
    width: 100%
}
.container-form{
    width:100% ;
} 
.row{
    width: 90%!important;
    margin: auto;
    margin-bottom: 20px;
} 
}
@media screen and (max-width:320px) {
    .container{
    width: 100%
}

@media screen and (max-width: 375px) {
    .mobileResp {
        /* width: 94% !important; */
        /* margin: auto;
        margin-bottom: 20px; */
        float: left;
    }
}

.container h1{
    font-size: 25px;
    margin-top: 18px;
    text-align: left;
    margin-bottom: 40px;
    font-weight: bolder;
    letter-spacing: 0px;
    color: #02172E;
    opacity: 1; 
}
.add-container2 h2{
    font-size: 20px;
    padding: 20px 1px 1px 35px;
    text-align: left;
}
.container-form{
    width:100% ;
} 
.row{
    width: 100%!important;
    margin-bottom: 20px;
    font-size: 13px;
}
.saveButton{
    margin-left: 3px!important;
}
.row textarea{
    border-color: rgb(119, 119, 119);
}

   
}
</style>