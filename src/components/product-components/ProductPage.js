import React from "react";
import styles from '../../modules/styling-modules/Products.module.css';

// ProductPage is responsible for changing the title of my page, 
// and having different ProductContainer children - which is passed by props. 
const ProductPage = (props) => {
  const { productHeading, children } = props;
  return (
    <div id="product-page" data-testid='product-page' 
      className={productHeading === 'Men\'s' ? styles['product-page-men'] : styles['product-page-women']}>

      <div className={styles['product-page-first-div']}>
        <h1>{productHeading}</h1>
      </div>
      {children}
      <footer>
          <span>Created with ♥ by: <a href="https://twitter.com/psychtotech" target="_blank" rel="noopener noreferrer">PsychToTech</a></span>
      </footer>
    </div>
  )
}

export default ProductPage;