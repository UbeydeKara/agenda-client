import React from "react";

interface ITypography extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children?: React.ReactNode;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    className?: string;
}

const variantClasses = {
    h1: "",
    h2: "",
    h3: "",
    h4: "",
    h5: "",
    h6: "text-sm",
    p: "",
    span: "",
}

function Typography({children, variant = "h6", className = ""} : ITypography) {
    return React.createElement(variant, {
        className: [variantClasses[variant], className].join(" ").trim()
}, children);
}

export default Typography;
