<template>
  <div class="container">
      <div class="row mt-4">
          <div class="col-md-6">
              <h2 class="font-weight-bold page-hder">New Event and Report</h2>
          </div>
          <div class="col-md-6 d-sm-flex justify-content-end">
              <a class="def-btn mr-3 px-4">More Actions <i class="fad fa-caret-circle-down"></i></a>
              <a class="def-btn px-4">Create another report</a>
          </div>
      </div>
      <hr class="mb-4">
  </div>
  <div class="container" style="width: 80%">
    <div class="row mx-1 mb-4 mt-3">
      <div class="col-md-2 pl-0">
        <span class="theader mb-1">Status</span>
        <div class="my-3">
          <span class="draft">{{ status }}</span>
        </div>
      </div>

      <div class="col-md-7">
        <span class="theader">Event</span>
        <div class="my-3">
          <span class="evt-name">
            Grace and Power <i class="fa fa-info-circle"></i>
          </span>
        </div>
      </div>

      <div class="col-md-3">
        <span class="theader">Date</span>
        <div class="my-3">
          <span class="date">11/11/2011</span>
        </div>
      </div>
    </div>
    

    <div class="row mx-1 mb-5">
      <div class="col-md-12">
        <!-- Unapproved -->
        <div class="row unapproved">
          <div class="col-md-12">
            <div class="row" v-if="!reportApproved">
              <div class="col-md-12 py-3 info-div">
                <span class="px-2"><i class="fa fa-info-circle"></i></span>
                <span class="font-weight-bold"
                  >This is a DRAFT event. You can take further actions once you
                  approve it.</span
                >
                <span class="px-2"
                  ><span style="color: #136acd">Learn more</span>
                  <i class="fa fa-external-link-alt ml-2"></i
                ></span>
              </div>
            </div>
            <div class="row my-3">
              <div class="col-md-1 d-flex align-items-center">
                <span class="file-icon"
                  ><i class="fa fa-book" style="color: #136acd"></i
                ></span>
              </div>
              <div class="col-md-5">
                <span class="grey-text">Create </span>
                <p>
                  <span class="dark-text">Created: </span>
                  <span class="grey-text"> just a moment ago</span>
                </p>
              </div>
              <div class="col-md-6 d-sm-flex justify-content-end" v-if="!reportApproved">
                <a class="def-btn approve-btn mr-4" @click="toggleReportState">Approve draft</a>
                <a class="def-btn edit-btn">Edit draft</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Approved -->
        <div class="row unapproved mt-4">
          <div class="col-md-12">
            <div class="row my-3">
              <div class="col-md-1 d-flex align-items-center">
                <span class="file-icon"
                  ><i class="fa fa-location-arrow" style="color: #136acd"></i
                ></span>
              </div>
              <div class="col-md-5 grey-text">
                <span class="grey-text">Send </span>
                <p>
                  <span class="grey-text">Last sent: </span>
                  <span class="grey-text"> {{ lastSent }}</span>
                </p>
              </div>
              <div class="col-md-6" v-if="reportApproved">
                <div class="row">
                  <div class="col-md-12 d-sm-flex justify-content-end">
                    <a class="def-btn approve-btn mr-4" data-toggle="modal" data-target="#sendReport"
                        :class="{ 'resend-btn': markedAsSent}"
                    >
                        {{ sendBtnText }}
                    </a>
                    <a class="def-btn edit-btn">Get share link</a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 ml-sm-5">
                    <span class="mr-2">or</span>
                    <a style="color: #136acd;cursor:pointer" @click="markAsSent">mark as sent</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mx-1">
      <div class="col-md-8 dark-red-section pl-5">
        <h2 class="evt-report">Event and Report</h2>
      </div>
      <div class="col-md-4 d-flex flex-column light-red-section pr-5">
        <span>
          <span>Total Attendance: </span>
          <span>2666</span>
        </span>
        <span>
          <span>Total Offering: </span>
          <span>2666</span>
        </span>
      </div>
    </div>

    <div class="row py-5 px-5">
      <div class="col-md-7">
        <span class="evt-label grey-text">Event Name</span>
        <h2 class="font-weight-bold mb-3" style="font-size: 25px">
          Grace and Power Convention
        </h2>
        <span class="evt-date text-danger">20th October 2020.</span>
      </div>
      <div class="col-md-5">
        <div class="row">
          <div class="col-md-6 d-md-flex justify-content-end">
            <span class="bold-700">Preacher: </span>
          </div>
          <div class="col-md-6 pl-md-0">
            <span>Pastor OO Aina</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-md-flex justify-content-end">
            <span class="bold-700">Topic: </span>
          </div>
          <div class="col-md-6 pl-md-0">
            <span>Faith</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-md-flex justify-content-end">
            <span class="bold-700">First timers: </span>
          </div>
          <div class="col-md-6 pl-md-0">
            <span>12</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-md-flex justify-content-end">
            <span class="bold-700">New converts: </span>
          </div>
          <div class="col-md-6 pl-md-0">
            <span>23</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-md-12">
        <div class="row mb-4">
          <div class="col-md-12">
            <span class="attendance-header">Attendance</span>
          </div>
        </div>
        <div class="row px-5">
          <div class="col-md-12">
            <div class="row">
              <div class="col-sm-4">
                <span class="bold-700">Attendance Item</span>
              </div>
              <div class="col-sm-4">
                <span class="bold-700">Count</span>
              </div>
              <div class="col-sm-4 text-sm-center">
                <span class="bold-700">Total</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <hr class="hr-dark" />
          </div>
        </div>
        <div class="row px-5">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-4">
                <span class="bold-700">Male</span>
              </div>
              <div class="col-sm-4">
                <span class="bold-700">123</span>
              </div>
              <div class="col-sm-4 text-sm-center">
                <span class="bold-700">123</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <hr class="hr" />
          </div>
        </div>
        <div class="row px-5">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-4">
                <span class="bold-700">Female</span>
              </div>
              <div class="col-sm-4">
                <span class="bold-700">344</span>
              </div>
              <div class="col-sm-4 text-sm-center">
                <span class="bold-700">344</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <hr class="hr" />
          </div>
        </div>
        <div class="row px-5">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-4">
                <span class="bold-700">Children</span>
              </div>
              <div class="col-sm-4">
                <span class="bold-700">1222</span>
              </div>
              <div class="col-sm-4 text-sm-center">
                <span class="bold-700">1222</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <hr class="hr-dark" />
          </div>
        </div>
        <div class="row px-5">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-4"></div>
              <div class="col-sm-4 text-sm-right">
                <span class="bold-700">Total</span>
              </div>
              <div class="col-sm-4 text-sm-center">
                <span class="bold-700">1689</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-md-12">
        <div class="row mb-4">
          <div class="col-md-12">
            <span class="attendance-header">Offering</span>
          </div>
        </div>
        <div class="row px-5">
          <div class="col-md-12">
            <div class="row">
              <div class="col-sm-3">
                <span class="bold-700">Offering Item</span>
              </div>
              <div class="col-sm-3">
                <span class="bold-700">Channel</span>
              </div>
              <div class="col-sm-3">
                <span class="bold-700">Amount</span>
              </div>
              <div class="col-sm-3 text-sm-center">
                <span class="bold-700">Total</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <hr class="hr-dark" />
          </div>
        </div>
        <div class="row px-5">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-3">
                <span class="bold-700">Tight</span>
              </div>
              <div class="col-sm-3">
                <span class="bold-700">123</span>
              </div>
              <div class="col-sm-3">
                <span class="bold-700">123</span>
              </div>
              <div class="col-sm-3 text-sm-center">
                <span class="bold-700">123</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <hr class="hr" />
          </div>
        </div>
        <div class="row px-5">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-3">
                <span class="bold-700">Building</span>
              </div>
              <div class="col-sm-3">
                <span class="bold-700">344</span>
              </div>
              <div class="col-sm-3">
                <span class="bold-700">344</span>
              </div>
              <div class="col-sm-3 text-sm-center">
                <span class="bold-700">344</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <hr class="hr" />
          </div>
        </div>
        <div class="row px-5">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-3">
                <span class="bold-700">Hospitality</span>
              </div>
              <div class="col-sm-3">
                <span class="bold-700">1222</span>
              </div>
              <div class="col-sm-3">
                <span class="bold-700">1222</span>
              </div>
              <div class="col-sm-3 text-sm-center">
                <span class="bold-700">1222</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <hr class="hr-dark" />
          </div>
        </div>
        <div class="row px-5">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-3"></div>
              <div class="col-sm-3"></div>
              <div class="col-sm-3 text-sm-right">
                <span class="bold-700">Total</span>
              </div>
              <div class="col-sm-3text-sm-center">
                <span class="bold-700">1689</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="stats">
          <EventReportStats />
      </div> -->
    <div class="row">
      <div class="col-md-12">
        <div class="pg-content">
          <h4 class="analytics">Analytics</h4>

          <div class="analytics-container first-con">
            <div class="ana-group">
              <div class="ana-header">
                <h5>
                  <span class="today-text">Today </span>
                  <span class="versus"> vs Lastweek</span>
                </h5>
                <hr class="hr" />
              </div>
              <div class="ana-items">
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">Attendance</p>
                    <p class="ana-item-percentage">{{ stats.todayVsLastWeekAttendancePercentage }}%</p>
                    <p>
                      <span class="ana-item-value">{{ stats.todayAttendance }}</span> vs
                      <span class="ana-item-value">{{ stats.lastWeekAttendance }}</span>
                    </p>
                  </div>
                  <div class="ana-item-icon">
                    <div class="item-image">
                      <img
                        src="../../assets/dashboardlinks/trend-icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">Offering</p>
                    <p class="ana-item-percentage">{{ stats.todayVsLastWeekAttendancePercentage }}%</p>
                    <p>
                      <span class="ana-item-value">{{ stats.todayOffering }}</span> vs
                      <span class="ana-item-value">{{ stats.lastWeekOffering }}</span>
                    </p>
                  </div>
                  <div class="ana-item-icon">
                    <div class="item-image">
                      <img
                        src="../../assets/dashboardlinks/trend-icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">First timers</p>
                    <p class="ana-item-percentage">10.3%</p>
                    <p>
                      <span class="ana-item-value">10103</span> vs
                      <span class="ana-item-value">123</span>
                    </p>
                  </div>
                  <div class="ana-item-icon">
                    <div class="item-image">
                      <img
                        src="../../assets/dashboardlinks/trend-icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr class="hr" />
            </div>
          </div>
          <div class="analytics-container">
            <div class="ana-group">
              <div class="ana-header">
                <h5>
                  <span class="today-text">Today </span>
                  <span class="versus"> vs Same time last month</span>
                </h5>
                <hr class="hr" />
              </div>
              <div class="ana-items">
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">Attendance</p>
                    <p class="ana-item-percentage">{{ stats.todayVsLastMonthAttendancePercentage }}%</p>
                    <p>
                      <span class="ana-item-value">{{ stats.todayAttendance }}</span> vs
                      <span class="ana-item-value">{{ stats.lastMonthAttendance }}</span>
                    </p>
                  </div>
                  <div class="ana-item-icon">
                    <div class="item-image">
                      <img
                        src="../../assets/dashboardlinks/trend-icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">Offering</p>
                    <p class="ana-item-percentage">{{ stats.todayVsLastMonthOfferingPercentage }}%</p>
                    <p>
                      <span class="ana-item-value">{{ stats.todayOffering }}</span> vs
                      <span class="ana-item-value">{{ stats.lastMonthOffering }}</span>
                    </p>
                  </div>
                  <div class="ana-item-icon">
                    <div class="item-image">
                      <img
                        src="../../assets/dashboardlinks/trend-icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">First timers</p>
                    <p class="ana-item-percentage">10.3%</p>
                    <p>
                      <span class="ana-item-value">10103</span> vs
                      <span class="ana-item-value">123</span>
                    </p>
                  </div>
                  <div class="ana-item-icon">
                    <div class="item-image">
                      <img
                        src="../../assets/dashboardlinks/trend-icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr class="hr" />
            </div>
          </div>
          <div class="analytics-container">
            <div class="ana-group">
              <div class="ana-header">
                <h5>
                  <span class="today-text">Today </span>
                  <span class="versus"> vs Same time last year</span>
                </h5>
                <hr class="hr" />
              </div>
              <div class="ana-items">
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">Attendance</p>
                    <p class="ana-item-percentage">{{ stats.todayVsLastYearAttendancePercentage }}%</p>
                    <p>
                      <span class="ana-item-value">{{ stats.todayAttendance }}</span> vs
                      <span class="ana-item-value">{{ stats.lastYearAttendance }}</span>
                    </p>
                  </div>
                  <div class="ana-item-icon">
                    <div class="item-image">
                      <img
                        src="../../assets/dashboardlinks/trend-icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">Offering</p>
                    <p class="ana-item-percentage">{{ stats.todayVsLastYearOfferingPercentage }}%</p>
                    <p>
                      <span class="ana-item-value">{{ stats.todayOffering }}</span> vs
                      <span class="ana-item-value">{{ stats.lastYearOffering }}</span>
                    </p>
                  </div>
                  <div class="ana-item-icon">
                    <div class="item-image">
                      <img
                        src="../../assets/dashboardlinks/trend-icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">First timers</p>
                    <p class="ana-item-percentage">10.3%</p>
                    <p>
                      <span class="ana-item-value">10103</span> vs
                      <span class="ana-item-value">123</span>
                    </p>
                  </div>
                  <div class="ana-item-icon">
                    <div class="item-image">
                      <img
                        src="../../assets/dashboardlinks/trend-icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr class="hr" />
            </div>
          </div>

          <div class="area-charts analytics-container mb-5">
            <!-- <div id="chart" style="width:50%;height:500px"></div> -->
            <div class="area-chart mt-5">
              <ReportAreaChart
                elemId="chart"
                domId="areaChart1"
                title="OFFERING"
                subtitle="This month"
                lineColor="#50AB00"
              />
            </div>
            <div class="area-chart mt-5">
              <ReportAreaChart
                elemId="chart"
                domId="areaChart2"
                title="ATTENDANCE"
                subtitle="This month"
                lineColor="#1F78B4"
              />
            </div>
            <div class="area-chart mt-5">
              <ReportAreaChart
                elemId="chart"
                domId="areaChart3"
                title="FIRST TIMERS PERFORMANCE"
                lineColor="#1F78B4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div
          class="modal fade"
          id="sendReport"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title font-weight-bold" id="sendReport">Send this report</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body pt-0 px-0">
                  <ReportModal />
              </div>
              <!-- <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { onMounted, ref } from "vue";
