<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="main-title">
                    Create Post Category
                </h2>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-md-4 text-md-right">
                <label for="">Name</label>
            </div>
            <div class="col-md-5">
                <input type="text" class="form-control" v-model="category.name">
            </div>
            <div class="col-md-3"></div>
        </div>

        <div class="row my-3">
            <div class="col-md-4 text-md-right">
                <label for="">Image Url</label>
            </div>
            <div class="col-md-5">
                <input type="text" class="form-control" v-model="category.categoryImageUrl">
            </div>
            <div class="col-md-3"></div>
        </div>

        <div class="row my-3">
            <div class="col-md-4 text-md-right">
            </div>
            <div class="col-md-5 text-center">
                <button class="default-btn primary-bg text-white border-0" @click="createCategory">Create</button>
            </div>
            <div class="col-md-3"></div>
        </div>
        <Toast />
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from "vuex";
import membershipService from '../../../services/membership/membershipservice';
import social_service from '../../../services/social/social_service';
import { useToast } from "primevue/usetoast";

    export default {
        setup() {
            const store = useStore();
            const toast = useToast();

            const category = ref({ });
            const tenantId = ref(store.getters.currentUser.tenantId);

            const createCategory = async () => {
                try {
                    category.value.tenantId = tenantId.value;
                    const response = await social_service.createPostCategory(category.value);
                    console.log(response);
                    toast.add({severity:'success', summary:'Category Created', detail:`${category.value} category has been created`, life: 3000});
                } catch (error) {
                    toast.add({severity:'error', summary:'Creation Failed', detail:'Category eas not created', life: 3000});
                    console.log(error);
                }
            }

            const getTenantId = async () => {
                try {
                    tenantId.value = await membershipService.getSignedInUser().tenantId;
                } catch (error) {
                    console.log(error);
                }
            }

            if (!tenantId.value) getTenantId();

            return {
                category,
                createCategory,
            }
        }
    }
</script>

<style scoped>

</style>