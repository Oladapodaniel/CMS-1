<template>
    <div class="container px-0">
        <div class="row">
            <div class="col-md-12 my-3">
                <Dropdown :options="['Add the person to', 'Remove the person from']" placeholder="Add the person to" class="w-100" />
            </div>

            <div class="col-md-12 my-3">
                <Dropdown :options="['Workers', 'Choir']" class="w-100" />
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from "primevue/dropdown";

export default {
    components: { Dropdown },

    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>