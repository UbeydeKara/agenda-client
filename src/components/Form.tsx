import React from "react";
import Stack from "./Stack";

interface IForm extends React.FormHTMLAttributes<HTMLFormElement> {
}

function Form({...props} : IForm) {
    return(
        <form {...props}>
            <Stack spacing={4} className="my-4 flex-grow">
                {props.children}
            </Stack>
        </form>
    )
}

export default Form;
