<template>
    <div class="container-fluid">
        <div class="row py-4">
            <div class="col-md-3 text-md-right">
                <label for="name">Name</label>
            </div>
            <div class="col-md-7">
                <input type="text" name="name" class="form-control">
            </div>
        </div>
        <div class="row py-2">
            <div class="col-md-3 text-md-right">
                <label for=""></label>
            </div>
            <div class="col-md-7 d-flex justify-content-center">
                <button class="default-btn mr-2" @click="closeModal">Cancel</button>
                <button class="default-btn primary-bg border-0 ml-2 text-white">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        setup(props, { emit }) {
            const closeModal = () => {
                emit("closeeventmodal");
            }

            return {
                closeModal,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>