<template>
    <div class="container-fluid">
        <div class="row my-3">
            <h2 class="main-title font-weight-bold">Media Library</h2>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <button class="default-btn border-0 primary-bg text-white font-weight-700">Upload file</button>
        </div>
    </div>

    <div class="row">
        
    </div>
</template>

<script>
import media_service from '../../../services/media/media_service'
import membershipService from '../../../services/membership/membershipservice';
    export default {
        setup() {
            const getMedia = async (tenantId) => {
                try {
                    const response = await media_service.getMedia(tenantId);
                    console.log(response, "media files");
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
                
            }
        }

    }
</script>

<style scoped>

</style>