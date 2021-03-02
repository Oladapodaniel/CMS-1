<template>
    <div class="container-wide container-top">
        <div class="row">
            <div class="col-sm-12">
                <div class="page-header">Youth Conference 2020</div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <!-- <div>Here's a link to preview</div>
                 <div class="input-group mt-3 col-sm-7">
                    <input
                        type="text"
                        class="form-control"
                
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                        <span class="input-group-text" id="basic-addon2"
                        >COPY</span
                        >
                    </div>
                </div> -->
                <div>{{ selectedBank }}</div>
            </div>
        </div>
        <form class="form">
            <div class="row">
                <div class="col-12 col-sm-10 offset-sm-1 contri-item">Add Contribution Item</div>
            </div>
            
            <div class="row mt-4" v-for="(item, index) in newContribution"  :key="index">
                <div class="col-4 offset-sm-1  col-md-3 pl-0 offset-md-4">
                    <!-- <Dropdown v-model="newContribution.selectedAccount" class="w-100" :options="incomeAccount" optionLabel="name" :filter="true" placeholder="Select" :showClear="true">
                        
                    </Dropdown> -->
                    <button
                class="default-btn w-100 text-left pr-1"
                type="button"
                style="
                  border-radius: 4px;
                  border: 1px solid #ced4da;
                  color: #6c757d;
                "
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <!-- {{ !selectedEvent.name ? "Select from events and activities" : selectedEvent.name.length > 30 ? `${selectedEvent.name.slice(0, 30)}...` : selectedEvent.name }} -->
                    {{ item.offType ? item.offType : "Select" }}
                <i class="pi pi-chevron-down manual-dd-icon float-right pr-1"></i>
              </button>
              <div
                class="dropdown-menu w-100"
                aria-labelledby="dropdownMenuButton"
              >
                <div class="row w-100 mx-auto">
                  <div class="col-md-12">
                    <input type="text" class="form-control" placeholder="Find event" />
                  </div>
                </div>

                <a class="dropdown-item font-weight-700 small-text py-2 c-pointer"
                  v-for="(item, index) in incomeAccount" :key="index"
                  @click="selectContribution($event, index)"
                  >{{ item.text }}</a
                >
                <a class="font-weight-bold small-text d-flex justify-content-center py-2 text-decoration-none primary-text" style="border-top: 1px solid #002044;color: #136ACD;" href="#"
                  @click="() => display = true"
                >
                    <i class="pi pi-plus-circle mr-2 d-flex align-items-center" style="color: #136ACD;"></i>
                  Create new event
                  </a>
              </div>
                </div>
                <div class="col-4 col-md-2">
                    <input type="number" class="form-control h-100" v-model="item.amount" placeholder="amount">
                </div>
                
                <!-- <div class="col-1 align-self-center offset-1 text-center" v-tooltip.bottom="'add'" v-on:click="addContribution"><i class="pi pi-plus" aria-hidden="true"></i> -->
                <!-- </div> -->
                <div class="col-1 offset-1 offset-md-0 align-self-center">
                    <i class="pi pi-trash" v-tooltip.bottom="'delete'" @click="deleteContribution(index)"></i>
                </div>
            </div>
            <div class="col-8 col-md-5 offset-sm-1 pl-0 offset-md-4 mt-3">
                    <button
                        v-on:click.prevent="addContribution"
                        class="btn btnIcons btn-secondary"
                        >
                        <i class="fa fa-plus-circle icons" aria-hidden="true"></i>
                        Add
                        </button>
                </div>
            <div class="row">
                <div class="col-10 col-md-12">
                    <hr class="mt-4"/>
                </div>
                <div class="col-12 col-sm-10 offset-sm-1 col-md-5 offset-md-4 pl-0">
                    <div class="py-3">Choose Bank</div>
                    <div>
                        <Dropdown v-model="selectedBank" class="w-100" :options="nigerianBanks" optionLabel="name" :filter="true" placeholder="Select" :showClear="false">
                        
                        </Dropdown>
                    </div>
                </div>
                <!-- <div class="col-6"></div> -->
                <div class="pl-0 col-12 col-sm-10 offset-sm-1  col-md-5 offset-md-4">
                    <div class=" py-3">
                        <div>Enter account number</div>
                    </div>
                    <div style="height: 43%"><input class="form-control h-100" placeholder="1234567890" type="number" v-model="accountNumber" @blur="resolveCustomerDetail"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 mt-3 text-right">
                    
                </div>
            </div>
            <div class="row">
                
                <div class="col-12 offset-sm-1 offset-md-4 mt-3 p-0">
                <button
                  class="button primary-bg border-0 "
                  @click.prevent="saveAndContinue"
                >
                  <!-- <i
                    class="fas fa-circle-notch fa-spin mr-2 text-white"
                    v-if="loading"
                  ></i> -->
                  <span class="text-white">Save and Continue</span>
                  <span></span>
                </button>
               
            </div>
            <div class="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-4 mt-5">
                    <img src="../../assets/payment-options.png" class="w-100" style="opacity: 0.9">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import Dropdown from 'primevue/dropdown';
