import React, {useEffect} from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "./route";
import {useAppDispatch} from "./redux/hooks";
import {retrieveCategories} from "./redux/actions/CategoryAction";
import {retrieveList, retrieveListByDate} from "./redux/actions/TodoAction";
import {retrieveStickies} from "./redux/actions/StickyAction";
import {useLocalStorage} from "./hooks";


function App() {
    const dispatch = useAppDispatch();
    const [user] = useLocalStorage("user");

    const retrieveData = async() => {
        await Promise.allSettled([
            dispatch(retrieveList()),
            dispatch(retrieveListByDate()),
            dispatch(retrieveStickies()),
            dispatch(retrieveCategories())
        ]);
    }

    useEffect(() => {
        if (user) {}
            retrieveData();
    }, [user]);

    return (<RouterProvider router={router}/>)
}

export default App;
