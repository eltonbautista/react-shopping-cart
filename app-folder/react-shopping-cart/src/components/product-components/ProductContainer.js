import React from "react";
import mapList from "../../modules/map-list";
import noSpacesOrSingleQuotes from "../../modules/no-spaces-or-single-quotes";
import styles from '../../modules/styling-modules/Products.module.css';


// A function component which is responsible for containing my products/cards.
const ProductContainer = (props) => {
  const { products, } = props;
  const myProducts = mapList(products, 'proddy');

  const divClassSex = noSpacesOrSingleQuotes(products[0].props.productObject.productCategory)
  // old class for div : `product-page product-container ${divClassSex}`
  return (
    <div className={`product-page product-container ${divClassSex}`}  data-testid='product-container'>
      <ul className={styles['product-page-container']}>
        {myProducts}
      </ul>
    </div>
  )
};

export default ProductContainer;