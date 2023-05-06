import axios from 'axios'

const BASE_URL = 'https://bbv2cb.pythonanywhere.com/'

const axiosClient = axios.create({
    baseURL: BASE_URL
})

// to use with axios interceptors that will add the accessToken
export const axiosPrivateClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    }
})

export default axiosClient