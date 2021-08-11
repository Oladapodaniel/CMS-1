<template>
    <div class="container">
      <div class="row d-flex justify-content-center d-block d-md-none">
        <div class="col-12">
          <img src="../../assets/expired-sub.png" class="w-100"/>
        </div>
      </div>
    <div class="row" d-md-flex justify-content-md-between>
      <div class="col-md-8 mb-md-5"><h2><i class="fa fa-meh-o" aria-hidden="true"></i> Subscription  Expired</h2></div>
      <div class="col-md-4 mb-md-5 mt-2 d-md-flex justify-content-md-end text-primary" ><router-link to="/tenant/subscription" class="text-decoration-none text-primary">Click here to Subscibe<i class="fa fa-arrow-right ml-2"></i></router-link></div>  
      <div class="col-md-8">
        <div class="mb-3">This page is not publicly available because your subscription has expired.</div>
        <div class="mt-3 mt-md-5">
          <div>Things you can still do:</div>
          <ul class="list-unstyled mt-3">
            <li class="mt-2"> <i class="pi pi-arrow-right text-primary mr-2 "></i><router-link class="text-primary" to="/tenant/subscription">Subscribe</router-link></li>
            <li class="mt-2"> <i class="pi pi-arrow-right text-primary mr-2"></i><router-link class="text-primary" to="/tenant/sms/compose">Send SMS</router-link></li>
            <li class="mt-2"> <i class="pi pi-arrow-right text-primary mr-2 "></i><router-link to="/tenant/units" class="text-primary">Buy Unit</router-link></li>
            <!-- <a href="" @click.prevent="plsSubscribe">Subscribe</a> -->
          </ul>
        </div>
        <div class="mt-4">For more info: Contact the administrator of your church.</div>
        <div class="default-btn text-dark c-pointer text-center col-2 mt-4" @click="logout">Logout</div>
        <!-- <div>If you think you have arrived here by our mistake, please <a href="#" class="text-decoration-none">contact us</a></div> -->
        
      </div>
      <div class="col-md-4 d-none d-md-block">
        <img src="../../assets/expired-sub.png" />
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
  margin-top: 8%;
  font-size: 20px ;
  color: #707070;}

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