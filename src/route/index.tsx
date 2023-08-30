import {createBrowserRouter} from "react-router-dom";
import React, {createRef} from "react";
import Layout from "./Layout";
import {TodoList} from "../sections";
import {StickyWall} from "../pages";

export const routes = [
    { path: '/list', name: 'List', element: <TodoList />, nodeRef: createRef() },
    { path: '/sticky-wall', name: 'Wall', element: <StickyWall />, nodeRef: createRef() }
]

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: routes.map((route) => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element,
        })),
    },
])

export const routeClass = {
    enter: "-translate-y-full",
    enterActive: "transition-all duration-500 translate-y-0",
    exitActive: "transition-all duration-500 -translate-y-full",
};
