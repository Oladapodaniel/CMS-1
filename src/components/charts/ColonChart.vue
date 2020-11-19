<template>
  <div>
      <div class="column-chart"></div>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const chart = ref(null);

    onMounted(() => {
      var highchartsOptions = {
        chart: {
          type: "column",
          renderTo: "column-chart",
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
  },
};
</script>

<style scoped>
</style>