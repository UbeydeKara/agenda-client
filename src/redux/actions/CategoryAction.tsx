import {AppDispatch} from "../store";
import CategoryService from "../../services/category-service";
import {DELETE_CATEGORY, RETRIEVE_CATEGORIES, SAVE_CATEGORY} from "../types";

export const retrieveCategories = () => async (dispatch: AppDispatch) => {
    try {
        const res = await CategoryService.findAll();
        dispatch({
            type: RETRIEVE_CATEGORIES,
            payload: res.data
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const saveCategory = (category: any) => async (dispatch: AppDispatch) => {
    try {
        const res = await CategoryService.save(category);
        dispatch({
            type: SAVE_CATEGORY,
            payload: res.data
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const deleteCategoryById = (categoryId: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await CategoryService.deleteById(categoryId);
        dispatch({
            type: DELETE_CATEGORY,
            payload: res.data
        })
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}
