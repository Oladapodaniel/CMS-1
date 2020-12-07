<template>
  <!--container-->
  <div class="container">
    <div class="row">
      <div class="col-md-8 event-report-head1">Event and Report</div>
      <div class="col-12 col-md-4 event-report-head2">
        <div>Total Attendance</div>
        <div>Total Offering: $2666</div>
      </div>
      <div class="col-12 col-sm-6 event-caption">
        <div>Event Name</div>
        <div>Grace and Power Convention</div>
        <div>20th October, 2020</div>
      </div>
      <div class="col-6 col-sm-3 event-details1">
        <div>Preacher:</div>
        <div>First Timers:</div>
        <div>Topic:</div>
        <div>New Convert:</div>
      </div>
      <div class="col-6 col-sm-3 event-details2">
        <div>Pastor OO Aina</div>
        <div>12</div>
        <div>Faith</div>
        <div>233</div>
      </div>
      <div class="col-4 col-md-3 col-lg-2 attendance-header ">Attendance</div>
      <div class="col-sm-10"></div>
      <div class="col-sm-12 attendance">
        <table >
          <thead>
            <tr>
              <th>Attendance Item</th>
              <th>Count</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Male</td>
              <td>123</td>
              <td>123</td>
            </tr>
            <tr>
              <td>Female</td>
              <td>123</td>
              <td>123</td>
            </tr>
            <tr>
              <td>Children</td>
              <td>123</td>
              <td>123</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-sm-6"></div>
      <div class="col-sm-3 col-6 offset-3 offset-sm-0 col-sm-3 total">Total</div>
      <div class="col-3 total">1689</div>

      <div class="col-4 col-md-3 col-lg-2 offering-header">Offering</div>
      <div class="col-sm-10"></div>
      <div class="col-sm-12 offering">
        <table>
          <thead>
            <tr>
              <th>Offering Item</th>
              <th>Channel</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tithe</td>
              <td>Cheque</td>
              <td>123</td>
              <td>123</td>
            </tr>
            <tr>
              <td>Building</td>
              <td>POS</td>
              <td>123</td>
              <td>123</td>
            </tr>
            <tr>
              <td>Hospitality</td>
              <td>Bank Transfer</td>
              <td>123</td>
              <td>123</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-sm-6"></div>
      <div class="col-6 offset-3 offset-sm-0 col-sm-3 total">Total</div>
      <div class="col-3 col-sm-3 total">1689</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventReportStat",
};
</script>

<style scoped>
.event-report-head1 {
  font: normal normal 600 32px/43px Nunito Sans;
  color: #FFFFFF;
  padding: 30px;
  background: #980404 0% 0% no-repeat padding-box;
  border-radius: 5px 0px 0px 0px;
}

.event-report-head2 {
  background: #ff2b2a;
  font: normal normal bold 14px/19px Nunito Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
}

.event-report-head2 div{
  padding: 20px;
  color: white;
}

.event-report-head2 div:nth-child(2){
  padding-bottom: 30px;
  padding-top: 0;
}

.event-caption {
  margin-top: 4em;
  padding: 0 30px;
}

.event-caption div:first-child {
  text-align: left;
  font: normal normal bold 14px/19px Nunito Sans;
  letter-spacing: 0px;
  color: #252A2F;
  text-transform: capitalize;
  opacity: 0.52;
}

.event-caption div:nth-child(2) {
  font: normal normal bold 20px/27px Nunito Sans;
  letter-spacing: 0px;
  color: #252A2F;
  margin-top: 10px;
}

.event-caption div:last-child {
  font: normal normal bold 14px/19px Nunito Sans;
  letter-spacing: 0px;
  color: #980404;
  margin-top: 2em;
}

.event-details1 {
  margin-top: 4em;
  text-align: right;
  font: normal normal bold 14px/19px Nunito Sans;
  letter-spacing: 0px;
  color: #252A2F;
  text-transform: capitalize;
}

.event-details1 div {
  padding: 5px 0;
}

.event-details2 {
  margin-top: 4em;
  font: normal normal normal 14px/19px Nunito Sans;
  letter-spacing: 0px;
  color: #252A2F;
}

.event-details2 div {
  padding: 5px 0;
}

.attendance-header, .offering-header {
  font: normal normal 600 18px/24px Nunito Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
  background: #1C252C 0% 0% no-repeat padding-box;
  margin-top: 1em;
  padding: 7px 30px;
}

table {
  width: 100%;
  margin-top: 1em;
  padding: 10px;
}

.attendance th, .offering th {
  font: normal normal 800 14px/19px Nunito Sans;
  letter-spacing: 0px;
  color: #1C252C;
  border-bottom: 1px solid #a3a3a3;
  padding: 15px;
}

.attendance td, .offering td {
  font: normal normal normal 14px/19px Nunito Sans;
  letter-spacing: 0px;
  color: #002044;
  padding: 15px;
  border-bottom: 1px solid rgb(224, 224, 224)
}

.total {
  font: normal normal bold 18px/24px Nunito Sans;
  letter-spacing: 0px;
  color: #002044;
  padding: 10px;
}
</style>