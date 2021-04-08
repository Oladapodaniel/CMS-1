import axios from "@/gateway/backendapi";

const uploadMedia = (body) => {
    return new Promise((resolve, reject) => {
        axios.post(`/api/Media/UploadMedia`, body)
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

const getMedia = (tenantId) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/Media/GetAllMedia?tenantId=${tenantId}`)
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

const getMediaById = (mediaId) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/Media/GetMediaById?mediaId=${mediaId}`)
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

const getImageGallery = () => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/Media/ImageGallery`)
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
    uploadMedia,
    getMedia,
    getMediaById,
    getImageGallery,
}