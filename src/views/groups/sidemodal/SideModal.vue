<template>
    <div class="container container-wide container-top">
        <div class="row">
            <div :class="{ 'show-Times' : showTimes, 'hide-Times' : !showTimes }" @click="Times"><i class="pi pi-times"></i>
                <div class="mydiv bg-secondary"> 
                    <div>SMS</div>
                    <div>EMAIL</div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    
    setup() {

        const showTimes = ref(true)
        const Times = () =>{
            showTimes.value = !showTimes.value
        }

        return {
            Times ,
            showTimes
            
        }
    },
}
</script>

<style scoped>

.hide-Times{
    display: none;
}
.show-Times{
    display: block;
}

.mydiv{
    height: 95vh;
    width: 1250px;
    border-radius: 0.5rem;
    box-shadow: 0 0.063rem 0.25rem #02172e45;
    /* border: 0.063rem solid #dde2e6; */
}

</style>