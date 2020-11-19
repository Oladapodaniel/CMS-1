<template>
  <div class="con">
    <div :id="elemId" class="chart summary-chart"></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Highcharts from "highcharts";

export default {
    props: ["domId", "title", "subtitle", "distance"],
  setup(props) {
    const chart = ref(null);
    const elemId = ref("");
    elemId.value = props.domId;

    onMounted(() => {
      var highchartsOptions = {
        chart: {
          type: "pie",
          renderTo: props.domId,
        },
        credits: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
        },
        title: {
          text: props.title,
          align: 'left',
          x: 70,
          margin: 0,
        },
        subtitle: {
          text: props.subtitle,
          align: 'left',
          x: 70,
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
          pie: {
            // allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              formatter: function() {
                return this.point.name + ' ' + Math.round(this.percentage*100)/100 + ' %';
              },
              // format: '{point.name}: {point.y:.1f}%',
              distance: props.distance ? props.distance : -50,
            },
            size: 180,
          },
        },
        series: [
          {
            name: "Brands",
            colorByPoint: true,
            data: [
              {
                name: "Male",
                y: 61.41,
                sliced: true,
                selected: true,
              },
              {
                name: "Female",
                y: 11.84,
              },
              {
                name: "Not sure",
                y: 10.85,
              }
            ],
          },
        ],
        //   credits: false,
      };
      chart.value = new Highcharts.chart(highchartsOptions);
    });

    return { chart, elemId, };
  },
};
</script>

<style scoped>
    .con {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .chart {
      display: flex;
      align-items: center;
      width: 100% !important;
    }

    .chart div {
      width: 100%;
    }

    .summary-chart {
      width: 100% !important;
      box-shadow: 0px 1px 4px #02172E45;
      box-shadow: 0px 1px 4px #02172E45;
      border: 1px solid #DDE2E6;
      border-radius: 22px;
      margin-bottom: 24px;
    }
</style>