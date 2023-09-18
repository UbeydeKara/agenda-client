import React from "react";

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
}

function Card({...props} : ICard) {

    const classes = [
        "block bg-white border border-gray-200 rounded-lg " +
        "shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
        props.className
        ].join(" ").trim();

    return(
        <div {...props} className={classes}>
            {props.children}
        </div>
    )
}

export default Card;
