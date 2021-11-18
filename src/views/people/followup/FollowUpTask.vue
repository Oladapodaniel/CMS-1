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
                <div class="col-12 mt-3">
                    <Checkbox id="binary" v-model="markAsCompleted" :binary="true"/>
                    <div class="mt-1 font-weight-600">Mark as completed</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
export default {
    props: ["tasks"],
    setup () {
        const markAsCompleted = ref(false)

        return {
            markAsCompleted
        }
    }
}
</script>

<style scoped>

</style>