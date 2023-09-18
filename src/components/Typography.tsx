import React from "react";

interface ITypography extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children?: React.ReactNode;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    className?: string;
}

const variantClasses = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-base font-bold",
    p: "text-sm font-semibold",
    span: "text-sm",
}

function Typography({children, variant = "h6", className = ""} : ITypography) {
    return React.createElement(variant, {
        className: [variantClasses[variant], className].join(" ").trim()
}, children);
}

export default Typography;
