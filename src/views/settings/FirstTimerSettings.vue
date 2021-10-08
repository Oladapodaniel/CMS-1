<template>
  <div>
    <div class="container">
      <div class="row d-md-flex justify-content-between mt-3 mb-5">
        <div class="col-md-12">
          <h2 class="first">First Timer lifeCycle Settings</h2>
        </div>
      </div>

      <div class="row grey-border pt-1 pb-5">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-12">
                  <h4 class="mt-2 mb-2 ml-5 first1">Add Your First Timer  lifeCycle </h4>
                </div>
                <Toast/>
                <ConfirmDialog/>
              </div>

              <div class="row">
                <div class="col-md-12 py-5 grey-background">
                  <div class="row d-md-flex justify-content-around">
                    <div class="col-md-7">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Add Your First Timer Cycle"
                        v-model="firstTimerTypes"
                      />
                    </div>
                    <div class="col-md-3 d-flex justify-content-end">
                      <button class="btn primary-btn text-white px-md-5 px-4 py-1 bold  mt-sm-3 mt-lg-0 mt-xl-0 mt-md-0 mt-3" @click="saveFirstTimer">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row table-header-row py-2 mt-5">
            <div class="col-md-7">
              <span class="py-2 font-weight-bold">NAME</span>
            </div>
            <div class="col-md-5 text-center">
              <span class="py-2 font-weight-bold mr-md-5 mr-0">ACTION</span>
            </div>
          </div>

          <div class="row py-2" v-for="(classification, index) in firstTimerData" :key="index">
            <div class="col-md-12">
              <div class="row">
                <div
                  class="col-md-7 px-md-0 px-5 d-flex justify-content-between align-items-center mb-md-0 mb-5"
                >
                  <span class="py-2 hidden-header">NAME</span>
                  <span class="py-2 text-xs-left mr-md-0 ml-md-3 mr-4">{{ classification.name }}</span>
                </div>
                <div
                  class="col-md-5 mb-md-0 mb-2 col-12 d-flex justify-md-content-end justify-content-start align-items-end"
                >
                  <span class="py-md-4 hidden-header hidden-header1">ACTION</span>
                  <div class="row">
                    <div class="col-md-6 col-6 d-flex justify-content-center">
                      <button class="btn secondary-btn py-1 px-4" @click="openClassification(index)">View</button>
                    </div>
                    <div class="col-md-6 col-6 d-flex justify-content-start">
                      <button class="btn btn-danger py-1 primary-btn delete-btn" @click="deletePop(classification.id)" >Delete</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row grey-background py-2 mt-2" v-if="vissibleTab === `tab_${index}`">
                <div
                  class="col-md-7 d-flex justify-content-between align-items-center mb-md-0 mb-2"
                >
                  <label for="" class="d-flex mt-4">
                    <span class="mr-2">Name</span>
                    <input type="text" class="form-control" v-model="firstTimerName">
                  </label>
                </div>
                <div
                  class="col-md-5 d-flex justify-content-end align-items-center mt-0"
                >
                  <div class="row">
                    <div class="col-md-6 col-6 d-flex justify-content-start">
                      <button class="btn primary-btn save-btn py-1 px-4 ml-md-0 ml-5" @click="updateFirstTimer(classification, index)">Save</button>
                    </div>
                    <div class="col-md-6 col-6 d-flex justify-content-end">
                      <button class="btn secondary-btn py-1 px-3" @click="discard">Discard</button>
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
          <div class=" col-12 text-center p-5" v-if="loading">
             <i class="pi pi-spin pi-spinner text-center text-primary" style="fontSize: 3rem"></i>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/gateway/backendapi";
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';
import membershipService from '../../services/membership/membershipservice';
import finish from '../../services/progressbar/progress'

