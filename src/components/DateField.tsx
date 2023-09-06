import Datepicker from "tailwind-datepicker-react";
import {datePickerOptions} from "../constants";
import {Button} from "./index";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import React, {useEffect, useState} from "react";
import {IButton} from "./Button";
import {clickAway} from "../utils";
import {Controller, useFormContext} from "react-hook-form";
import Stack from "./Stack";

interface IDateField extends IButton {
    fieldName: string;
}

function DateField({fieldName, ...props}: IDateField) {
    const [pickerOpen, setPickerOpen] = useState(false);
    const { control, setValue, clearErrors } = useFormContext();

    // DatePicker
    const dateChange = (date: Date) => {
        setValue("dueAt", date.toISOString().slice(0, 10));
        clearErrors("dueAt")
    };

    const handlePickerShow = (state: boolean) => {
        setPickerOpen(state);
    }

    const handlePickerOpen = () => {
        setPickerOpen(true);
    }

    useEffect(() => {
        clickAway("pickerContainer", () => setPickerOpen(false))
    }, [setPickerOpen]);

    return(
        <Controller
            name={fieldName}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <Stack>
                    <Datepicker options={datePickerOptions} onChange={dateChange} show={pickerOpen} setShow={handlePickerShow} classNames="!w-auto">
                        <Button {...props} variant="outlined" className="!bg-gray-100 !px-1 !py-1"
                                endIcon={<ChevronDownIcon className="h-6 w-6 text-gray-500"/>}
                                onClick={handlePickerOpen}>
                            {field.value ? new Date(field.value).toLocaleDateString() : "Tarih seçin"}
                        </Button>
                    </Datepicker>
                    {error && <small className="text-xs text-red-500">
                        {error?.message}
                    </small>}
                </Stack>
            )}/>
    )
}

export default DateField;
