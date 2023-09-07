import React from "react";
import {Controller, useFormContext} from "react-hook-form";

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    rows?: number;
    inputAdornment?: React.ReactNode;
    name: string;
}

function TextField({rows = 1, inputAdornment, name, ...props} : ITextField) {
    const { control } = useFormContext();

    const inputClass = [
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
        "focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 " +
        "dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        inputAdornment ? "pl-10" : "",
        props.className
    ].join(" ").trim();

    const areaClass = [
        "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border " +
        "border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 " +
        "dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        inputAdornment ? "pl-10" : "",
        props.className
    ].join(" ").trim();

    return(
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            {inputAdornment}
                        </div>
                        {rows > 1 ?
                            <textarea {...field} {...props} id={name} rows={rows} className={areaClass} /> :
                            <input {...field} {...props} id={name} type="text" className={inputClass}/>}
                    </div>
                    {error && <small className="!mt-1 inline-block text-xs text-red-500">
                        {error.message}
                    </small>}
                </>
            )}
        />
    )
}

export default TextField;
