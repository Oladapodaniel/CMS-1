<template>
    <div class="container">
        <div class="row pt-4 pb-2 my-5">
            <div class="col-md-8 offset-md-2 border parent-img-box">

            </div>
        </div>

        <div class="row">
            <div class="col-md-12 px-0">
                <div class="row py-2 parent-info">
                    <div class="col-md-3">
                        <span class="font-weight-700">
                            Name:
                        </span>
                    </div>
                    <div class="col-md-9">
                        <span class="font-weight-600">
                            Colossal Boss
                        </span>
                    </div>
                </div>

                <div class="row py-2 parent-info">
                    <div class="col-md-3">
                        <span class="font-weight-700">
                            Email:
                        </span>
                    </div>
                    <div class="col-md-9">
                        <span class="font-weight-600">
                            Colossal@Boss.Com
                        </span>
                    </div>
                </div>

                <div class="row py-2 parent-info">
                    <div class="col-md-3">
                        <span class="font-weight-700">
                            Phone:
                        </span>
                    </div>
                    <div class="col-md-9">
                        <span class="font-weight-600">
                            1234567890
                        </span>
                    </div>
                </div>

                <div class="row py-2 parent-info">
                    <div class="col-md-3">
                        <span class="font-weight-700">
                            Role:
                        </span>
                    </div>
                    <div class="col-md-9">
                        <span class="font-weight-600">
                            Father
                        </span>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    .parent-img-box {
        height: 150px;
        width:100px;
        border-radius: 22px;
    }

    .parent-info:nth-child(odd) {
        background: #dde2e65c 0% 0% no-repeat padding-box;
    }
</style>