import { createRouter, createWebHistory } from 'vue-router'

import Pagination from '@/components/pagination/PaginationButtons.vue';



const routes = [
  {
    path: '/pagination',
    name: 'Pagination',
    component: Pagination
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/account/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/account/Register.vue')
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: () => import(/* webpackChunkName: "about" */ '../views/account/OnboardingForm.vue')
  },
  {
    path: '/onboarding/step2',
    name: 'StartingPoint',
    component: () => import(/* webpackChunkName: "about" */ '../views/onboarding/StartingPoint.vue')
  },
  {
    path: '/next',
    name: 'StartingDashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/onboarding/StartingDashboard.vue')
  },
  {
    path: '/processing/:option',
    name: 'ProcessRequest',
    component: () => import(/* webpackChunkName: "about" */ '../views/onboarding/ProcessRequest.vue')
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/account/ForgotPassword.vue')
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/account/ResetPassword.vue')
  },
  {
    path: '/tenant',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/Home.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/ChurchDashboard.vue')
      },
      {
        path: 'people',
        component: () => import(/* webpackChunkName: "about" */ '../views/people/People.vue'),
        children: [
          { path: '', component: () => import(/* webpackChunkName: "about" */ '../views/people/PeopleEmpty.vue') },
          { path: 'import', component: () => import(/* webpackChunkName: "about" */ '../views/people/ImportPeople.vue'), name: 'ImportPeople' },
          {
            path: 'add-first-timer',
            name: 'AddFirstTimer',
            component: () => import(/* webpackChunkName: "about" */ '../views/people/AddFirstTimer.vue')
          },
          {
            path: 'add-person/:personId?',
            component: () => import(/* webpackChunkName: "about" */ '../views/people/AddPerson.vue')
          },
        ]
      },

      {
        path: 'event',
        name: 'Event',
        component: () => import(/* webpackChunkName: "about" */ '@/views/event/Event.vue')
      },
      {
        path: 'empty-event',
        name: 'EmptyEvent',
        component: () => import(/* webpackChunkName: "about" */ '@/views/event/EmptyEvent.vue')
      },
      {
        path: 'event-list',
        name: 'EventList',
        component: () => import(/* webpackChunkName: "about" */ '@/views/event/EventList.vue')
      },

      {
        path: 'first-timers',
        name: 'FirstTimers',
        component: () => import(/* webpackChunkName: "about" */ '@/views/people/FirstTimersList.vue')
      },
      {
        path: 'report/:id',
        name: 'Report',
        component: () => import(/* webpackChunkName: "about" */ '@/views/event/EventReport.vue')
      },
      {
        path: 'sms-communications',
        name: 'SmsCommunication',
        component: () => import(/* webpackChunkName: "about" */ '@/views/communication/SmsCommunication'),
        children: [
          { path: '', name: 'Inbox', component: () => import(/* webpackChunkName: "about" */ '@/views/communication/MessageInbox') },
          { path: 'sent', name: 'SentMessages', component: () => import(/* webpackChunkName: "about" */ '@/views/communication/SentMessages') },
          { path: 'draft', name: 'DraftMessages', component: () => import(/* webpackChunkName: "about" */ '@/views/communication/DraftMessages') },
          { path: 'contacts', name: 'ContactList', component: () => import(/* webpackChunkName: "about" */ '@/views/communication/ContactList') },
          { path: 'add-group', name: 'Phongroup', component: () => import(/* webpackChunkName: "about" */ '@/views/communication/PhoneGroup') },
          { path: 'edit-contact/:groupId', name: 'EditContactList', component: () => import(/* webpackChunkName: "about" */ '@/views/communication/EditContactList') },
          { path: 'report', name: 'DeliveryReport', component: () => import(/* webpackChunkName: "about" */ '@/views/communication/DeliveryReport') },
          { path: 'compose-message', name: 'SendMessage', component: () => import(/* webpackChunkName: "about" */ '@/views/communication/SendSms') }
        ]
      },
      {
        path: 'email-communications',
        name: 'EmailCommunication',
        component: () => import(/* webpackChunkName: "about" */ '@/views/communication/EmailCommunication'),
        children: [
          { path: '', name: 'EmailInbox', component: () => import(/* webpackChunkName: "about" */ '@/views/communication/EmailInbox') },
          { path: 'sent', name: 'SentEmails', component: () => import(/* webpackChunkName: "about" */ '@/views/communication/SentEmails') },
          { path: 'draft', name: 'EmailDraft', component: () => import(/* webpackChunkName: "about" */ '@/views/communication/EmailDraft')  },
          // { path: 'contacts', name: 'ContactList', component: ContactList },
          // { path: 'report', name: 'DeliveryReport', component: DeliveryReport },
          { path: 'compose-message', name: 'ComposeEmail', component: () => import(/* webpackChunkName: "about" */ '@/views/communication/ComposeEmail') }
        ]
      },
      {
        path: 'people-groups',
        name: 'Groups',
        component: () => import(/* webpackChunkName: "about" */ '@/views/groups/GroupsList')
      },
      {
        path: 'create-people-group/:groupId?',
        name: 'CreateGroup',
        component: () => import(/* webpackChunkName: "about" */ '@/views/groups/CreateGroup')
      }
    ]
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
  if ((to.name !== "Login" && to.name !== "Register") && to.name !== "Onboarding" && to.name !== "StartingPoint" && !token) return next("/")
  if ((to.name === "Login" || to.name === "Register") && token) return next("/next")
  next(true)
})

export default router
