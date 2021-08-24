<template>
  <div class="whole-con">
    <div class="main-con">
      <div class="main-body">
        <div class="top container-wide mt-3" v-if="!isFormPage">
          <div class="header">
            <div class="events">{{ header }}</div>
          </div>
          <div class="buttonDiv ml-n3">
            <button class="more-btn button default-btn border-0 align-items-center" @click="importMembers">
            Import
            </button>

            <router-link :to="`/tenant/people/add`" class="">
            <button class="add-person-btn button default-btn border-0 ml-2">
              Add Member
            </button>
            </router-link>
          </div>
        </div>
        <hr class="hr container-wide" />

        <!-- <transition name="fade" mode="out-in"> -->
          <router-view class="view" />
        <!-- </transition> -->
      </div>
    </div>
  </div>
</template>

<script>
// import store from "@/store/index";
import router from "@/router/index";
import { useRoute } from "vue-router";
import {  computed } from 'vue';



export default {
  setup() {
    const route = useRoute();
    // const toast = useToast()
    // const importFile = ref("")

    // const displayModal = ref(false)
    // const memberData = ref([])
    const isFormPage = computed(() => {
      if (route.path.includes("add")) return true;
      return false;
    })


    const addPersonClicked = () => {
      if (route.name === "ImportPeople") {
        router.push("/tenant/people/add");
      } else {
        router.push("/people/import");
      }
    };

    const header = computed(() => {
      console.log(route.path, "path");
      if (route.path.includes("/people/addfirsttimer")) return "First Timers";
      return "Members";
    })

    const importMembers = () => {
          // <router-link :to="{ name: 'ImportInstruction' }">
          router.push({ name: 'ImportInstruction', query: { query: 'importpeople' } })
    }

    //   const afterEnter =  () => {
    //   window.scrollTo(0, 0);
    // }
    // const afterLeave = () => {
    //   Store.commit("setPageTransition", "default");
    // }

    // const fileUpload = () => {
    //   importFile.value.click()
    // }



    // const closeModal = () => {
    //   displayModal.value = false
    // }

    // const addToMembers = async() =>  {
    //   try {
    //     let { data } = await axios.post("/api/People/CreateMultipleFirstTimer", memberData.value)
    //     console.log(data)
    //     displayModal.value = false
    //     if (data.returnObject.returnList.length > 0) {
    //       toast.add({
    //       severity: "info",
    //       summary: data.returnObject.createdRecord,
    //       detail: `There are ${data.returnObject.returnList.length} members that have been added already`,
    //     });
    //     } else {
    //       toast.add({
    //       severity: "success",
    //       summary: "Created Successfully",
    //       detail: data.createdRecord,
    //       life: 4000,
    //     });
    //     }

    //   }
    //   catch  (err) {
    //     finish()
    //      if (err.toString().toLowerCase().includes("network error")) {
    //       toast.add({
    //         severity: "warn",
    //         summary: "Network Error",
    //         detail: "Please ensure you have strong internet connection",
    //         life: 4000,
    //       });
    //     } else if (err.toString().toLowerCase().includes("timeout")) {
    //       toast.add({
    //         severity: "warn",
    //         summary: "Request took too long to respond",
    //         detail: "Please try again by refreshing the page",
    //         life: 3000,
    //       });
    //     }
    //     console.log(err)
    //   }
    // }

    return { addPersonClicked, route, header, isFormPage, importMembers };
  },
};
// transition method
// methods: {

// }
// End of transition
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.events {
    font: normal normal 800 29px Nunito sans;
    }
.whole-con {
  display: flex;
  /* background: #f1f5f8; */
  /* height: 100vh; */
}

.main-con {
  width: 100%;
  height: 70%;
}

.main-body {
  height: 100%;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.button {
  padding: 8px 10px;
  border: none;
  border-radius: 22px;
  width: 180px;
  font-size: 16px;
  font-weight: 600;
  margin: 0 8px;
  outline: none;
  text-decoration: none;
  box-sizing: border-box;
}

.button:hover {
  cursor: pointer;
}

.more-btn {
  background: #dde2e6;
}

.add-person-btn {
  background: #136acd;
  color: #fff;
}

.btn-icon {
  padding: 0 8px;
}

.hr {
  border: 0.8px solid #0020440a;
  margin: 0 45px;
}

@media (max-width: 545px) {
  .top {
    display: block;
    text-align: center;
    }

  .more-btn.button, .add-person-btn.button {
    margin-top: 20px;
  }
}

@media screen and (min-width: 990px) {
  .main-body {
    width: 95%;
    /* max-width: 1021px; */
    margin: 0 auto;
  }
}

@media screen and (min-width: 1400px) {
  .main-con {
    width: 90%;
    margin: 0 auto;
  }

  .top {
    height: 90px;
  }

  .no-person {
    height: calc(100% - 90px);
  }
}

/* Route Transition */
.btn-loading {
  display: flex;
  justify-content: space-between;
}

.fade-enter-active {
  transition: all .3s cubic-bezier(0.67, 0.01, 0.86, 0.65);
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.67, 0.01, 0.86, 0.65);
}

.fade-enter-from,
.fade-leave-to {
  transition: translateX(20px);
  opacity: 0;
}
.buttonDiv {
  display: flex;
}

</style>

