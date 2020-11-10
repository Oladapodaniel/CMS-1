<template>
  <div>
    <div class="main-con">
      <div class="nav-con">
          <div>
              <ul class="navn-items">
                  <li class="navn-item">Dashboard</li>
                  <li class="navn-item">Communication</li>
                  <li class="navn-item">Members</li>
                  <li class="navn-item">First Timers</li>
                  <li class="navn-item">Events</li>
                  <li class="navn-item">Finances</li>
                  <li class="navn-item">Reports</li>
              </ul>
          </div>
      </div>
      <div class="boxes-con">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$store.getters.userData, "data");
  },
};
</script>

<style scoped>
.main-con {
    display: flex;
}

.nav-con {
    width:22%;
    height: 100vh;
    background: cyan;
}

.boxes-con {
    width: 73%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
}

.boxes-con div {
  width: 32%;
  min-width: 200px;
  height: 200px;
  background: chartreuse;
}
</style>