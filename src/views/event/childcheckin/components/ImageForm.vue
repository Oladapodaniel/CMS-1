<template>
    <div class="container topper py-2">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-10 offset-md-1 upl-img-box border">
                        
                    </div>
                </div>
            </div>

            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-10 offset-1">
                        <div>
                            <div class="cs-input">
                                <label for="imgUpload" class="choose-file">
                                Choose file
                                <input
                                    type="file"
                                    class="input file-input"
                                    placeholder=""
                                    id="imgUpload"
                                    @change="imageSelected"
                                />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .topper {
        background: #797e810d;
        border-radius: 15px;
    }

    .upl-img-box {
        width: 90px;
        height: 150px;
        border-radius: 22px;
    }
</style>