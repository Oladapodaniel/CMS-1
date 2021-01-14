<template>
  <main class="container-slim" id="main">
    <!-- <div class="menu-links">
      <menu-links />
    </div> -->
    <!-- <div class="main-content"> -->
    <div class="second-col container-top">
      <div class="create-btn-div">
        <div>
          <h2 class="title">Dashboard</h2>
          <p class="welcome-text">Welcome Back!</p>
        </div>

        <div>
          <button
            class="create-btn"
            @click="moreLinksVissible = !moreLinksVissible"
          >
            Create a new
            <i class="fa fa-angle-down create-dd"></i>
          </button>
          <div class="more-items ml-1" v-if="moreLinksVissible">
            <div class="container">
              <div class="row">
                <div
                  class="col-md-12 d-flex flex-column border rounded more-links"
                >
                  <router-link
                    to="/tenant/people/add-person"
                    class="font-weight-bold mt-3 text-dec-none"
                    >Add member</router-link
                  >
                  <router-link
                    to="/tenant/people/add-first-timer"
                    class="font-weight-bold text-dec-none"
                    >Add first timer</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="help-text1">
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
          </div> -->
      <div class="top-row px-0">
        <div class="help-text2">
          <img src="../../assets/can-do.svg" alt="" />
          <div class="can-do">
            <h4>Things You Can Do</h4>
            <div class="can-do-links">
              <router-link to="/tenant/people/add-person"
                >Add member</router-link
              >
              <router-link to="/tenant/sms-communications/compose-message"
                >Send SMS</router-link
              >
              <router-link to="/tenant/people/add-first-timer"
                >Add First Timer</router-link
              >
              <router-link to="">Add Follow-up</router-link>
            </div>
          </div>
        </div>

        <div class="number-boxes">
          <div class="box one">
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
                <h1>{{ tenantInfo.memberCount }}</h1>
                <span class="size-text">Church Size</span>
              </div>
            </div>
            <div class="bottom">
              <div class="box-bottom">
                <span class="plan-text">YOU'RE ON A FREE PLAN</span>
                <button class="upgrade-btn">
                  <h4 class="box-btn-text">UPGRADE</h4>
                </button>
              </div>
            </div>
          </div>
          <div class="box box2">
            <div class="top">
              <div class="box-top">
                <div class="top-icon-div">
                  <i class="fa fa-envelope"></i>
                </div>
                <div class="box-top-text"></div>
              </div>
              <div class="box-middle">
                <h1>{{ tenantInfo.memberCount }}</h1>
                <span class="size-text">Church Size</span>
              </div>
            </div>
            <div class="bottom">
              <div class="box-bottom">
                <span class="plan-text"></span>
                <button class="upgrade-btn buy-btn">
                  <h4 class="box-btn-text">BUY UNIT</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="celeb-header">
        <div class="celeb-icon">
          <img src="../../assets/celeb-icon.svg" alt="Celebration Icon" />
        </div>
        <div class="celeb-header-text">
          <p>Celebrations</p>
        </div>
      </div>
      <!-- <div class="table">
          <div class="table-top">
            <router-link to="" class="view-all">View all</router-link>
          </div>

          <div class="table-header">
         
            <div class="picture">
              <p>PICTURE</p>
            </div>
            <div class="firstname">
              <p>FIRSTNAME</p>
            </div>
            <div class="lastname">
              <p>LASTNAME</p>
            </div>
            <div class="phone one">
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
           
              <div class="picture data">
                <div class="data-con">
                  <div class="data-text">
                    <p>Picture</p>
                  </div>
                  <div class="data-value">
                    <div class="image-con">
                      <img src="../../assets/people/phone-import.svg"  alt="" />
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
        </div> -->
      <div class="table table-responsive">
        <div class="table-top">
          <router-link to="" class="view-all">View all</router-link>
        </div>
        <table class="w-100">
          <thead>
            <tr>
              <th>PICTURE</th>
              <th>FIRSTNAME</th>
              <th>LASTNAME</th>
              <th>PHONE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="../../assets/people/phone-import.svg" alt="" /></td>
              <td>FirstName</td>
              <td>Lastname</td>
              <td>mobilePhne</td>
              <td><i class="fas fa-ellipsis-v"></i></td>
            </tr>
            <tr>
              <td><img src="../../assets/people/phone-import.svg" alt="" /></td>
              <td>Firstname</td>
              <td>Lastname</td>
              <td>mobilePhne</td>
              <td><i class="fas fa-ellipsis-v"></i></td>
            </tr>
          </tbody>
        </table>
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
          <ColumnChart
            domId="chart1"
            title="Event Attendance"
            subtitle="Weekly Attendance of Events"
            header="Members Attendance"
          />
        </div>

        <div>
          <ColumnChart
            domId="chart2"
            title="Event Attendance"
            subtitle="Weekly Attendance of Events"
            header=""
          />
        </div>

        <div>
          <ColumnChart
            domId="chart3"
            title="Event Attendance"
            subtitle="Weekly Attendance of Events"
            header="Members Attendance"
          />
        </div>

        <div class="pies">
          <div class="pie-con">
            <PieChart
              domId="pichart"
              title="Offering Breakdown"
              subtitle="Overview"
              distance="5"
              :titleMarginLeft="70"
            />
          </div>

          <div class="pie-con">
            <PieChart
              domId="pchart"
              title="Offering Breakdown"
              subtitle="Overview"
              distance="1"
              :titleMarginLeft="70"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </main>
</template>

<script>
import PieChart from "@/components/charts/PieChart.vue";
import ColumnChart from "@/components/charts/ColumnChart.vue";
import { ref } from "vue";
// import { useRoute } from 'vue-router';
// import store from "@/store/store.js"
import router from "@/router/index";
import axios from "@/gateway/backendapi";

