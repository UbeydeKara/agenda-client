import React from "react";

interface IListItem {
    children?: React.ReactNode;
    className?: string;
}

ListItem.defaultProps = {
    className: ""
}

function ListItem({children, className} : IListItem) {
    const classes = [
        "w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600",
        className
    ].join(" ").trim();

    return(
        <ul className={classes}>
            {children}
        </ul>
    )
}

export default ListItem;
