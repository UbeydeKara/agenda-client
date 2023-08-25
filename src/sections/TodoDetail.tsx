import React, {useEffect, useState} from "react";
import {Button, Drawer, Form, IconButton, Stack, TextField, Typography} from "../components";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {XMarkIcon} from "@heroicons/react/20/solid";
import {selectTodo} from "../redux/slices/TodoListSlice";
import {deleteTodoById, saveTodo} from "../redux/actions/ListActions";

function TodoDetail() {
    const {selectedTodo} = useAppSelector(x => x.list);
    const dispatch = useAppDispatch();

    const [open, setOpen] = useState(false);
    const [values, setValues] = useState(selectedTodo);

    const newRecord = Object.keys(selectedTodo).length === 0;

    const handleSave = () => {
        dispatch(saveTodo(values));
    }

    const handleDelete = () => {
        if (!newRecord)
            dispatch(deleteTodoById(values.todoId));

        dispatch(selectTodo({}));
    }

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues({...values, [name]: value});
    };

    const handleClose = () => {
        dispatch(selectTodo(false));
    }

    useEffect(() => {
        setValues(selectedTodo);
        setOpen(Boolean(selectedTodo));
    }, [selectedTodo]);

    return(
        <Drawer open={open}>
            <Stack direction="row" spacing="auto" itemsCenter>
                <Typography variant="h1" className="text-xl font-medium">
                    Etkinlik
                </Typography>

                <IconButton onClick={handleClose}>
                    <XMarkIcon className="h-7 w-7 text-gray-500 font-bold"/>
                </IconButton>
            </Stack>

            <Form>
                <TextField
                    name="title"
                    value={values.title || ""}
                    placeholder="Başlık"
                    className="!bg-gray-100"
                    onChange={handleChange}/>

                <TextField
                    name="description"
                    value={values.description || ""}
                    placeholder="Açıklama"
                    rows={6}
                    className="!bg-gray-100"
                    onChange={handleChange}/>

                <Stack direction="row" spacing={3} itemsCenter>
                    <Button variant="outlined" className="!bg-gray-100 w-full" onClick={handleDelete}>
                        {newRecord ? "İptal" : "Etkinliği sil"}
                    </Button>
                    <Button className="w-full" onClick={handleSave}>
                        {newRecord ? "Oluştur" : "Değişikliği kaydet"}
                    </Button>
                </Stack>
            </Form>
        </Drawer>
    )
}

export default TodoDetail;
