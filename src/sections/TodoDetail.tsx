import React, {useEffect} from "react";
import {Button, DateField, Drawer, Form, IconButton, Select, Stack, TextField, Typography} from "../components";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {ChevronDownIcon, XMarkIcon} from "@heroicons/react/20/solid";
import {deleteTodoById, saveTodo, selectTodo, updateTodoAction} from "../redux/actions/TodoAction";
import {toggleRightDrawer} from "../redux/actions/UIActions";
import {detailFormSchema, detailInitialValues} from "../constants";
import {TodoPayload} from "../services/todo-service";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

function TodoDetail() {
    const {selectedTodo} = useAppSelector(x => x.list);
    const {rightDrawerOpen} = useAppSelector(x => x.ui);
    const categories = useAppSelector(x => x.category);

    const dispatch = useAppDispatch();

    const newRecord = Object.keys(selectedTodo).length === 0;

    const methods = useForm({
        resolver: yupResolver(detailFormSchema),
        defaultValues: detailInitialValues,
        mode: "all"
    });
    const {
        reset,
        getValues,
        setValue
    } = methods;

    // Drawer
    const handleSave = (values: TodoPayload) => {
        dispatch(newRecord ? saveTodo(values) : updateTodoAction(values));
    }

    const handleDelete = () => {
        if (!newRecord)
            dispatch(deleteTodoById(selectedTodo.todoId));

        dispatch(selectTodo({}));
    }

    const handleClose = () => {
        dispatch(toggleRightDrawer(false));
    }

    // reset form
    useEffect(() => {
        if (Boolean(selectedTodo))
            reset(selectedTodo);
        else
            reset();
    }, [selectedTodo]);

    return(
        <Drawer open={rightDrawerOpen} className="w-[350px] xl:w-[450px]">
            <Stack direction="row" spacing="auto" itemsCenter>
                <Typography variant="h1" className="text-xl font-bold">
                    {newRecord ? "Yeni Etkinlik" : "Etkinlik: " + getValues("title")}
                </Typography>

                <IconButton onClick={handleClose}>
                    <XMarkIcon className="h-7 w-7 text-gray-500"/>
                </IconButton>
            </Stack>

            <Form methods={methods} onSave={handleSave} className="flex h-full">
                <Stack spacing={4} className="my-4 flex-grow">
                    <TextField
                        name="title"
                        placeholder="Başlık"
                        className="!bg-gray-100"/>

                    <TextField
                        name="description"
                        placeholder="Açıklama"
                        rows={6}
                        className="!bg-gray-100"/>

                    {categories.length > 0 &&
                        <Stack id="listContainer" direction="row" spacing={4} itemsCenter>
                            <Typography variant="span" className="text-[15px] text-gray-600 mb-1">
                                Liste
                            </Typography>

                            <Select options={categories}
                                    handleChange={setValue}
                                    variant="outlined"
                                    className="!bg-gray-100 !px-1 !py-1"
                                    endIcon={<ChevronDownIcon className="h-6 w-6 text-gray-500"/>}
                                    optionValue="category"
                                    optionLabel="name"
                                    optionIcon="colorCode">
                                Liste Seçiniz
                            </Select>
                        </Stack>
                    }

                    <Stack id="pickerContainer" direction="row" spacing={4}>
                        <Typography variant="span" className="text-[15px] text-gray-600 mt-[7px]">
                            Bitiş Tarihi
                        </Typography>

                        <DateField fieldName="dueAt"/>
                    </Stack>

                    <Stack direction="row" spacing={3} itemsCenter className="!mt-auto pb-4">
                        <Button variant="outlined" className="!bg-gray-100 w-full" onClick={handleDelete}>
                            {newRecord ? "İptal" : "Etkinliği sil"}
                        </Button>
                        <Button type="submit" className="w-full">
                            {newRecord ? "Oluştur" : "Değişikliği kaydet"}
                        </Button>
                    </Stack>
                </Stack>
            </Form>
        </Drawer>
    )
}

export default TodoDetail;
