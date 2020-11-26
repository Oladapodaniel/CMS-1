<template>
  <div>
    <div class="nav-con">
      <div>
        <div class="nav">
          <div class="user">
            <img
              src="../../assets/dashboardlinks/churchcloud.png"
              class="link-image"
              alt=""
            />
            <!-- <a href="" class="user-link">Grace... <span class="user-link-icon"> ></span></a> -->
            <a href="" class="user-link">Grace and ... <span class="user-link-icon"><i class="fa fa-angle-right"></i></span></a>
          </div>
          <router-link to="/home" class="link dashboard-link">
            <img
              src="../../assets/dashboardlinks/dashboard-icon.svg"
              class="link-icon"
              alt=""
            />
            Dashboard
          </router-link>

          <router-link to="/home/people" class="link">
            <img
              src="../../assets/dashboardlinks/people.svg"
              class="link-icon"
              alt=""
            />
            People
          </router-link>

          <a href="" class="link">
            <img
              src="../../assets/dashboardlinks/com-icon.svg"
              class="link-icon comm"
              alt=""
            />
            
            <span class="drop-link">Communication <span class="user-link-icon"> <i class="fa fa-angle-down"></i></span></span>
          </a>

          <a href="" class="link">
            <img
              src="../../assets/dashboardlinks/events-icon.svg"
              class="link-icon"
              alt=""
            />
            <span class="drop-link">Events <span class="user-link-icon"> <i class="fa fa-angle-down"></i></span></span>
          </a>

          <a href="" class="link">
            <img
              src="../../assets/dashboardlinks/acc-icon.svg"
              class="link-icon"
              alt=""
            />
            Accounting
          </a>

          <a href="" class="link">
            <img
              src="../../assets/dashboardlinks/reports-icon.svg"
              class="link-icon"
              alt=""
            />
            Reports
          </a>

          <div>
            <div>
              <p @click="showMore" class="more-tab">
                <span>{{ dropDownText }}...</span>
                <span><i class="fa fa-angle-up more-icon" :class="{ 'tbb-icon-rotate': moreShown}"></i></span>
              </p>
            </div>
            <div class="more-links" :class="{ 'hide-more-links': moreShown }">

              <a href="" class="link follow-up">
                <img
                  src="../../assets/dashboardlinks/follow-up-icon.svg"
                  class="link-icon"
                  alt=""
                />
                Follow up
              </a>

              <a href="" class="link">
                <img
                  src="../../assets/dashboardlinks/social-icon.svg"
                  class="link-icon"
                  alt=""
                />
                Social & Mobile App
              </a>

              <a href="" class="link">
                <img
                  src="../../assets/dashboardlinks/media.svg"
                  class="link-icon"
                  alt=""
                />
                Media & Monetization
              </a>

              <a href="" class="link">
                <img
                  src="../../assets/dashboardlinks/branches.svg"
                  class="link-icon"
                  alt=""
                />
                Branches
              </a>
            </div>
          </div>
          <hr class="hr" />

          <a href="" class="link">
            Settings
          </a>

          <a href="" class="link">
            Integration
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
  setup() {
    const moreShown = ref(false);

    const showMore = () => {
      moreShown.value = !moreShown.value;
    }

    const dropDownText = computed(() => {
      return moreShown.value ? "Less" : "More";
    })

    return { moreShown, showMore, dropDownText }
  }
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.user {
  background: #d7e0ea;
  padding: 0.5rem;
  border-radius: 29px;
  margin-left: 16px;
}

.nav {
  display: flex;
  flex-direction: column;
  padding: 8px 20px 8px 4px;
  background: #ebeff4;
  height: 100vh;
}

.nav .link {
  display: flex;
  justify-content: start;
  color: #02172e;
  text-decoration: none;
  opacity: 0.5;
  margin: 22px 0 0 0;
  padding-left: 25px;
  
}

.user-link, .drop-link {
  width: 100%;
}

.user-link-icon {
  float: right;
  opacity: .5;
}

.nav .link:hover {
  filter: grayscale(29%) brightness(3%) hue-rotate(338deg) saturate(940%) opacity(95%) contrast(989%);
}

.nav router-link:hover {
    color: #00204412;
}
.nav .user {
  opacity: 1;
  display: flex;
}

.nav .user a {
  text-decoration: none;
  color: #1d262d;
  font-size: 17px;
  font-weight: bold;
}

.link-icon {
  padding-right: 10px;
}

.link-image {
    width: 40px;
    height: 23px;
    padding-right: 0;
}

.hr {
  border: 1px solid #00204412;
  margin: 10px 0;
  opacity: 0.5;
}

.more-icon {
  float: right;
  transition: all 0.5s ease-in-out;
  transform: rotate(180deg);
  opacity: .5;
}

.tbb-icon-rotate {
  transition: all 0.5s ease-in-out;
  transform: rotate(0deg);
  color: #190138;
  font-size: 20px;
}

.more-icon:hover {
  cursor: pointer;
  filter: grayscale(29%) brightness(3%) hue-rotate(338deg) saturate(940%) opacity(95%) contrast(989%);
}

.comm {
  margin-left: -10px;
}

.router-link-exact-active {
  filter: invert(29%) sepia(74%) saturate(1909%) hue-rotate(197deg) brightness(91%) contrast(189%);
  opacity: 1 !important;
  border-left: 4px solid #136ACD;
  border-radius: 2px 2px;
}

.more-links {
  height: 0;
  overflow: hidden;
  transition: all .5s ease-in-out;
}

.hide-more-links {
  transition: all .5s ease-in-out;
  height: 164px;
}

.follow-up {
  margin-top: 0 !important;
}

.more-tab {
  font-size: 18px;
  padding-left: 25px;
  margin: 30px 0 10px 0;
  color: #02172E;
  opacity: .5;
}

.more-tab:hover {
  cursor: pointer;
}

.dashboard-link {
  margin-top: 22px !important;
}

@media screen and (max-width: 1100px) {
  .nav {
    width: 287px;
    position: absolute;
    z-index: 10;
  }

  .nav .link {
    opacity: 1;
  }
}
</style>