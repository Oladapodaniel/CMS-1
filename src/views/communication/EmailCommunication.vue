<template>
  <div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-12">
          <h1 class="font-weight-bold px-30">Email</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <hr class="hr" />
        </div>
      </div>

      <!-- Content Box -->
      <main id="main" class="mt-3">
        <div class="container-fluid">
          <div class="row">
            <!-- Side mennu -->
            <div class="col-md-3" id="side-menu"  @click="hideMenu">
              <div class="row">
                 <div class="toggle ml-3 mt-2" @click="toggleMenu">
                    <i class="pi pi-bars"></i>
                  </div>
                <div class="col-md-12 d-flex justify-content-center mt-4 mb-5">
                  <router-link to="/tenant/email/compose" class="btn compose-btn font-weight-700">Compose Email</router-link>
                </div>
                 
              </div>
              <div class="row mb-3" :class="{ show: menuShouldShow }">
                <div
                  class="col-md-12"
                  
                >

                  <div class="row menu-item-con py-2" :class="{ 'active-link': route.path === '/tenant/email/sent'}">
                    <div class="col-md-12 menu-item-div m-auto">
                      <a class="btn btn-default font-weight-bold">
                        <span class="menu-item">
                            <router-link class="r-link text-decoration-none" to="/tenant/email/sent">
                              <i class="pi pi-arrow-circle-up mr-3 menu-icon"></i>
                              <span class="active">Sent</span>
                            </router-link>
                        </span>
                    </a>
                    </div>
                  </div>

                  <div class="row menu-item-con py-2" :class="{ 'active-link': route.path === '/tenant/email/draft'}">
                    <div class="col-md-12 menu-item-div m-auto">
                      <a class="btn btn-default font-weight-bold">
                        <span class="menu-item">
                            <router-link class="r-link text-decoration-none" to="/tenant/email/draft">
                              <i class="pi pi-envelope mr-3 menu-icon"></i>
                              <span class="active">Draft</span>
                            </router-link>
                        </span>
                    </a>
                    </div>
                  </div>

                  <div class="row menu-item-con py-2" :class="{ 'active-link': route.path === '/tenant/schedules'}">
                    <div class="col-md-12 menu-item-div m-auto">
                      <a class="btn btn-default font-weight-bold">
                        <span class="menu-item"
                          ><router-link class="r-link text-decoration-none" to="/tenant/email/schedules">
                            <i class="fas fa-inbox mr-3 menu-icon"></i>
                            <span class="active">Schedules</span>
                          </router-link>
                          <!-- <span class="inbox-count ml-md-2">3</span> -->
                          </span
                        >
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- Bigger row -->
            <div class="col-md-9">
                <router-view>

                </router-view>
            </div>


          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from 'vue-router';
export default {
  setup() {
    const route = useRoute();
     const menuShouldShow = ref(false);

    const toggleMenu = () => (menuShouldShow.value = !menuShouldShow.value);
    const hideMenu = () => {
      if (menuShouldShow.value) menuShouldShow.value = false;
    };

    return {
      menuShouldShow,
      route,
      toggleMenu,
      hideMenu
    }
  }
};
</script>

<style scoped>


#main {
  border: 1px solid #02172e30;
  border-radius: 30px;
}

#side-menu {
  border-right: 1px solid #02172e30;
}

.search-div {
  width: fit-content;
  padding: 10px;
  background: #f5f8f9;
  border-radius: 200px;
}

.search-div input {
  background: none;
  border: none;
  outline: transparent;
}

.brief-message {
  color: #4762f0;
}

.compose-btn {
  background: #136acd;
  box-shadow: 0px 6px 12px #708eb170;
  border-radius: 22px;
  color: #fff;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-icon {
  font-size: 20px;
}

.units-div {
  border: 1px solid #dde2e6;
  border-radius: 20px;
  padding: 15px 0;
}

.hidden-header {
  display: none;
}

.th {
  font-size: 12px;
  font-weight: 700;
}

.inbox-count {
  background: rgba(19, 106, 205, 0.3);
  padding: 4px 8px;
  border-radius: 22px;
}

.menu-item-con {
    color: #002044;
}

.active {
  opacity: .5;
}

.active-link {
    background: rgba(19, 106, 205, 0.05);
    border-left: 2px solid #136ACD;
    
}

.router-link-exact-active .active {
   opacity: 1 !important;
}

.buy-btn {
    background: rgb(112, 142, 177, .33);
    border-radius: 22px;
}

.btn-text {
    opacity: 1;
    font-size: 11px;
    font-weight: 700;
}

.timestamp {
    font-size: 14px;
    color: #333333;
    opacity: 0.5;
}

.view-btn {
    background: #EBEFF4;
    border-radius: 21px;
    padding: 4px 18px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.r-link {
  color: #002044;
}
.router-link-exact-active i {
  color: #136ACD;
  opacity: 1;
}

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
  right: 8px;
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

@media screen and (max-width: 767px) {
  .hidden-header {
    display: inline-block;
    font-size: 12px;
  }

  .header-row {
    display: none;
  }

  #menu-items {
    flex-direction: row !important;
  }

  .search-div {
    width: 100%;
  }

  .units-div {
    width: 100%;
  }

  .units-container {
    margin-left: 0;
    margin: auto;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
    .compose-btn {
        font-size: 0.8em;
  }
}

@media screen and (max-width: 1000px) {
  .msg-n-time {
    flex-direction: column;
    margin-bottom: 8px;
  }
}

@media screen and (min-width: 1000px) {
  #menu-items {
    min-width: 100% !important;
  }
}

@media screen and (min-width: 1300px) {
  .menu-item-div {
    padding-left: 40px;
  }
}
</style>