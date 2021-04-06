<template>
  <div class="container-fluid">
    <div class="row bordered">
      <div class="col-md-12">
        <div class="row bordered-bottom">
          <div class="col-sm-6 py-3 text-center btn-div">
            <a class="text-decoration-none text-dark font-weight-bold"
              >Images</a
            >
          </div>
          <div class="col-sm-6 py-3 text-center btn-div">
            <a class="text-decoration-none text-dark font-weight-bold"
              >Upload</a
            >
          </div>
        </div>

        <div class="row d-flex flex-wrap">
          <div class="col-sm-4 my-2" v-for="i in 10" :key="i" style="max-height: 200px">
              <div class="row">
                  <div class="col-md-11 mx-auto">
                      <img src="https://d15omoko64skxi.cloudfront.net/wp-content/uploads/2020/03/22Novel-Coronavirus-SARS-CoV-222-Governor-Tom-Wolf-March-06-2020-CC-BY-opt-1.jpg" style="height:100%;width:100%" alt="">
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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