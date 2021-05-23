<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-5">
        <h2 class="font-weight-bold page-hder">New Contribution and Report</h2>
      </div>
      <div class="col-md-7 d-sm-flex justify-content-md-end">
        <a class="def-btn mr-3 px-md-4 my-sm-1"
          >More Actions <i class="fad fa-caret-circle-down"></i
        ></a>
        <router-link :to="{ name: 'AddOffering', path: '/tenant/addoffering' }">
          <a class="def-btn px-sm-2 px-lg-4 my-sm-1">Create another report</a>
        </router-link>
      </div>
      <Toast />
    </div>
    <hr class="mb-4" />
  </div>

  <div class="container" style="width: 80%">
    <div class="row mx-1 mb-4 mt-3">
      <div class="col-md-2 pl-0">
        <span class="theader mb-1">Status</span>
        <div class="my-3">
          <span class="draft">unsent</span>
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
          <span class="date">22/11/2020</span>
        </div>
      </div>
    </div>

    <div class="row mx-1 mb-5">
      <div class="col-md-12">
        Unapproved
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
              <div
                class="col-md-6 d-sm-flex justify-content-end"
                v-if="!reportApproved"
              >
                <a class="def-btn approve-btn mr-4" @click="toggleReportState"
                  >Approve draft</a
                >
                <a class="def-btn edit-btn">Edit draft</a>
              </div>
            </div>
          </div>
        </div>

        Approved
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
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-6">
                        <a
                          class="def-btn approve-btn"
                          data-toggle="modal"
                          data-target="#sendReport"
                          :class="{ 'resend-btn': markedAsSent }"
                        >
                          sendBtnText
                        </a>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div
                            class="modal fade"
                            id="sendReport"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                            :show="true"
                          >
                            <div class="modal-dialog modal-lg">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title font-weight-bold"
                                    id="sendReport"
                                  >
                                    Send this report
                                  </h5>
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div
                                  class="modal-body pt-0 px-0"
                                  :data-dismiss="btnState"
                                >
                                  <!-- <ReportModal :eventName="eventDataResponse.name"/> -->
                                  <ReportModal
                                    :eventName="
                                      stats.activityToday
                                        ? stats.activityToday.name
                                        : ''
                                    "
                                    @sendreport="sendReport"
                                    :stats="stats"
                                  />
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

                      <div class="col-6">
                        <a class="def-btn edit-btn">Get share link</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 offset-md-1" style="">
                    <span class="mr-2">or</span>
                    <a
                      style="color: #136acd; cursor: pointer"
                      @click="markAsSent"
                      >mark as sent</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid bottom-section px-0">
      <div class="row mx-0" ref="topmost">
        <div class="col-md-8 dark-red-section pl-5">
          <h2 class="evt-report">Contribution Report</h2>
        </div>

        <div
          class="col-md-4 d-flex flex-column light-red-section pr-5 text-center"
        >
          <span>
            <span>Total Offering: </span> <br />
            <span class="recieve">
              {{
                contributionReport.length > 0
                  ? contributionReport.reduce((a, b) => {
                      return {
                        amount: parseInt(a.amount) + parseInt(b.amount),
                      };
                    }).amount
                  : 0
              }}
            </span>
          </span>
        </div>

        <!-- <div class="col-md-4 d-flex flex-column light-red-section pr-5">
            <span>
              <span>Total Attendance: </span>
              <span>{{ stats.todayAttendance }}</span>
            </span>
            <span>
              <span>Total Offering: </span>
              <span>{{ stats.todayOffering }}</span>
            </span>
          </div> -->
      </div>

      <div class="row pt-5 px-5" ref="middle">
        <div class="col-md-8">
          <span class="evt-label grey-text">Event Name</span>
          <h2 class="font-weight-bold mb-3" style="font-size: 25px">
            Sunday Service
          </h2>
        </div>
        <div class="col-md-4">
          <span class="evt-date text-danger">22nd March, 2020</span>
        </div>
        <!-- <div class="col-md-5 pl-0">
          <div class="row">
            <div class="col-md-6 d-md-flex justify-content-end">
              <span class="bold-700">Preacher: </span>
            </div>
            <div class="col-md-6 pl-md-0">
              <span> eventDataResponse.preacher </span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-md-flex justify-content-end">
              <span class="bold-700">Topic: </span>
            </div>
            <div class="col-md-6 pl-md-0">
              <span>He cannot fail</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-md-flex justify-content-end">
              <span class="bold-700">First timers: </span>
            </div>
            <div class="col-md-6 pl-md-0">
              <span>20</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-md-flex justify-content-end">
              <span class="bold-700">New converts: </span>
            </div>
            <div class="col-md-6 pl-md-0">
              <span>15</span>
            </div>
          </div>
        </div> -->
      </div>

      <div class="row mb-3" ref="bottom">
        <div class="col-md-12">
          <!-- <div class="row px-5">
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
        </div> -->
          <!-- <div class="row">
          <div class="col-sm-12">
            <hr class="hr" />
          </div>
        </div> -->
          <!-- <div class="row px-5">
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
        </div> -->
          <!-- <div class="row">
          <div class="col-sm-12">
            <hr class="hr-dark" />
          </div>
        </div> -->
          <!-- <div class="row px-5">
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
        </div> -->
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-md-12">
          <div class="row mb-4">
            <div class="col-md-12">
              <span class="attendance-header">Contribution</span>
            </div>
          </div>
          <div class="row px-5">
            <div class="col-md-12">
              <div class="row">
                <div class="col-sm-3">
                  <span class="bold-700">Contribution Item</span>
                </div>
                <div class="col-sm-3">
                  <span class="bold-700">Channel</span>
                </div>
                <div class="col-sm-3">
                  <span class="bold-700">Amount</span>
                </div>

                <div class="col-sm-3 text-sm-center">
                  <span class="bold-700 fs-1 fw-bolder">Total</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <hr class="hr-dark" />
            </div>
          </div>
          <div
            class="row"
            v-for="(item, index) in contributionReport"
            :key="index"
          >
            <div class="col-md-12 py-2">
              <div class="row px-5">
                <div class="col-sm-12">
                  <div class="row">
                    <div class="col-sm-3">
                      <span class="bold-400">{{ item.contribution.name }}</span>
                    </div>
                    <div class="col-sm-3">
                      <span class="bold-400">{{ item.paymentChannel }}</span>
                    </div>
                    <div class="col-sm-3">
                      <span class="bold-400">{{ item.amount }}</span>
                    </div>
                    <div class="col-sm-3 text-sm-center">
                      <span class="bold-400">{{ item.amount }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="row" v-if="index !== eventData.offerings.length - 1">
                <div class="col-sm-12 pt-2">
                  <hr class="hr" />
                </div>
              </div> -->
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <hr class="hr-dark" v-if="contributionReport.length > 0" />
            </div>
          </div>
          <div class="row px-5" v-if="contributionReport.length > 0">
            <div class="col-sm-12">
              <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-3"></div>
                <div class="col-sm-3 text-sm-right">
                  <span class="bold-700">Total</span>
                </div>
                <div class="col-sm-3 text-sm-center">
                  <span class="bold-700">{{
                    contributionReport.reduce((a, b) => {
                      return { amount: a.amount + b.amount };
                    }).amount
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="stats">
          <EventReportStats />
      </div> -->
      <!-- <div class="row">
        <div class="col-md-12">
          <div class="pg-content">
            <h4 class="analytics min">Ministry Performance</h4>

            <div class="analytics-container first-con">
              <div class="ana-group">
                <div class="ana-header">
                  
 
                </div>
                <div class="ana-items">
                 
                  <div>
                      <h5>
                        <span class="today-text">Today </span>
                        <span class="versus"> vs Lastweek</span>
                    </h5>
                      <div class="ana-item mt-5">
                    <div class="ana-item-text">
                      <p class="ana-item-header">Offering</p>
                      <p class="ana-item-percentage">
                 
                      </p>
                      <p>
                        <span class="ana-item-value">
                          20
                        </span>
                        vs
                        <span class="ana-item-value">
                          32
                        </span>
                      </p>
                    </div>
                    <div class="ana-item-icon">
                      <div class="item-image">
                        <div >
    
                          <img
                            src="../../../assets/dashboardlinks/negative-icon.svg"
                            alt=""
                          />
                        </div>
                  
                      </div>
                    </div>
                  </div>
                  </div>

                  <div>
                       <h5>
                        <span class="today-text">Today </span>
                        <span class="versus"> vs Same time last month</span>
                    </h5>
                      <div class="ana-item mt-5">
                    <div class="ana-item-text">
                      <p class="ana-item-header">Offering</p>
                      <p class="ana-item-percentage">
                   
                      </p>
                      <p>
                        <span class="ana-item-value">
                          12
                        </span>
                        vs
                        <span class="ana-item-value">
                         56
                        </span>
                      </p>
                    </div>
                    <div class="ana-item-icon">
                      <div class="item-image">
                        <div
                          
                        >
  
                          <img
                            src="../../../assets/dashboardlinks/negative-icon.svg"
                            alt=""
                          />
                        </div>
                                            </div>
                    </div>
                  </div>
                  </div>
                  
                  <div>
                      <h5>
                        <span class="today-text">Today </span>
                        <span class="versus"> vs Same time last year</span>
                    </h5>
                      <div class="ana-item mt-5">
                    <div class="ana-item-text">
                      <p class="ana-item-header">Offering</p>
                      <p class="ana-item-percentage">
                  32
                      </p>
                      <p>
                        <span class="ana-item-value">
                          65
                        </span>
                        vs
                        <span class="ana-item-value">
                          32
                        </span>
                      </p>
                    </div>
                    <div class="ana-item-icon">
                      <div class="item-image">
                        <div >
             
                          <img
                            src="../../../assets/dashboardlinks/negative-icon.svg"
                            alt=""
                          />
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  </div>


                </div>
                <hr class="hr" />
              </div>
            </div>
           

          <div class="area-charts analytics-container mb-5">
            
              <div class="area-chart mt-5">
                <ReportAreaChart
                  elemId="chart"
                  domId="areaChart3"
                  title="OFFERING"
                  subtitle="This Month"
                  lineColor="#1F78B4"
                />
              </div>
            </div> 
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import ReportAreaChart from "@/components/charts/AreaChart.vue";
import eventsService from "../../../services/events/eventsservice";
// // import { useStore } from 'vuex'
// import { useRoute } from 'vue-router'
// import axios from "@/gateway/backendapi";
export default {
  // components: { ReportAreaChart },
  setup() {
    const reportApproved = ref(false);
    const contributionReport = ref([]);

    const toggleReportState = () => {
      reportApproved.value = !reportApproved.value;
      status.value = "Unsent";
    };

    const getContributionReport = async () => {
      contributionReport.value = JSON.parse(
        localStorage.getItem("contriTransact")
      );
      console.log(contributionReport.value);

      try {
        await eventsService
          .getEventsByActivity(contributionReport.value[0].activityID)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    };
    getContributionReport();
    return {
      reportApproved,
      toggleReportState,
      contributionReport,
    };
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

.def-btn {
  height: 40px;
  border-radius: 22px;
  padding: 8px 10px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dde2e6;
}

.def-btn:hover {
  cursor: pointer;
}

@media screen and (max-width: 1000px) {
  .container {
    width: 100% !important;
  }

  .def-btn {
    max-width: 280px;
  }
}

.unapproved {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 15px #00000029;
  border: 1px solid #dde2e6;
  border-radius: 5px;
}

.info-div {
  background: #f9f8db;
  border: 1px solid #dde2e6;
  border-radius: 5px 5px 0px 0px;
  text-align: center;
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

.edit-btn {
  border: 1px solid #dde2e6;
}

.bottom-section {
  box-shadow: 0px 3px 10px #00000029;
  border: 1px solid #dde2e6;
  border-radius: 5px;
}

.dark-red-section {
  /* background: #980404; */
  background: #ff0000b5;
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
  /* background: #ff0000b5; */
  background: #980404;
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

.evt-report {
  font-size: 25px;
}

.recieve {
  font-size: 22px;
}

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

.analytics-container {
  /* padding: 0 24px 24px 24px; */
  width: 90%;
  margin: auto;
}

.analytics.min {
  width: 230px;
  font-size: 17px;
}

.ana-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 24px;
}

.ana-item {
  width: 200px;
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

.ana-items h5 {
  font-size: 16px;
}

.versus {
  color: #1c252c;
  font-weight: 700;
}

.bold-400 {
  font-weight: 400;
}

.bold-700 {
  font-weight: 700;
}

.hr-dark {
  border: 1px solid #000;
}

.approve-btn {
  background: #136acd;
  color: white;
}
</style>
