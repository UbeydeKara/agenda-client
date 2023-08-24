import React from "react";

interface IStack {
    children?: React.ReactNode;
    direction?: "column" | "row";
    spacing?: number;
    itemsCenter?: boolean;
    justifyCenter?: boolean;
    className?: string;
}

Stack.defaultProps = {
    className: ""
}

function Stack({children, direction, spacing, itemsCenter, justifyCenter, className} : IStack) {

    const classes = [
        direction === "row" ? "flex-row" : "flex-col",
        spacing && (direction === "row" ? `space-x-${spacing}` : `space-y-${spacing}`),
        itemsCenter && "items-center",
        justifyCenter && "justify-center"
    ].join(" ");

    return(
        <div className={`flex ${classes} ${className}`.trim()}>
            {children}
        </div>
    )
}

export default Stack;
