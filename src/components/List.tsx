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
        "w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white",
        className
    ].join(" ").trim();

    return(
        <div className={classes}>
            {children}
        </div>
    )
}

export default List;
