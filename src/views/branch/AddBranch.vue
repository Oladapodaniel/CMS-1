<template>
    <div class="container container-top container-wide ">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12  ">
                    <div class="heading-text"> Add branch</div>
                    <div class="row my-2 pt-4">
                        <div class="col-md-6 offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Branch name</label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="branchName" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <!-- <div class="row my-2 pt-4">
                        <div class="col-md-6 offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Email </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="Email" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="row my-2 pt-4">
                        <div class="col-md-6 offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Phone number </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="phoneNumber" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>  -->
                    <div class="row my-1 pt-4">
                        <div class="col-md-6 offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Address </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="Address" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="row my-1 pt-4">
                        <div class="col-md-6 offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Level </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <Dropdown  v-model="selectedLevel" :options="level" optionLabel="name" placeholder="Select level" class="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="heading-text"> Pastor</div> 
                    <div class="row my-1 pt-4">
                        <div class="col-md-6 offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Pastor name </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="pastorName" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="row my-1 pt-4">
                        <div class="col-md-6 offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Pastor email </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="pastorEmail" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="row my-1 pt-4">
                        <div class="col-md-6 offset-md-2">
                            <div class="row">
                                <div class="col-md-4 text-md-right align-self-center">
                                    <label for="" class="">Pastor phone </label>
                                </div>
                        
                                <div class="col-md-8">
                                    <input type="text" v-model="pastorPhone" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="row my-1 pt-4">
                        <div class="col-md-6 d-flex border justify-content-end offset-md-2">
                            <div class="col-md-5 mt-4">
                                <button class="default-btn" data-dismiss="modal">Cancel</button>
                            </div>
                            <div class="col-md-5 mt-4">
                                <button class="default-btn primary-bg border-0 text-white" data-dismiss="modal" @click="addBranch">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import Dropdown from "primevue/dropdown";
export default {
    components: {
        Dropdown
    },
    setup() {
        
         const level = ref([
            { name: "Region" },
            { name: "District" },
            { name: "Zone" },
            { name: "Area" },
            { name: "Branch" },
        ]);

        return {
          level 
        }
    },
}
</script>

<style scoped>
       .heading-text {
        font: normal normal 800 1.5rem Nunito sans;
}
</style>