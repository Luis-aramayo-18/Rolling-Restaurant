import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL

const myAxios = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
    }
})

export default myAxios