import Tooltip from 'primevue/tooltip';
import axios from "@/gateway/backendapi";
import finish from '../../services/progressbar/progress'
import axio from  'axios'
// import { useStore } from 'vuex'
import router from "@/router/index";
import store from "../../store/store"

export default {
    components: {
        Dropdown
    },
    directives: {
        'tooltip': Tooltip
    },
    setup () {
        const incomeAccount = ref([])
        const newContribution = ref([{}])
        const nigerianBanks = ref([])
        const selectedBank = ref("")
        const accountNumber = ref("")
        const selectedContribution = ref("")

        const addContribution = () => {
            newContribution.value.push({})
            console.log(newContribution.value)
        }

        const getIncomeAccount = ()=> {
            axios.get('api/Financials/Accounts/GetIncomeAccounts')
                .then(res => {
                   
                    // NProgress.done();
                    console.log(res)
                incomeAccount.value = res.data
                })
                .catch(err => {
                    // NProgress.done()
                    console.log(err)
                })
            }
            getIncomeAccount()
        
        const getListofBanks = () => {
            axios.get('https://api.paystack.co/bank')
                .then(res => {
              
                    console.log(res)
                nigerianBanks.value = res.data.data
                })
                .catch(err => {
            
                    console.log(err)
                })
            }
            getListofBanks()

        const deleteContribution = (index) => {
            newContribution.value.splice(index, 1)
        }

        const resolveCustomerDetail = async() => {
            try {
                let header = { headers: { Authorization: `Bearer ${process.env.VUE_APP_PAYSTACK_SECRET_KEY}` }}
                console.log(header, "header");

                let data = await axio.get(`https://api.paystack.co/bank/resolve?account_number=${accountNumber.value}&bank_code=${selectedBank.value.code}`, header)
                console.log(data)
            }
            catch (error) {
                finish()
                console.log(error)
            }
            console.log(selectedBank.value.code, accountNumber.value)
        }

        const saveAndContinue = () => {
            // let store = useStore()
            store.dispatch('contributions/contributionItems', newContribution)
            router.push({ name: 'PaymentOption' })
        }

        const selectContribution = (e, index) => {
            newContribution.value[newContribution.value.length - 1].offType = e.target.innerText
            // newContribution.value.offType = e.target.innerText
            console.log(e.target.innerText, index)
        }

        
        return {
            incomeAccount, newContribution, addContribution, deleteContribution, nigerianBanks, selectedBank, resolveCustomerDetail, accountNumber, saveAndContinue, selectContribution, selectedContribution
        }
    }
}
</script>

<style scoped>
.form {
  margin-top: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 15px #797e8159;
  border: 1px solid #dde2e6;
  border-radius: 7px;
  padding: 50px;
}

.btnIcons {
  width: 140px;
  height: 35px;
  color: #136acd;
  background-color: #dde2e6;
  border-radius: 40px;
  border: none;
}

.page-header {
  font: normal normal 800 29px Nunito sans;
}

.contri-item {
    padding: 20px 0 0 0;
    font: normal normal 700 20px Nunito Sans;
}
</style>