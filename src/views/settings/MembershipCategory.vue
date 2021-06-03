<template>
  <div>
    <div class="container mb-4">
      <div class="row d-md-flex justify-content-between mt-3 mb-5">
        <div class="col-md-12">
          <h2 class="memCat">Membership Category</h2>
        </div>
      </div>

      <div class="row grey-border pt-1 pb-5">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-12">
                  <h4 class="mt-2 mb-2 ml-5 memCat1">Membership Categories</h4>
                </div>
              </div>
              <!--prime Vue -->
              <Toast />
              <ConfirmDialog></ConfirmDialog>

              <div class="row">
                <div class="col-md-12 py-5 grey-background">
                  <div class="row d-md-flex justify-content-around">
                    <div class="col-md-7">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Membership category name"
                        v-model="classificationTypes"
                      />
                    </div>
                    <div class="col-md-3 d-flex justify-content-end">
                      <button class="btn primary-btn text-white px-5 bold" @click="saveMembership">Save</button>
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
              <span class="py-2 font-weight-bold">ACTION</span>
            </div>
          </div>

          <div class="row py-2" v-for="(classification, index) in classifications" :key="index">
            <div class="col-md-12">
              <div class="row">
                <div
                  class="col-md-7 d-flex justify-content-between align-items-center"
                >
                  <span class="py-2 hidden-header">NAME</span>
                  <span class="py-2 text-xs-left">{{ classification.name }}</span>
                </div>
                <div
                  class="col-md-5 d-flex justify-content-end align-items-end"
                >
                  <span class="py-4 hidden-header">ACTION</span>
                  <div class="row">
                    <div class="col-md-6">
                      <button class="btn secondary-btn py-1 px-4" @click="openClassification(index)">View</button>
                    </div>
                    <div class="col-md-6">
                      <button class="delbtn py-1 primary-btn px-3" @click="deletePop(classification.id)">Delete</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row grey-background py-2 mt-2" v-if="vissibleTab === `tab_${index}`">
                <div
                  class="col-md-7 d-flex justify-content-between align-items-center"
                >
                  <label for="" class="d-flex mt-4">
                    <span class="mr-2">Name</span>
                    <input type="text" class="form-control" v-model="classificationName">
                  </label>
                </div>
                <div
                  class="col-md-5 d-flex justify-content-end align-items-center"
                >
                  <div class="row mt-0">
                    <div class="col-md-6">
                      <button class="btn primary-btn save-btn py-1 px-4" @click="updateMembership(classification.id, index)">Save</button>
                    </div>
                    <div class="col-md-6">
                      <button class="btn secondary-btn py-1  px-3 bor" @click="discard">Discard</button>
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
    </div>
  </div>
</template>

<script>
import axios from "@/gateway/backendapi";
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';

export default {
  components:{
     Toast,
    ConfirmDialog,
  },
  data() {
    return {
      classifications: [ ],
      vissibleTab: "",
      classificationName: "",
      memberClass:{},
      classificationTypes: ""
    }
  },

  methods: {
    async getClassifications() {
      try {
        const { data } = await axios.get("/api/Settings/GetTenantPeopleClassification");
        this.classifications = data;
      } catch (error) {
        console.log(error);
      }
    },
   //Membership save
    async saveMembership(){
      try{
        await axios.post('/api/Settings/CreateTenantPeopleClassification/' + this.classificationTypes);
        this.getClassifications()
        this.$toast.add({severity:'success', summary: '', detail:' Membership Save Successfully', life: 3000});
      }catch(error){
        console.log(error)
      }
    },
    async updateMembership(id, index){
      try{
        await axios.put('/api/Settings/UpdateTenantPeopleClassification', { name: this.classificationName, id:id});
        this.classifications[index].name = this.classificationName;
        this.discard()
        this.$toast.add({severity:'success', summary: '', detail:'Membership Updated Successfully', life: 3000});
      }catch (error){
        console.log(error)
      }
    },
    async deleteMembership(id){
      try {
        await axios.delete('/api/Settings/DeleteTenantPeopleClassification/'+id);
        this.classifications = this.classifications.filter(i => i.id !== id);
         this.$toast.add({severity:'success', summary: '', detail:'Membership Deleted Successfully', life: 3000});
      } catch (error){
        console.log(error);
      }
    },
     deletePop(id) {
            this.$confirm.require({
                message: 'Are you sure you want to Delete?',
                header: 'Delete Confirmation',
                icon: 'pi pi-exclamation-circle',
                acceptClass: 'confirm-delete',
                rejectClass: 'cancel-delete',
                accept: () => {
                  this.deleteMembership(id)
                    //callback to execute when user confirms the action
                },
                reject: () => {
                    'No internet'
                }
            });
        },

    openClassification(index) {
      this.vissibleTab = `tab_${index}`;
      this.classificationName = this.classifications[index].name;
    },

    discard() {
      this.vissibleTab = "";
    }
  },

  created() {
    this.getClassifications();
  }
};
</script>

<style scoped>
input::placeholder {
  text-align: center;
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
.delbtn:hover{
    background-color:red!important;
    color: white!important;
  }
  .delbtn{
  background-color: #F2BC9E!important;
  color: black!important;
}
.delbtn:focus{
  outline: none!important;
  border: none!important;
}
 .memCat{
    font: var(--unnamed-font-style-normal) normal 800 34px/46px var(--unnamed-font-family-nunito-sans);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 800 34px/46px Nunito Sans;
    letter-spacing: 0px;
    color: #02172E;
    opacity: 1;
  }
  .memCat1{
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 24px/32px var(--unnamed-font-family-nunito-sans);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal bold 24px/32px Nunito Sans;
    letter-spacing: 0px;
    color: #02172E;
    opacity: 1;
  }

@media screen and (max-width: 767px) {
  .hidden-header {
    display: inline-block;
    font-weight: bold;
  }

  .table-header-row {
    display: none;
  }
  .bold:hover{
    color: white!important;
  }
  .bold{
    color: rgb(187, 176, 176)!important;
  }
  .bor{
    border: #02172E!important;
    border-style: solid!important;
  }
  /* .deleteAccept{
    background-color: red!important;
  }
  .deleteReject{
    bac
  } */
  
}
</style>