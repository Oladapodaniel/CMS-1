<template>
  <div class="whole-con">
    <div class="main-con">
      <div class="main-body">
        <div class="top">
          <div class="header">
            <h2>People</h2>
          </div>
          <div class="actions">
            <button class="more-btn button">
              More
              <span><i class="fa fa-angle-down btn-icon"></i></span>
            </button>
            <router-link to="/people/import" class="">
              <button class="button add-person-btn">
                Add Person
              </button>
            </router-link>
          </div>
        </div>
        <hr class="hr" />

        <transition name="fade" mode="out-in">
          <router-view class="view" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.whole-con {
  display: flex;
  /* background: #f1f5f8; */
  height: 100vh;
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

/* .no-person {
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
} */

.hr {
  border: 1px solid #0020440a;
  margin: 0 4px;
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

.fade-enter-active{
  transition: all 1s cubic-bezier(.67,.01,.86,.65);
}

.fade-leave-active{
  transition: all 0.6s cubic-bezier(.67,.01,.86,.65);
}

.fade-enter-from,
.fade-leave-to{
  transition: translateX(20px);
  opacity: 0;
}
</style>