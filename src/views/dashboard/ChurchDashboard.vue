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
          </div>
          <button class="create-btn">
            Create a new
            <i class="fa fa-angle-down create-dd"></i>
          </button>
        </div>

        <div class="top-row">
          <div class="help-text">
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
                  <span class="plan-text">YOU ARE ON A FREE PLAN</span>
                  <button class="upgrade-btn">Upgrade</button>
                </div>
              </div>
            </div>
            <div class="box box2">
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
                  <span class="plan-text"></span>
                  <button class="upgrade-btn">Buy Again</button>
                </div>
              </div>
            </div>
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
        <div class="charts" id="plot"></div>
      </div>
    </div>
  </main>
</template>

<script>
import Highcharts from "highcharts";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const chart = ref(null);

    onMounted(() => {
      var highchartsOptions = {
        chart: {
          type: "column",
          renderTo: "plot",
        },
        credits: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
        },
        title: {
          text: "Title",
        },
        xAxis: {
          allowDecimals: false,
          title: {
            text: "Age",
          },
        },
        yAxis: {
          title: {
            text: "Pot Value",
          },
          labels: {
            formatter: function () {
              return "£" + this.value / 1000 + "k";
            },
          },
          opposite: false,
        },
        plotOptions: {
          column: {
            // pointPadding: 1,
            borderWidth: 7,
            //  groupPadding: 0.1,
            //  pointWidth: 1,
            //  pointMargin: 0.1
          },
        },
        series: [
          {
            name: "Y",
            color: "#EBEFF4",
            data: [2, 2, 3, 4, 5],
          },
          {
            name: "X",
            color: "#136ACD",
            data: [1, 2, 3, 4, 5],
          },
          {
            name: "Z",
            color: "#002044",
            data: [1, 2, 3, 4, 5],
          },
        ],
        //   credits: false,
      };
      chart.value = new Highcharts.chart(highchartsOptions);
    });

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
      chart,
      celebrations,
    }
  },
  // data() {
  //   return {
  //     chart: undefined,
  //   };
  // },
  // mounted() {
  //   var highchartsOptions = {
  //     chart: {
  //       type: "column",
  //       renderTo: "plot",
  //     },
  //     credits: {
  //       enabled: false,
  //     },
  //     tooltip: {
  //       enabled: false,
  //     },
  //     title: {
  //       text: "Title",
  //     },
  //     xAxis: {
  //       allowDecimals: false,
  //       title: {
  //         text: "Age",
  //       },
  //     },
  //     yAxis: {
  //       title: {
  //         text: "Pot Value",
  //       },
  //       labels: {
  //         formatter: function () {
  //           return "£" + this.value / 1000 + "k";
  //         },
  //       },
  //       opposite: false,
  //     },
  //     plotOptions: {
  //       column: {
  //           // pointPadding: 1,
  //           borderWidth: 7,
  //           //  groupPadding: 0.1,
  //           //  pointWidth: 1,
  //           //  pointMargin: 0.1

  //       }
  //     },
  //     series: [
  //       {
  //         name: "Y",
  //         color: "#EBEFF4",
  //         data: [2, 2, 3, 4, 5],
  //       },
  //       {
  //         name: "X",
  //         color: "#136ACD",
  //         data: [1, 2, 3, 4, 5],
  //       },
  //       {
  //         name: "Z",
  //         color: "#002044",
  //         data: [1, 2, 3, 4, 5],
  //       },
  //     ],
  //     //   credits: false,
  //   };
  //   this.chart = new Highcharts.chart(highchartsOptions);
  // },
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
  width: 100%;
  max-width: 800px;
  margin: auto;
  /* background: #F1F5F8; */
  padding: 10px;
}

.second-col {
  width: 100%;
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
  padding: 10px;
  /* margin: 10px 0 15px auto; */
  justify-content: space-between;
}

.top-row {
  display: flex;
  padding: 10px;
  margin-bottom: 50px;
}

.second-col .create-btn-div .create-btn {
  background: #136acd;
  color: #fff;
  border-radius: 22px;
  border: none;
  padding: 4px 8px;
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

.create-dd {
  padding: 0 8px;
}

.first-col {
  padding: 10px 30px;
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
  justify-content: space-between;
}

.box {
  width: 47%;
  /* background: #F1F5F8; */
}

.top {
  border-radius: 28px 28px 0 0;
  padding: 20px;
  border: 1px solid #e6e5f2;
  border-bottom: transparent;
}

.box-bottom {
  display: flex;
  justify-content: space-around;
  border-radius: 0px 0px 28px 28px;
  background: #136acd;
  padding: 6px;
  border: 1px solid #e6e5f2;
  border-top: transparent;
}

.box2 .box-bottom {
  background: transparent;
  /* border-bottom: transparent; */
}

.box2 .upgrade-btn {
  background: #136acd;
  color: #fff;
  padding: 4px 8px;
  justify-self: flex-end;
  margin-left: auto;
}

.upgrade-btn {
  max-height: 30px;
  align-self: center;
  padding: 0.2rem;
  background: #fff;
  border-radius: 20px;
  color: #136acd;
  border: none;
}

.plan-text {
  font-size: 12px;
  align-self: center;
}

.box-top {
  display: flex;
  justify-content: space-between;
  align-items: start;
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
</style>