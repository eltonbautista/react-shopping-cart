import React from "react";
import ImgInDiv from '../homepage/ImgInDiv' ;
import noSpacesOrSingleQuotes from "../../modules/no-spaces-or-single-quotes";

// My Product components are going to be cards that have an img, name, and description. 
const Product = (props) => {
  const { productName, productCategory, imgSrc, imgAlt, isInCart, productPrice, children } = props.productObject;
  const itemId = noSpacesOrSingleQuotes(productName);
  return (
    <div className="product-page product" data-testid='product' category={productCategory} name={itemId} data-isincart={isInCart}>
      <ImgInDiv src={imgSrc} alt={imgAlt} />
      <span>
        {productName}
      </span>
      <p>
        {productPrice}
      </p>
      {children}
      <button data-num={props.num} onClick={props.onClickHandler} type="button" >{!isInCart ? 'Add to bag' : 'Remove from bag' }</button>
    </div>
  )
};

export default Product;