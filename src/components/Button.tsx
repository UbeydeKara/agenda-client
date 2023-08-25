import React from "react";
import {rippleEffect} from "../utils/Ripple";


interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "contained" | "outlined";
    startIcon?: React.ReactNode;
    className?: string;
}

function Button({variant = "contained", startIcon, className, ...props} : IButton) {

    const containedClass = "relative overflow-hidden flex flex-row items-center justify-center text-white " +
        "bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-500/50 dark:shadow-primary-800/80 font-medium " +
        "rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2";

    const outlinedClass = "relative overflow-hidden flex flex-row items-center justify-center text-gray-900 " +
        "bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 " +
        "dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600";

    const classes = variant === "contained" ? containedClass : outlinedClass;

    const rippleTheme = variant === "contained" ? "light" : "dark";

    return(
        <button {...props} type="button" className={`${classes} ${className}`.trim()}
            onMouseDown={e => rippleEffect(e, rippleTheme)}>
                {startIcon}
                {props.children}
        </button>
    )
}

export default Button;
