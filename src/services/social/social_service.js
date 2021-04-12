import axios from "@/gateway/backendapi";
import stopProgressBar from "../progressbar/progress";

const getPostCategory = (tenantId) => {
    return new Promise((resolve, reject) => {
        axios.get(`/mobile/v1/Feeds/GetPostCategory?tenantId=${tenantId}`)
        .then(res => {
            console.log(res, "SOCIAL");
            resolve(res.data);
        })
        .catch(err => {
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

const postMessage = (body) => {
    return new Promise((resolve, reject) => {
        axios.post(`/mobile/v1/Feeds/CreatePost`, body)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            stopProgressBar()
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

const createPostCategory = (body) => {
    return new Promise((resolve, reject) => {
        axios.post(`/mobile/v1/Feeds/CreatePostCategory`, body)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            stopProgressBar()
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

const getFeed = (tenantId) => {
    return new Promise((resolve, reject) => {
        axios.get(`/mobile/v1/Feeds/GetChurchFeed?tenantId=${tenantId}`)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

const getPendingPosts = (tenantId) => {
    return new Promise((resolve, reject) => {
        axios.get(`/mobile/v1/Feeds/GetPendingPosts?tenantId=${tenantId}`)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

const postComment = (body) => {
    return new Promise((resolve, reject) => {
        axios.post(`/mobile/v1/Feeds/Comment`, body)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            stopProgressBar();
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

const approvePost = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`/mobile/v1/Feeds/ApprovePost?postId=${id}`)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            if (err.response) {
                reject(err.response);
            } else {
                reject(err);
            }
        })
    })
}

export default {
    getPostCategory,
    postMessage,
    createPostCategory,
    getFeed,
    postComment,
    approvePost,
    getPendingPosts,
}