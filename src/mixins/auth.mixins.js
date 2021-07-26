import router from "../router/index"
import store from "@/store/store.js"

const authMixin = {
    beforeCreate() {
        const token = localStorage.getItem("token");
        if (!token) return router.push('/')
    },
    created() {
        const currentUser = store.getters.currentUser;
        if (currentUser.subStatus === 'LIVE'){
            router.push('/tenant')
        }else{
            return router.push('subscription')
        }
        console.log(currentUser)
    },
}

export default authMixin;