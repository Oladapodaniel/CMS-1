<template>
  <div class="container-fluid px-5">
    <!-- header area -->
    <div class="container">
      <div
        class="
          row
          d-flex
          flex-row
          justify-content-between
          mt-5
          align-items-center
        "
      >
        <div class="centered-items">
          <h3 class="heading-text ml-2">Accounting Transactions Report</h3>
        </div>

        <!-- <div class="centered-items">
          <button class="default-btn font-weight-normal">
            Export &nbsp; &nbsp; <i class="pi pi-angle-down"></i>
          </button>
        </div> -->

         <!-- <div
          class="default-btn font-weight-normal c-pointer"
          @click="() => (showExport = !showExport)"
          style="width: fixed; position:relative">
                   Export &nbsp; &nbsp; <i class="pi pi-angle-down" ></i>
                   <div
                        class=" c-pointer"
                        style="width: 6rem; z-index:1000; position:absolute"
                        v-if="showExport">

                         <Listbox
                         @click="downloadFile"
                         v-model="selectedFileType"
                         :options="bookTypeList"
                         optionLabel="name"/>
                    </div>
              </div> -->

      </div>
    </div>
    <!--end of header area -->
    <!-- date area -->
     <div class="container-fluid bg-area my-3">
        <div class="row px-4 w-100 ml-md-5 px-sm-4 mt-sm-3 ">
              <div class="col-md-4 col-sm-12 px-md-0">
                  <div class="p-field p-col-12 pt-md-2 pb-2">
                    <div>
                      <label for="icon" class="mb-0 font-weight-bold">Start Date</label>
                    </div>
                    <Calendar class="w-100" id="icon" v-model="startDate" :showIcon="true" dateFormat="dd/mm/yy"/>
                  </div>
              </div>
              <div class="col-md-4 col-sm-12 pr-md-0">
                  <div class="p-field p-col-12 pt-md-2">
                    <div>
                      <label for="icon" class="mb-0 font-weight-bold">End Date</label>
                    </div>
                    <Calendar class="w-100" id="icon" v-model="endDate" :showIcon="true" dateFormat="dd/mm/yy"/>
                  </div>
              </div>
            <div class="col-md-4 col-sm-12 pr-md-0">
                  <div class="p-field p-col-12 pt-md-2">
                    <button
                            class="default-btn generate-report c-pointer font-weight-normal mt-4"
                            @click="generateReport">
                            Generate Report
                    </button>
                  </div>
              </div>
        </div>
      </div>
    <!--end of date area -->
    <div id="element-to-print">
      <section>
        <!-- chart area -->
        <div  class="chart">
          <div style="width: 45%" class="ml-md-4 chart1">
            <ByGenderChart
              domId="chart"
              title="By Gender"
              distance="5"
              :titleMargin="10"
              :summary="firstTimerChart"
            />
          </div>
        </div>
        <!--end of chart area -->
      </section>

      <section>
        <!-- table header -->
        <div v-if="accountTransaction.length > 0">
              <div  class="mt-2 container-fluid table-main px-0 remove-styles2 remove-border responsiveness" >
          <table class="table remove-styles mt-0 table-header-area">
            <thead class="table-header-area-main">
              <tr
              class="text-capitalize text-nowrap font-weight-bold"
                style="border-bottom: 0; font-size:medium"
              >
              <!-- <div>
                <tr>

                  <div class="text-capitalize font-weight-normal"></div>
                </tr> -->
                <!-- <th scope="col">Fund</th>
                <th scope="col"><span></span></th> -->
              <!-- </div> -->
                <!-- <th scope="col">Fund</th> -->
                <th scope="col">Account Name</th>
                <th scope="col">Reference Number</th>
                <th scope="col">Description</th>
                <th scope="col">Debit</th>
                <th scope="col">Credit</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody class="font-weight-bold text-nowrap mt-4"  style="
                          font-size: small" v-for="(fund, index) in funds"
              :key="index">
              <tr>
                <!-- v-if="fund.name !== 'null' " -->
                <td v-if="fund.name !== 'null' " class="fundType-color"  style="
                          font-size: medium">{{fund.name}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>
                <!-- <div v-for="(item, index) in fund.value" :key="index">
                 <div>{{item}}</div>
                 </div> -->
              <tr v-for="(account, indxx) in fund.value"
              :key="indxx">
                      <!-- <td>{{ account.fund }}</td> -->
                      <td>{{ account.accountName }}</td>
                      <td>{{ account.refNumber }}</td>
                      <td>{{ account.description }}</td>
                      <td class="text-success font-weight-bolder">{{ account.debit.toLocaleString() }}.00</td>
                      <!-- <td class="credit" v-if="account.credit === 0 ? account.value : (account.value) ">({{ account.credit }}.00)</td> -->
                      <td class="text-danger font-weight-bolder">({{ Math.abs( account.credit).toLocaleString() }}.00)</td>
                      <td>{{ formatDate(account.date) }}</td>
                  </tr>
                  <tr class="answer-row">
                      <td  class="answer">Subtotal</td>
                      <td></td>
                      <td></td>
                      <td class="text-success fund-answer">NGN{{ total(fund.value,"debit").toLocaleString() }}.00</td>
                      <td class="text-danger fund-answer">NGN({{ Math.abs(total(fund.value, "credit")).toLocaleString() }}.00)</td>
                      <td></td>
                  </tr>
                  <tr v-if="indxx === length-1" style="background-color: #fff;">
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                  </tr>
            </tbody>
            <tbody class="font-weight-bolder text-nowrap" style="font-size: small">
                <tr class="answer-row2">
                      <td  class=" gross-total" >Total</td>
                      <td></td>
                      <td></td>
                      <td class=" gross-total responsive-horizontalrule">NGN{{ sumOfCreditAndDebit("debit").toLocaleString() }}.00
                        <hr class="horizontal-rule" />
                      </td>
                      <td class=" gross-total responsive-horizontalrule" >NGN({{ Math.abs(sumOfCreditAndDebit("credit")).toLocaleString() }}.00)
                        <hr class="horizontal-rule" />
                      </td>
                      <td></td>
                  </tr>
            </tbody>
          </table>
          <!-- <div class="table-foot d-flex justify-content-end mt-n3">
            <PaginationButtons />
          </div> -->
        </div>
        </div>

        <!--end table header -->
      </section>
    </div>
  </div>
