import React from "react";

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    rows?: number;
    className?: string;
}

function TextField({rows = 1, className, ...props} : ITextField) {

    const inputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
        "focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 " +
        "dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"

    const areaClass = "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border " +
        "border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 " +
        "dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"

    return(
        rows > 1 ?
        <textarea {...props} rows={rows} className={`${areaClass} ${className}`.trim()} /> :
        <input {...props} type="text" className={`${inputClass} ${className}`.trim()} />
    )
}

export default TextField;
