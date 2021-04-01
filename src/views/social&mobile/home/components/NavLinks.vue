<template>
    <div class="container-fluid main">
        <div class="row">
            <div class="col-md-12 my-5">
                <router-link to="/tenant/social/post" class="default-btn primary-bg text-light c-pointer border-0 text-decoration-none">
                    <span><i class="pi pi-microsoft mr-2 c-pointer"></i></span>
                    <span class="text-white">New Post</span>
                </router-link>
            </div>
            <div class="col-md-12">
                <ul class="list-style-none px-0">
                    <li v-for="(link, index) in links" :key="index" class="py-3"><i :class="link.icon" class="mr-2"></i> <router-link :to="link.to" class="text-decoration-none font-weight-700 link-color">{{ link.text }}</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const links = [
                {
                    text: "Overview",
                    icon: "pi pi-th-large",
                    to: "/tenant/social",
                },
                {
                    text: "Involvement",
                    icon: "pi pi-heart",
                    to: "/tenant/social",
                },
                {
                    text: "Feeds",
                    icon: "pi pi-wifi",
                    to: "/tenant/social/feed",
                },
                {
                    text: "Schedule Post",
                    icon: "pi pi-clock",
                    to: "/tenant/social/schedule",
                },
                {
                    text: "Pending Post",
                    icon: "pi-wallet",
                    to: "/tenant/social/pending",
                },
                {
                    text: "Setting",
                    icon: "pi pi-cog",
                    to: "/tenant/social/setting",
                }
            ]

            return {
                links,
            }
        }
    }
</script>

<style scoped>
    * {
        color: #02172E;
        /* font: normal normal 600 ¿16px/22px Nunito Sans; */
        font-family: Nunito Sans !important;
    }

    .main {
        border-right: 0.20000000298023224px solid #e9eef0;
    }

    .list-style-none {
        list-style: none;
    }

    .link-color {
        color: #737f8c;
    }

    .router-link-exact-active {
        color: #146acd;
    }
</style>