import React, {useRef} from "react";
import {rippleEffect} from "../utils/Ripple";


interface IButton extends React.FormHTMLAttributes<HTMLFormElement> {
    variant?: string
}

function Button({variant = "contained", ...props} : IButton) {
    // const ripple = new Ripple();
    const button = useRef<any>();

    const containedStyle = "relative overflow-hidden text-white bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-500/50 " +
        "dark:shadow-primary-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

    const outlinedStyle = "relative overflow-hidden text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 " +
        "font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 " +
        "dark:hover:bg-gray-700 dark:hover:border-gray-600";

    const rippleTheme = variant === "contained" ? "light" : "dark";

    return(
        <button ref={button} type="button" className={variant === "contained" ? containedStyle : outlinedStyle}
            onMouseDown={e => rippleEffect(e, rippleTheme)}>
            {props.children}
        </button>
    )
}

export default Button;
