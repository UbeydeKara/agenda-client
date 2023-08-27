import {TodoPayload} from "../../services/todo-service";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Define a type for the slice state
interface TodoState {
    todoList: Array<TodoPayload>;
    selectedTodo: any;
}

const initialState: TodoState = {todoList: [], selectedTodo: {}};

export const TodoListSlice = createSlice({
    name: 'todoList',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setTodoList: (state, action: PayloadAction<Array<TodoPayload>>) => {
            state.todoList = action.payload
        },
        addTodo: (state, action: PayloadAction<any>) => {
            state.todoList = [...state.todoList, action.payload]
        },
        updateTodo: (state, action: PayloadAction<TodoPayload>) => {
            // Loop through the array to find the post you want to modify
            state.todoList = state.todoList.map(obj => {
                    if (obj.todoId === action.payload.todoId) return action.payload;
                    return obj;
                })
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todoList = state.todoList.filter(x => x.todoId !== action.payload)
        },
        selectTodo: (state, action: PayloadAction<any>) => {
            state.selectedTodo = action.payload
        }
    },
})

export const {
    setTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
    selectTodo} = TodoListSlice.actions;
