import React from "react";

const ImgInDiv = (props) => {

  const { src, alt, stylingClass, imgStyling, backgroundImage, imgWidth, imgHeight } = props;

  return (
    <div style={backgroundImage} className={stylingClass}>
      <img className={imgStyling} src={src} alt={alt} width={imgWidth} height={imgHeight} />
    </div>
  );
};

export default React.memo(ImgInDiv);