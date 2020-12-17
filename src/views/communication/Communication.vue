!<template>
  <div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-12">
          <h1 class="font-weight-bold">SMS</h1>
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
            <div class="col-md-3" id="side-menu">
              <div class="row">
                <div class="col-md-12 d-flex justify-content-center mt-4 mb-5">
                  <router-link to="/tenant/communications/compose-message" class="btn compose-btn">Compose new SMS</router-link>
                </div>
              </div>
              <div class="row mb-3">
                <div
                  class="col-md-12"
                >
                  <div class="row menu-item-con py-2" :class="{ 'active-link': route.path === '/tenant/communications'}">
                    <div class="col-3 col-md-12 menu-item-div m-auto">
                      <a class="btn btn-default font-weight-bold">
                        <span class="menu-item"
                          ><router-link class="r-link" to="/tenant/communications">
                            <i class="fas fa-inbox mr-3 menu-icon"></i>
                            <span class="active">Inbox</span>
                          </router-link>
                          <span class="inbox-count ml-md-2">3</span></span
                        >
                      </a>
                    </div>
                  </div>

                  <div class="row menu-item-con py-2" :class="{ 'active-link': route.path === '/tenant/communications/sent'}">
                    <div class="col-3 col-md-12 menu-item-div m-auto">
                      <a class="btn btn-default font-weight-bold">
                        <span class="menu-item">
                            <router-link class="r-link" to="/tenant/communications/sent">
                              <i class="fa fa-location-arrow mr-3 menu-icon"></i>
                              <span class="active">Sent</span>
                            </router-link>
                        </span>
                    </a>
                    </div>
                  </div>

                  <div class="row menu-item-con py-2" :class="{ 'active-link': route.path === '/tenant/communications/draft'}">
                    <div class="col-3 col-md-12 menu-item-div m-auto">
                      <a class="btn btn-default font-weight-bold">
                        <span class="menu-item">
                            <router-link class="r-link" to="/tenant/communications/draft">
                              <i class="fa fa-envelope-open mr-3 menu-icon"></i>
                              <span class="active">Draft</span>
                            </router-link>
                        </span>
                    </a>
                    </div>
                  </div>

                  <div class="row menu-item-con py-2" :class="{ 'active-link': route.path === '/tenant/communications/contacts'}">
                    <div class="col-5 offset-4 offset-md-0 col-md-12 menu-item-div">
                      <a class="btn btn-default font-weight-bold">
                        <span class="menu-item">
                            <router-link class="r-link" to="/tenant/communications/contacts">
                              <i class="fa fa-list-alt mr-3 menu-icon"></i>
                              <span class="active">Contact List</span>
                            </router-link>
                        </span>
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
import { useRoute } from 'vue-router';
export default {
  setup() {
    const route = useRoute();

    return {
      route,
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