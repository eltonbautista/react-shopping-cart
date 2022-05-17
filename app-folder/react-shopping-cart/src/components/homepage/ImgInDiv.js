import React from "react";

const ImgInDiv = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  )
}

export default ImgInDiv;