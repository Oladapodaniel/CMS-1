import router from "../router/index"

const authMixin = {
    beforeCreate() {
        const token = localStorage.getItem("token");
        if (!token) return router.push('/')
    },
}

export default authMixin;