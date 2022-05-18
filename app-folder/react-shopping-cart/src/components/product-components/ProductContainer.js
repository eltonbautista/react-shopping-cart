import React from "react";
import mapList from "../../modules/map-list";

// A function component which is responsible for containing my products/cards.
const ProductContainer = (props) => {
  const { products, } = props;
  const myProducts = mapList(products);
  return (
    <div className="product-page product-container" data-testid='product-container'>
      <ul className="product-page product-list">
        {myProducts}
      </ul>
    </div>
  )
};

export default ProductContainer;