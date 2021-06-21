<template>
    <div>
        <div class="profile">
            <div class="row justify-content-between">
                <div class="col-md-2">

                </div>
                <div class="col-md-1">
                    <h1>Profile</h1>

                </div>
                <div class="col-md-3">
                    <h1>Forms</h1>
                    <div class="row select-elem">
            <div class="col-12 col-md-3 text-md-right pr-0">
              <label class="small-text lb font-weight-600">Role</label>
            </div>
            <div class="col-12 col-md-5 form-group">
              <Dropdown
                :options="countries"
                optionLabel="name"
                placeholder="Select Role"
                style="width: 100%"
                v-model="selectCountry"
              />
            </div>
            <div class="col-md-4"></div>
          </div>
                    <div class="row">
                        <div class="col-12 col-md-3 text-md-right pr-0">
                        <label class="small-text lb font-weight-600" for="">Surname</label>
                        </div>
                        <div class="col-12 col-md-5 form-group">
                        <input type="text" 
                        placeholder="Surname"
                        v-model="m"
                        class="form-control ml-0 input" />
                        </div>
                        <div class="col-md-4"></div>
                    </div>

                </div>
                <div class="col-md-3">
                    <h1>Image</h1>

                </div>
                <div class="col-md-3">
                    <h1>empty</h1>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
    export default {
        components: {Dropdown}
        
    }
</script>

<style scoped>
.row{
    border: 1px solid red;
}

</style>