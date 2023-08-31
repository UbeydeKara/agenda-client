import React, {useEffect, useState} from "react";
import {Button, Drawer, Form, IconButton, Select, Stack, TextField, Typography} from "../components";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {ChevronDownIcon, XMarkIcon} from "@heroicons/react/20/solid";
import {deleteTodoById, saveTodo, selectTodo, updateTodoAction} from "../redux/actions/TodoAction";
import Datepicker from "tailwind-datepicker-react"
import {toggleRightDrawer} from "../redux/actions/UIActions";
import {datePickerOptions} from "../constants";

function TodoDetail() {
    const {selectedTodo} = useAppSelector(x => x.list);
    const {rightDrawerOpen} = useAppSelector(x => x.ui);
    const categories = useAppSelector(x => x.category);

    const dispatch = useAppDispatch();

    const [pickerOpen, setPickerOpen] = useState(false);
    const [values, setValues] = useState<any>({});

    const newRecord = Object.keys(selectedTodo).length === 0;

    // Drawer
    const handleSave = () => {
        let saveValues = {...values}

        if (values.category) {
            saveValues = {...saveValues, categoryId: values.category.categoryId}
        }

        dispatch(newRecord ? saveTodo(saveValues) : updateTodoAction(saveValues));
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

    const handleSelectChange = (name: string, value: Object) => {
        setValues({...values, [name]: value});
    };

    const handleClose = () => {
        dispatch(toggleRightDrawer(false));
    }

    // DatePicker
    const dateChange = (date: Date) => {
        setValues({...values, dueAt: date});
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
    }, [selectedTodo]);

    // fix auto hide datepicker
    useEffect(() => {
        window.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;

            if (document.getElementById("pickerContainer")?.contains(target)) {
                return;
            }

            setPickerOpen(false);
        })
    }, [setPickerOpen]);

    return(
        <Drawer open={rightDrawerOpen} className="w-[350px] xl:w-[450px]">
            <Stack direction="row" spacing="auto" itemsCenter>
                <Typography variant="h1" className="text-xl font-bold">
                    {newRecord ? "Yeni Etkinlik" : "Etkinlik: " + values.title}
                </Typography>

                <IconButton onClick={handleClose}>
                    <XMarkIcon className="h-7 w-7 text-gray-500"/>
                </IconButton>
            </Stack>

            <Form className="flex h-full">
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

                {categories.length > 0 &&
                    <Stack id="listContainer" direction="row" spacing={4} itemsCenter>
                        <Typography variant="span" className="text-[15px] text-gray-600 mb-1">
                            Liste
                        </Typography>

                        <Select options={categories} variant="outlined" className="!bg-gray-100 !px-1 !py-1"
                                endIcon={<ChevronDownIcon className="h-6 w-6 text-gray-500"/>}
                                onClick={handlePickerOpen}
                                handleChange={handleSelectChange}
                                optionValue="category"
                                optionLabel="name"
                                optionIcon="colorCode">
                            {values.category?.name || "Liste seçin"}
                        </Select>
                    </Stack>
                }

                <Stack id="pickerContainer" direction="row" spacing={4} itemsCenter>
                    <Typography variant="span" className="text-[15px] text-gray-600 mb-1">
                        Bitiş Tarihi
                    </Typography>

                    <Datepicker options={datePickerOptions} onChange={dateChange} show={pickerOpen} setShow={handlePickerShow} classNames="!w-auto">
                        <Button variant="outlined" className="!bg-gray-100 !px-1 !py-1"
                                endIcon={<ChevronDownIcon className="h-6 w-6 text-gray-500"/>}
                                onClick={handlePickerOpen}>
                            {values.dueAt ? new Date(values.dueAt).toLocaleDateString() : "Tarih seçin"}
                        </Button>
                    </Datepicker>
                </Stack>

                <Stack direction="row" spacing={3} itemsCenter className="!mt-auto pb-4">
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
