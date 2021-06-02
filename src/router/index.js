import { createRouter, createWebHistory } from 'vue-router';


import Pagination from '@/components/payment/PaymentSuccessful.vue';


import TermsOfUse from '../components/temp/PaymentPage';

const routes = [{
        path: '/pagination',
        name: 'Pagination',
        component: Pagination
    },

    {
        path: '/terms',
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
        path: '/forgotpassword',
        name: 'ForgotPassword',
        component: () =>
            import ( /* webpackChunkName: "forgotpassword" */ '../views/account/ForgotPassword.vue')
    },
    {
        path: '/resetpassword',
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
                path: 'subscription',
                name: 'Subscription',
                component: () =>
                    import ( /* webpackChunkName: "dashboard" */ '../views/dashboard/Subscription.vue')
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
                        path: 'addfirsttimer',
                        name: 'AddFirstTimer',
                        component: () =>
                            import ( /* webpackChunkName: "addfirsttimer" */ '../views/people/AddFirstTimer.vue')
                    },
                    {
                        path: 'add/:personId?',
                        component: () =>
                            import ( /* webpackChunkName: "addperson" */ '../views/people/AddPerson.vue')
                    },
                    {
                        path: 'addfirsttimer/:firstTimerId?',
                        component: () =>
                            import ( /* webpackChunkName: "addfirsttimer" */ '../views/people/AddFirstTimer.vue')
                    },
                    
                ]
            },
            
            // {
                //     path: 'event',
                //     name: 'Event',
                //     component: () =>
                //         import ( /* webpackChunkName: "event" */ '@/views/event/Event.vue')
                // },
                {
                    path: 'importinstruction',
                    name: 'ImportInstruction',
                    component: () =>
                        import ( /* webpackChunkName: "addfirsttimer" */ '../views/people/ImportInstruction.vue')
                },
                {
                    path: 'events',
                    name: 'Events',
                    component: () =>
                        import ( /* webpackChunkName: "emptyevent" */ '@/views/event/Events.vue')
            },
            // {
            //     path: 'events',
            //     name: 'EventList',
            //     component: () =>
            //         import ( /* webpackChunkName: "eventlsit" */ '@/views/event/EventList.vue')
            // },
                {
                    path: 'event/:event?',
                    name: 'Event',
                    component: () =>
                        import ( /* webpackChunkName: "event" */ '@/views/event/Event.vue')
                },

                {
                path: 'attendancecheckin',
                name: 'Attendance',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/event/attendance&checkin/Attendance'),
                children: [{
                        path: '',
                        name: 'AttendanceList',
                        component: () =>
                            import ( /* webpackChunkName: "attendance" */ '@/views/event/attendance&checkin/AttendanceCheckin'),
                    },
                    {
                        path: 'add',
                        name: 'AddCheckin',
                        component: () =>
                            import ( /* webpackChunkName: "addcheckin" */ '@/views/event/attendance&checkin/AddAttendance'),
                    },
                    {
                        path: 'ussd',
                        name: 'USSDCheckin',
                        component: () =>
                            import ( /* webpackChunkName: "ussdcheckin" */ '@/views/event/attendance&checkin/USSDCheckin'),
                    },
                    {
                        path: 'sms',
                        name: 'SMSCheckin',
                        component: () =>
                            import ( /* webpackChunkName: "smscheckin" */ '@/views/event/attendance&checkin/SMSCheckin'),
                    },

                    {
                        path: 'mark',
                        name: 'MarkAttendance',
                        component: () =>
                            import ( /* webpackChunkName: "markattendance" */ '@/views/event/attendance&checkin/MarkAttendance'),
                    },

                    {
                        path: 'childcheckin',
                        name: 'ChildCheckin',
                        component: () =>
                            import ( /* webpackChunkName: "childcheckin" */ '@/views/event/attendance&checkin/ChildCheckin'),
                    },

                    {
                        path: 'type',
                        name: 'CheckinType',
                        component: () =>
                            import ( /* webpackChunkName: "childcheckin" */ '@/views/event/attendance&checkin/GroupCategoryAttendance'),
                    },
                    {
                        path: 'tag',
                        name: 'AttendanceTag',
                        component: () =>
                            import ( /* webpackChunkName: "tag" */ '@/views/event/attendance&checkin/AttendanceTag')
                    },
                    {
                        path: 'checkins',
                        name: 'AttendanceAndCheckinList',
                        component: () =>
                            import ( /* webpackChunkName: "checkins" */ '@/views/event/attendance&checkin/AttendanceAndCheckinList')
                    },
                    {
                        path: 'qr',
                        name: 'AttendanceQR',
                        component: () =>
                            import ( /* webpackChunkName: "attendaceqr" */ '@/views/event/attendance&checkin/AttendanceQR')
                    },

                    {
                        path: 'report/:id',
                        name: 'AttendanceReport',
                        component: () =>
                            import ( /* webpackChunkName: "childcheckin" */ '@/views/event/attendance&checkin/AttendanceReport'),
                    }
                ]
            },
            {
                path: 'checkins',
                name: 'AttendanceAndCheckinList',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/event/attendance&checkin/AttendanceAndCheckinList')
            },

            {
                path: 'attendancetag',
                name: 'AttendanceTag',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/event/attendance&checkin/AttendanceTag')
            },

            {
                path: 'addattendancecheckin',
                name: 'AddAttendance',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/event/attendance&checkin/AddAttendance')
            },

            {
                path: 'firsttimers',
                name: 'FirstTimers',
                component: () =>
                    import ( /* webpackChunkName: "firsttimers" */ '@/views/people/FirstTimersList.vue')
            },
            {
                path: 'firsttimerslist',
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
                path: 'sms',
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
                        path: 'addgroup',
                        name: 'Phongroup',
                        component: () =>
                            import ( /* webpackChunkName: "phonegroup" */ '@/views/communication/PhoneGroup')
                    },
                    {
                        path: 'editcontact/:groupId',
                        name: 'EditContactList',
                        component: () =>
                            import ( /* webpackChunkName: "editcontactlist" */ '@/views/communication/EditGroup')
                    },
                    {
                        path: 'report/:messageId',
                        name: 'DeliveryReport',
                        component: () =>
                            import ( /* webpackChunkName: "deliveryreport" */ '@/views/communication/DeliveryReport')
                    },
                    {
                        path: 'compose',
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
                path: 'email',
                name: 'EmailCommunication',
                component: () =>
                    import ( /* webpackChunkName: "emailcommunication" */ '@/views/communication/EmailCommunication'),
                children: [{
                        path: '',
                        name: 'Sent',
                        component: () =>
                            import ( /* webpackChunkName: "sentemails" */ '@/views/communication/SentEmails')
                    },
                    {
                        path: 'sent',
                        name: 'SentEmails',
                        component: () =>
                            import ( /* webpackChunkName: "sentemails" */ '@/views/communication/SentEmails')
                    },
                    {
                        path: 'sent/:messageId',
                        name: 'EmailDetails',
                        component: () =>
                            import ( /* webpackChunkName: "emaildetails" */ '@/views/communication/EmailDetails')
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
                        path: 'compose',
                        name: 'ComposeEmail',
                        component: () =>
                            import ( /* webpackChunkName: "compose" */ '@/views/communication/ComposeEmail')
                    },
                    {
                        path: 'schedules',
                        name: 'Schedules',
                        component: () =>
                            import ( /* webpackChunkName: "compose" */ '@/views/communication/ScheduledEmails')
                    }
                ]
            },
            {
                path: 'peoplegroups',
                name: 'Groups',
                component: () =>
                    import ( /* webpackChunkName: "groups" */ '@/views/groups/GroupsList')
            },
            {
                path: 'createpeoplegroup/:groupId?',
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
                path: 'social',
                name: 'Social',
                component: () =>
                    import ( /* webpackChunkName: "social" */ '@/views/social&mobile/home/Index'),
                children: [{
                        path: '',
                        name: 'SocialDashboard',
                        component: () =>
                            import ( /* webpackChunkName: "socialdashboard" */ '@/views/social&mobile/dashboard/Index'),
                    },
                    {
                        path: 'post',
                        name: 'SocialPost',
                        component: () =>
                            import ( /* webpackChunkName: "post" */ '@/views/social&mobile/post/Index'),
                    },
                    {
                        path: 'feed',
                        name: 'SocialFeed',
                        component: () =>
                            import ( /* webpackChunkName: "feed" */ '@/views/social&mobile/feed/Index'),
                        children: [{
                                path: '',
                                name: 'AllPosts',
                                component: () =>
                                    import ( /* webpackChunkName: "facebookposts" */ '@/views/social&mobile/feed/general/Index'),
                            },
                            {
                                path: 'facebook',
                                name: 'FacebookPosts',
                                component: () =>
                                    import ( /* webpackChunkName: "facebookposts" */ '@/views/social&mobile/feed/facebook/Index'),
                            },
                            {
                                path: 'twitter',
                                name: 'TwitterPosts',
                                component: () =>
                                    import ( /* webpackChunkName: "facebookposts" */ '@/views/social&mobile/feed/twitter/Index'),
                            },
                            {
                                path: 'instagram',
                                name: 'InstagramPosts',
                                component: () =>
                                    import ( /* webpackChunkName: "facebookposts" */ '@/views/social&mobile/feed/instagram/Index'),
                            },
                            {
                                path: 'whatsapp',
                                name: 'WhatsappPosts',
                                component: () =>
                                    import ( /* webpackChunkName: "facebookposts" */ '@/views/social&mobile/feed/whatsapp/Index'),
                            },
                        ]
                    },
                    {
                        path: 'pending',
                        name: 'PendingPosts',
                        component: () =>
                            import ( /* webpackChunkName: "pendingfeed" */ '@/views/social&mobile/pending/Index'),
                    },
                    {
                        path: 'schedule',
                        name: 'PendingReview',
                        component: () =>
                            import ( /* webpackChunkName: "schedule" */ '@/views/social&mobile/schedule/Index'),
                    },
                    {
                        path: 'setting',
                        name: 'SocialSetting',
                        component: () =>
                            import ( /* webpackChunkName: "socialsetting" */ '@/views/social&mobile/settingspage/Index'),
                    },
                    {
                        path: 'category',
                        name: 'PostCategory',
                        component: () =>
                            import ( /* webpackChunkName: "socialsetting" */ '@/views/social&mobile/settingspage/PostCategory'),
                    },
                    {
                        path: 'involvement',
                        name: 'PostEngagement',
                        component: () =>
                            import ( /* webpackChunkName: "involvement" */ '@/views/social&mobile/involvement/Index'),
                    },
                ]
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
                        path: 'invitenewuser',
                        name: 'InviteNewUser',
                        component: () =>
                            import ( /* webpackChunkName: "ministryusers" */ '@/views/settings/InviteNewUser')
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
                        path: 'attendance',
                        name: 'AttendanceCategory',
                        component: () =>
                            import ( /* webpackChunkName: "membership" */ '@/views/settings/AttendanceCategory')
                    },
                    {
                        path: 'ageGroup',
                        name: 'AgeGroupCategory',
                        component: () =>
                            import ( /* webpackChunkName: "membership" */ '@/views/settings/AgeGroupCategory')
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
                    {
                        path: 'firsttimersettings',
                        name: 'FirstTimerSettings',
                        component: () =>
                            import ( /* webpackChunkName: "defaultmessage" */ '@/views/settings/FirstTimerSettings')
                    },
                    {
                        path: 'followupstatus',
                        name: 'FollowUpStatus',
                        component: () =>
                            import ( /* webpackChunkName: "defaultmessage" */ '@/views/settings/FollowUpStatus')
                    },
                    // {
                    //     path: 'details',
                    //     name: 'Details',
                    //     component: () =>
                    //         import ( /* webpackChunkName: "defaultmessage" */ '@/views/settings/Details')
                    // },
                ]
            },
            {
                path: 'chartofaccount',
                name: 'ChartOfAccount',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/accounting/chartOfAccount/ChartOfAccount')
            },
            {
                path: 'media',
                name: 'MediaLibrary',
                component: () =>
                    import ( /* webpackChunkName: "medialibrary" */ '@/views/media/library/Index'),
                children: [{
                        path: '',
                        name: 'Gallery',
                        component: () =>
                            import ( /* webpackChunkName: "medialibrary" */ '@/views/media/library/components/Gallery')
                    },
                    {
                        path: 'file',
                        name: 'FileDetails',
                        component: () =>
                            import ( /* webpackChunkName: "medialibrary" */ '@/views/media/file/Index')
                    },
                ]
            },
            {
                path: 'upload',
                name: 'UploadMedia',
                component: () =>
                    import ( /* webpackChunkName: "uploadmedia" */ '@/views/media/upload/Index')
            },
            {
                path: 'chartofaccount/update',
                name: 'OldAccounts',
                component: () =>
                    import ( /* webpackChunkName: "oldaccounts" */ '@/views/accounting/chartOfAccount/OldAccounts')
            },
            {
                path: 'offering',
                name: 'Offering',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/accounting/offering/Offering')
            },
            {
                path: 'offeringcategory/:offId?',
                name: 'OfferingCategory',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/accounting/offering/SelectOffCat')
            },
            {
                path: 'addoffering/:offId?',
                name: 'AddOffering',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/accounting/offering/AddOffering')
            },
            {
                path: 'offeringreport',
                name: 'OfferingReport',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/accounting/offering/OfferingReport')
            },
            {
                path: 'contributionCategory',
                name: 'ContributionCategory',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/accounting/offering/ContributionCategory')
            },
            {
                path: 'transactionlist',
                name: 'TransactionList',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/accounting/transaction/TransactionList')
            },
            {
                path: 'payments/:editPayment?',
                name: 'PaymentTransaction',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/donation/PaymentTransaction')
            },
            {
                path: 'paymentoptions/:paymentId',
                name: 'PaymentOption',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/donation/PaymentOption')
            },
            {
                path: 'payment',
                name: 'Payment',
                component: () =>
                    import ( /* webpackChunkName: "defaultmessage" */ '@/views/donation/Payment')
            },
            {
                path: '/onboardingprocess',
                name: 'OnboardingProcess',
                component: () =>
                    import ( /* webpackChunkName: "giving" */ '@/views/mobile/mobileapp/OnboardingProcess')
            },
            {
                path: '/mobileonboarding',
                name: 'MobileOnboarding',
                component: () =>
                    import ( /* webpackChunkName: "giving" */ '@/views/mobile/mobileapp/MobileOnboarding')
            },
            {
                path: '/appbranding',
                name: 'AppBranding',
                component: () =>
                    import ( /* webpackChunkName: "giving" */ '@/views/mobile/mobileapp/AppBranding')
            },
            {
                path: '/socialmedia',
                name: 'SocialMedia',
                component: () =>
                    import ( /* webpackChunkName: "giving" */ '@/views/mobile/mobileapp/SocialMedia')
            },
            {
                path: '/onboardingsuccessful',
                name: 'OnboardingSuccessful',
                component: () =>
                    import ( /* webpackChunkName: "giving" */ '@/views/mobile/mobileapp/OnboardingSuccessful')
            },
            {
                path: '/churchsetup',
                name: 'ChurchSetUp',
                component: () =>
                    import ( /* webpackChunkName: "giving" */ '@/views/mobile/mobileapp/ChurchSetUp')
            },
            {
                path: '/donationsetup',
                name: 'DonationSetup',
                component: () =>
                    import ( /* webpackChunkName: "giving" */ '@/views/mobile/mobileapp/DonationSetup')
            }
        ],
    },
    {
        path: '/checkin/e/:code',
        name: 'WebCheckin',
        component: () =>
            import ( /* webpackChunkName: "defaultmessage" */ '@/views/event/attendance&checkin/MarkinAttendance')
    },
    {
        path: '/event/:eventId',
        name: 'EventRegistration',
        component: () =>
            import ( /* webpackChunkName: "defaultmessage" */ '@/views/event/EventRegistration')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/onlinegivingform1',
        name: 'OnlineGiving',
        component: () =>
            import ( /* webpackChunkName: "giving" */ '@/views/giving/onlinegiving/GivingForm')
    },
    {
        path: '/onlinegivingform2',
        name: 'OnlineGiving2',
        component: () =>
            import ( /* webpackChunkName: "giving" */ '@/views/giving/onlinegiving/GivingForm2')
    },
    {
        path: '/onlinegivingform3',
        name: 'OnlineGiving3',
        component: () =>
            import ( /* webpackChunkName: "giving" */ '@/views/giving/onlinegiving/GivingForm3')
    },
    {
        path: '/:userId?',
        name: 'OnlineGiving4',
        component: () =>
            import ( /* webpackChunkName: "giving" */ '@/views/giving/onlinegiving/GivingForm4')
    },
    {
        path: '/iframe/:userId?',
        name: 'iFrame',
        component: () =>
            import ( /* webpackChunkName: "giving" */ '@/views/giving/onlinegiving/iFrame')
    },
    {
        path: '/onlinegivingform5',
        name: 'OnlineGiving5',
        component: () =>
            import ( /* webpackChunkName: "giving" */ '@/views/giving/onlinegiving/GivingForm5')
    },
    {
        path: '/paymentgivingform2',
        name: 'OnlineGivingform2',
        component: () =>
            import ( /* webpackChunkName: "giving" */ '@/views/giving/onlinegiving/PaymentGivingForm2')
    },
    {
        path: '/signuppayment/:userId?',
        name: 'SignUpPayment',
        component: () =>
            import ( /* webpackChunkName: "defaultmessage" */ '@/views/donation/SignUpPayment')
    },
    {
        path: '/signinpayment/:userId?',
        name: 'SignInPayment',
        component: () =>
            import ( /* webpackChunkName: "defaultmessage" */ '@/views/donation/SignInPayment')
    },
    {
        path: '/transactionpage/:userId?',
        name: 'TransactionPage',
        component: () =>
            import ( /* webpackChunkName: "defaultmessage" */ '@/views/donation/TransactionPage')
    }
]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


router.beforeEach((to, from, next) => {


    if ((to.name === "ResetPassword" || to.name === "EmailSent" || to.name === "OnboardingForm" || to.name === "WebCheckin" || to.name === "OnlineGiving4" || to.name === "iFrame" || to.name === "SignUpPayment" || to.name === "SignInPayment" || to.name === "TransactionPage" || to.name === "EventRegistration") && !tokenIsValid) return next(true)
    const token = localStorage.getItem("token")

    const tokenIsValid = token && token.length > 30 ? true : false;
    if ((to.name !== "Login" && to.name !== "Register") && to.name !== "Onboarding" && to.name !== "StartingPoint" && to.name !== "ForgotPassword" && to.name !== "ResetPassword" && to.name !== "TermsOfUse" && (!token || token.length < 30)) return next("/")
    if ((to.name === "Login" || to.name === "Register") && tokenIsValid) return next("/next")

    next(true)
})

export default router