import React from "react";

const ImgInDiv = ({ src, alt, stylingClass, imgStyling }) => {
  const myStyle = {
    width: '200px',
    height: '200px'
  }
  return (
    <div className={stylingClass}>
      <img className={imgStyling} src={src} alt={alt} />
    </div>
  )
}

export default ImgInDiv;