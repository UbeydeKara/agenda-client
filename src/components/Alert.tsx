import {useLayoutEffect, useState} from "react";
import {InformationCircleIcon, XMarkIcon} from "@heroicons/react/20/solid";
import {useAppSelector} from "../redux/hooks";

function Alert({duration = 5000}) {
    const [open, setOpen] = useState(false);
    const {id, message} = useAppSelector(x => x.alert);

    const handleClose = () => {
        setOpen(false);
    }

    useLayoutEffect(() => {
        if (id > 0) {
            setOpen(true);
            setTimeout(function() {
                setOpen(false);
            }, duration);
        }
    }, [id]);

    const classes = [
        open ? "opacity-100 scale-100" : "opacity-0 scale-50",
        "absolute top-10 rounded-lg shadow-lg transition-all",
        "flex items-center p-4 mb-4 text-yellow-800 border-t-4 border-yellow-300 bg-yellow-50 ",
        "dark:text-yellow-300 dark:bg-gray-800 dark:border-yellow-800"
    ].join(" ").trim();

    const btnClass = "ml-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg " +
        "focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center" +
        " justify-center h-8 w-8 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700";

    return(
        <div className="relative w-full flex justify-center">
            <div className={classes} role="alert">
                <InformationCircleIcon className="h-5 w-5 text-yellow-800"/>
                <div className="mx-3 text-sm font-medium">
                    {message}
                </div>
                <button
                    type="button"
                    className={btnClass}
                    onClick={handleClose}>
                    <XMarkIcon className="h-6 w-6 text-yellow-800"/>
                </button>
            </div>
        </div>
    )
}

export default Alert;
