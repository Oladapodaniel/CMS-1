<template>
  <div class="whole-page">
    <div class="links-menu" :class="{ show: menuShouldShow }">
      <MenuLinks />
    </div>
    <div class="main-con dim" @click="hideMenu">
      <router-view></router-view>
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
  min-height: 100vh;
  overflow: auto;
  background: #fff;
}

.links-menu {
  width: 20%;
  max-width: 287px;
  height: 100%;
  /* position: absolute; */
}

.main-con {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  max-height: fit-content;
  background: #fff;
  overflow-y: auto;
  padding-top: 20px;
}

.main::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.main {
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
    left: -287px;
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
</style>