<template>
  <div>
    <div class="container">
      <div class="row d-md-flex justify-content-between mt-3 mb-5">
        <div class="col-md-12">
          <h2 class="ageGroup">Age Group Category</h2>
        </div>
      </div>
        <Toast />
      <ConfirmDialog></ConfirmDialog>
      <div class="row grey-rounded-border pt-1 pb-5">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-12">
                  <h4 class="mt-2 mb-2 ml-5 ageGroup1">Age Group Categories</h4>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 py-5 grey-background">
                  <div class="row d-md-flex justify-content-around">
                    <div class="col-md-7">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Age Group category"
                        v-model="ageGroup"
                      />
                    </div>
                    <div class="col-md-3">
                      <button class="btn primary-btn px-5 text-white" @click="saveAge">Save</button>
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
            <div class="col-md-5">
              <span class="py-2 font-weight-bold">ACTION</span>
            </div>
          </div>

          <div class="row py-2" v-for="(type, index) in types" :key="index">
            <div class="col-md-12">
              <div class="row">
                <div
                  class="col-md-7 d-flex justify-content-between align-items-center"
                >
                  <span class="py-2 hidden-header">NAME</span>
                  <span class="py-2 text-xs-left">{{ type.name }}</span>
                </div>
                <div
                  class="col-md-5 d-flex justify-content-between align-items-center"
                >
                  <span class="py-4 hidden-header">ACTION</span>
                  <div class="row">
                    <div class="col-md-6">
                      <button class="btn secondary-btn py-1 px-4" @click="openType(index)">View</button>
                    </div>
                    <div class="col-md-6">
                      <button class="delbtn py-1 px-3 primary-btn" @click="deletePop(type.id)">Delete</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row grey-background py-2" v-if="vissibleTab === `tab_${index}`">
                <div
                  class="col-md-7 d-flex justify-content-between align-items-center"
                >
                  <label for="" class="d-flex">
                    <span class="mr-2">Name</span>
                    <input type="text" class="form-control" v-model="typeName">
                  </label>
                </div>
                <div
                  class="col-md-5 d-flex justify-content-between align-items-center"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <button class="btn primary-btn save-btn py-1 px-4" @click="updateAge(type.id, index)">Save</button>
                    </div>
                    <div class="col-md-6">
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

export default {
  components:{
    Toast,
    ConfirmDialog,

  },
  data() {
    return {
      types: [ ],
      vissibleTab: "",
      typeName: "",
      ageGroup: "",
      tenantId: ""
    }
  },

  methods: {
    async getGroup() {
      try {
        const { data } = await axios.get("/api/Settings/GetTenantAgeGroups");
        this.types = data;
      } catch (error) {
        console.log(error);
      }
    },
     async saveAge(){
      
      try{
         await axios.post('/api/Settings/CreateTenantAgeGroup/'+ this.ageGroup);
        this.getGroup()
        this.$toast.add({severity:'success', summary: '', detail:' Attendance Save Successfully', life: 3000});
      }catch (error) {
        console.log(error)
      }
    },  
    async deleteAge(id){
      try {
        await axios.delete('/api/Settings/DeleteTenantAgeGroup/'+id);
        this.types = this.types.filter(i => i.id !== id);
         this.$toast.add({severity:'success', summary: '', detail:'Age Group Deleted Successfully', life: 3000});
      } catch (error){
        console.log(error);
      }
    },
     deletePop(id) {
            this.$confirm.require({
                message: 'Are you sure you want to Delete?',
                header: 'Delete Confirmation',
                icon: 'pi pi-exclamation-circle',
                accept: () => {
                  this.deleteAge(id)
                    //callback to execute when user confirms the action
                },
                reject: () => {
                    //callback to execute when user rejects the action
                }
            });
        },
        async updateAge(id, index){
      try{
        await axios.put('/api/Settings/UpdateTenantAgeGroup', { name:this.typeName, id:id });
        this.types[index].name = this.typeName;
        this.discard()
        this.$toast.add({severity:'success', summary: '', detail:'Attendance Updated Successfully', life: 3000});
      }catch (error){
        console.log(error)
      }

    },
    openType(index) {
      this.vissibleTab = `tab_${index}`;
      this.typeName = this.types[index].name;
    },

    discard() {
      this.vissibleTab = "";
    },
  },
  

  created() {
    this.getGroup();
    membershipService.getSignedInUser()
      .then(res => {
        this.tenantId = res.tenantId;
      })

  },
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
.ageGroup{
  font: var(--unnamed-font-style-normal) normal 800 34px/46px var(--unnamed-font-family-nunito-sans);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal 800 34px/46px Nunito Sans;
  letter-spacing: 0px;
  color: #02172E;
  opacity: 1;
}
.ageGroup1{
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
}
</style>