</template>

<script>
import { ref, } from "vue";
import Calendar from "primevue/calendar";
import ByGenderChart from "@/components/charts/PieChart.vue";
// import PaginationButtons from "../../../components/pagination/PaginationButtons";
import axios from "@/gateway/backendapi";
import dateFormatter from  "../../../services/dates/dateformatter";
import printJS from "print-js";
import exportService from "../../../services/exportFile/exportservice";
// import Listbox from 'primevue/listbox';
import groupResponse from '../../../services/groupArray/groupResponse.js';

export default {
  components: {
    Calendar,
    ByGenderChart,
    // Listbox,
    // PaginationButtons,
  },
  setup() {
    const startDate = ref("");
    const endDate = ref("");
    const accountTransaction = ref([]);
    // const firstTimerChart = ref([])
      const showExport = ref(false);
    const fileName = ref("");
    // const bookTypeList = ref(["xlsx", "csv", "txt"]);
    const bookTypeList = ref([{name: "xlsx" }, {name: "csv" }, {name: "txt" }, {name: "pdf" }]);
    const selectedFileType = ref("");
    const fileHeaderToExport = ref([]);
    const fileToExport = ref([]);
    const fundType = ref([]);
    const funds = ref([]);
    const generateReport = () => {
      axios
        .get(`/api/Reports/financials/getAccountTransactionsReport?startDate=${new Date(startDate.value).toLocaleDateString("en-US")}&endDate=${new Date(endDate.value).toLocaleDateString("en-US")}`)
        .then((res) => {

          console.log(res, "🎄🎄🎄");
          accountTransaction.value = res.data.filter(i => i !== null)
          console.log(accountTransaction.value, "✌️✌️");
          groupedFundType()
            /* function to call service and populate table */
          setTimeout(() => {
            fileHeaderToExport.value = exportService.tableHeaderToJson(
              document.getElementsByTagName("th")
            );
            fileToExport.value = exportService.tableToJson(
              document.getElementById("table")
            );
          }, 1000);
          /* End function to call service and populate table */
        })
        .catch((err) => {
          console.log(err);
        });
    };


       /* Code For Exporting File */
    const downloadFile = () => {
 console.log(fileHeaderToExport.value, "🎁🎁")

  console.log(fileName.value, "🎁🎁")
  // alert(selectedFileType.value)
  console.log(fileToExport.value, "🎁🎁")

      exportService.downLoadExcel(
        selectedFileType.value.name, document.getElementById("element-to-print"), fileName.value, fileHeaderToExport.value,  fileToExport.value,);
    };
    /* End Code For Exporting File */

     const formatDate = (activityDate) => {
      return dateFormatter.monthDayYear(activityDate);
    };

  // grouped different type of funds
  const groupedFundType = () => {
    fundType.value = groupResponse.groupData(accountTransaction.value, 'fund')
    console.log(fundType.value, "🎄🎄")
    for (const prop in fundType.value) {
      funds.value.push({
        name:  prop,
        value: fundType.value[prop]
      })
    }
    console.log(funds.value);
  }

   const total = (arr, str) => {
      console.log(arr, "kgkfuvygu");
          if(!arr || arr.length === 0) return 0
          return arr.reduce((acc, cur) => {
        return acc + cur[str]
      }, 0)
    }

   const sumOfCreditAndDebit = (type) => {
      if (funds.value.length === 0) return 0
      const allAccounts = [ ];
      for(let group of funds.value) {
        console.log(group)
        allAccounts.push(...group.value)
      }
      console.log(allAccounts)
       return allAccounts.reduce((arr, cur) => {
          return arr + cur[type]
        }, 0)
   }

    return {
      total,
      sumOfCreditAndDebit,
      fundType,
      funds,
      groupedFundType,
      Calendar,
      startDate,
      endDate,
      accountTransaction,
      generateReport,
      formatDate,
      fileName,
      downloadFile,
      showExport,
      bookTypeList,
      printJS,
      selectedFileType,
      // firstTimerChart
    };
  },
};
</script>

