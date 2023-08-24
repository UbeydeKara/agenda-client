import {List, ListItem, Stack, Typography} from "../components";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {retrieveList} from "../redux/actions/ListActions";
import {selectTodo} from "../redux/slices/TodoListSlice";

function TodoList() {
    const {todoList, selectedTodo} = useAppSelector(x => x.list);
    const dispatch = useAppDispatch();

    const selectItem = (item: any) => {
        dispatch(selectTodo(item));
    };

    const classes = [
        "h-full transition-all duration-500",
        selectedTodo ? "w-3/4" : "w-full"
    ].join(" ").trim();

    useEffect(() => {
        dispatch(retrieveList());
    }, [dispatch]);

    return(
        <Stack direction="column" justifyCenter spacing={10} className={classes}>
            <Typography variant="h1" className="text-5xl font-bold">
                Yapılacaklar
            </Typography>

            <List className="mt-4">
                {Object.values(todoList).map(item => (
                    <ListItem key={item.todoId} onClick={() => selectItem(item)}>{item}</ListItem>
                ))}
            </List>
        </Stack>
    )
}

export default TodoList;
