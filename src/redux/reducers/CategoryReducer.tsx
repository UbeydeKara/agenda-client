import {RETRIEVE_CATEGORIES, SAVE_CATEGORY} from "../types";

const initialState: any = [];

function CategoryReducer(state = initialState, action: any) {
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_CATEGORIES:
            return payload;
        case SAVE_CATEGORY:
            return [...state, payload];
        default:
            return state;
    }
}

export default CategoryReducer;
