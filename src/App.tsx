import React, {useEffect} from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "./route";
import {useAppDispatch} from "./redux/hooks";
import {retrieveCategories} from "./redux/actions/CategoryAction";


function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(retrieveCategories());
    }, [dispatch]);

    return (<RouterProvider router={router}/>)
}

export default App;
