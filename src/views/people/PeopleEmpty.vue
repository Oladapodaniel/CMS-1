<template>
    <div class="no-person mt-5" v-if="!loading && people.length === 0">
        <div class="empty-img">
            <p><img src="../../assets/people/people-empty.svg" alt="" /></p>
            <p class="tip">You haven't added any member yet</p>
        </div>
    </div>
    <div class="people-list" v-if="!loading && people.length > 0">
      <PeopleList :list="people" />
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "@/gateway/backendapi";
// import axios from "axios";
import PeopleList from '@/views/people/PeopleList.vue';

export default {
  components: { PeopleList },

  setup() {
    const people = ref([]);
    const loading = ref(true);
    onMounted(async () => {
      try {
        const { data } = await axios.get("/api/People/GetPeopleBasicInfo");
        people.value = data;
        loading.value = false;
      } catch (err) {
        loading.value = false;
        console.log(err);
        // NProgress.done(true)
      }
    });
    
    // const people = [ ];


    
    return {
      people,
      loading,
    };
  }
};
</script>

<style scoped>
.main-body {
    height: 100%;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.no-person {
  height: 100%;
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

.tip {
  color: #02172e;
  font-size: 20px;
  font-weight: 600;
}

@media screen and (min-width: 990px) {
    .main-body {
        width: 90%;
        /* max-width: 1200px; */
        margin: 0 auto;
    }
}

@media screen and (min-width: 1200px) {
  .main-con {
    width: 80%;
    margin: 0 auto;
  }

  .top {
    height: 90px;
  }

  .no-person {
    height: calc(100% - 90px);
  }
}
</style>