<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 py-4">
                <h1 class="font-weight-bold main-title">New Post</h1>
            </div>
        </div>

        <div class="row my-3">
            <div class="col-sm-5 col-md-4">
                <div class="row input-border">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-12">
                                <label for="" class="small-text mb-0 label-color font-weight-700">Post type <span class="text-danger">*</span></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 borde d-flex align-items-center">
                        <i class="pi pi-facebook primary-text" style="font-size:1.5rem"></i>
                    </div>
                    <div class="col-md-9 px-0" id="post-icon">
                        <Dropdown :options="postCategories" v-model="postCategory" optionLabel="name" placeholder="category" style="width:100%"  />
                    </div>
                </div>
            </div>
        </div>
        <div class="row bordered">
            <div class="col-md-12 pt-3 pt-2 main-post">
                <div class="row">
                    <div class="col-md-2 d-flex justify-content-end">
                        <div class="img-holder bg-secondary"></div>
                    </div>
                    <div class="col-md-10 d-flex align-items-center">
                        <textarea name="" id="" rows="4" class="w-100 border-0 textarea" v-model="message" placeholder="What's on your mind, Complustech?"></textarea>
                    </div>
                </div>
            </div>
            <div class="col-md-12 post-add-ons py-2">
                <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-11">
                    <a class="text-decoration-none px-md-4 c-pointer">
                        <input name=""  ref="fileInput" @change="fileSelected" type="file" style="width: 0;heiight:0">
                        <span  @click="selectFile"><i class="pi pi-video mr-3"></i></span>
                        <span class="text-dark" @click="selectFile">Video</span>
                    </a>
                    <a class="text-decoration-none px-md-4 c-pointer">
                        <span @click="selectFile"><i class="pi pi-images mr-3"></i></span>
                        <span class="text-dark" @click="selectFile">Photo/Video</span>
                    </a>
                    <a class="text-decoration-none px-md-4 c-pointer">
                        <span><i class="pi pi-video mr-3"></i></span>
                        <span class="text-dark">Feeling/Activity</span>
                    </a>
                </div>
            </div>
            </div>
        </div>

        <div class="row my-4">
            <div class="col-md-12">
                <div class="row input-border">
                    <div class="col-md-12 mt-2">
                        <label for="" class="small-text mb-0 label-color font-weight-700">Post to </label>
                    </div>
                    <div class="col-md-12 mb-2 d-flex flex-wrap">
                        <a class="primary-text text-decoration-none font-weight-700 my-2 px-3 d-flex align-items-center">
                            <span class="c-pointer"><i class="pi pi-microsoft" style="font-size:20px"></i></span>
                            <span class="mx-2">All Platforms</span>
                            <input type="checkbox" class="c-pointer" name="" id="">
                        </a>
                        <a class="primary-text text-decoration-none font-weight-700 my-2 px-3 d-flex align-items-center">
                            <span class="c-pointer"><img class="icon-height" src="../../../assets/social/twitter.svg" alt="Whatsapp icon"></span>
                            <span class="mx-2">Twitter</span>
                            <input type="checkbox" class="c-pointer" name="" id="">
                        </a>
                        <a class="primary-text text-decoration-none font-weight-700 my-2 px-3 d-flex align-items-center">
                            <span class="c-pointer"><img class="icon-height" src="../../../assets/social/whatsapp.svg" alt="Whatsapp icon"></span>
                            <span class="mx-2">Whatsapp</span>
                            <input type="checkbox" class="c-pointer" name="" id="">
                        </a>
                        <a class="primary-text text-decoration-none font-weight-700 my-2 px-3 d-flex align-items-center">
                            <span class="c-pointer"><img class="icon-height" src="../../../assets/social/facebook.svg" alt="Whatsapp icon"></span>
                            <span class="mx-2">Facebook</span>
                            <input type="checkbox" class="c-pointer" name="" id="">
                        </a>
                        <a class="primary-text text-decoration-none font-weight-700 my-2 px-3 d-flex align-items-center">
                            <span class="c-pointer"><img class="icon-height" src="../../../assets/social/instagram.svg" alt="Whatsapp icon"></span>
                            <span class="mx-2">Instagram</span>
                            <input type="checkbox" class="c-pointer" name="" id="">
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-md-12 d-flex align-items-center justify-content-end my-4">
                <button class="default-btn primary-bg text-white border-0" style="border-radius: 10px;" @click="makePost">Post</button>
            </div>
            <Dialog header="Header" v-model:visible="display"  :modal="true">
                <ProgressBar :value="uploadProgress" style="max-width: 600px;width: 100%;min-width:400px" />
            </Dialog>
            
        </div>
    </div>
