import React, {useMemo} from "react";

interface IDrawer extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    direction?: "right" | "left",
    open: boolean;
    className?: string;
}

const directionClass = {
    left: "left-0",
    right: "right-0"
}

function Drawer({children, direction = "right", open, className}: IDrawer) {

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
