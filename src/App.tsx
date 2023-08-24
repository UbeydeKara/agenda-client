import React from 'react';
import {Container} from "./components";
import {TodoDetail, TodoList} from "./sections";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Container className="h-screen">
                <TodoList/>
                <TodoDetail/>
            </Container>
        </Provider>
    );
}

export default App;
