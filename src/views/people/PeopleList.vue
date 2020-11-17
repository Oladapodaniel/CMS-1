<template>
  <div class="my-con">
    <div class="summary">
      <p class="summary-header">Summary</p>
      <hr class="hr" />

      <div class="boards">
        <div class="board">
        <div class="board-top">
          <p class="total-text">TOTAL MEMBERS</p>
          <!-- <i class="fa fa-chart-line trend-icon"></i> -->
          <img class="trend-icon" src="../../assets/dashboardlinks/trend-icon.svg" alt="">
        </div>
        <h4 class="total">123,456</h4>
        <p>
          <span class="percent">+3.48% </span>
          <span class="percent-text">  Since last month</span>
        </p>
      </div>

      <!-- <div class="board">
        <BarChart chartType="pie" key="1"/>
      </div> -->


      <div class="chart-con">
        <ByGenderChart domId="chart" title="By Gender" />
        <ByMaritalStatusChart domId="second" title="By Marital Status" />
      </div>
      </div>
    </div>
    <div class="table">
      <div class="table-top">
        <div class="select-all">
          <input type="checkbox" name="all" id="all" />
          <label for="all">SELECT ALL</label>
        </div>
        <div class="filter">
          <p>FILTER</p>
        </div>
        <div class="sort">
          <p>SORT</p>
        </div>
        <div class="search">
          <p>SEARCH</p>
        </div>
      </div>

      <div class="table-header">
        <div class="check"></div>
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

      <div class="table-body" v-for="person in churchMembers" :key="person.id">
        <div class="data-row">
          <div class="check data">
            <input type="checkbox" name="" id="" />
          </div>
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
    
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ByGenderChart from "@/components/charts/PieChart.vue"
import ByMaritalStatusChart from "@/components/charts/PieChart.vue"

export default {
    props: ["list"],
    components: { 
      ByGenderChart,
      ByMaritalStatusChart
   },

  setup(props) {
    const churchMembers = ref([])

    onMounted(() => {
        console.log(props.list, "props");
        churchMembers.value = props.list
    })

    return { churchMembers }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

.my-con {
  /* display: flex; */
  justify-content: space-between;
  margin: 24px 0;
}



.summary {
  /* width: 20%; */
  border-radius: 30px;
  box-shadow: 0px 3px 6px #2c28281c;
  padding: 24px 10px;
  background: #fff;
}

.summary-header {
  margin: 0 10px;
  color: #02172e;
  opacity: 0.8;
  font-size: 22px;
  font-weight: 600;
}

.boards {
  display: flex;
}

.board {
  width: 30%;
  border-radius: 10px;
  border: 0.4000000059604645px solid #dde2e6;
  padding: 0 8px;
}

.chart-con {
  width: 70%;
}

.board-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
  box-shadow: 0px 3px 6px #2c28281c;
  padding: 0 4px;
}

.total {
  margin-bottom: 40px;
  font-size: 37px;
}

.total-text {
  font-size: 12px;
}

.percent {
  color: #136acd;
}



.hr {
  border: 1px solid #0020440a;
  margin: 0 4px 10px 0;
}



.tbl-footer-btn {
  background: transparent;
  padding: 4px;
  margin: 4px 8px;
  border-radius: 50%;
  width: 29px;
  border: none;
  border: 1px solid #8898aa80;
  outline: transparent;
}

.action-icon {
  text-align: center;
}

.trend-icon {
    /* color: #fff; */
    /* background: #136ACD; */
    /* padding: 4px; */
    /* border-radius: 50%; */
}

@media screen and (max-width: 500px) {
  .picture,
  .firstname,
  .lastname,
  .phone {
    width: 100%;
  }

  .table-body .check {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
  }

  .data-text {
    display: inline-block;
  }

  .data-row {
    flex-direction: column;
  }

  .data-con {
    text-align: center;
    display: flex;
    justify-content: space-between;
  }

  .action-icon {
    width: 100%;
    text-align: right;
  }

  .table-header {
    display: none;
  }
}

@media screen and (min-width: 500px) {
  .picture,
  .firstname,
  .lastname,
  .phone {
    width: 19%;
  }

  .table-body .check {
    width: 4%;
  }

  .action {
    width: 20%;
  }

  .table {
    overflow: scroll !important;
  }
}

@media screen and (max-width: 1024px) {
  .my-con {
    flex-direction: column;
  }

  .table {
    width: 98%;
    margin: 24px auto;
  }

  .summary {
    width: 98%;
    margin: auto;
  }
}

.row-divider {
  border: 1px solid #0020440a;
  margin: 0;
}

.table-footer {
  display: flex;
  justify-content: flex-end;
  background: #fff;
  padding: 10px 0;
  border-radius: 0px 0px 22px 22px;
}
</style>

<style>
  #chart{
    width: 48%;
    max-height: 310px;
    border: 0.4000000059604645px solid #dde2e6;
    border-radius: 10px;
  }

  #second {
    width: 48%;
    max-height: 310px;
    border: 0.4000000059604645px solid #dde2e6;
    border-radius: 10px;
  }

  .table {
  width: 100%;
  margin: 24px 0;
  box-shadow: 0px 3px 6px #2C28281C;
  border-radius: 30px;  
}

.table-top,
.table-header,
.table-body .data-row {
  display: flex;
  padding: 4px;
  align-items: center;
}

.select-all input {
  margin: 0 8px;
}
.table-top {
  background: #fff;
  color: #172b4d;
  font-size: 11px;
  border-radius: 22px 22px 0px 0px;
}
.table-header {
  background: #f1f3f9;
  color: #8898aa;
  font-size: 11px;
  text-align: center;
  box-shadow: 0px 3px 6px #2c28281c;
}

.table-header .check {
  width: 50px;
}

.table-header p {
  margin: 8px;
}

.table-body {
  background: #fff;
  color: #172b4d;
}

.image-con {
  width: 40px;
  margin: auto;
}

.image-con img {
  width: 100%;
}

.data-con {
  text-align: center;
}

.select-all {
  width: 65%;
}

.filter,
.sort,
.search {
  width: 15%;
}

.data-text {
  font-weight: bold;
  font-size: large;
  display: none;
}
</style>