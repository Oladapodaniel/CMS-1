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
                        <textarea name="" id="" rows="4" class="w-100 border-0 textarea" placeholder="What's on your mind, Complustech?"></textarea>
                    </div>
                </div>
            </div>
            <div class="col-md-12 post-add-ons py-2">
                <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-11">
                    <a class="text-decoration-none px-md-4">
                        <span><i class="pi pi-video mr-3"></i></span>
                        <span class="text-dark">Video</span>
                    </a>
                    <a class="text-decoration-none px-md-4">
                        <span><i class="pi pi-images mr-3"></i></span>
                        <span class="text-dark">Photo/Video</span>
                    </a>
                    <a class="text-decoration-none px-md-4">
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
                <button class="default-btn primary-bg text-white border-0" style="border-radius: 10px;" @click="facebook">Post</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Dropdown from "primevue/dropdown";
//     import social_service from "../../../services/social/social_service"
// import membershipService from '../../../services/membership/membershipservice';
import axios from "axios"
    export default {
        components: { Dropdown },
        setup() {
            const selectedDestination = "Facebook";

            const facebook = () => {
                 /*eslint no-undef: "warn"*/
                 
                
                FB.login(function(response) {
                    console.log(response);
                    FB.api(
                        `/${response.authResponse.userID}/assigned_pages`,
                        {"access_token": response.authResponse.accessToken},
                        function (response) {
                        if (response && !response.error) {
                            console.log(response, "ASSIGNED");
                        }
                    });
                    FB.api(
                        `/${response.authResponse.userID}/ids_for_pages`,
                        {"access_token": response.authResponse.accessToken},
                        function (response) {
                        if (response && !response.error) {
                            console.log(response, "PAGES");
                        }
                    });
                    // FB.api(
                    //     `/${response.authResponse.userID}`,
                    //     // `/me/accounts?access_token=${response.authResponse.accessToken}`,
                    //     // `/${response.authResponse.userID}/ids_for_pages`,
                    //     'GET',
                    //     {
                    //         "fields":"id,name,access_token",
                    //         "access_token": response.authResponse.accessToken
                        
                    //     },
                    //     function(response) {
                    //         console.log(response, "facebook");
                    //         // Insert your code here
                    //     }
                    // );

                     /*eslint no-undef: "warn"*/
                    FB.api(
                        `/${response.authResponse.userID}`,
                        'GET',
                        {"fields":"id,name,ids_for_pages", "access_token": response.authResponse.accessToken},
                        function(response) {
                            // Insert your code here
                            console.log(response, "SSSOSOS");
                        }
                    );

                    axios.get(`https://graph.facebook.com/${response.authResponse.userID}?fields=name,access_token,ids_for_pages&access_token=${response.authResponse.accessToken}`)
                    .then(res => {
                        console.log(res, "FACE");
                    })
                    .catch(err => console.log(err))
                }, {scope: 'user_birthday'});
            }

            // membershipService.getSignedInUser()
            // .then(res => {
            //     alert("hello")
            //     social_service.getPostCategory(res.tenantId);
            // })

            

            return {
                selectedDestination,
                facebook,
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