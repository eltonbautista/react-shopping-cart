import React from "react";
import styles from '../../modules/styling-modules/Products.module.css';

// ProductPage is responsible for changing the title of my page, 
// and having different ProductContainer children - which is passed by props. 
const ProductPage = (props) => {
  const { productHeading, children } = props;
  return (
    <div id="product-page" data-testid='product-page'>
      <div className={styles['product-page-first-div']}>
        <h1>{productHeading}</h1>
      </div>
      {children}
    </div>
  )
}

export default ProductPage;