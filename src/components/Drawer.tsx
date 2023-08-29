import React, {useMemo} from "react";

interface IModal {
    children?: React.ReactNode;
    direction?: "right" | "left",
    open: boolean;
    className?: string;
}

const directionClass = {
    left: "left-0",
    right: "right-0"
}

function Drawer({children, direction = "right", open, className}: IModal) {

    const animClass = useMemo(() => {
        if (open)
            return "";

        if (direction === "right")
            return "translate-x-full";

        // if left direction
        return "-translate-x-full";
    }, [open]);

    const classes = [
        "fixed top-0 h-screen p-8 z-10 rounded-xl transition-all duration-700 backdrop-blur-sm bg-gray-100/[.82] dark:bg-gray-800",
        directionClass[direction],
        animClass,
        className
    ].join(" ").trim();

    return (<div className={classes}>
                {children}
            </div>
    )
}

export default Drawer;
