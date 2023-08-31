import {SubtractDays} from "../utils/DateUtil";

export const datePickerOptions = {
    maxDate: new Date("2024-01-01"),
    minDate: SubtractDays(new Date(), 1),
    theme: {
        background: "",
        todayBtn: "",
        clearBtn: "",
        icons: "",
        text: "",
        disabledText: "",
        input: "",
        inputIcon: "",
        selected: "bg-primary-500",
    },
    defaultDate: new Date(),
    language: "tr",
    todayBtn: false,
    clearBtn: false
}
