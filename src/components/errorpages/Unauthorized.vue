<template>
    <div class="container">
    <div class="row">

      <div class="col-md-12">
        <h1>
          <!-- <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> -->
          <i class="fa fa-key" aria-hidden="true"></i> 401</h1>
        <!-- <h2>Oops... Page Not Found!</h2> -->
        <h3>No Authorization Found!</h3>
        <div>This page is not publicly available</div>
        <div>For more info: Contact the administrator of your church.</div>
        
          <!-- <form action="#" method="post">
            <input type="text" placeholder="Search..." name="search">
            <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
          </form> -->
          <button class="btn btn-primary" style="margin-top: 20px;" @click.prevent="goBack"> <i class="fa fa-arrow-left" aria-hidden="true"></i>  Go Back</button>

        <p style="margin-top: 20px">If you think you have arrived here by our mistake, please <a href="#">contact us</a></p>

        <h3>Follow us:</h3>
        <div class="social-networks">
          <a href="https://www.facebook.com/creativedesignthemes/" target="_blank"><i class="fab fa-facebook-square"></i></a>
          <a href="https://www.pinterest.com/creative3355/" target="_blank"><i class="fab fa-pinterest-square"></i></a>
          <a href="https://twitter.com/creativedesign_" target="_blank"><i class="fab fa-twitter-square"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { useRoute } from "vue-router"
import router from "../../router/index"
export default {
    setup () {
        // const router = useRoute()

        const goBack = () => {
            router.go(-1)
        }

        return {
            goBack
        }
    }
}
</script>

<style>
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