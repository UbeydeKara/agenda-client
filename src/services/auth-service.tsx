import http from "./http-common";

const serviceUrl = "/auth"

const login = (username: string, password: string) => {
    return http.post(serviceUrl, {username: username, password: password});
};

const AuthService = {
    login
};

export default AuthService;
