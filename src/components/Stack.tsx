import React from "react";

interface IStack extends React.HTMLAttributes<HTMLDivElement>{
    children?: React.ReactNode;
    direction?: "column" | "row";
    spacing?: number | string;
    itemsCenter?: boolean;
    justifyCenter?: boolean;
}

function Stack({children, direction, spacing, itemsCenter, justifyCenter, className, ...props} : IStack) {
    const isRow = direction === "row";

    const classes = [
        "flex",
        direction === "row" ? "flex-row" : "flex-col",
        (typeof spacing == "number") && (isRow ? `space-x-${spacing}` : `space-y-${spacing}`),
        spacing === "auto" && (isRow ? "justify-between" : "align-items"),
        itemsCenter && "items-center",
        justifyCenter && "justify-center",
        className
    ].join(" ").replaceAll("false", '').replace(/\s+/g, ' ').trim();

    return(
        <div className={classes} {...props}>
            {children}
        </div>
    )
}

export default Stack;
