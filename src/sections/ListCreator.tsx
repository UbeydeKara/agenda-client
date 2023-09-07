import {Card, Form, Stack, TextField} from "../components";
import React from "react";
import {rippleEffect} from "../utils";
import {useAppDispatch} from "../redux/hooks";
import {saveCategory} from "../redux/actions/CategoryAction";
import Fade from "../transitions/Fade";
import {listColors, listFormSchema, listInitialValues} from "../constants";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

interface IListCreator extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    setOpen: Function;
}

function ListCreator({open, setOpen}: IListCreator) {
    const dispatch = useAppDispatch();

    const methods = useForm({
        resolver: yupResolver(listFormSchema),
        defaultValues: listInitialValues,
        mode: "all"
    });

    const {
        getValues,
        setValue
    } = methods;

    const handleSave = (values: any) => {
        dispatch(saveCategory(values)).finally(handleClose);
    }

    const handleClick = (event: any) => {
        setValue("colorCode", event);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <Fade appear={open}>
            <Card className="!bg-transparent p-3 shadow-transparent">
                <Form
                    methods={methods}
                    onSave={handleSave}>
                    <TextField
                        name="name"
                        placeholder="Liste Adı"
                        className="!bg-transparent py-2"
                        inputAdornment={
                            <div className={`h-4 w-4 rounded transition-colors ${getValues("colorCode")}`}/>
                        }
                        type="submit"
                    />

                    <Stack direction="row" spacing={3} className="mt-4">
                        {listColors.map(color => (
                            <button
                                type="button"
                                key={color}
                                className={`h-4 w-4 rounded relative overflow-hidden ${color}`}
                                onClick={() => handleClick(color)}>
                                <div id="rippleOverlay" className="absolute top-0 left-0 right-0 bottom-0"
                                     onMouseDown={rippleEffect}/>
                            </button>
                        ))}
                    </Stack>
                </Form>
            </Card>
        </Fade>
    )
}

export default ListCreator;
