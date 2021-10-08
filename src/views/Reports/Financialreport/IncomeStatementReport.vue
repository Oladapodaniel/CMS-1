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
          <h3 class="heading-text ml-n1">Income Statement Report</h3>
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
                   Export As &nbsp; &nbsp; <i class="pi pi-angle-down" ></i>
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
       <div>
                   <p class="ml-n3">A detailed report of all incomes and expenses of the ministry in a given period.</p>
              </div>

<!-- name="fade" -->
    <!-- <transition
      name="move" mode="out-in">
     <div class="row my-4" v-if="showExport">
        <div class="col-sm-5">
          <span class="p-float-label ml-n1">
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
        </div>
        <div @click="downloadFile" class="col-sm-2 offset-sm-1">
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
                    <Calendar class="w-100" id="icon" v-model="startDate" :showIcon="true" />
                  </div>
              </div>
              <div class="col-md-4 col-sm-12 pr-md-0">
                  <div class="p-field p-col-12 pt-md-2">
                    <div>
                      <label for="icon" class="mb-0 font-weight-bold">End Date</label>
                    </div>
                    <Calendar class="w-100" id="icon" v-model="endDate" :showIcon="true" />
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

    <section>
      <!-- chart area -->
      <div class="chart row"
      :class=" incomeStatement &&  incomeStatement.length > 0 ? 'graph-area' : '' ">
        <div class="chart1 col-12 col-md-12">
          <ByGenderChart
            domId="chart"
            title="Income Statement Report"
            distance="5"
            :titleMargin="10"
            :summary="groupofIcomeAndExpense"
          />
      </div>
        </div>
        <div class="chart row">
          <div class="col-12 col-md-12">
        <NegativeChart :data="incomeStatementDetail"/>
        </div>
        </div>
        <!-- <div class="chart row">
          <div class="chart1 col-12 col-md-12">
         <IncomeStatmentColumnChart
            domId="chart1"
            title="Income Statement Report"
            distance="5"
            :titleMargin="10"
            :data="incomeStatementDetail"
            subtitle="c"
            :series="['Income', 'Expense']"
            yAxisText = "Amount"
             />
        </div>
        </div> -->
      <!--end of chart area -->
    </section>

    <section>
      <!-- table header -->
	<div v-if="groupedIncomeItemToDisplay.length > 0">
         <div class="mt-2 container-fluid table-main px-0 remove-styles2 remove-border responsiveness" >
        <table id="table" class="table remove-styles mt-0  table-header-area">
          <thead class="table-header-area-main">
            <tr
             class="small-text text-capitalize text-nowrap"
              style="border-bottom: 0"
            >
              <th scope="col">Fund</th>
              <th scope="col">Account Category</th>
              <th scope="col">Account Name</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
            </tr>
          </thead>

           <tbody class="font-weight-normal text-nowrap border-bottom">
            <tr class="border-bottom" style="position: relative" v-for="(fund, index) in funds"
            :key="index">
              <!-- <td>{{ index === 0 ? transaction.fund : " " }}</td> -->
              <!-- :colspan="funds.length - 1" -->
              <td>{{fund.name}}
                <tr style="position: absolute;bottom:0">
                   <td class="answer">SubTotal</td>
                </tr>
              </td>
              <td border-bottom >
                <tr v-for="(item, index) in groupAccountCategoery(fund.value)" :key="index" class="mt-2">
                  {{item.name}}
                </tr>
              </td>
              <td border-bottom>
                <tr v-for="(item, index) in fund.value" :key="index" class="mt-2">
                  {{item.accountName}}
                </tr>
              </td>
              <td border-bottom>
                <tr v-for="(item, index) in fund.value" :key="index" class="mt-2">
                  {{item.description}}
                  </tr>
              </td>
              <td border-bottom>
                <tr v-for="(item, index) in fund.value" :key="index" class="mt-2">
                  {{item.amount}}
                </tr>
                <tr  class="mt-2 answer">
                  {{Math.abs(total(fund.value).toLocaleString()).toFixed(2)}}
                </tr>
              </td>
              <td border-bottom>
                <tr v-for="(item, index) in fund.value" :key="index" class="mt-2">
                  {{ formatDate(item.date) }}
                </tr>
              </td>
            </tr>
            <tr class="answer-row">
              <td class="answer">Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td class="answer"> {{Math.abs(fundSum).toFixed(2).toLocaleString()}}</td>
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
</template>

