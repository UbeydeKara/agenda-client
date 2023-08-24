import {List, ListItem} from "../components";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {retrieveList} from "../redux/actions/ListActions";

function TodoList() {
    const {todoList} = useAppSelector(x => x.list);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(retrieveList());
    }, [dispatch]);

    return(
        <List className="mt-4">
            {Object.values(todoList).map(item => (
                <ListItem key={item.todoId}>{item}</ListItem>
            ))}
        </List>
    )
}

export default TodoList;
