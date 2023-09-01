import {configureStore} from "@reduxjs/toolkit";
import UIReducer from "./reducers/UIReducer";
import CategoryReducer from "./reducers/CategoryReducer";
import TodoReducer from "./reducers/TodoReducer";
import StickyReducer from "./reducers/StickyReducer";

const store = configureStore({
    reducer: {
        list: TodoReducer,
        category: CategoryReducer,
        sticky: StickyReducer,
        ui: UIReducer
    }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
