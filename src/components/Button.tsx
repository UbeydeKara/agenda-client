import React from "react";
import {rippleEffect} from "../utils/Ripple";
import Typography from "./Typography";


interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "contained" | "outlined";
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    className?: string;
}

function Button({variant = "contained", startIcon, endIcon, className, ...props} : IButton) {

    const containedClass = "relative overflow-hidden flex flex-row items-center justify-center space-x-3 text-white " +
        "bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-500/50 dark:shadow-primary-800/80 font-medium " +
        "rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2";

    const outlinedClass = "relative overflow-hidden flex flex-row items-center justify-center space-x-3 text-gray-900 " +
        "bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 " +
        "dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600";

    const classes = variant === "contained" ? containedClass : outlinedClass;

    const rippleTheme = variant === "contained" ? "light" : "dark";

    return(
        <button {...props} type="button" className={`${classes} ${className}`.trim()}>
            <div id="rippleOverlay" className="absolute top-0 left-0 right-0 bottom-0"
                 onMouseDown={e => rippleEffect(e, rippleTheme)}/>
                {startIcon}
                <Typography variant="span">
                    {props.children}
                </Typography>
                {endIcon}
        </button>
    )
}

export default Button;
