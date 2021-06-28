<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <p class="text-center" style="font-size:28px">{{ header ? header : 'Giving - Amount' }}</p>
                <p class="text-center" v-if="description && description.id === 1">A member of <span class="text-success">{{ description.groups.join('or') }}</span> gives <span class="text-success">{{ description.range }}</span> <span class="text-success">N{{ description.amount }}</span> to <span class="text-success">{{ description.category }}</span> category in <span class="text-success">{{ description.time.toLowerCase() }}</span></p>
                <p class="text-center" v-if="description && description.id === 11">A member of <span class="text-success">{{ description.groups.join(' ') }}</span> gives less than <span class="text-success">{{ description.prevTimes }}</span> per month for <span class="text-success">{{ description.prevMonths }}</span> to <span class="text-success">{{ description.category }}</span> category and then gives at least <span class="text-success">{{ description.currentTimes }} per month for <span class="text-success">{{ description.currentMonths }}</span></span></p>
            
                <p class="text-center"
                    v-if="description && description.id === 5"
                >
                    <span>A member of </span>
                    <span class="text-success">{{ description.selectedGroups.join(', ') }}</span> group
                    <span> whose birthday is the </span>
                    <span class="text-success">current day</span>
                </p>
            
                <p class="text-center"
                    v-if="description && description.id === 10"
                >
                    <span>A member of </span>
                    <span class="text-success">{{ description.selectedGroups.join(', ') }}</span> is marked
                    <span class="text-success">{{ description.selectedStatus.join(', ') }} {{ description.numOfTimes }} </span>
                    <span>
                        {{ description.numOfTimes > 1 ? ' times ' : ' time '}}
                    </span>
                    <span class="text-success"> in the last {{ description.timesInLastWeek }} </span>
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