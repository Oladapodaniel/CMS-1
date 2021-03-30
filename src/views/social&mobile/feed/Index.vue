<template>
  <div class="constainer-fluid">
    <div class="row blue-bg px-1">
      <div class="col-md-3">
        <div class="row">
          <div class="col-md-12 my-5">
            <h2 class="text-white font-weight-700">Feeds</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 all-platforms py-3">
            <div class="row text-white">
              <div class="col-md-2">
                <i class="pi pi-microsoft text-white" style="font-size: 1.5rem"></i>
              </div>
              <div class="col-md-10">
                <span class="font-weight-700">All Platforms</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 facebook py-3">
            <div class="row text-white">
              <div class="col-md-2">
                <i class="pi pi-facebook text-white" style="font-size: 1.5rem"></i>
              </div>
              <div class="col-md-10">
                <span class="font-weight-700">Facebook</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 twitter py-3">
            <div class="row text-white">
              <div class="col-md-2">
                <i class="pi pi-twitter text-white" style="font-size: 1.5rem"></i>
              </div>
              <div class="col-md-10">
                <span class="font-weight-700">Twitter</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 instagram py-3">
            <div class="row text-white">
              <div class="col-md-2">
                <i class="fa fa-instagram text-white" style="font-size: 1.5rem"></i>
              </div>
              <div class="col-md-10">
                <span class="font-weight-700">Instagram</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 whatsapp py-3">
            <div class="row text-white">
              <div class="col-md-2">
                <i class="fa fa-instagram text-white" style="font-size: 1.5rem"></i>
              </div>
              <div class="col-md-10">
                <span class="font-weight-700">Whatsapp</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 mobile py-3">
            <div class="row text-white">
              <div class="col-md-2">
                <i class="pi pi-mobile text-white" style="font-size: 1.5rem"></i>
              </div>
              <div class="col-md-10">
                <span class="font-weight-700">Mobile Apps</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Feed -->
      <div class="col-md-9 col-lg-8 mx-auto py-4">
        <div class="row bordered">
          <div class="col-md-12 pt-3 pt-2 main-post">
            <div class="row">
              <div class="col-2 d-md-flex justify-content-center">
                <div class="img-holder bg-secondary"></div>
              </div>
              <div class="col-10 pl-md-0 d-flex align-items-center">
                <textarea
                  name=""
                  id=""
                  rows="4"
                  class="w-100 border-0 textarea"
                  placeholder="What's on your mind, Complustech?"
                ></textarea>
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


        <div class="row bordered my-5" v-for="(post, index) in feed" :key="index">
            <div class="col-md-12 py-3">
                <!-- User details -->
                <div class="row">
                    <div class="col-2 d-md-flex justify-content-center">
                        <div class="img-holder bg-secondary"></div>
                    </div>
                    <div class="col-10 pl-md-0">
                        <p class="mb-0 font-weight-700 mb-n2 d-flex justify-content-between"><span>Colossal Boss</span> <span><i class="pi pi-ellipsis-h c-pointer"></i></span></p>
                        <small class="mb-0">Just now, Lagos</small>
                    </div>
                </div>

                <!-- Post message -->
                <div class="row">
                    <div class="col-md-12 pt-3">
                        <h5 class="font-weight-bold mb-0">{{ post.title }}</h5>
                        <p class="mb-0">{{ post.content }} </p>
                    </div>
                </div>

                <!-- Post media -->
                <div class="row">
                    <div class="col-md-12">
                        <img :src="post.mediaUrl" class="w-100" alt="">
                    </div>
                </div>

                <!-- Post Extras -->
                <div class="row my-3">
                    <div class="col-md-12">
                        <h6 class="mb-0 font-weight-700">Bodacious and awesome dragon warrior</h6>
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis obcaecati laboriosam adipisci esse autem nisi natus magnam omnis, ut quibusdam?</p>
                        <a class="text-decoration-none font-weight-700 c-pointer">KungFu.Panda</a>
                    </div>
                </div>

                <!-- Post Actions -->
                <div class="row my-3">
                    <div class="col-md-12">
                        <a class="text-decoration-none c-pointer post-action-link px-3 px-md-4">
                            <span><i class="pi pi-thumbs-up mr-2"></i></span>
                            <span>Like</span>
                            <span class="ml-2">{{ post.likeCount}}</span>
                        </a>
                        <a class="text-decoration-none c-pointer post-action-link px-3 px-md-4">
                            <span><i class="pi pi-comment mr-2"></i></span>
                            <span>Comment</span>
                            <span class="ml-2">{{ post.comments ? post.comments.length : 0}}</span>
                        </a>
                        <a class="text-decoration-none c-pointer post-action-link px-3 px-md-4">
                            <span><i class="pi pi-share-alt mr-2"></i></span>
                            <span>Share</span>
                            
                        </a>
                    </div>
                </div>

                <div class="row my-3">
                    <div class="col-2 d-md-flex justify-content-center">
                        <div class="img-holder bg-secondary"></div>
                    </div>
                    <div class=" py-2 px-3 small-border-radius" style="background:#ebeef0">
                        <h6 class="mb-0 font-weight-600">Master Shifu</h6>
                        <p class="mb-0 small-text">Teach kung fu</p>
                    </div>
                </div>

                <div class="row my-2">
                    <div class="col-2 d-md-flex justify-content-center">
                        <div class="img-holder bg-secondary"></div>
                    </div>
                    <div class="pl-0 col-10 d-flex align-items-center">
                        <p class="border mb-0 w-100 medium-border-radius">
                            <textarea rows="1" class="border-0 textarea mt-0 comment-field" placeholder="Comment..."></textarea>
                            <span><i class="pi pi-image c-pointer" style="font-size:20px"></i></span>
                            <!-- <span><i class="pi pi-image c-pointer pl-2" style="font-size:20px"></i></span> -->
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import social_service from '../../../services/social/social_service';
import membershipService from '../../../services/membership/membershipservice';
export default {
    setup() {
        const feed = ref([ ])
        const tenantId = ref('')
        membershipService.getSignedInUser()
        .then(res => {
            tenantId.value = res.tenantId;
            getFeed(res.tenantId);
        })
        .catch(err => console.log(err))

        const getFeed = async (tenantId) => {
            try {
                feed.value = await social_service.getFeed(tenantId);
                console.log(feed.value, "FEED");
            } catch (error) {
                console.log(error);
            }
        }

        return {
            feed,
        }
    }
};
</script>

<style scoped>

    .blue-bg {
        max-height: 500px;
        background: #0F529F;
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
        border-radius: 0 0 10px 10px;
    }

    /* .main-post {
        background: #fbfbfb;
    } */

    .bordered {
        border: 0.20000000298023224px solid #e9eef0;
        border-radius: 15px;
        background: #fff;
    }

    .post-action-link {
        color: #4b5257cc;;
    }

    .small-border-radius {
        border-radius: 10px;
    }

    .medium-border-radius {
        border-radius: 15px;
    }

    .comment-field {
        width: calc(100% - 60px);
    }

    .all-platforms {
        background: #136ACD;
    }

    .facebook {
        background: #0F529F;
    }

    .twitter {
        background: #1A91DA;
    }

    .instagram {
        background: transparent linear-gradient(81deg, #E90263 0%, #FD0604 49%, #FF5D00 100%) 0% 0% no-repeat padding-box;
    }

    .whatsapp {
        background: transparent linear-gradient(256deg, #48C658 0%, #2AB540 100%) 0% 0% no-repeat padding-box;
    }

    .mobile {
        background: #E87109 0% 0% no-repeat padding-box;;
    }
</style>