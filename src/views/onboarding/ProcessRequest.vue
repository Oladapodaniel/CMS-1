<template>
  <div>
    <div class="top-container">
      <div class="loading-div" :class="{ box1: processing }">
        <div class="spin-div">
            <div v-if="processing">
                <i class="loading-icon fas fa-circle-notch fa-spin"></i>
            </div>
            <div>
                <h3 @click="test">Hang tight!</h3>
                <h3>We 're setting things up for you.</h3>
            </div>
        </div>
        <!-- <i class="fa fa-spinner fa-spin"></i> -->
      </div>

      <div class="desc" :class="{ box2: processing }">
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
export default {
    data() {
        return {
            processing: false,
        }
    },

    methods: {
        test() {
            this.processing = !this.processing
        }
    },

    mounted() {
        setTimeout(() => {
            this.test()
        }, 200);
        setTimeout(() => {
            this.$router.push("/next")
        }, 3000);
    }
};
</script>

<style scoped>
    .top-container {
        display: flex;
    }

    .loading-div {
        width: 55%;
        display: flex;
        transition: all 1s ease-in-out;
    }

    .spin-div {
        width: 80%;
        margin: auto;
        text-align: center;
    }

    .spin-div h3 {
        font-size: 32px;
        color: #252A2F;
    }

    .loading-icon {
        font-size: 100px;
        color: #4C39A6;
    }

    .desc {
        display: flex;
        width: 45%;
        height: 100vh;
        background-image: -webkit-linear-gradient(top, #2E67CE 0%, #690C7F 100%);
        transition: all 0.7s ease-in-out;
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

    .desc-text h4 {
        font-size: 20px;
    }

  @media screen and (min-width: 601px) {
        .box1 {
        transform: translateX(80%);
    }

    .box2 {
        transform: translateX(-127%);
    }
  }

    @media screen and (max-width: 600px) {
        .desc {
            display: none;
        }

        .loading-div {
            width: 100%;
        }

        .spin-div {
            margin: 40px auto;
        }
    }

    @media screen and (max-width: 460px) {
        .spin-div h3 {
            font-size: 20px;
            
        }

        .loading-icon {
            font-size: 60px;
        }
    }

    @media screen and (min-width: 1300px) {
        .desc-text h4 {
            font-size: 30px;
        }
    }
</style>