// import Highcharts from "highcharts";
import ReportAreaChart from "@/components/charts/AreaChart.vue";
import ReportModal from "@/components/firsttimer/ReportModal.vue";
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from "@/gateway/backendapi";
// import EventReportStats from "@/components/eventreports/EventReportStats";

export default {
  components: { ReportAreaChart, ReportModal },
  setup() {
      const route = useRoute();
      const reportApproved = ref(false);
      const lastSent = ref("just a moment ago");
      const status = ref("Draft");
      const markedAsSent = ref(false);
      const sendBtnText = ref("Send report");

      const toggleReportState = () => {
          reportApproved.value = !reportApproved.value;
          status.value = "Unsent"
      }

      const markAsSent = () => {
          lastSent.value = "Marked as sent today";
          status.value = "Sent";
          markedAsSent.value = true;
          sendBtnText.value = "Resend report";
      }

        const stats = ref({ })
      onMounted(async () => {
          console.log(process.env.VUE_APP_EXCHANGE_API_KEY, "Key")
          const activityId = route.params.id;
          try { 
            const res = await axios.post(`/api/Events/GetAnalysis?activityId=${activityId}`, { name: "gukfeau" });
            console.log(res.data);
            stats.value = res.data;
          } catch(err) {
              console.log(err.response);
          }
      })

      return {
          reportApproved,
          toggleReportState,
          markedAsSent,
          markAsSent,
          status,
          lastSent,
          sendBtnText,
          stats,
      }
  },
};
</script>

