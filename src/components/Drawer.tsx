import React, {useMemo} from "react";

interface IModal {
    children?: React.ReactNode;
    direction?: "right" | "left",
    open?: boolean;
    className?: string;
}

Drawer.defaultProps = {
    className: "",
    direction: "right",
    open: false
}

function Drawer({children, direction = "right", open, className}: IModal) {

    const animClass = useMemo(() => {
        if (open)
            return "";

        if (direction === "right")
            return "translate-x-full !min-w-0 !w-0 !px-0";

        return "-translate-x-full !min-w-0 !w-0 !px-0";
    }, [open]);

    const classes = [
        "h-screen p-8 rounded-xl transition-all duration-500 bg-gray-100 dark:bg-gray-800",
        animClass,
        className
    ].join(" ").trim();

    return (<div className={classes}>
                {children}
            </div>
    )
}

export default Drawer;
