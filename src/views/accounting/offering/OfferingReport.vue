<template>
    <div class="container">
    <div class="row mt-4">
      <div class="col-md-5">
        <h2 class="font-weight-bold page-hder">New Contribution and Report</h2>
      </div>
      <div class="col-md-7 d-sm-flex justify-content-md-end">
        <!-- <a class="def-btn mr-3 px-md-4 my-sm-1"
          >More Actions <i class="fad fa-caret-circle-down"></i
        ></a> -->
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
        <span class="theader">Hello</span>
        <div class="my-3">
          <span class="evt-name">
            {{ churchName }} 
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
        <div class="row unapproved">
          <div class="col-md-12">
            <div class="row" v-if="!reportApproved">
              <div class="col-md-12 py-3 info-div">
                <span class="px-2"><i class="fa fa-info-circle"></i></span>
                <span class="font-weight-bold"
                  >This is a DRAFT report. You can take further actions once you
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
            <h5 class="modal-title font-weight-bold" id="sendReport">
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
          <div class="modal-body pt-0 px-0" :data-dismiss="btnState">
            <!-- <ReportModal :eventName="eventDataResponse.name"/> -->
            <ReportModal
              :eventName="stats.activityToday ? stats.activityToday.name : ''"
              @sendreport="sendReport"
              @get-church-name="getChurchName"
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
            <span class="recieve"> {{ contributionReport.length > 0 ? contributionReport.reduce((a, b) => {  return { amount: parseInt(a.amount) + parseInt(b.amount) } } ).amount : 0 }} </span>
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
          <h2 class="font-weight-bold mb-3" style="font-size: 25px">
             Contribution Details
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
                  <span class="bold-700">{{ contributionReport.reduce((a, b) => {
                      return { amount: a.amount + b.amount }
                    }).amount }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row email-data" ref="emaildata" v-show="false">
          <table
            align="center"
            style="
              border-collapse: collapse;
              max-width: 800px;
              padding: 0pt 0pt 0pt 0pt;
              box-shadow: 0px 3px 15px #00000029;
              border: 1px solid #dde2e6;
              border-radius: 5px;
            "
          >
            <tbody>
              <tr>
                <td
                  colspan="3"
                  style="
                    width: 337.5pt;
                    padding: 0pt 5.4pt;
                    background: rgb(255, 27, 27);
                    vertical-align: top;
                  "
                >
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span
                      style="
                        color: rgb(255, 255, 255);
                        font-weight: bold;
                        font-size: 16px;
                      "
                      >&nbsp;</span
                    >
                  </p>
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp; &nbsp; &nbsp; &nbsp;</span
                    ><span style="font-weight: bold; font-size: 29px"
                      >&nbsp;</span
                    ><span
                      style="
                        color: rgb(255, 255, 255);
                        font-weight: bold;
                        font-size: 29px;
                      "
                      >Event&nbsp;and&nbsp;Report</span
                    >
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 203.3pt;
                    padding: 0pt 5.4pt;
                    background: rgb(175, 31, 31);
                    vertical-align: top;
                  "
                >
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span
                      style="
                        color: rgb(255, 255, 255);
                        font-weight: bold;
                        font-size: 16px;
                      "
                      >Total&nbsp;Attendance:
                      {{ stats.todayAttendance }}</span
                    >
                  </p>
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span
                      style="
                        color: rgb(255, 255, 255);
                        font-weight: bold;
                        font-size: 16px;
                      "
                      >&nbsp;</span
                    >
                  </p>
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span
                      style="
                        color: rgb(255, 255, 255);
                        font-weight: bold;
                        font-size: 16px;
                      "
                      >Total&nbsp;Offering: {{ stats.todayOffering }}</span
                    >
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  colspan="3"
                  style="
                    width: 337.5pt;
                    padding: 0pt 5.4pt;
                    vertical-align: top;
                  "
                >
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                  <p
                    style="
                      text-indent: 20pt;
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                    "
                  >
                    <span
                      style="
                        color: rgb(192, 192, 192);
                        font-weight: bold;
                        font-size: 13px;
                      "
                      >Event&nbsp;Name</span
                    >
                  </p>
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span style="font-weight: bold; font-size: 24px"
                      >&nbsp;
                      {{
                        stats.activityToday ? stats.activityToday.name : ""
                      }}
                      <br />
                      <span
                        style="
                          font-size: 14px;
                          color: red;
                          padding-left: 20px;
                        "
                        >{{ eventDateString }}.</span
                      ></span
                    >
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 203.3pt;
                    padding: 0pt 5.4pt;
                    vertical-align: top;
                  "
                >
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span style="font-weight: bold; font-size: 16px"
                      >Preacher:
                      {{
                        stats.activityToday
                          ? stats.activityToday.preacher
                          : ""
                      }}</span
                    >
                  </p>
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span style="font-weight: bold; font-size: 16px"
                      >Topic:
                      {{
                        stats.activityToday ? stats.activityToday.topic : ""
                      }}</span
                    >
                  </p>
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span style="font-weight: bold; font-size: 16px"
                      >First&nbsp;timers: {{ stats.todayFirstTimer }}</span
                    >
                  </p>
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span style="font-weight: bold; font-size: 16px"
                      >New&nbsp;Converts: {{ stats.todayNewConvert }}</span
                    >
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    background: rgb(0, 0, 0);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span
                      style="
                        font-weight: normal;
                        font-size: 21px;
                        color: rgb(255, 255, 255);
                      "
                      >Attendance</span
                    >
                  </p>
                </td>
                <td
                  colspan="5"
                  style="
                    width: 388.5pt;
                    padding: 0pt 5.4pt;
                    vertical-align: top;
                  "
                >
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: normal; font-size: 21px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
                <td
                  colspan="5"
                  style="
                    width: 388.5pt;
                    padding: 0pt 5.4pt;
                    vertical-align: top;
                  "
                >
                  <p style="margin-bottom: 0pt; margin-top: 0pt">
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    border-bottom: 2.25pt solid rgb(0, 0, 0);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      text-indent: 21pt;
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span
                      style="font-weight: bold; font-size: 18px; color: #000"
                      >Attendance&nbsp;item</span
                    >
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 188.2pt;
                    padding: 0pt 5.4pt;
                    border-bottom: 2.25pt solid rgb(0, 0, 0);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span
                      style="
                        font-weight: bolder;
                        font-size: 18px;
                        color: #000;
                      "
                      >Count</span
                    >
                  </p>
                </td>
                <td
                  colspan="2"
                  style="
                    width: 200.3pt;
                    padding: 0pt 5.4pt;
                    border-bottom: 2.25pt solid rgb(0, 0, 0);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span
                      style="font-weight: bold; font-size: 18px; color: #000"
                      >Total</span
                    >
                  </p>
                </td>
              </tr>
              <tr
                style="font-weight: normal"
                v-for="(attendance, index) in activityAttendances"
                :key="index"
              >
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      text-indent: 21pt;
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: normal; font-size: 13px">{{
                      attendance.attendanceTypeName
                    }}</span>
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 188.2pt;
                    padding: 0pt 5.4pt;
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: normal; font-size: 13px">{{
                      attendance.number
                    }}</span>
                  </p>
                </td>
                <td
                  colspan="2"
                  style="
                    width: 200.3pt;
                    padding: 0pt 5.4pt;
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: normal; font-size: 13px">{{
                      attendance.number
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr style="border-top: 3px solid">
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    border-top: none;
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      text-indent: 21pt;
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 188.2pt;
                    padding: 0pt 5.4pt;
                    border-top: none;
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >Total</span
                    >
                  </p>
                </td>
                <td
                  colspan="2"
                  style="
                    width: 200.3pt;
                    padding: 0pt 5.4pt;
                    border-top: none;
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px">{{
                      stats.todayAttendance
                    }}</span>
                  </p>
                </td>
              </tr>

              <tr>
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    border-top: none;
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      text-indent: 21pt;
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 188.2pt;
                    padding: 0pt 5.4pt;
                    border-top: none;
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
                <td
                  colspan="2"
                  style="
                    width: 200.3pt;
                    padding: 0pt 5.4pt;
                    border-top: none;
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    background: rgb(0, 0, 0);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-size: 21px; color: rgb(255, 255, 255)"
                      >Offering</span
                    >
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 188.2pt;
                    padding: 0pt 5.4pt;
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
                <td
                  colspan="2"
                  style="
                    width: 200.3pt;
                    padding: 0pt 5.4pt;
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-size: 21px">&nbsp;</span>
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 188.2pt;
                    padding: 0pt 5.4pt;
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
                <td
                  colspan="2"
                  style="
                    width: 200.3pt;
                    padding: 0pt 5.4pt;
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
              </tr>
              <tr style="border-bottom: 3px solid">
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span
                      style="font-weight: bold; font-size: 18px; color: #000"
                      >Offering&nbsp;Item</span
                    >
                  </p>
                </td>
                <td
                  style="
                    width: 126.75pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span
                      style="font-weight: bold; font-size: 18px; color: #000"
                      >Channel</span
                    >
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 155.25pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span
                      style="font-weight: bold; font-size: 18px; color: #000"
                      >Amount</span
                    >
                  </p>
                </td>
                <td
                  style="
                    width: 106.5pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span
                      style="font-weight: bold; font-size: 18px; color: #000"
                      >Total</span
                    >
                  </p>
                </td>
              </tr>
              <tr
                style="font-weight: normal; font-size: 13px"
                v-for="(offering, index) in activityOfferings"
                :key="index"
              >
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: normal; font-size: 13px">{{
                      offering.name
                    }}</span>
                  </p>
                </td>
                <td
                  style="
                    width: 126.75pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: normal; font-size: 13px">{{
                      offering.channel
                    }}</span>
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 155.25pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: normal; font-size: 13px">{{
                      offering.amount
                    }}</span>
                  </p>
                </td>
                <td
                  style="
                    width: 106.5pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: normal; font-size: 13px">{{
                      offering.amount
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr style="border-top: 3px solid">
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
                <td
                  style="
                    width: 126.75pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 155.25pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >Total</span
                    >
                  </p>
                </td>
                <td
                  style="
                    width: 106.5pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px">{{
                      tottalOfferings
                    }}</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
                <td
                  style="
                    width: 126.75pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 155.25pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
                <td
                  style="
                    width: 106.5pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      >&nbsp;</span
                    >
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"></span>
                  </p>
                </td>
                <td
                  style="
                    width: 126.75pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"></span>
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 155.25pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"></span>
                  </p>
                </td>
                <td
                  style="
                    width: 106.5pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      ><a :href="url" style="color: blue; font-weight: bold"
                        >View full report</a
                      ></span
                    >
                  </p>
                </td>
              </tr>
              <tr style="height: 40px; background: #eee">
                <td
                  style="
                    width: 152.3pt;
                    padding: 0pt 5.4pt;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"></span>
                  </p>
                </td>
                <td
                  colspan="3"
                  style="
                    width: 126.75pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span
                      style="
                        font-weight: bold;
                        font-size: 14px;
                        margin-top: 20px;
                      "
                      >Powered By ChurchPlus</span
                    >
                  </p>
                </td>
                <td
                  style="
                    width: 155.25pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-right: 31.875pt none rgb(255, 255, 255);
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"></span>
                  </p>
                </td>
                <td
                  style="
                    width: 106.5pt;
                    padding: 0pt 5.4pt;
                    border-left: none;
                    border-top: none;
                    border-bottom: 31.875pt none rgb(255, 255, 255);
                    vertical-align: top;
                  "
                >
                  <p
                    style="
                      margin-bottom: 0pt;
                      margin-top: 0pt;
                      text-align: center;
                    "
                  >
                    <span style="font-weight: bold; font-size: 16px"
                      ><a
                        :href="url"
                        style="color: blue; font-weight: bold"
                      ></a
                    ></span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
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
      <Toast />
    </div>
    </div>
