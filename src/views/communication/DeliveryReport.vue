<template>
    <div>
        <div class="container">
            <div class="row mt-3 mb-4">
                <div class="col-md-12">
                    <router-link to="" class="d-flex">
                        <span class="mr-2"><i class="fa fa-arrow-left back-icon"></i></span>
                        <span>  Back</span>
                    </router-link>
                </div>
            </div>

            <div class="row grey-border py-2">
                <div class="col-md-4">
                    <div class="row my-3">
                        <div class="col-md-12 d-flex flex-column">
                            <span>Status</span>
                            <span class="status">Unfinished</span>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-12 d-flex flex-column">
                            <span class="font-weight-bold units-used">102111</span>
                            <span class="units-text">SMS UNIT USED</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <ReportChart domId="reportChart" title="" />
                </div>
                <div class="col-md-4">
                    <ReportChart domId="reportBarChart" title="" />
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-md-12">
                    <div class="row theader light-grey-bg py-2">
                        <div class="col-md-3">
                            <span>RECIPIENT NAME</span>
                        </div>
                        <div class="col-md-3">
                            <span>RECIPIENT NUMBER</span>
                        </div>
                        <div class="col-md-3">
                            <span>DELIVERY STATUS</span>
                        </div>
                        <div class="col-md-3">
                            <span>DATE & TIME</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <hr class="hr mt-0">
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-3">
                            <span class="hidden-header">RECIPIENT NAME</span>
                            <span>Name</span>
                        </div>
                        <div class="col-md-3">
                            <span class="hidden-header">RECIPIENT NUMBER</span>
                            <span>Name</span>
                        </div>
                        <div class="col-md-3">
                            <span class="hidden-header">DELIVERY STATUS</span>
                            <span>Name</span>
                        </div>
                        <div class="col-md-3">
                            <span class="hidden-header">DATE & TIME</span>
                            <span>Name</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <hr class="hr">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ReportChart from "@/components/charts/BarChart.vue";

    export default {
        components: { ReportChart }
    }
</script>

<style scoped>
    .back-icon {
        background: grey;
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    .status {
        background: grey;
        height: 30px;
        width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 22px 0 0 22px;
    }

    .units-used {
        font-size: 30px;
    }

    .units-text {
        color: #0F529F;
        font-weight: 700;
    }

    .hidden-header {
        display: none;
    }
</style>