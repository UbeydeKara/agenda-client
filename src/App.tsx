import React, {useEffect} from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "./route";
import {useAppDispatch} from "./redux/hooks";
import {retrieveCategories} from "./redux/actions/CategoryAction";
import {retrieveList, retrieveListByDate} from "./redux/actions/TodoAction";
import {retrieveStickies} from "./redux/actions/StickyAction";
import {useLocalStorage} from "./hooks";
import {showAlert} from "./redux/actions/AlertAction";


function App() {
    const dispatch = useAppDispatch();
    const [user, setUser] = useLocalStorage("user");

    const handleErrors = (error: any) => {
        if (error.response?.status === 401) {
            setUser(null);
            dispatch(showAlert("Oturum süreniz doldu."));
        } else {
            dispatch(showAlert("Bağlantı hatası. Sunucuya bağlanılamadı."));
        }
    };

    const retrieveData = async() => {
        await Promise.all([
            dispatch(retrieveList()),
            dispatch(retrieveListByDate()),
            dispatch(retrieveStickies()),
            dispatch(retrieveCategories())
        ]);
    }

    useEffect(() => {
        if (Boolean(user)) {
            retrieveData().catch(handleErrors);
        }
    }, [user]);

    return (<RouterProvider router={router}/>)
}

export default App;
