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

export default {
  setup() {
    
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