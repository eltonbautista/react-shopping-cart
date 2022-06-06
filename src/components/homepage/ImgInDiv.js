import React from "react";

const ImgInDiv = ({ src, alt, stylingClass, imgStyling, backgroundImage }) => {
  
  return (
    <div style={backgroundImage} className={stylingClass}>
      <img className={imgStyling} src={src} alt={alt} />
    </div>
  )
}

export default ImgInDiv;