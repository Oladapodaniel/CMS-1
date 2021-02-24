<template>
  <div class="container-wide container-top">
    <!-- <div class="container-wide">
      
      <div class="col-sm-4 first-timers-text">
        <h2 class="page-header"><bold>Contribution Category</bold></h2>
      </div>
   

    <div class="row">
      <div class="col-md-12">
        <hr class="hr" />
      </div>
    </div>
    </div> -->
 

        <div class="top container-wide mt-3">
   
            <div class="row">
              <div class="col-sm-12">
                <div class="page-header">Contribution Category</div>
                <hr class="hr"/>
              </div>
            </div>
   
          <!-- <div class="actions">
            <button class="more-btn button align-items-center default-btn border-0">
              More
              <span><i class="fa fa-angle-down btn-icon"></i></span>
            </button>
            <router-link :to="`/tenant/people/add`" class="">
            <button class="add-person-btn button default-btn border-0 ml-3">
              Add Member
            </button>
            </router-link>
          </div> -->
        </div>
        
        <!-- <div>{{ incomeAccount }}</div> -->

        <!-- <transition name="fade" mode="out-in"> -->
          <router-view class="view" />



    <!-- input area -->
    <div class="container-wide">
      <div class="row my-5 mx-auto">
        <div class="col-sm-4 text-right">
           <label for="" class="label">Name</label>
        </div>
      <div class="col-lg-5 col-sm-12 my-auto">
 
         
          <input
            type="text"
            class="form-control textbox-height"
            placeholder=""
            v-model="name"
            required
          />


         
          <!-- <button class="form-control input transaction-button close-modal text-right" @click="toggleAccount">
                <i class="pi pi-angle-down arrow-icon close-modal" @click="toggleAccount"></i>
            </button> -->
              

         
          <!-- <button class="form-control input transaction-button close-modal text-right" @click="toggleAccount">
              <i class="pi pi-angle-down arrow-icon close-modal" @click="toggleAccount"></i>
          </button> -->
          
 
      </div>
      <div class="col-sm-4 my-3 text-right">
           <label for="" class="label">Income Account</label>
      </div>
      <div class="col-lg-5 col-sm-12 my-3">
          <Dropdown v-model="selectedIncomeAccount" class="w-100 p-0" :options="incomeAccount" optionLabel="text" :filter="true" placeholder="Select" :showClear="false">

              </Dropdown>
      </div>
      <div class="col-sm-4 my-3 text-right">
           <label for="" class="label">Cash Account</label>
        </div>
      <div class="col-lg-5 col-sm-12 my-auto">
 
         
          <Dropdown v-model="selectedCashAccount" :options="cashBankAccount" optionLabel="text" :filter="false" placeholder="Select" class="w-100 p-0" :showClear="false">
            
          </Dropdown>
        </div>

        <div class="col-sm-12" @click="toggleRem">
          <div class="row">
              <div class="col-sm-12 d-flex">
                  <i class="check-it mr-2">
                  <span class="child" v-if="applyRem"></span>
                </i>
                <h6>Apply Remitance</h6>
              </div>
          </div>
        </div>
      <div class="col-sm-12 mt-3" v-if="applyRem">
        <hr class="hr"/>
      </div>
  
        <div class="col-lg-12" v-if="applyRem">
        <div v-for="(item, index) in remitance" :key="index">
        <div class="row mt-3 mb-4">
          <div class="col-sm-4 col-12">
            <div class="">Account</div>
          <Dropdown v-model="item.account" class="w-100 p-0 mt-2" :options="incomeAccount" optionLabel="text" :filter="true" placeholder="Select" :showClear="false">

                </Dropdown>
          </div>

          <div class="col-sm-5 col-12 mt-3 mt-sm-0">
            <div class="">Percentage %</div>

            <div class="mt-2">
              <input type="text" v-model="item.percentage" class="form-control textbox-height" placeholder="" />
            </div>
          </div>

          <div class="col-sm-2 col-12 mt-3 mt-sm-0">
            <button
              v-on:click="addRemittance"
              class="btn btnIcons btn-secondary"
            >
              <i class="fa fa-plus-circle icons" aria-hidden="true"></i>
              Add
            </button>
          </div>
          <div class="col-sm-1 mt-4 align-self-center" @click="deleteItem(index)">
            <i class="pi pi-trash"></i>
          </div>
        </div>
        </div>
      </div>
      <!--end of diisplay bottom area -->
      <div class="col-sm-2 offset-sm-4">
        <button class="add-person-btn button default-btn border-0" @click="save">
          Save
        </button>
      </div>
    </div>
    </div>
    
    <!-- End input area -->

    <!-- elipse Area -->
  
    <!-- End of elipse Area -->

    <!-- diisplay bottom area -->
    

    
    <Toast />
  </div>
