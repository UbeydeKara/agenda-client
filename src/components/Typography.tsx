import React from "react";

interface ITypography {
    children?: React.ReactNode;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
}

Typography.defaultProps = {
    className: "",
    variant: "h1"
}

function Typography({children, variant = "h1", className} : ITypography) {
    return React.createElement(variant, {className}, children);
}

export default Typography;
