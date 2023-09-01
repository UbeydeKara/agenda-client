import React, {useEffect, useState} from "react";
import Button, {IButton} from "./Button";
import {MenuItem} from "./index";
import Fade from "../transitions/Fade";


interface ISelect extends React.ButtonHTMLAttributes<HTMLButtonElement>, IButton {
    options: Array<any>;
    handleChange: Function;
    optionLabel: string;
    optionValue: string;
    optionIcon?: string;
}

function Select({options, handleChange, optionLabel, optionValue, optionIcon, ...props} : ISelect) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClick = (item: any) => {
        handleChange(optionValue, item);
        setOpen(false);
    }

    useEffect(() => {
        window.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;

            if (document.getElementById("menu-container")?.contains(target)) {
                return;
            }

            setOpen(false);
        })
    }, [setOpen]);

    return(
        <div id="menu-container">
            <Button {...props} onClick={handleOpen}/>
            <Fade open={open}>
                <div id="dropdown-states" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
                        {options.map((item, index) => (
                            <MenuItem
                                key={index}
                                className="text-gray-600 text-sm"
                                startIcon={
                                    optionIcon && <div className={`h-4 w-4 ${item[optionIcon]} rounded`}/>
                                }
                                onClick={() => handleClick(item)}>
                                {item[optionLabel]}
                            </MenuItem>
                        ))}
                    </ul>
                </div>
            </Fade>
        </div>
    )
}

export default Select;
