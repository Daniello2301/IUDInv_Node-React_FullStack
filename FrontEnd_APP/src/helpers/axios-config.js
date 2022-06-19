import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'https://iud-backend-app.herokuapp.com/api/',
})

export {
    axiosConfig
}