<style scoped>
* {
  color: #1c252c;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  font-weight: 700;
}

.page-hder {
    font-size: 28px;
}

/* Top */
.theader {
  font-size: 14px;
  font-weight: 800;
  color: #0f0220;
}

.draft {
  border: 0.5px solid #252a2f;
  padding: 10px;
  border-radius: 22px 0 0 22px;
  background: grey;
}

.evt-name {
  color: #136acd;
  font-weight: 800;
  font-size: 22px;
}

.evt-report {
  font-size: 25px;
}

.date {
  font-size: 20px;
  font-weight: 600;
  color: #1d262d;
}

.info-div {
  background: #f9f8db;
  border: 1px solid #dde2e6;
  border-radius: 5px 5px 0px 0px;
  text-align: center;
}

.unapproved {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 15px #00000029;
  border: 1px solid #dde2e6;
  border-radius: 5px;
}

.file-icon {
  color: #136acd;
  border: 1px solid #136acd;
  padding: 10px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  text-align: center;
  font-size: 20px;
  display: flex;
  align-items: center;
}

.grey-text {
  color: #8296ae;
}

.dark-text {
  color: #1d262d;
  font-weight: 800;
}

.def-btn {
  height: 43px;
  border-radius: 22px;
  padding: 0 24px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #DDE2E6;
}

