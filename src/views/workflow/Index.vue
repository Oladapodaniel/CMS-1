<template>
    <div class="container-fluid">
        <div class="row my-4">
            <div class="col-md-12">
                <h1>Ministry Workflows</h1>
            </div>
        </div>
        <div class="row mt-3 mb-4">
            <div class="col-md-12 py-2 w-links-con">
                <router-link to="/tenant/workflow/list" class="text-decoration-none font-weight-bold px-3 mx-2 p-2" :class="{ 'w-tab': route.path.includes('workflow/list') }">List</router-link>
                <router-link to="/tenant/workflow/add?fw=true" class="text-decoration-none font-weight-bold px-3 mx-2 p-2" :class="{ 'w-tab': route.path.includes('workflow/add') }">Add</router-link>
                <router-link to="/tenant/workflow/log" class="text-decoration-none font-weight-bold px-3 mx-2 p-2" :class="{ 'w-tab': route.path.includes('workflow/log') }">Log</router-link>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from "vue-router";
import authMixin from "../../mixins/auth.mixins"
export default {
    mixins: [ authMixin ],
    setup () {
        const route = useRoute();

        return {
            route,
        }
    }
}
</script>

<style scoped>
    .w-tab {
        border: 1px solid #d3d4dca6;
        /* border: 1px solid #ced4da; */
        border-radius: 8px;
        border-bottom: 5px solid #fff;
    }

    .w-links-con {
        border-bottom: 1px solid #d3d4dca6;
    }

    .router-link-exact-active {
        color: #000 !important;
    }
</style>