</template>

<script>
import { ref } from 'vue'
// import ReportAreaChart from "@/components/charts/AreaChart.vue";
import eventsService from '../../../services/events/eventsservice';
import ReportModal from "@/components/firsttimer/ReportModal.vue";
import composerObj from "../../../services/communication/composer";
import { useToast } from "primevue/usetoast";
import stopProgressBar from "../../../services/progressbar/progress";
import axios from "@/gateway/backendapi";
// // import { useStore } from 'vuex'
// import { useRoute } from 'vue-router'

export default {
    components: {
      ReportModal
    },
    setup () {
        const reportApproved = ref(false)
        const contributionReport = ref([])
        const emaildata = ref(null)
        const btnState = ref("");
        const toast = useToast();
        const churchName = ref("")
        const stats = ref({
  "activityToday": {
    "id": "ebec2866-63f9-43d9-87c7-08d919f43494",
    "firstTimersCount": 0,
    "newConvertsCount": 0,
    "name": "PFN-TEST",
    "venue": null,
    "details": null,
    "adImagePath": "",
    "adImagePathBlobName": "",
    "date": "2021-05-18T12:09:21.96",
    "makePublic": false,
    "enableRegisteration": true,
    "enableRegisterationPayment": true,
    "registrationAmount": 200,
    "eventRegistrationRules": null,
    "eventRegistrationSMS": "Thanks",
    "eventRegistrationEmail": "Thanks",
    "adAudioPath": null,
    "adVideoPath": null,
    "isPushed": false,
    "activityDate": "2021-05-24T00:00:00",
    "startTime": null,
    "endTime": null,
    "description": null,
    "preacher": null,
    "topic": null,
    "text": null,
    "note": null,
    "tenantID": "e9749fad-85e8-4130-b553-37acc8acde61",
    "eventId": "f7de6ca5-47a6-4e4e-de41-08d919f42a41",
    "event": null,
    "attendances": null,
    "offerings": null,
    "testimonies": [],
    "firstTimers": [],
    "converts": [],
    "activityRegistrations": null
  },
  "activityOfferings": [],
  "todayOffering": 0,
  "lastWeekOffering": 0,
  "lastMonthOffering": 0,
  "lastYearOffering": 0,
  "todayVsLastweekOfferingPercentage": 0,
  "todayVsLastMonthOfferingPercentage": 0,
  "todayVsLastYearOfferingPercentage": 0,
  "tenantCurrencyName": "NGN",
  "todayFirstTimer": 0,
  "lastWeekFirstTimer": 0,
  "lastMonthFirstTimer": 0,
  "lastYearFirstTimer": 0,
  "todayVsLastYearFirstTimerPercentage": 0,
  "todayVsLastWeekFirstTimerPercentage": 0,
  "todayVsLastMonthFirstTimerPercentage": 0,
  "activityAttendances": [],
  "todayAttendance": 0,
  "lastWeekAttendance": 0,
  "lastMonthAttendance": 0,
  "lastYearAttendance": 0,
  "todayVsLastYearAttendancePercentage": 0,
  "todayVsLastWeekAttendancePercentage": 0,
  "todayVsLastMonthAttendancePercentage": 0,
  "todayNewConvert": 0,
  "attendanceSoFar": [
    0,
    0,
    0,
    0,
    0
  ],
  "firstTimerSoFar": [
    0,
    0,
    0,
    0,
    0
  ],
  "offeringSoFar": [
    0,
    0,
    0,
    0,
    0
  ]
})

        const toggleReportState = () => {
        reportApproved.value = !reportApproved.value;
        status.value = "Unsent";
        };
        
        const getContributionReport = async() => {
          contributionReport.value = JSON.parse(localStorage.getItem('contriTransact'))
          console.log(contributionReport.value)

          try {
            await eventsService.getEventsByActivity(contributionReport.value[0].activityID)
            .then(res => console.log(res))
            .catch(err => console.log(err))
          }
          catch (err) {
            console.log(err)
          }          
        }
        getContributionReport()

        const sendReport = (messageObj) => {
          console.log(messageObj)
          const emailData = ref(emaildata.value.innerHTML);
          const message = `
                <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" style="box-sizing: border-box; font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; font-size: 14px; margin: 0; padding: 0;">
                  <head>
                    <meta name="viewport" content="width=device-width"/>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
                    <title>#title#</title>
                    <style>
                      .topmost {
                        display: flex;
                      }

                      .topmost-box1 {
                        width: 70%;
                        height:133px;
                        display:flex;
                        align-items:center;
                        padding:10px
                      }

                      .topmost-box2{
                        width: 30%;display:flex;flex-direction:column;height:133px;align-items:center;justify-content:center
                      }
                    </style>
                  </head>
                  <body style="-webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; background: #f6f6f6; box-sizing: border-box; font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; font-size: 14px; height: 100%; line-height: 1.6; margin: 0; padding: 0; width: 100% !important;">
                  
                  ${`${messageObj.data.message}`} <br>

                  ${emailData.value}
                  </body>
                  `;
              const body = {
                // message: topmost.value.innerHTMl.toString(),

                ispersonalized: false,
                contacts: messageObj.data.contacts,
                subject: messageObj.data.subject,
                // user: "+2349086767765",
              };
              if (messageObj.medium === "sms") {
                body.gateWayToUse = "hostedsms";
                body.category = "";
                body.emailAddress = "";
                body.emailDisplayName = "";
                body.isoCode = messageObj.data.isoCode;
                body.toOthers = messageObj.data.toOthers;
              }

              body.message =
                messageObj.medium === "sms" ? messageObj.data.message : message;

              const url =
                messageObj.medium === "sms"
                  ? "/api/Messaging/sendSms"
                  : "/api/Messaging/sendEmail";

              composerObj
                .sendMessage(url, body)
                .then((res) => {
                  btnState.value = "";
                  console.log(res, "report response");
                  if (res.status === false) {
                    toast.add({
                      severity: "error",
                      summary: "Sending Failed",
                      detail: res.message,
                      life: 3000,
                    });
                  } else {
                    toast.add({
                      severity: "success",
                      summary: "Send Success",
                      detail: "Your report has been sent",
                      life: 3000,
                    });
                  }
                })
                .catch((err) => {
                  btnState.value = "";
                  console.log(err);
                  stopProgressBar();
                  toast.add({
                    severity: "error",
                    summary: "Sending Failed",
                    detail: "Report was not sent, please try again",
                    life: 3000,
                  });
                });
              btnState.value = "modal";
              console.log(btnState.value)
            };

            const getChurchName = (payload) => {
              churchName.value = payload
            }

            const getReport = () => {
              axios.get('/pub/contributionReport')
              .then(res =>  {
                console.log(res)
              })
              .catch(err => console.log(err))
            }
            getReport()
        return {
            reportApproved, toggleReportState, contributionReport, stats, sendReport,
            emaildata, btnState, churchName, getChurchName
        }
    }
}
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