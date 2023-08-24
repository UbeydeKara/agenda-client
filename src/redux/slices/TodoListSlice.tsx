import {TodoResponse} from "../../services/todo-service";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Define a type for the slice state
interface TodoState {
    todoList: Array<TodoResponse>;
    selectedTodo: any;
}

const initialState: TodoState = {todoList: [], selectedTodo: {}};

export const TodoListSlice = createSlice({
    name: 'todoList',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setTodoList: (state, action: PayloadAction<Array<TodoResponse>>) => {
            state.todoList = action.payload
        },
        selectTodo: (state, action: PayloadAction<any>) => {
            state.selectedTodo = action.payload
        },
    },
})

export const {setTodoList, selectTodo} = TodoListSlice.actions;
