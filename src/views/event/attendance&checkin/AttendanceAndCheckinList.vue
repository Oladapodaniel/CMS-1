
<template>
  <div class="mt-4">

    <!-- table area -->
    <div class="mx-0 t-border small-text">
      <div
        class="d-none d-md-flex table-header font-weight-700 justify-content-between"
      >
      <div class="col-md-3 dcreated">
          <p style="font-size:14px">Date</p>
        </div>

        <div class="col-md-4 alist">
          <p style="font-size:14px">Event Name</p>
        </div>
        
        <div class="col-md-3 tattendance">
          <p style="font-size:14px">Group Name</p>
        </div>
        <div class="col-md-2"></div>
      </div>

      <!--end of table header area -->

      <!-- table body starts here -->
      <!-- <hr class="mt-n4" /> -->
      <!-- table body starts here -->

      <div class="row font-weight-700 justify-content-between small-text tr-border-bottom mx-1" v-for="(item, index) in list" :key="index">
         <div class="col-md-3">
          <p class="d-flex justify-content-between mb-0">
            <span class="d-flex d-md-none tattendance2">Date Created</span>
            <span class="edate edate2">
              <router-link class="text-decoration-none font-weight-500" :to="{name: 'CheckinType', query: { activityID: item.eventID, activityName: item.fullEventName, groupId: item.groupID, groupName: item.fullGroupName, id: item.id, code: item.attendanceCode } }">
                {{ formatDate(item.eventDate) }}
              </router-link>
            </span>
          </p>
        </div>

        <div class="col-md-4">
          <p class="d-flex ml-2 justify-content-between mb-0">
            <span class="d-flex d-md-none alist2">Event Name</span>
            <span class="elist elist2">
              <router-link class="text-decoration-none font-weight-500" :to="{name: 'CheckinType', query: { activityID: item.eventID, activityName: item.fullEventName, groupId: item.groupID, groupName: item.fullGroupName, id: item.id, code: item.attendanceCode } }">
                {{ item.fullEventName }}
              </router-link>
            </span>
          </p>
        </div>
       
        <div class="col-md-3">
          <p class="d-flex justify-content-between mb-0">
            <span class="d-flex d-md-none dcreated2">Group Name</span>
            <span class="eattendance eattendance2">
              <router-link class="text-decoration-none font-weight-500" :to="{name: 'CheckinType', query: { activityID: item.eventID, activityName: item.fullEventName, groupId: item.groupID, groupName: item.fullGroupName, id: item.id, code: item.attendanceCode } }">
                {{ item.fullGroupName }}
              </router-link>
            </span>
          </p>
        </div>
        <div class="col-md-2" @click="toggleEllips">
          <i
            class="d-flex justify-content-end fas fa-ellipsis-v ion ion2 c-pointer"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></i>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item elipsis-items"> <router-link class="text-decoration-none text-dark" :to="{ name: 'AttendanceReport', params: { id: item.id }}">View Details</router-link> </a>
            <a class="dropdown-item elipsis-items"> <router-link class="text-decoration-none text-dark" :to="{name: 'CheckinType', query: { activityID: item.eventID, activityName: item.fullEventName, groupId: item.groupID, groupName: item.fullGroupName, id: item.id, code: item.attendanceCode } }">Checkin</router-link>  </a>
            <a
              class="dropdown-item elipsis-items"
              href="#"
              @click.prevent="showConfirmModal(person.id, index)"
              >Delete</a
            >
          </div>
        </div>
      </div>

      <div class="row" v-if="errorOccurred">
        <div class="col-md-12 text-center">
          <p>Error getting items</p>
        </div>
      </div>
    </div>
    <!-- end of table area -->
  </div>
</template>

<script>
import { ref } from "vue";
import dateFormatter from '../../../services/dates/dateformatter';

export default {
  props: [ "list", "errorOccurred" ],

  setup(props) {
    const expose = ref(false);

    const toggleEllips = () => {
      toggleEllips.value = !toggleEllips.value;
    };

    const formatDate = (date) => {
      return dateFormatter.normalDate(date);
    }
    console.log(props.errorOccurred, "error cooo");

    return {
      expose,
      toggleEllips,
      formatDate,
    };
  },
};
</script>

<style scoped>
* {
  /* font-size: 62.5%; */
}

.table {
  border-radius: 0.5rem;
}

.table-header {
  border-radius: 0.5rem 0.5rem 0 0;
}

.page-header {
  font-family: Nunito sans;
  font-size: 22px;
  font-weight: 800;
  color: #212529;
}

.head-button {
  display: flex;
  justify-content: flex-end;
}

.add-btn {
  width: 180px;
  background: #136acd;
  border-radius: 22px;
  color: #ffffff;
  font-weight: bold;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  text-decoration: none;
}

.dcreated,
.tattendance,
.alist {
  font-weight: 700;
  color: #212529;
}

.dropdown-item {
  font-weight: 600;
  color: #212529;
  cursor: pointer;
}

.dcreated2,
.tattendance2,
.alist2 {
  font-weight: 700;
  color: #212529;
  margin: 0.8rem 0.8rem;
}

.elist,
.eattendance,
.edate {
  font-weight: 500;
  color: #212529;
}

.elist2,
.eattendance2,
.edate2 {
  color: #212529;
  margin: 0.8rem 0.8rem;
}

.ion {
  font-weight: 600;
  display: flex;
  justify-content: start;
}

.ion2 {
  font-weight: 600;
  display: flex;
  justify-content: end;
  margin: 0.8rem 0.8rem;
}

.hr {
  margin-top: -2rem;
}

/* background: #0f529f; */

@media (max-width: 414px) {
  .head-button {
    flex-direction: column;
    align-items: center;
  }

  .page-header {
    font-family: Nunito sans;
    font-size: 22px;
    font-weight: 800;
    color: #212529;
    text-align: center;
    margin-top: 1.2rem;
    margin-bottom: -0.8rem;
  }

  .add-btn {
    width: 180px;
    background: #136acd;
    border-radius: 20px;
    color: #ffffff;
    font-weight: bold;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    text-decoration: none;
    margin-top: 1rem;
  }

  .table-header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: left;
    justify-items: left;
  }
}

@media (max-width: 575px) {
  .head-button {
    flex-direction: column;
    align-items: center;
  }

  .page-header {
    font-family: Nunito sans;
    font-size: 22px;
    font-weight: 800;
    color: #212529;
    text-align: center;
    margin-top: 1.2rem;
    margin-bottom: -0.8rem;
  }

  .add-btn {
    width: 180px;
    background: #136acd;
    border-radius: 20px;
    color: #ffffff;
    font-weight: bold;
    font-size: 0.8rem;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    text-decoration: none;
    margin-top: 1rem;
  }

  .head-button {
    display: flex;
    /* flex-direction: row; */
    /* align-items: center; */
    justify-content: center;
  }
}
</style>