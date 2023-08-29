import React from "react";

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

function Card({className, ...props} : ICard) {

    const classes = "block bg-white border border-gray-200 rounded-lg " +
        "shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700";

    return(
        <div {...props} className={`${classes} ${className}`.trim()}>
            {props.children}
        </div>
    )
}

export default Card;
