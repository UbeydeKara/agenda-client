import React, {useEffect, useState} from "react";
import Button, {IButton} from "./Button";
import {MenuItem} from "./index";
import Fade from "../transitions/Fade";
import {clickAway} from "../utils";
import {Controller, useFormContext} from "react-hook-form";


interface ISelect extends IButton {
    options: Array<any>;
    handleChange: Function;
    optionLabel: string;
    optionValue: string;
    optionIcon?: string;
}

function Select({options, handleChange, optionLabel, optionValue, optionIcon, ...props} : ISelect) {
    const [open, setOpen] = useState(false);
    const { control } = useFormContext();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClick = (item: any) => {
        handleChange(optionValue, item);
        setOpen(false);
    }

    useEffect(() => {
        clickAway("menu-container", () => setOpen(false))
    }, [setOpen]);

    return(
        <div id="menu-container">
            <Controller
                name={optionValue}
                control={control}
                render={({field}) => (
                    <Button {...props} onClick={handleOpen}>
                        {field.value?.name || props.children}
                    </Button>)}/>
            <Fade appear={open}>
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
