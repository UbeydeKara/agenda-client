import {useLocation, useOutlet} from "react-router-dom";
import {Stack} from "../components";
import {Sidebar} from "../sections";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import React from "react";
import {routeClass, routes} from "./index";

function Layout() {
    const location = useLocation()
    const pathKey = location.pathname === "/sticky-wall" ? 0 : 1;

    const currentOutlet = useOutlet()

    const { nodeRef } : any =
    routes.find((route) => route.path === location.pathname) ?? {}

    return (
        <Stack direction="row" className="overflow-hidden">
            <Sidebar/>
            <SwitchTransition>
                <CSSTransition
                    key={pathKey}
                    nodeRef={nodeRef}
                    timeout={500}
                    classNames={routeClass}
                    unmountOnExit>
                    {(state) => (
                        <div ref={nodeRef} className="w-full">
                            {currentOutlet}
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
        </Stack>
    )
}

export default Layout;
