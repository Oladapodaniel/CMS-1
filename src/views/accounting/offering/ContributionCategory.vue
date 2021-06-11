<template>
    <div class="container-wide container-top">
      <div class="row my-3">
      <div class="col-md-6 first-timers-text">
        <h2 class="page-header">Offering Items</h2>
      </div>

      <div class="col-md-6 head-button">
        <router-link to="/tenant/offeringcategory" class="add-btn">
          Add Offering Category
        </router-link>
      </div>
    </div>
    </div>

    <div class="container-wide">
      <div class="row">
      <div class="col-md-12">
        <hr class="hr" />
      </div>
    </div>

    <div v-if="loading">
        <Loader />
    </div>
    

    <div v-if="contributionItems.length > 0 && !loading && !networkError">
        <ContributionCategoryList :contributionItems="contributionItems" @get-pages="getOfferingPages" @contri-items="updateItems"/>
    </div> 
    <div class="no-person"  v-if="contributionItems.length === 0 && !loading && !networkError">
        <div class="empty-img">
            <p><img src="../../../assets/people/people-empty.svg" alt="" /></p>
            <p class="tip">You haven't added any offering category yet</p>
        </div>
    </div>
    <div v-else-if="networkError" class="adjust-network">
      <img src="../../../assets/network-disconnected.png" >
      <div>Opps, Your internet connection was disrupted</div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
// import { store } from "../../../store/store"
import axios from "@/gateway/backendapi"
import ContributionCategoryList from './ContributionCategoryList'
import Loader from './SkeletonLoader'
import finish from '../../../services/progressbar/progress'
export default {
    components: {
        ContributionCategoryList, Loader
    },
    setup () {
        const contributionItems = ref([])
        const loading = ref(false)
        const networkError = ref(false)


        const getContributionCategory = () => {
            let store = useStore()
            console.log(store.getters['contributions/contributionItems'])
            if (store.getters['contributions/contributionItems'].length > 0) {
                contributionItems.value = store.getters['contributions/contributionItems']
            } else {
                loading.value = true
                axios
                    .get("/api/financials/contributions/items")
                    .then((res) => {
                        loading.value = false
                    contributionItems.value = res.data;
                    console.log(res.data);
                    })
                    .catch((err) => {
                      finish()
                        loading.value = false
                        if(err.toString().toLowerCase().includes("network error")) {
                          networkError.value = true
                        } else {
                          networkError.value = false
                        }
                        console.log(err)
                    });
            }
    
    // get from  to store
    
    // savev to sstore
    // store.dispatch('contributions/contributionList')
    };
    getContributionCategory();

    const getOfferingPages = (payload) => {
      contributionItems.value = payload
    }

    const updateItems = (payload) => {
      contributionItems.value.splice(payload, 1)
    }
        return {
            contributionItems, loading, getOfferingPages, updateItems, networkError
        }
    }
}
</script>

<style scoped>
.page-header {
    font: normal normal 800 29px Nunito sans;
}

.head-button {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 577px) {
  .head-button {
    flex-direction: column;
    align-items: center;
  }

  .more {
    margin-right: 0;
  }

  .add-btn {
    margin-top: 10px
  } 
}

@media (max-width: 575px) {
  .head-button {
    display: flex;
    /* flex-direction: row; */
    /* align-items: center; */
    justify-content: center;
  }

  /* .add-btn,
  .more {
    margin-top: 10px;
  } */

  
}

.add-btn {
  width: 260px;
  background: #136acd;
  border-radius: 22px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  text-decoration: none;
}

.no-person {
  height: 80vh;
  display: flex;
  text-align: center;
}

.empty-img {
  width: 30%;
  min-width: 397px;
  margin: auto;
}

.empty-img img {
  width: 100%;
  max-width: 200px;
}

 @media (max-width: 767px) {
     

   .first-timers-text {
    text-align: center;
  }
  .head-button {
    display: flex;
    justify-content: center
  }
 }

</style>