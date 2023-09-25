import {ALERT_MESSAGE} from "../types";

const initialState = {
    id: 0,
    message: ""
};

function AlertReducer(state = initialState, action: any) {
    const { type, payload } = action;

    switch (type) {
        case ALERT_MESSAGE:
            return {...state, id: state.id + 1, message: payload};
        default:
            return state;
    }
}

export default AlertReducer;
