
<template>
    <div class="container-wide container-top">
      <div class="row my-3 d-flex justify-content-between">
        <div class="col-3 col-sm-6">
          <h2 class="page-header">Family</h2>
        </div>

        <div class="col-5 col-sm-6 head-button text-right">
          <router-link to="/tenant/addfamily">
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
    

    <div class="row" v-if="familyList.length > 0 && !loading && !networkError">
        <!-- <OfferingList :contributionTransactions="contributionTransactions" @get-pages="getOfferingPages" @contri-transac="updateTransac" :totalItem="totalItem"/> -->
        <FamilyList :familyList="familyList" @list-filtered="resetList"/>
    </div> 
    
    <div class="no-person" v-else-if="familyList.length === 0 && !loading && !networkError">
        <div class="empty-img">
            <p><img src="../../assets/people/people-empty.svg" alt="" /></p>
            <p class="tip">You haven't added any family yet</p>
            <div class="c-pointer primary-bg col-sm-6 col-md-4 offset-sm-3 offset-md-4 default-btn border-0 text-white" @click="navigateToAddFamily">Add Family</div>
        </div>
    </div>
    
    <div  class="adjust-network" v-else-if="networkError">
      <img src="../../assets/network-disconnected.png" >
      <div>Opps, Your internet connection was disrupted</div>
    </div>

  
    </div>
</template>

<script>
import { ref } from "vue"
import axios from "@/gateway/backendapi";
import finish from '../../services/progressbar/progress'
import FamilyList from "./FamilyList.vue"
import Loader from '../accounting/offering/SkeletonLoader.vue'
import router from '../../router';
export default {
    components: {
        FamilyList,
        Loader
    },
    setup () {
      const familyList = ref([])
      const loading = ref(false)
      const networkError = ref(false)

      const getAllFamilies = async() => {
        loading.value = true
        try {
          let data = await axios.get("/api/family/allfamilies")
          console.log(data)
          familyList.value = data.data
          loading.value = false
        }
        catch (err) {
          finish()
          console.log(err)
          loading.value = false
          loading.value = false
              if(err.toString().toLowerCase().includes("network error")) {
                networkError.value = true
              } else {
                networkError.value = false
              }
        }
      }
      getAllFamilies()

      const resetList = (payload) => {
        familyList.value = payload
      }

      const navigateToAddFamily = () => {
        router.push({ name: 'AddFamily' })
      }

      return {
        familyList,
        getAllFamilies,
        resetList,
        loading,
        networkError,
        navigateToAddFamily
      }
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