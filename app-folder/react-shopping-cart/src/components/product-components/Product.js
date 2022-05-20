import React from "react";
import ImgInDiv from '../homepage/ImgInDiv' ;

// My Product components are going to be cards that have an img, name, and description. 
let foo = 0;
const Product = (props) => {
  const { productName, productCategory, imgSrc, imgAlt, productTotal, isInCart, productPrice } = props.productObject;
  // const productTotalPrice = parseFloat(productTotal.toFixed(2));
  const itemId = productName[0].toLowerCase() + productName.replace(/\s+/g, '').replace("'", '').slice(1);
  foo += 1;
  console.log(foo);
  return (
    <div className="product-page product" data-testid='product' category={productCategory} name={itemId} data-isincart={isInCart}>
      <ImgInDiv src={imgSrc} alt={imgAlt} />
      <span>
        {productName}
      </span>
      <p>
        {productPrice}
      </p>
      <button onClick={props.onClickHandler} type="button" >{!isInCart ? 'Add to bag' : 'Remove from bag' }</button>
    </div>
  )
};

export default Product;