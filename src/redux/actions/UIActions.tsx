import {AppDispatch} from "../store";
import {TOGGLE_LEFT_DRAWER, TOGGLE_RIGHT_DRAWER} from "../types";

export const toggleRightDrawer = (open: boolean) => async (dispatch: AppDispatch) => {
    dispatch({
        type: TOGGLE_RIGHT_DRAWER,
        payload: open
    })
}

export const toggleLeftDrawer = (open: boolean) => async (dispatch: AppDispatch) => {
    dispatch({
        type: TOGGLE_LEFT_DRAWER,
        payload: open
    })
}
