import TodoService, {TodoPayload} from "../../services/todo-service";
import {AppDispatch} from "../store";
import {addTodo, deleteTodo, setTodoList} from "../slices/TodoListSlice";

export const retrieveList = () => async (dispatch: AppDispatch) => {
    try {
        const res = await TodoService.findAll();
        dispatch(setTodoList(res.data))
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const saveTodo = (todo: TodoPayload) => async (dispatch: AppDispatch) => {
    try {
        const res = await TodoService.save(todo);
        dispatch(addTodo(res.data))
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}


export const deleteTodoById = (todoId: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await TodoService.deleteById(todoId);
        dispatch(deleteTodo(todoId))
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}
