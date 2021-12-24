<template>
<div class="container container-top container-wide mb-4">
        <div class="row d-flex justify-content-between pr-4">
            <div class="heading-text">Accounting Activity and Balance Report </div>
            <div class="default-btn border-secondary font-weight-normal c-pointer"
                @click="() => (showExport = !showExport)"
                style="width: fixed; position:relative">Export &nbsp; &nbsp; <i class="pi pi-angle-down" ></i>
                <div class=" c-pointer" style="width: 6rem; z-index:1000; position:absolute" v-if="showExport">
                      <Listbox @click="downloadFile" v-model="selectedFileType" :options="bookTypeList" optionLabel="name"/>
                </div>
            </div>
            <!-- <div @click="() => showExport = !showExport" class="cursor-pointer default-btn border-0 bg-secondary d-flex align-items-center justify-content-center"><div>Export</div>&nbsp;&nbsp;<i class="pi pi-chevron-down"></i></div> -->
        </div>
        <div class="container-fluid mb-2 py-4  ">
             <div class="row">
                <div style="background: #ebeff4;  border-radius: 0.5rem;" class="row  w-100 py-5" >
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="" class="font-weight-bold">Select Account</label></div>
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
                    <div class=""><label for="icon" class=" ml-2 font-weight-bold">Start Date</label></div>
                    <div>
                        <div>
                            <Calendar dateFormat="dd/mm/yy" id="icon" v-model="startDate" class="calendar1" :showIcon="true" />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div><label for="icon" class="font-weight-bold">End Date</label></div>
                     <div>
                            <Calendar dateFormat="dd/mm/yy" id="icon" v-model="endDate" :showIcon="true" />
                        </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <label for="" ></label>
                    <div class="mt-2" @click="generateReport">
                        <button class=" default-btn generate-report "><div class="text-white">Generate Report </div></button>
                    </div>
                </div>
             </div> 
             </div>
        </div>
       
             <section :class="{ 'show-report': showReport, 'hide-report' : !showReport}">
      <!-- table header -->
        <!-- <div>
              <div class=" heading-text mt-5">Account Activity Report</div>
        </div> -->
      <div id="element-to-print" class="container-top container-fluid table-main px-0 remove-styles2 remove-border responsiveness " >
        <table class="table remove-styles mt-0  table-header-area" id="table">
          <thead class="table-header-area-main">
            <tr class=" font-weight-bold text-capitalize text-nowrap" style="border-bottom: 0" >
              <th scope="col">Date</th>
              <th scope="col">Account Name</th>
              <th scope="col">Ref Number</th>
              <th scope="col">Description</th>
              <th scope="col">Debit</th>
              <th scope="col">Credit</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody class="font-weight-bold text-nowrap small-text">
            <tr v-for="(AccountList, index) in accountInChurch" :key="index">
              <td>{{ formatDate(AccountList.date) }}</td>
              <td>{{ AccountList.accountName }}</td>
              <td>{{ AccountList.refNumber }}</td>
              <td>{{ AccountList.description }}</td>
              <td class="text-success">{{Math.abs(AccountList.debit).toLocaleString()}}.00</td>
              <td class="text-danger">{{Math.abs(AccountList.credit).toLocaleString()}}.00</td>
              <td class="text-dark font-weight-bolder ">{{ AccountList && AccountList.currency ? AccountList.currency.symbol: "" }}{{Math.abs(AccountList.balance).toLocaleString()}}</td>
              <!-- <td>{{parseFloat(AccountList.balance).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</td> -->
            </tr>
            <!-- <tr class="answer-row">
              <td class="answer"></td>
              <td></td>
              <td></td>
              <td></td>
              <td class="answer text-success ">NGN {{sumDebit ? sumDebit.toLocaleString() : 0}}.00</td>
              <td class="answer text-danger ">NGN {{sumCredit ? Math.abs(sumCredit).toLocaleString() : 0}}.00</td>
              <td></td>
            </tr> -->
          </tbody>
          <tbody class="font-weight-bolder text-nowrap" style="font-size: small">
            <tr class="answer-row">
              <td class="gross-total">Total Balance</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td class="gross-total">{{ accountInChurch.length > 0 ? currentUser.currencySymbol + accountInChurch[accountInChurch.length - 1].balance.toLocaleString() : 0 }}
                 <hr class="horizontal-rule" />
              </td>
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
  import printJS from "print-js";
  import Listbox from 'primevue/listbox';
  // import html2pdf from "html2pdf.js"
  import exportService from "../../../services/exportFile/exportservice";
  import currencyConverter from "../../../services/currency-converter/currencyConverter"

    export default {
        components:{
            Dropdown, MultiSelect,Calendar,Listbox

        }, 

        setup() {

    const accountType = ref([]);
    const startDate = ref("");
    const endDate = ref("");
    const selectedAccount = ref({});
    const accountInChurch = ref([]);
    const acountID = ref([]);
    const showReport = ref(false);
    const showExport = ref(false);
    const fileName = ref("")
    const bookTypeList = ref([{ name : 'xlsx'}, { name: 'csv'}, {name: 'txt'},{name: 'pdf'} ])
    const selectedFileType = ref("");
    const fileHeaderToExport = ref([])
    const fileToExport = ref([]);
    const currentUser = ref({})



    const sumDebit = computed (()=>{
          if(accountInChurch.value.length === 0) return 0

           let sumAllDebit = 0
           accountInChurch.value.forEach(i => {
              sumAllDebit += i.debit
           })
            // console.log(summed)
            return  sumAllDebit
          
        })
    const sumCredit = computed (()=>{
          if(accountInChurch.value.length === 0) return 0
           let sumAllCredit = 0
           accountInChurch.value.forEach(i => {
             sumAllCredit += i.credit
           })
            // console.log(summed)
            return sumAllCredit
          //  return accountInChurch.value.reduce((a,b) => {
          //    return  (+a.credit || 0) + (+b.credit || 0)
          //   })  
        })

    const sumBalance = computed (()=>{
          if(accountInChurch.value.length === 0) return 0
           let sumAllBalance = 0
           accountInChurch.value.forEach(i => {
             sumAllBalance += i.balance
           })
            // console.log(summed)
            return sumAllBalance
          
        })
     const downloadFile = () => {
        exportService.downLoadExcel(selectedFileType.value.name, document.getElementById('element-to-print'), fileName.value, fileHeaderToExport.value, fileToExport.value)
      }


        const generateReport = () => {
          axios.get(`/api/Reports/financials/getAccountActivityReport?startDate=${new Date(startDate.value).toLocaleDateString("en-US")}&endDate=${new Date(endDate.value).toLocaleDateString("en-US")}&accountID=${selectedAccount.value.id}`)
          .then((res) => {
            convertValues(res.data)
            
            // offeringChart(res.data,'contributionName')
          //   maritalStatusChart(res.data,'maritalStatus')
          //   eventDateChart(res.data,'activityDate')
           setTimeout(() => {
                        fileHeaderToExport.value = exportService.tableHeaderToJson(document.getElementsByTagName("th"))
                        fileToExport.value = exportService.tableToJson(document.getElementById("table"))
                    }, 1000)

                     showReport.value = true;
          })
          .catch((err) => {
            console.log(err);
          });
          // showReport.value = true;

      };

      const convertValues = (data) => {
        try {
              accountInChurch.value = data.map(i => {
              let converted  = currencyConverter.currencyConverter(+i.balance, i.currency ? `usd${i.currency.shortCode.toLowerCase()}` : "", `usd${currentUser.value.currency.toLowerCase()}`)
            converted.then(res => i.balance = res).catch(err => console.log(err))
            return i
          })
          console.log(accountInChurch.value, "✌️✌️");
        }
        catch (err) {
          console.log(err)
        }
      }

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

     const getCurrentlySignedInUser = async() => {
            try {
                const res = await axios.get("/api/Membership/GetCurrentSignedInUser");
                console.log(res.data)
                currentUser.value = res.data
                
                
            } catch (err) {
                /*eslint no-undef: "warn"*/
                NProgress.done();
                console.log(err);
            }
        }
        getCurrentlySignedInUser()
        return{
          amountTotal,
          formatDate,
            accountType,
            startDate,
            endDate,
            selectedAccount,
            generateReport,
            accountInChurch,
            downloadFile,
             showReport,
            showExport,
            fileHeaderToExport,
            fileToExport,
            selectedFileType,
            bookTypeList,
            fileName,
            printJS,
            // offeringInChurch,
            acountID,
            sumBalance, 
            sumDebit,
            sumCredit,
            currentUser,
            convertValues
            
        }
        
    }
        
  }
    
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.horizontal-rule {
  border-radius: 5px;
  margin: 0.125rem 0;
  background: white;
  height: 2px;
}

.show-report{
    display: block;
}
.hide-report{
    display: none;
}

.responsiveness{
  max-width: 100%;
  overflow-y: scroll;
}
.heading-text {
  font: normal normal 800 1.5rem Nunito sans;
}
/* 
.default-btn {
    font-weight: 600;
    white-space: initial;
    font-size: 1rem;
    border-radius: 3rem; 
    border: 1px solid #002044; 
    padding: .5rem 1.25rem;
    width: auto;
	border:none; 
     outline: transparent !important; 
     max-height: 40px;
    background: #6c757d47 !important;
    color:#000;
    text-decoration: none;
    min-width: 121px; 
} */

.default-btn:hover {
  text-decoration: none;
}


.generate-report {
  font-size: 1rem;
  color: #fff;
  background-color: #136acd !important ;
  border: none;
  min-width: 7rem;
}
.p-multiselect {
    width: 18rem;
}

.multiselect-custom {
    
        padding-top: .1rem;
        padding-bottom: .1rem;
    
}
.gross-total {
  font-weight: bolder;
  font-size: large;
  color: #fff;
}

.answer {
  font-size: 1.7em;
}

.answer-row{
  background-color: #136ACD;
  border-radius: 30px !important;
  border-bottom-left-radius:  50px !important;
  border-bottom-right-radius: 50px !important;
  font-weight: bold;
  color: white;
}

/* .answer-row:hover{
  background-color: #d1d1d1;
} */

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