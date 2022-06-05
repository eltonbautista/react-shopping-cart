import React from "react";
import mapList from "../../modules/map-list";
import styles from '../../modules/styling-modules/Products.module.css';


// A function component which is responsible for containing my products/cards.
const ProductContainer = (props) => {
  const { products, } = props;
  const myProducts = mapList(products, 'proddy');

  return (
    <div className={styles['product-page-container']}  data-testid='product-container'>
      <ul className={styles['product-page-ul']}>
        {myProducts}
      </ul>
    </div>
  )
};

export default ProductContainer;