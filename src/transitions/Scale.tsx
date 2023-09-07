import {CSSTransition} from "react-transition-group";
import React, {createRef} from "react";

interface IScale {
    key?: number | string;
    appear?: boolean;
    children?: React.ReactNode;
}

const scaleClass = {
    enter: "scale-50",
    enterActive: "scale-100",
    exit: "scale-100",
    exitActive: "scale-50",
};

function Scale({key, appear = false, children, ...props}: IScale) {
    const nodeRef = createRef<any>();

    return(
        <CSSTransition
            {...props}
            key={key}
            nodeRef={nodeRef}
            timeout={500}
            classNames={scaleClass}>
            <div ref={nodeRef} className="transition-transform">
                {children}
            </div>
        </CSSTransition>
    )
}
export default Scale;
