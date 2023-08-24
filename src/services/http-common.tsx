import axios from "axios";

// Create an axios instance
export default axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        "Content-type": "application/json"
    },
    timeout: 10000,
    timeoutErrorMessage: "Sunucu yanıt vermiyor."
});
