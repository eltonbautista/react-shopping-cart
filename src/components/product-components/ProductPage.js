import React from "react";
import styles from '../../modules/styling-modules/Products.module.css';
import { homepageImages } from "../../modules/preload";

// ProductPage is responsible for changing the title of my page, 
// and having different ProductContainer children - which is passed by props.

const ProductPage = (props) => {
  const { productHeading, children } = props;
  const [mensBackground, womensBackground] = [
    { backgroundImage: `url(${homepageImages[7].src})` },
    { backgroundImage: `url(${homepageImages[8].src})` },
  ];

  return (
    <div id="product-page" data-testid='product-page'
      className={productHeading === 'Men\'s' ? styles['product-page-men'] : styles['product-page-women']}
      style={productHeading === 'Men\'s' ? mensBackground : womensBackground}>
      <div className={styles['product-page-first-div']}>
        <h1>{productHeading}</h1>
      </div>
      {children}
      <footer>
        <span>Created with ♥ by: <a href="https://github.com/eltonbautista" target="_blank" rel="noopener noreferrer">eltonbautista</a></span>
      </footer>
    </div>
  );
};

export default ProductPage;