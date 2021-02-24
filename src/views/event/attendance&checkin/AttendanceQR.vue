<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 offset-lg-2 d-flex align-items-center shadow-lg" style="height:calc(100vh - 65px)">
                <div class="img-wrapper w-100 ml-auto">
                    <img v-if="qrCode" :src="qrCode" alt="" class="image-wrapper w-100">
                    <img v-else src="../../../assets/can-do.svg" alt="" class="image-wrapper w-100">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useStore } from "vuex";
import attendanceservice from '../../../services/attendance/attendanceservice';
    export default {
        setup() {
            const store = useStore();

            const attendanceData = store.getters["attendance/attendanceItemData"];
            const qrCode = attendanceData ? attendanceData.qrCode : "";

            const getAttendanceByCode = async () => {
                console.log("calling");
                try {
                    const response = await attendanceservice.getItemByCode(44);
                    console.log(response, "By code");
                } catch (error) {
                    console.log(error);
                }
            }

            if (!attendanceData || !attendanceData.qrCode) getAttendanceByCode();

            return {
                qrCode,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>