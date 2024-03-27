import axios from "axios";

// import { getItem } from "../helpers/persistance-storage";


axios.defaults.baseURL = "http://192.168.0.154:8765/";

// axios.interceptors.request.use(config => {
//     const token = getItem('token')
//     const authorization = token ? `Token ${token}` : ""
//     config.headers.Authorization = authorization
//     return config
// })


export default axios;
