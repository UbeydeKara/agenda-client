import React, {useEffect, useState} from "react";
import {ChevronRightIcon} from "@heroicons/react/20/solid";
import {rippleEffect} from "../utils/Ripple";
import {updateTodoAction} from "../redux/actions/TodoAction";
import {useAppDispatch} from "../redux/hooks";
import Stack from "./Stack";

interface IListItem extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: any;
}

function ListItem(props: IListItem) {
    const item = props.children;
    const [checked, setChecked] = useState(item.isDone || false);
    const [loaded, setLoaded] = useState(false);
    const dispatch = useAppDispatch();

    const classes = [
        "relative transition-transform overflow-hidden w-full px-4 py-2 border-b border-gray-200 " +
        "hover:bg-gray-100 hover:text-primary-600 focus:z-10 focus:text-primary-600 " +
        "dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white",
        loaded ? "scale-100" : "scale-50",
        props.className
    ].join(" ").trim();

    const handleChange = (event: any) => {
        const value = event.target.checked;
        setChecked(value);
        dispatch(updateTodoAction({...item, isDone: value}));
    }

    useEffect(() => {
        setLoaded(true);
    }, []);

    return(
        <button {...props} type="button" className={classes}
                onMouseDown={e => rippleEffect(e, "dark")}>

            <Stack direction="row" itemsCenter>
                <input id="todo-checkbox" type="checkbox" defaultChecked={checked} onChange={handleChange}
                       className="transition w-4 h-4 mr-4 text-primary-600 bg-gray-100 border-gray-300 rounded
                   focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700
                   dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>

                <span className={checked ? "transition line-through" : "transition"}>{item.title}</span>
                <ChevronRightIcon className="h-8 w-6 text-gray-500 ml-auto"/>
            </Stack>
            {item.category &&
                <Stack direction="row" itemsCenter spacing={2}
                       className="ml-8 mt-2 font-bold text-gray-600 text-sm">
                    <div className={`h-4 w-4 ${item.category.colorCode} rounded`}/>
                    <span>{item.category.name}</span>
                </Stack>
            }
        </button>
    )
}

export default ListItem;
