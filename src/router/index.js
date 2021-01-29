import { createRouter, createWebHistory } from 'vue-router';


import Pagination from '@/components/payment/PaymentSuccessful.vue';

import TermsOfUse from '@/views/account/TermsOfService.vue'



const routes = [{
        path: '/pagination',
        name: 'Pagination',
        component: Pagination
    },

    {
        path: '/termsofuse',
        name: 'TermsOfUse',
        component: TermsOfUse,
    },

    {
        path: '/',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/account/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/account/Register.vue')
    },
    {
        path: '/onboarding',
        name: 'Onboarding',
        component: () =>
            import ( /* webpackChunkName: "onboarding" */ '../views/account/OnboardingForm.vue')
    },
    {
        path: '/onboarding/step2',
        name: 'StartingPoint',
        component: () =>
            import ( /* webpackChunkName: "startingpoint" */ '../views/onboarding/StartingPoint.vue')
    },
    {
        path: '/next',
        name: 'StartingDashboard',
        component: () =>
            import ( /* webpackChunkName: "startingdashboard" */ '../views/onboarding/StartingDashboard.vue')
    },
    {
        path: '/processing/:option',
        name: 'ProcessRequest',
        component: () =>
            import ( /* webpackChunkName: "processrequest" */ '../views/onboarding/ProcessRequest.vue')
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: () =>
            import ( /* webpackChunkName: "forgotpassword" */ '../views/account/ForgotPassword.vue')
    },
    {
        path: '/reset-password',
        name: 'ResetPassword',
        component: () =>
            import ( /* webpackChunkName: "resetpassword" */ '../views/account/ResetPassword.vue')
    },
    {
        path: '/emailsent/:email',
        name: 'EmailSent',
        component: () =>
            import ( /* webpackChunkName: "emailsent" */ '../views/account/EmailSent.vue')
    },
    {
        path: '/tenant',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/dashboard/Home.vue'),
        children: [{
                path: '',
                name: 'Dashboard',
                component: () =>
                    import ( /* webpackChunkName: "dashboard" */ '../views/dashboard/ChurchDashboard.vue')
            },
            {
                path: 'people',
                component: () =>
                    import ( /* webpackChunkName: "people" */ '../views/people/People.vue'),
                children: [


                    {
                        path: '',
                        component: () =>
                            import ( /* webpackChunkName: "peopleempty" */ '../views/people/PeopleEmpty.vue')
                    },
                    {
                        path: 'import',
                        component: () =>
                            import ( /* webpackChunkName: "importpeople" */ '../views/people/ImportPeople.vue'),
                        name: 'ImportPeople'
                    },
                    {
                        path: 'add-first-timer',
                        name: 'AddFirstTimer',
                        component: () =>
                            import ( /* webpackChunkName: "addfirsttimer" */ '../views/people/AddFirstTimer.vue')
                    },
                    {
                        path: 'add-person/:personId?',
                        component: () =>
                            import ( /* webpackChunkName: "addperson" */ '../views/people/AddPerson.vue')
                    },
                    {
                        path: 'add-first-timer/:firstTimerId?',
                        component: () =>
                            import ( /* webpackChunkName: "addperson" */ '../views/people/AddFirstTimer.vue')
                    },

                ]
            },

            {
                path: 'event',
                name: 'Event',
                component: () =>
                    import ( /* webpackChunkName: "event" */ '@/views/event/Event.vue')
            },
            {
                path: 'empty-event',
                name: 'EmptyEvent',
                component: () =>
                    import ( /* webpackChunkName: "emptyevent" */ '@/views/event/EmptyEvent.vue')
            },
            {
                path: 'event-list',
                name: 'EventList',
                component: () =>
                    import ( /* webpackChunkName: "eventlsit" */ '@/views/event/EventList.vue')
            },

            {
                path: 'first-timers',
                name: 'FirstTimers',
                component: () =>
                    import ( /* webpackChunkName: "firsttimers" */ '@/views/people/FirstTimersList.vue')
            },
            {
                path: 'first-timer-empty',
                name: 'FirstTimerEmpty',
                component: () =>
                    import ( /* webpackChunkName: "addfirsttimer" */ '../views/people/FirstTimerEmpty.vue')
            },
            {
                path: 'report/:id',
                name: 'Report',
                component: () =>
                    import ( /* webpackChunkName: "report" */ '@/views/event/EventReport.vue')
            },
            {
                path: 'sms-communications',
                name: 'SmsCommunication',
                component: () =>
                    import ( /* webpackChunkName: "smscommunication" */ '@/views/communication/SmsCommunication'),
                children: [{
                        path: '',
                        name: 'Inbox',
                        component: () =>
                            import ( /* webpackChunkName: "inbox" */ '@/views/communication/MessageInbox')
                    },
                    {
                        path: 'sent',
                        name: 'SentMessages',
                        component: () =>
                            import ( /* webpackChunkName: "sentmessages" */ '@/views/communication/SentMessages')
                    },
                    {
                        path: 'draft',
                        name: 'DraftMessages',
                        component: () =>
                            import ( /* webpackChunkName: "draftmessages" */ '@/views/communication/DraftMessages')
                    },
                    {
                        path: 'contacts',
                        name: 'ContactList',
                        component: () =>
                            import ( /* webpackChunkName: "contactlist" */ '@/views/communication/ContactList')
                    },
                    {
                        path: 'sent/:messageId',
                        name: 'MessageDetails',
                        component: () =>
                            import ( /* webpackChunkName: "contactlist" */ '@/views/communication/MessageDetails')
                    },
                    {
                        path: 'add-group',
                        name: 'Phongroup',
                        component: () =>
                            import ( /* webpackChunkName: "phonegroup" */ '@/views/communication/PhoneGroup')
                    },
                    {
                        path: 'edit-contact/:groupId',
                        name: 'EditContactList',
                        component: () =>
                            import ( /* webpackChunkName: "editcontactlist" */ '@/views/communication/EditContactList')
                    },
                    {
                        path: 'report',
                        name: 'DeliveryReport',
                        component: () =>
                            import ( /* webpackChunkName: "deliveryreport" */ '@/views/communication/DeliveryReport')
                    },
                    {
                        path: 'compose-message',
                        name: 'SendMessage',
                        component: () =>
                            import ( /* webpackChunkName: "sendmessage" */ '@/views/communication/SendSms')
                    },
                    {
                        path: 'scheduled',
                        name: 'ScheduledSMS',
                        component: () =>
                            import ( /* webpackChunkName: "scheduled" */ '@/views/communication/ScheduledSMS')
                    }
                ]
            },
            {
                path: 'email-communications',
                name: 'EmailCommunication',
                component: () =>
                    import ( /* webpackChunkName: "emailcommunication" */ '@/views/communication/EmailCommunication'),
                children: [{
                        path: '',
                        name: 'EmailInbox',
                        component: () =>
                            import ( /* webpackChunkName: "emailinbox" */ '@/views/communication/EmailInbox')
                    },
                    {
                        path: 'sent',
                        name: 'SentEmails',
                        component: () =>
                            import ( /* webpackChunkName: "sentemails" */ '@/views/communication/SentEmails')
                    },
                    {
                        path: 'draft',
                        name: 'EmailDraft',
                        component: () =>
                            import ( /* webpackChunkName: "emaildraft" */ '@/views/communication/EmailDraft')
                    },
                    // { path: 'contacts', name: 'ContactList', component: ContactList },
                    // { path: 'report', name: 'DeliveryReport', component: DeliveryReport },
                    {
                        path: 'compose-message',
                        name: 'ComposeEmail',
                        component: () =>
                            import ( /* webpackChunkName: "composemessage" */ '@/views/communication/ComposeEmail')
                    }
                ]
            },
            {
                path: 'people-groups',
                name: 'Groups',
                component: () =>
                    import ( /* webpackChunkName: "groups" */ '@/views/groups/GroupsList')
            },
            {
                path: 'create-people-group/:groupId?',
                name: 'CreateGroup',
                component: () =>
                    import ( /* webpackChunkName: "createpeoplegroup" */ '@/views/groups/CreateGroup')
            },
            {
                path: 'units',
                name: 'BuyUnits',
                component: () =>
                    import ( /* webpackChunkName: "buyunits" */ '@/views/payment/BuyUnits')
            },
            {
                path: 'settings',
                name: 'ChurchSettings',
                component: () =>
                    import ( /* webpackChunkName: "settings" */ '@/views/settings/ChurchSettings'),
                children: [{
                        path: '',
                        name: 'MinistryUsers',
                        component: () =>
                            import ( /* webpackChunkName: "ministryusers" */ '@/views/settings/MinistryUsers')
                    },
                    {
                        path: 'profile',
                        name: 'ChurchProfile',
                        component: () =>
                            import ( /* webpackChunkName: "churchprofile" */ '@/views/settings/ChurchProfile')
                    },
                    {
                        path: 'defaultmessage',
                        name: 'DefaultMessage',
                        component: () =>
                            import ( /* webpackChunkName: "defaultmessage" */ '@/views/settings/DefaultMessage')
                    },
                    {
                        path: 'membership',
                        name: 'MembershipCategory',
                        component: () =>
                            import ( /* webpackChunkName: "membership" */ '@/views/settings/MembershipCategory')
                    },
                    {
                        path: 'giving',
                        name: 'OnlineGiving',
                        component: () =>
                            import ( /* webpackChunkName: "giving" */ '@/views/settings/OnlineGivingSetup')
                    },
                    {
                        path: 'adddefaultmessage',
                        name: 'AddDefaultMessage',
                        component: () =>
                            import ( /* webpackChunkName: "defaultmessage" */ '@/views/settings/AddDefaultMessage')
                    },
                    // {
                    //     path: 'details',
                    //     name: 'Details',
                    //     component: () =>
                    //         import ( /* webpackChunkName: "defaultmessage" */ '@/views/settings/Details')
                    // },
                ]
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


router.beforeEach((to, from, next) => {
    
    if ((to.name === "ResetPassword" || to.name === "EmailSent") && !tokenIsValid) return next(true)
    const token = localStorage.getItem("token")
    const tokenIsValid = token && token.length > 30 ? true : false;
    if ((to.name !== "Login" && to.name !== "Register") && to.name !== "Onboarding" && to.name !== "StartingPoint" && to.name !== "ForgotPassword" && to.name !== "ResetPassword" && to.name !== "TermsOfUse" && (!token || token.length < 30)) return next("/")
    if ((to.name === "Login" || to.name === "Register") && tokenIsValid) return next("/next")

    // if (!tokenIsValid) return next("/");
    next(true)
})

export default router