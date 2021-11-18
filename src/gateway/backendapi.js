import axios from 'axios'

export default axios.create({
    // baseURL: 'https://ecofaith.azurewebsites.net/', //local
    // baseURL: 'https://churchplusv3coreapi.azurewebsites.net/',
    baseURL: 'https://churchplusapi3v.azurewebsites.net/',
    
    // baseURL: 'https://unionfaith.azurewebsites.net/',
    // baseURL: 'http://192.168.0.118/',
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
    }
})