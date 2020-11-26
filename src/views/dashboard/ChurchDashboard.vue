<template>
  <main id="main">
    <!-- <div class="menu-links">
      <menu-links />
    </div> -->
    <div class="main-content">
      <div class="second-col">
        <div class="create-btn-div">
          <div>
            <h2 class="title">Dashboard</h2>
            <p class="welcome-text">Welcome Back!</p>
          </div>
          <button class="create-btn">
            Create a new
            <i class="fa fa-angle-down create-dd"></i>
          </button>
        </div>

        <div class="top-row">
          <div class="help-text">
            <img src="../../assets/can-do.svg" alt="">
            <div class="can-do">
              <h4>Things You Can Do</h4>
              <div class="can-do-links">
                <a href="">Add member</a>
                <a href="">Send SMS</a>
                <a href="">Add First Timer</a>
                <a href="">Add Follow-up</a>
              </div>
            </div>
          </div>

          <div class="number-boxes">
            <div class="box">
              <div class="top">
                <div class="box-top">
                  <div class="top-icon-div">
                    <i class="fa fa-users"></i>
                  </div>
                  <div class="box-top-text">
                    <p>FIRST TIMERS</p>
                    <h4>30</h4>
                  </div>
                </div>
                <div class="box-middle">
                  <h1>302</h1>
                  <span>Church Size</span>
                </div>
              </div>
              <div class="bottom">
                <div class="box-bottom">
                  <span class="plan-text">YOU'RE ON A FREE PLAN</span>
                  <button class="upgrade-btn">Upgrade</button>
                </div>
              </div>
            </div>
            <div class="box box2">
              <div class="top">
                <div class="box-top">
                  <div class="top-icon-div">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div class="box-top-text">
                    
                  </div>
                </div>
                <div class="box-middle">
                  <h1>302</h1>
                  <span>Church Size</span>
                </div>
              </div>
              <div class="bottom">
                <div class="box-bottom">
                  <span class="plan-text"></span>
                  <button class="upgrade-btn buy-btn">Buy Unit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="celeb-header">
          <div class="celeb-icon">
            <img src="../../assets/celeb-icon.svg" alt="Celebration Icon">
          </div>
          <div class="celeb-header-text">
            <p>Celebrations</p>
          </div>
        </div>
        <div class="table">
          <div class="table-top">
            <router-link to="" class="view-all">View all</router-link>
          </div>

          <div class="table-header">
            <!-- <div class="check"></div> -->
            <div class="picture">
              <p>PICTURE</p>
            </div>
            <div class="firstname">
              <p>FIRSTNAME</p>
            </div>
            <div class="lastname">
              <p>LASTNAME</p>
            </div>
            <div class="phone">
              <p>PHONE</p>
            </div>
            <div class="action"></div>
          </div>

          <div
            class="table-body"
            v-for="person in celebrations"
            :key="person.id"
          >
            <div class="data-row">
              <!-- <div class="check data">
            <input type="checkbox" name="" id="" />
          </div> -->
              <div class="picture data">
                <div class="data-con">
                  <div class="data-text">
                    <p>Picture</p>
                  </div>
                  <div class="data-value">
                    <div class="image-con">
                      <img src="../../assets/people/phone-import.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="firstname data">
                <div class="data-con">
                  <div class="data-text">
                    <p>Firstnmae</p>
                  </div>
                  <div class="data-value">{{ person.firstName }}</div>
                </div>
              </div>
              <div class="lastname data">
                <div class="data-con">
                  <div class="data-text">
                    <p>Lastname</p>
                  </div>
                  <div class="data-value">{{ person.lastName }}</div>
                </div>
              </div>
              <div class="phone data">
                <div class="data-con">
                  <div class="data-text">
                    <p>Phone</p>
                  </div>
                  <div class="data-value">{{ person.mobilePhone }}</div>
                </div>
              </div>
              <div class="action data action-icon">
                <i class="fas fa-ellipsis-v"></i>
              </div>
            </div>
            <hr class="row-divider" />
          </div>

          <div class="table-footer">
            <button class="tbl-footer-btn">
              <i class="fa fa-angle-left"></i>
            </button>
            <button class="tbl-footer-btn">A</button>
            <button class="tbl-footer-btn">A</button>
            <button class="tbl-footer-btn">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div class="charts" id="plot">
          <div>
            <ColumnChart domId="chart1" title="Event Attendance" subtitle="Weekly Attendance of Events" header="Members Attendance" />
          </div>

          <div>
            <ColumnChart domId="chart2" title="Event Attendance" subtitle="Weekly Attendance of Events" header="" />
          </div>

          <div>
            <ColumnChart domId="chart3" title="Event Attendance" subtitle="Weekly Attendance of Events" header="Members Attendance" />
          </div>
          
          <div class="pies">
            <div class="pie-con">
              <PieChart domId="pichart" title="Offering Breakdown" subtitle="Overview" distance="5" />
            </div>
            
            <div class="pie-con">
              <PieChart domId="pchart" title="Offering Breakdown" subtitle="Overview" distance="1" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
// import Highcharts from "highcharts";
// import { onMounted, reactive, ref } from "vue";
import PieChart from "@/components/charts/PieChart.vue"
import ColumnChart from "@/components/charts/ColumnChart.vue"

export default {
  components: {
    PieChart,
    ColumnChart,
  },

  setup() {
    // const chart = ref(null);

    const celebrations = [
      {
        firstName: "FirstName",
        lastName: "lastName",
        mobilePhone: "mobilePhone",
      },
      {
        firstName: "FirstName",
        lastName: "lastName",
        mobilePhone: "mobilePhone",
      }
    ];


    return {
      celebrations,
    }
  },
};
</script>

