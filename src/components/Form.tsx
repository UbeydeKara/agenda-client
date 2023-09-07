import React from "react";
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
                {props.children}
            </form>
        </FormProvider>)
}

export default Form;
