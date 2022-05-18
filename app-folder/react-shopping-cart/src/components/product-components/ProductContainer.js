import React from "react";

const ProductContainer = (props) => {
  const { products, productHeading, } = props;

  const myProducts = products;

  return (
    <div className="product-page product-container" data-testid='product-container'>
      <div>
        <h1>{productHeading}</h1>
      </div>
      <ul className="product-page product-list">
        {myProducts}
      </ul>
    </div>
  )
};

export default ProductContainer;