import React from "react";
import Typography from "./Typography";
import {rippleEffect} from "../utils";


export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "contained" | "outlined";
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    small?: boolean;
}

function Button({variant = "contained", startIcon, endIcon, small = false, ...props} : IButton) {

    const containedClass = "relative overflow-hidden flex flex-row items-center justify-center text-white " +
        "bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-500/50 dark:shadow-primary-800/80 font-medium " +
        "rounded-lg text-sm px-5 text-center mr-2 mb-2";

    const outlinedClass = "relative overflow-hidden flex flex-row items-center justify-center text-gray-900 " +
        "bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 mr-2 mb-2 " +
        "dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600";

    const classes = [
        variant === "contained" ? containedClass : outlinedClass,
        small ? "py-2" : "py-3",
        props.className
    ].join(" ").trim();

    const rippleTheme = variant === "contained" ? "light" : "dark";

    return(
        <button type="button" {...props} className={classes}>
            <div id="rippleOverlay" className="absolute top-0 left-0 right-0 bottom-0"
                 onMouseDown={e => rippleEffect(e, rippleTheme)}/>
                {startIcon}
                <Typography variant="span" className="mx-3">
                    {props.children}
                </Typography>
                {endIcon}
        </button>
    )
}

export default Button;
