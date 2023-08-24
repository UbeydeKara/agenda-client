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
        "fixed top-0 h-screen z-40 p-8 rounded-xl overflow-y-auto transition-transform duration-500 bg-gray-100 w-1/4 dark:bg-gray-800",
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
