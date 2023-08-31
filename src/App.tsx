import React, {useEffect} from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "./route";
import {useAppDispatch} from "./redux/hooks";
import {retrieveCategories} from "./redux/actions/CategoryAction";
import {retrieveList, retrieveListByDate} from "./redux/actions/TodoAction";


function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        Promise.allSettled([
            dispatch(retrieveList()),
            dispatch(retrieveListByDate()),
            dispatch(retrieveCategories())
        ]);
    }, [dispatch]);

    return (<RouterProvider router={router}/>)
}

export default App;
