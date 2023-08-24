import React from "react";

interface IListItem {
    children?: React.ReactNode;
    selected?: boolean;
    className?: string;
}

ListItem.defaultProps = {
    className: ""
}

function ListItem({children, selected, className} : IListItem) {
    const classes = [
        "w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600",
        className
    ].join(" ").trim();

    return(
        <li className={classes}>
            <div className="flex items-center pl-3">
                <input id="todo-checkbox" type="checkbox" value="" checked={selected}
                       className="transition w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                    <label htmlFor="todo-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {children}
                    </label>
            </div>
        </li>
    )
}

export default ListItem;
