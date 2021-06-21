<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <p class="text-center" style="font-size:28px">{{ header ? header : 'Giving - Amount' }}</p>
                <p class="text-center" v-if="description && description.id === 1">A member of <span class="text-success">{{ description.groups.join(' ') }}</span> gives <span class="text-success">{{ description.range }}</span> <span class="text-success">N{{ description.amount }}</span> to <span class="text-success">{{ description.category }}</span> category in <span class="text-success">{{ description.time.toLowerCase() }}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'header', 'description' ],

    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>