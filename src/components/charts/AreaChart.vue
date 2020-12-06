<template>
  <div>
    <div :id="domId" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Highcharts from "highcharts";

export default {
  props: [ "elemId", "domId" ],
  setup(props) {
    const chart = ref(null);
    onMounted(() => {
        console.log(props.elemId);
      let highchartsOptions = {
        chart: {
          type: "area",
          renderTo: props.domId,
        },
        xAxis: {
          categories: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          tickInterval: 1,
          labels: {
            // enabled: true,
          },
        },

        yAxis: {
            labels: {
                enabled: false
            }
        },

        series: [
          {
            name: "ser1",
            data: [29.9, 71.5, 106.4, 23, 34, 24, 56, 12, 23, 32, 45, 38],
          },
        ],
      };
      chart.value = new Highcharts.chart(highchartsOptions);
    });
  },
};
</script>

<style scoped>
</style>