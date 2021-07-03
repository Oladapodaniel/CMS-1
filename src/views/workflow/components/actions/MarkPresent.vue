<template>
    <div class="container scroll-div">
        <div class="row">
            <div class="col-md-12 mt-4 mb-2">
                <label for="" class="mb-0 font-weight-600">Mark the Individual Present in the following Group(s):</label>
            </div>
            <div class="col-md-12">
                <MultiSelect @change="handleStatus" v-model="selectedStatus" :options="[ 'Warriors', 'Prayer', 'Choir' ]"  class="w-100"  display="chip" />
            </div>
        </div>
    </div>
</template>

<script>
import MultiSelect from "primevue/multiselect"

export default {
    components: { MultiSelect },

    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>