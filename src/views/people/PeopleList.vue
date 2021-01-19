<template>
  <div class="my-con">
    <div class="summary px-3">
      <p class="summary-header">Summary</p>
      <!-- <hr class="hr" /> -->

      <div class="boards">
        <div class="board">
          <div class="board-top">
            <p class="total-text mb-0">TOTAL MEMBERS</p>
            <img
              class="trend-icon"
              src="../../assets/dashboardlinks/trend-icon.svg"
              alt=""
            />
          </div>
          <h4 class="total">123,456</h4>
          <p>
            <span class="percent">+3.48% </span>
            <span class="percent-text"> Since last month</span>
          </p>
        </div>

        <div class="chart-con">
          <div style="width: 45%" class="ml-md-4 chart1">
            <ByGenderChart domId="chart" title="By Gender" distance="5" :titleMargin="10" />
          </div>
          <div style="width: 45%" class="chart2">
            <ByMaritalStatusChart domId="second" title="By Marital Status" :titleMargin="10" />
          </div>
        </div>
      </div>
    </div>

    <div class="table mx-0">
      <div class="table-top py-2 font-weight-bold">
        <div class="select-all d-flex align-items-center">
          <input type="checkbox" name="all" id="all" />
          <label for="all" class="mb-0">SELECT ALL</label>
        </div>
        <div class="filter d-flex align-items-center">
          <p class="mb-0">FILTER</p>
        </div>
        <div class="sort d-flex align-items-center">
          <p class="mb-0">SORT</p>
        </div>
        <div class="search d-flex align-items-center">
          <p class="mb-0">SEARCH</p>
        </div>
      </div>

      <div class="table-header font-weight-700">
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
                  <div v-if="person.gender == 'Male'">
                    <img src="../../assets/people/avatar-male.png" alt="" style="border-radius: 50%"/>
                  </div>
                  <div v-else-if="person.gender == 'Female'">
                    <img src="../../assets/people/avatar-female.png" alt="" />
                  </div>
                  <div v-else>
                    <img src="../../assets/people/no-gender-avatar.png" alt="" />
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
          <div class="firstname data">
            <div class="data-con">
              <div class="data-text">
                <p>Firstnmae</p>
              </div>
              <router-link
                :to="`/tenant/people/add-person/${person.id}`"
                class="data-value itemroute-color"
                >{{ person.firstName }}</router-link
              >
            </div>
          </div>
          <div class="lastname data">
            <div class="data-con">
              <div class="data-text">
                <p>Lastname</p>
              </div>
              <router-link
                :to="`/tenant/people/add-person/${person.id}`"
                class="data-value itemroute-color"
                >{{ person.lastName }}</router-link
              >
            </div>
          </div>
          <div class="phone data">
            <div class="data-con">
              <div class="data-text">
                <p>Phone</p>
              </div>
              <router-link
                :to="`/tenant/people/add-person/${person.id}`"
                class="data-value itemroute-color"
                >{{ person.mobilePhone }}</router-link
              >
            </div>
          </div>
          <div class="action data action-icon">
            <div class="dropdown">
              <i
                class="fas fa-ellipsis-v cursor-pointer"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></i>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" v-if="person.mobilePhone">
                  <router-link
                    :to="`/tenant/sms-communications/compose-message?phone=${person.mobilePhone}`"
                    >Send SMS</router-link
                  >
                </a>
                <a class="dropdown-item" v-if="person.email">
                  <router-link
                    :to="`/tenant/email-communications/compose-message?phone=${person.email}`"
                    >Send Email</router-link
                  >
                </a>
                <a class="dropdown-item">
                  <router-link :to="`/tenant/people/add-person/${person.id}`"
                    >Edit</router-link
                  >
                </a>
                <a class="dropdown-item" href="#">Delete</a>
              </div>
            </div>
          </div>
        </div>
        <hr class="row-divider" />
      </div>

      <div class="table-footer">
        <PaginationButtons @getcontent="getPeopleByPage" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ByGenderChart from "@/components/charts/PieChart.vue";
import ByMaritalStatusChart from "@/components/charts/PieChart.vue";
import PaginationButtons from "../../components/pagination/PaginationButtons.vue";

import axios from "@/gateway/backendapi";

export default {
  props: ["list"],
  components: {
    ByGenderChart,
    ByMaritalStatusChart,
    PaginationButtons,
  },

  setup(props) {
    const churchMembers = ref([]);

    const getPeopleByPage = async (e) => {
      try {
        const { data } = await axios.get(
          `/api/People/GetPeopleBasicInfo?page=${e}`
        );
        churchMembers.value = data;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      console.log(props.list, "props");
      churchMembers.value = props.list;
    });

    return {
      churchMembers,
      getPeopleByPage,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  color: #02172e;
}

.itemroute-color {
  color: #136acd;
}

a {
  text-decoration: none;
}

.my-con {
  /* display: flex; */
  justify-content: space-between;
  margin: 24px 0;
}

.summary {
  /* width: 20%; */
  border-radius: 30px;
  /* box-shadow: 0px 3px 6px #2c28281c; */
  padding: 24px 10px;
  background: #fff;
  box-shadow: 0px 3px 6px #2c28281c;
border: 1px solid #00204424;
}

.table {
  box-shadow: 0px 3px 6px #2c28281c;
/* border: 1px solid #00204424; */
  border-radius: 30px;
  width: 100% !important;
}

.summary-header {
  margin: -0.8rem 10px 0.5rem 10px;
  color: #136acd;
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
  /* border: 0.4000000059604645px solid #dde2e6; */
  padding: 0 8px;
  /* box-shadow: 0px 1px 4px #02172e45;
  box-shadow: 0px 1px 4px #02172e45;
  border: 1px solid #dde2e6; */
}

.chart-con {
  width: 70%;
  display: flex;
  justify-content: space-between;
}

.board-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
  box-shadow: 0px 3px 6px #2c28281c;
  padding: 4px;
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

/* .hr {
  border: 1px solid #0020440a;
  margin: 0 4px 10px 0;
} */

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

.chart1,
.chart2 {
  /* border: 0.4000000059604645px solid #dde2e6;
  box-shadow: 0px 1px 4px #02172e45; */
  border-radius: 10px;
}

.picture .data-value {
  margin-left: 22px;
  width: 50%;
}

.firstname .data-value {
  margin-left: -32px;
  margin-right: 3px;
}

.lastname .data-value {
  margin-left: -41px;
  margin-right: 2px;
}

.phone .data-value {
  margin-left: 38px;
}

@media screen and (max-width: 500px) {

  .chart1,
  .chart2,
  .board,
  .chart-con {
    width: 100% !important;
  }

  .picture,
  .firstname,
  .lastname,
  .phone {
    width: 100%;
  }

  .table {
    padding: 0 10px;
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
    /* Tosin */
    padding: 0 0 0 2rem;
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
}

@media screen and (max-width: 768px) {
  .board-top {
    margin-bottom: 10px;
  }

  .total {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 1024px) {
  .my-con {
    flex-direction: column;
  }

  .table {
    width: 100%;
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



