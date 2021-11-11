<template>
<div> 
  <div class="whole-page">
    <div class="links-menu" :class="{ show: menuShouldShow }" v-if="followUpUser">
      <MenuLinks @linkclicked="hideNav" />
    </div>
    <div :class="{ 'main-con dim' :  !route.fullPath.includes('/mobileonboarding') && !route.fullPath.includes('/onboardingsuccessful'), 'top-router': route.query.fw }" @click="hideMenu">
      <!-- <transition name="fade" mode="out-in"> -->
      <!-- <div
        aria-live="polite"
        aria-atomic="true"
        style="position: relative; min-height: 200px"
      >
        <div class="toast" style="position: absolute; top: 0; right: 0">
          <div class="toast-header">
            <img src="" class="rounded mr-2" alt="..." />
            <strong class="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              class="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">Hello, world! This is a toast message.</div>
        </div>
      </div> -->

      <router-view class="view" />
      <!-- </transition> -->
      <!-- <router-view></router-view> -->
    </div>
  </div>
      <div class="toggle" @click="toggleMenu">
        <i class="pi pi-bars"></i>
      </div>
</div>
</template>

<script>
import { ref } from "vue";
import MenuLinks from "../../components/nav/MenuLinks.vue";
import { useRoute }  from "vue-router"

export default {
  components: { MenuLinks },

  setup() {
    const menuShouldShow = ref(false);
    const fullPath = ref("")
    const followUpUser = ref(true)

    const toggleMenu = () => (menuShouldShow.value = !menuShouldShow.value);

    const hideMenu = () => {
      if (menuShouldShow.value) menuShouldShow.value = false;
    };

    const hideNav = (val) => {
      if (val && menuShouldShow.value) {
        menuShouldShow.value = false;
      }
    }

    const route = useRoute()
    const getRoute = () => {
      console.log(route.fullPath)
      fullPath.value = route.fullPath
    }
    getRoute()

    const getRole =  () => {
      const getRoles = JSON.parse(localStorage.getItem('roles'));
      if (getRoles && getRoles.length === 1 && getRoles[0] === "FollowUp") {
        followUpUser.value = false
      } else {
        followUpUser.value = true
      }
      console.log(getRoles)
    }
    getRole()

    return {
      menuShouldShow,
      toggleMenu,
      hideMenu,
      hideNav,
      fullPath,
      route,
      followUpUser
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.whole-page {
  position: relative;
  display: flex;
  min-height: 100vh;
  overflow: auto;
  background: #fff;
}

.links-menu {
  width: 266px;
  min-height: 100%;
  background: #ebeff4;
  height: inherit;
  overflow: auto;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.links-menu::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.links-menu {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.main-con {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
}

.main-con::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.main-con {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.toggle {
  display: none;
  width: 30px;
  text-align: center;
  position: absolute;
  top: 4px;
  left: 40px;
  font-size: 30px;
}

.toggle:hover {
  cursor: pointer;
}

@media screen and (max-width: 1184px) {
  .toggle {
    display: block;
  }

  .links-menu {
    position: fixed;
    left: -266px;
    z-index: 9;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .links-menu.show {
    position: fixed;
    left: 0;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .main-con {
    width: 100%;
  }
}

/* Route Transition */
.btn-loading {
  display: flex;
  justify-content: space-between;
}

.fade-enter-active {
  transition: all 0.3s cubic-bezier(0.67, 0.01, 0.86, 0.65);
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.67, 0.01, 0.86, 0.65);
}

.fade-enter-from,
.fade-leave-to {
  transition: translateX(20px);
  opacity: 0;
}

.top-router {
  max-width: 1536px !important;
}
</style>