<style scoped>
* {
  color: #02172e;
}

#main {
  display: flex;
  justify-content: space-between;
  height: 100vh;
}

.menu-links {
  width: 20%;
  min-width: 255px;
}

.main-content {
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  /* background: #F1F5F8; */
  padding: 10px;
}

.second-col {
  width: 100%;
}

.charts {
  margin-bottom: 2rem;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.create-btn-div {
  display: flex;
  /* width: fit-content; */
  /* margin-left: auto; */
  padding: 10px 10px 10px 0;
  /* margin: 10px 0 15px auto; */
  justify-content: space-between;
  margin-bottom: 24px;
}

.welcome-text {
    margin: -18px 0 0 0;
    color: #02172E;
    font-size: 18px;
}

.top-row {
  display: flex;
  padding: 10px;
  margin-bottom: 30px;
}

.second-col .create-btn-div .create-btn {
  background: #136acd;
  color: #fff;
  border-radius: 22px;
  border: none;
  padding: 4px 14px;
  height: 40px;
  align-self: center;
  font-size: 16px;
  outline: none;
  display: flex;
  align-items: center;
}

.second-col .create-btn-div .create-btn:hover {
  cursor: pointer;
}

.top-icon-div {
      background: #F1F5F8;
    padding: 4px;
    border-radius: 50%;
    
}

.top-icon-div i {
  color: #136ACD;
  font-size: 24px;
  padding: 4px;
  /* filter: invert(29%) sepia(74%) saturate(1909%) hue-rotate(197deg) brightness(91%) contrast(89%); */
}

.box-top-text p {
  font-weight: 600;
}

.box-top-text h4 {
  color: #136acd;
  font-size: larger;
}

.create-dd {
  padding: 0 9px;
  color: #fff;
}

.first-col {
  padding: 10px 30px;
}

.can-do h4 {
  margin: 0 ;
  font-weight: 600;
  font-size: 20px;
}

.can-do-links {
  display: flex;
  flex-direction: column;
}

.can-do-links a {
  margin: 5px 0;
  text-decoration: none;
  color: #2b6ecd;
  font-weight: 600;
  font-size: 16px;
}

.celebrant {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  text-decoration: none;
  color: #2b6ecd;
  font-weight: 600;
  opacity: 0.9;
}

.view-more {
  text-align: center;
  margin-top: 0.5rem;
}

.second-col .number-boxes {
  width: 100%;
  max-width: 551px;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
}

.box {
  width: 40%;
  margin-left: 20px;
   
  /* background: #F1F5F8; */
}

.top {
  border-radius: 28px 28px 0 0;
  padding: 20px;
  border: 1px solid #e6e5f2;
  box-shadow: 0px 1px 4px #02172E45;
  border-bottom: transparent;
}

.box-bottom {
  display: flex;
  justify-content: space-around;
  border-radius: 0px 0px 28px 28px;
  background: #F1F5F8;
  padding: 10px;
  border: 1px solid #e6e5f2;
  box-shadow: 0px 1px 4px #02172E45;
  border-top: transparent;
}

.box2 .bottom {
  border: 1px solid #e6e5f2;
  border-radius: 0px 0px 28px 28px;
}

.box2 .upgrade-btn {
  background: #136acd;
  color: #fff;
  justify-self: flex-end;
  margin-left: auto;
}

.upgrade-btn {
  align-self: center;
  padding: 10px;
  background: #DDE2E6;
  border-radius: 20px;
  color: #002044;
  border: none;
  width: 110px;
  text-transform: uppercase;
  font-weight: 800;
}

.buy-btn {
  width: 94px;
  color: #002044;
}

.plan-text {
  font-size: 12px;
  align-self: center;
  text-transform: uppercase;
  font-weight: 800;
}

.box-top {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.box-middle {
  padding: 24px 0;
}

.box-top-text h4,
.box-top-text p {
  margin: 0;
  font-size: 12px;
}

.box-middle h1 {
  margin: 0;
  font-size: 54px;
  font-weight: 400;
}

.celebrations {
  padding: 10px;
  /* border: 1px solid red; */
  border: 1px solid #e6e5f2;
  border-radius: 28px;
  margin-top: 80px;
}

.pie-con {
  margin: 24px 0;
}

/* Table */
.table-top {
  display: flex;
  justify-content: flex-end;
}

.view-all {
  padding: 10px;
  width: 120px;
  box-shadow: 0px 3px 6px #2c28281c;
  border: 1px solid #136acd;
  border-radius: 1000px;
  text-align: center;
  margin: 4px;
}

.celeb-header {
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
}

.celeb-header-text p {
  margin: 0;
}

.celeb-icon {
  height: 81px;
}

.help-text {
  display: flex;
  align-items: flex-start;
}

.help-text img {
  width: 87px;
  margin-top: -20px;
}

.pies {
  margin-top: 50px;
}

.table-body:nth-child(even) {
  background: #F7FAFC;
}

.title {
  margin: 0 0 15px 0;
}

@media screen and (max-width: 376px) {
  .top-row {
    flex-direction: column;
  }

  .can-do, .can-do-links {
    width: 90%;
  }

  .number-boxes {
    flex-direction: column;
  }
}

@media screen and (max-width: 400px) {
  .box {
    width: 80%;
  }

  .number-boxes {
    flex-direction: column;
  }
}

@media screen and (max-width: 500px) {
  .box {
    width: 50%;
  }
}

@media screen and (max-width: 768px) {
  .top-row {
    display: flex;
    flex-direction: column;
  }
}

/* @media screen and (min-width: 1100px) {
  .user {
    margin: 139px 0;
  }
} */
</style>