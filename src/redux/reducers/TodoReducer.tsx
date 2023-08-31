import {DELETE_TODO, GET_ALL_TODOS_BY_DATE, RETRIEVE_TODO_LIST, SAVE_TODO, SELECT_TODO, UPDATE_TODO} from "../types";
import {TodoPayload} from "../../services/todo-service";

interface TodoByDate {
    today: Array<TodoPayload>;
    tomorrow: Array<TodoPayload>;
    thisWeek: Array<TodoPayload>;
    rest: Array<TodoPayload>;
}

interface TodoState {
    todoList: Array<TodoPayload>;
    todoListByDate: TodoByDate;
    selectedTodo: any;
}

const initialState: TodoState = {
    todoList: [],
    todoListByDate: {
        today: [],
        tomorrow: [],
        thisWeek: [],
        rest: [],
    },
    selectedTodo: {}};

function TodoReducer(state = initialState, action: any) {
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_TODO_LIST:
            return {...state, todoList: payload};
        case GET_ALL_TODOS_BY_DATE:
            return {...state, todoListByDate: payload};
        case SAVE_TODO:
            return {...state, todoList: [...state.todoList, payload]}
        case UPDATE_TODO:
            return {...state, todoList: state.todoList.map(obj => {
                    if (obj.todoId === action.payload.todoId) return action.payload;
                    return obj;
                })}
        case DELETE_TODO:
            return {...state, todoList: state.todoList.filter(x => x.todoId !== action.payload)}
        case SELECT_TODO:
            return {...state, selectedTodo: payload}
        default:
            return state;
    }
}

export default TodoReducer;
