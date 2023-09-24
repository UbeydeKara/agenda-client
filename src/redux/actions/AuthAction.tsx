import {AppDispatch} from "../store";
import {AuthService} from "../../services";

export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await AuthService.login(username, password);
        localStorage.setItem("user", JSON.stringify(res.data));
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}


export const register = (username:string, email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await AuthService.register(username, email, password);
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const logout = () => async (dispatch: AppDispatch) => {
    try {
        await AuthService.logout();
        localStorage.removeItem("user");

        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err)
    }
}
