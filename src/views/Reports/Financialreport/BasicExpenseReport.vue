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
          <h3 class="heading-text ml-2">Basic Expense Report</h3>
           <p class="ml-2">This reports provides a detailed list of all the church expenses in a simplied display.</p>
        </div>

        <!-- <div class="centered-items pr-3">
          <button class="default-btn font-weight-normal"
          @click="() => (showExport = !showExport)">
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
      <!-- <transition name="move" mode="out-in">
               <div class="row my-4" v-if="showExport">
        <div class="col-sm-5">
          <span class="p-float-label ml-n3">
            <InputText
              id="inputtext"
              class="w-100"
              type="text"
              v-model="fileName"
            />
            <label for="inputtext">Enter file name</label>
          </span>
        </div>
        <div class="col-sm-4">
          <Dropdown
            v-model="selectedFileType"
            class="w-100"
            :options="bookTypeList"
            placeholder="Select file type"
          />
        </div> -->
        <!-- <div class="">Export</div> -->
        <!-- <div @click="downloadFile" class="col-sm-2 offset-sm-1">
          <div
            class="
              default-btn
              d-flex
              align-items-center
              justify-content-center
              c-pointer
              generate-report
            "
          >
            Download
          </div>
        </div>
      </div>
      </transition> -->

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
                    <Calendar class="w-100" id="icon" v-model="startDate" :showIcon="true"  dateFormat="dd/mm/yy"/>
                  </div>
              </div>
              <div class="col-md-4 col-sm-12 pr-md-0">
                  <div class="p-field p-col-12 pt-md-2">
                    <div>
                      <label for="icon" class="mb-0 font-weight-bold">End Date</label>
                    </div>
                    <Calendar class="w-100" id="icon" v-model="endDate" :showIcon="true"  dateFormat="dd/mm/yy"/>
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
        <!-- d-flex justify-content-center -->
        <div  class="chart row"
        :class=" accountTransaction &&  accountTransaction.length > 0 ? 'graph-area' : '' ">
        <div class="chart1 col-12 col-md-6 ">
            <BasicExpensePieChart
              domId="chart"
              title=""
              distance="5"
              :titleMargin="10"
              :summary="mappedExpenses"
            />
          </div>

           <div class="chart1 col-12 col-md-6">
          <BasicExpenseColumnChart
            domId="chart1"
            title=""
            distance="5"
            :titleMargin="10"
            :data="itemName"
            subtitle=""
            :series= "columnChartArray"
            yAxisText="Amount"
          />
        </div>
        </div>
        <!--end of chart area -->
      </section>

      <section>
        <!-- table header -->
      <div v-if="accountTransaction.length > 0">
          <div  class="mt-2 container-fluid table-main px-0 remove-styles2 remove-border responsiveness" >
          <table id="table" class="table remove-styles mt-0 table-header-area">
            <thead class="table-header-area-main">
              <tr
              class=" text-capitalize text-nowrap font-weight-bold"
                style="border-bottom: 0; font-size:medium"
              >
                <!-- <th scope="col">Fund</th> -->
                <th scope="col">Account Name</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody class="font-weight-bold text-nowrap"  style="
                          font-size: small" v-for="(fund, index) in funds"
              :key="index">
                <tr v-if="fund.name !== 'null'">
                  <td class="fundType-color" >{{ fund.name }}</td>
                  <td></td>
                  <td></td>
                  <!-- <td></td> -->
                  <td></td>
                </tr>
                <tr v-for="(account, indxx) in fund.name !== 'null' ? fund.value : []"
              :key="indxx">
                  <!-- <td></td> -->
                  <td>{{ account.accountName }}</td>
                  <td>{{ account.description }}</td>
                  <td>{{ Math.abs(account.amount).toLocaleString() }}.00</td>
                  <td>{{ formatDate(account.date) }}</td>
                  </tr>
                <tr class="answer-row" v-if="fund.name !== 'null'">
                  <td  class="subtotal">Subtotal</td>
                  <td></td>
                  <!-- <td></td> -->
                  <td class="subtotal">NGN{{ total(fund.value).toLocaleString() }}.00</td>
                  <td></td>
                </tr>
            </tbody>
             <tbody class="font-weight-bold text-nowrap" style="
                           font-size: small">
           <tr class="answer-row2">
              <td class="total">Total Expenses</td>
              <!-- <td></td> -->
              <td></td>
              <td class="total responsive-horizontalrule">NGN{{ fundSum.toLocaleString()}}.00<hr class="horizontal-rule"/></td>
              <td></td>
            </tr>
          </tbody>
          </table>
          <div class="table-foot d-flex justify-content-end mt-3">
            <!-- <PaginationButtons /> -->
          </div>
        </div>
      </div>
        <!-- <button @click="amountTotal">click me</button> -->
        <!--end table header -->
      </section>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Calendar from "primevue/calendar";
import BasicExpensePieChart from "@/components/charts/ReportPieChart.vue";
import BasicExpenseColumnChart from "../../../components/charts/ReportColumnChart.vue";
import axios from "@/gateway/backendapi";
import dateFormatter from  "../../../services/dates/dateformatter";
// import Listbox from 'primevue/listbox';
import printJS from "print-js";
import exportService from "../../../services/exportFile/exportserviceforbasicexpense.js";
import groupResponse from '../../../services/groupArray/groupResponse.js';
// import numbers_formatter from "../../../services/numbers/numbers_formatter.js"
// import PerformanceColumnChart from "@/components/charts/ColumnChart2.vue";
// import PaginationButtons from "../../../components/pagination/PaginationButtons";

