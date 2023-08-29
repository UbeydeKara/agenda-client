import React from "react";
import {rippleEffect} from "../utils/Ripple";

interface IListItem extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

function ListItem2({startIcon, endIcon, ...props}: IListItem) {
    const content = props.children;

    const classes = [
        "relative overflow-hidden inline-flex items-center w-full px-3 py-2 hover:bg-gray-200 " +
        "dark:border-gray-600 dark:hover:bg-gray-600",
        props.className
    ].join(" ").trim();

    return(
        <button {...props} type="button" className={classes}>
            <div id="rippleOverlay" className="absolute top-0 left-0 right-0 bottom-0" onMouseDown={rippleEffect}/>
            {startIcon}
            <span className="ml-3 mr-auto">{content}</span>
            {endIcon}
        </button>
    )
}

export default ListItem2;
