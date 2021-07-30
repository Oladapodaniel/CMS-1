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
import { watch } from '@vue/runtime-core';
export default {
    props: [ "selectedActionIndex", "parameters" ],
    setup (props, { emit }) {
        const data = reactive({ ActionType: 6, JSONActionParameters: { } })

        const message = ref('');
        const handleMessage = (e) => {
            data.JSONActionParameters.message = e.target.value;
            emit('updateaction', data, props.selectedActionIndex);
        }

        const parsedData = ref({ })
        watch(() => {
            if (props.parameters.Action) {
                const actn = JSON.parse(props.parameters.Action);
                parsedData.value = JSON.parse(actn.JSONActionParameters)

                message.value = parsedData.value.message;
                data.JSONActionParameters.message = parsedData.value.message;;
            } else if (props.parameters.action && props.parameters.action.jsonActionParameters) {
                parsedData.value = JSON.parse(props.parameters.action.jsonActionParameters);
                
                message.value = parsedData.value.message;
                data.JSONActionParameters.message = parsedData.value.message;;
            }
        })

        return {
            handleMessage,
            message,
        }
    }
}
</script>

<style scoped>

</style>