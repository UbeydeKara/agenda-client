import React, {useState} from "react";
import {ChevronRightIcon} from "@heroicons/react/20/solid";

interface IListItem extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: any;
}

function ListItem(props: IListItem) {
    const [checked, setChecked] = useState(false);

    const classes = [
        "relative inline-flex items-center w-full px-4 py-2 font-medium border-b border-gray-200 " +
        "hover:bg-gray-100 hover:text-primary-600 focus:z-10 focus:text-primary-600 dark:border-gray-600 " +
        "dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white",
        props.className
    ].join(" ").trim();

    const handleChange = (event: any) => {
        const value = event.target.checked;
        setChecked(value);
    }

    return(
        <button aria-current="true" type="button" className={classes} {...props}>

            <input id="todo-checkbox" type="checkbox" value="" onChange={handleChange}
                   className="transition w-4 h-4 mr-4 text-primary-600 bg-gray-100 border-gray-300 rounded
                   focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700
                   dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>

            <span className={checked ? "transition line-through" : "transition"}>{props.children.content}</span>
            <ChevronRightIcon className="h-8 w-6 text-gray-500 ml-auto"/>
        </button>
    )
}

export default ListItem;
