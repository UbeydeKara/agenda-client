import {AppDispatch} from "../store";
import {ALERT_MESSAGE} from "../types";

export const showAlert = (message: string) => async(dispatch: AppDispatch) => {
    dispatch({
        type: ALERT_MESSAGE,
        payload: message
    });
}
