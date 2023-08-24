import React from "react";
import Stack from "./Stack";

interface IForm extends React.FormHTMLAttributes<HTMLFormElement> {
}

function Form({...props} : IForm) {
    return(
        <form>
            <Stack spacing={4} className="my-4">
                {props.children}
            </Stack>
        </form>
    )
}

export default Form;
