<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3 p-0">
                <Nav />
            </div>
            <div class="col-9">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './Nav.vue'
export default {
    components: {
        Nav
    },
    setup () {
        return {}
    }
}
</script>

<style scoped>

</style>