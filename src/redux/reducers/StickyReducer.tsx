import {DELETE_STICKY, RETRIEVE_STICKIES, SAVE_STICKY} from "../types";

const initialState: any = [];

function StickyReducer(state = initialState, action: any) {
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_STICKIES:
            return payload;
        case SAVE_STICKY:
            return [...state, payload];
        case DELETE_STICKY:
            return state.filter((x: any) => x.noteId !== action.payload)
        default:
            return state;
    }
}

export default StickyReducer;
