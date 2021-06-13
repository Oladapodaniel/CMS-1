<template>
    <div class="container">
        <div class="row my-3">
            <div class="col-md-12 text-center">
                <h5 class="font-weight-700">
                    Not yet in any family?
                </h5>
            </div>
        </div>

        <div class="row mb-5 mt-3">
            <div class="col-md-12 mx-auto d-flex justify-content-center">
                <button class="default-btn font-weight-bold border primary-text add-ward-btn"
                    data-toggle="modal" data-target="#addToFamilyModal"
                >Add to family</button>
            </div>
        </div>


        <!-- Add To Family Modal -->
        <div class="modal fade" id="addToFamilyModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header py-4">
                    <h4 class="modal-title font-weight-bold px-4" id="exampleModalLabel">Add To Family</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <AddToFamily />
                </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import AddToFamily from "./AddToFamily";

export default {
    components: { AddToFamily },
    setup (props, { emit }) {
        
        const openAddToFamilyModal = () => {
            emit('addtofamily');
        }

        return {
            openAddToFamilyModal,
        }
    }
}
</script>

<style scoped>
    .add-ward-btn {
        border: 1px solid #2E67CE !important;
    }
</style>