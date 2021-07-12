<template>
    <div class="container max-height scroll-div">

        <div class="row mt-4">
            <div class="col-md-12 px-0">
                <label for="" class="font-weight-600">Delay</label>
            </div>
            <div class="col-md-12 px-0">
                <Dropdown v-model="delay" @change="handleDelay" optionLabel="name" :options="daysOptions" class="w-100" />
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
import Dropdown from "primevue/dropdown"
import { computed } from '@vue/runtime-core';

export default {
    props: [ "selectedActionIndex" ],
    components: { Dropdown },
    setup (props, { emit }) {
        const data = reactive({ ActionType: 8, JSONActionParameters: { } })

        const delay = ref('');
        const handleDelay = (e) => {
            data.JSONActionParameters.delay = e.value.type.includes('day') ? e.value.length : e.value.type.includes('week') ? e.value.length * 7 : e.value.length * 30;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const executeTime = ref('');
        const handleExecuteTime = (e) => {
            data.JSONActionParameters.executeAt = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const daysArr = [
            { type: 'day', length: 0, name: 'Today' },
            { type: 'day', length: 1 },
            { type: 'days', length: 2 },
            { type: 'days', length: 3 },
            { type: 'days', length: 5 },
            { type: 'week', length: 1 },
            { type: 'weeks', length: 2 },
            { type: 'weeks', length: 3 },
            { type: 'month', length: 1 },
            { type: 'months', length: 2 },
            { type: 'months', length: 3 }
        ]

        const daysOptions = computed(() => {
            return daysArr.map(i => {
                i.name = i.name ? i.name : `${i.length} ${i.type}`;
                return i;
            })
        })

        return {
            delay,
            handleDelay,
            executeTime,
            handleExecuteTime,
            daysOptions,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>