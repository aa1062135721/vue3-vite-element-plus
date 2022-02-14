import axios from "axios";
import { APIMAP } from './ApiMap'

// axios.defaults.baseURL = "http://172.16.0.30:8083/"
axios.defaults.timeout = 20000

const initApiConfig = (key, params) => {
    let url = APIMAP[key]
    if (params && params['uid'] && url.indexOf(':uid') > -1) {
        return url.replace(':uid', params['uid'])
    } else if (url.indexOf(':uid') > -1) {
        return url.replace(':uid', '')
    }
    return url
}

axios.interceptors.request.use((config) => {
    if (config.method === 'get' || config.method === 'delete') {
        config.params = Object.assign(config.params || {})
    } else {
        config.data = Object.assign(config.data || {})
    }
    if (localStorage.getItem('admin_token')) {
        config.headers['Authorization'] = JSON.parse(localStorage.getItem('admin_token'))
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
    if (res.data.code === 301 || res.data.code === 302) {
        return
    }
    return res
}, (error) => {
    return Promise.reject(error)
})

export default {
    get: (key, params) => {
        const url = initApiConfig(key, params)
        return axios.get(url, { params: params })
    },

    post: (key, data) => {
        const url = initApiConfig(key, data)
        return axios.post(url, data)
    },

    put: (key, data) => {
        const url = initApiConfig(key, data)
        return axios.put(url, data)
    },

    delete: (key, params) => {
        const url = initApiConfig(key, params)
        return axios.delete(url, { params: params })
    },

    download: (key, params) => {
        const url = initApiConfig(key, params)
        return axios({
        url: url,
        params: params,
        method: 'GET',
        responseType: 'blob'
        })
    }
}