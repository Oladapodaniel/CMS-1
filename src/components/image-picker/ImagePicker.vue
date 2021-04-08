<template>
  <div class="container-fluid">
    <div class="row bordered">
      <div class="col-md-12">
        <div class="row bordered-bottom">
          <div class="col-sm-6 py-3 text-center btn-div" @click="() => willUpload = false">
            <a class="text-decoration-none text-dark font-weight-bold"
              >Images</a
            >
          </div>
          <div class="col-sm-6 py-3 text-center btn-div" @click="selectFile">
            <a class="text-decoration-none text-dark font-weight-bold"
              >Upload</a
            >
            <input type="file" name="" id="" @change="fileSelected" style="height: 0;width:0" ref="fileInput">
          </div>
        </div>

        <div class="row d-flex flex-wrap py-4" v-if="!willUpload">
          <div class="col-sm-4 my-2" v-for="(image, index) in gallery" :key="index" style="max-height: 200px" @click="uploaded(true, image)">
              <div class="row">
                  <div class="col-md-11 mx-auto c-pointer">
                      <img :src="image" style="height:100%;width:100%" alt="">
                  </div>
              </div>
          </div>
        </div>

        <div class="row" v-else>
            <div class="col-md-12 text-center my-4">
                <span><img style="border-radius:15px;max-width:100%;max-height:300px" class="mx-auto h-100" :src="fileUrl" alt=""></span>
            </div>
            <div class="col-md-12 text-center py-4">
                <button class="default-btn border-0 text-white primary-bg" @click="uploaded(false, '')">Upload</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import media_service from '../../services/media/media_service';
export default {
    setup(props, { emit }) {
        const fileInput = ref(null);
        const file = ref("");
        const willUpload = ref(false);

        const gallery = ref([])
        const getImages = async () => {
            try {
                const response = await media_service.getImageGallery();
                gallery.value = response.splice(0, 50);
                console.log(response, "IMAGES");
            } catch (error) {
                console.log(error);
            }
        }
        getImages();

        const fileUrl = ref("");
        const fileSelected = (e) => {
            fileUrl.value = "";
            file.value = null;
            if (e.target.files[0]) {
                file.value = e.target.files[0];
                fileUrl.value = URL.createObjectURL(file.value);
                console.log(fileUrl.value, "url");
                willUpload.value = true;
            }
        }

        const selectFile = () => {
            fileInput.value.click();
        }

        const uploaded = (isUrl, selectedImageUrl) => {
            if (!isUrl) {
                emit('uploaded', { isUrl, data: file.value })
            } else {
                emit('uploaded', { isUrl, data: selectedImageUrl })
            }
        }

        return {
            fileInput,
            fileSelected,
            selectFile,
            fileUrl,
            willUpload,
            uploaded,
            gallery,
        }
    }
};
</script>

<style scoped>
.bordered {
  border: 0.20000000298023224px solid #e9eef0;
  border-radius: 15px;
}

.bordered-bottom {
  border-bottom: 0.20000000298023224px solid #e9eef0;
}

.btn-div:hover {
    background: #e9eef0;
    cursor: pointer;
    border-radius: 15px 15px 0 0;
}
</style>