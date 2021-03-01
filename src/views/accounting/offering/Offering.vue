<template>
    <div class="container-wide">
      <div class="row my-3">
      <div class="col-md-4 first-timers-text">
        <h2 class="page-header">Contributions</h2>
      </div>

      <div class="col-md-8 d-flex head-button">
        <router-link to="/tenant/offeringcategory">
          <button class="default-btn mr-3">Add Contribution Category</button>
        </router-link>
        <router-link to="/tenant/addoffering" class="add-btn">
          Add Contribution
        </router-link>
      </div>
    </div>
    </div>

    <div class="container-wide">
      <div class="row">
      <div class="col-md-12">
        <hr class="hr" />
      </div>
    </div>
<!-- v-if="firstTimersList.length === 0 && !loading" -->
    <div class="no-person" >
        <div class="empty-img">
            <p><img src="../../../assets/people/people-empty.svg" alt="" /></p>
            <p class="tip">You haven't added any first timer yet</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.page-header {
    font: normal normal 800 29px Nunito sans;
}

.head-button {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 577px) {
  .head-button {
    flex-direction: column;
    align-items: center;
  }

  .more {
    margin-right: 0;
  }

  .add-btn {
    margin-top: 10px
  } 
}

@media (max-width: 575px) {
  .head-button {
    display: flex;
    /* flex-direction: row; */
    /* align-items: center; */
    justify-content: center;
  }

  /* .add-btn,
  .more {
    margin-top: 10px;
  } */

  
}

.add-btn {
  width: 180px;
  background: #136acd;
  border-radius: 22px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  text-decoration: none;
}

.no-person {
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

 @media (max-width: 767px) {
     

   .first-timers-text {
    text-align: center;
  }
  .head-button {
    display: flex;
    justify-content: center
  }
 }

@media (min-width: 1400px) {
 .no-person {
    height: calc(100% - 90px);
  }
}
</style>