<template>
  <div class="whole-page">
    <div class="links-menu" :class="{ show: menuShouldShow }">
      <MenuLinks />
    </div>
    <div class="main-con dim" @click="hideMenu">
      <transition name="fade" mode="out-in">
        <router-view class="view" />
      </transition>
      <!-- <router-view></router-view> -->
    </div>
  </div>
  <div class="toggle" @click="toggleMenu">
    <i class="fa fa-bars"></i>
  </div>
</template>

<script>
import { ref } from "vue";
import MenuLinks from "../../components/nav/MenuLinks.vue";

export default {
  components: { MenuLinks },

  setup() {
    const menuShouldShow = ref(false);

    const toggleMenu = () => (menuShouldShow.value = !menuShouldShow.value);

    const hideMenu = () => {
      if (menuShouldShow.value) menuShouldShow.value = false;
    };

    return {
      menuShouldShow,
      toggleMenu,
      hideMenu,
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
  /* height: 100vh; */
  overflow: auto;
  background: #fff;
}

.links-menu {
  width: 266px;
  height: 100%;
  background: #ebeff4;
  height: inherit;
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
  right: 8px;
  font-size: 30px;
}

.toggle:hover {
  cursor: pointer;
}

@media screen and (max-width: 1100px) {
  .toggle {
    display: block;
  }

  .links-menu {
    position: fixed;
    left: -266px;
    z-index: 9;
  }

  .links-menu.show {
    position: fixed;
    left: 0;
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

.fade-enter-active{
  transition: all .3s cubic-bezier(.67,.01,.86,.65);
}

.fade-leave-active{
  transition: all 0.3s cubic-bezier(.67,.01,.86,.65);
}

.fade-enter-from,
.fade-leave-to{
  transition: translateX(20px);
  opacity: 0;
}
</style>