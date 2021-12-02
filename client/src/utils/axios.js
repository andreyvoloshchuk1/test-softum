import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.BASE_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})