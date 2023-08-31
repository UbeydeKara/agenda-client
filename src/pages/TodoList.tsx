import {Button, Card, Container, List, ListItem, Stack, Typography} from "../components";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {retrieveList} from "../redux/actions/ListActions";
import {selectTodo} from "../redux/slices/TodoListSlice";
import {PlusIcon} from "@heroicons/react/20/solid";
import {toggleRightDrawer} from "../redux/actions/UIActions";
import {TodoDetail} from "../sections";

function TodoList() {
    const {todoList} = useAppSelector(x => x.list);
    const {leftDrawerOpen, rightDrawerOpen} = useAppSelector(x => x.ui);
    const dispatch = useAppDispatch();

    const selectItem = (item: any) => {
        dispatch(selectTodo(item));
        dispatch(toggleRightDrawer(true));
    };

    const containerClass = [
        rightDrawerOpen ? "lg:pr-[380px] xl:pr-[480px]" : "lg:pr-34 xl:pr-44",
        leftDrawerOpen && !rightDrawerOpen ? "xl:!pr-14" : "",
    ].join(" ").trim();

    useEffect(() => {
        dispatch(retrieveList());
    }, [dispatch]);

    return(
        <>
            <Container className={containerClass}>
                <Stack justifyCenter spacing={10} className="h-screen">
                    <Stack direction="row" spacing={6}>
                        <Typography variant="h1" className="text-5xl font-bold">
                            Yapılacaklar
                        </Typography>
                        <Card className="px-3 py-1">
                            <Typography variant="h5" className="text-4xl">
                                {todoList.length}
                            </Typography>
                        </Card>
                    </Stack>

                    <Stack>
                        <Button variant="outlined" className="text-gray-400 !justify-start" onClick={() => selectItem({})}
                                startIcon={<PlusIcon className="h-7 w-7 text-gray-500"/>}>
                            <Typography variant="span" className="text-gray-500">
                                Yeni Etkinlik Oluştur
                            </Typography>
                        </Button>

                        <List>
                            {Object.values(todoList).map(item => (
                                <ListItem key={item.todoId} onClick={() => selectItem(item)}>{item}</ListItem>
                            ))}
                        </List>
                    </Stack>
                </Stack>
            </Container>
            <TodoDetail/>
        </>
    )
}

export default TodoList;