<style scoped>

.default-btn {
    font-weight: 600;
    white-space: initial;
    font-size: 1rem;
    border-radius: 3rem;
    border: 1px solid #002044;
    padding: .5rem 1.25rem;
    width: auto;
	/* border:none; */
    /* outline: transparent !important; */
    max-height: 40px;
    /* background: #6c757d47 !important; */
    min-width: 121px;
}

.gross-total {
  font-weight: bolder;
  font-size: large;
  color: #fff;
}

.answer-row2 {
  background-color: #136acd;
}
.horizontal-rule {
   /* border: 0.1875rem solid #ffe50f; */
  /* border: 0.1875rem solid #ebeff4; */
  border-radius: 5px;
  margin: 0.125rem 0;
  background: white;
  height: 1px;
}

/* .responsive-horizontalrule {
  display: inline-block;
} */

.generate-report {
  font-size: 1rem;
  color: #fff;
  background-color: #136acd !important;
  border: none;
  min-width: 7rem;
}

.heading-text {
  font: normal normal 800 1.5rem Nunito sans;
}

.bg-area {
  background-color: #ebeff4;
  border-radius: 0.5rem;
  padding: 0.2rem 0 1.2rem 0;
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

.tablerow-style {
  min-width: 100%;
  border-bottom: 0px;
}

.graph-area{
    border: 1px solid #dde2e6;
    border-radius: 0.5rem;
    padding: 1rem 0rem;
    margin: 2rem 0rem;
}

.responsiveness{
  max-width: 100%;
  overflow-y: scroll;
}

.fundType-color{
  color:#136acd
}

.answer{
  font-weight: bolder;
  font-size:medium;
   color: #136acd;
}

.answer-row{
  background-color: #ebeff4;
}

.answer-row:hover{
  background-color:none;
}

.fund-answer{
  font-weight: bolder;
  font-size:medium;
}
</style>