export default {
  components:{
    Toast,
    ConfirmDialog

  },
  data() {
    return {
      firstTimerData: [ ],
      vissibleTab: "",
      firstTimerName: "",
      firstTimerTypes: "",
      tenantId: "",
      loading: false
    }
  },

  methods: {
    async getFirstTimerCyles() {
      try {
        this.loading = true
        const {  data } = await axios.get("/firstimercycle");
        this.firstTimerData = data.returnObject;
        console.log(data);
        this.loading = false
      } catch (error) {
        console.log(error);
      }
    },
     //First Timer save
    async saveFirstTimer(){
      try{
        let createFirsttimer = {
          name: this.firstTimerTypes,
          tenantID: this.tenantId
        } 
        await axios.post('/firsttimercycle/create', createFirsttimer);
        this.getFirstTimerCyles()
        this.firstTimerTypes = ""
         this.$toast.add({severity:'success', summary: '', detail:'First Timer Save Successfully', life: 3000});
      }catch(error){
        finish()
        console.log(error)
      }
    },
    //Update FirstTimer
    async updateFirstTimer(item, index){
      try{
        console.log(item, "item")
        await axios.put(`/firsttimercycle/${item.id}/edit`, {...item, name : this.firstTimerName});
        this.firstTimerData[index].name = this.firstTimerName
        this.discard()
        this.$toast.add({severity:'success', summary: '', detail:'First Timer Updated Successfully', life: 3000});
      }catch (error){
        finish()
        console.log(error)
      }
    },
    //Delete FirstTimers
    async deleteFirstTimer(id){
      console.log(id);
      try {
        let data = await axios.delete(`/firsttimercycle/${id}/delete`);
        console.log(data)
        this.firstTimerData = this.firstTimerData.filter(i => i.id !== id);
         this.$toast.add({severity:'success', summary: '', detail:'Delete Successfully', life: 3000});
      } catch (error){
        finish()
        console.log(error);
      }
    },
    //pop Alert
      deletePop(id) {
            this.$confirm.require({
                message: 'Are you sure you want to Delete?',
                header: 'Delete Confirmation',
                icon: 'pi pi-exclamation-circle',
                acceptClass: 'confirm-delete',
                rejectClass: 'cancel-delete',
                accept: () => {
                  this.deleteFirstTimer(id)
                    //callback to execute when user confirms the action
                },
                reject: () => {
                    'No internet'
                }
            });
        },


    openClassification(index) {
      this.vissibleTab = `tab_${index}`;
      this.firstTimerName = this.firstTimerData[index].name;
    },

    discard() {
      this.vissibleTab = "";
    }
  },

  created() {
    this.getFirstTimerCyles();
     membershipService.getSignedInUser()
      .then(res => {
        this.tenantId = res.tenantId;
      })
  }
};

</script>

<style scoped>
input::placeholder {
  text-align: center;
}
.delete-btn{
  background: #F2BC9E!important;
  color: black!important;
}
.delete-btn:hover{
    background-color:red!important;
    color: white!important;
  }
.table-header-row {
  background: #ebeff4;
  border-top: 1px solid #dde2e6;
  border-radius: 8px 8px 0 0;
}

.hidden-header {
  display: none;
}

.grey-background {
    background: #DDE2E6;
}

.save-btn {
  background: #50AB00;
}
.first{
    font: var(--unnamed-font-style-normal) normal 800 34px/46px var(--unnamed-font-family-nunito-sans);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 800 34px/46px Nunito Sans;
    letter-spacing: 0px;
    color: #02172E;
    opacity: 1;
}
.first1{
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 24px/32px var(--unnamed-font-family-nunito-sans);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 24px/32px Nunito Sans;
  letter-spacing: 0px;
  color: #02172E;
  opacity: 1;
}

@media screen and (max-width: 767px) {
  .hidden-header1{
    display: none!important;
  }
  .hidden-header {
    display: inline-block;
    font-weight: bold;
  }

  .table-header-row {
    display: none;
  }
}
@media screen and (max-width: 390px) {
  .first{
    font: var(--unnamed-font-style-normal) normal 500 20px/25px var(--unnamed-font-family-nunito-sans);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 800 20px/25px Nunito Sans;
    letter-spacing: 0px;
    color: #02172E;
    opacity: 1;
}
.first1{
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 24px/32px var(--unnamed-font-family-nunito-sans);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 15px/16px Nunito Sans;
  letter-spacing: 0px;
  color: #02172E;
  opacity: 1;
}

  
}
</style>