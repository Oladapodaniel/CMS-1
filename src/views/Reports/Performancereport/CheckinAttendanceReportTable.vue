<template>
    <div class="col-sm-12 p-0 scroll-table">
                <table class="table table-hover" style="border-radius: 0" id="table">
                    <thead>
                        <tr class="table-row-bg font-weight-bold">
                            <th class="">Name</th>
                            <th class="">Gender</th>
                            <th class="">Phone</th>
                            <th class=" rotate-text" v-for="(item, index) in groupedReportByDate" :key="index">{{ formatDate(item.value[0].activityDate) }}</th>
                            <th class=" rotate-text">Total Absent</th>
                            <th class=" rotate-text">Total Present</th>
                            <th class=" rotate-text">Percentages</th>
                        </tr>
                    </thead>
                    <tbody class="small-text font-weight-bold text-nowrap">
                        <tr v-for="(item, index) in groupedReport" :key="index">
                            <td>{{ item.value[0].name }}</td>
                            <td>{{ item.value[0].gender }}</td>
                            <td>{{ item.value[0].phone }}</td>
                            <td v-for="(itemm, index) in groupedReportByDate" :key='index'>{{ itemm.value.find(i => i.personId === item.value[0].personId) ? itemm.value.find(i => i.personId === item.value[0].personId).attendance : "" }}</td>
                            <td class="text-danger"> {{ attendance(item.value[0].personId, 1) }}</td>
                            <td class="text-success">{{ attendance(item.value[0].personId, 2) }}</td>
                            <td>{{ attendance(item.value[0].personId, 3) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
</template>

<script>
import { ref, watchEffect } from "vue"
import PaginationButtons from "../../../components/pagination/PaginationButtons.vue";
import dateFormatter from '../../../services/dates/dateformatter';
// import { find } from 'highcharts';
export default {
    props: ['groupedReport', 'groupedReportByDate'],
    emits: ['data-to-export', 'data-header-to-export'],
    components: {
        PaginationButtons
    },
    setup(props, { emit }) {
        const searchText = ref("")
        const searchIsVisible = ref(false);
        const filterFormIsVissible = ref(false);
        const filterGroupReport = ref([])

        const toggleSearch = () => {
            searchIsVisible.value = !searchIsVisible.value;
        };

        const toggleFilterFormVissibility = () => {
            filterFormIsVissible.value = !filterFormIsVissible.value;
        };

        const attendance = (personId, type) => {
            let attendance = []
            let absentee = []
            let presentee = []
            props.groupedReportByDate.forEach(i => {
                let findAbsentee = i.value.find(i => {
                    if (i.personId === personId) {
                        return i
                    }
                })
                attendance.push(findAbsentee)
            })
            let filteredAttendance = attendance.filter(i => i !== undefined)
            filteredAttendance.forEach(i => {
                if (i.attendance === "--") {
                    absentee.push(i)
                }   else {
                    presentee.push(i)
                }
            })
            let percentage = +presentee.length/+filteredAttendance.length * 100
            console.log(percentage)
            if (type === 1) return absentee.length
            if (type === 2) return presentee.length
            if (type === 3) return percentage.toString().includes(".") ? percentage.toFixed(2) + '%' : percentage + '%'
        }

        const formatDate = (date) => {
            return dateFormatter.monthDayYear(date)
        }

        const attendanceGrouped = (array, key) => {
            let result = array.reduce((result, currentValue) => {
                // If an array already present for key, push it to the array. Else create an array and push the object
                (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
                );
                // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
                return result;
            }, {}); // empty object is the initial value for result object
            let attendanceGroup = []
            for (const prop in result) {
                attendanceGroup.push({
                name: prop,
                value: result[prop]
                })
            }
            console.log(attendanceGroup)
            return attendanceGroup
        };

        const tableHeaderToJson = () => {
            // let _htmlToJSON = function(){
                // let _tr = _table.getElementsByTagName("tr")[index];
                let _th = document.getElementsByTagName("th");
                let _arr = [].map.call( _th, function( th ) {
                    return th.innerHTML;
                }).join( '|' );
                let _data = _arr.split("|");
                console.log(_data)
                console.log("html to JSON", _data);
                emit('data-header-to-export', _data)          
            // };
                // _htmlToJSON();
        }


        const tableToJson = () => {
            let _table = document.getElementById("table");
            let _trLength = _table.getElementsByTagName("tr").length;
            let _jsonData = [];
            let _obj = {};

            let _htmlToJSON = function(index){
                let _tr = _table.getElementsByTagName("tr")[index];
                let _td = _tr.getElementsByTagName("td");
                let _arr = [].map.call( _td, function( td ) {
                    return td.innerHTML;
                }).join( '|' );
                let _data = _arr.split("|");
                // console.log(_data)
                
                _obj = Object.assign({}, _data)
                
                _jsonData.push(_obj);
                
            };
            for(var i = 1; i < _trLength; i++){
                _htmlToJSON(i);
            }
            console.log("html to JSON",_jsonData);
            emit('data-to-export', _jsonData)
        }

        watchEffect(() => {
            if (props.groupedReport.length > 0) {
                    setTimeout(() => {
                        tableHeaderToJson()
                        tableToJson()
                    }, 1000)
            }
        })


        

        return {
            searchIsVisible,
            toggleSearch,
            searchText,
            filterFormIsVissible,
            toggleFilterFormVissibility,
            filterGroupReport,
            formatDate,
            attendanceGrouped,
            attendance
         
        }
    }
}
</script>

<style scoped>
.rotate-text {
text-orientation: mixed;
  writing-mode: vertical-rl; 

}

.table-row-bg {
    background: #ebeff4
}

.scroll-table {
    overflow-x: scroll;
}

.table thead th:nth-child(1), .table thead th:nth-child(2), .table thead th:nth-child(3) {
    vertical-align: middle;
    border-bottom: 2px solid #dee2e6;
}
</style>