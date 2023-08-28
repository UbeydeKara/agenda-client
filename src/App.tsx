import React from 'react';
import {Stack} from "./components";
import {Sidebar, TodoDetail, TodoList} from "./sections";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Stack direction="row" className="overflow-hidden">
                <Sidebar/>
                <TodoList/>
                <TodoDetail/>
            </Stack>
        </Provider>
    );
}

export default App;
