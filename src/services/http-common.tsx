import axios from "axios";
import {getAccessToken} from "../utils";

// Create an axios instance
let AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        "Content-type": "application/json"
    },
    timeout: 10000,
    timeoutErrorMessage: "Sunucu yanıt vermiyor."
});

AxiosInstance.interceptors.request.use(function (config) {
    const token = getAccessToken();
    if (token) {
        config.headers["Authorization"] = token;
    }
    return config;
});

export default AxiosInstance;
