import TodoService from "../../services/todo-service";
import {AppDispatch} from "../store";
import {setTodoList} from "../slices/TodoListSlice";

export const retrieveList = () => async (dispatch: AppDispatch) => {
    try {
        const res = await TodoService.findAll();
        dispatch(setTodoList(res.data))
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}
