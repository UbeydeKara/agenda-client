import React from "react";
import {FormProvider, UseFormReturn} from "react-hook-form";

interface IForm extends React.FormHTMLAttributes<HTMLFormElement> {
    methods: UseFormReturn<any>;
    onSave: Function;
}

function Form({methods, onSave, ...props}: IForm) {

    const {handleSubmit, getValues} = methods;

    const onSubmit = () => {
        onSave(getValues());
    }

    return (<FormProvider {...methods}>
            <form
                {...props}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off">
                {props.children}
            </form>
        </FormProvider>)
}

export default Form;
