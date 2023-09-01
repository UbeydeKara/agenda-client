import {TOGGLE_LEFT_DRAWER, TOGGLE_RIGHT_DRAWER} from "../types";

const initialState = {
    leftDrawerOpen: true,
    rightDrawerOpen: false
};

function UIReducer(state = initialState, action: any) {
    const { type, payload } = action;

    switch (type) {
        case TOGGLE_LEFT_DRAWER:
            return {...state, leftDrawerOpen: payload};
        case TOGGLE_RIGHT_DRAWER:
            return {...state, rightDrawerOpen: payload};
        default:
            return state;
    }
}

export default UIReducer;
