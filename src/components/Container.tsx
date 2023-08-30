import React from "react";
import {useAppSelector} from "../redux/hooks";

interface IContainer {
    children?: React.ReactNode;
    className?: string;
}

function Container({className, ...props} : IContainer) {
    const {leftDrawerOpen} = useAppSelector(x => x.ui);

    const classes = [
        "w-full px-4 sm:px-14 transition-all duration-700",
        leftDrawerOpen ? "md:pl-[330px]" : "sm:pl-14 md:pl-24 lg:pl-34 xl:pl-44",
        className
    ].join(" ").trim()

    return(
        <div {...props} className={classes}>
            {props.children}
        </div>
    )
}

export default Container;
