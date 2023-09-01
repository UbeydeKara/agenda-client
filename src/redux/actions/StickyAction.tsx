import {AppDispatch} from "../store";
import {DELETE_STICKY, RETRIEVE_STICKIES, SAVE_STICKY} from "../types";
import StickyService from "../../services/sticky-service";

export const retrieveStickies = () => async (dispatch: AppDispatch) => {
    try {
        const res = await StickyService.findAll();
        dispatch({
            type: RETRIEVE_STICKIES,
            payload: res.data
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const saveSticky = (note: any) => async (dispatch: AppDispatch) => {
    try {
        const res = await StickyService.save(note);
        dispatch({
            type: SAVE_STICKY,
            payload: res.data
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const deleteCategoryById = (noteId: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await StickyService.deleteById(noteId);
        dispatch({
            type: DELETE_STICKY,
            payload: res.data
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}
