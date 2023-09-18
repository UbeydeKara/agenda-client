import React from "react";

interface IImage extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
}

function Image({...props} : IImage) {
    return(
        <img {...props} alt={props.alt}/>
    )
}

export default Image;
