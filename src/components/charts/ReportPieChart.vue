<template>
    <div class="con">
        <div :id="domId"  class="chart summary-chart" style="height: 100%"></div>
        <!-- <div id="contain"  style="height: 100%"></div> -->
    </div>
</template>

<script>

import { ref } from "vue";
// import Highchart from "highcharts";

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
  ],
    setup(props) {
        const chart = ref(null);
        const getSummary = ref([]);

        //  console.log(props);
         
//     var highchartOptions = {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie',
//         renderTo:'domId',
//         height: 250,
//     },
//     title: {
//         text: 'Browser market shares in January, 2018'
//     },
//     tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     accessibility: {
//         point: {
//             valueSuffix: '%'
//         }
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: false
//             },
//             showInLegend: true
//         }
//     },
//     series: [{
//         name: 'Brands',
//         colorByPoint: true,
//         data: [{
//             name: 'Chrome',
//             y: 61.41,
//             sliced: true,
//             selected: true
//         }, {
//             name: 'Internet Explorer',
//             y: 11.84
//         }, {
//             name: 'Firefox',
//             y: 10.85
//         }, {
//             name: 'Edge',
//             y: 4.67
//         }, {
//             name: 'Safari',
//             y: 4.18
//         }, {
//             name: 'Other',
//             y: 7.05
//         }]
//     }],
//     series: [{
//         name: 'Share',
//         data: getSummary.value
//     }]
// };
//   chart.value = new Highcharts.chart(highchartOptions);


        return {
            chart,
            getSummary
        }
    }
}
</script>

<style scoped>
 
</style>