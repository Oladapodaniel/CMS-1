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
          <div class="col-sm-4 my-2" v-for="i in 10" :key="i" style="max-height: 200px" @click="uploaded(true, i)">
              <div class="row">
                  <div class="col-md-11 mx-auto c-pointer">
                      <img src="https://d15omoko64skxi.cloudfront.net/wp-content/uploads/2020/03/22Novel-Coronavirus-SARS-CoV-222-Governor-Tom-Wolf-March-06-2020-CC-BY-opt-1.jpg" style="height:100%;width:100%" alt="">
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
export default {
    setup(props, { emit }) {
        const fileInput = ref(null);
        const file = ref("");
        const willUpload = ref(false);

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