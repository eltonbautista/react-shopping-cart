import React from "react";
import ImgInDiv from '../homepage/ImgInDiv' ;

// My Product components are going to be cards that have an img, name, and description. 
const Product = (props) => {
  const { productName, productCategory, imgSrc, imgAlt, productPrice } = props.productObject;
  
  return (
    <div className="product-page product" data-testid='product' category={productCategory}>
      <ImgInDiv src={imgSrc} alt={imgAlt} />
      <span>
        {productName}
      </span>
      <p>
        {productPrice}
      </p>
      <button type="button" >Add to bag</button>
    </div>
  )
};

export default Product;