import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/account/Login.vue';
import Register from '../views/account/Register.vue';
import OnboardingForm from '../views/account/OnboardingForm.vue';
import StartingPoint from '../views/onboarding/StartingPoint.vue';
import StartingDashboard from '../views/onboarding/StartingDashboard.vue';
import ProcessRequest from '../views/onboarding/ProcessRequest.vue';
import ForgotPassword from '../views/account/ForgotPassword.vue';
import EmailSent from '../views/account/EmailSent.vue';
import ResetPassword from '../views/account/ResetPassword.vue';
import Nav from '../components/nav/MenuLinks.vue';
import Home from '../views/dashboard/Home.vue';
import ChurchDashboard from '../views/dashboard/ChurchDashboard.vue';
import People from '../views/people/People.vue';
import PeopleEmpty from '../views/people/PeopleEmpty.vue';
import ImportPeople from '../views/people/ImportPeople.vue';
import AddPerson from '../views/people/AddPerson.vue';
import List from '../views/people/PeopleList.vue';
import Event from '../views/event/Event.vue'
import Column from '@/components/charts/ColumnChart.vue';
import Report from '@/views/event/EventReport.vue'
import AddFirstTimer from '@/views/people/AddFirstTimer.vue';
import FirstTimers from '@/views/people/FirstTimersList.vue';
import EmptyEvent from '../views/event/EmptyEvent'
import EventList from '@/views/event/EventList'
import SmsList from '@/views/communication/SmsList'
import SendSms from '@/views/communication/SendSms'
import Communication from '@/views/communication/Communication'
import Inbox from '@/views/communication/MessageInbox'
import SentMessages from '@/views/communication/SentMessages'
import DraftMessages from '@/views/communication/DraftMessages'
import ContactList from '@/views/communication/ContactList'


const routes = [

  {
    path: '/column',
    name: 'column',
    component: Column
  },

  {
    path: '/send-sms',
    name: 'sendsms',
    component: SendSms
  },
  {
    path: '/sms',
    name: 'Sms',
    component: SmsList
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/nav',
    name: 'Nav',
    component: Nav,
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
    path: '/processing/:option',
    name: 'ProcessRequest',
    component: ProcessRequest
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/email-sent/:email',
    name: 'EmailSent',
    component: EmailSent
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/tenant',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: ChurchDashboard
      },
      {
        path: 'people',
        component: People,
        children: [
          {path: '', component: PeopleEmpty},
          {path: 'import', component: ImportPeople, name: 'ImportPeople'},
          {
            path: 'add-first-timer',
            name: 'AddFirstTimer',
            component: AddFirstTimer
          },
        ]
      },
      {
        path: 'add-person/:personId?',
        component: AddPerson
      },
      {
        path: 'event',
        name: 'Event',
        component: Event
      },
      {
        path: 'empty-event',
        name: 'EmptyEvent',
        component: EmptyEvent
      },
      {
        path: 'event-list',
        name: 'EventList',
        component: EventList
      },
      
      {
        path: 'first-timers',
        name: 'FirstTimers',
        component: FirstTimers
      },
      {
        path: 'report/:id',
        name: 'Report',
        component: Report
      },
      {
        path: 'communications',
        name: 'Communication',
        component: Communication,
        children: [
          { path: '', name: 'Inbox', component: Inbox },
          { path: 'sent', name: 'SentMessages', component: SentMessages },
          { path: 'draft', name: 'DraftMessages', component: DraftMessages },
          { path: 'contacts', name: 'ContactList', component: ContactList },
          { path: 'compose-message', name: 'SendMessage', component: SendSms }
        ]
      },
    ]
  },
  {
    path: '/list',
    name: 'List',
    component: List
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


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token")
  if ((to.name !== "Login" && to.name !== "Register") && to.name !== "Onboarding" &&  to.name !== "StartingPoint" && !token) return next("/")
  if ((to.name === "Login" || to.name === "Register") && token) return next("/next")
  next(true)
})

export default router
