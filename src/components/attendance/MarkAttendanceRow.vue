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
                  >name</a
                ></span
              >
            </span>
          </div>
          <div class="col-md-3" :class="{ 'order-4': isKioskMode }">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700"
                >Phone Number</span
              >
              <span>09887654434444</span>
            </span>
          </div>
          <div class="col-md-2" :class="{ 'order-1': isKioskMode }">
            <span class="d-flex justify-content-between">
              <span class="hidden-header hide font-weight-700">Check-in</span>
              <span>
                <Checkbox
                  id="binary"
                  v-model="checkedIn"
                  @change="checkin"
                  :binary="true"
                />
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
              <span
                ><Checkbox
                  id="binary"
                  v-model="checkedOut"
                  @change="checkout"
                  :binary="true"
              /></span>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import MemberTag from "../../views/event/attendance&checkin/AttendanceTag";

export default {
  props: ["isKioskMode"],
  components: { MemberTag },
  setup() {
    const checkedIn = ref(false);
    const checkedOut = ref(false);
    const display = ref(false);

    const checkin = () => {
      console.log(checkedIn.value, "checked in");
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
</style>