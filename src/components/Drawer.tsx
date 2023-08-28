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

function Drawer({children, direction = "right", open, className}: IModal) {

    const classes = [
        "h-screen p-8 rounded-xl overflow-y-auto transition-all duration-500 bg-gray-100 dark:bg-gray-800",
        direction === "right" ? (!open && "translate-x-full w-0") : (!open && "-translate-x-full w-0"),
        className
    ].join(" ").trim();

    return (<div className={classes}>
                {children}
            </div>
    )
}

export default Drawer;
