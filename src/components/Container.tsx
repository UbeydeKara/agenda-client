import React from "react";

interface IContainer {
    children?: React.ReactNode,
    fullScreen?: boolean,
    className?: string
}

Container.defaultProps = {
    className: "",
    fullScreen: false
}

function Container({children, className} : IContainer) {
    return(
        <div className={`container ${className}`.trim()}>
            {children}
        </div>
    )
}

export default Container;
