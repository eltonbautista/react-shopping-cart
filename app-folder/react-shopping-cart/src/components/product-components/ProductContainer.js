import React from "react";

// A function component which is responsible for containing my products/cards.
const ProductContainer = (props) => {
  const { products, } = props;

  const myProducts = products;

  return (
    <div className="product-page product-container" data-testid='product-container'>
      <ul className="product-page product-list">
        {myProducts}
      </ul>
    </div>
  )
};

export default ProductContainer;