import React from "react";
import Stack from "./Stack";
import {FormProvider, UseFormReturn} from "react-hook-form";

interface IForm extends React.FormHTMLAttributes<HTMLFormElement> {
    methods: UseFormReturn<any>;
    onSave: Function;
}

function Form({...props}: IForm) {

    const {handleSubmit, getValues} = props.methods;

    const onSubmit = () => {
        props.onSave(getValues());
    }

    return (<FormProvider {...props.methods}>
            <form
                {...props}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off">
                <Stack spacing={4} className="my-4 flex-grow">
                    {props.children}
                </Stack>
            </form>
        </FormProvider>)
}

export default Form;
