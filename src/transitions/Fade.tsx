import {CSSTransition} from "react-transition-group";
import React from "react";

interface IFade extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    open: boolean;
}

const fadeClass = {
    enter: "opacity-0",
    enterActive: "transition-opacity opacity-100",
    exitActive: "transition-opacity opacity-0",
};

function Fade({open, children}: IFade) {
    return(
        <CSSTransition
            in={open}
            timeout={500}
            classNames={fadeClass}
            unmountOnExit>
                {children}
        </CSSTransition>
    )
}
export default Fade;
