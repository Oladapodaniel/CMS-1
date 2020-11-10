<template>
  <div>
    <div class="top-container">
      <div class="loading-div">
        <h1>Loading ......</h1>
      </div>

      <div class="desc">
          <div class="desc-details">
              <div class="image-box">
              <img src="../../assets/laptop.png" alt="">
          </div>
          <div class="desc-text">
              <h4>All-in-one Church management software</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit voluptates voluptate.</p>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
    .top-container {
        display: flex;
    }

    .loading-div {
        width: 55%;
    }

    .desc {
        display: flex;
        width: 45%;
        height: 100vh;
        background-image: -webkit-linear-gradient(top, #2E67CE 0%, #690C7F 100%);
    }

    .desc-details {
        width: 80%;
        margin: auto;
    }

    .image-box img {
        width: 100%
    }

    .desc-text {
        text-align: center;
        color: #fff;
    }
</style>