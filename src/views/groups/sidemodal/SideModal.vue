<template>
    <div class="container container-wide container-top shadow-lg border rounded" v-if="show">
        <div class="row">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="d-flex justify-content-between">
                            <!-- <span>{{ title }}</span> -->
                            <!-- <span @click="closeModal"><i class="pi pi-times"></i></span> -->
                        </h4>
                    </div>
                </div>
                <div :class="{ 'show-Times' : show, 'hide-Times' : !show }" class="border"> 
                    <!-- <div @click="Times"></div> -->
                    <span class=" pl-2 text-center" @click="closeModal"><i class="times cursor-pointer pt-2 mt-2 rounded pi pi-times"></i></span>
                    <slot />
                </div>
            </div>
                
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    props: [ 'show', 'title' ],
    setup(props, { emit }) {

        const showTimes = ref(true)
        const Times = () =>{
            showTimes.value = !showTimes.value
        }

        const closeModal = () => {
            emit('closesidemodal')
        }

        return {
            Times ,
            showTimes,
            closeModal,
            
        }
    },
}
</script>

<style scoped>
.show-Times{
  /* display: block; */
   width: 875px;
   height: 98%;
   overflow: scroll;
   overflow-x: hidden;
   /* overflow-y: hidden; */
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9;
    background: #fff;
    box-shadow: 5px 10px 18px #888888;
    border-radius: 10px;
    transition: all .8s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hide-Times{
  /* display: none; */
   position: fixed;
   overflow: hidden;
   width: 0;
    right: -800px;
    top: -50px;
    /* z-index: 9; */
    transition: all  0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.main-container {
    background: salmon;

}
.times{
 height: 2rem;
 width: 40px;
 background-color: rgb(231, 231, 231);
}



/* .mydiv{
    height: 90vh;
    width: 1000px;
    border-radius: 0.5rem;
    box-shadow: 0 0.063rem 0.25rem #02172e45;

} */

</style>