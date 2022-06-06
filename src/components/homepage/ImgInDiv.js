import React from "react";

const ImgInDiv = (props) => {

  const { src, alt, stylingClass, imgStyling, backgroundImage } = props;
  
  return (
    <div style={backgroundImage} className={stylingClass}>
      <img className={imgStyling} src={src} alt={alt} />
    </div>
  )
}

export default React.memo(ImgInDiv);