<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6 pl-md-0">
                        <label for="name">Name</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-md-6 pr-md-0">
                        <label for="name">Description</label>
                        <textarea name="" id="" class="w-100" rows="2" 
                            style="border-color: #ced4da"
                        ></textarea>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class=" border" style="height: 400px" :class="{ 'col-md-4': !showTriggers, 'col-md-2': showTriggers && selectedTriggers.length > 0 }">
                                <div class="row">
                                    <div class="col-md-12" v-for="(trigger, index) in selectedTriggers" :key="index">
                                        {{ trigger.name }}
                                    </div>
                                </div>
                                <div class="row h-100" >
                                    <div class="col-md-12 trigger-btn-con" :class="{ 'trigger-btn-con-height': showTriggers }">
                                        <div class="row d-flex justify-content-around">
                                            <div class="col-md-5 card my-2" v-for="(i, j) in triggers" :key="j" @click="selectTrigger(i)">
                                                <div class="row card-body">
                                                    <div class="col-md-12 text-center">
                                                        <i class="pi pi-users"></i>
                                                    </div>
                                                    <div class="col-md-12 text-center">
                                                        <h4 class="mb-0">{{ i.name }}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-5 my-2">
                                                <div class="row bottom-space my-3">
                                                    
                                                </div>
                                            </div>
                                            <div class="col-md-5 bottom-space my-2">
                                                <div class="row my-3">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 trigger-btn-div">
                                        <button class="btn btn-secondary w-100 trigger-btn"
                                            @click="toggleTriggers">
                                            Add a trigger
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8 border" style="height: 400px">
                                <h1>Bigger</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup () {
        const showTriggers = ref(false);
        // const triggersIsVissible = ref(false);
        const triggers = [
            {
                name: "Group"
            },
            {
                name: "Giving"
            },
            {
                name: "Trigger 3"
            },
            {
                name: "Trigger 4"
            },
            {
                name: "Trigger 5"
            },
            {
                name: "Trigger 6"
            }
        ]

        const selectedTriggers = ref([ ]);

        const toggleTriggers = () => {
            showTriggers.value = !showTriggers.value;
        }

        const checkIfAlreadySelected = trigger => {
            const index = selectedTriggers.value.findIndex(t => t.name === trigger.name);
            return index >= 0 ? true : false;
        }

        console.log(window.innerHeight, "Inner Height");
        const selectTrigger = (trigger) => {
            if (!checkIfAlreadySelected(trigger)) {
                selectedTriggers.value.push(trigger)
            }
            showTriggers.value = false
        }

        return {
            showTriggers,
            // triggersIsVissible,
            toggleTriggers,
            triggers,
            selectedTriggers,
            selectTrigger,
        }
    }
}
</script>

<style scoped>
    .trigger-btn-con {
        position: absolute;
        bottom: 0;
        width: 100%;
        /* background-color: #ddd; */
        transition: all .5s ease-in-out;
        height: 0;
        overflow: hidden;
    }

    .trigger-btn-con-height {
        transition: all .5s ease-in-out;
        height: calc(100% - 0px);
        overflow: scroll;
        background: #00000008;
    }

    .trigger-btn {
        position: absolute;
        bottom: 0;
        width: 190px !important;
        max-width: 100% !important;
    }

    .trigger-btn-div {
        position: absolute;
        bottom: 0;
        max-width: 100% !important;
    }
</style>