import React from "react";

interface IImage {
    children?: React.ReactNode;
    src: string;
    alt: string;
    loading?: "eager" | "lazy";
    className?: string;
}

Image.defaultProps = {
    className: "",
    loading: "eager"
}

function Image({children, src, alt, loading, className} : IImage) {
    return(
        <img src={src} alt={alt} loading={loading} className={className}>
            {children}
        </img>
    )
}

export default Image;
