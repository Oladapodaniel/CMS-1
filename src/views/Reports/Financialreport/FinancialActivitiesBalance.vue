<template>
<div class="container container-wide mt-5 overflow-hidden  mb-4">
     <div>
            <h3 class="font-weight-bold mt-5">Accounting Activity and Balance Report </h3>
        </div>
        <div class="row">
  <div style="background: #ebeff4;  border-radius: 0.5rem;" class="row mx-2 w-100 py-5" >
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="" class="font-weight-bold">SELECT ACCOUNT</label></div>
                    <div>
                        <Dropdown
                          v-model="selectedAccount"
                          :options="accountType"
                          optionLabel="name"
                          placeholder="Select Account "
                          class="w-100"
                        />
                    </div>

                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class=""><label for="" class=" ml-2 font-weight-bold">START DATE</label></div>
                    <div>
                        <div>
                            <Calendar id="icon" v-model="startDate" class="calendar1" :showIcon="true" />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="" class="font-weight-bold">END DATE</label></div>
                     <div>
                            <Calendar id="icon" v-model="endDate" :showIcon="true" />
                        </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <label for="" ></label>
                    <div class="mt-2" @click="generateReport">
                        <button class="btn default-btn primary-bg "><div class="text-white">Generate Report</div></button>
                    </div>
                </div>
             </div> 
             </div>
             <section>
      <!-- table header -->
       <div>
            <h3 class="font-weight-bold mt-5">ACCOUNT ACTIVITY REPORT</h3>
        </div>
      <div class="container-top container-fluid table-main px-0 remove-styles2 remove-border responsiveness " >
        <table class="table remove-styles mt-0  table-hover table-header-area">
          <thead class="table-header-area-main">
            <tr class="small-text text-capitalize text-nowrap" style="border-bottom: 0" >
              <th scope="col">Date</th>
              <th scope="col">Account Name</th>
              <th scope="col">Ref Number</th>
              <th scope="col">Description</th>
              <th scope="col">Debit</th>
              <th scope="col">Credit</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody class="font-weight-normal text-nowrap">
            <tr v-for="(AccountList, index) in accountInChurch" :key="index">
              <td>{{ formatDate(AccountList.date) }}</td>
              <td>{{ AccountList.accountName }}</td>
              <td>{{ AccountList.refNumber }}</td>
              <td>{{ AccountList.description }}</td>
              <td>{{AccountList.debit}}</td>
              <td>{{ AccountList.credit }}</td>
              <td>{{ AccountList.balance }}</td>
            </tr>
            <tr class="answer-row">
              <td class="answer">Total</td>
              <td></td>
              <td></td>
              <td class="answer">{{amountTotal.toLocaleString()}}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div class="table-foot d-flex justify-content-end">
          <PaginationButtons />
        </div>
      </div>
      <!--end table header -->
    </section>
             </div>

</template>


<script>
import { computed, ref } from "vue";
import Dropdown from "primevue/dropdown";
import axios from "@/gateway/backendapi";
import Calendar from "primevue/calendar";
import MultiSelect from 'primevue/multiselect';
 import dateFormatter from  "../../../services/dates/dateformatter";
    export default {
        components:{
            Dropdown, MultiSelect,Calendar

        }, 

        setup() {

      const accountType = ref([]);
    const startDate = ref(new Date());
    const endDate = ref(new Date());
    const selectedAccount = ref({});
    const accountInChurch = ref([]);
    const acountID = ref([]);


        const generateReport = () => {
          axios.get(`/api/Reports/financials/getAccountActivityReport?startDate=${new Date(startDate.value).toLocaleDateString()}&endDate=${new Date(endDate.value).toLocaleDateString()}&accountID=${selectedAccount.value.id}`)
          .then((res) => {
            accountInChurch.value = res.data;
            console.log(accountInChurch.value, "✌️✌️");
            // offeringChart(res.data,'contributionName')
          //   maritalStatusChart(res.data,'maritalStatus')
          //   eventDateChart(res.data,'activityDate')
          })
          .catch((err) => {
            console.log(err);
          });
          // showReport.value = true;

      };

      const getAllFinancialAccount = async () => {
          try {
            axios
              .get('/api/Reports/financials/getAllFinancialAccounts')
              .then((res) => {
                // tenantCurrency.value = res.data;
                accountType.value = res.data;
              })
              .catch((err) => console.log(err));
            // donationSummary.value = data;
          } catch (err) {
            console.log(err);
          }
      };
    getAllFinancialAccount();

      const amountTotal = computed (() =>{
        return accountInChurch.value.reduce((acc, cur) =>{

          return acc + cur.amount

        },0)
      })

     const formatDate = (date) => {
      return dateFormatter.monthDayYear(date);
    };
        return{
          amountTotal,
          formatDate,
            accountType,
            startDate,
            endDate,
            selectedAccount,
            generateReport,
            accountInChurch,
            // offeringInChurch,
            acountID
            
        }
        
    }
        
  }
    
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.p-multiselect {
    width: 18rem;
}

.multiselect-custom {
    
        padding-top: .1rem;
        padding-bottom: .1rem;
    
}
.answer{
  font-weight: bolder;
  color: #fff;
}
.answer-row{
  background-color: #136acd;
  border-radius: 30px !important;
  border-bottom-left-radius:  50px !important;
  border-bottom-right-radius: 50px !important;
}

.answer-row:hover{
  background-color: #136acd;
}

    .country-item-value {
        padding: .25rem .5rem;
        border-radius: 3px;
        display: inline-flex;
        margin-right: .5rem;
        /* background-color:  */
        /* background-color: var(--primary-color); */
        /* color: var(--primary-color-text); */
    }
    .border{
    border-color:  #b0b2b5!important;
    border-radius: 15px!important;

    }
    .borderInner{
        width: 100%;
        height: 200px;
    }
    .table {
  width: 100% !important;
  box-shadow: 0 0.063rem 0.25rem #02172e45;
  border: 0.063rem solid #dde2e6;
  border-radius: 30px;
  text-align: left;
  margin-bottom: auto !important;
  padding-bottom: 0.5rem;
}

.table-header-area {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.table-header-area-main {
  background-color: #ebeff4;
}

.table-main {
    width: 100% !important;
    box-shadow: 0 0.063rem 0.25rem #02172e45 !important;
    border: 0.063rem solid #dde2e6 !important;
    border-radius: 30px !important;
    text-align: left !important;
    margin-bottom: auto !important;
    padding-bottom: 0.5rem !important;
}

.remove-styles{
  border: none !important;
box-shadow: none !important;
    border-bottom: 0 !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}

.remove-styles2{
padding-right: 0;
padding-left: 0;
border-top-left-radius: 0 !important;
border-top-right-radius: 0 !important;
}

.remove-border{
    box-shadow: none !important;
}
        img.flag {
            width: 17px;
        }
        .primary-bg{
            background-color: rgb(19, 106, 205)!important;
            border-style: none!important;
        };
        .p-button.p-button-icon-only{
            background-color: red!important;

        }


@media screen and (max-width: 640px) {
    .p-multiselect {
        width: 100%;
    }
}

</style>