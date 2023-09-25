import {AppDispatch} from "../store";
import {AuthService} from "../../services";
import {showAlert} from "./AlertAction";

export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await AuthService.login(username, password);
        return Promise.resolve(res.data);
    } catch (err: any) {
        dispatch(showAlert(err.response.data.message));
        return Promise.reject(err)
    }
}


export const register = (username:string, email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await AuthService.register(username, email, password);
        return Promise.resolve(res.data);
    } catch (err: any) {
        dispatch(showAlert(err.response.data.message));
        return Promise.reject(err)
    }
}

export const logout = () => async (dispatch: AppDispatch) => {
    try {
        await AuthService.logout();
        localStorage.removeItem("user");
        return Promise.resolve();
    } catch (err: any) {
        return Promise.reject(err)
    }
}
