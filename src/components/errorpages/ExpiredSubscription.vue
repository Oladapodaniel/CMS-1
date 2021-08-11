<template>
    <div class="container">
    <div class="row">
      <div class="col-8 mb-5"><h2><i class="fa fa-lock" aria-hidden="true"></i> Subscription  Expired</h2></div>
      <div class="col-4 mb-5 mt-2 d-flex justify-content-end" ><router-link to="/newsubscription2" class="text-decoration-none">Click here to Subscibe<i class="fa fa-arrow-right ml-2"></i></router-link></div>  
      <div class="col-md-12">
        <div class="mb-3">This page is not publicly available because  your  Subscription has Expired</div>
        <div class="mt-4">
          <div>Things you can still do:</div>
          <ul class="list-unstyled">
            <li> <i class="fa fa-arrow-right text-primary mr-2"></i><router-link to="/sendmessage2">Send SMS</router-link></li>
            <li> <i class="fa fa-arrow-right text-primary mr-2 "></i><router-link to="/newsubscription2">Subscribe</router-link></li>
            <li> <i class="fa fa-arrow-right text-primary mr-2 "></i><router-link to="/buyunits2">Buy Unit</router-link></li>
            <!-- <a href="" @click.prevent="plsSubscribe">Subscribe</a> -->
          </ul>
        </div>
        <div class="mt-4">For more info: Contact the administrator of your church</div>
        <div>If you think you have arrived here by our mistake, please <a href="#" class="text-decoration-none">contact us</a></div>
        <div class="col-12 d-flex justify-content-end" ><button class="btn btn-primary rounded font-weight-bold" @click="logout">Logout </button> </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { useRoute } from "vue-router"
import router from "../../router/index"
import store from "@/store/store";
import setupService from '../../services/setup/setupservice';
export default {
    setup () {
        // const router = useRoute()

        // const plsSubscribe = () => {
        //     router.push('/tenant/subscription')
        // }
      const logout = () => {
        localStorage.clear()
        router.push('/')
        store.dispatch('clearCurrentUser', {})
        setupService.clearStore();
    }

        return {
            // plsSubscribe,
            logout
        }
    }
}
</script>

<style scoped>
/* Base */
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu', sans-serif;
  line-height: 18px;
  color: #707070;
  background: url(../../assets/bg.jpg) no-repeat 50%;
  background-size: cover;
  background-attachment: fixed;
  text-align: center; }

.container {
  margin-top: 8%; }

a {
  color: #3498db; }

a:hover {
  color: #3498db;
  text-decoration: underline; }

h1 {
  color: #3498db;
  font-size: 100px; }

h2 {
  font-size: 35px; }

h3 {
  margin-top: 50px !important; }

p {
  font-size: 18px; }

form {
  margin: 50px 0; }

input[type="text"] {
  width: 50%;
  border: 1px solid #e8e8e8;
  padding: 10px;
  color: #858585;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px; }

button[type="submit"] {
  background: none;
  border: none;
  color: #3498db;
  margin-left: -40px;
  font-size: 20px; }

.social-networks a {
  display: inline-block;
  font-size: 18px;
  margin: 5px; }

footer {
  font-size: 14px; }

  .btn-primary {
      background: #3498db;
      color: #eee;
  }

/* Modules */
/* Layouts */

/*# sourceMappingURL=style.css.map */

</style>