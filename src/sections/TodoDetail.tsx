import React, {useEffect, useState} from "react";
import {Button, Drawer, Form, Stack, TextField, Typography} from "../components";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {XMarkIcon} from "@heroicons/react/20/solid";
import {selectTodo} from "../redux/slices/TodoListSlice";

function TodoDetail() {
    const {selectedTodo} = useAppSelector(x => x.list);
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(selectTodo(false));
    }

    useEffect(() => {
        setOpen(Boolean(selectedTodo));
    }, [selectedTodo]);

    return(
        <Drawer open={open}>
            <Stack direction="row" spacing="auto" itemsCenter>
                <Typography variant="h1" className="text-xl font-medium">
                    Etkinlik
                </Typography>

                <XMarkIcon className="h-7 w-7 text-gray-500 font-bold" onClick={handleClose}/>
            </Stack>

            <Form>
                <TextField placeholder="Başlık"/>
                <TextField placeholder="Açıklama" rows={6}/>

                <Stack direction="row" spacing="auto" itemsCenter>
                    <Button variant="outlined">
                        Etkinliği sil
                    </Button>
                    <Button>
                        Değişikliği kaydet
                    </Button>
                </Stack>
            </Form>
        </Drawer>
    )
}

export default TodoDetail;
