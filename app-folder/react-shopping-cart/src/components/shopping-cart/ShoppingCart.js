import React, { useEffect } from "react";
import mapList from "../../modules/map-list";

const ShoppingCart = (props) => {
  const { myProductsArray, title, quantHandler } = props;
  // Maps myProductsArray to be a list of components;
  console.log(document.activeElement);

  const thisOne = myProductsArray.forEach((product) => {
    product.props.productObject.children = 
    <div className="quantity-input">
      {/* <button>-</button> */}
      <label>Quantity:{' '}
      <input data-num-id={product.props.num} onChange={quantHandler} placeholder={product.props.productObject.quantity} min={1} type={'number'}></input>
      </label>
      {/* <button>+</button> */}
  </div>
  });
  
  const cartProducts = mapList(myProductsArray, 'inCart');


  // Helper function for totaling price of all items in my cart;
  const myTotal = myProductsArray.reduce((prev, curr) => {
    return prev + curr.props.productObject.productTotal;
  }, 0);


  return (
    <div id="shopping-cart-page" data-testid='shopping-cart-page'>
      <h1 className="cart title">My Shopping Cart</h1>
      <h3>{!title ? 'There are no items in your cart...' : 'Your items:'}</h3>
      <ul className="cart product-container">
        {cartProducts}
      </ul>
      <div className="cart total-price">
        Cart Total: {parseFloat(myTotal).toFixed(2)}
      </div>
    </div>
  );
}

export default ShoppingCart;