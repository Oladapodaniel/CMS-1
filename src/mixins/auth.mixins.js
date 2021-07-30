import router from "../router/index"
import store from "@/store/store.js"

const authMixin = {
    beforeCreate() {
        const token = localStorage.getItem("token");
        if (!token) return router.push('/')
    },
    created() {
        const currentUser = store.getters.currentUser;
        console.log(currentUser)
        if (currentUser.subStatus === 'Expired'){
            return router.push('/expiredSubcription')
        }
    },
}

export default authMixin;