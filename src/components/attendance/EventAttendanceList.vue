<template>
    <div class="container-fluid">
        <div class="row">
            <DataRow :isKioskMode="isKiosk" v-for="(person, index) in listOfPeople" :key="index" :person="person" @togglecheckout="toggleCheckout" @togglecheckin="toggleCheckin" />
        </div>

        <div class="row pb-4" v-if="listOfPeople.length === 0" >
          <div class="col-md-12 text-center">
            <p class="my-2">No records found</p>
          </div>
          <div class="col-md-12 d-flex justify-content-center mt-4">
            <button
              class="default-btn primary-bg border-0 text-white"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Add member
            </button>
          </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import DataRow from "./MarkAttendanceRow";
import attendanceservice from '../../services/attendance/attendanceservice';
    
    export default {
        props: [ "isKiosk", "searchText", "fetchUsers" ],
        components: { DataRow },
        async setup(props, { emit }) {
            const route = useRoute();
            const people = ref([ ])
            const response = await attendanceservice.getReport(route.query.id);
            people.value = response ? response.peopoleAttendancesDTOs : [ ];
            
            const listOfPeople = computed(() => {
                if (props.fetchUsers === true) {
                    attendanceservice.getReport(route.query.id)
                    .then(res => {
                        console.log(res, "in computed");
                        people.value = res.peopoleAttendancesDTOs;
                        emit("refreshed")
                    })
                    .catch(err => console.log(err));
                }
                if (!props.searchText) return people.value;
                return people.value.filter(i => i.name.toLowerCase().includes(props.searchText.toLowerCase()))
            })

            const toggleCheckin = data => {
                const userIndex = people.value.findIndex(i => i.id === data.id);
                if (userIndex >= 0) {
                    people.value[userIndex].isPresent = data.value;
                }
                
            }

            const toggleCheckout = data => {
                const userIndex = people.value.findIndex(i => i.id === data.id);
                if (userIndex >= 0) {
                    people.value[userIndex].isCheckedOut = data.value;
                }
                
                attendanceservice.getReport(route.query.id)
                    .then(res => {
                        people.value = res.peopoleAttendancesDTOs;
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                
            }

            return {
                people,
                listOfPeople,
                toggleCheckin,
                toggleCheckout,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>