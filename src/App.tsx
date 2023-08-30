import React from 'react';
import {Stack} from "./components";
import {Sidebar, TodoList} from "./sections";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";

function Layout() {
    return (<Stack direction="row" className="overflow-hidden">
            <Sidebar/>
            <Outlet/>
        </Stack>)
}

function App() {
    return (<Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Navigate to="/list" replace/>}/>
                <Route path="list" element={<TodoList/>}/>
                <Route path="*" element={<></>}/>
            </Route>
        </Routes>);
}

export default App;
