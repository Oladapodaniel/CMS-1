<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <p class="text-center" style="font-size:28px">{{ header ? header : 'Giving - Amount' }}</p>
                <p class="text-center">A member gives <span class="text-success">></span> <span class="text-success">$100</span> to <span class="text-success">any category</span> in one gift</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'header' ],

    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>