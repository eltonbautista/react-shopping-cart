import React from "react";
import mapList from "../../modules/map-list";
import noSpacesOrSingleQuotes from "../../modules/no-spaces-or-single-quotes";

// A function component which is responsible for containing my products/cards.
const ProductContainer = (props) => {
  const { products, } = props;
  const myProducts = mapList(products);

  const divClassSex = noSpacesOrSingleQuotes(products[0].props.productObject.productCategory)

  return (
    <div className={`product-page product-container ${divClassSex}`} data-testid='product-container'>
      <ul className="product-page product-list">
        {myProducts}
      </ul>
    </div>
  )
};

export default ProductContainer;