import React from "react";

interface IButton extends React.FormHTMLAttributes<HTMLFormElement> {
    variant?: string
}

function Button({variant = "contained", ...props} : IButton) {

    const containedStyle = "text-white bg-primary-600 hover:bg-primary-700 font-medium " +
        "rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700";

    const outlinedStyle = "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 " +
        "font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 " +
        "dark:hover:bg-gray-700 dark:hover:border-gray-600";

    return(
        <button type="button" className={variant === "contained" ? containedStyle : outlinedStyle}>
            {props.children}
        </button>
    )
}

export default Button;
