import React from "react";

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    rows?: number;
    inputAdornment?: React.ReactNode;
    className?: string;
}

function TextField({rows = 1, inputAdornment, className, ...props} : ITextField) {

    const inputClass = [
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
        "focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 " +
        "dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        inputAdornment ? "pl-10" : "",
        className
    ].join(" ").trim();

    const areaClass = [
        "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border " +
        "border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 " +
        "dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        inputAdornment ? "pl-10" : "",
        className
    ].join(" ").trim();

    return(
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                {inputAdornment}
            </div>
            {rows > 1 ?
                <textarea {...props} rows={rows} className={areaClass} /> :
                <input {...props} type="text" className={inputClass} />}
        </div>
    )
}

export default TextField;
