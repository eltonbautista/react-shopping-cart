import React from "react";
import ImgInDiv from '../homepage/ImgInDiv';
import noSpacesOrSingleQuotes from "../../modules/no-spaces-or-single-quotes";
import styles from '../../modules/styling-modules/Products.module.css';

// My Product components are going to be cards that have an img, name, and description. 
const Product = (props) => {

  // I wanted to increase the privacy of my data through abstraction so I created public methods on my productObject(s)
  // By using an object for most of my properties, I can update them via methods and then setState. 

  const { productName, productCategory, imgSrc, imgAlt, isInCart, productPrice, children } = props.productObject;
  const itemId = noSpacesOrSingleQuotes(productName);
  return (
    <div className={styles['product-div']} data-testid='product' category={productCategory} name={itemId} data-isincart={isInCart}>
      <ImgInDiv stylingClass={styles['product-image-div']} imgStyling={styles['product-image']} src={imgSrc} alt={imgAlt} />
      <span className={styles['product-text']}>
        {productName}
      </span>
      <p className={styles['product-text']}>
        {productPrice}
      </p>
      {children}
      <button className={styles['product-button']} data-num={props.num} onClick={props.onClickHandler} type="button" >{!isInCart ? 'Add to bag' : 'Remove from bag'}</button>
    </div>
  );
};

export default Product;