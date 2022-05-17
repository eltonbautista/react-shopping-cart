import React from "react";
import ImgInDiv from '../homepage/ImgInDiv' ;

// My Product components are going to be cards that have an img, name, and description. 
const Product = (props) => {
  const { productCategory, imgSrc, imgAlt, productDescription, productName, productPrice } = props;

  return (
    <div className="product-page product" data-testid='product' category={productCategory}>
      <ImgInDiv src={imgSrc} alt={imgAlt} />
      <span>
        {productName}
      </span>
      <span>
        {productDescription}
      </span>
      <p>
        {productPrice}
      </p>
    </div>
  )
};

export default Product;