<script>

import { ref, computed} from "vue";
import Calendar from "primevue/calendar";
import ByGenderChart from "@/components/charts/PieChart.vue";
import axios from "@/gateway/backendapi";
import dateFormatter from  "../../../services/dates/dateformatter";
// import IncomeStatmentColumnChart from "../../../components/charts/ColumnChart2.vue";
import NegativeChart from "../../../components/charts/NegativeColumnChart";
// import Dropdown from "primevue/dropdown";
// import InputText from "primevue/inputtext";
// import Listbox from 'primevue/listbox';
import printJS from "print-js";
import exportService from "../../../services/exportFile/exportserviceforincomestatement.js";
import groupResponse from '../../../services/groupArray/groupResponse.js'
// import PaginationButtons from "../../../components/pagination/PaginationButtons";

export default {
  components: {
    Calendar,
    ByGenderChart,
    // IncomeStatmentColumnChart,
    NegativeChart,
      // Dropdown,
    // InputText,
    // Listbox,
    // PaginationButtons,
  },
  setup() {
    const startDate = ref("");
    const endDate = ref("");
    const incomeStatement = ref([]);
    const groupedIncomeStatements = ref([])
    const groupedExpenseStatements = ref([])
    const groupedExpenseItemToDisplay = ref([])
    const chartForIcomeAndExpense = ref([])
    const groupofIcomeAndExpense =ref([])
    // const mappedIncomeAndExpense = ref([])
    const allIncomeAndExpenses = ref([])
    const incomeStatementData = ref([])
     const showExport = ref(false);
    const fileName = ref("");
    const bookTypeList = ref([{name: "xlsx" }, {name: "csv" }, {name: "txt" }, {name: "" }]);
    const selectedFileType = ref("");
    const fileHeaderToExport = ref([]);
    const fileToExport = ref([]);
    const fundType = ref([]);
    const funds = ref([]);

    const generateReport = () => {
      axios
        .get(`/api/Reports/financials/getIncomeStatementReport?startDate=${new Date(startDate.value).toLocaleDateString()}&endDate=${new Date(endDate.value).toLocaleDateString()}`)
        .then((res) => {
          console.log(res, "🎄🎄🎄");
          incomeStatement.value = res.data.filter(i => i !== null)
          console.log(incomeStatement.value);
          let response = res.data
           chartForIcomeAndExpense.value = response ;
          churchIncomes(incomeStatement.value, 'accountCategory');
          churchExpense(incomeStatement.value, 'accountCategory');
          pieChart(incomeStatement.value, 'accountCategory')
          groupedFundType()
          groupAccountCategoery()

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

        const groupedFundType = () => {
      fundType.value = groupResponse.groupData(incomeStatement.value, 'fund')
        for (const prop in fundType.value) {
          funds.value.push({name:prop,
          value: fundType.value[prop]
          // .reduce((acc, cur) => {
          //         return acc + cur.amount
          //       }, 0),
          })
      }
      console.log(funds.value,"🎼🎼🎉🎉");
    };
    groupedFundType()



    const groupAccountCategoery = (arr) => {
      if (!arr || arr.length === 0) return
      const category = [];
       const categoryType = groupResponse.groupData(arr, 'accountCategory')
        for (const prop in categoryType) {
          category.push({
            name:prop,
            value:categoryType[prop]
          })
        }
        console.log(category, "🎵🎵");
        return category
    }
    groupAccountCategoery()

                /* Code For Exporting File */
    const downloadFile = () => {
      exportService.downLoadExcel(
        selectedFileType.value,
        document.getElementById("element-to-print"),
        fileName.value,
        fileHeaderToExport.value,
        fileToExport.value
      );
    };
    /* End Code For Exporting File */

/* Chart Area */
    const pieChart = (array, key) => {
            let result = array.reduce((result, currentValue) => {
                // If an array already present for key, push it to the array. Else create an array and push the object
                (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
                );
                // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
                return result;
            }, {}); // empty object is the initial value for result object
            console.log(result)
            groupofIcomeAndExpense.value = []
            for (const prop in result) {
                console.log(prop, result[prop])
                groupofIcomeAndExpense.value.push({
                name: prop,
                value: result[prop].reduce((acc, cur) => {
                  return acc + cur.amount
                }, 0),
                })
            }

            console.log(groupofIcomeAndExpense.value)
        };


         const incomeStatementDetail = computed(() => {
         if (groupofIcomeAndExpense.value.length === 0) return []
         allIncomeAndExpenses.value.push({
             name: 'Income',
            //  color: '#002044',
             data: [groupofIcomeAndExpense.value[0].value]
         })

         allIncomeAndExpenses.value.push({
             name: 'Expense',
            //  color: '#002044',
             data: [groupofIcomeAndExpense.value[1].value]
         })
         console.log(allIncomeAndExpenses.value)
         return allIncomeAndExpenses.value
     })
/*End of Chart Area */
    let groupedIncomeItemToDisplay = ref([])
    const churchIncomes = (array, key) => {
            let result = array.reduce((result, currentValue) => {
                // If an array already present for key, push it to the array. Else create an array and push the object
                (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
                );
                // console.log(result, currentValue, key)
                // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate

                return result;
            }, {}); // empty object is the initial value for result object
            console.log(result)
             groupedIncomeStatements.value = []
            for (const prop in result) {
                console.log(prop, result[prop])
                groupedIncomeStatements.value.push({
                name: prop,
                value: result[prop]
                })
            }
            // console.log(groupedIncomeStatements.value)
            // console.log(groupedIncomeStatements.value.[1])

             groupedIncomeItemToDisplay.value = groupedIncomeStatements.value[0].value

            // console.log(groupedIncomeItemToDisplay.value, "💐💐")
        };




    const churchExpense = (array, key) => {
            let result = array.reduce((result, currentValue) => {
                (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
                );
                return result;
            }, {});
            console.log(result)
             groupedExpenseStatements.value = []
            for (const prop in result) {
                console.log(prop, result[prop])
                groupedExpenseStatements.value.push({
                name: prop,
                value: result[prop]
                })
            }
            // console.log(groupedExpenseStatements.value)
            // console.log(groupedExpenseStatements.value.[1])

            groupedExpenseItemToDisplay.value = groupedExpenseStatements.value[1].value

            // console.log(groupedExpenseItemToDisplay.value, "💐💐")
        };

        const totalExpense = computed (() => {
                if(groupedExpenseItemToDisplay.value.length === 0) return []
                return groupedExpenseItemToDisplay.value.reduce((acc, cur) => {
                  return acc + cur.amount
                }, 0)
        })
        // console.log(totalExpense.value, "🥁🥁")


     const total = (arr) => {
      console.log(arr, "kgkfuvygu");
          if(!arr || arr.length === 0) return 0
          return arr.reduce((acc, cur) => {
        return acc + cur.amount
      }, 0)
    }

    const fundSum = computed(() => {
      if (incomeStatement.value.length === 0) return 0
      return incomeStatement.value.reduce((a, b) => {
          return a + b.amount
        }, 0)
    })

     const formatDate = (activityDate) => {
      return dateFormatter.monthDayYear(activityDate);
    };



    return {
      groupAccountCategoery,
      total,
      fundSum,
      Calendar,
      startDate,
      endDate,
      incomeStatement,
      generateReport,
      formatDate,
      groupedIncomeStatements,
      groupedExpenseStatements,
      churchIncomes,
      churchExpense,
      totalExpense,
      groupedIncomeItemToDisplay,
      groupedExpenseItemToDisplay,
      chartForIcomeAndExpense,
      groupofIcomeAndExpense,
      pieChart,
      incomeStatementDetail,
      incomeStatementData,
      printJS,
       showExport,
      fileName,
      bookTypeList,
      selectedFileType,
      downloadFile,
      fundType,
      funds,
      groupedFundType,
      // incomeAndExpenseChart,
      // groupedExpenseAndIncomeStatements
    };
  },
};
</script>

<style scoped>
/* .default-btn {
  font-weight: 800;
  font-size: 1rem;
  white-space: initial;
  border-radius: 3rem;
  border: 1px solid #136acd;
  padding: 0.5rem 1.25rem;
  color: #136acd;
  width: auto;
  outline: transparent !important;
  max-height: 2.5rem;
  background: #fff;
  min-width: 7.6rem;
} */

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
  overflow-y: scroll;
}

.answer{
  font-weight: bolder;
   color: #000;

}

.answer-row{
  background-color: #ebeff4;
}

.answer-row:hover{
  background-color:none;
}

.move-enter-active {
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

}

/* .fade-enter-active {
  animation: fade-in .5s;
}
.fade-leave-active {
  animation: fade-in .5s reverse;
}
@keyframes fade-in {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }

} */
</style>