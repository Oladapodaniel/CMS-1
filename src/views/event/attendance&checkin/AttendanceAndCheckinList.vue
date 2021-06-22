
<template>
  <div class="mt-4 parent-element" style=" border-radius: 30px;">

    <!-- table area -->
    <div class="container-fluid small-text">
      <div
        class="row table-header font-weight-700 "
      >

        <div class="col-md-4">
          Event  Name
          <!-- <p style="font-size:14px">Event Name</p> -->
        </div>

        <div class="col-md-4">
          <!-- <p style="font-size:14px">Date</p> -->
          Date
        </div>

        <div class="col-md-3">
          <!-- <p style="font-size:14px">Group Name</p> -->
          Group Name
        </div>
        <div class="col-md-1"></div>
      </div>

      <!--end of table header area -->

      <!-- table body starts here -->
      <!-- <hr class="mt-n4" /> -->
      <!-- table body starts here -->

      <div class="row font-weight-500 t-body small-text tr-border-bottom align-items-center" v-for="(item, index) in list" :key="index">
        <div class="col-md-4">
          <!-- <p class=" mb-0">
            <span class="d-flex d-md-none alist2">Event Name</span>
            <span class="t elist2"> -->
              <router-link class="text-decoration-none font-weight-500" :to="{name: 'CheckinType', query: { activityID: item.eventID, activityName: item.fullEventName, groupId: item.groupID, groupName: item.fullGroupName, id: item.id, code: item.attendanceCode } }">
                {{ item.fullEventName }}
              </router-link>
            <!-- </span>
          </p> -->
        </div>

         <div class="col-md-4">
          <!-- <p class="d-flex justify-content-between mb-0">
            <span class="d-flex d-md-none tattendance2">Date Created</span>
            <span class="edate edate2"> -->
              <router-link class="text-decoration-none font-weight-500" :to="{name: 'CheckinType', query: { activityID: item.eventID, activityName: item.fullEventName, groupId: item.groupID, groupName: item.fullGroupName, id: item.id, code: item.attendanceCode } }">
                {{ formatDate(item.eventDate) }}
              </router-link>
            <!-- </span>
          </p> -->
        </div>


        <div class="col-md-3">
          <!-- <p class="d-flex justify-content-between mb-0">
            <span class="d-flex d-md-none dcreated2">Group Name</span>
            <span class="eattendance eattendance2"> -->
              <router-link class="text-decoration-none font-weight-500" :to="{name: 'CheckinType', query: { activityID: item.eventID, activityName: item.fullEventName, groupId: item.groupID, groupName: item.fullGroupName, id: item.id, code: item.attendanceCode } }">
                {{ item.fullGroupName }}
              </router-link>
            <!-- </span>
          </p> -->
        </div>
        <div class="col-md-1" @click="toggleEllips">
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
              @click.prevent="showConfirmModal(item.id, index)"
              >Delete</a
            >
          </div>
        </div>
      </div>

      <div  class="row" v-if="errorOccurred">
        <div class="col-md-12 text-center">
          <p>Error getting items</p>
        </div>
      </div>
    </div>
    <ConfirmDialog />
    <Toast />
    <!-- end of table area -->
  </div>
</template>

<script>
import { ref } from "vue";
import dateFormatter from '../../../services/dates/dateformatter';
import { useConfirm } from "primevue/useConfirm";
import { useToast } from "primevue/usetoast";
import ConfirmDialog from 'primevue/confirmdialog';
import axios from "@/gateway/backendapi";
import Toast from 'primevue/toast';

export default {
  props: [ "list", "errorOccurred" ],
  components: { ConfirmDialog, Toast },
  setup(props, { emit }) {
    let toast = useToast();
    const expose = ref(false);

    const toggleEllips = () => {
      toggleEllips.value = !toggleEllips.value;
    };

    const formatDate = (date) => {
      return dateFormatter.monthDayYear(date);
    }
    console.log(props.errorOccurred, "error cooo");

    const deleteAttendance = (id, index) => {
      axios
        .delete(`/api/CheckInAttendance/checkout?attendanceId=${id}`)
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            toast.add({
            severity: "success",
            summary: "Delete Successful",
            detail: `${res.data}`,
            life: 3000
          });
          emit('attendance-checkin', index)
          } else {
            toast.add({
            severity: "warn",
            summary: "Delete Failed",
            detail: `Please Try Again`,
            life: 3000,
          });
          }
        })
        .catch((err) => {
      //     finish()
          if (err.response) {
            console.log(err.response)
            toast.add({
              severity: "error",
              summary: "Unable to delete",
              detail: `${err.response}`,
              life: 3000,
            });
          } else if (err.response.toString().toLowerCase().includes('network error')) {
            toast.add({
              severity: "warn",
              summary: "Unable to delete",
              detail: `Please ensure you have a strong internet connection`,
              life: 3000,
            });
          }
        });
    };

    const confirm = useConfirm();

    const showConfirmModal = (id, index) => {
      confirm.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        acceptClass: "confirm-delete",
        rejectClass: "cancel-delete",
        accept: () => {
          deleteAttendance(id, index);
          // toast.add({severity:'info', summary:'Confirmed', detail:'Member Deleted', life: 3000});
        },
        reject: () => {
          toast.add({
            severity: "info",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    };

    return {
      expose,
      toggleEllips,
      formatDate,
      showConfirmModal,
      deleteAttendance
    };
  },
};
</script>

<style scoped>
.table {
  border-radius: 30px;
}

.table-header {
  padding: 10px;
  font-size: 14px;
  border-radius: 30px 30px 0 0;
  text-align: left;
  color: #000;
  font-weight: 700;

}

.t-body {
  padding: 0 10px;
}

.parent-element {
  box-shadow: 0px 1px 4px #02172e45;
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