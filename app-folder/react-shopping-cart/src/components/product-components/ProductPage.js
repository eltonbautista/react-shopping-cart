import React from "react";
import ProductContainer from "./ProductContainer";
const ProductPage = (props) => {
  return (
    <div id="product-page" data-testid='product-page'>
      <ProductContainer products={['Category 1']} productHeading='Damage' />
      <ProductContainer products={['Category 2']} productHeading='Cultivation' />
      <ProductContainer products={['Category 3']} productHeading='Movement' />
    </div>
  )
}

export default ProductPage;