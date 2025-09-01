import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:3210`
})

export default api;