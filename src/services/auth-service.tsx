import http from "./http-common";

const serviceUrl = "/auth"

const login = (username: string, password: string) => {
    return http.post(serviceUrl + "/login", {username: username, password: password});
};

const register = (username: string, email: string, password: string) => {
    return http.post(serviceUrl + "/register", {username: username, email: email, password: password});
};

const logout = () => {
    return http.post(serviceUrl + "/logout");
};

const AuthService = {
    login,
    register,
    logout
};

export default AuthService;
