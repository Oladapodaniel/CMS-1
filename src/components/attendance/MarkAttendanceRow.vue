<template>
  <div class="container-fluid">
    <div class="row over-con">
      <div class="col-md-12">
        <div class="row py-2 tb-row" :class="{ 'kiosk-tb-size': isKioskMode }">
          <div class="col-md-5" :class="{ 'order-3': isKioskMode }">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700">Name</span>
              <span
                ><a
                  >{{ person.name }}</a
                ></span
              >
            </span>
          </div>
          <div class="col-md-3" :class="{ 'order-4': isKioskMode }">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700"
                >Phone Number</span
              >
              <span>{{ person.phone }}</span>
            </span>
          </div>
          <div class="col-md-2" :class="{ 'order-1': isKioskMode }">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700">Check-in</span>
              <span>
                <!-- <Checkbox
                  id="binary"
                  :value="person.isPresent"
                  @change="checkin"
                  :binary="true"
                /> -->
                <input type="checkbox" name="" class="custom-checkbox" :checked="person.isPresent" id=""
                  @change="checkin($event, 1)"
                >
              </span>
            </span>
          </div>
          <div
            class="col-md-2 d-none"
            :class="{ 'order-1 d-flex': isKioskMode }"
          >
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700">Picture</span>
              <span
                style="
                  width: 35px;
                  height: 35px;
                  border: 1px solid;
                  border-radius: 50%;
                "
              ></span>
            </span>
          </div>
          <div class="col-md-2" :class="{ 'd-none': isKioskMode }">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700">Check-out</span>
              <span>
                <!-- <Checkbox
                  id="binary"
                  :value="person.isCheckedOut"
                  :binary="true"/> -->
                  <input type="checkbox" name="" class="custom-checkbox" id="" :checked="person.isCheckedOut" @change="checkin($event, 2)">
                  </span>
            </span>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <Dialog
              header="Print Tag"
              v-model:visible="display"
              :style="{ width: '70vw', maxWidth: '600px' }"
              :modal="true"
              position="top"
            >
              <div class="row">
                <div class="col-md-12">
                  <MemberTag />
                </div>
              </div>
            </Dialog>
            <Toast />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import MemberTag from "../../views/event/attendance&checkin/AttendanceTag";
import attendanceservice from '../../services/attendance/attendanceservice';
import { useToast } from 'primevue/usetoast';


export default {
  props: [ "isKioskMode", "person" ],
  components: { MemberTag },
  setup(props, { emit }) {
    const checkedIn = ref(false);
    const checkedOut = ref(false);
    const display = ref(false);
    const toast = useToast();

    const checkin = async (e, option) => {

      console.log(e.target.checked, "checked in");
      let response = { };
      if (option === 1) {
        response = await attendanceservice.checkin({ checkInAttendanceID: props.person.attendanceID, personAttendanceID: props.person.id })
        if (!response) {
          toast.add({severity:'error', summary:'Checkin Error', detail:'Checkin was not successful', life: 3000});
          emit("togglecheckin", { value: props.person.isPresent, id: props.person.id })
        } else {
          emit("togglecheckin", { value: !props.person.isPresent, id: props.person.id })
          toast.add({severity:`${e.target.checked ? 'success' : 'info'}`, summary:'Check Successful', detail:`Member marked ${e.target.checked ? "present" : "absent"}`, life: 3000});
        }
      } else {
        response = await attendanceservice.checkout({ checkInAttendanceID: props.person.attendanceID, personAttendanceID: props.person.id })
        if (!response) {
          
          toast.add({severity:'error', summary:'Checkin Error', detail:'Checkin was not successful', life: 3000});
          emit("togglecheckout", { value: props.person.isCheckedOut, id: props.person.id })
        } else {
          emit("togglecheckout", { value: !props.person.isCheckedOut, id: props.person.id })
          toast.add({severity:`${e.target.checked ? 'success' : 'info'}`, summary:'Checkin Successful', detail:`Member has ${e.target.checked ? "checked out" : "not checked out"}`, life: 3000});
        }
      }
      console.log(response, "rrr");
      
    };

    const checkout = () => {
      console.log(checkedOut.value, "checked in");
    };

    return {
      checkedIn,
      checkin,
      checkedOut,
      checkout,
      display,
    };
  },
};
</script>

<style scoped>
* {
  color: #02172e;
  /* font-family: Nunito Sans !important; */
}

.hide {
  display: none !important;
}

@media screen and (max-width: 767px) {
  .main-th {
    display: none;
  }

  .hide {
    display: flex !important;
  }
}

.search-control {
  width: calc(100% - 30px);
  padding: 0.38rem;
  border: none;
  background: transparent;
  outline: transparent;
}

.search-span {
  background: #f5f8f9;
  border-radius: 200px;
  width: 100%;
}

.kiosk-mode {
  background: #dde2e6;
  border-radius: 20px;
  border: transparent;
}

.main-th {
  background: #f5f8f9;
  border: 1px solid #4762f01f;
}

.tb-row {
  border-bottom: 1px solid #4762f01f;
}

.over-con {
  border: 1px solid #4762f01f;
}

.kiosk-th-size {
  font-size: 20px;
}

.kiosk-tb-size {
  font-size: 18px;
}

.modal-lg {
  max-width: 600px;
}

.custom-checkbox {
  border: 2px solid red !important;
  background: #ffffff;
  width: 20px;
  height: 20px;
  color: #495057;
  border-radius: 3px;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
</style>