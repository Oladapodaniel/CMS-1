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

         <div
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
              </div>

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
                    <Calendar class="w-100" id="icon" v-model="startDate" :showIcon="true" />
                  </div>
              </div>
              <div class="col-md-4 col-sm-12 pr-md-0">
                  <div class="p-field p-col-12 pt-md-2">
                    <div>
                      <label for="icon" class="mb-0 font-weight-bold">End Date</label>
                    </div>
                    <Calendar class="w-100" id="icon" v-model="EndDate" :showIcon="true" />
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
          <table class="table remove-styles mt-0 table-hover table-header-area">
            <thead class="table-header-area-main">
              <tr
              class="small-text text-capitalize text-nowrap"
                style="border-bottom: 0"
              >
                <th scope="col">Fund</th>
                <th scope="col">Account Name</th>
                <th scope="col">Reference Number</th>
                <th scope="col">Description</th>
                <th scope="col">Debit</th>
                <th scope="col">Credit</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody class="font-weight-normal text-nowrap">
              <tr v-for="(transaction, index) in accountTransaction"
              :key="index">
                <td>{{ transaction.fund }}</td>
                <td>{{ transaction.accountName }}</td>
                <td>{{ transaction.refNumber }}</td>
                <td>{{ transaction.description }}</td>
                <td>{{ transaction.debit }}</td>
                <td>{{ transaction.credit }}</td>
                <td>{{ formatDate(transaction.date) }}</td>
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
import { ref } from "vue";
import Calendar from "primevue/calendar";
import ByGenderChart from "@/components/charts/PieChart.vue";
// import PaginationButtons from "../../../components/pagination/PaginationButtons";
import axios from "@/gateway/backendapi";
import dateFormatter from  "../../../services/dates/dateformatter";
import printJS from "print-js";
import exportService from "../../../services/exportFile/exportservice";
import Listbox from 'primevue/listbox';

export default {
  components: {
    Calendar,
    ByGenderChart,
    Listbox,
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
    const generateReport = () => {
      axios
        .get(`/api/Reports/financials/getAccountTransactionsReport?startDate=${new Date(startDate.value).toLocaleDateString()}&endDate=${new Date(endDate.value).toLocaleDateString()}`)
        .then((res) => {

          console.log(res, "🎄🎄🎄");
          accountTransaction.value = res.data;
          console.log(accountTransaction.value, "✌️✌️");
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
  alert(selectedFileType.value)
  console.log(fileToExport.value, "🎁🎁")

      exportService.downLoadExcel(
        selectedFileType.value.name, document.getElementById("element-to-print"), fileName.value, fileHeaderToExport.value,  fileToExport.value,);
    };
    /* End Code For Exporting File */

     const formatDate = (activityDate) => {
      return dateFormatter.monthDayYear(activityDate);
    };

    // onMounted(() => {
    //   firstTimerChart.value = [{name: "Dapo", value: 77}]
    // })


    return {
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
</style>