export default {
  components: {
    PieChart,
    ColumnChart,
  },

  setup() {
    const moreLinksVissible = ref(false);
    const toggleMoreLinkVissibility = () => {
      moreLinksVissible.value != moreLinksVissible.value;
    };

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
      },
    ];

    // const route = useRoute();

    const tenantInfo = ref({});

    axios
      .get("/dashboard")
      .then((res) => {
        tenantInfo.value = res.data;
      })
      .catch((err) => {
        console.log(err.respone);
        if (err.response.status === 401) {
          localStorage.removeItem("token");
          router.push("/");
        }
      });

    return {
      celebrations,
      tenantInfo,
      moreLinksVissible,
      toggleMoreLinkVissibility,
    };
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
  padding: 0 10px 10px 0;
  /* margin: 10px 0 15px auto; */
  justify-content: space-between;
  margin-bottom: 24px;
}

.welcome-text {
  margin: -18px 0 0 0;
  color: #02172e;
  font-size: 18px;
}

.top-row {
  display: flex;
  padding: 10px;
  margin-bottom: 30px;
  justify-content: space-between;
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
  background: #f1f5f8;
  padding: 4px;
  border-radius: 50%;
}

.top-icon-div i {
  color: #136acd;
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
.can-do a:hover {
  text-decoration: none;
}

.can-do h4 {
  margin: 0;
  font-weight: 600;
  font-size: 20px;
}

.can-do-links {
  display: flex;
  flex-direction: column;
}

.can-do-links a {
  margin-top: 20px;
  text-decoration: none;
  color: #2b6ecd;
  font-weight: 700;
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
  max-width: 450px;
  /* margin-left: auto; */
  display: flex;
  justify-content: flex-end;
}

.box {
  width: 200px;
  margin-left: 20px;

  /* background: #F1F5F8; */
}

.top {
  border-radius: 28px 28px 0 0;
  padding: 20px;
  border: 1px solid #e6e5f2;
  box-shadow: 0px 1px 4px #02172e45;
  border-bottom: transparent;
}

.box-bottom {
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 28px 28px;
  background: #f1f5f8;
  padding: 10px;
  border: 1px solid #e6e5f2;
  box-shadow: 0px 1px 4px #02172e45;
  border-top: transparent;
}

.box2 .bottom {
  /* border: 1px solid #e6e5f2; */
  border-radius: 0px 0px 28px 28px;
}

.box2 .upgrade-btn {
  /* background: #136acd; */
  color: #fff;
  justify-self: flex-end;
  margin-left: auto;
  outline: none;
}

.upgrade-btn {
  align-self: center;
  padding: 7px;
  background: #797e81;
  border-radius: 20px;
  color: #002044;
  border: none;
  font-weight: 800;
  outline: none;
  color: #fff;
  width: 80px;
}

.upgrade-btn:hover {
  background: #136acd;
  /* font-weight: 600; */
}

.buy-btn {
  width: 109.5px;
  color: #002044;
  background: #797e81;
}

.buy-btn:hover {
  background: #136acd;
}

.plan-text {
  font-size: 9px;
  align-self: center;
  text-transform: uppercase;
  font-weight: 800;
  width: 80px;
  margin-left: 10px;
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

.box-top-text h4 {
  font-size: 20px;
  font-weight: 800;
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
  margin-left: -33px;
}

.help-text2 {
  display: flex;
  align-items: flex-start;
}

.help-text2 img {
  width: 100px;
  margin-top: -20px;
  margin-left: -35px;
}

.pies {
  margin-top: 50px;
}

tbody tr:nth-child(even) {
  background: #f7fafc;
}

.table-body {
  font-size: 14px;
}

.phone.one {
  margin-left: -20px;
}

.title {
  margin: 0 0 15px 0;
}

.box-btn-text {
  margin: 0px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
}

.size-text {
  color: #136acd;
  font-weight: 700;
}

.more-links {
  margin-top: -10px !important;
  background: transparent !important;
  border-top: none !important;
  position: absolute !important;
  width: inherit;
}

.table thead {
  background: #f1f3f9;
  color: #8898aa;
  font-size: 11px;
}

.table tr td img {
  width: 40px;
}

.table tbody {
  font-size: 14px;
  align-items: center;
}

.more-links a {
  text-decoration: none;
}
/* WIP */

/* @media screen and (max-width: 376px) {
  .top-row {
    flex-direction: column;
  }

  .can-do, .can-do-links {
    width: 90%;
  }
} */

@media screen and (max-width: 940px) {
  .top-row {
    display: flex;
    flex-direction: column;
  }

  .help-text2 {
    display: flex;
    align-items: flex-start;
  }

  .second-col .number-boxes {
    max-width: 100%;
    justify-content: space-between;
  }

  .box {
    margin-top: 20px;
    width: 40%;
    margin-left: 0;
  }

  .can-do {
    width: 100%;
  }

  .can-do-links {
    flex-direction: row;
    justify-content: space-around;
  }
}

@media (min-width: 1101px) and (max-width: 1231px) {
  /* .top-row {
      flex-direction: column;
  }

  .number-boxes {
     margin: 0;
  }

  .box {
    margin-top: 20px;
  } */
}

@media screen and (min-width: 1300px) {
  .box-middle {
    padding: 43px 0;
  }
}

@media (max-width: 556px) {
  .can-do-links {
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .can-do-links a {
    min-width: 100px;
  }
}

@media (max-width: 508px) {
  .box {
    width: 100%;
  }

  .number-boxes {
    flex-direction: column;
  }
}
</style>