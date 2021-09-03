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
          <h3 class="heading-text ml-2">Birthday Report</h3>
        </div>

        <div class="centered-items">
          <button class="default-btn font-weight-normal">
            Export &nbsp; &nbsp; <i class="pi pi-angle-down"></i>
          </button>
        </div>
      </div>
    </div>
    <!--end of header area -->

    <!-- date area -->
    <div class="container-fluid my-3 px-0 bg-area">
      <div
        style="padding: 0.2rem 0 1.2rem 0"
        class="row d-flex flex-row justify-content-center align-items-center"
      >
        <div class="col-md-2">
          <h4 class="small font-weight-bold ml-2">Date Range</h4>
        </div>

        <div class="col-md-7 d-sm-flex">
          <div class="p-field p-col-12 p-md-4 mt-1">
            <!-- <label for="icon">Start Date</label> -->
            <Calendar id="icon" v-model="startDate" :showIcon="true" />
          </div>
          <div class="p-field p-col-12 p-md-4 my-1">
            <!-- <label for="icon">End Date</label> -->
            <Calendar id="endDate" v-model="endDate" :showIcon="true" />
          </div>
        </div>

        <div class="col-md-2 d-sm-flex justify-content-end align-items-center">
          <button
            class="default-btn generate-report c-pointer font-weight-normal"
            @click="getBirthdayReport"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
    <!--end of date area -->
    <section>
      <!-- chart area -->
      <div class="chart">
        <div style="width: 45%" class="ml-md-4 chart1">
          <ByGenderChart
            domId="chart"
            title="By Gender"
            distance="5"
            :titleMargin="10"
          />
        </div>
      </div>
      <!--end of chart area -->
    </section>

    <section>
      <!-- table header -->
      <div class="container-fluid table-main px-0 remove-styles2 remove-border mt-5 scroll-table" >
        <table class="table remove-styles mt-0 table-hover table-header-area">
          <thead class="table-header-area-main">
            <tr
              class="small-text text-capitalize text-nowrap"
              style="border-bottom: 0"
            >
              <th scope="col">Name</th>
              <th scope="col">Birthday</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Marital Status</th>
              <th scope="col">Age Group</th>
              <th scope="col">Membership</th>
              <th scope="col">Home Address</th>
            </tr>
          </thead>
          <tbody class="font-weight-normal text-nowrap">
            <tr v-for="(item, index) in birthdays" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.birthDay }}</td>
              <td>{{ item.mobilePhone }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.maritalStatus }}</td>
              <td>{{ item.ageGroup}}</td>
              <td>{{ item.membership }}</td>
              <td>{{ item.homeAddress }}</td>
            </tr>
          </tbody>
        </table>
        <div class="table-foot d-flex justify-content-end mt-n3">
          <PaginationButtons />
        </div>
      </div>
      <!--end table header -->
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import Calendar from "primevue/calendar";
import ByGenderChart from "@/components/charts/PieChart.vue";
import PaginationButtons from "../../../components/pagination/PaginationButtons";
import axios from "@/gateway/backendapi";

export default {
  components: {
    Calendar,
    ByGenderChart,
    PaginationButtons,
  },
  setup() {
    const startDate = ref();
    const endDate = ref("");
    const birthdays = ref("")
    const membersInChurch = ref([]);
    const allMembersInChurch = () => {
      axios
        .get(`/api/People/GetMembershipSummary`)
        .then((res) => {
          console.log(res);
          membersInChurch.value = res.data;
          console.log(membersInChurch.value, "✌️✌️");
        })
        .catch((err) => {
          console.log(err);
        });
    };


    const getBirthdayReport = async() => {
      let start = new Date(startDate.value).toLocaleDateString()
      let end = new Date(endDate.value).toLocaleDateString()
      try {
        let data = await axios.get(`/api/Reports/people/getBirthdaysReport?startdate=${start}&enddate=${end}`)
        console.log(data)
        birthdays.value = data.data
      }
      catch (err) {
        console.log(err)
      }
    }

    return {
      Calendar,
      startDate,
      endDate,
      birthdays,
      membersInChurch,
      allMembersInChurch,
      getBirthdayReport
    };
  },
};
</script>

<style scoped>
.default-btn {
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
}

.generate-report {
  font-size: 1rem;
  color: #fff;
  background-color: #136acd;
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

.scroll-table {
    overflow-x: scroll;
}
</style>