<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <p class="text-center" style="font-size:28px">{{ header ? header : 'Giving - Amount' }}</p>
                <p class="text-center" v-if="description && description.id === 1">A member of <span class="text-success">{{ description.groups.join('or') }}</span> gives <span class="text-success">{{ description.range }}</span> <span class="text-success">N{{ description.amount }}</span> to <span class="text-success">{{ description.category }}</span> category in <span class="text-success">{{ description.time.toLowerCase() }}</span></p>
                <p class="text-center" v-if="description && description.id === 11">A member of <span class="text-success">{{ description.groups.join(' ') }}</span> gives less than <span class="text-success">{{ description.prevTimes }}</span> per month for <span class="text-success">{{ description.prevMonths }}</span> to <span class="text-success">{{ description.category }}</span> category and then gives at least <span class="text-success">{{ description.currentTimes }} per month for <span class="text-success">{{ description.currentMonths }}</span></span></p>
                
                <p class="text-center" v-if="description && description.id === 5">
                    <span v-if="description && description.selectedGroups.length === 0">A member whose <span class="text-success">birthday</span> is the <span class="text-success">current day</span></span>
                    <span v-else>A member who is in <span class="text-success">{{ description.selectedGroups.join('or') }}</span> whose <span class="text-success">birthday</span> is the <span class="text-success">current day</span></span>
                </p>
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