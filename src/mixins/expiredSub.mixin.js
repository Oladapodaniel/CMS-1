import router from "../router/index"
import store from "@/store/store.js"
import membershipService from "../services/membership/membershipservice";

const expiredSubMixin = {
    // beforeCreate() {
    //     const token = localStorage.getItem("token");
    //     if (token) return router.push('/tenant')
    // },
    created() {
        const currentUser = store.getters.currentUser;
        console.log(currentUser)
        if (!currentUser || !currentUser.subStatus) {
            membershipService.getSignedInUser()
                .then(res => {
                    console.log(res, 'Gideon')
                    if (res.subStatus === 'Expired'){
                        return router.push('/errorpage/expiredSubscription')
                    }
                })
        } else {
            if (currentUser.subStatus === 'Expired'){
                return router.push('/errorpage/expiredSubscription')
            }
        }
        
    },
}

export default expiredSubMixin;