import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/account/Login.vue';
import Register from '../views/account/Register.vue';
import OnboardingForm from '../views/account/OnboardingForm.vue';
import StartingPoint from '../views/onboarding/StartingPoint.vue';
import StartingDashboard from '../views/onboarding/StartingDashboard.vue';
import ProcessRequest from '../views/onboarding/ProcessRequest.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: OnboardingForm
  },
  {
    path: '/onboarding/step2',
    name: 'StartingPoint',
    component: StartingPoint
  },
  {
    path: '/next',
    name: 'StartingDashboard',
    component: StartingDashboard
  },
  {
    path: '/processing',
    name: 'ProcessRequest',
    component: ProcessRequest
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token")
//   if ((to.name !== "Login" && to.name !== "Register") && !token) return next("/")
//   if ((to.name === "Login" || to.name === "Register") && token) return next("/next")
//   next(true)
// })

export default router
