
<template>
    <div class="container-wide container-top">
      <div class="row my-3">
        <div class="col-md-6">
          <h2 class="page-header">Family</h2>
        </div>

        <div class="col-md-6 d-flex justify-content-end head-button">
          <router-link to="/tenant/contributionCategory">
            <button class="default-btn primary-bg border-0 text-white mr-3">Add Family</button>
          </router-link>
        </div>
    </div>

      <div class="row">
      <div class="col-md-12">
        <hr class="hr" />
      </div>
      </div>


    <div v-if="loading">
        <Loader />
    </div>
    
<!-- v-if="contributionTransactions.length > 0 && !loading && !networkError" -->
    <div class="row">
        <!-- <OfferingList :contributionTransactions="contributionTransactions" @get-pages="getOfferingPages" @contri-transac="updateTransac" :totalItem="totalItem"/> -->
        <FamilyList />
    </div> 
    <!-- v-else-if="contributionTransactions.length === 0 && !loading && !networkError" -->
    <!-- <div class="no-person">
        <div class="empty-img">
            <p><img src="../../assets/people/people-empty.svg" alt="" /></p>
            <p class="tip">You haven't added any family yet</p>
            <div class="primary-bg col-sm-6 col-md-4 offset-sm-3 offset-md-4 default-btn border-0 text-white">Add Family</div>
        </div>
    </div> -->
    <!-- v-else-if="networkError" -->
    <!-- <div  class="adjust-network">
      <img src="../../assets/network-disconnected.png" >
      <div>Opps, Your internet connection was disrupted</div>
    </div> -->

  
    </div>
</template>

<script>
import FamilyList from "./FamilyList.vue"
import Loader from '../accounting/offering/SkeletonLoader.vue'
export default {
    components: {
        FamilyList,
        Loader
    },
    setup () {
        return {}
    }
}
</script>

<style scoped>
.page-header {
    font: normal normal 800 29px Nunito sans;
}

.no-person {
  height: 80vh;
  display: flex;
  text-align: center;
}

.empty-img {
  width: 85%;
  /* min-width: 397px; */
  margin: auto;
}

.empty-img img {
  width: 100%;
  max-width: 200px;
}
</style>