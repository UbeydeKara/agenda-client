import React from "react";

interface IList {
    children?: React.ReactNode;
    className?: string;
}

List.defaultProps = {
    className: ""
}

function List({children, className} : IList) {
    const classes = [
        "text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white",
        className
    ].join(" ").trim();

    return(
        <ul className={classes} defaultValue={2}>
            {children}
        </ul>
    )
}

export default List;
