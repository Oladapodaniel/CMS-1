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
            <a href="" class="user-link">Grace and Power</a>
          </div>
          <router-link to="/home" class="link">
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
            Communication
          </a>

          <a href="" class="link">
            <img
              src="../../assets/dashboardlinks/events-icon.svg"
              class="link-icon"
              alt=""
            />
            Events
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
              <p @click="showMore">
                <span>More...</span>
                <span><i class="fa fa-angle-up more-icon"></i></span>
              </p>
            </div>
            <div v-if="moreShown">

              <a href="" class="link">
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
export default {
    data() {
        return {
            moreShown: false
        }
    },

    methods: {
        showMore() {
            this.moreShown = !this.moreShown
        }
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
}

.nav {
  display: flex;
  flex-direction: column;
  padding: 8px 20px;
  background: #ebeff4;
  height: 100vh;
}

.nav .link {
  display: flex;
  justify-content: start;
  color: #02172e;
  text-decoration: none;
  opacity: 0.5;
  margin: 10px 0;
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
}

.more-icon:hover {
  cursor: pointer;
}

.comm {
  margin-left: -10px;
}

.router-link-exact-active {
  filter: invert(29%) sepia(74%) saturate(1909%) hue-rotate(197deg) brightness(91%) contrast(89%);
  opacity: 1 !important;
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