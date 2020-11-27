<template>
<!-- <transition name="fade" mode="out-in"> -->
    <router-view class="view" />
<!-- </transition> -->
</template>

<script>
export default {
  name: "App",

  data() {
    return { transitionName: null };
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}
/* 
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
} */

/* .slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
} */

.btn-loading {
  display: flex;
  justify-content: space-between;
}

.fade-enter-active{
  transition: all .7s cubic-bezier(.67,.01,.86,.65);
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
