import React, {useEffect, useState} from "react";
import {Button, Drawer, Form, IconButton, Stack, TextField, Typography} from "../components";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {ChevronDownIcon, XMarkIcon} from "@heroicons/react/20/solid";
import {selectTodo} from "../redux/slices/TodoListSlice";
import {deleteTodoById, saveTodo, updateTodoAction} from "../redux/actions/ListActions";
import Datepicker from "tailwind-datepicker-react"
import {options} from "../constants/DatePickerOptions";

function TodoDetail() {
    const {selectedTodo} = useAppSelector(x => x.list);
    const dispatch = useAppDispatch();

    const [open, setOpen] = useState(true);
    const [pickerOpen, setPickerOpen] = useState(false);
    const [values, setValues] = useState(selectedTodo);

    const newRecord = Object.keys(selectedTodo).length === 0;

    // Drawer
    const handleSave = () => {
        dispatch(newRecord ? saveTodo(values) : updateTodoAction(values));
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

    // DatePicker
    const dateChange = (date: Date) => {
        setValues({...values, dueAt: date});
        setPickerOpen(false);
    };

    const handlePickerShow = (state: boolean) => {
        setPickerOpen(state);
    }

    const handlePickerOpen = () => {
        setPickerOpen(true);
    }

    // useEffect
    useEffect(() => {
        setValues(selectedTodo);
        setOpen(Boolean(selectedTodo));
    }, [selectedTodo]);

    return(
        <Drawer open={open} className="w-5/12 max-w-[480px]">
            <Stack direction="row" spacing="auto" itemsCenter>
                <Typography variant="h1" className="text-xl font-bold">
                    {newRecord ? "Yeni Etkinlik" : "Etkinlik: " + values.title}
                </Typography>

                <IconButton onClick={handleClose}>
                    <XMarkIcon className="h-7 w-7 text-gray-500"/>
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

                <Stack direction="row" spacing={4} itemsCenter>
                    <Typography variant="span" className="text-[15px] text-gray-600 mb-1">
                        Bitiş Tarihi
                    </Typography>

                    <Datepicker options={options} onChange={dateChange} show={pickerOpen} setShow={handlePickerShow} classNames="!w-auto">
                        <Button variant="outlined" className="!bg-gray-100 !px-1 !py-1"
                                endIcon={<ChevronDownIcon className="h-7 w-7 text-gray-500"/>}
                                onClick={handlePickerOpen}>
                            {values.dueAt ? new Date(values.dueAt).toLocaleDateString() : new Date().toLocaleDateString()}
                        </Button>
                    </Datepicker>
                </Stack>

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
