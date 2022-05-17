import React from "react";

const Product = (props) => {
  const { imgSrc, imgAlt, productDescription, productName, productPrice } = props;

  return (
    <div className="product-page product" data-testid='product'>
      <img src={imgSrc} alt={imgAlt} />
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