<template>
  <div class="container-fluid">

    <div class="row mt-4">
        <div class="col-md-3">
            <h6 class="font-weight-bold">Status</h6>
            <p><span class="small-text status-p font-weight-700">
                {{ reportData.status }}
            </span></p>
        </div>
        <div class="col-md-7">
            <h6 class="font-weight-bold">Event</h6>
            <p class="small-text font-weight-bold d-flex align-items-center" style="color: #136ACD;">{{ reportData.eventName }} <i class="pi pi-info-circle ml-2"></i></p>
        </div>
        <div class="col-md-2">
            <h6 class="font-weight-bold">Date</h6>
            <p class="small-text">{{ formatDate(reportData.eventDate) }}</p>
        </div>
    </div>

    <div class="row mt-3 mb-4 stats-box d-flex align-items-center">
        <div class="col-md-3">
            <h2 class="font-weight-600">{{ totalAttendance }}</h2>
            <p class="small-text font-weight-700" style="color: #136ACD;">
                People registered for the event
            </p>
        </div>
        <div class="col-md-3">
            <h2 class="font-weight-700">{{ attendees }}</h2>
            <p class="small-text font-weight-700" style="color: #136ACD;">Attendees</p>
        </div>
        <div class="col-md-2">
            <h2>{{ absentees}}</h2>
            <p class="small-text font-weight-700" style="color: #136ACD;">Absentees</p>
        </div>
        <div class="col-md-4">
           <ReportChart domId="reportChart" title="" height="180" :summary="chartData" />
        </div>
    </div>

    <div class="row over-con">
      <div class="col-md-12 py-4">
        <div class="row">
          <div class="col-md-7">
            <p class="search-span px-2">
              <i class="pi pi-search p-2" style="height: 30px; width: 30px"></i>
              <input
                type="text"
                class="search-control"
                placeholder="Type name to filter list..."
              />
            </p>
          </div>
          <div class="col-md-4 d-md-flex justify-content-end d-none"></div>
        </div>

        <div class="row mt-2 main-th font-weight-700 py-2 grey-rounded-bg">
          <div class="col-md-4">Name</div>
          <div class="col-md-4">Address</div>
          <div class="col-md-2">Phone</div>
          <div class="col-md-2">Check-in</div>
        </div>

        <div class="row py-2 tb-row small-text" v-for="(person, index) in reportData.peopoleAttendancesDTOs" :key="index">
          <div class="col-md-4">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700">Name</span>
              <span>{{ person.name }}</span>
            </span>
          </div>
          <div class="col-md-4">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700">Address</span>
              <span>{{ person.address }}</span>
            </span>
          </div>
          <div class="col-md-2">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700"
                >Phone Number</span
              >
              <span>{{ person.phone }}</span>
            </span>
          </div>
          <div class="col-md-2">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700">Check-in Option</span>
              <span>
                {{ person.checkedinOption }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import ReportChart from "../../../components/charts/SecondReportPie";
import attendanceservice from '../../../services/attendance/attendanceservice';
import { useRoute } from "vue-router";
import dateFormatter from '../../../services/dates/dateformatter';

export default {
    components: { ReportChart, },

    setup() {
        const route = useRoute();
        const data = ref([]);

        const reportData = ref({ });

        const getReportData = async () => {
          try {
            const response = await attendanceservice.getReport(route.params.id);
            console.log(response, "REPORT");
            reportData.value = response;
          } catch (error) {
            console.log(error);
          }
        }

        const formatDate = (date) => {
          return dateFormatter.normalDate(date);
        }

        const absentees = computed(() => {
          if (reportData.value.status && reportData.value.status.toLowerCase() !== "ended") return 0;
          if (!reportData.value || !reportData.value.peopoleAttendancesDTOs || reportData.value.peopoleAttendancesDTOs.length === 0) return 0;
          return reportData.value.peopoleAttendancesDTOs.filter(i => !i.isPresent).length;
        })

        const attendees = computed(() => {
          if (reportData.value.status && reportData.value.status.toLowerCase() !== "ended") return 0;
          if (!reportData.value || !reportData.value.peopoleAttendancesDTOs || reportData.value.peopoleAttendancesDTOs.length === 0) return 0;
          return reportData.value.peopoleAttendancesDTOs.filter(i => i.isPresent).length;
        })

        const totalAttendance = computed(() => {
          if (!reportData.value || !reportData.value.peopoleAttendancesDTOs || reportData.value.peopoleAttendancesDTOs.length === 0) return 0;
          return reportData.value.peopoleAttendancesDTOs.length;
        })

        const chartData = computed(() => {
          return [
              {
                name: "Present",
                y: Math.floor(( attendees.value / totalAttendance.value ) * 100),
              },
              {
                name: "Absent",
                y: Math.floor(( absentees.value / totalAttendance.value ) * 100),
              },
            ]
        })

        getReportData();

        onMounted(() => {
            // data.value = [
            //   {
            //     name: "Present",
            //     y: Math.floor(( attendees.value / totalAttendance.value ) * 100),
            //   },
            //   {
            //     name: "Absent",
            //     y: Math.floor(( absentees.value / totalAttendance.value ) * 100),
            //   },
            // ]
        })

        return {
            data,
            reportData,
            formatDate,
            totalAttendance,
            absentees,
            attendees,
            chartData,
        }
    }
};
</script>

<style scoped>
* {
  color: #02172e;
  /* font-family: Nunito Sans !important; */
}

.hide {
  display: none !important;
}

@media screen and (max-width: 767px) {
  .main-th {
    display: none;
  }

  .hide {
    display: flex !important;
  }
}

.search-control {
  width: calc(100% - 30px);
  padding: 0.38rem;
  border: none;
  background: transparent;
  outline: transparent;
}

.search-span {
  background: #f5f8f9;
  border-radius: 200px;
  width: 100%;
}

.kiosk-mode {
  background: #dde2e6;
  border-radius: 20px;
  border: transparent;
}

.main-th {
  background: #f5f8f9;
}

.tb-row {
  border-bottom: 1px solid #4762f01f;
}

.over-con {
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.05)!important;
}

.stats-box {
  border: 1px solid #4762f01f;
}

.kiosk-th-size {
    font-size: 20px;
}

.kiosk-tb-size {
    font-size: 18px;
}

.status-p {
    padding: 8px 20px;
    background: #a5682a69;
    border-radius: 22px 0 0 22px;
}
</style>