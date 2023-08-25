import React from "react";
import {rippleEffect} from "../utils/Ripple";

interface IIconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "contained" | "outlined";
    className?: string;
}

function IconButton({variant = "contained", className, ...props} : IIconButton) {

    const classes = "relative overflow-hidden hover:bg-gray-300 p-2 rounded-full " +
        "dark:hover:bg-gray-200";

    return(
        <button {...props} type="button" className={`${classes} ${className}`.trim()}>
            <div id="rippleOverlay" className="absolute top-0 left-0 right-0 bottom-0" onMouseDown={rippleEffect}/>
            {props.children}
        </button>
    )
}

export default IconButton;