</template>









<script>
import { ref } from "vue";
import axios from "@/gateway/backendapi";
import Dropdown from 'primevue/dropdown';
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";
export default {
  components: {
    Dropdown, Toast
  },
  setup() {
    const applyRem = ref(false);
    const cashBankAccount = ref([]);
    const remitance = ref([{}])
    const incomeAccount = ref([])
    const selectedIncomeAccount = ref(null)
    const selectedCashAccount = ref(null)
    const name = ref("")
    const toast = useToast();
      


    const toggleRem = () => {
      applyRem.value = !applyRem.value;
    };

    const getCashBankAccount = () => {
        axios.get('/api/financials/accounts/getcashbankaccounts')
          .then(res => {
            console.log(res.data)
            cashBankAccount.value = res.data
          })
          .catch (err => {
            console.log(err)
          })
    }
    getCashBankAccount()

    const deleteItem = (index) => {
      remitance.value.splice(index, 1)
    }

    const addRemittance = () => {
      remitance.value.push({})
    }

    const getIncomeAccount = ()=> {
      axios.get('/api/Financials/Accounts/GetIncomeAccounts')
        .then(res => {
            /*eslint no-undef: "warn"*/
            NProgress.done();
            console.log(res)
          incomeAccount.value = res.data
        })
        .catch(err => {
            NProgress.done();
            console.log(err)
        })
    }
    getIncomeAccount()

    const save = () => {
      let contributionCategory = {
        name: name.value,
        isPublic: true,
        incomeAccount: {
            id: selectedIncomeAccount.value.id,
            name: selectedIncomeAccount.value.text,
            accountType: incomeAccount.value.findIndex(i => i.id === selectedIncomeAccount.value.id),
            code: selectedIncomeAccount.value.code,
            isGroupAccount: selectedIncomeAccount.value.isGroupAccount,
            financialFundID: selectedIncomeAccount.value.financialFundID
          },
        incomeAccountId: selectedIncomeAccount.value.id,
        cashAccount: {
            id: selectedCashAccount.value.id,
            name: selectedCashAccount.value.text,
            accountType: cashBankAccount.value.findIndex(i => i.id === selectedCashAccount.value.id),
            code: selectedCashAccount.value.code,
            isGroupAccount: selectedCashAccount.value.isGroupAccount,
            financialFundID: selectedCashAccount.value.financialFundID
          },
        cashAccountId: selectedCashAccount.value.id,
        incomeRemittance: remitance.value
      }
      console.log(contributionCategory)
       axios.post('/api/financials/contributions/items/save', contributionCategory)
              .then(res => {
                toast.add({severity:'success', summary: 'Saved', detail:'Contribution Saved', life: 3000});
                console.log(res)
              })
              .catch(err => {
                toast.add({severity:'error', summary: 'Error', detail:'Not Sucessful', life: 3000});
                console.log(err)
              })
    }
    return {
      applyRem, toggleRem, cashBankAccount, remitance, addRemittance, incomeAccount, save, selectedIncomeAccount, name, selectedCashAccount, toast, deleteItem
    };
  },
};
</script>

<style scoped>
.btnIcons {
  width: 110px;
  height: 35px;
  color: #136acd;
  background-color: #dde2e6;
  border-radius: 40px;
  border: none;
}

.check-it {
  border: 2px solid #136acd;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-top: -1px;
}

.icons {
  color: #136acd;
}
.check-it .child {
  /* border: 2px solid red; */
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #136acd;
  position: relative;
  left: 3px;
  top: -4px;
}

@media (min-width: 576px) {
  .btnIcons {
    margin-top: 33px;
  }
}

* {
  box-sizing: border-box;
  color: #02172e;
}
.page-header {
  font: normal normal 800 29px Nunito sans;
}

.hr {
  border: 0.8px solid #0020440a;
  /* margin: 0 45px; */
}

.add-person-btn {
  background: #136acd;
  color: #fff;
}

@media screen and (min-width: 1400px) {
  .main-con {
    width: 90%;
    margin: 0 auto;
  }

  .top {
    height: 90%
  }
}

.textbox-height {
  height: 41px
}

.p-dialog.p-component {
  border-radius: 0 !important;
}

</style>


