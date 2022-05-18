import React from "react";

const ImgInDiv = ({ src, alt }) => {
  const myStyle = {
    width: '200px',
    height: '200px'
  }
  return (
    <div>
      <img style={myStyle} src={src} alt={alt} />
    </div>
  )
}

export default ImgInDiv;