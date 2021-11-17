import axios from 'axios'

export default axios.create({
    // baseURL: 'https://ecofaith.azurewebsites.net/', //local
     baseURL: 'https://churchplusapi3v.azurewebsites.net/',
     
    // baseURL: 'https://unionfaith.azurewebsites.net/',
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
    }
})