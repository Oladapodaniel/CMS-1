<template>
    <div class="container">
        <div class="row my-3">
            <div class="col-md-12">
                <h2 class="main-title font-weight-bold">Media Library</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <router-link to="/tenant/upload" class="default-btn border-0 primary-bg text-white font-weight-700 text-decoration-none">Upload file</router-link>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <p class="my-3" v-for="(file, index) in files" :key="index">
                    <a> <span class="primary-text">{{ file.name ? file.name : 'Unknown' }}</span> <span class="text-warn">{{ mediaTypes[file.mediaType] }} </span></a>
                </p>
            </div>
        </div>
    </div>

    
</template>

<script>
import { ref } from '@vue/reactivity';
import media_service from '../../../services/media/media_service'
import membershipService from '../../../services/membership/membershipservice';
    export default {
        setup() {
            const files = ref([ ]);
            const mediaTypes = [ 'Video', 'Audio', 'Ebook', 'Picture'];
            const getMedia = async (tenantId) => {
                try {
                    const response = await media_service.getMedia(tenantId);
                    console.log(response, "media files");
                    files.value = response;
                } catch (error) {
                    console.log(error);
                }
            }

            membershipService.getSignedInUser()
                .then(res => {
                    getMedia(res.tenantId)
                })
                .catch(err => console.log(err))
            

            return {
                files,
                mediaTypes,
            }
        }

    }
</script>

<style scoped>

</style>