.def-btn:hover {
    cursor: pointer;
}

.approve-btn {
  background: #136acd;
  color: white;
}

.edit-btn {
  border: 1px solid #dde2e6;
}

.dark-red-section {
  background: #980404;
  color: #fff;
  height: 133px;
  display: flex;
  align-items: center;
  border-radius: 5px 0px 0px 0px;
  height: 133px;
  display: flex;
  align-items: center;
  border-radius: 5px 0px 0px 0px;
}

.light-red-section {
  background: #ff0000b5;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 0px 0px;
}

.dark-red-section h2,
.light-red-section span {
  color: #fff;
  font-weight: 800;
}

.bold-700 {
  font-weight: 700;
}

.hr-dark {
  border: 1px solid #000;
}

/* Analytics */
.analytics,
.attendance-header {
  background: #1c252c;
  color: #fff;
  width: 155px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.first-con {
  margin-top: 50px;
}

.analytics-container {
  /* padding: 0 24px 24px 24px; */
  width: 90%;
  margin: auto;
}

.ana-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 24px;
}

.ana-item {
  width: 215px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 10px #00000029;
  border: 1px solid #dde2e6;
  border-radius: 5px;
  padding: 10px 4px 10px 10px;
  margin: 4px 0;
}

.ana-header {
  margin-bottom: 40px;
}

.ana-item p {
  margin-bottom: 0;
}

.ana-item-header {
  font-size: 14px;
  text-transform: uppercase;
}

.ana-item-percentage {
  color: #1c252c;
  font-weight: bold;
  font-size: 40px;
}

.ana-item-value,
.today-text {
  color: #136acd;
  font-weight: 700;
}

.versus {
  color: #1c252c;
  font-weight: 700;
}

/* .area-charts {
  width: 90%;
  display: flex;
  justify-content: space-between;
} */

.area-chart {
  width: 100%;
  border: 1px solid #ebeff4;
  border-radius: 5px;
}

.modal-lg {
    width: 639px !important;
}

.resend-btn {
    background: transparent !important;
    color: #4D6676 !important;
    border: 1px solid #DDE2E6 !important;
}

@media screen and (max-width: 1000px) {
  .container {
    width: 100% !important;
  }
}
</style>