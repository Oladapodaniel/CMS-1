<template>
    <div class="container max-height scroll-div">

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Delay</label>
            </div>
            <div class="col-md-12 px-0">
                <input type="text" class="form-control" v-model.number="delay" @input="handleDelay">
            </div>
        </div>

        <div class="row mt-4 mb-5">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Execute Time</label>
            </div>
            <div class="col-md-12 px-0">
                <input type="datetime-local" class="form-control" v-model="executeTime" @change="handleExecuteTime">
            </div>
        </div>

    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';

export default {
    props: [ "selectedActionIndex" ],
    setup (props, { emit }) {
        const data = reactive({ ActionType: 8, JSONActionParameters: { } })

        const delay = ref('');
        const handleDelay = (e) => {
            data.JSONActionParameters.delay = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const executeTime = ref('');
        const handleExecuteTime = (e) => {
            data.JSONActionParameters.executeAt = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        return {
            delay,
            handleDelay,
            executeTime,
            handleExecuteTime
        }
    }
}
</script>

<style lang="scss" scoped>

</style>