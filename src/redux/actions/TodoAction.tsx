import TodoService, {TodoPayload} from "../../services/todo-service";
import {AppDispatch} from "../store";
import {DELETE_TODO, GET_ALL_TODOS_BY_DATE, RETRIEVE_TODO_LIST, SAVE_TODO, SELECT_TODO, UPDATE_TODO} from "../types";

export const retrieveList = () => async (dispatch: AppDispatch) => {
    try {
        const res = await TodoService.findAll();
        dispatch({
            type: RETRIEVE_TODO_LIST,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const retrieveListByDate = () => async (dispatch: AppDispatch) => {
    try {
        const res = await TodoService.getAllByDate();
        dispatch({
            type: GET_ALL_TODOS_BY_DATE,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const saveTodo = (todo: TodoPayload) => async (dispatch: AppDispatch) => {
    try {
        let saveValues = {...todo};

        if (saveValues.category)
            saveValues = {...saveValues, categoryId: todo.category.categoryId, category: null}

        const res = await TodoService.save(saveValues);

        dispatch({
            type: SAVE_TODO,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const updateTodoAction = (todo: TodoPayload) => async (dispatch: AppDispatch) => {
    try {
        let saveValues = {...todo}
        if (todo.category) {
            saveValues = {...saveValues, categoryId: todo.category.categoryId}
        }

        const res = await TodoService.update(saveValues);
        dispatch({
            type: UPDATE_TODO,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const deleteTodoById = (todoId: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await TodoService.deleteById(todoId);
        dispatch({
            type: DELETE_TODO,
            payload: todoId
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const selectTodo = (todo: any) => async (dispatch: AppDispatch) => {
    dispatch({
        type: SELECT_TODO,
        payload: todo
    });
}
