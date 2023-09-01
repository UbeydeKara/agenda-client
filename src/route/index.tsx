import {createBrowserRouter, Navigate} from "react-router-dom";
import React, {createRef} from "react";
import Layout from "./Layout";
import {TodoList} from "../sections";
import {StickyWall} from "../pages";

export const routes = [
    { key: "list", path: '/', name: 'List', element: <Navigate to="/list/upcoming" replace />, nodeRef: createRef() },
    { key: "list", path: '/list/:range', name: 'List', element: <TodoList />, nodeRef: createRef() },
    { key: "wall", path: '/sticky-wall', name: 'Wall', element: <StickyWall />, nodeRef: createRef() }
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
