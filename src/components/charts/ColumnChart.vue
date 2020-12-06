<template>
<div>
    <div class="chart-header" v-if="header">
          <div class="icon-div">
              <img src="../../assets/people/members-icon.svg" alt="">
          </div>
          <div class="header-text">
              <p>{{ header }}</p>
          </div>
      </div>
</div>
  <div class="wrapper">
    <div class="chart-div" :id="domId" style="width: 900px; height: 500px" ref="chartDiv"></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Highcharts from "highcharts";
export default {
  components: {},

  props: [ "domId", "title", "subtitle", "header" ],
  
  setup(props) {
    const chart = ref(null);
    const headerText = ref(null);

    onMounted(() => {
        headerText.value = props.header;

      var highchartsOptions = {
        chart: {
          type: "column",
          renderTo: props.domId,
        },
        credits: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
        },
        title: {
          text: `<b>${props.title}<b>`,
          align: 'left',
            x: 70,
            margin: 50,
        },
        subtitle: {
          text: props.subtitle,
          align: 'left',
            x: 70,
            y: 50,
        },
        xAxis: {
          allowDecimals: false,
          title: {
            text: "Age",
          },
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
        series: {
            groupPadding: 0.4,
            borderRadius: 4
        },
        column: {
          borderWidth: 1,
        }
    },
        series: [
          {
            name: "Male",
            color: "#EBEFF4",
            data: [2, 6, 3, 1, 1, 6],
          },
          {
            name: "Female",
            color: "#136ACD",
            data: [1, 4, 1, 6, 5, 4],
          },
          {
            name: "Others",
            color: "#002044",
            data: [5, 2, 5, 4, 6, 2],
          },
        ],
        //   credits: false,
      };
      chart.value = new Highcharts.chart(highchartsOptions);
    });


    return {
      chart,
      headerText,
    }
  },
};
</script>

<style scoped>
.wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.chart-div {
    width: 100%;
}

.chart-header {
    display: flex;
    margin-top: 45px;
}

.icon-div img {
    height: 108px;
}

.chart-header p {
    font-size: 25px;
    font-weight: 600;
    margin: 0 0 10px 0;
}

.header-text {
    display: flex;
    align-items: center;
}

@media screen and (min-width: 1100px) {
    #chart1 div {
        position: relative;
        left: auto;
        top: auto;
        width: 100%;
        z-index: -1;
    }

    .wrapper div {
      width: 100% !important;
    }
}
</style>

<style>
    .chart-div {
        width: 90%;
         border: 1px solid #DDE2E6;
        border-radius: 30px;
        margin: 0 0 24px 0;
        box-shadow: 0px 1px 4px #02172E45;
        box-shadow: 0px 1px 4px #02172E45;
        border: 1px solid #DDE2E6;
    }
</style>