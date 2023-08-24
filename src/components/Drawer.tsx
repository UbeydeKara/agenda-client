import React from "react";

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

const directionPos = {
    right: "right-0",
    left: "left-0"
}

function Drawer({children, direction = "right", open, className}: IModal) {

    const classes = [
        "fixed top-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800",
        !open && "translate-x-full",
        directionPos[direction],
        className
    ].join(" ").trim();

    return (<div className={classes}>
                {children}
            </div>
    )
}

export default Drawer;
