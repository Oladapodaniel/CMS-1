<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-12 d-md-flex justify-content-between">
        <h2 class="main-title font-weight-bold">Media Library</h2>
        <router-link
          to="/tenant/upload"
          class="default-btn border-0 primary-bg text-white font-weight-700 text-decoration-none"
          >Upload file</router-link
        >
      </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import media_service from "../../../services/media/media_service";
import membershipService from "../../../services/membership/membershipservice";

export default {
  setup() {
    const files = ref([]);
    const tab = ref(3);
    const mediaTypes = ["Video", "Audio", "Ebook", "Picture"];
    const media = ref({});
    const getMedia = async (tenantId) => {
      try {
        const response = await media_service.getMedia(tenantId);
        for (let file of mediaTypes) {
          console.log(file);
          media.value[file] = response.filter((i) => {
            console.log(i.mediaType, mediaTypes.indexOf(file));
            return Number(i.mediaType) === mediaTypes.indexOf(file);
          });
        }
        console.log(response, "media files");
        console.log(media.value, "media");
        files.value = response;
      } catch (error) {
        console.log(error);
      }
    };

    membershipService
      .getSignedInUser()
      .then((res) => {
        getMedia(res.tenantId);
      })
      .catch((err) => console.log(err));

    return {
      files,
      mediaTypes,
      tab,
      media,
    };
  },
};
</script>

<style scoped>
.bordered {
  border: 0.20000000298023224px solid #e9eef0;
  border-radius: 8px;
  background: #fff;
}

.bordered-bottom {
  border-bottom: 0.20000000298023224px solid #e9eef0;
}

.active {
  background: #d7e0ea;
  /* background: #e9eef0; */
  border-radius: 8px;
}

.tab:hover {
  background: #d7e0ea;
}
</style>