import {Button, List, ListItem, Stack, Typography} from "../components";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {retrieveList} from "../redux/actions/ListActions";
import {selectTodo} from "../redux/slices/TodoListSlice";
import {PlusIcon} from "@heroicons/react/20/solid";

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
        <Stack justifyCenter spacing={10} className={classes}>
            <Typography variant="h1" className="text-5xl font-bold">
                Yapılacaklar
            </Typography>

            <Stack>
                <Button variant="outlined" className="text-gray-400 !justify-start" onClick={() => selectItem({})}
                        startIcon={<PlusIcon className="h-7 w-7 text-gray-500 mr-2"/>}>
                    Yeni Etkinlik Oluştur
                </Button>

                <List>
                    {Object.values(todoList).map(item => (
                        <ListItem key={item.todoId} onClick={() => selectItem(item)}>{item}</ListItem>
                    ))}
                </List>
            </Stack>
        </Stack>
    )
}

export default TodoList;
