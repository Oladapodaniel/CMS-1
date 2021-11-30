<template>
    <div  class="container-fluid">
        <div class="con">
            <div id="domId" ref="chart" class="chart"></div>
        </div>
       
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Highcharts from "highcharts";

import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsOrganization from "highcharts/modules/organization";
import HighchartsExporting from "highcharts/modules/exporting";



export default {
    props: ["domId" ],

    setup(props) {
        const chart = ref(null);

         onMounted(() =>{
            HighchartsSankey(Highcharts);
            HighchartsOrganization(Highcharts);
            HighchartsExporting(Highcharts);

           Highcharts.chart(domId, {
    chart: {
        height: 800,
        inverted: true
    },

    title: {
        text: 'Highcharts Org Chart'
    },

    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var nodeName = point.toNode.name,
                    nodeId = point.toNode.id,
                    nodeDesc = nodeName === nodeId ? nodeName : nodeName + ', ' + nodeId,
                    parentDesc = point.fromNode.id;
                return point.index + '. ' + nodeDesc + ', reports to ' + parentDesc + '.';
            }
        }
    },

    series: [{
        type: 'organization',
        name: 'Highsoft',
        fontSize: '10px',
        keys: ['from', 'to'],
        data: [
            ['Shareholders', 'Board'],
            ['Board', 'CEO'],
            ['CEO', 'CTO'],
            ['CEO', 'CPO'],
            ['CEO', 'CSO'],
            ['CEO', 'HR'],
            ['CTO', 'Product'],
            ['CTO', 'Web'],
            ['CSO', 'Sales'],
            ['HR', 'Market'],
            ['CSO', 'Market'],
            ['HR', 'Market'],
            ['CTO', 'Market']
        ],
        levels: [{
            level: 0,
            color: 'silver',
            fontSize: '10px',
            dataLabels: {
                 style: {
                    fontSize: '10px'
                        },
                color: 'black',
            },
            height: 20
        }, {
            level: 1,
            color: 'silver',
            dataLabels: {
                color: 'black',
                 style: {
                    fontSize: '10px'
                        }
            },
            height: 20
        }, {
            level: 2,
            color: '#980104'
        }, {
            level: 4,
            color: '#359154'
        }],
        nodes: [{
            id: 'Shareholders'
        }, {
            id: 'Board'
        }, {
            id: 'CEO',
            title: 'CEO',
            name: 'Grethe Hjetland',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131126/Highsoft_03862_.jpg'
        }, {
            id: 'HR',
            title: 'HR/CFO',
            name: 'Anne Jorunn Fjærestad',
            color: '#007ad0',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131210/Highsoft_04045_.jpg'
        }, {
            id: 'CTO',
            title: 'CTO',
            name: 'Christer Vasseng',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131120/Highsoft_04074_.jpg'
        }, {
            id: 'CPO',
            title: 'CPO',
            name: 'Torstein Hønsi',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg'
        }, {
            id: 'CSO',
            title: 'CSO',
            name: 'Anita Nesse',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131156/Highsoft_03834_.jpg'
        }, {
            id: 'Product',
            name: 'Product developers'
        }, {
            id: 'Web',
            name: 'Web devs, sys admin'
        }, {
            id: 'Sales',
            name: 'Sales team'
        }, {
            id: 'Market',
            name: 'Marketing team',
            column: 5
        }],
        colorByPoint: false,
        color: '#007ad0',
        dataLabels: {
            color: 'white',
             style: {
                        fontSize: '10px'
                    }
        },
        borderColor: 'white',
        nodeWidth: 65
    }],
    tooltip: {
        outside: true
    },
    exporting: {
        allowHTML: true,
        sourceWidth: 800,
        sourceHeight: 600
    }

});
         })
          return { chart, HighchartsOrganization }
    },
}
</script>

<style scoped>
.con {
    min-width: 300px;
    max-width: 900px;
    margin: 1em auto;
    /* border: 1px solid silver; */
}

#csv {
    display: none;
}
/* .chart{
    font-size: 10px!important;
} */


</style>