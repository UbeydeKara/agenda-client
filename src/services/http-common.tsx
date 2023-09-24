import axios from "axios";

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
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
        const user = JSON.parse(loggedUser);
        if (user && user.access_token) {
            config.headers["Authorization"] = "Bearer " + user.access_token;
        }
    }
    return config;
});

export default AxiosInstance;
