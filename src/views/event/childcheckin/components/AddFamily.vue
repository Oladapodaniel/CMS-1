<template>
    <div class="container">
        <div class="row my-3">
            <div class="col-md-10 mx-auto">
                <div class="row">
                    <div class="col-md-3 text-right">
                        <label for="" class="font-weight-700">Father</label>
                    </div>
                    <div class="col-md-9">
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>
        </div>

        <div class="row my-3 tr-border-bottom pb-5">
            <div class="col-md-10 mx-auto">
                <div class="row">
                    <div class="col-md-3 text-right">
                        <label for="" class="font-weight-700">Mother</label>
                    </div>
                    <div class="col-md-9">
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4 mb-3">
            <div class="col-md-10 mx-auto d-flex justify-content-end">
                <button class="default-btn font-weight-bold border primary-text add-ward-btn">Add ward</button>
            </div>
        </div>

        <div class="row">
            <div class="col-md-10 mx-auto">
                <FamilyWards />
            </div>
        </div>

        <div class="row my-5">
            <div class="col-md-10 mx-auto d-flex justify-content-center my-5">
                <button class="default-btn text-dark font-weight-bold border mx-4">Cancel</button>
                <button class="default-btn font-weight-bold border text-white primary-bg mx-4">Save</button>
            </div>
        </div>

        
    </div>
</template>

<script>
import FamilyWards from "./FamilyWards";
export default {
    components: { FamilyWards },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    .add-ward-btn {
        border: 1px solid #2E67CE !important;
    }
</style>