export default {
  components: {
  Calendar,
  BasicExpensePieChart,
  BasicExpenseColumnChart,
    // Listbox,
    // PerformanceColumnChart,
    // PaginationButtons,
  },
  setup() {
    const startDate = ref("");
    const endDate = ref("");
    const accountTransaction = ref([]);
    const acccountType = ref();
    const groupedAccountName = ref([]);
    const columnChartArray = ref([]);
    const fundType = ref([]);
    const funds = ref([]);
    const mappedExpensesCol = ref([]);
    const expencesDetails = ref([]);
    const showExport = ref(false);
    const fileName = ref("");
    const bookTypeList = ref([{name: "xlsx" }, {name: "csv" }, {name: "txt" }, {name: "pdf" }]);
    const selectedFileType = ref("");
    const fileHeaderToExport = ref([]);
    const fileToExport = ref([]);
    const generateReport = () => {
      axios
        .get(`/api/Reports/financials/getAccountTypeReport?startDate=${new Date(startDate.value).toLocaleDateString("en-US")}&endDate=${new Date(endDate.value).toLocaleDateString("en-US")}&accountType=${3}`)
        .then((res) => {

          console.log(res, "🎄🎄🎄");
          accountTransaction.value = res.data;
          groupedFundType()
          groupChart( accountTransaction.value,'accountName');

           /* function to call service and populate table */
          setTimeout(() => {
            fileHeaderToExport.value = exportService.tableHeaderToJson(
              document.getElementsByTagName("th")
            );
            console.log(document.getElementById("table"));
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
     console.log();
      exportService.downLoadExcel(
        selectedFileType.value.name,
        document.getElementById("element-to-print"),
        fileName.value,
        fileHeaderToExport.value,
        fileToExport.value
      );
    };
    /* End Code For Exporting File */

      const groupChart = (array, key) => {
            let result = array.reduce((result, currentValue) => {
                // If an array already present for key, push it to the array. Else create an array and push the object
                (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
                );
                // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
                return result;
            }, {}); // empty object is the initial value for result object
            console.log(result)
            for (const prop in result) {
                console.log(prop, result[prop])
                groupedAccountName.value.push({
                name: prop,
                value: result[prop].reduce((acc, cur) => {
                  return Math.abs(acc + cur.amount)
                }, 0),
                })
                console.log(groupedAccountName.value)
            }

            for (const prop in result) {
                console.log(prop, result[prop])
                columnChartArray.value.push({
                name: prop,
                data: result[prop].reduce((acc, cur) => {
                  return Math.abs(acc + cur.amount)
                }, 0),
                })
            }
            console.log(columnChartArray.value)
        };

        const mappedExpenses = computed(() => {
          if (groupedAccountName.value.length === 0) return []
          return groupedAccountName.value.map(i => i)
        })

        const itemName = computed(() => {
           if (columnChartArray.value.length === 0) return []
          return columnChartArray.value.map(i => i)
        })

        const expenseChart = ref([]);
        const ExpenseDetails = computed(() => {
           expenseChart.value.push({
             name: "itemName",
             data:columnChartArray.value
           })
        })



    const groupedFundType = () => {
      fundType.value = groupResponse.groupData(accountTransaction.value, 'fund')
      console.log(fundType.value, "🎼🎼🎉🎉");
        for (const prop in fundType.value) {
          funds.value.push({
          name:prop,
          value: fundType.value[prop]
          })
      }
      console.log(funds.value);
    };

    const total = (arr) => {
      console.log(arr, "kgkfuvygu");
          if(!arr || arr.length === 0) return 0
          return arr.reduce((acc, cur) => {
        return acc + cur.amount
      }, 0)
    }

    const fundSum = computed(() => {
      if (accountTransaction.value.length === 0) return 0
      return accountTransaction.value.reduce((a, b) => {
          return a + b.amount
        }, 0)
    })


     const formatDate = (activityDate) => {
      return dateFormatter.monthDayYear(activityDate);
    };



    return {
      Calendar,
      startDate,
      endDate,
      accountTransaction,
      generateReport,
      formatDate,
     acccountType,
     groupedFundType,
      groupChart,
      groupedAccountName,
      fundType,
      funds,
       printJS,
      showExport,
      fileName,
      bookTypeList,
      selectedFileType,
      downloadFile,
      total,
      fundSum,
      mappedExpenses,
      ExpenseDetails,
      mappedExpensesCol,
      expencesDetails,
      itemName,
      expenseChart,
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
    max-height: 40px;
    min-width: 121px;
}

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
    /* border-radius: 30px !important; */
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
  overflow-x: scroll;
  /* overflow-y: scroll; */
}

.graph-area{
    border: 1px solid #dde2e6;
    border-radius: 0.5rem;
    padding: 1rem 0rem;
    margin: 2rem 0rem !important;
     width: 100% !important;
  box-shadow: 0 0.063rem 0.25rem #02172e45;
}

.answer{
  font-weight: bolder;
  font-size:medium;
   /* color: #000; */
   color: #136acd;
}

.answer-row{
  background-color: #ebeff4;
}

.answer-row:hover{
  background-color:none;
}

.fundType-color{
  color:#136acd;
  font-size: larger;
}

.total{
    font-weight: bolder;
  font-size:large;
   color: #fff;
}

.answer-row2{
  background-color: #136ACD;
}

.subtotal{
  font-weight: 700;
  font-size:large;
    color: #136acd;
}

.horizontal-rule{
 border: 0.1875rem solid #FFE50F;
  border-radius: 5px;
  margin: 0.125rem 0;
}

.responsive-horizontalrule{
  display:inline-block;
}


/* .move-enter-active {
  animation: move-in .8s;
}
.move-leave-active {
  animation: move-in .8s reverse;
}
@keyframes move-in {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }

} */
</style>