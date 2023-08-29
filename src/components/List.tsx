import React from "react";
import Typography from "./Typography";

interface IList {
    children?: React.ReactNode;
    title?: string;
    className?: string;
}

function List({children, title, className = ""} : IList) {

    const classes = [
        "dark:bg-gray-700 dark:border-gray-600 dark:text-white",
        className
    ].join(" ").trim();

    const titleComponent : any = title && <Typography className="font-medium text-gray-600 mb-2">{title}</Typography>

    return(
        <div className={classes}>
            {titleComponent}
            {children}
        </div>
    )
}

export default List;
