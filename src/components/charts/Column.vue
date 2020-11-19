<template>
    <div>
        <input type="text" ref="input" @change="test">
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
    export default {
        setup() {
            const input = ref(null)

            onMounted(() => {
                console.log(input.value);
            })

            const test = () => {
                console.log(input.value);
            }

            return {
                
            }
        }
    }
</script>

<style scoped>

</style>