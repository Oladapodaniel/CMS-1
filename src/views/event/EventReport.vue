<template>
  <div class="container" style="width:80%">
      <div class="row mx-1 mb-4 mt-3">
          <div class="col-md-2">
              <span class="theader mb-1">Status</span>
              <div class="my-3">
                  <span class="draft">Draft</span>
              </div>
          </div>

          <div class="col-md-7">
              <span class="theader">Event</span>
              <div class="my-3">
                  <span class="evt-name">Grace and Power <i class="fa fa-info-circle 1x"></i></span>
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
                      <div class="row">
                          <div class="col-md-12 py-3 info-div">
                              <span class="px-2"><i class="fa fa-info-circle"></i></span>
                              <span class="font-weight-bold">This is a DRAFT event. You can take further actions once you approve it.</span>
                              <span class="px-2"><span style="color: #136ACD">Learn more</span> <i class="fa fa-external-link-alt"></i></span>
                          </div>
                      </div>
                      <div class="row my-3">
                          <div class="col-md-1 d-flex align-items-center">
                              <span class="file-icon"><i class="fa fa-book" style="color: #136ACD"></i></span>
                          </div>
                          <div class="col-md-5">
                              <span class="grey-text">Create </span>
                              <p><span class="dark-text">Created:</span> <span class="grey-text">just a moment ago</span></p>
                          </div>
                          <div class="col-md-6 d-sm-flex justify-content-end">
                              <a class="def-btn approve-btn mr-4">Approve draft</a>
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
                              <span class="file-icon"><i class="fa fa-location-arrow" style="color: #136ACD"></i></span>
                          </div>
                          <div class="col-md-5 grey-text">
                              <span class="grey-text">Send </span>
                              <p><span class="grey-text">Last sent:</span> <span class="grey-text">just a moment ago</span></p>
                          </div>
                          <div class="col-md-6">
                              <div class="row">
                                  <div class="col-md-12 d-sm-flex justify-content-end">
                                      <a class="def-btn approve-btn mr-4">Send Report</a>
                                        <a class="def-btn edit-btn">Get share link</a>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-12 text-sm-center">
                                      <span class="mr-2">or</span>
                                      <a style="color: #136ACD">mark as sent</a>
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
              <h2>Event and Report</h2>
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
              <h2 class="font-weight-bold mb-3">Grace and Power Convention</h2>
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
                      <hr class="hr-dark">
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
                      <hr class="hr">
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
                      <hr class="hr">
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
                      <hr class="hr-dark">
                  </div>
              </div>
              <div class="row px-5">
                  <div class="col-sm-12">
                      <div class="row">
                          <div class="col-sm-4">
                          </div>
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
                      <hr class="hr-dark">
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
                      <hr class="hr">
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
                      <hr class="hr">
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
                      <hr class="hr-dark">
                  </div>
              </div>
              <div class="row px-5">
                  <div class="col-sm-12">
                      <div class="row">
                          <div class="col-sm-3">
                          </div>
                          <div class="col-sm-3">
                          </div>
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
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">Attendance</p>
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
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">Attendance</p>
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
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">Attendance</p>
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
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">Attendance</p>
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
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">Attendance</p>
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
                <div class="ana-item">
                  <div class="ana-item-text">
                    <p class="ana-item-header">Attendance</p>
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
              <ReportAreaChart elemId="chart" domId="areaChart1" />
            </div>
            <div class="area-chart mt-5">
              <ReportAreaChart elemId="chart" domId="areaChart2" />
            </div>
            <div class="area-chart mt-5">
              <ReportAreaChart elemId="chart" domId="areaChart3" />
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
// import EventReportStats from "@/components/eventreports/EventReportStats";

export default {
  components: { ReportAreaChart },
  setup() {
    
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

/* Top */
.theader {
    font-size: 14px;
    font-weight: 800;
    color: #0F0220;;
}

.draft {
    border: 0.5px solid #252A2F;
    padding: 10px;
    border-radius: 22px 0 0 22px;
    background: grey;
}

.evt-name {
    color: #136ACD;
    font-weight: 800;
    font-size: 22px;
}

.date {
    font-size: 20px;
    font-weight: 700;
    color: #1D262D;
}

.info-div   {
    background: #F9F8DB;
    border: 1px solid #DDE2E6;
    border-radius: 5px 5px 0px 0px;
    text-align: center;
}

.unapproved {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 15px #00000029;
    border: 1px solid #DDE2E6;
    border-radius: 5px;
}

.file-icon {
    color: #136ACD;
    border: 1px solid #136ACD;
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
    color: #8296AE;
}

.dark-text {
    color: #1D262D;
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
}

.approve-btn {
    background: #136ACD;
    color: white;
}

.edit-btn {
    border: 1px solid #DDE2E6;
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

@media screen and (max-width: 1000px) {
    .container {
        width: 100% !important;
    }
}

</style>