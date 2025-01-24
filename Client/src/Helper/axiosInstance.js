import axios from "axios";

const BASE_URL = 'https://task-tracker-backend-v2po.onrender.com/api'

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL
axiosInstance.defaults.withCredentials = true

export default axiosInstance
