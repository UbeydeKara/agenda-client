import {CSSTransition} from "react-transition-group";
import React from "react";

interface IFade {
    itemKey?: React.Key;
    appear?: boolean;
    children?: React.ReactNode;
    unmountOnExit?: boolean;
}

const fadeClass = {
    enter: "opacity-0",
    enterActive: "transition-opacity opacity-100",
    exitActive: "transition-opacity opacity-0",
};

function Fade({itemKey, appear, children, unmountOnExit = true, ...props}: IFade) {
    const other =
        Boolean(itemKey) ? {...props, key: itemKey} : {...props, in: appear}

    return(
        <CSSTransition
            {...other}
            timeout={500}
            classNames={fadeClass}
            unmountOnExit={unmountOnExit}>
            {children}
        </CSSTransition>
    )
}
export default Fade;
