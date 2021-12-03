import Axios from "axios";

export const createAxiosPlugin = function (axios) {
    return (store) => {
        axios.interceptors.request.use((config) => {
            store.commit('SET_LOADING', true)
            return config
        }, (error) => {
            return Promise.reject(error)
        })

        axios.interceptors.response.use((response) => {
            store.commit('SET_LOADING', false)
            return response
        }, (error) => {
            return Promise.reject(error)
        })
    }
}

export const axios = Axios.create({
    baseURL: import.meta.env.BASE_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})