import React from "react";

const ImgInDiv = ({ src, alt, stylingClass, imgStyling }) => {

  return (
    <div className={stylingClass}>
      <img className={imgStyling} src={src} alt={alt} />
    </div>
  )
}

export default ImgInDiv;