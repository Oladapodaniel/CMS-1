<template>
    <div class="table" v-for="(item, index) in tasks" :key="index">
        <div class="container">
            <div class="row p-3">
                <div class="col-6">
                    <div class="font-weight-700">Instructions</div>
                    <div>{{ item.instructions }}</div>
                </div>
                <div class="col-6">
                    <div class="font-weight-700">Due date</div>
                    <div>{{ item.dueDate }}</div>
                </div>
                <div class="col-6 mt-3">
                    <div class="font-weight-700">Priority</div>
                    <div>{{ item.priority }}</div>
                </div>
                <div class="col-6 mt-3">
                    <div class="font-weight-700">Due date</div>
                    <div>{{ item.type }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["tasks"],
    setup () {
        return {}
    }
}
</script>

<style scoped>

</style>