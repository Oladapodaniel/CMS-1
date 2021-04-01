<template>
    <div class="container">
        <div class="row my-3">
            <h2 class="main-title font-weight-bold">Upload Media</h2>
        </div>

        <div class="row my-3">
            <div class="col-md-4 text-md-right">
                <label for="">Name</label>
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control">
            </div>
            <div class="col-md-2"></div>
        </div>

        <div class="row my-3">
            <div class="col-md-4 text-md-right">
                <label for="">Type</label>
            </div>
            <div class="col-md-6">
                <Dropdown :options="mediaTypes" v-model="uploadData.type" />
            </div>
            <div class="col-md-2"></div>
        </div>
        

        <div class="row my-3">
            <div class="col-md-4 text-md-right">
                <label for="">Category</label>
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" v-model="uploadData.category">
            </div>
            <div class="col-md-2"></div>
        </div>



        <div class="row my-3">
            <div class="col-md-4 text-md-right">
                <label for="">Price</label>
            </div>
            <div class="col-md-6">
                <input type="number" class="form-control" v-model="uploadData.price">
            </div>
            <div class="col-md-2"></div>
        </div>

        <div class="row my-3">
            <div class="col-md-4 text-md-right">
                <label for="">Cover photo</label>
            </div>
            <div class="col-md-6">
                <input type="file" name="" id="" @change="coverUploaded">
            </div>
            <div class="col-md-2"></div>
        </div>

        <div class="row my-3">
            <div class="col-md-4 text-md-right">
                <label for="">File</label>
            </div>
            <div class="col-md-6">
                <input type="file" name="" class="form-control" id="" @change="fileUploaded">
            </div>
            <div class="col-md-2"></div>
        </div>

        <div class="row my-3">
            <div class="col-md-4 text-md-right">
                <label for="">Description</label>
            </div>
            <div class="col-md-6">
                <textarea name="" id="" class="w-100 form-control" rows="5"></textarea>
            </div>
            <div class="col-md-2"></div>
        </div>

        <div class="row my-3">
            <div class="col-md-4 text-md-right">
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-4">
                    Is free
                    <Checkbox id="binary" v-model="uploadData.isFree" :binary="true" />
                </div>
                <div class="col-md-4">
                    Is Pushed
                    <Checkbox id="binary" v-model="uploadData.isPushed" :binary="true" />
                </div>
                <div class="col-md-4">
                    Is Public
                    <Checkbox id="binary" v-model="uploadData.public" :binary="true" />
                </div>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>

        <div class="row my-3">
            <div class="col-md-4 text-md-right">
            </div>
            <div class="col-md-6 text-center">
                <button class="default-btn primary-bg text-white border-0" @click="uploadFile">Upload</button>
            </div>
            <div class="col-md-2"></div>
        </div>

    </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import { ref } from '@vue/reactivity';
import FileUpload from 'primevue/fileupload';
import { useStore } from "vuex";
import membershipService from '../../../services/membership/membershipservice';
import media_service from "../../../services/media/media_service";

    export default {
        components: { Dropdown, FileUpload, Checkbox },

        setup() {
            const store = useStore();
            const mediaTypes = [ 'Video', 'Audio', 'Ebook', 'Picture'];
            const uploadData = ref({ });

            const tenantId = ref(store.getters.currentUser.tenantId);

            const onUpload = (e) => {
                console.log(e, "e");
            }

            const cover = ref(null)
            const coverUploaded = (e) => {
                cover.value = e.target.files[0];
            }

            const file = ref(null)
            const fileUploaded = (e) => {
                file.value = e.target.files[0];
            }

            const uploadFile = async () => {
                const formData = new FormData();
                console.log(uploadData.value.isFree, "is free");

                formData.append("mediaFile", cover.value ? cover.value : "");
                formData.append("mediaFileImage", file.value ? file.value : "");
                formData.append("name", uploadData.value.name ? uploadData.value.name : "");
                formData.append("mediaType", uploadData.value.type ? mediaTypes.indexOf(uploadData.value.type) : "");
                formData.append("description", uploadData.value.description ? uploadData.value.description : "");
                formData.append("category", uploadData.value.category ? uploadData.value.category : "");
                formData.append("price", uploadData.value.price ? uploadData.value.price : "");
                formData.append("isFree", uploadData.value.isFree ? uploadData.value.isFree : "");
                formData.append("public", uploadData.value.public ? uploadData.value.public : "");
                formData.append("isPushed", uploadData.value.isPushed ? uploadData.value.isPushed : "");
                formData.append("tenantId", tenantId);

                try {
                    const response = await media_service.uploadMedia(formData);
                    console.log(response, "upload response");
                } catch (error) {
                    console.log(error);
                }
            }

            const getTenantId = () => {
                membershipService.getSignedInUser()
                    .then(res => {
                        tenantId.value = res.tenantId;
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }

            if (!tenantId.value) {
                getTenantId();
            }

            return {
                mediaTypes,
                uploadData,
                onUpload,
                fileUploaded,
                coverUploaded,
                uploadFile,
            }
        }
    }
</script>

<style scoped>

</style>