import React from "react";

const ShoppingCart = (props) => {
  const { array } = props;

  return (
    <div id="shopping-cart-page" data-testid='shopping-cart-page'>
      <h1 className="cart title">My Shopping Cart</h1>
      <div className="cart product-container">
        Products go here
      </div>
      <div className="cart total-price">
        Total price goes here
      </div>
    </div>
  );
}

export default ShoppingCart;