</template>

<script>
    import Dropdown from "primevue/dropdown";
    import Dialog from "primevue/dialog";
import { ref } from '@vue/reactivity';
    import social_service from "../../../services/social/social_service"
import membershipService from '../../../services/membership/membershipservice';
    import axios from "@/gateway/backendapi";
    import ProgressBar from 'primevue/progressbar';
    import { useRouter } from "vue-router";

    export default {
        components: { Dropdown, ProgressBar, Dialog },
        setup() {
            const router = useRouter();
            const postCategory = ref({});
            const postDestination = ref("Facebook");

            const message = ref("");
            const fileInput = ref(null);
            const selectFile = () => {
                fileInput.value.click();
            }

            const file = ref("");
            const fileSelected = (e) => {
                file.value = e.target.files[0];
            }

            const tenantId = ref("");
            membershipService.getSignedInUser()
                .then(res => {
                    tenantId.value = res.tenantId;
                    getPostCategories(res.tenantId);
                })
                .catch(err => console.log(err))

            const uploadProgress = ref("");
            const display = ref(false);
            const makePost = () => {
                if (!message.value) return false;
                const formData = new FormData();
                formData.append("mediaFile", file.value ? file.value : "");
                formData.append("content", message.value ? message.value : "");
                formData.append("mediaUrl", "");
                formData.append("title", "ANouncement");
                formData.append("tenantId", tenantId.value);
                formData.append("postCategoryId", postCategory.value ? postCategory.value.postCategoryId : "");
                display.value = true;
                axios.post("/mobile/v1/Feeds/CreatePost", formData,
                    {
                        onUploadProgress: function(progressEvent) {
                            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                            console.log(percentCompleted, "loaded")
                            uploadProgress.value = percentCompleted;
                        }
                    }
                )
                    .then(res => {
                        console.log(res, "upload res");
                        display.value = false;
                        router.push("/tenant/social/feed")
                    })
                    .catch(err => {
                         console.log(err)
                         display.value = false;
                    })
            }

            const createCategory = () => {
                social_service.createPostCategory({ name: "Anouncement", tenantId: tenantId.value, categoryImageUrl: "https://buildingsmart-1xbd3ajdayi.netdna-ssl.com/wp-content/uploads/2020/03/feat_important-.jpg"})
            }

            const postCategories = ref([ ])
            const getPostCategories = async (tenantId) => {
                try {
                    postCategories.value = await social_service.getPostCategory(tenantId);
                    console.log(postCategories, "CAtegories");
                } catch (error) {
                    console.log(error);
                }
            }
            

            

            return {
                postDestination,
                postCategory,
                selectFile,
                fileInput,
                file,
                fileSelected,
                message,
                makePost,
                uploadProgress,
                display,
                createCategory,
                postCategories,
            }
        }
    }
</script>

<style scoped>
    .main-color {
        color: #02172e;
    }

    .bordered {
        border: 0.20000000298023224px solid #e9eef0;
        border-radius: 15px;
    }

    .input-border {
        border: 0.20000000298023224px solid #e9eef0;
        border-radius: 8px;
    }

    .main-title {
        font-size: 2rem;
    }

    .img-holder {
        width: 48px;
        height: 48px;
        border: 1px solid;
        border-radius: 50%;
    }

    .textarea {
        outline: none;
        margin-top: 10px;
        background: transparent;
    }

    .post-add-ons {
        background: #f5f6f7;
    }

    .main-post {
        background: #fbfbfb;
    }

    .label-color {
        color: #a5a0ab;
    }

    .icon-height {
        height: 25px;
    }

    /* .textarea::placeholder {
        padding: 10px;
    } */
</style>