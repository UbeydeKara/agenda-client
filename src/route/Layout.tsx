import {useLocation, useNavigate, useOutlet} from "react-router-dom";
import {Alert} from "../components";
import {Sidebar} from "../sections";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import React, {useEffect} from "react";
import {routeClass, routes} from "./index";
import {useLocalStorage} from "../hooks";

const authPages = ["/login", "/register"];

function Layout() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user] = useLocalStorage("user");
    const pathKey = location.pathname === "/sticky-wall" ? 0 : 1;

    const currentOutlet = useOutlet()

    const { nodeRef } : any =
    routes.find((route) => route.path === location.pathname) ?? {}

    const logged = !authPages.includes(location.pathname);

    useEffect(() => {
        if (!user && logged)
            navigate("/login")
    }, [user]);

    return (
        <>
            <Alert/>
            {logged && <Sidebar/>}
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
        </>
    )
}

export default Layout;
