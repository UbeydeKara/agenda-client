import {TodoResponse} from "../../services/todo-service";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Define a type for the slice state
interface TodoState {
    todoList: Array<TodoResponse>
}

const initialState: TodoState = {todoList: []};

export const TodoListSlice = createSlice({
    name: 'todoList',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        retrieveAllList: (state, action: PayloadAction<Array<TodoResponse>>) => {
            state.todoList = action.payload
        },
    },
})
