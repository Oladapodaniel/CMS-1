<template>
    <div class="container mt-5 ">
            <div class="row" style="height: 50vh;">
                <div class="col-6 ">
                    <h2 class="font-weight-bolder">Child Checkin</h2>
                </div>
                <div class="col-6  text-right" >
                    <button class="btn btn-primary " style="border-radius: 30px; width: 30%">Add Family</button>
                </div>

                <div class=" border bg-white w-100 shadow " style="height: 25vh; border-radius: 30px;" >
                    <div class="row my-3 nested-row justify-content-center ">
                        <div class=" col-2 col-md-2 text-center px-0">
                            <label for="Person">Person</label>
                        </div>
                        <div class="col-4 ">
                            <button class="form-control text-left dd close-modal ">Search name</button>
                            <i class="pi pi-chevron-down cursor-pointer manual-dd-icon align-self-center close-modal"></i>
                            <div class="input-field manual-dd-con close-modal">
                                <div class="manual-dd dd close-modal">
                                    <div class="container-fluid dd dd-search-con close-modal" >
                                        <div class="row dd close-modal">
                                            <div class="col-md-12 dd px-0 py-1 close-modal">
                                                <input type="text" class="form-control close-modal" placeholder="Search person" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default ({
    setup() {
        
    },
})
</script>

<style scoped>

.manual-dd-icon {
    position: absolute;
    top: 23%;
    right: 10%;
}
.manual-dd-con {
    position: relative;
}
.manual-dd {
        width: 100%;
        border: 1px solid #b9c5cf;
        position: absolute;
        background: white;
        z-index: 2;
        top: 0px;
        /* margin-right: 0.5rem; */
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
            0 1px 10px 0 rgba(0, 0, 0, 0.12);
        max-height: 400px;
        overflow: auto;
        }

         .manual-dd::-webkit-scrollbar {
        display: none;
        }
</style>
