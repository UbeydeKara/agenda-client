import React from "react";

interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
    spacing?: number;
}

function Grid({spacing = 0, ...props}: IGrid) {

    const classes = [
        "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",
        `gap-${spacing}`,
        props.className
    ].join(" ").trim();

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Grid;
