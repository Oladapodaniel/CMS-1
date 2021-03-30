<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 py-4">
                <h1 class="font-weight-bold main-title">New Post</h1>
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
                    <ProgressBar :value="uploadProgress" />
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
            <div class="col-md-3 offset-md-1">
                <div class="row input-border">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-3">

                            </div>
                            <div class="col-md-9">
                                <label for="" class="small-text mb-0 label-color font-weight-700">Post to</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 mt-n4 border">

                            </div>
                            <div class="col-md-9 px-0" id="post-icon">
                                <Dropdown :options="[ 'Facebook', 2, 3 ]" v-model="selectedDestination" aria-placeholder="Facebook" style="width:100%"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 offset-md-1">
                <div class="row input-border">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-3">

                            </div>
                            <div class="col-md-9">
                                <label for="" class="small-text mb-0 label-color font-weight-700">Post type</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 mt-n4 border">

                            </div>
                            <div class="col-md-9 px-0" id="post-icon">
                                <Dropdown :options="[ 'Facebook', 2, 3 ]" v-model="selectedDestination" aria-placeholder="Facebook" style="width:100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 offset-md-1 d-flex align-items-center">
                <button class="default-btn primary-bg text-white border-0" style="border-radius: 10px;" @click="makePost">Post</button>
            </div>

            <div class="col-md-12">
                <button class="default-btn primary-bg text-white border-0" style="border-radius: 10px;" @click="createCategory">Create category</button>
            </div>

            <Dialog v-model:vissible="display">
                <ProgressBar :value="uploadProgress" />
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

    export default {
        components: { Dropdown, ProgressBar, Dialog },
        setup() {
            const selectedDestination = "Facebook";
            const pageId = "978547345603168";

            const facebook = () => {
                 /*eslint no-undef: "warn"*/
                 
                
                // FB.login(function(response) {
                //     localStorage.setItem("userId", response.authResponse.userID)
                //     localStorage.setItem("fbtoken", response.authResponse.accessToken)
                //     console.log(response);

                     /*eslint no-undef: "warn"*/
                    FB.api(
                        `/me/accounts`,
                        // `/${response.authResponse.userID}/ids_for_pages`,
                        'GET',
                        // {"fields":"id,name,ids_for_pages"},
                        {"fields":"access_token","access_token": localStorage.getItem("fbtoken")},
                        function(response) {
                            // Insert your code here
                            console.log(response, "SSSOSOS");
                        }
                    );
                    // FB.api(
                    //     `/${localStorage.getItem("userId")}/ids_for_pages`,
                    //     // `/${response.authResponse.userID}/ids_for_pages`,
                    //     'GET',
                    //     // {"fields":"id,name,ids_for_pages"},
                    //     {"access_token": localStorage.getItem("fbtoken")},
                    //     function(response) {
                    //         // Insert your code here
                    //         console.log(response, "SSSOSOS");
                    //     }
                    // );

                // }, {scope: 'user_birthday'});

                // membershipService.getSignedInUser()
                // .then(res => {
                //     social_service.postMessage({
                //         title: "Title",
                //         content: "Test Post to facebook",
                //         tenantId: res.tenantId,
                //         mediaChannels: [ "facebook" ],
                //         socialMedia: {
                //             facebook: {
                //                 pageId: pageId,
                //                 accessToken: "EAALhDeBzXnMBAFvvxEgZAun9m5V3a8hYZCgRH23ZBjrPTw7714ra9osaWdqeJXPUKdTZA6Lr2xNaZCoPHNgseZARSVbJbAHjr9J6wUO18xZB9hGAYrU6L4UwgKzL0zBQRSJyaXt9ubTRWvOZAcZBF6reIpbDkxlnqvZBbZAgFub0omQX8Ly5eBc2gmZCY6ycpSFm6eJ7d9Il6SpidQZDZD"
                //             }
                //         }
                //     })
                // })
            }
            
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
                })

            const uploadProgress = ref("");
            const display = ref(false);
            const makePost = () => {
                const formData = new FormData();
                formData.append("mediaFile", file.value ? file.value : "");
                formData.append("content", message.value ? message.value : "");
                formData.append("mediaUrl", "");
                formData.append("title", "ANouncement");
                formData.append("tenantId", tenantId.value);
                formData.append("postCategoryId", "4e7d21db-7e26-4cb9-b474-08d8f3603afe");
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
                    })
                    .catch(err => console.log(err))
            }

            const createCategory = () => {
                social_service.createPostCategory({ name: "Anouncement", tenantId: tenantId.value, categoryImageUrl: "https://buildingsmart-1xbd3ajdayi.netdna-ssl.com/wp-content/uploads/2020/03/feat_important-.jpg"})
            }

            

            return {
                selectedDestination,
                facebook,
                pageId,
                selectFile,
                fileInput,
                file,
                fileSelected,
                message,
                makePost,
                uploadProgress,
                display,
                createCategory,
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

    /* .textarea::placeholder {
        padding: 10px;
    } */
</style>