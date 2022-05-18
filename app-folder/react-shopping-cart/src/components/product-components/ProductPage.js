import React from "react";
import ProductContainer from "./ProductContainer";
const ProductPage = (props) => {
  const { productHeading, children } = props;
  return (
    <div id="product-page" data-testid='product-page'>
      <div>
        <h1>{productHeading}</h1>
      </div>
      {children}
    </div>
  )
}

export default ProductPage;