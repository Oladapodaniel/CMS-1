<template>
    <div class="container px-0 scroll-div">
        <div class="row">
            <div class="col-md-12">
                <label for="" class="font-weight-600">Message</label>
            </div>

            <div class="col-md-12">
                <textarea name="" id="" class="w-100" v-model="message" @change="handleMessage" rows="4"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
export default {
    props: [ "selectedActionIndex" ],
    setup (props, { emit }) {
        const data = reactive({ ActionType: 6, JSONActionParameters: { } })

        const message = ref('');
        const handleMessage = (e) => {
            data.JSONActionParameters.message = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        return {
            handleMessage,
            message,
        }
    }
}
</script>

<style scoped>

</style>