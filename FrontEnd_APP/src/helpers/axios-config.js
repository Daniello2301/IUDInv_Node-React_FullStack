import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'http://localhost:3300/api',
})

export {
    axiosConfig
}