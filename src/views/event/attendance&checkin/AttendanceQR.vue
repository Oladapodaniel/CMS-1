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
    import { useRoute } from "vue-router";
import attendanceservice from '../../../services/attendance/attendanceservice';
import { computed, ref } from 'vue';
    export default {
        setup() {
            const store = useStore();
            const route = useRoute();

            const attendanceData = ref(store.getters["attendance/attendanceItemData"]);
            const qrCode = computed(() => attendanceData.value && attendanceData.value.qrCode ? attendanceData.value.qrCode : "")

            const getAttendanceByCode = async () => {
                try {
                    const response = await attendanceservice.getItemByCode(route.query.id);
                    attendanceData.value = response;
                } catch (error) {
                    console.log(error);
                }
            }

            if (!attendanceData.value || !attendanceData.value.qrCode) getAttendanceByCode();

            return {
                qrCode,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>