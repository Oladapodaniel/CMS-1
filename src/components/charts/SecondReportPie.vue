<template>
  <div class="con">
    <div :id="domId" class="chart summary-chart" style="height: 100%"></div>
  </div>
</template>

<script>
import { onUpdated, ref } from "vue";
import Highcharts from "highcharts";

export default {
  props: [
    "title",
    "subtitle",
    "distance",
    "domId",
    "titleMargin",
    "titleMarginLeft",
    "height",
    "summary",
    "percentage"
  ],
  setup(props) {
    const chart = ref(null);
    const getSummary = ref([]);

    // const pointFormat = computed(() => {
    //   if (props.percentage) return "<b>{point.name}</b><br>{point.percentage:.1f} %";
    //   return "<b>{point.name}</b><br>";
    // })

    const pointFormat = props.percentage ? "<b>{point.name}</b><br>{point.y}" : "<b>{point.name}</b><br>{point.percentage:.1f} %";
    console.log(pointFormat, props.percentage);

    onUpdated(() => {
      var highchartsOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          renderTo: props.domId,
          height: props.height ? props.height : 250,
        },
        title: {
          text: props.title,
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            colors: ["#89b4e6", "#e7f0fa", "red",  "#e7f0fa"],
            // colors: ["#136acd",  "#708eb1", "#0f0221", "#dde2e6", "#67a9cf"],
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b><br>{point.percentage:.1f} %",
              distance: -40,
              filter: {
                property: "percentage",
                operator: ">",
                value: 4,
              },
            },
          },
        },
        series: [
          {
            name: "Series",
            data: props.summary ? props.summary : [
              {
                name: "Male",
                y: 50,
              },
              {
                name: "Female",
                y: 50,
              },
            ],
          },
        ],
      };

      chart.value = new Highcharts.chart(highchartsOptions);
    });

    return { 
      chart,
      getSummary,
      pointFormat,
    };
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
  /* box-shadow: 0px 1px 4px #02172E45; */
  /* border: 1px solid #DDE2E6; */
  border-radius: 22px;
  /* margin-bottom: 24px; */
}
</style>