import TodoService from "../../services/todo-service";
import {AppDispatch} from "../store";
import {TodoListSlice} from "../slices/TodoListSlice";

const actions = TodoListSlice.actions;

export const retrieveList = () => async (dispatch: AppDispatch) => {
    try {
        const res = await TodoService.findAll();
        dispatch(actions.retrieveAllList(res.data))
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}
